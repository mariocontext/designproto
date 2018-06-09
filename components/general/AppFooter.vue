<template>

  <footer class="footer app-footer" role="contentinfo">

    <div class="app-bottom-nav buttons has-addons">

      <router-link class="button is-large" to="services">
        <b-icon
                icon="home"
                size="is-medium">
        </b-icon>
        <span class="app-bottom-nav-label">Services</span>
        </router-link>

      <router-link class="button is-large" to="faq">
        <b-icon
                icon="home"
                size="is-medium">
        </b-icon>
        <span class="app-bottom-nav-label">FAQ</span>
      </router-link>

      <router-link class="button is-large" to="about">
        <b-icon
                icon="home"
                size="is-medium">
        </b-icon>
        <span class="app-bottom-nav-label">About</span>
      </router-link>

    </div>

  </footer>

</template>



<script>

</script>



<style lang="scss">
/* TODO: understand why these styles can't be scoped */

.footer {
  margin: 0;
  padding:0;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.app-bottom-nav {

    @media screen and (min-width: 1088px) {
      display: none;
    }

  justify-content: space-between;

  a {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 5rem;
    .icon {
      /* TODO: need to find a better way than using !important */
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  .app-bottom-nav-label {
    font-size: 1rem;
  }
  
  /*
  .nav-footer a {
  flex-direction: column;
  font-size: 1rem;
  transition: all 0.5s ease;
    &:hover {
      color: #DDD;
      background-color: #333;
    }
    .icon:first-child {
      margin-right: 0;
    }
  }
  */


}

</style>