import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import Overview from '@/views/Overview.vue'
import LeaveForm from '@/views/LeaveForm.vue'
=======
import Payroll from '@/views/Payroll.vue'
import PayslipComp from '@/components/PayslipComp.vue'
>>>>>>> 8c7890a (:ambulance:)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
<<<<<<< HEAD
    path: '/overview',
    name: 'overview',
    component: Overview
  },
  {
    path: '/leaveform',
    name: 'leaveform',
    component: LeaveForm
=======
    path: '/payroll',
    name: 'payroll',
    component: Payroll
  },
  {
    path: '/payslip/:id',
    name: 'PayslipComp',
    component: PayslipComp 
>>>>>>> 8c7890a (:ambulance:)
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
