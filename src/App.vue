<template>
  <div id="app">
    <component :is="currentPage"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import School from './views/School'

export default {
  name: 'App',

  components: {
    School
  },

  computed: {
    ...mapState(['currentPage'])
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-user-select: none;
}
body {
  overflow: hidden;
}
input {
  outline: 0;
  border: 0;
}
#app {
  height: 100vh;
  max-width: 1920px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

</style>
