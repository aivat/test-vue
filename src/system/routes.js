import Book from '../pages/book.vue'
import Users from '../pages/users.vue'
import AddBook from '../pages/addBook.vue'
import AddUser from '../pages/addUser.vue'

export const routes = [
    { path: '/', component: Book},
    { path: '/users', component: Users},
    { path: '/addbook', component: AddBook},
    { path: '/adduser', component: AddUser}
]