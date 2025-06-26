<template>
    <div class="attendanceCard">
        <h4 class="attendTitle">Attendance feedback</h4>
        <p>Todays stats</p>
        <div class="attendItems">
            <div class="attendancePercent">
                
            </div>
            <router-link to="/overallattendance"><button>see more</button></router-link>
        </div>
    </div>
</template>

<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';
export default {
    name: 'AttendanceStats',
    data() {
        return {
            attendanceAndLeave: attendanceAndLeave
        }
    },
    methods: {
        isPresent() {

        },
        progressBar() {
            let progress = attendanceAndLeave.attendance[4].status

        }
    }
}
</script>
<style>
.attendanceCard {
    margin-left: 10px;
    width: 600px;
    background-color: white;
    height: 350px;
    border-radius: 5px;
    box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.312);
}
</style>