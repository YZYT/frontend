<template>
  <nav>
    <v-app-bar app dark class="bg">
      <!-- drawer-icon -->
      <v-app-bar-nav-icon
        color="primary"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <!-- title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">todo</span>
        <span class="font-weight
        ">Dylon</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- logout -->
      <v-btn text color="grey"
        ><span>Sign out</span><v-icon right> mdi-exit-to-app </v-icon></v-btn
      >
    </v-app-bar>
    <!-- drawer -->
    <v-navigation-drawer v-model="drawer" app class="bg">
      <v-list dark v-for="link in links" :key="link.id">
        <v-list-item :to="link.route">
          <v-list-item-action>
            <v-icon color="primary">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ link.txt }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
  <!-- 
    <v-app-bar
      absolute
      color="#6A76AB"color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet> -->
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-view-dashboard", txt: "Dashboard", route: "/" },
        { icon: "mdi-folder", txt: "My Projects", route: "/projects" },
        { icon: "mdi-account", txt: "Team", route: "/team" },
      ],
    };
  },
};
</script>
