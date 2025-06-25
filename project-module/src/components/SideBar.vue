<template>
<div class="sideBar">
    <div class="sidebar-title">
        <p><i class="icon fa fa-fw fa-home"></i>Dashboard</p>
    </div>
    <div class="items">
    <p><i class="fa fa-credit-card"></i> Payroll</p>
    <p><i class="fa fa-money-bill"></i>money</p>
    <p><i class="fa fa-user" aria-hidden="true"></i>Employees</p>
    </div>
</div>

</template>

<script>
    export default{
        name: 'Dashboard'
    }
</script>
<style>
.icon{
    width: 50px;
}
.sidebar-title{
    font-size: 25px;
    text-align: center;
}
.items{
    color: white;
    font-size: 20px;
    text-align: center;
}
.dashItems{
    background-color: rgba(128, 128, 128, 0.497);
    
}
.sideBar{
    background-color: #333;
    width: 200px;
    height: 100vh;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
}
</style>