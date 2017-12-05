<template>  
  <div class="content">
      <div class="container">
        <div class="book-list">
    <div class="list-item">
        <div class="item-index">
            1
        </div>
        <div class="user">
            <div class="info-user">
                <a href="редактировать">Баймешов Айват Сагимбаевич</a>
            </div>
            <div class="user-action">
                <a href="#">выдать/сдать</a>                   
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
    .user {
   /* border: 1px dotted red;*/
    display: inline-block;
     
}
.info-user,.user-action {
    padding: 0 10px;
    display: inline-block;

}
</style>