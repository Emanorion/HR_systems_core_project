<template>
<p class="attendTitle">This is the attendance</p>
<div class="attendanceCard">
</div>
</template>

<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';
export default {
    name: 'AttendanceStats',
    data() {
        return{
            attendanceAndLeave : attendanceAndLeave
        }
    },
    methods: {
        isPresent(){
            
        },
        progressBar(){
            
        }
    }
}
</script>
<style>
 .attendTitle{
    margin-left: 600px;
 }
</style>