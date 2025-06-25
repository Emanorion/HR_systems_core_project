<template>
    <div class="overView-Layout">
        <HrNav />
        <AttendanceStats />
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
import AttendanceStats from '@/components/AttendanceStats.vue';

export default {
    components: {
        Dashboard,
        EmployeeAttendance,
        HrNav,
        LeaveStats,
        AttendanceStats
    }
}

</script>
<style>
.overView-Layout {
    display: flex;
    flex-direction: column;
}
</style>