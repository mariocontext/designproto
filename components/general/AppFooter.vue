<template>

  <footer class="footer app-footer" role="contentinfo">

    <b-tabs type="is-toggle" size="is-medium" expanded>
        <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>
        <b-tab-item label="Music" icon="library-music"></b-tab-item>
        <b-tab-item label="Videos" icon="video"></b-tab-item>
    </b-tabs>

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
  
  .tabs a {
  flex-direction: column;
  font-size: 1rem;
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