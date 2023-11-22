<script>
export default {
  mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://static.elfsight.com/platform/platform.js')
      recaptchaScript.setAttribute('data-use-service-core', '')
      recaptchaScript.setAttribute('defer', '')
      document.head.appendChild(recaptchaScript)
    },
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <router-link to="/davinci">Home</router-link> | 
  <router-link to="/davinci/detect">Visualization</router-link> | 
  <router-link to="/davinci/ai">AI</router-link> | 
  <router-link to="/davinci/tableau">Tableau</router-link>
  <router-view></router-view>
 
  <br />
  <div class="elfsight-app-5f3e8eb9-9103-490e-9999-e20aa4157dc7" data-elfsight-app-lazy></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
