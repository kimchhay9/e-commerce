<template>
    <article class="each_category">
        <img :src="image" :alt="'Image of ' + title" /> <!-- Dynamic alt text for accessibility -->

        <h4 class="title_product">{{ title }}</h4>
        <span>{{ quantity }} Items</span>
    </article>
</template>

<script>
export default {
    name: "Category",
    props: {
        image: {
            type: String,
            required: true,  // Ensure the image URL is passed
        },
        title: {
            type: String,
            required: true,  // Ensure the title is passed
        },
        quantity: {
            type: Number,
            required: true,  // Ensure quantity is passed
        },
    },
}
</script>

<style scoped>
.each_category {
    width: 8.25rem;
    height: 12rem;  /* Increased height for better spacing */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.45rem;
    gap: 0.5rem;  /* Increased gap between elements for better spacing */
    box-shadow: 5px 5px 5px rgba(222, 222, 222, 0.1);
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover transition */
}

.each_category:hover {
    transform: translateY(-5px); /* Slight upward hover effect */
    box-shadow: 5px 10px 15px rgba(222, 222, 222, 0.2); /* Enhanced hover shadow */
    border: 1.6px solid #81B13D;
    outline: none;
}

.each_category img {
    width: 6rem;
    height: 6rem;
    object-fit: cover; /* Ensures images are properly scaled */
    border-radius: 50%; /* Makes the image circular */
}

.each_category span {
    font-size: 0.85rem; /* Slightly larger font size */
    color: rgb(124, 132, 138);
}

.each_category .title_product {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;  /* Makes the title stand out */
}
</style>
