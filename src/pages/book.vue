<template>
  <div class="content">
      <div class="container">  
        <div class="book-list">
            <form method="post">
                <fieldset v-for="book in books">
                    <legend>Редактирование книги</legend>
                    <label for="name-book">Название книги</label>
                    <input type="text" id="name-book" name="name-book" placeholder="Название книги" required v-model="book.title_book">
                    <label for="author">Автор</label>
                    <input type="text" id="author" name="author" placeholder="Автор" required v-model="book.author">
                    <label for="annotation">Аннотация</label>
                    <textarea id="annotation" name="annotation" rows="8" placeholder="Краткое содержание" v-model="book.annotation"></textarea>
                </fieldset>
                <div class="buttons">
                    <input value="Сохранить" class="btn-1" v-on:click="postData()">
                    <input type="submit" value="Отмена" class="btn-1">
                </div>
            </form>
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
            books: [],           
            currentRoute: router.currentRoute.path,
            postBody: {
                    title_book: '',
                    author: '',
                    annotation: ''    
                }
            }
    },
    created () {
            // запрашиваем данные когда реактивное представление уже создано
            this.fetchData()
    },  
    watch: {
        	// в случае изменения маршрута запрашиваем данные вновь
            '$route': 'fetchData'
    }, 
    methods: {  
			fetchData () {
					axios.get('http://testik.ru' + this.currentRoute)
						.then(response =>{
								console.log('роутер =', this.currentRoute);
								this.books = response.data;
								console.log('данные =', response);
						})
						.catch(e => {
								console.log(e.message);
						});
					},
            postData () {
                this.postBody.title_book = this.books[0].title_book
                this.postBody.author = this.books[0].author
                this.postBody.annotation = this.books[0].annotation
                axios.post('http://testik.ru' + this.currentRoute, this.postBody)
                .then(response => {
                    console.log('данные =', response);
                })
                .catch(e => {
                  this.errors.push(e)
                })   
            }
    }
}
</script>

<style>
    
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
	
</style>