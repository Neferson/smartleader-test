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
        <li>
          <IconComponent icon="us-flag-icon" />
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
header {
  background-color: #0D1B3A;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 4px solid #FF616A;

  .container {
    max-width: 1442px;
    width: 100%;

    .header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 32px;
  

      .logo-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
          display: flex;
          text-decoration: none;
          padding: 5px 7px;
          background-color: #7F56D9;
          border-radius: 4px;
          color: white;
          margin: 10px;
          font-weight: 500;
          line-height: 17px;
        }
      }

      .header-control-wrapper {
        display: flex;
        justify-content: space-between;
        ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
          gap: 30px;
          li {
            display: flex;
          }
        }
      }
    }

    nav {
      display: flex;
      justify-content: center;
      ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        gap: 90px;
        
        li {
          display: flex;
          font-size: 16px;
          line-height: 28px;
          font-style: normal;
          font-weight: 300;

          filter: brightness(60%);
          transition: all 0.15s;
          padding: 5px 0;

          &:hover {
            filter: brightness(100%);

          }
        }

        li.active {
          filter: brightness(100%);
          font-weight: 500;
        }
      }
    }
  }
}

@media screen and (min-width: 820px) and (max-width: 1140px) {
  header {
    nav {
      display: none !important;
    }
  }
}

@media screen and (min-width: 100px) and (max-width: 820px) {
  header {
    .header-control-wrapper, nav {
      display: none !important;
    }
  }
}

</style>



