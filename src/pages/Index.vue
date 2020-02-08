<template lang="pug">
  layout
    v-carousel(cycle='' height='400' hide-delimiter-background show-arrows-on-hover)
      v-carousel-item(v-for="(item,index) in items" :key="index" :src="item.src")
          v-row.fill-height(align='center' justify='center')
            .display-3.blue(style="border: 1px solid black") {{ item.name }}
    // Learn how to use images here: https://gridsome.org/docs/images
    //- h1 Luthfan&apos;s Pet Project
    //- p
    //-   | Developing a new website!
    //- p {{$page.allWordPressPost.totalPages}}
    //- li(v-for="{node} in $page.allWordPressPost.edges")
    //-   g-link.nav__link(:to="node.path")  {{node.title}}
</template>

<script>
export default {
  name: 'LemonDemon',
  data() {
    return {
        items: [

          {
            name: 'Ethnography',
            src: 'http://etnomark.com/images/slide-pics/resecrh.jpg'
          },
          {
            name: 'ZOYA Brand Transformation',
            src: 'http://etnomark.com/images/slide-pics/zoya.jpg'
          },
          {
            name: 'IPB Rebranding Workshop',
            src: 'http://etnomark.com/images/slide-pics/ipb%20workshop_2.jpg'
          }
        ],
    }
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
<!--
<page-query>
query Home {
  allWordPressPost {
    pageInfo {
      totalPages
    }
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>
-- >
