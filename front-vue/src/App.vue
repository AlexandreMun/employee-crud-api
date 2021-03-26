<template>
  <div>
    <!-- NAVBAR -->
    <NavBar />
    <!--  -->
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>
