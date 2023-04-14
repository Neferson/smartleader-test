<script>
import HeaderComponent from './components/HeaderComponent.vue'
import SurveyComponent from './components/SurveyComponent.vue'
import BacklogComponent from './components/BacklogComponent.vue'
import { ContainerComponent, CardComponent, InputComponent, IconComponent } from '@/common/components/index.js'
import PostCreateModalComponent from './components/PostCreateModalComponent.vue'
import { timeSince } from '@/common/helpers/DateHumanReadableHelper.js'
import PostComponent from '@/components/PostComponent.vue'
export default {
  name: "App",
  components: {
    HeaderComponent,
    ContainerComponent,
    CardComponent,
    InputComponent,
    IconComponent,
    SurveyComponent,
    BacklogComponent,
    PostCreateModalComponent,
    PostComponent
  },

  data () {
    return {
      news: '',
      dialog: false,
      comment: '',
      radio: null,

      posts: [
        {
          id: 1,
          content: "É TEXTÃO E É DE ❤️: A maioria que esta aqui comigo me conhece por causa do meu trabalho. Talvez vocês não saibam, mas nos momentos mais complicados da minha carreira, vocês estavam aqui me mandando tanta energia positiva que me ajudaram a não desistir! E é por isso que sempre que eu posso faço questão de agradecer a parceria de vocês! 🙏🏼E hoje, nesse primeiro de maio, eu agradeço pelo meu trabalho e por vocês me ajudarem a realiza-lo sempre com um sorriso no rosto. Queria MUITO que todos os trabalhadores desse Brasilzão fossem respeitados e valorizados como merecem! Parece uma realidade distante, né? Mas não custa sonhar! Parabéns para você que luta diariamente para trabalhar e levar o sustento da sua família mesmo diante de todas as dificuldades! E para você que não esta trabalhando: coragem e persistência!!! Dias melhores virão. ✨...",
          likes: 103,
          count_comments: 67,
          share: 405,
          created_at: new Date('2023-04-12T16:00:04.657Z'),
          created_at_to_human: this.timeSince(new Date('2023-04-12T16:00:04.657Z'), new Date()),
          comment_temp: '',
          comments: [
            {
              id: 1,
              content: "É TEXTÃO E É DE ❤️: A maioria que esta aqui comigo me conhece por causa do meu trabalho. Talvez vocês não saibam, mas nos momentos mais complicados da minha carreira, vocês estavam aqui me mandando tanta energia positiva que me ajudaram a não desistir! E é por isso que sempre que eu posso faço questão de agradecer a parceria de vocês! 🙏🏼E hoje, nesse primeiro de maio, eu agradeço pelo meu trabalho e por vocês me ajudarem a realiza-lo sempre com um sorriso no rosto. Queria MUITO que todos os trabalhadores desse Brasilzão fossem respeitados e valorizados como merecem! Parece uma realidade distante, né? Mas não custa sonhar! Parabéns para você que luta diariamente para trabalhar e levar o sustento da sua família mesmo diante de todas as dificuldades! E para você que não esta trabalhando: coragem e persistência!!! Dias melhores virão. ✨...",
            }
          ]
        }
      ]
    }
  },

  mounted () {
    this.updatePostDateString()
  },

  methods: {
    onFocus(event) {
      this.dialog = true
    },

   savePost (val) {
    this.posts.unshift({
      id: this.posts.length + 1,
      content: val,
      likes: 0,
      count_comments: 0,
      share: 0,
      created_at: new Date(),
      created_at_to_human: this.timeSince(new Date(), new Date()),
      comment_temp: '',
      comments: []
    })
   },

   saveComment(post_id, comment) {
    let post = this.posts.find(post => post.id === post_id)
    post.comments.unshift({
      id: post.comments.length + 1,
      content: comment,
      created_at: new Date()
    })

    post.comment_temp = ''
    post.count_comments += 1
   },

   deletePost(post) {
    const postIndex = this.posts.indexOf(post)
    this.posts.splice(postIndex, 1)
   },
   timeSince,

   updatePostDateString () {
    setInterval(() => {
      this.posts.forEach((post, index) => {       
        this.posts[index].created_at_to_human = 
        this.timeSince(new Date(post.created_at), new Date())
      })
    }, 15000)
   }

  }
}

</script>

<template>
    <HeaderComponent />
    <ContainerComponent class="">
      <CardComponent
        isMenuContent
        class="mt-32 p-8"
      >
        <ul class="content-card-menu">
          <li>
            <a href="#" class="active">
              Inicio
            </a>
          </li>

          <li>
            <a href="#">
              Meu Dashboard
            </a>
          </li>

          <li>
            <a href="#">
              Chat
            </a>
          </li>

          <li>
            <a href="#">
              Files
            </a>
          </li>
        </ul>
      </CardComponent>

      <div class="content-wrapper">
        <div class="content">
          <CardComponent class="">
            <div class="wrapper-whatsnew">
              <IconComponent icon="avatar-news-icon" />

              <InputComponent
                name="news" 
                v-model="news" 
                placeholder="What's new with you?"
                @click="onFocus"
              />
            </div>
            <div>
              <ul class="post-type-menu">
                <li>
                  <IconComponent icon="video-icon" /> Live Video
                </li>
                 <li>
                  <IconComponent icon="image-icon" /> Image/Video
                </li>
                 <li>
                  <IconComponent icon="feeling-icon" /> Feeling/Activity
                </li>
              </ul>
            </div>
          </CardComponent>

          <PostComponent
            v-model="posts"
            @saveCommentEmit="saveComment"
            @deletePostEmit="deletePost"
          />
        </div>
        <aside>
          <SurveyComponent />
          <BacklogComponent />
        </aside>
      </div>
    </ContainerComponent>

    <post-create-modal-component
      v-if="dialog"
      @savePost="savePost"
      @closeDialog="this.dialog = false"
    />
</template>

<style lang="scss" scoped>

ul.content-card-menu {
  display: flex;
  gap: 10px;
  li{
    list-style: none;

    a{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      color: var( --content-card-menu-color);
      border-radius: 6px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      background: var( --content-card-menu-background);
      transition: all 0.18s;
      

      &:hover{
        background: var(--content-card-menu-hover-background);
        font-weight: 600;
        color: #344054;
      }
    }

    a.active {
      background: #F9FAFB;
      font-weight: 600;
      color: #344054;
    }
  }
}

.content-wrapper {
  display: flex;
  gap: 22px;

  .content {
    width: 752px;
    margin-top: 16px;
  }

  aside{
    width: 100%;
    max-width: 456px;
    margin-top: 16px;
  }
}

.wrapper-whatsnew {
  display: flex;
  gap: 10px;
  align-items: center;

  .input-wrapper {
    width: 100%;
    padding-right: 10px;
  }
}

ul.post-type-menu {
  border-top: solid 1px #FAFBFC;
  margin-top: 19px;
  padding-top: 19px;
  display: flex;
  gap: 40px;
  list-style: none;
  align-content: center;

  li {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: #B0B7C3;
    align-items: center;
  }
}

@media screen and (min-width: 100px) and (max-width: 768px) {
  .content-wrapper {
    display: block;
    gap: 22px;

    .content {
      width: 100%;
    }

    aside{
      width: 100%;
      max-width: 100%;
    }
  }
}



</style>
