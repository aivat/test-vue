<template>
  <div class="content">
      <div class="container">
        <div class="container-give-book">
        <div class="give-book del-bottom">
            <div class="title-give">
                <p>Выдать книгу пользователю
					<router-link tag ="a" class="user-name" v-bind:to="{ name: 'editUser', params: { idUser: getIdUsers }}">{{ users.last_name }} {{ users.first_name }}</router-link>  
                </p>
            </div>
            <div class="searсh-book">
              <div class="search-control">       
                  <div class="selector-container dropdown-container big limited-height">
			         <table class="selector-table">
						<tr>
							<td class="selector">
								<input  id="selector-input" type="text" placeholder="Выберите книгу" class="selector-input" oninput="onSearchClinic(this.value)">	
				            </td>
				            <td class="selector-dropdown">
                                &nbsp;
                            </td>
				        </tr>
				    </table>
					<div class="results-container">
						<div  class="result-list result-list-scrollable">
							<ul id="result-book">
                                <li onmousedown="SelectItemMouseDown(-1, 0, this)">
                                    <p>Анна Каренина</p>
                                    <p class="result-title-author">Лев Толстой</p>
                                </li>
                                <li onmousedown="SelectItemMouseDown(-1, 0, this)">
                                    <p>Маленький принц</p>
                                    <p class="result-title-author">Антуан де Сент-Экзюпери</p>
                                </li>  
                                <li onmousedown="SelectItemMouseDown(-1, 0, this)">
                                    <p>Сто лет одиночества</p>
                                    <p class="result-title-author">Габриэль Гарсиа Маркес</p>
                                </li>
                                <li onmousedown="SelectItemMouseDown(-1, 0, this)">
                                    <p>Над пропастью во ржи</p>
                                    <p class="result-title-author">Джером Д. Сэлинджер</p>
                                </li> 
                                <li onmousedown="SelectItemMouseDown(-1, 0, this)">
                                    <p>Над пропастью во ржи</p>
                                    <p class="result-title-author">Эрих Мария Ремарк</p>
                                </li>                                 
							 </ul>
						  </div>
				        </div>
				    </div>
                </div>
                <div class="add-book">
                    <button type="submit">Выдать книгу</button>
                </div>
            </div>
        </div>  
        <div class="book-list del-margin-book">
            <div class="list-item list-item-book-delet" v-for="book in userHaveBooks">
                <div class="list-item-book">
                    <div class="item-index">
						{{ book.id }}
					</div>
                    <div class="book">
                        <div class="title-book">
							<router-link tag ="a" v-bind:to="{ name: 'editBook', params: { idBook: book.id }}">{{ book.title_book }}</router-link>             
                        </div>
                        <div class="author">
							<router-link tag ="a" v-bind:to="{ name: 'editAuthor', params: { idAuthor: book.id }}">{{ book.author }}</router-link>         
                        </div>
                    </div>
                </div>
                <div class="book-delet">
                    <button type="submit" class="btn-2">Удалить книгу</button>
                </div>
            </div>
        </div>
          </div>
    <!--</div>  -->
      </div>
  </div>
</template>

<script>
import { router } from '../main.js'
import  axios from 'axios'
    
export default {
    data () {
        return {
            userHaveBooks: {
					1: {id: '1',
					id_book: '2',
				    title_book: 'asd',
                    author: 'asd'
					   },
				2: {
				id: '1',
					id_book: '2',
				    title_book: 'asd',
                    author: 'asd'
				}
			},           
            currentRoute: router.currentRoute.path,
            loading: false,
			users: {}
		}
    },
    computed: {
        getIdUsers: function () {
            let id = this.currentRoute.split('/')
            return id[2]        
        }
    },
    created () {
			// запрашиваем данные когда реактивное представление уже создано
			//this.fetchData(),
			window.addEventListener('scroll', this.handleScroll),
            console.log(this.getIdUsers),
			this.fetchDataUser ()
    },
	watch: {
        // в случае изменения маршрута запрашиваем данные вновь
            '$route': 'fetchDataUser'		
    }, 
    methods: {
			fetchDataUser () {
				this.loading = true
				axios.get('http://testik.ru/users/' + this.getIdUsers)
					.then(response =>{
							console.log(response)
							this.users = response.data[0]
							console.log('this.users =', this.users )
							this.loading = false
					})
					.catch(e => {
							console.log(e.message)
							this.error = true
							this.loading = false
					});
			},
        	fetchDataBook () {
				this.loading = true
                axios.get('http://testik.ru', this.currentRoute)
                    .then(response =>{
						//this.books = response.data
						console.log(response)
                       	this.userHaveBooks = response.data
						//this.resourseUrl = ''
						this.loading = false
                    })
                    .catch(e => {
                        console.log(e.message)
						this.error = true
						this.loading = false
                    });
            }
    }
}
</script>

<style scoped>
    .container-give-book {
    width: 100%;
}
	.book-list,.give-book {
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
            margin-top: 15px;
    padding: 0;
    border: 1px solid #c9d0d6;  
    border-bottom: none;
    
}
    
    .del-bottom {
    margin-bottom: 0;
   /* margin-top: 0;*/
}
    .del-margin-book {
        margin-bottom: 0;
        margin-top: 0;  
        padding: 0 10px;
    }
    
    .title-give {
    padding: 15px 20px;
    /*border-bottom: 1px solid #d7d8db;*/
  /*  border: 1px solid #c9d0d6;
    border-bottom: none;*/
}
    
    .searсh-book {
    display: flex;
    justify-content: space-between;
}
    .search-control {
    flex-grow: 1;
    
}
    
    .selector-container {
    position: relative;
}
    
    .selector-table {
	/*border-radius: 1px;*/
	border: 1px solid #d3d9de;
    border-left: none;
	width: 100%;
	border-spacing: 0px;
	border-collapse: separate;
}
    
    .selector {
	padding: 3px 0;
	overflow: hidden;
    margin: 0;
}

.selector-input {
	padding: 2px 0 1px 19px;
    margin-bottom: 6px;
	color: rgb(34, 34, 34);
	border: none;
	text-overflow: ellipsis;
	margin: 0 0 1px;
    outline-style: none;
    border: none;
    width: 100%;
}
    .selector-dropdown {
	width: 20px;
	background: url(../assets/dropdown_arrow.png) no-repeat 5px 50%;
    border: none;
    border-left: 1px solid transparent;
    padding: 0;	  
    cursor: pointer;
}
    .results-container {
    width: 100%;
        
}
    .result-list {
	/*display: none;*/
	margin: 0;
   /* border: 1px solid #c9d0d6;*/
    max-height:155px;
    /*width:198px;*/
    border-radius: 0 0 1px 1px;
}
    .result-list ul li {
    padding: 6px 0 8px 19px;
    cursor: pointer;
}

.result-list ul li:hover {
    background-color: #e7edf2;
}

    .result-list-scrollable {
    overflow-y: scroll;
}
    .result-title-author {
    font-size: 0.8em;
    color: #A0A3A6;
}
    .add-book {
    margin: 0 20px;
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
    
    .list-item-book-delet {
     justify-content: space-between;
    flex-wrap: nowrap;
}
    
    .list-item-book {
    display: flex;
}
    .item-index {
    color: #999;
    padding: 10px;
    padding-top: 0;
    /*padding-left: 0;*/

    text-align: center;
}
    
    .title-book a {
    color: #333;
    font-weight: 700;
    text-decoration: none;
    
}
    
    .title-give p a {
        color: #333;
        font-weight: 700;
        text-decoration: none;    
    } 
    
    .title-give p a:hover {
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
    .book-delet {
    padding-right: 10px;
}
    button {
   color: white;
    background-color: #129753;
    border-radius: 4px;
    padding: 6px 12px;
     background: #129753;
    border-color: #ccc;
    border: 1px solid #129753;
    min-width: 115px;
	cursor: pointer;
}

button:hover {
    background: #4BAE7C;
	color:  #129753;
	background: rgb(255,255,255);
    outline: none;
}

button:active {
	color: #129753;
    outline: none;
    background:rgba(18,151,83,0.2);
    
}
    .btn-2 {
    background: #FFA83D;
        border: 1px solid #FFA83D;
}

.btn-2:hover {
   background: #FFCF94;
    color: #FFA83D;
    background: rgb(255,255,255);
}

.btn-2:active {
    background: #A66414;
   background: rgba(255, 168, 61, 0.2);
    color: #FFA83D;
}
</style>