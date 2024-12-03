<template>
    <article class="each_promotion" :style="{ backgroundColor: color }">
      <div class="content">
        <h3>{{ content }}</h3>
        <!-- Button_Component receives 'shopnow' method and promotion title as props -->
        <Button_Component :shopNow="shopnow" :promotion="content" />
      </div>
      <img :src="Image" alt="promotion image" />
    </article>
  </template>
  
  <script>
  import Button_Component from './Button_Component.vue';
  
  export default {
    name: 'Promotion',
  
    props: {
      content: String,  // Title of the promotion
      Image: String,    // Image URL for the promotion
      shopnow: Function, // Method to handle "shop now" click event
      color:String
    },
  
    components: {
      Button_Component,
    },
  };
  </script>
  

<style>

.each_promotion{
    display: flex;
    width: 27rem;
    position: relative;
    height: 14rem;
    align-items: center;
    padding-left: 2rem;
    border-radius: .25rem;
}
.each_promotion img {
    width: 22rem;
    height: 100%;
    position: absolute;
    right: 0;
    
}
.content{
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
}
</style>