<template>
  <div class="project__content">
    <div class="project_list__container">
    <div class="project_main_decors" v-for="decor in  paginatedProducts" :key="decor.id">
            <div class="project_main_decors_show">
              <img
                class="project_main_decors_show_picture"
               :src="require(`../../assets/img/projectpage/decor/bedroom/${decor.img}`)"
                alt="img"
              />
            
             
              <div class="project_main_decors_show__content">
                <div class="project_main_decors_show__text">
                  <h1 class="project_main_decors_show__text_title">
                    {{decor.title}}
                  </h1>
                  <p class="project_main_decors_show_about">
                    {{decor.about}}
                  </p>
                </div>
                <router-link to="/about">
                  <div class="project_main_decors_show__content_arrow">
                          <img
                            class="project_main_decors_show__content_img"
                            src="../../assets/img/icon/arrow.png"
                            alt="png"
                          />
                        </div>
                </router-link>
              </div>
            </div>
      </div>
      
    </div>
    <div v-if="totalPages > 1" class="blog_main_bot__container_navigation">
        <router-link  v-for="pageNumber in totalPages" :key="pageNumber" :to="getPageLink(pageNumber)">
        {{ pageNumber }}
        </router-link>
    </div>

  </div>
    
  
</template>

<script>
export default {
  name: 'ProjectList',
  props:['decors'],


  data() {
    return {
      page:1,
      total:0,
      itemsPerPage:6,
     
      
    };
  },
  computed:{
    
   totalPages() {
    return Math.ceil(this.decors.length / this.itemsPerPage);},
    paginatedProducts() {
    const pageNumber = this.getCurrentPageNumber();
    const startIndex = (pageNumber -1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.decors.slice(startIndex, endIndex);
    }


  },

  mounted() {
   
  },

  methods: {
    getCurrentPageNumber() {
    const pageNumberParam = parseInt(this.$route.params.pageNumber);
    return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
    },
    getPageLink(pageNumber) {
    return `/project/${pageNumber}`;
}
    
  },
};
</script>