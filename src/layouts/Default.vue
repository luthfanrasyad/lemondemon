<template lang="pug">
  v-app.layout
    v-app-bar(elevate-on-scroll app).d-flex.flex-column
      v-toolbar-title
        g-link(to='/') {{ $static.metadata.siteName }}
      v-spacer
      nav.nav
        g-link.nav__link(to='/') Home
        g-link.nav__link(to='/about/') About
        g-link.nav__link(to='/services/') Services
        g-link.nav__link(to='/books/') Books
        g-link.nav__link(to='/news-events/') News & Events
        g-link.nav__link(to='/articles/') Articles 
    v-content.content.mt-10
      slot
    v-footer(dark).pa-0
      v-row.pa-5
        v-col(col='4')
          p About Us
          p.body-2 ETNOMARK Consulting telah terbukti sebagai Agen perubahan yang membantu perusahaan dalam beradaptasi di dunia baru ini, menjadikan perusahaan lebih dekat dan memahami Customernya.
        v-col(col='4')
          p Menu
          ul
            li.body-2
              g-link.nav__link(to='/about/') About
            li.body-2
              g-link.nav__link(to='/services/') Services
            li.body-2
              g-link.nav__link(to='/books/') Books
            li.body-2
              g-link.nav__link(to='/news-events/') News & Events
            li.body-2
              g-link.nav__link(to='/articles/') Articles 
        v-col(col='4')
          p Contact Us
          p.body-2 PT ETNOMARK CONSULTING Jalan Maleo XII Blok JC 1 No.28 Bintaro Jaya Sektor 9, Tangerang 15229, Indonesia Phone/Fax : 021 – 7450958email : info@etnomark.com
      v-row.teal.pl-5.pr-5
        v-col
          p.body-2 © 2016 ETNOMARK - Etnography Marketing Consultant. All Rights Reserved.

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
