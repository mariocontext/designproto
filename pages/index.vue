<template>
  <span>
    <div class="logo-area">
        Logo goes here
    </div>
      <h1 class="has-text-centered">Some Main Title Here</h1>

      <section class="box">
        <h2>Hello World!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit commodi alias, laborum quidem laboriosam earum vero minima perspiciatis aut similique, eius consequuntur praesentium voluptate corporis, excepturi eveniet voluptates consectetur?</p>
        <p>Ipsam ipsa perferendis fuga excepturi dolores labore omnis sint, beatae exercitationem repellendus officia aut rerum aspernatur laborum cumque numquam, tempore aliquid! Sint quia est laudantium qui adipisci voluptatibus unde itaque?</p>
        <p>Quas perferendis asperiores nihil temporibus dolores ipsam, maiores atque cupiditate libero nulla nam tempora aspernatur, accusamus incidunt? Officia commodi cum porro veniam accusamus quam nemo voluptatem aut et, illum impedit?</p>
        <p>Maxime rerum itaque, unde quos quae molestiae id explicabo tenetur minima delectus eveniet ratione. Molestias, minima quos ab aliquid fugit similique nisi odio, ratione itaque, ducimus quod? Obcaecati, voluptate! Molestiae.</p>   
    </section>

      <section>

      <h2>Calls to Action</h2>
					

					<div class="columns is-3 with-icons">

						<div class="column"> 
              <span class="box">
                  <b-icon
                    icon="home"
                    size="is-large">
                  </b-icon>
                  <p>
                    Some CTA
                  </p>
              </span>
            </div>

 						<div class="column"> 
              <span class="box">
                  <b-icon
                    icon="account"
                    size="is-large">
                  </b-icon>
                  <p>
                    Some CTA
                  </p>
                </span>
            </div>

						<div class="column"> 
              <span class="box">
                  <b-icon
                    icon="home"
                    size="is-large">
                  </b-icon>
                  <p>
                    Some CTA
                  </p>
              </span>
            </div>

            <div class="column"> 
              <icon-cta/>
            </div>

					</div>

    </section>

  </span>
</template>

<script>

import IconCta from '~/components/IconCta.vue'

export default {

    layout: 'singlecol',
    components: {
      IconCta
    }

}

</script>

<style lang="scss" scoped>

.logo-area,
.with-icons,
.my-centered-item
 {
  text-align: center;
}
  
</style>
