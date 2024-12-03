

<template>
  <main class="main_content">
    <div class="category_container">
      <Category
        v-for="category in categories" 
        :key="category.name" 
        :style="{ backgroundColor: category.color }" 
        :image="category.image" 
        :title="category.name" 
        :quantity="category.productCount" />
    </div>
    <div class="promotion_container">
    <Promotion
      v-for="promotion in promotions" 
      :key="promotion.url"
      :content="promotion.title"
      :Image="promotion.image"
      :shopnow="shopnow"
      :color="promotion.color"
    />
  </div>
  </main>
</template>

<script>
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';


export default {
  name: "App",
  components: {
    Promotion,Category
  },
  data() {
    return {
      promotions: [
        {
          title: "Everyday Fresh and Clean with Our Products",
          color: "#F0E8D5",
          image: './src/assets/img/Cms_1.jpg',
          buttonColor: "#42B678",
          url: "/promotions/1",
        },
        {
          title: "Make your Breakfast Healthy and Easy",
          color: "#F3E8E8",
          image: './src/assets/img/Cms_2.png',
          buttonColor: "#42B678",
          url: "/promotions/2",
        },
        {
          title: "The best Organic Products Online",
          color: "#E7EAF3",
          image: './src/assets/img/Cms_3.jpg',
          buttonColor: "#42B678",
          url: "/promotions/3",
        },
      ],
      categories: [
        {
          name: "Cake & Milk",
          productCount: 14,
          color: '#F2FCE4',
          image: './src/assets/img/image1.png',
        },
        {
          name: "Peach",
          productCount: 17,
          color: '#FFFCEB',
          image: './src/assets/img/image2.png',
        },
        {
          name: "Organic Kiwi",
          productCount: 21,
          color: '#ECFFEC',
          image: './src/assets/img/image3.png',
        },
        {
          name: "Red Apple",
          productCount: 68,
          color: '#FEEFEA',
          image: './src/assets/img/image4.png',
        },
        {
          name: "Snack",
          productCount: 34,
          color: '#FFF3EB',
          image: './src/assets/img/image5.png',
        },
        {
          name: "Black Plum",
          productCount: 25,
          color: '#FFF3FF',
          image: './src/assets/img/image6.png',
        },
        {
          name: "Vegetables",
          productCount: 65,
          color: '#F2FCE4',
          image: './src/assets/img/image7.png',
        },
        {
          name: "Headphones",
          productCount: 33,
          color: '#FFFCEB',
          image: './src/assets/img/image8.png',
        },
        {
          name: "Cake & Milk",
          productCount: 54,
          color: '#F2FCE4',
          image: './src/assets/img/image9.png',
        },
        {
          name: "Orange",
          productCount: 63,
          color: '#FFF3FF',
          image: './src/assets/img/image10.png',
        },
      ],
    };
  },
};
</script>
<style>
.main_content {
  min-height: 100vh;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main_content .category_container {
  gap: 1.2rem;
  width: 100%;
  padding: 1rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
  height: auto;
}

.main_content .promotion_container {
  width: 96%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
  place-items: center;
  row-gap: 1rem;
}
</style>
