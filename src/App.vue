<template>
  <v-app>
    <v-main>
      <PwGenerator/>
    </v-main>
  </v-app>
</template>

<script>

import PwGenerator from './components/PwGenerator';
export default {
  name: 'App',
  components: {
    PwGenerator,
  },

  data: () => ({
    //
  }),
};
</script>
