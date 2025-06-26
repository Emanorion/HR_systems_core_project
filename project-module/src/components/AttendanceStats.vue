<template>
    <div class="attendanceCard">
        <h4 class="attendTitle">Attendance feedback</h4>
        <p>Todays stats</p>
        <div class="tank">
            <div class="attendanceProgress">
                <div class="progressBar" :style="{ width: progressWidth + '%' }">Attendance {{ progressWidth }}%</div>
            </div>
        </div>
        <router-link to="/overallattendance"><button class="seeattend">see more</button></router-link>
    </div>
</template>

<script>
let i = 0;
export default {
    name: 'AttendanceStats',
    data() {
        return {
            progressWidth: 1
        }
    },
    mounted() {
        this.move();
    },
    methods: {
        move() {
            if (this.progressWidth >= 100) {
                this.progressWidth = 1;
            }
            let width = this.progressWidth;
            let id = setInterval(() => {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    this.progressWidth = width;
                }
            }, 10);
        }
    },
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
.tank{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.attendanceProgress {
    width: 90%;
    background-color: grey;
    border-radius: 4px;
}
.seeattend{
    width: 85px;
    height: 30px;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 24px;
    background-color: white;
    border: 1px solid skyblue;
    border-radius: 5px;
    color: rgb(78, 177, 216);
}
.progressBar {
    height: 40px;
    width: 1%;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    font-weight: 300;
    margin: auto;
}
</style>