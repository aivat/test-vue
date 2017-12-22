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
								<input  id="selector-input" type="text" placeholder="Выберите книгу" class="selector-input" v-model="querySearchBook" @input="getSearchBook()">	
				            </td>
				            <td class="selector-dropdown">
                                &nbsp;
                            </td>
				        </tr>
				    </table>
					<div class="results-container" v-if="search">
						<div  class="result-list result-list-scrollable">
							<ul id="result-book" v-for="bo in books">
                                <li @click="SelectItemMouseDown(bo.id)">
                                    <p>{{ bo.title_book }}</p>
                                    <p class="result-title-author">{{ bo.author }}</p>
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
            <div class="list-item list-item-book-delet" v-for="(value, key) in userHaveBooks" v-if="userHaveBooks">
                <div class="list-item-book">
                    <div class="item-index">
						{{ key + 1}} 
					</div>
                    <div class="book">
                        <div class="title-book">
							<router-link tag ="a" v-bind:to="{ name: 'editBook', params: { idBook: value.id_book }}">{{ value.title_book }}</router-link>             
                        </div>
                        <div class="author">
							<router-link tag ="a" v-bind:to="{ name: 'editAuthor', params: { idAuthor: value.id }}">{{ value.author }}</router-link>         
                        </div>
                    </div>
                </div>
                <div class="book-delet">
                    <button class="btn-2" v-on:click="postDataDelBook(value.id)">Удалить книгу</button>
                </div>
            </div>
            <div class="list-item-error" v-if="error">
                Ни одной книги не найдено.
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
            userHaveBooks: {},           
            currentRoute: router.currentRoute.path,
            loading: false,
			users: {},
            error: false,
            search: false,
            querySearchBook: '',
            books: {},
            postBody: {
                    user: '',
                    book: '',
                    give: '1'
            }
		}
    },
    computed: {
        getIdUsers: function () { // вычисляем id usera
            let id = this.currentRoute.split('/')
            return id[2]        
        }
    },
    created () {
			// запрашиваем данные когда реактивное представление уже создано
			//this.fetchData(),
			window.addEventListener('scroll', this.handleScroll),
            console.log(this.getIdUsers),
			this.fetchDataUser (),
            this.fetchDataBook () 
    },
	watch: {
        // в случае изменения маршрута запрашиваем данные вновь
            '$route': 'fetchDataUser',
            '$route': 'fetchDataBook'		
    }, 
    methods: {
			fetchDataUser () { // загружаем фамилию и имя пользователя
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
        	fetchDataBook () { // загрузка книг пользователя
				this.loading = true
                axios.get('http://testik.ru'+this.currentRoute)
                    .then(response =>{
                        
						//this.books = response.data
						console.log('userHaveBooks=',response.data)
                       	this.userHaveBooks = response.data
                        if (Object.keys(this.userHaveBooks).length == 0) {
                            this.error = true
                        } else this.error = false

						this.loading = false
                    })
                    .catch(e => {
                        console.log(e.message)
						this.error = true
						this.loading = false
                    });
            },
            postDataDelBook (id) { // удаление книги пользователя
                console.log('данные =', id)
                axios.delete('http://testik.ru/givebooks/' + id)
                .then(response => {
                    console.log('данные =', response)
                    this.fetchDataBook () 
                    //router.push({ path: '/users' })
                })
                .catch(e => {
                  //this.errors.push(e)
                    console.log(e.message)
                }) 
            },
            getSearchBook () {
                //this.error = ''
                //this.books = {};
                this.loading = true
                if (Object.keys(this.querySearchBook).length >= 1) {
                        let params = encodeURIComponent(this.querySearchBook)
                        console.log('params =', params)
                        axios.get('http://testik.ru/books/search?q=' + params)
                        .then(response => {
                            console.log('поиск =', response)
                            this.books = response.data
                            if (Object.keys(this.books).length == 0) {
                                    //this.error = true
                                    this.search = false
                                } else { 
                                    //this.error = false
                                    this.search = true
                                    console.log(this.books)
                                }
                            //router.push({ path: '/users' })
                        })
                        .catch(e => {
                          //this.errors.push(e)
                            console.log(e.message)
                        })
                } else {
                    this.search = false
                    this.books = {}
                }
            },
        SelectItemMouseDown(idBook) {
            this.postBody.user = ''
            this.postBody.book = ''
            var unicumBook = true;
            this.userHaveBooks.filter(number => {
                if (number.id_book == idBook) {
                    unicumBook = false;
                    console.log('Такая книга уже есть')
                }
            })
        if (unicumBook) {
                        this.postBody.user = this.getIdUsers
                        this.postBody.book = idBook
                        console.log('this.postBody.user=', this.postBody.user)
                        console.log('this.postBody.book=', this.postBody.book)
                        console.log('this.postBody=', this.postBody)
                        axios.post('http://testik.ru/givebooks/new', this.postBody)
                        .then(response => {
                            console.log('данные =', response)
                            this.fetchDataBook ()
                        })
                        .catch(e => {
                          console.log(e.message)
                        })
            }
        }
    }
}
</script>

<style scoped>
    .list-item-error {
        margin: 0 auto;
        padding: 50px 0;
        color: #999;
    }
    
    .container-give-book {
        width: 100%;
    }
    
	.book-list,.give-book {
        display: flex;
        flex-direction:column;
        flex: 1;
        margin-top: 15px;
        padding: 0 20px;
        background-color: #fff;
        margin-bottom: 65px;
        border: 1px solid #c9d0d6;
        margin-top: 15px;
        padding: 0;
        border: 1px solid #c9d0d6; 
/*        border-top: none; */
/*        border-bottom: none;  */
    }
    .book-list {
        border-top: none; 
    }
    .del-bottom {
        border-bottom: none;
        margin-bottom: 0;
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
/*    padding-bottom: 20px;*/
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
/*    border-bottom: none;*/
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
       border-top: none;
        border-bottom: 1px solid #c9d0d6; 
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