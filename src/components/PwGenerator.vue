<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            id="Sonderzeichen"
            v-model="sonderzeichen"
            label="Sonderzeichen"
            clearable
            @keydown="generatePassword"
            @click:clear="generatePassword"
            :clear-icon-cb="generatePassword"
          >
            ></v-text-field
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-slider
            v-model="passwordLength"
            id="Passwortlaenge"
            label="Passwortlänge"
            :tick-labels="ticksLabels"
            :max="ticksLabels[ticksLabels.length - 1]"
            :min="ticksLabels[0]"
            step="1"
            ticks="always"
            tick-size="6"
            @change="generatePassword"
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
          <v-text-field readonly v-model="hash" id="output_hash"></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import bcrypt from "bcryptjs";
export default {
  name: "PwGenerator",

  data: () => ({
    passwordLength: 12,
    password: "",
    sonderzeichen: "!§$%/()=*-_.:,;<>",
    ticksLabels: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    counter: 0,
  }),
  created: function () {
    this.generatePassword();
  },
  computed: {
    hash: function () {
      return bcrypt.hashSync(this.password);
    },
  },
  methods: {
    getRandomChar() {
      const allowed =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        this.sonderzeichen;
      return allowed[Math.floor(Math.random() * allowed.length)];
    },
    generatePassword() {
      let result = "";
      let reg = new RegExp("[" + this.sonderzeichen + "]+");
      while (!reg.test(result)) {
        result = "";
        for (let c = 0; c < this.passwordLength; c++) {
          result += this.getRandomChar();
        }
      }
      // todo testen ob min: 1 großBuchstabe, 1 kleinBuchstabe, 1 Zahl und 1 Sonderzeichen enthalten ist
      // wenn nicht nochmal "würfeln"
      this.password = result;
      return result;
    },
  },
};
</script>
