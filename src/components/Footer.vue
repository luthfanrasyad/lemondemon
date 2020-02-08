<template lang="pug">
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
      v-row.teal
        v-col
          p.body-2 © 2016 ETNOMARK - Etnography Marketing Consultant. All Rights Reserved.
</template>

<script>
export default {
  name: 'Footer',
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