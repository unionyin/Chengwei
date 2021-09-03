<template>
<nav>
    <div class="nav-wrapper" id="logo">
      <router-link to="/" class="brand-logo center"> <img class=" circle responsive-img "  id=image01 src="@/assets/LOGO.png"></router-link>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Resume</a></li>
        <li><router-link to="/dashboard">Comment</router-link></li>
      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        
      </ul>
    </div>
  </nav>

</template>

<style >
#logo {
  background: #fdd100;
  height:110px;

}

#image01 {

  margin: 10px;
}
</style>
