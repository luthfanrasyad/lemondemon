<template lang="pug">
  layout
    // Learn how to use images here: https://gridsome.org/docs/images
    g-image(alt='Example image' src='~/favicon.png' width='135')
    h1 Luthfan&apos;s Gridsome
    p
      | This is a project that will hopefully help me master my craft {{this.title}}
</template>

<script>
export default {
  name: 'LemonDemon',
  data() {
    return {
      title: 'Hello, world!'
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
