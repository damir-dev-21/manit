<template lang="">
    <div>
        <h3>Авторизация</h3>
        <form @submit.prevent="sendData">
            <input type="text" placeholder="Логин" name="name" v-model="name"/>
            <input type="password" placeholder="Пароль" name="password" v-model="password"/>
            <button>Войти</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            name:"",
            password:""
        }
    },
    methods:{
        async sendData(){
            const newData = {
                name:this.name,
                password:this.password
            }
            await axios.post('http://localhost:5000/admin/',newData)
        }
    }
}
</script>
<style scoped>
    h3{
        text-align: center;
        font-size: 30px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    form{
        max-width: 400px;
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        width: 100%;
        margin-bottom: 15px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid black;
        border-radius: 4px;
    }
    button{
        width: 150px;
        height: 35px;
        font-size: 17px;
        background: grey;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
    a{
        color:white;
        text-decoration: none;
    }
</style>