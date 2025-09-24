<template>
  <!-- Splash Screen -->
  <transition name="fade">
    <div
      v-if="showSplash"
      class="fixed inset-0 flex items-center justify-center bg-[#0a0a0a] dark:bg-[#0a0a0a] z-50"
    >
      <div class="h-[90vh] flex items-center justify-center">
        <NuxtImg
          src="/images/image.png"
          alt="Chidera, Frontend Developer"
          class="w-full"
        />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 3000) // hide after 3s
})
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
