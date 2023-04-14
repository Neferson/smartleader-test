<script>
  export default{
    name: 'CardComponent',
    props: {
      isMenuContent: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>

<template>
  <div class="card">
    <div class="header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div
      :class="`${isMenuContent ? '' : 'default'}`"
      v-if="$slots.default"
    >
      <slot></slot>
    </div>
  </div>
</template>
