<script>

export default {
  name: 'IconComponent',
  props: {
    icon: String,
    color: String,
    size: {
      type: [String, Number],
      default: 'sm'
    }
  },

  data () {
    return {
      sizes: {
        'xs': '5',
        'sm': '25',
        'md': '20',
        'lg': '40',
        'xl': '80',
      }
    }
  },

  computed: {
    parseIconSize () {
      return typeof this.size  === 'number' ? this.size : this.sizes[this.size]
    }
  }
}


</script>

<template>
  <i :class="`${icon}`" v-bind="$attrs" />
</template>