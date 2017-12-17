<template>  
    <div class="content">
        <div class="container">
            <div class="book-list">
                <div class="list-item users-list-item" v-for="user in users" v-if="users">
                    <div class="user">
                        <div class="item-index">
                            {{ user.id }}
                        </div>
                        <div class="info-user">
                            <router-link tag ="a" v-bind:to="{ name: 'editUser', params: { idUser: user.id }}">{{ user.first_name }} {{ user.last_name }} {{ user.patronymic }}</router-link>
                        </div>
                    </div>
                    <div class="user-action">
                        <router-link tag ="a" class="btn-3" v-bind:to="{ name: 'giveBook', params: { idUser: user.id }}">Личный кабинет</router-link>
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
            users: [],
			loading: false,
			error: false,
			count: 15,
			first: 0,
			scrolled: false
        }
    },
	computed: {
		resourseUrl() {
			return 'http://testik.ru/users?count='+this.count+'&first='+this.first
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
			fetchData () {
				this.loading = true
				axios.get(this.resourseUrl)
					.then(response =>{
							console.log(response)
							this.users = this.users.concat(response.data)
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
function mapFromSomewhereUsers () {
	return {
		1: {
			idUser: "1",
			user: "Айват Баймешов Сагимбаевич",
		},
		2: {
			idUser: "2",
			user: "Иван Петров Сергеевич",
		},
		3: {
			idUser: "3",
			user: "Бритт Леанна Робертсон",
		}
	};
} 
</script>

<style>
    
    .user {
        display: flex;
        justify-content: flex-start;
    }
    
    .user-action {
        padding: 0 10px;
        
        /* display: inline-block;    */
    }
    
    .users-list-item {
        justify-content: space-between;
        align-items: center;
    }
    
    .info-user a {
		color: #333;
		font-weight: 700;
		text-decoration: none;    
    }
	
	.info-user a:hover {
		color: rgb(64,167,227);
		text-decoration: underline;    
    }
    
    .btn-3 {
        color: white;
        background-color: #129753;
        border-radius: 4px;
        padding: 6px 12px;
        background: #129753;
        border-color: #ccc;
        border: 1px solid #129753;
        min-width: 115px;
        cursor: pointer;
        text-decoration: none;
    }

    .btn-3:hover {
        background: #4BAE7C;
        color:  #129753;
        background: rgb(255,255,255);
        outline: none;
    }

    .btn-3:active {
        color: #129753;
        outline: none;
        background:rgba(18,151,83,0.2);
    }
    
    
    
    
</style>