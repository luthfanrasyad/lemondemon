<template lang="pug">
    div
        v-card(max-width="400" min-height="420" outlined).mx-auto
            v-img(:src="img" height="200")
            v-card-title {{title}}
            v-card-text.text--primary
                | {{description}}
            v-card-actions
                v-btn(text) More Details
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
        type: String,
        default: 'Title',
    },
    description: {
        type: String,
        default: 'Description',
    },
    img: {
        type: String,
        default: '',
    }
  },
  data () {
    return {
       
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style>

</style>