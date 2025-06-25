<template>
    <NavBar/>
    <PayrollComp/>
</template>

<script>

    import NavBar from '@/components/NavBar.vue';
    import PayrollComp from '@/components/PayrollComp.vue';

    export default {
        components: {
            PayrollComp,
            NavBar
        }
    }
</script>