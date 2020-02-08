<template lang="pug">
  layout
    v-row
      v-carousel(cycle height="auto" hide-delimiter-background show-arrows-on-hover)
        v-carousel-item(v-for="(item,index) in items" :key="index" :src="item.src")
            v-row.fill-height(align='center' justify='center')
              .body-1.blue(style="border: 1px solid black") {{ item.name }}
    v-row.my-10.px-10
      v-divider(darks).gray-light
    v-row.d-flex.justify-center
      div.px-10
        h1
          i
            | "Branding is a process, not an event"
    v-row.my-10.px-10
      v-divider(darks).gray-light
    
    v-row.ma-10
      v-col.px-0(v-for="category in categories")
        CategoryCard(:title="category.title" :description="category.description" :img="category.img")

    //- h1 Luthfan&apos;s Pet Project
    //- p
    //-   | Developing a new website!
    //- p {{$page.allWordPressPost.totalPages}}
    //- li(v-for="{node} in $page.allWordPressPost.edges")
    //-   g-link.nav__link(:to="node.path")  {{node.title}}
</template>

<script>
import CategoryCard from '~/components/CategoryCard.vue'

export default {
  name: 'LemonDemon',
  components: {CategoryCard},
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
        categories: [
          {
            title: "Latest News",
            description: "Kali ini 15 agustus 2018, ibu amalia menjadi pembicara di APCLI yaitu Asosiasi Profesional Coach Loop Indonesia, peserta merupakan profesional coaching dari berbagai...",
            img: "http://etnomark.com/images/gallery/blog/buat%20event%20and%20news.jpg",
          },
          {
            title: "Books",
            description: "Amalia E. Maulana sebagai seorang pakar di bidang Branding dan MarCom menjadi pembicara dalam Workshop ‘TIPS PRAKTIS Menjadi MARCOM MANAGER yang EFEKTIF’..",
            img: "http://etnomark.com/images/gallery/blog/post-pic2.jpg",
          }, 
          {
            title: "Articles",
            description: "Tahun ini adalah tahun kesepuluh saya mencanangkan diri sebagai Agent of Change di bidang Edukasi Branding. Dalam rangka mensyukuri perjalanan kesepuluh tahun ini lah perusahaan...",
            img: "http://etnomark.com/images/gallery/blog/1.jpg",
          },
        ]
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
.caro {

}
.caro-item {
  width:100%;
  height:100%;
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
