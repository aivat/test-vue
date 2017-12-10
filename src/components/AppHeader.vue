<template>
    <header class="header">
        <div class="container">
            <div class="head-cont">
                <div class="header-left">
					<router-link tag ="a" to="/" v-show="currentRoute === '/'">Книги</router-link>
					<router-link tag ="a" to="/addbook" v-show="currentRoute === '/addbook'">Добавить книгу</router-link>
					<router-link tag ="a" to="/users" v-show="currentRoute === '/users'">Пользователи</router-link>
					<router-link tag ="a" to="/adduser" v-show="currentRoute === '/adduser'">Добавить пользователя</router-link>
                </div>
                <div class="header-right">
                    <router-link class="btn-1" tag ="a" to="/addbook" v-show="currentRoute === '/'">Add Book</router-link>
                    <router-link class="btn-1" tag ="a" to="/adduser" v-show="currentRoute === '/users'">Add User</router-link>     
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { router } from '../main.js'
export default {
    data () {
        return {
            state: 'book',
			currentRoute: router.currentRoute.path
			
        }
    },
    props: ['type'],
    computed: {
       pageQwerty: function () {
            return this.type;
           console.log(this.pageQwerty);
            console.log('123');
        }
    },
    mounted: function () {  
        this.$root.$emit('onPageTitle', 'addBook');
    },
     methods: {
         onAsd(){
             this.state = 'user';
         }
     },
	watch: {
		'$route' (to, from) {
			console.log('to.path=', to.path);
			console.log('from.path=', from.path);
			this.currentRoute = to.path;
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