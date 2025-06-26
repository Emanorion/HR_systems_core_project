<template>
  <!-- Main background container with background image and minimum height -->
  <div
    style="
      background-image: url(https://www.bing.com/th/id/OIP.K5DixXpCgmQxicIh5A0g4gHaE6?w=273&h=211&c=8&rs=1&qlt=90&o=6&cb=ircwebpc1&dpr=1.3&pid=3.1&rm=2);
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 100vh;
    "
  >
    <!-- Modal: Shows more details about the selected employee -->
    <div
      v-if="showModal"
      class="modal-content rounded-4 shadow"
      style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        background: white;
        width: 600px; /* 3x the card width */
        max-width: 95vw;
        padding: 32px 24px;
        box-sizing: border-box;
      "
    >
      <!-- Modal header with employee name and close button -->
      <div class="modal-header border-bottom-0">
        <h1 class="  text-black">{{ employee_info[selectedIndex].name }}</h1>
        <button
          type="button"
          class="btn-close"
          @click="closeModal"
          aria-label="Close"
        ></button>
      </div>
      <!-- Modal body with department info -->
      <div class="modal-body py-0">
        <h3>{{ employee_info[selectedIndex].employmentHistory }}</h3>
        <h2>
         Department : {{ employee_info[selectedIndex].department }}
        </h2> 
        <h4>Current salary: R {{ employee_info[selectedIndex].salary }}</h4>
        <h5>{{ employee_info[selectedIndex].contact }}</h5>


      </div>
      <!-- Modal footer with close button -->
      <div
        class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0"
      >
        <button
          type="button"
          class="btn btn-lg btn-secondary"
          @click="closeModal"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Side navigation: List of employee names as buttons -->
    <div class="sidenav">
      <div
        class="buttItems"
        v-for="(attendance, idx) in employee_info"
        :key="attendance.employeeId"
      >


        <!-- When clicked, sets the selected employee index -->
        <button
          class="btn text-white"
          style="height: 60px"
          @click="setIndex(idx)"
        >
          {{ attendance.name }}
        </button>
      </div>
    </div>

    <!-- Main card displaying selected employee's info -->
    <div class="center-wrapper">
      <div class="card shadow-lg" style="height: auto; width: auto">


        <!-- Employee image -->
        <img
          src="https://th.bing.com/th/id/OIP.d0-XU41p65lgmmxUl2e5JwHaEV?rs=1&pid=ImgDetMain"
          alt=""
          style="width: 95%"
        />



        <!-- Employee name and position -->
        <h3>{{ employee_info[selectedIndex].name }}</h3>
        <p class="title">{{ employee_info[selectedIndex].position }}</p>
        <h4>Department</h4>





        <!-- Button to open modal with more info -->
        <button
          @click="openModal()"
          class="btn btn-dark text-nowrap"
          style="height: auto; width: auto"
        >
          View more
        </button>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
// Import employee data from a local file
import employee_info from "@/data/employee_info";
export default {
  data() {
    return {
      employee_info: employee_info, // Array of employee objects
      selectedIndex: 0,             // Index of the currently selected employee
      showModal: false,             // Controls modal visibility
    };
  },
  methods: {
    // Sets the selected employee index
    setIndex(n) {
      this.selectedIndex = n;
    },
    // Opens the modal
    openModal() {
      this.showModal = true;
    },
    // Closes the modal
    closeModal() {
      this.showModal = false;
    },
  },
  components: {},
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
  background-color: #333;
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

.btn:hover {
  background-color: antiquewhite;
  color: #111 !important;
}

/* Style the content */
.content {
  margin-left: 200px;
  padding-left: 20px;
}

/* Card styling for employee info */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

/* Center wrapper to center the card on the page */
.center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
