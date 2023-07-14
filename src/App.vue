<template>
  <div id="app">
    <img alt="React logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png?20220125121207">
    <Copy :copy="copyText"/>
    <Body :bodyTitle="computedTitle" :bodyIntro="computedIntro"/>
    <div class="button-container">
      <button class="button" v-on:click="toggleTitle">Change Title</button>
      <button class="button" v-on:click="toggleIntroText">Change Intro Text</button>
    </div>
  </div>
</template>

<script>
import Copy from './components/Copy.vue'
import Body from './components/Body.vue'
import { titleState, toggleTitle, getComputedTitle } from './state/toggleTitle';
import { introState, toggleIntroText, getComputedIntro } from './state/toggleIntroText';

export default {
  name: 'App',
  components: {
    Copy,
    Body
  },
  data() {
    return {
      copyText: "Want to learn React instead?",
      bodyTitle: "Get started!",
      bodyIntro: "Here are some great resources you should check out!",
      titleState,
      introState
    }
  },
  methods: {
    toggleTitle() {
      toggleTitle();
    },
    toggleIntroText() {
      toggleIntroText();
    }
  },
  computed: {
    computedTitle() {
      return getComputedTitle(this.bodyTitle);
    },
    computedIntro() {
      return getComputedIntro(this.bodyIntro);
    }
  },
}
</script>

<style>

@import './styles/buttonStyles.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
