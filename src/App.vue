<template>
  <v-app>
    <!-- side bar -->
    <v-navigation-drawer 
      app 
      dark 
      bottom 
      color="blue darken-3" 
      v-model="drawer"
    >
      <v-list>
        <v-list-item>
          <v-img
            alt="Strawberry"
            class="shrink mr-2"
            contain
            src="https://dududu.top/upload/2020/10/strawberry_2-39b557c19563434fb694263824bd51aa.png"
            transition="scale-transition"
            width="40"
          />
          <v-list-item-title class="title">
            杂牌工具箱
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- side bar divider -->
      <v-divider/>
      <!-- menu list -->
      <v-list dense nav>
        <v-list-item 
          v-for="(item, index) in sideLists" 
          :key="index" 
          @click="goPage(item)" 
          link
        >
          <!-- menu icon -->
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <!-- menu title -->
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <!-- top bar -->
    <v-app-bar app 
      color="#f0f0f0" 
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ barTitle }}</v-toolbar-title>
      </div>
      <span class="weather-info">{{ `${location} ${weather.temp}&#8451;` }}</span>
      <div class="weather">
        <v-img
          alt="weather-icon"
          class="shrink mr-2"
          contain
          :src="iconUrl"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>
    <!-- main body -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: true,
    barTitle: '首页',
    iconUrl: '',
    location: '上海',
    weather: {
      temp: 0
    },
    key: 'f1c701be77264f3f8f151c8de0aa4c8f',
    sideLists: [
      {
        icon: 'mdi-home',
        title: '首页',
        name: 'home'
      },
      {
        icon: 'mdi-widgets',
        title: '快速连接',
        name: 'fast-connect'
      },
      {
        icon: 'mdi-code-braces-box',
        title: '乱码转换',
        name: 'encoding-conversion'
      },
      {
        icon: 'mdi-account',
        title: '关于',
        name: 'about'
      }
    ]
  }),
  created: function() {
    this.getCityInfo()
  }, 
  methods: {
    goPage(page) {
      this.barTitle = page.title
      this.$router.push(page.name)
    },
    getCityInfo: function() {
      this.$axios({
        methods: 'GET',
        url: '/weather/geo/v2/city/lookup',
        params: {
          key: this.key,
          location: 'shanghai'
        }
      }).then((res) => {
        this.getWeatherInfo(res.data.location[0])
      }).catch((e) => {
        console.log(e)
      })
    },
    getWeatherInfo: function(cityInfo) {
      this.$axios({
        methods: 'GET',
        url: '/weather/dev/v7/weather/now',
        params: {
          key: this.key,
          location: cityInfo.id
        }
      }).then((res) => {
        this.weather = res.data.now
        this.iconUrl = require(`./assets/weather/${res.data.now.icon}.png`)
      }).catch((e) => {
        console.log(e)
      })
    }
  }
};
</script>

<style scoped>
  .container {
    background-color: #f5f5f5;
  }
  .weather {
    right: 0;
    position: absolute;
  }
  .weather-info {
    right: 50px;
    color: #858585;
    font-size: 1.2em;
    font-weight: 500;
    position: absolute;
  }
</style>
