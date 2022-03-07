<template>
  <v-app>
    <v-main>
      <v-card max-width="1000" class="mx-auto my-12">
        <v-card-title> Vue.js Vuetify Test: Passwort Generator </v-card-title>
        <PwGenerator />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import PwGenerator from "./components/PwGenerator";
export default {
  name: "App",
  components: {
    PwGenerator,
  },

  data: () => ({
    //
  }),
};
</script>
