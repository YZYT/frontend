<template>
  
  <div class="dashboard">
    <Navbar />
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              raised
              text
              rounded
              color="primary"
              @click="sortBy('title')"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>

        <v-btn
          small
          raised
          text
          rounded
          color="primary"
          @click="sortBy('person')"
        >
          <v-icon left small>mdi-account</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
      </v-row>

      <v-card :elevation="0" v-for="project in projects" :key="project.id">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>

      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card class="pa-3" :elevation="4">
            <div class="caption grey--text">Project title</div>
            <div>create a new project</div>
          </v-card>
        </v-col>
        <!-- <v-col cols="12" sm="6" md="4">
                ggg
            </v-col>
            <v-col cols="12" sm="6" md="4">
                ggg
            </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
export default {
  name: "Dashboard",
  components: { Navbar },
  data: () => ({
    projects: [
      {
        title: "Create a new website",
        person: "Dylon",
        due: "1st Jan 2019",
        status: "ongoing",
      },
      {
        title: "Complete mathe",
        person: "TinTin",
        due: "1st Jan 2019",
        status: "complete",
      },
      {
        title: "Create a new website",
        person: "Dylon",
        due: "1st Jan 2019",
        status: "overdue",
      },
    ],
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>
