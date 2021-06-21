<template>
  <v-container 
    class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="4">
        <h1>欢迎</h1>
        <h2>你想使用 
          <a 
            class="fc-go" 
            @click="goFC">
            “快速链接”
          </a> 吗?</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'home',
    props: {

    },
    data: () => ({
      showInfo: ''
    }),
    created: function() {
      
    }, 
    methods: {
      goFC: function() {
        this.$router.push('fast-connect')
      }
    }
}
</script>

<style scoped>
  .fc-go {
    color: #292929;
    border-radius: 5px;
    display: inline-block;
    background-color: #ffe07a;
    transition: all ease .2s;
  }

  .fc-go:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    transform: scale(1.5);
  }

</style>