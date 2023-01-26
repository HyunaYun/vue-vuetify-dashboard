<template>
  <v-container
    style="text-align: center"
    class="mt-10"
  >
    <div>
      <div
        class="text-h3 mb-7 font-weight-bold"
        style="color: #F28376"
      >
        LOGIN
      </div>
      <v-card
        style="width: 20vw; margin: auto"
        flat
      >
        <v-text-field
          v-model="id"
          label="ID"
          regular
        />

        <v-text-field
          v-model="password"
          label="PASSWORD"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          class="mb-5"
          @click:append="show1 = !show1"
          @keypress.enter="loginEasy()"
        />

        <v-btn
          style="width: 20vw; background-color: #F28376; color: white"
          @click="loginEasy()"
        >
          LOGIN
        </v-btn>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'DelayLogin',

  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      id: '',
      rules: {
        required: value => !!value || 'Required.',
        //min: v => v.length >= 8 || 'Min 8 characters',
        //emailMatch: () => (`The email and password you entered don't match`),
      },
    };
  },

  computed: {
    userId() {
      return this.$store.getters.GET_USER_ID
    },

    userPw() {
      return this.$store.getters.GET_USER_PW
    }
  },

  methods: {
    loginEasy() {
      if (this.id == '' || this.password == '') {
        alert("아이디/비밀번호를 입력해주세요.");
        return;
      } else {
        if (this.userId == this.id && this.userPw == this.password) {
          alert("로그인 성공!");
          this.$store.commit("SET_IS_USER_LOGIN", true);
          this.$router.replace('/main')
        } else {
          alert("아이디와 비밀번호를 확인해주세요.");
          return;
        }
      }
    }
  }
};
</script>

<style>


</style>
