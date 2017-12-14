<template>  
    <div class="content">
        <div class="container">
            <div class="book-list">
                <div class="list-item users-list-item" v-for="user in users">
                    <div class="user">
                        <div class="item-index">
                            {{ users.id }}
                            {{ users }}
                        </div>
                        <div class="info-user">
                            <router-link tag ="a" v-bind:to="{ name: 'editUser', params: { idUser: user.id }}">{{ users.first_name }} {{ users.last_name }}</router-link>
                        </div>
                    </div>
                    <div class="user-action">
                        <router-link tag ="a" class="btn-3" v-bind:to="{ name: 'giveBook', params: { idUser: user.id }}">Личный кабинет</router-link>
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
            users: null
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
            axios.get('/users/1')
                .then(function (response) {
                    console.log(response);
                    this.users = response.data
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        }
    }
}
	
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