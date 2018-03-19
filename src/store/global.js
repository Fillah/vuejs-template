// import axios from './api.js'

const state = {
    user: null
}

const getters = {
    getUser: state => {
        return state.user
    }
}

const mutations = {
    setUser: (state, user) => {
        console.log('setUser')
        state.user = user
        console.log('state.user', state.user)
    }
}

const actions = {
    loginUser: ({ commit }, data) => {
        console.log('loginUser')
        let userInfo = {
            username: 'dev',
            state: 'logged in'
        }
        commit('setUser', userInfo)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
