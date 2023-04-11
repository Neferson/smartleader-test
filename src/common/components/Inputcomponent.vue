<script>
export default {
  name: 'InputComponent',

  props: {
    name: {
      type: String,
      required: true
    },

    modelValue: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: false,
      default: () => ''
    },

    placeholder: {
      type: String,
      required: false,
      default: () => ''
    }
  },

  methods: {
    onInput (event) {
      this.$emit('update:modelValue', event.target.value)
    },

    onChange (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>


<template>
  <div class="input-wrapper">
    <input
      v-bind="$attrs"
      type="text"
      :name="name"
      :value="modelValue"
      @input="onInput" 
      @change="onChange"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  input {
    display: block;
    width: 100%;
    max-width: 100%;
    border-radius: 15px;
    background: #FAFBFC;
    color: #B0B7C3;
    height: 34px;
    border: none;
    padding-left: 15px;

    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 29px;

    &:focus {
      outline: none !important;
      border: none
    }
  }
}
</style>