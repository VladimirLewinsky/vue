<template>
  <div class="project-container" id="app">
        <div class="project_banner">
            <div class="project_banner__slogan">
                <h1 class="project_banner__title">Our Project</h1>
                <p class="bproject_banner__position">Home / Project</p>
            </div>
        </div>
    <div class="project_main">
        <nav class="project_main_categories">
            <!-- <router-link :to="">
              
            </router-link> -->
            <a class="project_main_categories__list" @click="currentTag=bathrooms" href="#">Bathroom</a>
            <a class="project_main_categories__list" @click="currentTag=bedrooms" href="#">Bed Room</a>
            <a class="project_main_categories__list" @click="currentTag=kitchens" href="#">Kitchen</a>
            <a class="project_main_categories__list" @click="currentTag=livingareas" href="#">Living area</a>
        </nav>
        
        
    </div>
    <ProjectList :decors="currentTag"></ProjectList>
    
    </div>
</template>

<script>
import ProjectList from '../components/project/ProjectList.vue';
export default {
    name: 'ProjectPage',
    components:{
         ProjectList,
  },
 

  data() {
    return {
        
        bedrooms:[
        {
            img:'1.png',
            title:'Minimal Bedroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'2.png',
            title:'Minimal Bedroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'3.png',
            title:'Classic Minimal Bedroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'4.png',
            title:'Modern Bedroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'5.png',
            title:'Minimal Bedroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'6.png',
            title:'System Table',
            abot:'Decor / Artchitecture'
        },
        {
            img:'7.png',
            title:'Minimal Bedroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'8.png',
            title:'Modern Bedroom',
            abot:'Decor / Artchitecture'
        },
        {
            img:'9.png',
            title:'Modern Medroom',
            about:'Decor / Artchitecture'
        },
    ],
        bathrooms:[
        {
            img:'4.png',
            title:'Bathroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'2.png',
            title:'Bathroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'3.png',
            title:'Bathroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'1.png',
            title:'Modern Bathroom',
            about:'Decor / Artchitecture'
        },
        {
            img:'5.png',
            title:'Minimal Bathroom',
            about:'Decor / Artchitecture'
        },
        
    ],
        kitchens:[
        {
            img:'5.png',
            title:'Kitchen',
            about:'Decor / Artchitecture'
        },
        {
            img:'2.png',
            title:'Minimal Kitchen',
            about:'Decor / Artchitecture'
        },
        {
            img:'3.png',
            title:'Classic Minimal Kitchen',
            about:'Decor / Artchitecture'
        },
        {
            img:'1.png',
            title:'Modern Kitchen',
            about:'Decor / Artchitecture'
        },
        {
            img:'4.png',
            title:'Minimal Kitchen',
            about:'Decor / Artchitecture'
        },
        {
            img:'6.png',
            title:'Kitchen Table',
            about:'Decor / Artchitecture'
        },
        
    ],
        livingareas:[
        {
            img:'5.png',
            title:'Minimal Living Room',
            about:'Decor / Artchitecture'
        },
      
        {
            img:'3.png',
            title:'Classic Living Room',
            about:'Decor / Artchitecture'
        },
        
    ],
    currentTag: '',
    };
  },


  mounted() {
    
    this.currentTag = this.bedrooms
    
  },


  methods: {
    
  },
 
};
</script>
<style>
    a{
        text-decoration: none;
        margin: 10px;
       
    }
</style>