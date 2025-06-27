<template>
    <div class="overView-Layout">
        <div class="stats">
            <div class="sub-layout">
                <div class="dash-title">
                    <WelcomeComp />
                </div>
                <div class="cont">
                    <LeaveStats />
                    <AttendanceStats />
                </div>
            </div>
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
import WelcomeComp from '@/components/WelcomeComp.vue';

export default {
    components: {
        Dashboard,
        EmployeeAttendance,
        LeaveStats,
        AttendanceStats,
        EmployeeReview,
        WelcomeComp
    }
}

</script>
<style>
.dash-title{
    margin-top: 30px;
    margin-bottom: 13px;
}
.overView-Layout {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}

.stats {
    display: flex;
    width: 83%;
    margin-left: 15%;
    height: 81.5vh;
}
.sub-layout{
    display: flex;
    flex-direction: column;
    width: 70%;
}
.cont{
    display: flex;
    width: 100%;
}
</style>