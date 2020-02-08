<template lang="pug">
    v-app-bar(elevate-on-scroll height="75").d-flex.flex-column
      v-toolbar-title.d-flex.align-items-center
        g-image(alt='Example image' src='~/logo.png' width='150')
        //- g-link(to='/') {{ $static.metadata.siteName }}
      v-spacer
      nav.nav
        g-link.nav__link(to='/') Home
        g-link.nav__link(to='/about/') About
        g-link.nav__link(to='/services/') Services
        g-link.nav__link(to='/books/') Books
        g-link.nav__link(to='/news-events/') News & Events
        g-link.nav__link(to='/articles/') Articles 
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {

  }
}
</script>

<style>

</style>