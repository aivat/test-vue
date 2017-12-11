<template>
  <div class="content">
      <div class="container">
        <div class="container-give-book">
        <div class="give-book del-bottom">
            <div class="title-give">
                <p>Выдать книгу 
                    <a href="#" class="user-name">
                        Баймешову Айвату
                    </a>
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
        <div class="book-list del-bottom">
            <div class="list-item list-item-book-delet">
                <div class="list-item-book">
                    <div class="item-index">1</div>
                    <div class="book">
                        <div class="title-book">
                            <a href="#">Мастер и Маргарита Мастер и Маргарита Мастер и Маргарита Мастер и Маргарита</a>                   
                        </div>
                        <div class="author">
                            <a href="#">Михаил Афанасьевич Булгаков</a>            
                        </div>
                    </div>
                </div>
                <div class="book-delet">
                    <button type="submit" class="btn-2">Удалить книгу</button>
                </div>
            </div>
            <div class="list-item list-item-book-delet">
                <div class="list-item-book">
                    <div class="item-index">1</div>
                    <div class="book">
                        <div class="title-book">
                            <a href="#">Мастер и Маргарита</a>                   
                        </div>
                        <div class="author">
                            <a href="#">Михаил Афанасьевич Булгаков</a>            
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
export default {
  data () {
    return {
      state: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
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
    margin-top: 0;
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
</style>