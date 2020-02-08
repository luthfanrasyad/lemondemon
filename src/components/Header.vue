<template lang="pug">
    div
        v-app-bar(elevate-on-scroll height="75" v-if="isDesktop").d-flex.flex-column
            v-toolbar-title.d-flex.align-items-center
                g-image(alt='Example image' src='~/logo.png' width='150')
                //- g-link(to='/') {{ $static.metadata.siteName }}
            v-spacer
            nav.nav
                g-link.nav__link(v-for="item in items" :to="item.to") {{item.title}}

        v-app-bar(elevate-on-scroll height="75" v-else).d-flex
            v-app-bar-nav-icon(@click="drawer = !drawer")
            v-toolbar-title.d-flex.align-items-center.align-self-center
                g-image(alt='Example image' src='~/logo.png' width='150')
        v-navigation-drawer(v-model="drawer" app v-if="!isDesktop")
            v-list-item(v-for="item in items")
                v-list-item-content
                    v-list-item-title
                        g-link.nav__link(:to="item.to") {{item.title}}
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
        drawer: false,
        message: 'Try change me!',
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
            { title: 'About', icon: 'mdi-image',to: '/about' },
            { title: 'Services', icon: 'mdi-help-box', to: '/services' },
            { title: 'Books', icon: 'mdi-help-box', to: '/books' },
            { title: 'News & Events', icon: 'mdi-help-box', to: '/news-events' },
            { title: 'Articles', icon: 'mdi-help-box', to: '/articles' },
            ],
        right: null,
    }
  },
  computed: {
      isDesktop() {
          return this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm
          console.log(this.$vuetify.breakpoint)
      }
  },
  methods: {

  }
}
</script>

<style>
.v-toolbar__content {
    display: flex;
    width: 100%;
}
.nav__link {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
}
</style>