<template>
  <div>
    <header class="header">
      <router-link to="/" style="text-decoration: none;">
        <div class="header_logo">
          <img class="header_logo_img" src="../../assets/img/Logo.png" alt="png" />
          <h3>Interno</h3>
        </div>
      </router-link>
      
      <nav class="header_menu">
        
          
        <router-link to="/">Home</router-link>
        <router-link to="/project">Project</router-link>
        <router-link to="/blog">Blog</router-link>
        
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',

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