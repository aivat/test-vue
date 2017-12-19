<template>
  <div class="content">
      <div class="container">   
        <div class="book-list">
            <div class="wrapper-add">
                <fieldset>
                    <legend>Добавление пользователя</legend>
                    <label v-show="!isUser" class="error-add">Заполните все поля!</label>
                    <label for="surname">Фамилия</label>
                    <input type="text" id="surname" name="surname" placeholder="Иванов" required v-model="user.first_name">
                    <label for="name">Имя</label>
                    <input type="text" id="name" name="name" placeholder="Иван" required v-model="user.last_name">
                    <label for="patronymic">Отчество</label>
                    <input type="text" id="patronymic" name="patronymic" placeholder="Иванович" required v-model="user.patronymic">
                    <label for="tel">Номер телефона</label>
                    <input type="tel" id="tel" name="tel" placeholder="Формат номера XXXXXXXXXX" required v-model="user.phone_number">
                </fieldset>
                <div class="buttons">
                    <button class="btn-1" v-on:click="postDataNewUser()">Добавить</button>
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
            user: {
				    first_name: '',
                    last_name: '',
                    patronymic: '',
                    phone_number: ''
			},           
            currentRoute: router.currentRoute.path
		}
    },
    computed: {
        isUser: function () {
                if ( this.user.first_name == '' || this.user.last_name == '' || this.user.patronymic == '' || this.user.phone_number == '') {
                   return false
                } else return true
        }
    },
    methods: {  
            postDataNewUser () {
                if (this.isUser) {
                    axios.post('http://testik.ru/users/new', this.user)
                    .then(response => {
                        console.log('данные =', response)
                        router.push({ path: '/users' })
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
    /*margin: 15px 0;*/
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