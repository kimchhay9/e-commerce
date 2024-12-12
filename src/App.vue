<script setup>
import { RouterLink, RouterView } from 'vue-router'
 
</script>

<template>
  <div class="container">
    <header>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="menu">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Section 1</a></li>
          <li><a href="#">Section 2</a></li>
          <li><a href="#">Section 3</a></li>
          <li><a href="#">Section 4</a></li>
        </ul>
      </div>

      <div class="content">
        <h2>Welcome to Page 1</h2>
        <p>This is the content of Page 1.</p>
      </div>
    </main>

    <footer>
      <p>&copy; 2023 My Website</p>
    </footer>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #f0f0f0;
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

main {
  flex: 1;
  display: flex;
}

.menu {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

.content {
  flex: 1;
  padding: 20px;
}

footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
</style>


