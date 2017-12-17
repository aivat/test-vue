<template>
<div class="content">
	<div class="container">
		<div class="book-list" >
				<div class="list-item" v-for="book in books" v-if="books">
					<div class="item-index">
						{{ book.id }}
					</div>
					<div class="book" >
						<div class="title-book">
							<router-link tag ="a" v-bind:to="{ name: 'editBook', params: { idBook: book.id }}">{{ book.title_book }}</router-link>
						</div>
						<div class="author">
							<router-link tag ="a" v-bind:to="{ name: 'editAuthor', params: { idAuthor: book.id }}">{{ book.author }}</router-link>     
						</div>
					</div>
				</div>
				<div class="list-loader" v-if="loading">
					<img src="../assets/loader2.gif">
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
			books: [],
			loading: false,
			error: false,
			count: 15,
			first: 0,
			scrolled: false
            }
    },
    computed: {
		resourseUrl() {
			return 'http://testik.ru/books?count='+this.count+'&first='+this.first
		}
	},
    created () {
            // запрашиваем данные когда реактивное представление уже создано
            this.fetchData(),
			window.addEventListener('scroll', this.handleScroll)
   	},
	destroyed () {
	  		window.removeEventListener('scroll', this.handleScroll)
	},
    watch: {
        // в случае изменения маршрута запрашиваем данные вновь
            '$route': 'fetchData'		
    }, 
    methods: {
		// можно удалить, он не используется
		onScroll (event) {
			let bookList = event.target,
				list = bookList.firstElementChild
			
			let scrollTop = bookList.scrollTop,
				bookListHeight = bookList.offsetHeight,
				listHeight = list.offsetHeight
			
			let diffHeight = listHeight - bookListHeight
			//console.log(listHeight, bookListHeight)
			//console.log(diffHeight, scrollTop)
			//console.log(document.body.scrollHeight, window.pageYOffset)
			if (diffHeight <= (scrollTop) && !this.loading && !this.error) {
				this.fetchData ();
			}
			
		},
        fetchData () {
				this.loading = true
                axios.get(this.resourseUrl)
                    .then(response =>{
						//this.books = response.data
						console.log(response)
                       	this.books = this.books.concat(response.data)
						//this.resourseUrl = ''
						this.loading = false
						this.count = this.count + 10
						this.first = this.first + 1
                    })
                    .catch(e => {
                        console.log(e.message)
						this.error = true
						this.loading = false
                    });
                },
		handleScroll (event) {
			// почему так высчитывается так до конца и не разобрался, но математическим путем опряделяется верно. 40 пиксей добавил, чтобы загрузка происхода еще до прокрутки до самого низа
			let scrollTop = window.pageYOffset,
				listOffsetHeight = document.body.offsetHeight,
				listScrollHeight = document.body.scrollHeight
			
			let diffHeight = listScrollHeight - listOffsetHeight
			
			if (diffHeight <= (scrollTop+40) && !this.loading && !this.error) {
				this.fetchData ();
			}
		}
	}
}
	
// временное решение типа по API возвращаются данные
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
	
	.list-loader img {
		display: block;
		margin: 0 auto;
		width: 24px;
		height: 24px;
		/*overflow-y: scroll;
		/*height: 500px;*/
	}
</style>