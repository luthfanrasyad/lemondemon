<template lang="pug">
    div
        v-footer.pa-0.grey-1.px-10
            v-row.pa-5
                v-col(cols="12" sm="4")
                    p About Us
                    p.body-2 ETNOMARK Consulting telah terbukti sebagai Agen perubahan yang membantu perusahaan dalam beradaptasi di dunia baru ini, menjadikan perusahaan lebih dekat dan memahami Customernya.
                v-col(cols="12" sm="4")
                    p Menu
                    p
                        ul(style="list-style: none;").pl-0
                            li.body-2.ml-0(v-for="item in items")
                                g-link.nav__link(:to="item.to") {{item.title}}
                v-col(cols="12" sm="4")
                    p Contact Us
                    p.body-2 PT ETNOMARK CONSULTING Jalan Maleo XII Blok JC 1 No.28 Bintaro Jaya Sektor 9, Tangerang 15229, Indonesia Phone/Fax : 021 – 7450958email : info@etnomark.com
        v-footer(width="100%").white.px-10
            v-row.d-flex.justify-start.px-5
                p.body-2.ma-0.text-center © 2016 ETNOMARK - Etnography Marketing Consultant. All Rights Reserved.
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
        message: 'Try change me!',
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
            { title: 'About', icon: 'mdi-image',to: '/about' },
            { title: 'Services', icon: 'mdi-help-box', to: '/services' },
            { title: 'Books', icon: 'mdi-help-box', to: '/books' },
            { title: 'News & Events', icon: 'mdi-help-box', to: '/news-events' },
            { title: 'Articles', icon: 'mdi-help-box', to: '/articles' },
        ],

    }
  },
  methods: {

  }
}
</script>

<style>

</style>