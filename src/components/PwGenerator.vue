<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            value="!§$%/()=*-_.:,;<>"
            label="Sonderzeichen"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
           <v-slider

        :tick-labels="ticksLabels"
        :max="20"
        :min="8"
        step="1"
        ticks="always"
        tick-size="4"
      ></v-slider>

        </v-col>

        <v-col>

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
        ticksLabels: [
          8,
          9,
          10,
          11,
          12,
13, 14,15,16,17,18,19,20
        ],
      }
    )
}
</script>
