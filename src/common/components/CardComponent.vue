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

<style lang="scss" scoped>

 .card {
    background-color: var(--card-background);
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);

    .default{
      padding: 13px 21px;
    }
    
    .header {
      border-bottom: 1px solid var(--card-border-color);
      display: flex;
      justify-content: space-between;
      padding: 13px 21px;

      font-weight: 600;
      font-size: 16px;
      color: #4E5D78;
    }
 }
 
</style>