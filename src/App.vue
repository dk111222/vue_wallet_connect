<template>
  <status-container/>
</template>
<script>

import StatusContainer from './components/StatusContainer.vue'
export default {
  name: 'App',
  components: {
    StatusContainer
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100&display=swap');
#app {
  font-family: 'Sora', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
    background-color: #1c82ff;
    border: none;
    color: #ffffff;
    font-family: "Sora";
    border-radius: 3rem;
    padding: 2rem 3rem;
    font-weight: 600;
    font-size: 2rem;
    margin: 1rem 1rem 1rem auto;
    width: 40%;
}
.button:active {
  opacity: 0.9;
}
.disconnect__button {
    background-color: red;
    border: none;
    color: #ffffff;
    font-family: "Sora";
    border-radius: 3rem;
    padding: 2rem 3rem;
    font-weight: 600;
    font-size: 2rem;
    margin: 1rem 1rem 1rem auto;
    width: 40%;
}
.disconnect__button:active {
  opacity: 0.9;
}
</style>
