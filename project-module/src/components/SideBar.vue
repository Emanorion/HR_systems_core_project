<template>
    <div class="sideBar">
        <div class="sidebar-title">
            <p>Dashboard</p>
        </div>
        <div class="items">
            <ul>
                    <li class="icon sidebar-item"><i class="fa fa-credit-card"></i><router-link to="/payroll"class="dash-link">Payroll</router-link></li>
                    <li class="icon sidebar-item"><i class="fa fa-user" aria-hidden="true"></i><router-link to="/Employees"
                        class="dash-link">Employees</router-link></li>
                    <li class="icon sidebar-item"><i class="fa fa-bar-chart" aria-hidden="true"></i><router-link to="/overview"
                        class="dash-link">Overview</router-link></li>
                    <li class="icon sidebar-item"><i class="fa fa-tasks" aria-hidden="true"></i><router-link
                        to="/overallattendance" class="dash-link">Attendance</router-link></li>
                    <li class="icon sidebar-item"><i class="fa fa-calendar-o" aria-hidden="true"></i><router-link to="/leaveform"
                        class="dash-link">Leave Requests</router-link></li>
                    <li class="icon sidebar-item"><i class="fa fa-hand-o-left" aria-hidden="true"></i><router-link to="/"
                        class="dash-link">Log Out</router-link></li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Dashboard'
}
</script>
<style>
.fa {
    color: white;
}

.sidebar-title {
    font-size: 25px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 50px;
    color: skyblue;
}

.items ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
}
.items-box{
    display: flex;
}
.dash-link {
    color: white;
    text-decoration: none;
}

.items {
    color: white;
    font-size: 20px;
    text-align: start;
    width: 200px;
}

.dashItems {
    background-color: rgba(128, 128, 128, 0.497);

}

.sideBar {
    background-color: #333;
    width: 200px;
    height: 100%;
    z-index: 1000;
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
}
.sidebar-item{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
    margin-top: 20px;
}
</style>