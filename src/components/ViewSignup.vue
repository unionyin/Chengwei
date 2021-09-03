<template>
  <div id="view-signup">
    <ul class="collection with-header">
      <li class="collection-header"><h4>{{name}}</h4></li>
      <li class="collection-item">Signup ID: {{signup_id}}</li>
      <li class="collection-item">Nationality: {{nationality}}</li>
      <li class="collection-item">Comment: {{comment}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteSignup" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{ name: 'edit-signup', params: { signup_id: signup_id }}" class="btn-floating btn-large blue">
        Edit
      </router-link>
    </div>
  </div>
</template>

<script>
  import db from './firebaseinit'
  export default {
    name: 'view-signup',
    data () {
      return {
        signup_id: null,
        name: null,
        nationality: null,
        comment: null
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('signups').where('signup_id', '==', to.params.signup_id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.signup_id = doc.data().signup_id
            vm.name = doc.data().name
            vm.nationality = doc.data().nationality
            vm.comment = doc.data().comment
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('signups').where('signup_id', '==', this.$route.params.signup_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.signup_id = doc.data().signup_id
            this.name = doc.data().name
            this.nationality = doc.data().nationality
            this.comment = doc.data().comment
          })
        })
      },
      deleteSignup () {
        if(confirm ('Are you sure?')) {
          db.collection('signups').where('signup_id', '==', this.$route.params.signup_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push('/')
            })
          })
        }
      }
    }
  }
</script>