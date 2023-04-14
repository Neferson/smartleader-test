<script>
import  IconComponent from '../common/components/IconComponent.vue'
export default {
  name: 'HeaderComponent',

  components: {
    IconComponent
  },

  data () {
    return {

    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="header-top">
      <div class="logo-wrapper">
        <img src="../assets/logo.svg" />
        <a href="">Desativar impersonar</a>
      </div>
      <div class="header-control-wrapper">
       <ul>
        <li>
          <!-- <img src="../assets/search-icon.svg" /> -->
          <IconComponent icon="search-icon" class="" />
        </li>
        <li>
          <IconComponent icon="help-icon" />
        </li>
        <li>
          <IconComponent icon="bell-icon" />
        </li>
        <li class="flag-select">
          <v-menu open-on-hover location="bottom" class="pl-4">
            <template v-slot:activator="{ props }" >
              <div v-bind="props" >
                <IconComponent icon="us-flag-icon"/>
                <IconComponent icon="arrow-down-icon" class="ml-2"/>
              </div>
            </template>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <IconComponent  icon="us-flag-icon"/>
                </template>
                <v-list-item-title></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><IconComponent icon="us-flag-icon"/></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><IconComponent icon="us-flag-icon"/></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
        <li class="avatar">
          <img src="../assets/avatar-icon.svg" />
        </li>
       </ul>
      </div>
      </div>

      <nav>
        <ul>
          <li class="menu-item active">Inicio</li> 
          <li class="menu-item">Equipe</li> 
          <li class="menu-item">Metas</li> 
          <li class="menu-item">OKR</li> 
          <li class="menu-item">Desempenho</li> 
          <li class="menu-item">Feedback</li> 
          <li class="menu-item">Sucessão</li> 
          <li class="menu-item">Treinamento</li>
        </ul>
      </nav>


    </div>
  </header>
</template>

<style lang="scss" scoped>


</style>



