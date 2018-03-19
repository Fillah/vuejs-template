<template>
    <div class="login">
        <h1>Login</h1>
        <form v-on:submit.prevent="login">
            <label for="username">Brugernavn
                <input type="email" id="username" name="Brugernavn" v-model="username">
            </label>
            <label for="password">Adgangskode
                <input type="password" id="password" name="adgangskode" v-model="password">
            </label>
            <button type="submit" class="button primary">Login</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'login',
    data () {
        return {
            username: '',
            password: '',
            loading: false
        }
    },
    methods: {
        ...mapActions({
            loginUser: 'loginUser'
        }),
        login () {
            this.loading = true
            this.loginUser().then(this.wait(1500))
                .then(() => {
                    this.loading = false
                    if (this.$store.state.global.user) {
                        this.$router.push({
                            name: 'dashboard'
                        })
                    }
                })
        },
        wait (ms) {
            return (x) => {
                return new Promise(resolve => setTimeout(() => resolve(x), ms))
            }
        }
    }
}
</script>