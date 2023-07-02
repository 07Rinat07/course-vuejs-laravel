<template>

    <div>
        <SinglePostComponent></SinglePostComponent>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">job</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in persons">
                <th scope="row">{{ person.id}}</th>
                <td>{{ person.name}}</td>
                <td>{{ person.age}}</td>
                <td>{{ person.job}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
    name: "PostComponent",

    data() {
        return {
            persons: [
                {
                    id: 1,
                    name: 'Vasya',
                    age: 20,
                    job: 'coach',
                },
                {
                    id: 2,
                    name: 'Elena',
                    age: 18,
                    job: 'rest',
                },
                {
                    id: 3,
                    name: 'Vladimir',
                    age: 40,
                    job: 'web developer',
                },

            ]

        }
    },

    methods: {
        sayhello() {
            console.log('Hello bro')
        },
        sayHi() {
            console.log('Hi bro')
        }
    },
    computed: {
        vasyaJob() {
            return this.name + ' работает в булошной'
        }
    },

    components: {
        SinglePostComponent
    }
}
</script>


<style scoped>

</style>
