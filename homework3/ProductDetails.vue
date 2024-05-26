<template>
  <div>
    <p>{{ product.name }}</p>
    <p>{{ formattedPrice}}</p>
    <template v-if="product.available">
        Available
    </template>
    <template v-if="!product.available">
        Out of stock
    </template>
  </div>
</template>

<script>
export default {
  name: 'VueJsProductDetails',

  data() {
    return {
      
        product:{
            name:"Banana",
            price: 100,
            available:false,
        }
    };
  },

  computed:{
    formattedPrice(){
        return "$"+ String(this.product.price)
    }

  },

  methods: {
   
  },
};
</script>