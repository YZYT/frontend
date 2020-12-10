<template>
  <div class="home">
    <!-- <v-container fluid> -->
    <v-row>
      <v-col cols="6">
        ff
      </v-col>
      <v-col cols="6" style="height:100vh" class="bg">
        <v-form v-model="valid" ref="form">
          <v-container>
            <v-row class="mx-5">
              <v-col cols="12" sm="5">
                <v-text-field
                  v-model="username"
                  :rules="nameRules"
                  label="Username"
                  required
                  background-color="bg2"
                  dark
                  class="mt-0"
                  color="primary"
                  prepend-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  v-model="password"
                  :type="'password'"
                  :rules="passwordRules"
                  label="Password"
                  required
                  dark
                  background-color="bg2"
                  class="mt-0"
                  prepend-icon="mdi-key"
                ></v-text-field>
              </v-col>
              <v-col cols="2" class="mt-4" @click="Submit">
                <v-btn small outlined dark>Sign in</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
    <!-- </v-container> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Login } from "@/api/login";
export default {
  name: "Home",
  components: {},
  data: () => ({
    valid: false,
    username: "",
    password: "",
    nameRules: [
      (v) => !!v || "Username is required",
      (v) => v.length <= 10 || "Username must be less than 10 characters",
    ],
    passwordRules: [(v) => !!v || "Username is required"],
  }),
  mounted: () => {
    // console.log("GGG");
    // console.log(process.env.VUE_APP_TITLE);
  },
  methods: {
    Submit() {
      if (this.$refs.form.validate()) {
        let data = {
          name: this.username,
          age: 100,
        };
        Login(data);
        console.log("gg");
      }
    },
  },
};
</script>
