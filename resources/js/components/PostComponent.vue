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
            <tr v-for="person in personsAgeMoreTwenty">
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
                {
                    id: 4,
                    name: 'Oksana',
                    age: 25,
                    job: 'Disigner',
                },
                {
                    id: 5,
                    name: 'Olya',
                    age: 21,
                    job: 'Teacher',
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
      personsAgeMoreTwenty() {
            return this.persons.filter(function (person)
            {
               return person.age > 20
            })
        }
    },

    components: {
        SinglePostComponent
    }
}
</script>


<style scoped>

</style>
