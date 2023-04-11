<script>
import HeaderComponent from './components/HeaderComponent.vue'
import { ContainerComponent, CardComponent, InputComponent, IconComponent } from './common/components/index.js'

export default {
  name: "App",
  components: {
    HeaderComponent,
    ContainerComponent,
    CardComponent,
    InputComponent,
    IconComponent
  },

  data () {
    return {
      news: ''
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
      <div class="content-wrapper mt-16">
        <div class="content">
          <CardComponent class="">
            <div class="notice-wrapper">
              <IconComponent icon="avatar-news-icon" />

              <InputComponent
                name="news" 
                v-model="news" 
                placeholder="What's new with you?"
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

          <CardComponent class="mt-25">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum alias perferendis ratione, sequi magni blanditiis modi porro minima qui obcaecati inventore sit sint illo soluta? dolor sit amet consectetur adipisicing elit. Harum alias perferendis ratione, sequi magni blanditiis modi porro minima qui obcaecati inventore sit sint illo soluta? Saepe perspiciatis est sequi debitis?</span>
          </CardComponent>
        </div>
        <aside>          
          <CardComponent class="">
            <template #header>
              Enquetes
              <img src="@/assets/ellipsis-icon.svg" />
            </template>
            <template #default>
              <div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum alias perferendis ratione, sequi magni blanditiis modi porro minima qui obcaecati inventore sit sint illo soluta? dolor sit amet consectetur adipisicing elit. Harum alias perferendis ratione, sequi magni blanditiis modi porro minima qui obcaecati inventore sit sint illo soluta? Saepe perspiciatis est sequi debitis?</span>
              </div>
            </template>
          </CardComponent>
        </aside>
      </div>
    </ContainerComponent>
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
      color: #667085;
      border-radius: 6px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      background: #fff;
      transition: all 0.18s;
      

      &:hover{
        background: #F9FAFB;
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
  }

  aside{
    width: 100%;
    max-width: 456px;
  }
}

.notice-wrapper {
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

</style>
