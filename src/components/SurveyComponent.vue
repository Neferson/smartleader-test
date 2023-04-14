<script>
import { CardComponent, IconComponent } from '@/common/components/index.js'
export default {
  name: "SurveyComponent",

  components: {
    CardComponent,
    IconComponent
  },

  data () {
    return {
      vote: '',
      surveys: [
        {
          id: 1,
          title: '1 hora de esteira',
          votes: 12,
          percent: 36,
          value: ''
        },
        {
          id: 2,
          title: '1 hora de treino de musculação',
          votes: 12,
          percent: 82,
          value: ''
        },
        {
          id: 3,
          title: 'Alimentação equilibrada',
          votes: 12,
          percent: 18,
          value: ''
        },
        {
          id: 4,
          title: '5 litros de água por dia',
          votes: 12,
          percent: 70,
          value: ''
        },
        {
          id: 5,
          title: 'Suplementação (Whey + Creatina)',
          votes: 12,
          percent: 8,
          value: ''
        },
        {
          id: 6,
          title: 'Todas as opções estão corretas',
          votes: 2545,
          percent: 2545,
          value: ''
        }
      ]
    }
  },

  methods: {
    handleVote (survey) {
      this.vote = survey.id
      // survey.votes + 1
      
    }
  }
}
</script>

<template>
  <CardComponent class="pb-4">
    <template #header>
      Enquetes
      <IconComponent icon="ellipsis-icon" />
    </template>
    <template #default>
      <div class="survey-wrapper">
        <span class="title">Como perder peso em 2023</span>
        <div class="survey-item" v-for="survey in surveys" :key="survey.id">
          <div class="radio-container">            
            <!-- <v-radio name="teste" v-model="vote" label="" :value="survey.id"></v-radio> -->
            <input class="" type="radio" v-model="vote" name="vote" :value="survey.id" />
          </div>
          <div class="survey-container" @click="handleVote(survey)">
            <div class="survey-count">
              <span class="title">{{ survey.title }}</span>
              <span class="votes">{{ survey.votes }} votos</span>
            </div>
            <v-progress-linear
              :model-value="survey.percent"
              color="green-accent-4"
              bg-color="grey-lighten-1"
              height="8"
              rounded
            ></v-progress-linear>
            </div>
          </div>
      </div>
    </template>
  </CardComponent>
</template>

<style lang="scss" scoped>

.survey-wrapper {  
  .title {
    color: #101828;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  .survey-item {
    display: flex;
    gap: 5px;
    width: 100%;
    margin-top: 20px;
    cursor: pointer;

    .radio-container {
      width: 36px;

      input[type='radio']:before {
        color: #0f5;
        background: #fff;
        border: solid 1px #D0D5DD;
        height: 22px;
        width: 22px;
        cursor: pointer;
        content: '';
        position: relative;
        top: -2px;
        left: -2px;
        border-radius: 15px;
        display: inline-block;
        visibility: visible;
        transition: all 0.3s;
      }

      input[type='radio']:hover:before {
        border: solid 1px #7F56D9;
        background: #F4EBFF;
      }

      input[type='radio']:checked:before {
        border: solid 1px #7F56D9;
      }

      input[type='radio']:checked:after {
        width: 8px;
        height: 8px;
        content: '';
        z-index: 1;
        position: relative;
        border-radius: 15px;
        top: -30px;
        left: 5px;
        display: inline-block;
        visibility: visible;
        background: #7F56D9;
      }
    }

    .survey-container {
      width: 100%;

      .survey-count {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;

        span {
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
        }

        .title {
          color: #4E5D78;
          margin-bottom: 2px;
        }

        .votes {
          color: #B0B7C3;
        }
      }
    }
  }
}

</style>