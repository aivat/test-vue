<template>
  <div class="content">
      <div class="container">    
        <div class="book-list">
            <div class="wrapper-add">
                <fieldset>
                    <legend>Добавление книги</legend>
                    <label v-show="!isBook" class="error-add">Заполните все поля!</label>
                    <label for="name-book">Название книги</label>
                    <input type="text" id="name-book" name="name-book" placeholder="Название книги" v-model="book.title_book">
                    <label for="author">Автор</label>
                    <input type="text" id="author" name="author" placeholder="Автор" required v-model="book.author">
                    <label for="annotation">Аннотация</label>
                    <textarea id="annotation" name="annotation" rows="8" placeholder="Краткое содержание" v-model="book.annotation"></textarea>
                </fieldset>
                <div class="buttons">
                    <button class="btn-1" v-on:click="postDataNewBook()">Добавить</button>
                    <router-link class="btn-1" tag ="a" to="/" >Отмена</router-link> 
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { router } from '../main.js'
import  axios from 'axios'
    
export default {
    data () {
        return {
            book: {
				    title_book: '',
                    author: '',
                    annotation: ''
			},           
            currentRoute: router.currentRoute.path
		}
    },
    computed: {
        isBook: function () {
                if ( this.book.title_book == '' || this.book.author == '' || this.book.annotation == '' ) {
                   return false
                } else return true
        }
    },
    methods: {  
            postDataNewBook () {
                if ( this.isBook ) {
                    axios.post('http://testik.ru/books/new', this.book)
                    .then(response => {
                        console.log('данные =', response);
                        router.push({ path: '/' })
                    })
                    .catch(e => {
                      this.errors.push(e)
                    })    
                } else {
                    console.log('Пустые поля')
                }  
            }
    }
}
</script>

<style>
        .wrapper-add {
      padding: 20px 0;  
        display: flex;
        flex-direction:column;
        justify-content: space-between;
    }
    
	.book-list {
    display: flex;
    flex-direction:column;
    flex: 1;
    margin-top: 15px;
    padding: 0 20px;
    background-color: #fff;
    margin-bottom: 65px;
    border: 1px solid #c9d0d6;   
	}
	
	fieldset {
    padding: 10px;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
	}
	
	form {
    padding: 10px 0;
    /*box-shadow: 0 0 10px #cccccc;*/
	}

	fieldset legend {
		/*color: #d8d8d8;*/
	}

	label {
		display: block;
		margin-bottom: 5px;
	}

	input, textarea {
		width: 95%;
		height: 24px;
		margin-bottom: 10px;
	    padding: 2px 5px;
		border: 1px solid #cccccc;
		border-radius: 5px;
		vertical-align: middle;
	}

	textarea {
		height: auto;
		resize: none;
	}
       .error-add {
        background-color: bisque;
    }
	
</style>