<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="primary">
      <v-list dense nav dark>
        <v-list-item
          v-for="item in routes"
          :key="item.title"
          link
          :to="item.path"
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

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Trabalho de LBD - Sistema Imobiliário</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleDarkMode()">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-sheet color="secondary" height="100%" dark class="pa-0">
        <router-view />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    routes: [
      { title: "Home", icon: "mdi-view-dashboard", path: "/" },
      { title: "Clientes", icon: "mdi-account", path: "/Clientes" },
      { title: "Imóveis", icon: "mdi-home", path: "/Imoveis" },
      { title: "Logs", icon: "mdi-map-search-outline", path: "/Logs" },
    ],
  }),
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = localStorage.darkMode = !(
        localStorage.darkMode == "true"
      );
    },
  },
};
</script>