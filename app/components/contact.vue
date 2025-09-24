<template>
  <div>
    <section
      class="relative bg-striped overflow-hidden py-20 md:py-28 lg:py-32"
      data-aos="fade-up"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Content -->
      <div class="relative px-6 sm:px-8 text-center max-w-4xl mx-auto">
        <p
          class="text-base font-medium text-white tracking-wide uppercase mb-4"
        >
          Have a project in mind?
        </p>

        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight py-5 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#b1b2b3] to-[#b4b5b6]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let’s Work Together
        </h2>

        <!-- <p
          class="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Whether you’re looking for a sleek website, improved SEO, or a modern
          frontend experience — I can help bring your ideas to life.
        </p> -->

        <div class="flex justify-center mt-10">
          <a
            :href="emailLink"
            class="inline-flex items-center border-2 border-[#ff6b37] bg-[#ff6b37]/60 text-white font-semibold text-lg sm:text-xl px-8 py-3 rounded-xl shadow-lg hover:bg-[#e2592d] hover:scale-105 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="300"
            aria-label="Send an email to Nwanoroh Chidera"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 12H8m8 0l-4-4m4 4l-4 4"
              />
            </svg>
            Email Me
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("nwanorohfavoured@example.com");
const emailLink = ref(`mailto:${email.value}`);
</script>

