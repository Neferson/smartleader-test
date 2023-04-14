<script>
export default {
  name: "PostCreateModalcomponent",
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    news: {
      type: String,
      required: false,
      default: ''
    }
  },

  mounted () {
    this.$refs.news_textarea.focus();
  },

  data () {
    return {
      dialog: true,
      news: ''
    }
  },

  methods: {
    savePost () {
      this.$emit('savePost', this.news)
      this.news = ''
      this.dialog = false
    },

    closeDialog () {
      this.$emit('closeDialog')
    }
  },

  watch: {
    dialog(val) {
      if(!val) {
        this.closeDialog()        
      }
    }
  }
}
</script>

<template>
  <v-dialog
      v-model="dialog"
      width="500"
      v-bind="$attrs"
    >
      <v-card>
        <v-card-title>
          <span class="text-h6">Criar publicação</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <textarea ref="news_textarea" class="new-publish-text"
          v-model="news"
          placeholder="Whats new with you!"
          ></textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn
            variant="flat"
            color="deep-purple-lighten-1"
            class="ml-3"
            :disabled="!news"
            @click="savePost"
          >
            Publicar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<style lang="scss" scoped>
  textarea.new-publish-text {
    width: 100%;
    height: auto;
    min-height: 100px;
    background: transparent;

    &:focus {
      outline: none;
      border: none;
    }
  }
</style>