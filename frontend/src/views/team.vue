<template>
  <div class="team">
    <v-row class="my-5">
      <v-col cols="12" sm="6" lg="3" v-for="person in team" :key="person.id">
        <v-card flat class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="grey lighten-2">
              <img :src="person.avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="headline">{{ person.name }}</div>
            <div class="grey--text">{{ person.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="grey">
              <v-icon small left>mdi-message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "team",
  components: {},
  data: () => ({
    team: [
      { name: "The Net Ninja", role: "Web developer", avatar: "/avatar-1.png" },
      { name: "Ryu", role: "Graphic designer", avatar: "/avatar-2.png" },
      { name: "Chun Li", role: "Web developer", avatar: "/avatar-3.png" },
      {
        name: "Gouken",
        role: "Social media maverick",
        avatar: "/avatar-4.png"
      },
      { name: "Yoshi", role: "Sales guru", avatar: "/avatar-2.png" }
    ]
  }),
  methods: {}
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
