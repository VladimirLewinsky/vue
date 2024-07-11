<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" style="
    width: 1201px;
    height: 799px;
        ">
        <div class="carousel-indicators" style="bottom:-60px">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style=" height: 10px; width: 10px; border-radius: 50%; border:1px,solid,black"
            ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" 
            style=" height: 10px; width: 10px; border-radius: 50%; border:1px,solid,black"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" 
            style=" height: 10px; width: 10px; border-radius: 50%; border:1px,solid,black"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../../assets/img/project/Slider/3.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../../assets/img/project/Slider/2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../../assets/img/project/Slider/1.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        
  </div>
</template>

<script>
export default {
  name: 'ProjectSlider',

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


