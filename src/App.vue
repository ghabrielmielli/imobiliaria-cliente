<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        >Trabalho de LBD - Aluno: Ghabriel Mielli | RGA:
        2019.1906.021-9</v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <router-view />
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
};
</script>