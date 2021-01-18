<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer" 
        app
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
    <!-- main body top bar -->
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ barTitle }}</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-main>
      <v-container
          class="fill-height"
          fluid
        >
          <home-page />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/home/home';

export default {
  name: 'App',
  components: {
    HomePage
  },

  data: () => ({
    drawer: true,
    barTitle: 'Fast Connect DB',
    sideLists: [
      {
        icon: 'mdi-home',
        title: 'Home'
      },
      {
        icon: 'mdi-widgets',
        title: 'Functions'
      },
      {
        icon: 'mdi-account',
        title: 'About'
      }
    ]
  }),
};
</script>

<style scoped>
  .container {
    background-color: #f5f5f5;
  }
</style>
