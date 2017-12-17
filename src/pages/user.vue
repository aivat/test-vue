<template>
  <div class="content">
      <div class="container">   
        <div class="book-list">
            <form action="/echo" method="post">
                <fieldset v-for="user in users">
                    <legend>Редактирование пользователя</legend>
                    <label for="surname">Фамилия</label>
                    <input type="text" id="surname" name="surname" placeholder="Фамилия" required v-bind:value="user.first_name">
                    <label for="name">Имя</label>
                    <input type="text" id="name" name="name" placeholder="Имя" required  v-bind:value="user.last_name">
                    <label for="patronymic">Отчество</label>
                    <input type="text" id="patronymic" name="patronymic" placeholder="Отчество" required v-bind:value="user.patronymic">
                    <label for="dateOfBirth">Дата рождения</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}" placeholder="01.01.1970" value="01.01.1970">
                    <label for="tel">Номер телефона</label>
                    <input type="tel" id="tel" name="tel" placeholder="Формат номера XXXXXXXXXX" required v-bind:value="user.phone_number">
                </fieldset>
                <div class="buttons">
                    <input type="submit" value="Сохранить" class="btn-1">
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
            users: [],           
            currentRoute: router.currentRoute.path
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