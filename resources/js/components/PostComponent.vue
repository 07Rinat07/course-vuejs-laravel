<template>

    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name:{{name}}</div>
        <button @click="sayhello">Hello bro</button>
        <button @click="sayHi">Hi bro</button>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";
export default {
    name: "PostComponent",

    data() {
      return {
          name: 'Vasya',
          age: 25,
      }
    },

    methods: {
        sayhello(){
            console.log('Hello bro')
        },
        sayHi(){
            console.log('Hi bro')
        }
    },

    components: {
        SinglePostComponent
    }
}
</script>


<style scoped>

</style>
