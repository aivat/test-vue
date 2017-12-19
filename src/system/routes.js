import Books from '../pages/books.vue'
import Users from '../pages/users.vue'
import BookNew from '../pages/bookNew.vue'
import UserNew from '../pages/userNew.vue'
import UserEdit from '../pages/userEdit.vue'
import BookEdit from '../pages/bookEdit.vue'
import Author from '../pages/author.vue'
import GiveBook from '../pages/giveBook.vue'

export const routes = [
    { path: '/', component: Books},
	{ path: '/book', component: Books},
    { path: '/users', component: Users},
    { path: '/books/new', component: BookNew},
    { path: '/users/new', component: UserNew},
	{ path: '/users/:idUser', name: 'editUser', component: UserEdit},
	{ path: '/books/:idBook', name: 'editBook', component: BookEdit},
	{ path: '/authors/:idAuthor', name: 'editAuthor', component: Author},
    { path: '/users/:idUser/givebook', name: 'giveBook', component: GiveBook}
]