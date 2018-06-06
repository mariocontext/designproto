<template>

  <span class="sidebar-top">
    <section class="section twitter-timeline-area">
      <h2>Sidebar</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at ducimus maxime debitis tenetur odit consectetur est. Velit nulla ab id natus debitis laboriosam aut quo possimus repellat. Architecto, blanditiis.</p>
      <p>Molestiae, recusandae, blanditiis beatae error rem doloremque veritatis tenetur, tempore modi iste odio pariatur qui omnis ex illum reprehenderit. Voluptatum asperiores beatae cum consectetur, sunt commodi. Ad dolorem impedit modi.</p>
      <p>Fugit odit dicta veniam consectetur, maiores qui deleniti accusamus! Molestiae, perspiciatis necessitatibus ab facilis ratione earum deserunt officia provident laudantium. Magni expedita esse tempore dolores animi eaque saepe nemo aliquid?</p>
    </section>
    
  </span>

</template>



<script>

</script>



<style scoped>

/*
.sidebar-top {
    background: url("~/assets/images/gaad-logo-greyscale.png") top center no-repeat;
    padding-top: 250px;
    display: block;
    background-size: contain;
}
*/

.twitter-timeline-area {
    border: 3px solid #DDD;
    border-radius: 9px;
}

/* could be nested in timeline area above but linter complains */
@media only screen and (min-width: 968px)  {
  .twitter-timeline-area {
  margin-top: 1rem;
  }
}



</style>