import { createStore } from 'vuex'
import { postModule } from '@/store/postModule'
import { loginModule } from './loginModule'
import { onePostModule } from './onePostModule'


export default createStore({
  modules: {
    post: postModule,
    login: loginModule,
    onePost: onePostModule
  }
})
