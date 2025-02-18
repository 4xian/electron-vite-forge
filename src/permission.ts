import router from './router'
import { inject } from 'vue'
router.beforeEach((to, from) => {
  console.log('beforeEach', to, from)
  const global = inject('router')
  console.log('global', global)
  return true
})

router.beforeResolve((to, from) => {
  console.log('beforeResolve', to, from)
  return true
})

router.afterEach((to, from, failure) => {
  console.log('afterEach', failure)
})

router.onError((error) => {
  console.log('error', error)
})
