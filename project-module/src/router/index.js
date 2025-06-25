import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeView from '@/views/EmployeeView.vue'
import Overview from '@/views/Overview.vue'
import LeaveForm from '@/views/LeaveForm.vue'
import Payroll from '@/views/Payroll.vue'
import PayslipComp from '@/components/PayslipComp.vue'
import OverallAttendance from '@/views/OverallAttendance.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Employees',
    name: 'Employees',
    component:EmployeeView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/overview',
    name: 'overview',
    component: Overview
  },
  {
    path: '/leaveform',
    name: 'leaveform',
    component: LeaveForm
  },
  {
    path: '/payroll',
    name: 'payroll',
    component: Payroll
  },
  {
    path: '/payslip/:id',
    name: 'PayslipComp',
    component: PayslipComp 
  },
  {
    path: '/overallattendance',
    name: 'overallattendance',
    component: OverallAttendance
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
