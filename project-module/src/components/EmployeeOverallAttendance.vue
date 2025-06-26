<template>
    <p>This is attendance</p>
    <table>
        <thead>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">NAme</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
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
</template>

<script>
import attendanceAndLeave from '@/data/attendanceAndLeave';

export default {
    name: 'EmployeeOverallAttendance',
    data(){
        return{
            attendanceAndLeave: attendanceAndLeave
        }
    }
}

</script>