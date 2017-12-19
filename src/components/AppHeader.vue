<template>
    <header class="header">
        <div class="container">
            <div class="head-cont">
                <div class="header-left">
					<router-link tag ="a" to="/" v-show="currentRoute === '/'">Книги</router-link>
					<router-link tag ="a" to="/books/new" v-show="currentRoute === '/books/new'">Добавить книгу</router-link>
					<router-link tag ="a" to="/users" v-show="currentRoute === '/users'">Пользователи</router-link>
					<router-link tag ="a" to="/users/new" v-show="currentRoute === '/users/new'">Добавить пользователя</router-link>
                    <router-link tag ="a" v-bind:to="currentRoute" v-show="titlePage == 'editUserTitle'">Редактирование пользователя</router-link>
                    <router-link tag ="a" v-bind:to="currentRoute" v-show="titlePage == 'editBookTitle'">Редактирование книги</router-link>
                    <router-link tag ="a" v-bind:to="currentRoute" v-show="titlePage == 'editAuthorTitle'">Редактирование автора</router-link>
                </div>
                <div class="header-right">
                    <router-link class="btn-1" tag ="a" to="/books/new" v-show="currentRoute === '/'">Добавить книгу</router-link>
                    <router-link class="btn-1" tag ="a" to="/users/new" v-show="currentRoute === '/users'">Добавить пользователя</router-link>     
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
            title: 'book',
			currentRoute: router.currentRoute.path	
        }
    },
    props: ['type'],
    computed: {
        titlePage: function () {
            let page; 
            let regexpUser = /users\/\d{1,}/g;
            let regexpBook = /books\/\d{1,}/g;
            let regexpAuthor = /authors\/\d{1,}/g;
            if (this.currentRoute.match(regexpUser) != null) {
                console.log('match=', this.currentRoute.match(regexpUser));
                page = 'editUserTitle';
            }
            if (this.currentRoute.match(regexpBook) != null) {
                console.log('match=', this.currentRoute.match(regexpBook));
                page = 'editBookTitle';
            }
            if (this.currentRoute.match(regexpAuthor) != null) {
                console.log('match=', this.currentRoute.match(regexpAuthor));
                page = 'editAuthorTitle';
            }
            return page;
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
        border: 0px solid #ccc;
        padding: 6px 12px;
        transition: 0.2s;
        background: #40A6E3;
        font-weight: 700; 
        outline: 0;
    }

    .btn-1:hover {
        background: #6FC1F1;  
        border: 0px;
    }

    .btn-1:active {
        background: #4F88AA; 
        border: 0px;
    }
    
    
    
</style>