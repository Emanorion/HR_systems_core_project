<template>
  <SideBar />

<div style="margin-left: 200px; padding: 24px; ">
  <h1>Leave Balance</h1>  
  <div class="d-flex justify-content-between flex-wrap gap-3">
    <div class="card d-flex" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">approved</li>
        <li class="list-group-item">5</li>
      </ul>
    </div>
    <div class="card" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Pending</li>
        <li class="list-group-item">3</li>
      </ul>
    </div>
    <div class="card" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Rejected</li>
        <li class="list-group-item">2</li>
      </ul>
    </div>
    
  </div>

  <div style="margin-top: 20px;">
    <h1>Leave Request History</h1>
    <LeaveViewComp />
  </div>

</div>  
</template>

<script>
import LeaveViewComp from "@/components/LeaveViewComp.vue";
import SideBar from "@/components/SideBar.vue";
import attendanceAndLeave from "@/data/attendanceAndLeave";

export default {
  data() {
    return {
      attendanceAndLeave: attendanceAndLeave,
    };
  },

  components: {
    SideBar,
    LeaveViewComp,
  },
};
</script>

<style>



</style>
