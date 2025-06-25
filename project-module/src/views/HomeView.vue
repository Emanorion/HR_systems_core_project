<template>

  <NavBar />
  <HomePage />
</template>

<script>
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    HomePage,
    NavBar
  }
}
</script>
