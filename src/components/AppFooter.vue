<template>
    <footer class="footer">
      <div class="container">
            <div class="foot-cont">
                <div class="footer-left">
                    <router-link class="btn-1" tag ="a" to="/">Book</router-link>
                </div>
                <div class="footer-right">
                    <router-link class="btn-1" tag ="a" to="/users" @click="onStart">Users</router-link>
                </div>
            </div>
      </div>
    </footer>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 methods: {
     onStart(){
        this.$root.$emit('onBook', 1)
          console.log('123');
     }
 }
}
</script>

<style>
    .footer {
        border-top: 1px solid #E5EFFA;
        background-color: #F8C880;
        display: flex;
        justify-content: center;
        flex: 0 0 auto;
        justify-content: center;
        position: fixed;
        left: 0; bottom: 0;
        width: 100%;
    }
    
    .foot-cont {
        display: flex;
        /* border: 1px dotted blue;*/
        flex: 1;
        justify-content: space-between;
        padding: 15px 20px;   
    }
</style>