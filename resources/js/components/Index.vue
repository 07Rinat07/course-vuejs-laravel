
<template>
    <div>
        <router-link to="{name: 'peron.index'}">People</router-link>
        <router-link to="{name: 'peron.create'}">Add</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default  {
    name: "Index"
}

</script>


<style scoped>

</style>
