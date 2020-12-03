import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
          customProperties: true,
        },
        themes: {
          light: {
            // primary: "#ee44aa",
            // secondary: "#424242",
            primary: "#1DA1F2",
            secondary: "#14171A",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            bg: "#15202B",
          },
        },
      },
});
