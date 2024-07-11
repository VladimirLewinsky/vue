<template>
  <div>
    <div class="project_details_container">
    <div class="details_banner">
        <img src="../assets/img/projectdetails/Banner.jpg" alt="img">
    </div>
    <div class="details_container">
        <div class="details_container_top">
            <h1 class="details_container_top__title">{{ getProjectTitle }}</h1>
            <p class="details_container_top__about">{{ getProjectAbout }}</p>
            <p class="details_container_top__about">{{projectInfo[0].aboutSec }}</p>
        </div>
    </div>
    <ProjectSlider></ProjectSlider>
    </div>
</div>
</template>

<script>
import { mapGetters, mapState}  from 'vuex'
import ProjectSlider from '../components/project/ProjectSlider.vue'

export default {
  name: 'ProjectDetails',
  components:{
    ProjectSlider
  },

  data() {
    return {
    
      
    };
  },

  mounted() {
    
  },
  computed:{
    ...mapState(['projectInfo']),
    ...mapGetters(['getProjectTitle','getProjectAbout'])
  },

  methods: {
    
  },
};
</script>