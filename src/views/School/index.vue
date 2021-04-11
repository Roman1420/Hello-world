<template>
  <div class="school">
    <Header/>
    <div class="school__logo"></div>
    <component :is="currentTab"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/Header'
import MainTab from './MainTab'
import IntroductionTab from './IntroductionTab'
import TestTab from './TestTab'
import FinalTab from './FinalTab'
export default {
  name: 'School',

  components: {
    Header,
    MainTab,
    IntroductionTab,
    TestTab,
    FinalTab
  },

  computed: {
    ...mapState('school', ['currentTab'])
  }
}
</script>

<style lang="scss" scoped>
.school{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('/img/school/bg.png');
  &__logo{
    width: 7.875rem;
    height: 7.875rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/img/school/logo.png');
    margin-bottom: 3.125rem;
  }
}
</style>


<style lang="scss">
.school{
  .tab{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title{
      font-family: Noto Serif Gujarati;
      font-style: normal;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 2.1875rem;
      text-transform: uppercase;
      color: #0055A5;
    }
  }
}
</style>

