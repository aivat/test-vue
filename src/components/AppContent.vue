<template>
  <div class="content">
      <div class="container">    
        <div class="book-list">
            1
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
    .content {
        display: flex;
        flex: 1 0 auto;
        background-color:  rgba(207, 225, 244, 0.5);
        justify-content: center;
        width: 100%;
        /*border: 1px solid #0dd03a;*/
    }
    .book-list {
        display: flex;
        flex-direction:column;
        flex: 1;
        /*flex: 1;*/
        margin-top: 15px;
        padding: 0 20px;
        background-color: #fff;
        /*border-bottom: 1px solid #ccc;*/
        /* border: 1px solid #E55FFA;*/
        margin-bottom: 65px;
        border: 1px solid #c9d0d6;
    }
</style>