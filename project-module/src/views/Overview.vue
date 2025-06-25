<template>
    <div class="overView-Layout">
        <HrNav />
        <LeaveStats />
        <EmployeeAttendance />
        <div class="dashboardLayout">
            <Dashboard />
        </div>


    </div>
</template>
<script>
import Dashboard from '@/components/SideBar.vue';
import EmployeeAttendance from '@/components/EmployeeAttendance.vue';
import HrNav from '@/components/HrNav.vue';
import LeaveStats from '@/components/LeaveStats.vue';

export default {
    components: {
        Dashboard,
        EmployeeAttendance,
        HrNav,
        LeaveStats
    }
}

</script>
<style>
.overView-Layout {
    display: flex;
    flex-direction: column;
}
</style>