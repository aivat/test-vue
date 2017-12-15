import Books from '../pages/books.vue'
import Users from '../pages/users.vue'
import AddBook from '../pages/addBook.vue'
import AddUser from '../pages/addUser.vue'
import User from '../pages/user.vue'
import Book from '../pages/book.vue'
import Author from '../pages/author.vue'
import GiveBook from '../pages/giveBook.vue'

export const routes = [
    { path: '/', component: Books},
	{ path: '/book', component: Books},
    { path: '/users', component: Users},
    { path: '/addbook', component: AddBook},
    { path: '/adduser', component: AddUser},
	{ path: '/users/:idUser', name: 'editUser', component: User},
	{ path: '/books/:idBook', name: 'editBook', component: Book},
	{ path: '/authors/:idAuthor', name: 'editAuthor', component: Author},
    { path: '/users/:idUser/givebook', name: 'giveBook', component: GiveBook}
]