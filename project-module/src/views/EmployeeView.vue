<template>
<div>
<div class="sidenav">
  <button @click="setIndex(0)"> >Lungile Moyo</button>
 <button @click="setIndex(1)"> Sibongile Nkosi</button>
 <button @click="setIndex(2)"> Thabo Molefe</button>
 <button @click="setIndex(3)"> Keshav Naidoo</button>
 <button @click="setIndex(4)"> Zanele Khumalo</button>
 <button @click="setIndex(5)"> Sipho Zulu</button>
 <button @click="setIndex(6)"> Naledi Moeketsi</button>
 <button @click="setIndex(7)"> Farai Gumbo</button>
 <button @click="setIndex(8)"> Karabo Dlamini</button>
 <button @click="setIndex(9)"> Fatima Patel</button>
</div>

<div class="card">

<img src="https://th.bing.com/th/id/OIP.d0-XU41p65lgmmxUl2e5JwHaEV?rs=1&pid=ImgDetMain" alt="" style="width: 100%;">
<h1>{{ employeeInformation[selectedIndex].name }}</h1>
<p class="title">{{ employeeInformation[selectedIndex].position }}</p>
<h4>Department</h4><br>
</div>

</div>

            
</template>
<script>
export default {
  data(){
    return{
      selectedIndex : 0,
      employeeInformation: [
        {
            employeeId: 1,
            name: "Sibongile Nkosi",
            position: "Software Engineer",
            department: "Development",
            salary: 70000,
            employmentHistory: "Joined in 2015, promoted to Senior in 2018",
            contact: "sibongile.nkosi@moderntech.com"
        },
        {
            employeeId: 2,
            name: "Lungile Moyo",
            position: "HR Manager",
            department: "HR",
            salary: 80000,
            employmentHistory: "Joined in 2013, promoted to Manager in 2017",
            contact: "lungile.moyo@moderntech.com"
        },
        {
            employeeId: 3,
            name: "Thabo Molefe",
            position: "Quality Analyst",
            department: "QA",
            salary: 55000,
            employmentHistory: "Joined in 2018",
            contact: "thabo.molefe@moderntech.com"
        },
        {
            employeeId: 4,
            name: "Keshav Naidoo",
            position: "Sales Representative",
            department: "Sales",
            salary: 60000,
            employmentHistory: "Joined in 2020",
            contact: "keshav.naidoo@moderntech.com"
        },
        {
            employeeId: 5,
            name: "Zanele Khumalo",
            position: "Marketing Specialist",
            department: "Marketing",
            salary: 58000,
            employmentHistory: "Joined in 2019",
            contact: "zanele.khumalo@moderntech.com"
        },
        {
            employeeId: 6,
            name: "Sipho Zulu",
            position: "UI/UX Designer",
            department: "Design",
            salary: 65000,
            employmentHistory: "Joined in 2016",
            contact: "sipho.zulu@moderntech.com"
        },
        {
            employeeId: 7,
            name: "Naledi Moeketsi",
            position: "DevOps Engineer",
            department: "IT",
            salary: 72000,
            employmentHistory: "Joined in 2017",
            contact: "naledi.moeketsi@moderntech.com"
        },
        {
            employeeId: 8,
            name: "Farai Gumbo",
            position: "Content Strategist",
            department: "Marketing",
            salary: 56000,
            employmentHistory: "Joined in 2021",
            contact: "farai.gumbo@moderntech.com"
        },
        {
            employeeId: 9,
            name: "Karabo Dlamini",
            position: "Accountant",
            department: "Finance",
            salary: 62000,
            employmentHistory: "Joined in 2018",
            contact: "karabo.dlamini@moderntech.com"
        },
        {
            employeeId: 10,
            name: "Fatima Patel",
            position: "Customer Support Lead",
            department: "Support",
            salary: 58000,
            employmentHistory: "Joined in 2016",
            contact: "fatima.patel@moderntech.com"
        }
    ]
    }
  },
  methods: {
    setIndex(n){
      this.selectedIndex = n
    }
  },
}
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
  text-align: center ;
  
}
</style>
