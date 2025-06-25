<template>
    <nav>
        <h3 style="flex-grow: 0;padding-left: 10px;">MordenTech Solutions</h3>
        <div>
            <router-link to="/" style="flex-grow: 2;">Home</router-link>
            <router-link to="/overview" style="flex-grow: 1;">Overview</router-link>
            <router-link to="/leaveform">Leave Requests</router-link>
            <router-link to="/payroll">Payroll</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}

</script>