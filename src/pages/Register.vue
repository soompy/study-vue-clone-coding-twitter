<template>
    <div class="flex flex-col items-center space-y-4 mt-10">
        <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : '' }`"></i>
        <span class="text-2xl font-bold">튓터 회원가입</span>
        <input v-model="email" type="text" class="rounded w-96 px-4 py-4 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="이메일">
        <input v-model="username" type="text" class="rounded w-96 px-4 py-4 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="아이디">
        <input v-model="password" type="text" class="rounded w-96 px-4 py-4 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="비밀번호">
        <button class="w-96 rounded bg-primary text-white py-4 hover:bg-dark" @click="onRegister">회원가입</button>
        <router-link to="/login">
            <button class="text-primary">계정이 이미 있으신가요? 로그인 하기</button>        
        </router-link>        
    </div>
</template>

<script>
import { ref } from 'vue'
import { auth } from '../firebase'

export default {
    setup() {
        const email = ref('')
        const username = ref('')
        const password = ref('')
        const loading = ref(false)

        const onRegister = async () => {
            // console.log(username.value, email.value, password.value)
            try {
                const credential = await auth.createUserWithEmailandPassword(email.value, password.value)
                console.log(credential)
            } catch(e) {
                console.log('create user with email and password error:', e)
            }
        }

        return {
            username,
            email,
            password,
            loading,
            onRegister
        }
    },
}
</script>

<style>

</style>