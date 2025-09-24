<template>
  <div>
    <div class="bg-striped dark:bg-[#0a0a0a] text-white">
      <div class="w-full md:container mx-auto">
        <!-- Header -->
        <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
          <h2 class="text-3xl font-bold">N/C</h2>
          <ul
            class="hidden md:flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
          >
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          </ul>
          <a
            href="/docs/cv.pdf"
            download="resume"
            class="hidden md:flex border px-5 py-2 border-[#ff6b37] rounded-xl"
          >
            Resume
          </a>

          <!-- Mobile Menu Button -->
          <div @click="toggleDrawer" class="md:hidden cursor-pointer">
            <Icon name="uil:bars" class="w-6 h-6 hover:text-[#ff6b37]" />
          </div>
        </div>

        <!-- Drawer -->
        <div
          v-if="drawer"
          class="fixed inset-0 bg-gradient-to-b from-gray-900 to-black z-50 transition-transform duration-300"
        >
          <!-- Clickable background overlay -->
          <div
            class="absolute inset-0"
            @click="close"
          ></div>

          <!-- Drawer content -->
          <div class="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
            <!-- Close Button -->
            <button
              @click="close"
              class="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-700"
            >
              <Icon name="uil:times" class="w-6 h-6 text-white" />
            </button>

            <!-- Navigation Links -->
            <ul class="flex flex-col items-center justify-center h-full space-y-8">
              <li @click="close"><NuxtLink to="/" class="text-white">Home</NuxtLink></li>
              <li @click="close"><NuxtLink to="/about" class="text-white">About</NuxtLink></li>
              <li @click="close"><NuxtLink to="/projects" class="text-white">Projects</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Slot for page content -->
    <slot />

    <!-- Footer -->
    <footer class="text-white">
      <div class="border-t border-white/20">
        <div class="flex justify-between items-center w-full md:container mx-auto">
          <p class="p-8 text-sm text-center">&copy; 2025 Nwanoroh Chidera</p>
          <div class="flex space-x-2">
            <a href="https://github.com/">
              <Icon name="uil:github" class="w-5 h-5 hover:text-[#ff6b37]" />
            </a>
            <a href="https://linkedin.com">
              <Icon name="uil:linkedin" class="w-5 h-5 hover:text-[#ff6b37]" />
            </a>
            <a href="https://twitter.com">
              <Icon name="uil:twitter" class="w-5 h-5 hover:text-[#ff6b37]" />
            </a>
            <a href="https://www.instagram.com/?hl=en">
              <Icon name="uil:instagram" class="w-5 h-5 hover:text-[#ff6b37]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
  if (drawer.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
};

const close = () => {
  drawer.value = false;
  document.body.classList.remove("overflow-hidden");
};
</script>

<style lang="scss" scoped></style>
