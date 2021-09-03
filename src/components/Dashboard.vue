<template>
    <div id="dashboard">
         <ul class="collection with-header">
      <li class="collection-header"><h5>Comments and Chats</h5></li>
      <li v-for="signup in signups" v-bind:key="signup.id" class="collection-item">
        <div class="chip">{{signup.nationality}}</div>
        {{signup.name}} :{{signup.comment}}
         <router-link class="secondary-content" v-bind:to="{ name: 'view-signup', params: { signup_id: signup.signup_id }}"><i class="fas fa-user-edit"></i></router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large blue">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import db from './firebaseinit'
  export default {
    name: 'dashboard',
    data() {
      return {
        signups: [],
        loading: true
      }
    },
    created () {
      db.collection('signups').orderBy('nationality').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const signup = {
            'id': doc.id,
            'signup_id': doc.data().signup_id,
            'name': doc.data().name,
            'nationality': doc.data().nationality,
            'comment': doc.data().comment
          }
          this.signups.push(signup)
        })
      })
    }
  }
  
</script>