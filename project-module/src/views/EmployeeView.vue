<template>
  <div
    style="
      background-image: url(https://www.bing.com/th/id/OIP.K5DixXpCgmQxicIh5A0g4gHaE6?w=273&h=211&c=8&rs=1&qlt=90&o=6&cb=ircwebpc1&dpr=1.3&pid=3.1&rm=2);background-repeat: no-repeat ;background-size: cover;min-height: 100vh;
    "
  >
    <!-- buttons linking to the employee names and data -->

    <div class="sidenav">

      <div class="buttItems" v-for="(attendance, idx) in employee_info" :key="attendance.employeeId">
        <button class="btn btn-primary" style="height: 60px" @click="setIndex(idx)">
        {{ attendance.name }}
        </button>
      </div>
    </div>

    <!-- card design -->
<div class="center-wrapper">    
    <div class="card shadow-lg" style="height: auto; width: auto">
      <img
        src="https://th.bing.com/th/id/OIP.d0-XU41p65lgmmxUl2e5JwHaEV?rs=1&pid=ImgDetMain"
        alt=""
        style="width: 95%"
      />
      <h3>{{ employee_info[selectedIndex].name }}</h3>
      <p class="title">{{employee_info[selectedIndex].position }}</p>
      <h4>Department</h4>
      <button class="btn btn-dark text-nowrap" style="height: auto; width: auto;">View more</button>
      <br /><br />
    </div>
 </div>   
  </div>

  
</template>
<script>
import employee_info from "@/data/employee_info";
export default {
  data() {
    return {
      employee_info:employee_info,
      selectedIndex: 0,
    };
  },
  methods: {
    setIndex(n) {
      this.selectedIndex = n;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the side navigation */
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
}

/* Side navigation links */
.sidenav a {
  color: white;
  padding: 16px;
  text-decoration: none;
  display: block;
}

/* Change color on hover */
.sidenav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  margin-left: 200px;
  padding-left: 20px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}
.center-wrapper{

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
