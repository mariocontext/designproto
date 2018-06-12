<template>
<!-- each component needs a single containing element and thus using span -->
  <span>
    <app-header/>

    <div class="main-content container is-fluid">
      <main>

        <section class="general-content">
          <nuxt/>
        </section>

      </main>
    </div>

    <app-footer/>

</span>

</template>

<script>
  
import AppHeader from '../components/general/AppHeader.vue'
import AppFooter from '../components/general/AppFooter.vue'
  
export default {
  
  components: {
    AppHeader,
    AppFooter
  }
  
}
  
</script>


<style lang="scss" scoped>

</style>