<template>

    <div class="heading">
        <p class="headingText">CURRENT ATTENDANCE</p>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stats in attendanceAndLeave" :key="stats.employeeId">
                    <th scope="row">{{ stats.employeeId }}</th>
                    <td>{{ stats.name }}</td>
                    <td>{{ stats.attendance[4].date }}</td>
                    <td>{{ stats.attendance[4].status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.heading {
    text-align: center;
    color: #2c3e50;
    font-weight: 300;
    background-color: white;
    border-radius: 5px;
    width: 900px;
    height: 410px;
    margin-left: 230px;
}

.headingText {
    padding-top: 5px;
    text-decoration: underline;
}

.table {
    width: 900px;
    margin: auto;
    padding: 10;
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
