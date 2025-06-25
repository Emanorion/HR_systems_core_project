<template>
    <div class="sideBar">
        <div class="sidebar-title">
            <p><i class="fa fa-fw fa-home"></i>Dashboard</p>
        </div>
        <div class="items">
            <p class="icon"><router-link to="/payroll"><i class="fa fa-credit-card"></i>Payroll</router-link></p>
            <p class="icon"><router-link to="/Employees"><i class="fa fa-user" aria-hidden="true"></i> Employees</router-link></p>
        </div>
    </div>

</template>

<script>
import router from '@/router';

export default {
    name: 'Dashboard'
}
</script>
<style>
.fa{
    color: aquamarine;margin-right: 5px;

}
.sidebar-title {
    font-size: 25px;
    text-align: center;
}

.items {
    color: white;
    font-size: 20px;
    text-align: start;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.dashItems {
    background-color: rgba(128, 128, 128, 0.497);

}

.sideBar {
    background-color: #333;
    width: 200px;
    height: 100vh;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
}
</style>