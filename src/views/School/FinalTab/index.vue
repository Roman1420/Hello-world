<template>
  <div class="final-tab tab">
    <div class="tab__title">Страница результата Теоретического теста</div>
    <div 
      v-if="wrongAnswers <= 2"
      class="final-tab__info success"
    >
      <div class="title">Поздравляем!</div>
      <div class="desc">Вы успешно прошли теоретический экзамен.</div>
      <div class="desc">Ошибок допущено: {{wrongAnswers}}</div>
    </div>
    <div 
      v-else
      class="final-tab__info"
    >
      <div class="title">Тест провален!</div>
      <div class="desc">Вы допустили более 2 ошибок.</div>
    </div>
    <Button
      class="final-tab__btn"
      :text="'Завершить тест'"
      :available='true'
      @click="setCurrentTab('MainTab')"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from '../components/Button'
export default {
  name: 'FinalTab',

  components: {
    Button
  },

  methods: {
    ...mapActions('school', ['setCurrentTab'])
  },

  computed: {
    ...mapState('school', ['wrongAnswers'])
  }
}
</script>

<style lang="scss" scoped>
.final-tab{
  display: flex;
  align-items: center;
  flex-direction: column;
  .tab__title{
    margin-bottom: 8.875rem;
  }
  &__info{
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #A50000;
    margin-bottom: 3.125rem;
    &.success{
      color: #00A587;
      font-family: Roboto;
      font-style: normal;
    }
    .title{
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.75rem;
      margin-bottom: .3125rem;
    }
    .desc{
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.3125rem;
    }
  }
  &__btn{
    width: 18.125rem;
  }
}
</style>
