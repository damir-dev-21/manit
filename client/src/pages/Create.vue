<template lang="">
    <div class="createForm">
        <form @submit.prevent="create" method="POST" enctype="multipart/form-data">
            <input type="text" placeholder="Название проекта" name="title" v-model="title"/>
            <div>
                <select v-model="category">
                    <option>Сайты</option>
                    <option>Дизайн</option>
                    <option>Мобильные приложения</option>
                    <option>Видео</option>
                    <option>3d</option>
                    <option>SMM</option>
                </select>
            </div>
            <input class="file" type="file"  name="imageUrl" v-on:change="handleFileUpload" accept="image/*" />
            <button type="submit">
                Создать
            </button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            title:'',
            category:'',
            file:''
        }
    },
    methods: {
        handleFileUpload(event){
            this.file = event.target.files[0]
},
        async create(){

            const newData = {
                title:this.title,
                category:this.category,
                imageUrl:this.file,
            }
            console.log(newData);

await axios.post('http://localhost:3000/admin/create/',newData)

        }    
    },
}
</script>
<style scoped>
    form{
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 30%;
    }
    select{
        width: 100%;
        height: 30px;
    }
    input{
        width: 100%;
        height: 40px;
        border-radius: 12px;
        border:1px solid grey;
        margin: 10px 0px;
        padding-left: 15px;
    }
    .file{
        border: none;
        padding-top: 10px;
        padding-left: 0px;
    }
    .createForm{
        padding-top: 50px;
        width: 100%;
        height: 100vh;
    }
    button{
        font-size: 18px;
        margin: auto;
        background: #5dce59;
        color: white;
        border: none;
        border-radius: 12px;
        padding: 10px 30px;
    }
</style>