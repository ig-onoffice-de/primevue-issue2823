<script setup lang="ts">
import {MenuItem} from "primevue/menuitem";
import {computed, ComputedRef} from "vue";

const menuItems: ComputedRef<MenuItem[]> = computed(() => {
  return [
    {
      label: 'menu Label',
      to: { name: 'home' },
      disabled: false
    }
  ]
})
</script>

<template>
  <Menu
      id="overlay_menu"
      :model="menuItems"
      :popup="true"
  />
</template>

<style scoped>
</style>
