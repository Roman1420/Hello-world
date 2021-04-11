<template>
  <div class="introduction-tab tab">
    <div class="tab__title">Добро пожаловать на теоретический тест!</div>
    <div class="introduction-tab__nav">
      <div class="info-wrap">
        <div class="info-wrap__block">
          <div class="text">Перед началом теста, советуем еще раз ознакомиться с общими правилами в базе знаний.</div>
        </div>
        <div class="info-wrap__block">
          <div class="text">На  теоретический экзамен вам дается допустить <span class="error">2 ошибки</span>.</div>
          <div class="text">Если вы допустите более <span class="error">2 ошибок</span>, тест будет провален и вас не допустят на практику.</div>
        </div>
        <div class="info-wrap__block">
          <div class="text">Пересдачу вы сможете осуществить только спустя 1 час.</div>
        </div>
        <div class="info-wrap__block">
          <div class="text">Если вы смогли пройти теоретическую часть, вам открывается досутуп к практической части, далее вам будет выдан автомобиль для начала сдачи экзамена.</div>
        </div>
      </div>
      <div class="btns">
        <Button
          class="btn"
          :text="'Вернутья назад'"
          :available="true"
          @click="setCurrentTab('MainTab')"
        />
        <Button
          class="btn"
          :text="'Я ознакомился(ась), продолжить'"
          :available='true'
          @click="setCurrentTab('TestTab')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from '../components/Button'

export default {
  name: 'IntroductionTab',

  components: {
    Button
  },

  data: function() {
    return {
      dynamic: 'null',
      available: false
    }
  },

  methods: {
    ...mapActions('school', ['setCurrentTab'])
  }
}
</script>

<style lang='scss' scoped>
.introduction-tab{
  &__nav{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 36.875rem;
    margin-top: 6.5rem;
    .info-wrap{
      display: flex;
      flex-direction: column;
      margin-bottom: 1.875rem;
      &__block{
        display: flex;
        flex-direction: column;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        color: #5F5F5F;
        margin-bottom: .625rem;
        &:last-child{
          margin-bottom: 0;
        }
        .text{
          .error{
            color: rgba(238, 53, 53, 1);
          }
          &:before{
            content: '• ';
          }
        }
      }
    }
    .btns{
      display: flex;
      width: 100%;
      .btn{
        width: 100%;
        margin-right: .6875rem;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
}
</style>
