<template>
    <div class="wrapper">
            <app-header></app-header>
            <app-content></app-content>
            <app-footer></app-footer>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size: 14px;
    }

    html, body {
        height: 100%;
    }

    /*#app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }*/

    .wrapper {
       display: flex;
        flex-direction: column;
        height: 100%;
        /*border: 2px dotted #0dd03a;*/
        align-items: center;
    }

    .container {
        display: flex;
        flex: 1 0 auto;
        align-items: flex-start;
        /* border: 1px solid #070606;*/
        width: 100%;
    }
    
    @media  all and (min-width: 1060px) {
        .container {
            /*display: block;*/
            width: 1060px; 
            flex: 0 0 auto;
        }
    }
</style>
