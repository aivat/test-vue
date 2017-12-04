<template>
    <header class="header">
        <div class="container">
            <div class="head-cont">
                <div class="header-left">
                    <a href="#">Книги</a> 
                </div>
                <div class="header-right">
                    <a href="#" class="btn-1">Добавить</a>
                </div>
            </div>
        </div>
    </header>
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
     .header {
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        display: flex;
        flex: 0 0 auto;
        width: 100%;
        background-color: rgb(255,255,255);
        justify-content: center;
    }
    
    .head-cont {
        display: flex;
        /* border: 1px dotted blue;*/
        flex: 1;
        justify-content: space-between;
    }
    
    .header-left a {
        font-size: 16px;
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
    
    .header-left, .header-right {
        padding: 15px 20px;
        border-bottom: 2px solid white;
    }
    
    .header-left:hover {
        border-bottom-color: rgb(64,167,227);
    }
    .btn-1 {
        color: white;
        text-decoration: none;
        width: auto;
        height: auto;
        border-radius: 4px;
        border-color: #ccc;
        padding: 6px 12px;
        transition: 0.2s;
        background: #43709F;   
    }

    .btn-1:hover {
       background: #5B88B8;
    }
    
    
    
</style>