<template>
  <div>
    <div class="w-full">
      <!-- <splash /> -->
      <div v-if="!showSplash" class="bg-striped">
        <div class="w-full md:container mx-auto px-5">
          <div
            class="h-[80vh] md:h-[90vh] flex flex-col items-center justify-center text-center text-white"
          >
            <p
              class="text-base md:text-lg mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Hi, my name is Nwanoroh Chidera
            </p>

            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-bold lg:leading-[1.2] lg:max-w-6xl"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              I create <span class="text-[#ff6b37]">high-quality</span>
              web applications with modern frontend
              <span class="text-[#ff6b37]">expertise.</span>
            </h1>

            <p
              class="text-sm md:text-base text-gray-300 max-w-2xl my-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              I design modern, conversion-focused websites that help brands
              grow, connect, and stand out online.
            </p>

            <div
              class="mt-2"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <NuxtLink
                to="/contact"
                class="px-5 py-4 rounded-xl bg-[#ff6b37]/70 border border-[#ff6b37] hover:bg-[#ff6b37] text-white font-semibold transition"
              >
                See My Works
              </NuxtLink>
              <!-- 
              <NuxtLink
                to="/projects"
                class="px-5 py-2.5 rounded-xl border border-gray-500 hover:border-[#ff6b37] hover:text-[#ff6b37] font-semibold transition"
              >
                See My Work
              </NuxtLink> -->
            </div>
          </div>

          <!-- Services -->
          <section class="py-20 text-white">
            <div>
              <!-- Heading -->
              <div class="text-center mb-16">
                <h2
                  class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#b1b2b3] to-[#b4b5b6]"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  How I Can Help You
                </h2>
                <p
                  class="text-gray-400 max-w-2xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  I provide services designed to boost your online presence,
                  engage your audience, and help your business grow with lasting
                  impact.
                </p>
              </div>

              <!-- Services Grid -->
              <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                <!-- Service 1 -->
                <div
                  class="group flex space-x-2"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <p class="text-5xl font-light text-gray-500 block mb-4">01</p>
                  <div>
                    <h4 class="text-xl font-semibold mb-3 mt-2">
                      Website Design
                    </h4>
                    <p class="text-gray-400 mb-6">
                      I create modern, user-friendly websites tailored to your
                      brand, designed to capture attention, keep visitors
                      engaged, and provide a seamless browsing experience.
                    </p>
                    <NuxtLink
                      to="/projects"
                      class="font-semibold text-[#ff6b37] hover:underline"
                    >
                      See My Projects →
                    </NuxtLink>
                  </div>
                </div>

                <!-- Service 2 -->
                <div
                  class="group flex space-x-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  <p class="text-5xl font-light text-gray-500 block mb-4">02</p>
                  <div>
                    <h4 class="text-xl font-semibold mb-3 mt-2">SEO</h4>
                    <p class="text-gray-400 mb-6">
                      A great site deserves visibility. I optimize websites for
                      search engines so your business ranks higher, reaches the
                      right audience, and grows organically.
                    </p>
                    <NuxtLink
                      to="/book"
                      class="font-semibold text-[#ff6b37] hover:underline"
                    >
                      Book a Call →
                    </NuxtLink>
                  </div>
                </div>

                <!-- Service 3 -->
                <div
                  class="group flex space-x-4"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  <p class="text-5xl font-light text-gray-500 block mb-4">03</p>
                  <div>
                    <h4 class="text-xl font-semibold mb-3 mt-2">
                      Responsive Design
                    </h4>
                    <p class="text-gray-400 mb-6">
                      Your visitors use phones, tablets, and desktops — I make
                      sure your website looks and works beautifully on every
                      device.
                    </p>
                    <NuxtLink
                      to="/projects"
                      class="font-semibold text-[#ff6b37] hover:underline"
                    >
                      See it in Action →
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Projects -->
          <section>
            <!-- Section Heading -->
            <div class="text-center text-white mb-16">
              <h2
                class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#b1b2b3] to-[#b4b5b6]"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Projects
              </h2>
              <p
                class="text-gray-400 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                I provide services designed to boost your online presence,
                engage your audience, and help your business grow with lasting
                impact.
              </p>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="(project, index) in projects"
                :key="project.id"
                class="bg-[#14151a] overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-aos="fade-up"
                :data-aos-delay="index * 150"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <!-- Image Section -->
                <div class="relative h-64 w-full overflow-hidden">
                  <img
                    class="h-full w-full object-fit transform transition-transform duration-500"
                    :src="project.image"
                    :alt="project.title"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>

                <!-- Content Section -->
                <div class="px-6 py-6 bg-[#14151a]">
                  <!-- Category -->
                  <p class="text-gray-400 text-sm">{{ project.category }}</p>

                  <!-- Title -->
                  <h4 class="mt-1 font-bold text-lg text-white">
                    {{ project.title }}
                  </h4>

                  <!-- Description -->
                  <p class="text-gray-300 mt-2 text-sm leading-relaxed">
                    {{
                      project.description ||
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    }}
                  </p>

                  <!-- Skills/Stack -->
                  <ul class="flex flex-wrap gap-2 mt-4">
                    <li
                      v-for="(skill, i) in project.stack"
                      :key="i"
                      class="px-3 py-1 border text-xs border-[#ff6b37] text-[#ff6b37] rounded-full font-medium hover:bg-[#ff6b37] hover:text-black transition-colors duration-200"
                    >
                      {{ skill }}
                    </li>
                  </ul>

                  <!-- View Project Link -->
                  <a
                    :href="project.link"
                    class="flex items-center gap-2 mt-6 text-[#ff6b37] text-sm font-semibold transition-all duration-200 group/link"
                    :aria-label="`View details for ${project.title} project`"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="mdi:open-in-new"
                      class="w-4 h-4 transition-transform duration-200 group-hover/link:-translate-y-1"
                    />
                    <span class="text-base font-semibold">View Project</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section>
        <contact />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const words = ["Nwanoroh Chidera", "Frontend Developer!", "A Freelancer"];
const displayText = ref("");
let i = 0;
let j = 0;
let isDeleting = false;

const type = () => {
  const currentWord = words[i];
  if (isDeleting) {
    displayText.value = currentWord.substring(0, j - 1);
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    displayText.value = currentWord.substring(0, j + 1);
    j++;

    if (j === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1500);
      return;
    }
  }
  setTimeout(type, 100);
};

const projects = [
  {
    id: 1,
    title: "Speed Academy",
    category: "E-learning",
    description:
      "E-learning platform for students built with Vue.js and Tailwind CSS.",
    image: "/images/work.png",
    stack: ["Vue.js", "Nuxt.js", "TailwindCSS"],
    link: "https://speedacademyy.netlify.app",
  },
  {
    id: 2,
    title: "Portfolio Project",
    category: "Portfolio",
    description:
      "A modern personal portfolio website using Vue.js and Tailwind CSS.",
    image: "/images/work3.png",
    stack: ["Bootstrap", "JavaScript"],
    link: "https://silver-nasturtium-5faa8e.netlify.app",
  },
  {
    id: 3,
    title: "Lungu Farm",
    description: "A startup project developed with Vue.js and Nuxt.",
    image: "/images/lungu.png",
    stack: ["Nuxt js", "Tailwind CSS"],
    link: "https://lungufarm.netlify.app/",
  },
  // {
  //   id: 4,
  //   title: "NextDream",
  //   category: "Startup",
  //   description: "A startup project developed with Vue.js and Nuxt.",
  //   image: "/images/work2.png",
  //   stack: ["Html", "Css", "Javascript"],
  //   link: "https://nextdream.onrender.com",
  // },
];

onMounted(type);
</script>
