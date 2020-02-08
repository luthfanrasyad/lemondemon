<template lang="pug">
  v-app.layout
    Header
    v-content.content
      slot
    Footer.pa-10


</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header, Footer
  },
  mounted () {

    }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 10vh;
  border: 1px solid black;
  padding-left: 20px;
  padding-right: 20px;
}
.nav__link {
  margin-left: 20px;
}
.content {
  padding: 20px;
  min-height:80vh;
}
</style>
