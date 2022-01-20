<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            id="Sonderzeichen"
            v-model="sonderzeichen"
            label="Sonderzeichen"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
           <v-slider
           id="Passwortlaenge"
        label="Passwortlänge"
        :tick-labels="ticksLabels"
        :max="20"
        :min="8"
        step="1"
        ticks="always"
        tick-size="4"
      ></v-slider>

        </v-col>



      </v-row>
      <v-row>
        <v-col>
          <v-text-field id="output_password" v-model="password"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field id="output_hash"></v-text-field>
        </v-col>
      </v-row>

    </v-form>
  </v-container>
</template>

<script>
export default {
name: 'PwGenerator',
data: () => (
       {
         password: "",
         sonderzeichen: "!§$%/()=*-_.:,;<>f",
        ticksLabels: [
          8,
          9,
          10,
          11,
          12,
13, 14,15,16,17,18,19,20
        ],
        counter: 0
      }
    ),
    methods:{}
}
</script>
