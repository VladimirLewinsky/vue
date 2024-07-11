<template>
  <div>
    <div class="main">
        <div class="main_banner">
          <img src="../assets/img/details/banner_details.jpg" alt="img" />
        </div>
        <div class="main_container" id="app">
          <div class="main_container__articles">
              <div class="main_container__articles__tags">
                  <h1 class="main_container__articles__tags__title">Tags</h1>
                  <div class="main_container__articles__tags_container">
                  <button @click="activeel=button,currentTab=button" type="button" class="buttonjs main_container__articles__tags_container__button" v-for="button in nameButtons" :key="button.id" :class="activeel ===button  ? 'active':''">{{button}}</button>
                </div>
                
          </div>
          <!-- <component :is="ChangeTabs" /> -->
          <ArticlesList :tagname="ChangeTabs"></ArticlesList>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import ArticlesList from "../components/blog/BlogArticlesList.vue";
export default {
  name: 'BlogDetails',
   components:{
    ArticlesList
   } ,
  data() {
    return {
        nameButtons: ["Kitchen","Bedroom","Building","Architecture","KitchenPlanning",],
          currentTab: 'Kitchen',
          activeel: '',
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
  computed: {
    ChangeTabs(){
        console.log(this.currentTab);
                return `${this.currentTab}`
            }
  }
};
</script>