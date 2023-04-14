<script>
import { CardComponent, IconComponent } from '@/common/components/index.js'

export default {
  name: "Backlogcomponent",
  components: {
    CardComponent,
    IconComponent
  },

  data () {
    return {
      items: [
        {
          id: 1,
          color: '#F3EAFF',
          icon: 'mdi-pencil',
          title: 'Assinaturas Digitais',
          icon_color: '#9241F8',
          quantity: 52,          
          time: '2 mins ago',
        },
        {
          id: 2,
          color: 'blue-lighten-5',
          icon_color: '#377DFF',
          icon: 'mdi-checkbox-outline',
          title: 'Avaliações',
          quantity: 2,
          time: '2 mins ago',
        },
        {
          id: 3,
          color: 'light-blue-lighten-5',
          icon_color: '#00CCFF',
          icon: 'mdi-play-circle-outline',
          title: 'Treinamentos',
          quantity: 18,
          time: '2 mins ago',
        },
        {
          id: 4,
          color: 'deep-orange-lighten-5',
          icon_color: '#FF7A00',
          icon: 'mdi-flag-outline',
          title: 'Metas',
          quantity: 6,
          time: '2 mins ago',
          variant: 'tonal'
        },
      ]
    }
  }
}
</script>

<template>
  <CardComponent class="mt-4 backlog">
    <template #header>
      <p class="title-header">Pendências <span>2</span></p>
      <IconComponent icon="ellipsis-icon" />
    </template>

    <template #default>
        <v-timeline
        side="end"
        truncate-line="both"
        density="compact"
        class="custom-timeline"
      >
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :dot-color="item.color"
          :icon="item.icon"
          :icon-color="item.icon_color"
          fill-dot
          size="x-large"
          class="dot-format"
          variant="tonal"
        >
          <p class="title">{{ item.title }} <small>{{ item.time }}</small></p>
          <p class="text-content">Você tem <span class=""> {{ item.quantity }} {{ item.title }}</span> esperando você</p>
          <a class="cursor-pointer">Resolver agora <v-icon icon="mdi-arrow-right" /></a>
        </v-timeline-item>
      </v-timeline>
    </template>
  </CardComponent>
</template>

<style lang="scss" scoped>

.backlog{
  p.title-header {
    font-weight: 600;
    font-size: 16px !important;
    color: #4E5D78;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      background: #FF5630;
      padding: 2px 8px;
      font-size: 12px;
      border-radius: 20px;
      color: #fff;
      display: inline-block;
    }
  }

  .custom-timeline {
    p.title {
      color: #344054;
      font-weight: 500;

      small {
        font-size: 12px;
        color: #475467;
      }
    }

    p.text-content {
      font-weight: 300;
      margin: 5px 0;
      span {
        color: #9241F8;
      }
    }

    a {
      font-weight: 500;
      color: #377DFF;
    }
  }


  .v-timeline-divider__dot {
    border: solid 8px #9241F8 !important;
  }
}
</style>