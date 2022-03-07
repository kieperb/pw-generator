<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            id="Sonderzeichen"
            v-model="specialChars"
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
          <v-text-field
            append-icon="mdi-refresh"
            label="Passwort"
            id="output_password"
            v-model="password"
            @click:append="generatePassword"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            label="bcrypt hash"
            readonly
            v-model="hash"
            id="output_hash"
          ></v-text-field>
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
    specialChars: "!§$%/()=*-_.:,;<>",
    ticksLabels: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    counter: 0,
    numbers: "0123456789",
    capitalLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    smallLetters: "abcdefghijklmnopqrstuvwxyz",
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
        this.numbers +
        this.smallLetters +
        this.capitalLetters +
        this.specialChars;
      return allowed[Math.floor(Math.random() * allowed.length)];
    },
    generatePassword() {
      const specialCharsReg = new RegExp(
        "[" + this.specialChars.replace("-", "\\-").replace("/", "\\/") + "]+",
        "g"
      );
      const numbersReg = new RegExp("[0-9]+", "g");
      const lowerReg = new RegExp("[a-z]+", "g");
      const upperReg = new RegExp("[A-Z]+", "g");

      let result = "";
      while (
        specialCharsReg.test(result) == false ||
        numbersReg.test(result) == false ||
        lowerReg.test(result) == false ||
        upperReg.test(result) == false
      ) {
        result = "";
        for (let c = 0; c < this.passwordLength; c++) {
          result += this.getRandomChar();
        }
      }
      this.password = result;
      return result;
    },
  },
};
</script>
