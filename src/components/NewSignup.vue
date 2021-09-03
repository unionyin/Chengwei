<template>
  <div id="new-signup">
    <h3 id="personal">Personal Information</h3>
    <div class="row">
    <form @submit.prevent="saveSignup" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="signup_id" required>
          <label>Signup ID</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
          <label>Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="nationality" required>
          <label>Nationality</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="comment" required>
          <label>Comment</label>
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
      name: 'new-signup',
      data () {
        return {
          signup_id: null,
          name: null,
          nationality: null,
          comment: null
        }
      },
      methods: {
        saveSignup () {
          db.collection('signups').add({
            signup_id: this.signup_id,
            name: this.name,
            nationality: this.nationality,
            comment: this.comment
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/')
          })
          .catch(error => {
            console.error('Error adding data: ', error)
          })
        }
      }
    }
</script>
<style >
#personal {
  color:#fdd100;
}
</style>