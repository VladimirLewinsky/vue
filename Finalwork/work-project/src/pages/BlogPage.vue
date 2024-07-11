<template>
  
  <div>
    <div class="blog_main" >
      <div class="blog_main_top">
        <div class="blog_main_top__slogan">
          <h1 class="blog_main_top__title">Articles & News</h1>
          <p class="blog_main_top__position">Home / Blog</p>
        </div>
      </div>
      <div class="blog_main_center">
        <div class="blog_main_center_post">
          <h1 class="blog_main_center_post__title">Latest Post</h1>
          <div class="blog_main_center_post__info">
            <div class="blog_main_center_post__info__left">
              <img src='../assets/img/blog/center/center.png' alt="img" />
            </div>
            <div class="blog_main_center_post__info__right">
              <h3 class="blog_main_center_post__info__right__title">Low Cost Latest Invented Interior Designing Ideas</h3>
              <p class="blog_main_center_post__info__right__about">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpis dignissim maximus.posuere in.Contrary to popular belief.
               
              </p>
              <p class="blog_main_center_post__info__right__about">Lorem Ipsum is not simply random text. It has roots in a piece</p>
              <!--  -->
              <div class="blog_main_center_post__info__right__section">
                <p class="blog_main_center_post__info__right__section__date">
                  26 December,2022
                </p>
                <router-link to="/articles">
                  <div class="blog_main_center_post__info__right__section_arrow">
                    <img
                      class="blog_main_center_post__info__right__section__img"
                      src="../assets/img/icon/arrow.png"
                      alt="png"
                    />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blog_main_bot">
        <h1 class="blog_main_bot__title">Articles & News</h1>
        
        <div class="blog_main_bot__container">
          
            <div class="blog_main_bot__container__item" v-for="item in paginatedProducts" :key="item.id">
             
              
                <div class="blog_main_bot__container__item_top">
                    <img
                      class="blog_main_bot__container__item__picture"
                       :src="require(`./../assets/img/blog/bot/img/${item.picture}`)"
                      />
                   
                    <button type="button" class="blog_main_bot__container__item__picture__button">{{item.button_design}}</button>
                  </div>
                  <div class="blog_main_bot__container__item_bot">
                    <h1 class="blog_main_bot__container__item__title">
                      {{item.title}}
                    </h1>
                    <div class="blog_main_bot__container__item_bot__section">
                      <p class="blog_main_bot__container__item__date">
                        {{item.date}}
                      </p>
                      <router-link to="/articles">
                        <div class="blog_main_bot__container__item_bot__section_arrow">
                          <img
                            class="blog_main_bot__container__item_bot__img"
                            src="../assets/img/icon/arrow.png"
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
    </div>

  </div>
</template>


<script>
export default {
  name: 'VueJsCompBlog',

  data() {
    return {
      items:[
                    {
                        picture:`Image_1.png`,
                        title:"Let’s Get Solution For Building Construction Work",
                        date:"26 December,2022",
                        button_design:"Kitchan Design",
                        },
                    {
                        picture:`image_2.png`,
                        title:"Low Cost Latest Invented Interior Designing Ideas.",
                        date:"22 December,2022",
                        button_design:"Living Design"
                        },
                    {
                        picture:"image_3.png",
                        title:"Best For Any Office & Business Interior Solution",
                        date:"25 December,2022",
                        button_design:"Interior Design"
                        },
                    {
                        picture:"image_4.png",
                        title:"Let’s Get Solution For Building Construction Work",
                        date:"26 December,2022",
                        button_design:"Kitchan Design",
                        },
                    {
                        picture:"image_5.png",
                        title:"Best For Any Office & Business Interior Solution",
                        date:"22 December,2022",
                         button_design:"Living Design"
                        },
                    {
                        picture:"image_6.png",
                        title:"Let’s Get Solution For Building Construction Work",
                        date:"25 December,2022",
                        button_design:"Interior Design"
                        },
                    {
                        picture:"image_4.png",
                        title:"Let’s Get Solution For Building Construction Work",
                        date:"26 December,2022",
                        button_design:"Kitchan Design",
                        },
                    {
                        picture:"image_5.png",
                        title:"Best For Any Office & Business Interior Solution",
                        date:"22 December,2022",
                         button_design:"Living Design"
                        },
                    {
                        picture:"image_6.png",
                        title:"Let’s Get Solution For Building Construction Work",
                        date:"25 December,2022",
                        button_design:"Interior Design"
                        },
                        {
                        picture:`Image_1.png`,
                        title:"Let’s Get Solution For Building Construction Work",
                        date:"26 December,2022",
                        button_design:"Kitchan Design",
                        },
            ],
       itemsPerPage:6
    };
    
  },

  computed:{
    
    totalPages() {
     return Math.ceil(this.items.length / this.itemsPerPage);},
     paginatedProducts() {
     const pageNumber = this.getCurrentPageNumber();
     const startIndex = (pageNumber -1) * this.itemsPerPage;
     const endIndex = startIndex + this.itemsPerPage;
     return this.items.slice(startIndex, endIndex);
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
     return `/blog/${pageNumber}`;
 }
     
   },

};
</script>

