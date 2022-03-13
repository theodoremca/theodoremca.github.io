<template>
  <div>
    <div id="styles-switcher" class="right">
      <h2 class="text-3 fw-600">Color Switcher</h2>
      <hr />
      <ul v-for="(theme, idx) in data" :key="idx">
        <li
          :class="theme.class"
          data-bs-toggle="tooltip"
          title
          :data-path="theme.dataPath"
          :data-bs-original-title="theme.color"
          :aria-label="theme.color"
        ></li>
      </ul>
      <button class="btn switcher-toggle"><i class="fas fa-cog"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "themeSwitcher",
  computed: {
    data() {
      return this.$store.state[this.$options.name].data;
    },
  },
};
</script>
