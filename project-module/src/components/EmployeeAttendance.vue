<template>

    <div class="heading">
        <p class="headingText">CURRENT ATTENDANCE</p>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stats in attendanceAndLeave" :key="stats.employeeId">
                    <th scope="row">{{ stats.employeeId }}</th>
                    <td>EMP-909636</td>
                    <td>{{ stats.name }}</td>
                    <td>{{ stats.attendance[4].date }}</td>
                    <td>{{ stats.attendance[4].status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.headingText {
    padding-top: 5px;
    text-decoration: underline;
    background-color: white;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.473);
}

.table {
    width: 1250px;
    margin: auto;
    padding: 10;
    box-shadow: 1px 4px 3px 2px rgba(8, 14, 20, 0.312);
}
.heading {
    text-align: center;
    color: #2c3e50;
    font-weight: 300;
    background-color: white;
    border-radius: 5px;
    width: 1250px;
    height: 500px;
    margin-left: 230px;
    margin-top: 20px;
}
.table th,
td {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #2c3e50;
}
</style>

<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';

export default {
    name: 'EmployeeAttendance',
    data() {
        return {
            attendanceAndLeave: attendanceAndLeave
        }
    },
    methods: {
        
    }
}

</script>
