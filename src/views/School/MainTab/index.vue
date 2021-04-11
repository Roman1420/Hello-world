<template>
  <div class="main-tab tab">
    <div class="tab__title">Добро пожаловать в школу лицензирования!</div>
    <div class="main-tab__nav">
      <div class="title">Навигация</div>
      <Button
        class="btn"
        :text="dynamic"
        :available="true"
        @click="setCurrentTab('IntroductionTab')"
      />
      <Button
        class="btn"
        :text="'Информационная база'"
        :available='true'
        @click="setCurrentTab('InfoTab')"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from '../components/Button'

export default {
  name: 'MainTab',

  components: {
    Button
  },

  data: function() {
    return {
      dynamic: 'Начать теоретический экзамен',
      available: false
    }
  },

  methods: {
    ...mapActions('school', ['setCurrentTab'])
  }
}
</script>

<style lang='scss' scoped>
.main-tab{
  &__nav{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 8.6875rem;
    .title{
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 1.375rem;
      line-height: 1.625rem;
      color: #0055A5;
      margin-bottom: 1.25rem;
    }
    .btn{
      width: 25rem;
      margin-bottom: .93rem;
    }
  }
}
</style>
