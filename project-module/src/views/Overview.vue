<template>
    <div class="overView-Layout">
        <HrNav />
        <div class="stats">
        <LeaveStats />
        <AttendanceStats />
        <EmployeeReview />
        </div>
        <EmployeeAttendance />
        <div class="dashboardLayout">
            <Dashboard />
        </div>


    </div>
</template>
<script>
import Dashboard from '@/components/SideBar.vue';
import EmployeeAttendance from '@/components/EmployeeAttendance.vue';
import LeaveStats from '@/components/LeaveStats.vue';
import AttendanceStats from '@/components/AttendanceStats.vue';
import EmployeeReview from '@/components/EmployeeReview.vue';

export default {
    components: {
        Dashboard,
        EmployeeAttendance,
        LeaveStats,
        AttendanceStats,
        EmployeeReview
    }
}

</script>
<style>
.overView-Layout {
    margin-top:30px;
    display: flex;
    flex-direction: column;
}
.stats{
    display: flex;
    width: 1250px;
    margin-left: 230px;
}
</style>