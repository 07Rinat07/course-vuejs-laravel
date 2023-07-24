const state = {
    person: null
}

const getters = {
    person:() => state.person
}

const actions = {
    getPerson({state, commit, dispatch}, id) {
        console.log(111111111111111111);
        axios.get(`/api/people/${id}`)
            .then(res => {
                console.log(22222222222222);
                commit( 'setPerson', res.data.data)
            })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    }
}

export default {
    state, mutations, getters, actions
}

