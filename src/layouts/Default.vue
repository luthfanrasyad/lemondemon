<template lang="pug">
  v-app.layout
    header.header
      strong
        g-link(to='/') {{ $static.metadata.siteName }}
      nav.nav
        g-link.nav__link(to='/') Home
        g-link.nav__link(to='/about/') About
        g-link.nav__link(to='/services/') Services
        g-link.nav__link(to='/books/') Books
        g-link.nav__link(to='/news-events/') News & Events
        g-link.nav__link(to='/articles/') Articles 
    div.content.mt-0
      slot

</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
  height: 80px;
  border: 1px solid black;
  padding-left: 20px;
  padding-right: 20px;
}
.nav__link {
  margin-left: 20px;
}
.content {
  border: 1px solid black;
  padding: 20px;
}
</style>
