<template>
  <div 
    :class="[{'disable' : disable}, 'button']"
    @click="onClick"
  >{{text}}</div>
</template>

<script>

export default {
  name: 'Button',

  props: {
    text: String,
    available: Boolean,
  },

  data: function() {
    return {
      disable: false
    }
  },

  methods: {
    onClick: function() {
      if(this.disable) return;
      this.$emit(`click`);
    }
  },

  mounted() {
    if (this.available === false) {
      this.disable = true
    } else {
      this.disable = false
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  height: 3.125rem;
  min-height: 3.125rem;
  background: #DBDBDB;
  border-radius: .3125rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: .875;
  line-height: 1rem;
  color: #878787;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  &:not(.disable):hover{
    background: #0055A5;
    color: #fff;
  }
  &.disable{
    color: rgba(165, 0, 0, 1);
  }
}
</style>
