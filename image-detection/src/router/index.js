import Vue from 'vue'
import Router from 'vue-router'
import Face from '@/components/Face'
import Text from '@/components/Text'
import QR from '@/components/QR'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/face',
      	name: 'face',
      	component: Face
    },
    {
      	path: '/text',
      	name: 'text',
      	component: Text
    },
    {
      	path: '/qr',
      	name: 'qr',
      	component: QR
    }
  ]
})
