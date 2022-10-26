<template>
  <v-app>
    <v-navigation-drawer app>
    <!-- -->
    <!-- <v-avatar color="primary" size="45">BJ</v-avatar> -->
    </v-navigation-drawer>

    <v-app-bar elevation="2" app>
      <v-toolbar-title>Vue Tutorial</v-toolbar-title>
      <NavBar/>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <h1>{{getTitle}}</h1>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
    }
  },
  components: {
    NavBar
  },
  computed: {
    getTitle() {
      return this.$route.name
    }
  }
})
</script>
<style>
.v-toolbar-title {
  flex: none!important;
}
.v-app-bar.v-toolbar {
  background-color: #9575CD!important;
}
</style>
