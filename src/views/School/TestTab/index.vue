<template>
  <div class="test-tab tab">
    <div class="tab__title">Теоретический тест</div>
    <div class="test-tab__question">
      <div class="title">Вопрос №{{questionNumber}}</div>
      <div class="question">{{currentQuestion.text}}</div>
      <div 
        class="image"
        v-if="currentQuestion.img"
        :style="{backgroundImage: 'url(./img/school/questions/'+ currentQuestion.img +'.png)'}"
      ></div>
      <div class="answers">
        <div 
          class="answers__item"
          v-for="(item, index) in currentQuestion.answers"
          :key="index"
        >
          <div class="radio-wrap">
            <input 
              class="input-value"
              type="radio" 
              name="answer"
              :id="'answer-' + index"
              :checked="index === currentAnswer"
            >
            <label 
              :for="'answer-' + index"
              @click="setAnswer(index)"
            >{{item}}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="test-tab__nav">
      <Button
        class="btn"
        :text="'Следующий вопрос'"
        :available="true"
        v-if="currentAnswer !== null"
        @click="nextQuestion()"
      />
      <div class="pagination">{{questionNumber}}/{{randomList.length}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from '../components/Button'

export default {
  name: 'TestTab',

  components: {
    Button
  },

  data: function() {
    return {
      dynamic: 'null',
      available: false,
      currentAnswer: null,
      answers: [],
      currentQuestion: {},
      questionNumber: 1,
      randomList: [],
      questions: [
        {
          id: 0,
          text: 'Что нарушил водитель движущегося траснпортного средства в данной ситуации?',
          img: 'img-1',
          answers: [
            'Текст ответа 1',
            'Текст ответа 2',
            'Текст ответа 3',
          ]
        },
        {
          id: 1,
          text: 'Что не нарушил водитель движущегося траснпортного средства в данной ситуации?',
          img: 'img-1',
          answers: [
            'Ответ 1',
            'Ответ 2',
            'Ответ 3',
          ]
        },
        {
          id: 2,
          text: 'Что пил водитель движущегося траснпортного средства в данной ситуации?',
          answers: [
            'Текст 1',
            'Текст 2',
            'Текст 3',
          ]
        },
        {
          id: 3,
          text: 'Что курил водитель движущегося траснпортного средства в данной ситуации?',
          img: 'img-1',
          answers: [
            'Ответ номер 1',
            'Ответ номер 2',
            'Ответ номер 3',
          ]
        },
      ]
    }
  },

  methods: {
    ...mapActions('school', ['setCurrentTab']),

    setCurrentQuestion: function(obj) {
      this.currentQuestion = obj
    },

    nextQuestion: function() {
      let index = this.questionNumber
      if (index < this.randomList.length) {
        let element = this.randomList[index]
        this.pushAnswer()
        this.currentAnswer = null
        document.querySelectorAll('.input-value').value = ''
        index++ 
        this.currentQuestion = element
        this.questionNumber = index
        console.log(this.currentQuestion.id)
      } else {
        this.setCurrentTab('FinalTab')
      }
    },

    setAnswer: function(index) {
      this.currentAnswer = index
    },
    
    pushAnswer: function() {
      this.answers.push([this.currentQuestion.id, this.currentAnswer])
    }
  },

  created() {
    let array = this.questions
    array.sort(() => Math.random() - 0.5);
    this.randomList = array
  },

  mounted() {
    this.setCurrentQuestion(this.randomList[0])
  }
}
</script>

<style lang='scss' scoped>
.test-tab{
  .tab__title{
    margin-bottom: 3.25rem;
  }
  &__question{
    max-width: 44.375rem;
    .title, .question{
      font-family: Roboto;
      font-style: normal;
      color: #0055A5;
    }
    .title{
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: .3125rem;
    }
    .question{
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.3125rem;
      margin-bottom: 1.625rem;
    }
    .image{
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 44.375rem;
      height: 21.875rem;
      border-radius: 1rem;
      overflow: hidden;
      margin-bottom: .8rem;
    }
    .answers{
      &__item{
        .radio-wrap{
          display: flex;
          min-height: 1.5rem;
          margin-bottom: .625rem;
          padding-left: 2.125rem;
          position: relative;
          input{
            opacity: 0;
            position: absolute;
            &+label{
              display: flex;
              align-items: center;
              font-family: Roboto;
              font-style: normal;
              font-weight: 500;
              font-size: .875rem;
              line-height: 1rem;
              color: #AAAAAA;
              transition: .2s;
              &:hover{
                color: #404040;
                &:before{
                  border-color: #404040;
                }
              }
              &:before, &:after{
                content: '';
                width: 1.5rem;
                height: 1.5rem;
                position: absolute;
                left: 0;
                border-radius: .1875rem;
                transition: .2s;
                box-sizing: border-box;
              }
              &:before{
                border: 2px solid #AAAAAA;
                opacity: 1;
                z-index: 1;
              }
              &:after{
                background-color: #404040;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url('/img/school/done.svg');
                opacity: 0;
                z-index: 2;
              }
            }
            &:checked{
              &+label{
                color: #404040;
                &:after{
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }
  &__nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    .btn{
      width: 16.375rem;
      margin-bottom: 2.75rem;
    }
    .pagination{
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: .8125rem;
      line-height: .9375rem;
      color: #8A8A8A;
    }
  }
}
</style>
