<template>

  <header role="banner">

        <nav class="navbar main-navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">

              <div class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
                <span class="navbar-start">
                  <router-link class="navbar-item" lang="en" to="/">Home</router-link>
                  <router-link class="navbar-item" lang="en" to="/services">Services</router-link>
                  <router-link class="navbar-item" lang="en" to="/faq">FAQ</router-link>
                  <router-link class="navbar-item" lang="en" to="/about">About</router-link>
                  <router-link class="navbar-item" lang="en" to="/contact">Contact</router-link>
                </span>
                <span class="navbar-end">
                  <a class="navbar-item" lang="en" href="http://www.facebook.com/" aria-label="Facebook"><b-icon icon="facebook" size="is-small" aria-hidden="true">
                  </b-icon></a>
                  <a class="navbar-item" lang="en" href="http://www.twitter.com/" aria-label="Twitter"><b-icon icon="twitter" size="is-small" aria-hidden="true"></b-icon></a>
                  <a class="navbar-item" lang="en" href="https://www.youtube.com/" aria-label="YouTube"><b-icon icon="youtube-play" size="is-small" aria-hidden="true"></b-icon></a>
                </span>
              </div>
              <a role="button" class="navbar-burger" v-on:click="toggleMenu" v-bind:class="{ 'is-active': menuActive }" aria-label="menu" aria-expanded="false">
                <div>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </div>
              </a>
            </div>
        </nav>   
  </header>

</template>



<script>

  
  module.exports = {

    data: function() {
      return {
        menuActive: false
      }
    },
    methods: {
      toggleMenu: function() {
        this.menuActive= !this.menuActive
      }
    }
    
  }

</script>



<style lang="scss" scoped>

.main-navbar a {
  transition: all 0.5s ease;
    &:hover {
      color: #DDD;
      background-color: #333;
  }
}

nav .navbar-item.nuxt-link-exact-active {
      color: #333;
      background-color: #DDD;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

nav {

  background: #F5F5F5;
  font-size: 1.2rem;

  .navbar-brand {
    margin: 0 auto;
  }

  .navbar-item {
    color: #333;
    height: 5rem;
  }

}

.navbar-burger {
  
  right: 1rem;

  span {
    height: 3px;
  }

}

</style>