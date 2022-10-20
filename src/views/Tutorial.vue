<script setup lang="ts">
import ToDoItem from '../components/ToDoItem.vue'
/*     export default {
    } */
</script>
<template>
    <!-- <div class="todolist">
        <h1>To-Do List</h1>
        <ul>
            <li>
            <ToDoItem></ToDoItem>
            </li>
        </ul>
    </div> -->
    <!-- <v-container></v-container> -->
    <div class="container">
        <div class="row">
            <p class="jumbotron">Login: <input type="text" v-model="user"/>Vous êtes connecté en tant que {{user}}</p>
        </div>
        <div class="row">
            <div class="col-md-3">
                <p class="jumbotron">Afficher mes produits préférés:</p>
                <div class="jumbotron" v-for="produit in produits">
                    {{produit}}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            user: "Jane",
            produits: ["Pizza", "Hamburger", "Cheeseburger", "Tacos"]
        }
    }
}
</script>
