<template>
<div class="content">
	<div class="container">
		<div class="book-list">
			<div class="list-item" v-for="book in books">
				<div class="item-index">
					{{ book.id }}
				</div>
				<div class="book" >
					<div class="title-book">
						<router-link tag ="a" v-bind:to="{ name: 'editBook', params: { idBook: book.id }}">{{ book.title_book }}</router-link>
					</div>
					<div class="author">
						<router-link tag ="a" v-bind:to="{ name: 'editAuthor', params: { idAuthor: book.idAuthor }}">{{ book.author }}</router-link>     
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
    
import  axios from 'axios'
    
export default {
    data () {
        return {
          books: {}
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
                axios.get('http://testik.ru/books/')
                    .then(response =>{
                        this.books = response.data;
                    })
                    .catch(e => {
                        console.log(e.message);
                    });
                }
        }
}

function mapFromSomewhereBooks () {
	return {
		1: {
			idBook: "1",
			nameBook: "Мастер и Маргарита",
			idAuthor: "1",
			author: "Михаил Афанасьевич Булгаков"
		},	  	  
		2: {
			idBook: "2",
			nameBook: "Три товарища",
			idAuthor: "2",
			author: "Эрих Мария Ремарк"
		},
		3: {
			idBook: "3",
			nameBook: "Над пропастью во ржи",
			idAuthor: "3",
			author: "Джером Д. Сэлинджер"
		}
	};
} 
</script>

<style>

    .title-book a {
		color: #333;
		font-weight: 700;
		text-decoration: none;    
    }
	
	.title-book a:hover {
		color: rgb(64,167,227);
		text-decoration: underline;    
    }
    
    .author a {
		padding-bottom: 1px;
		border-bottom: 1px solid #d8d8d8;
		color: #999;
		text-decoration: none;
		font-size: 11px;   
    }
	
	.author a:hover {
		color: rgb(64,167,227);
    }
</style>