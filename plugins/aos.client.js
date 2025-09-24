import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.mixin({
      mounted() {
        AOS.init({
          duration: 800, // animation duration
          once: true, // whether animation should happen only once
        });
      },
      updated() {
        AOS.refresh(); // refresh on component updates
      },
    });
  }
});
