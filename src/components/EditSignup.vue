<template>
  <div id="new-signup">
    <h3>Edit Your Comments</h3>
    <div class="row">
    <form @submit.prevent="updateSignup" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="signup_id" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="nationality" required>
        </div>
      </div>
      <div class="row">
        <div class="input field col s12">
          <input type="text" v-model="comment" required>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
  </div>
</template>

<script>
  import db from './firebaseinit'
  export default {
    name: 'edit-signup',
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
      updateSignup () {
        db.collection('signups').where('signup_id', '==', this.$route.params.signup_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              signup_id: this.signup_id,
              name: this.name,
              nationality: this.nationality,
              comment: this.comment
            })
            .then(() => {
              this.$router.push({ name: 'view-signup', params: { signup_id: this.signup_id }})
            });
          })
        })
      }
    }
  }
</script>