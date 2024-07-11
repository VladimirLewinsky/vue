<template>
  <div>
    <footer class="footer">
      <div class="footer_social">
        <router-link to="/" style="text-decoration: none;"  >
        <div class="footer_logo">
          <img class="footer_logo_img" src="../../assets/img/Logo.png"  alt="png" />
          <h3>Interno</h3>
        </div>
      </router-link>
        <p class="footer_social__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
      
        <div class="footer_social__icons">
          <a href="#">
          <img src="../../assets/img/footer/1.png" alt="png" />
        </a>
        <a href="#">
          <img src="../../assets/img/footer/2.png" alt="png" />
         
        </a>
        </div>
      </div>
      <div class="footer_menu">
        <h3 class="footer_menu_nav_title">Pages</h3>
        <nav class="footer_menu_nav">
          
            <router-link class="footer_menu_nav_page" to="/">Home</router-link>
            <router-link class="footer_menu_nav_page" to="/project">Project</router-link>
            <router-link class="footer_menu_nav_page" to="/blog">Blog</router-link>
        
        </nav>
      </div>
      <div class="footer_contact">
        <h3 class="footer_contact_title">Contact</h3>
        <div class="footer_contact_about">
          <p class="footer_contact_adress">
            55 East Birchwood Ave. Brooklyn, New York 11201
          </p>
          <p class="footer_contact_email">contact@interno.com</p>
          <p class="footer_contact_number">(123) 456 - 7890</p>
        </div>
      </div>
     
    </footer>
  </div>
  
</template>

<script>
export default {
  name: 'FooterComp',

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
