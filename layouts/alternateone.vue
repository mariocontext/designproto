<template>
<!-- This is an example of an alternate layout that design experiments might use. -->
  <span>
    <main-header/>

    <div class="main-content">
      <main>

        <section class="intro-content">
          <p>Intro content goes here</p>
        </section>

        <aside class="fresh-content">
          <p>Fresh content can go here</p>
        </aside>

        <section class="general-content">
          <nuxt/>
        </section>

        <article class="daily-content">
          <p>Article content can go here</p>
        </article>

        <section class="sub-content">
          <p>Subcriber content could go here</p>
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


<style lang="scss" scoped>

  main {
    section, article, aside {
      padding: 1rem;
      background: #333;
      color: #FFF;
      margin: 1rem;
    }
  }

</style>