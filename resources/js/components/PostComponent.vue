<template>

    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name:{{name}}</div>
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
          boolean: false,
          someNull: null,
          arr: [
              [

              ]
          ],
          someObj: {

          }
      }
    },

    components: {
        SinglePostComponent
    }
}
</script>


<style scoped>

</style>
