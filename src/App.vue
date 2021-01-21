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
            Application
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider/>

      <v-list dense nav>
        <v-list-item 
          v-for="(item, index) in sideLists" 
          :key="index" 
          @click="goPage(item)" 
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
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
    barTitle: 'Home',
    sideLists: [
      {
        icon: 'mdi-home',
        title: 'Home',
        name: 'home'
      },
      {
        icon: 'mdi-widgets',
        title: 'Fast Connect',
        name: 'fast-connect'
      },
      {
        icon: 'mdi-account',
        title: 'About',
        name: 'about'
      }
    ]
  }),
  methods: {
    goPage(page) {
      this.barTitle = page.title
      this.$router.push(page.name)
    }
  }
};
</script>

<style scoped>
  .container {
    background-color: #f5f5f5;
  }
</style>
