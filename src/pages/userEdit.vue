<template>
  <div class="content">
      <div class="container">   
        <div class="book-list">
            <div class="wrapper-add">
                <fieldset v-for="user in users" >
                    <legend>Редактирование пользователя</legend>
                    <label for="surname">Фамилия</label>
                    <input type="text" id="surname" name="first_name" placeholder="Фамилия" required v-model="user.first_name">
                    <label for="name">Имя</label>
                    <input type="text" id="name" name="last_name" placeholder="Имя" required  v-model="user.last_name">
                    <label for="patronymic">Отчество</label>
                    <input type="text" id="patronymic" name="patronymic" placeholder="Отчество" required v-model="user.patronymic">
                    <label for="tel">Номер телефона</label>
                    <input type="tel" id="tel" name="phone_number" placeholder="Формат номера XXXXXXXXXX" required v-model="user.phone_number">
                </fieldset>
                <div class="buttons">
                    <button class="btn-1" v-on:click="postData()">Сохранить</button>
                    <router-link class="btn-1" tag ="a" to="/users" >Отмена</router-link> 
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
            users: {},           
            currentRoute: router.currentRoute.path,
            postBody: {
                first_name: '',
                last_name: '',
                patronymic: '',
                phone_number: ''
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
								this.users = response.data;
								console.log('данные =', response);
						})
						.catch(e => {
								console.log(e.message);
						});
			},
            postData () {
                this.postBody.first_name = this.users[0].first_name
                this.postBody.last_name = this.users[0].last_name
                this.postBody.patronymic = this.users[0].patronymic
                this.postBody.phone_number = this.users[0].phone_number
                axios.post('http://testik.ru' + this.currentRoute, this.postBody)
                .then(response => {
                    console.log('данные =', response)
                    router.push({ path: '/users' })
                })
                .catch(e => {
                  this.errors.push(e)
                })   
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
    
        .buttons {
        margin-top: 20px;
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
</style>