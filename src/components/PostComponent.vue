<script>
import { CardComponent, InputComponent, IconComponent } from '@/common/components/index.js'
export default {
  name: 'PostComponent',

  components: {
    CardComponent,
    InputComponent,
    IconComponent
  },

  props: {
    modelValue: Array
  },

  methods: {
    handleDeletePost(post) {
      this.$emit('deletePostEmit', post)
    },
    handleSaveComment(post_id, comment) {
      this.$emit('saveCommentEmit', post_id, comment)
      this.returnCommentTextareaSize(`comment_textarea_${post_id}`)
    },

    resizeCommentTextarea(ref_elemnet) {
      let element = this.$refs[ref_elemnet][0];
      element.style.height = "18px";
      element.style.height = element.scrollHeight + "px";
    },

    returnCommentTextareaSize (ref_elemnet) {
      let element = this.$refs[ref_elemnet][0];
      element.style.height = "18px";
    }
  }
}
</script>

<template>
  <CardComponent class="mt-4" v-for="post in  modelValue" :key="`post-${post.id}`">
    <template #header>
      <div class="publisher-profile">
        <IconComponent icon="avatar-news-icon" />
        <p class="ml-2">Bruno Delorence <small>{{ post.created_at_to_human }}</small></p>
      </div>

      <v-btn variant="text" size="x-small" icon="">
        <IconComponent icon="ellipsis-icon" />
        <v-menu activator="parent">
          <v-list>
            <v-list-item value="1">
              <v-list-item-title @click.prevent="handleDeletePost(post)">
                Deletar
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </template>
    <template #default>
      <div>
        <span>
          {{ post.content}}
        </span>
      </div>

      <div class="wrapper-action">
        <ul>
          <li>
            <IconComponent icon="like-icon" />
            <span>{{ post.likes }} Likes</span>
          </li>

          <li>
            <IconComponent icon="comment-icon" />
            <span>{{ post.count_comments }} Comments</span>
          </li>

          <li>
            <IconComponent icon="reply-icon" />
            <span>{{ post.share }} Share</span>
          </li>
        </ul>
      </div>

      <div class="wrapper-comments">
        <div class="leave-comment">
          <IconComponent icon="avatar-news-icon" />
          <div class="comment">
              <textarea
                v-model="post.comment_temp"
                :ref="`comment_textarea_${post.id}`"
                @input="resizeCommentTextarea(`comment_textarea_${post.id}`)"
              ></textarea>
              <div class="save-comment">
                <span class="error text-red"></span>                        
                <v-btn 
                  icon="mdi-send"
                  size="x-small"
                  variant="text"
                  color="#7F56D9"
                  class="mb-5"
                  @click.prevent="handleSaveComment(post.id, post.comment_temp)"
                  :disabled="!post.comment_temp">                         
                </v-btn>
              </div>
          </div>
        </div>

        <div
          class="comment-item"
          v-for="comment in post.comments"
          :key="`comment-${comment.id}`"
        >
          <IconComponent icon="avatar-news-icon" />                 
          <div class="comment">
            {{ comment.content }}
          </div>
        </div>
      </div>
    </template>
  </CardComponent>
</template>

<style lang="scss" scoped>

.publisher-profile {
  display: flex;
  align-items: center;
  
  p {
    color: #4E5D78;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    small {
      display: block;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #B0B7C3;
    }
  }
}

.wrapper-action {
  ul {
  display: flex;
  gap: 40px;
  margin: 20px 0;

    li{
      display: flex;
      gap: 10px;
      align-items: center;

      span {
        font-weight: 400;
        font-size: 12px;
        color: var(--action-link-color);
      }

      &:first-child {
        span {
          color: #377DFF;
        }
      }
    }
  }

}

.wrapper-comments {

  .leave-comment {
    display: flex;
    gap: 10px;
    align-items: flex-start;

    .comment {
      border: 1px solid var(--comment-border);
      border-radius: 12px;
      padding: 10px 10px 0 10px;
      width: 100%;
      display: block;

      textarea {
        display: block;
        width: 100%;
        height: 30px;
        min-height: 30px;
        background: transparent;
        overflow: hidden;
        resize: none;
        color: var(--comment-text);

        &:focus {
          outline: none;
          border: none;
        }
      }

      .save-comment {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4px;
        height: 25px;

        span {
          display: block;
          padding-bottom: 8px;
        }
      }
    }
  }

  .comment-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-top: 15px;
    .comment {
      background: var(--comment-item-background);
      display: block;
      padding: 10px;
      border-radius: 10px;
      color: var(--text-color);
    }
  }
}

@media screen and (min-width: 100px) and (max-width: 768px) {
  .wrapper-action {
    ul {
      gap: 20px;
    }
  }
}
</style>