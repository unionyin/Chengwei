<template id="whole">
  <div id="app">
  <Navbar />
  <br>
  <br>
  <resume />
  <br>
  <Carousel />
  
  <div class="container">
    <router-view/>
     
  </div>
   <footer class="page-footer" id="footer1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Thank You</h5>
                <p class="grey-text text-lighten-4">Thanks for Visiting my site and I would like to hear more from you. Chengwei Yin</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Quick Links</h5>
                <ul>
                  <li><router-link class="grey-text text-lighten-3" to="/">Resume</router-link></li>
                  <li><router-link class="grey-text text-lighten-3" to="/dashboard">View Comment</router-link></li>
                  <li><router-link class="grey-text text-lighten-3" to="/new">Add  Comment</router-link></li>
                  
                 
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © Chengwei Yin 2021 copyrights
          
            </div>
          </div>
        </footer>
  </div>
  
  
</template>

<script>
import Navbar from './components/Navbar'
import Carousel from './components/carousel'
import resume from './components/resume'
export default {
  name: 'app',
  components: {
    Navbar,
    resume,
     Carousel
  }
}
</script>

<style>
#whole{
  background-color: #fdd100;
}
#image02{
  height:200px;
}

#footer1{
  background-color: #A9A9A9;
}
</style>