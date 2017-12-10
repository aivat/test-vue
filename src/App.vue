<template>
    <div class="wrapper">
            <app-header :type="page" @onPageTitle="onPageTitleSwitch"></app-header>
            <router-view></router-view>
            <app-footer @onPageTitle="onPageTitleSwitch"></app-footer>
    </div>
</template>

<script>
	
export default {
  name: 'app',
  data () {
    return {
        state: '1',
        page: 'Books'
		
    }
  },
 methods: {
     onUsersOrBook(key) {
         console.log('123');
         if (key=='users') {
             this.page = 'user';
         } else 
             if (key='book') {
                 this.page = 'book';
             }
     },
     onPageTitleSwitch: function (title) { // переключаем в хедере слева заголовок, типа "Книга"
         if (title=='users') {
             console.log(title);
             this.page = 'Users';
         }
         if (title=='books') {
             console.log(title);
             this.page = 'Books';
         }
         if (title=='addBook') {
             console.log(title);
             this.page = 'Add Book';
         } 
         if (title=='addUser') {
             console.log(title);
             this.page = 'Add Book';
         } 
     }
 },
mounted: function () { 
    
        this.$root.$on('onPageTitle', function(title){
           console.log('456789');
        });
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
        .list-item {
        margin-top: 10px;
        display: flex;
        padding: 12px 0;
        /* border-bottom: 1px solid #ccc; */  
        flex-wrap: wrap;
        flex-shrink: 0;
        /*border: 1px solid black;*/
    }

    .list-item:last-child {
        border-bottom: none;
        margin-bottom: 10px;
    }

    .list-item:hover {
        background-color: rgba(0,0,0,0.1);
        border-radius: 3px;
    }
    
    .item-index {
    color: #999;
    padding: 10px;
    padding-top: 0;
    /*padding-left: 0;*/
    text-align: center;
    }
    
</style>
