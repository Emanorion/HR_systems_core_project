<template>
    <h1>THis is the overeall attendance</h1>
    <div class="layout">
    <EmployeeOverallAttendance />
    <SideBar />
    </div>
</template>

<script>
import EmployeeOverallAttendance from '@/components/EmployeeOverallAttendance.vue';
import HrNav from '@/components/HrNav.vue';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

export default {
    components: {
        NavBar,
        EmployeeOverallAttendance,
        SideBar
    }
}
</script>
<style>
    .layout{
        display: flex;
    }
    
</style>