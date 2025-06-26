<template>
    <header class="greeting">
        <h1>Welcome user</h1>
        <router-link to="/login">
            <button class="gstart">Get Started</button>
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style>
.greeting{
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gstart {
    width: 100px;
    font-weight: 300;
}
</style>
