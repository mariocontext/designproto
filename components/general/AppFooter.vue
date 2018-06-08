<template>

  <footer class="footer app-footer" role="contentinfo">
    <div class="app-bottom-nav">
      <b-tabs type="is-toggle" size="is-medium" expanded>
          <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>
          <b-tab-item label="Music" icon="library-music"></b-tab-item>
          <b-tab-item label="Videos" icon="video"></b-tab-item>
      </b-tabs>
    </div>

  </footer>

</template>



<script>

</script>



<style lang="scss">

.footer {
  margin: 0;
  padding:0;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.app-footer {

  @media screen and (min-width: 1088px) {
    .app-bottom-nav {
      display: none;
    }
  }
  
  .tabs a {
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

  .tab-content {
    padding: 0;
  }

  .tabs:not(:last-child) {
    margin-bottom: 0;
  }

}

</style>