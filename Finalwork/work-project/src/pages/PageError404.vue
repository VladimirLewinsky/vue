<template>
  <div class="error_container">
    <h1 class="error_container__title" >404</h1>
    <h4 class="error_container__about">Not Found</h4>
    <router-link to="/">
      <Button class="error_container__button">Back to Home</Button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageError404',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>