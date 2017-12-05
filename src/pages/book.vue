<template>
  <div class="content">
      <div class="container">
        <div class="book-list">
    <div class="list-item">
        <router-link tag ="a" to="/users">users</router-link>
        <div class="item-index">
            1
        </div>
        <div class="book">
            <div class="title-book">
                <a href="#">Мастер и Маргарита Мастер и Маргарита Мастер и Маргарита Мастер и Маргарита Мастер и Маргарита</a>
            </div>
            <div class="author">
                <a href="#">Михаил Афанасьевич Булгаков</a>            
            </div>
        </div>
    </div>
                    </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

    .title-book a {
    color: #333;
    font-weight: 700;
    text-decoration: none;    
    }
    
    .author a {
    padding-bottom: 1px;
    border-bottom: 1px solid #d8d8d8;
    color: #999;
    text-decoration: none;
    font-size: 11px;   
    }
</style>