<template>

    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" v-model="person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="store.dispatch('update', {id: person.id, name: person.name, age: person.age, job: person.job})" type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import store from "../../store";

export default {
    name: "Edit",

    mounted() {
        store.dispatch('getPerson', this.$route.params.id)
    },

    methods: {
    },

    computed: {
        store() {
            return store
        },
        isDisabled() {
            return this.person.name && this.person.age && this.person.job
        },

        person() {
            return store.getters.person
        },
    }
}
</script>

<style scoped>

</style>
