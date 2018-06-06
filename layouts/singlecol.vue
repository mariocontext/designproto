<template>
<!-- each component needs a single containing element and thus using span -->
  <span>
    <main-header/>

    <div class="main-content container is-fluid">
      <main>

        <section class="general-content">
          <nuxt/>
        </section>

      </main>
    </div>

    <main-footer/>

</span>

</template>

<script>
  
import MainHeader from '../components/general/MainHeader.vue'
import MainSidebar from '../components/general/MainSidebar.vue'
import MainFooter from '../components/general/MainFooter.vue'
  
export default {
  
  components: {
    MainHeader,
    MainSidebar,
    MainFooter
  }
  
}
  
</script>


<style scoped>

</style>