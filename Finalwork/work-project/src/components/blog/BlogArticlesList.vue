<template>
  <div>
    <component v-if=" tagname ==='Architecture'" :is="CurrentCompList[0]"></component>
    <component v-if=" tagname ==='Bedroom'" :is="CurrentCompList[1]"></component>
    <component  v-if=" tagname ==='Building'" :is="CurrentCompList[2]"></component>
     <component  v-if=" tagname ==='Kitchen'" :is="CurrentCompList[3]"></component>
     <component v-if=" tagname ==='KitchenPlanning'" :is="CurrentCompList[4]"></component>
    
  </div>
</template>

<script>

import CompArticlesArchitecture from './articles/CompArticlesArchitecture.vue';
import CompArticlesBedroom from './articles/CompArticlesBedroom.vue';
import CompArticlesKitchen from "./articles/CompArticlesKitchen.vue";
import CompArticlesBuilding from './articles/CompArticlesBuilding.vue';
import CompKitchenPlanning from './articles/CompKitchenPlanning.vue';

export default {
  name: 'ArticlesList',
  props:['tagname'],
  components:{
     CompArticlesArchitecture
     ,CompArticlesBedroom, CompArticlesBuilding ,CompArticlesKitchen ,CompKitchenPlanning
  },

  data() {
    return {
      CurrentCompList:['CompArticlesArchitecture','CompArticlesBedroom','CompArticlesBuilding','CompArticlesKitchen','CompKitchenPlanning'],
     
    };
  },

  mounted() {

    
  },

  methods: {
    
  },
  computed:{

  }
 
};
</script>