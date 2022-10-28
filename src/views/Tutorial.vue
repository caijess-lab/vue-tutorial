<script setup lang="ts">
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
    <div class="container menu-tutorial">
        <div class="item-menu" v-for="chapitre in chapitres">
            <router-link :to='chapitre.path'>{{chapitre.name}}</router-link>
        </div>
    </div>
    <router-view />
</template>
<script lang="ts">
export default {
    data() {
        return {
            chapitres: [
                {
                    name: "Hello World",
                    path: '/tutorial/hello-world'
                },
                {
                    path: '/tutorial/declarative-rendering',
                    name: "Declarative rendering", description: "Rendu déclaratif"
                },
                {
                    path: '/tutorial/attributes-bindings',
                    name: "Attributes bindings", description: "Liaison des attributs"
                },
                {
                    path: '/tutorial/event-listeners',
                    name: "Event listeners", description: "Gestion des évènements"
                },
                {
                    path: '/tutorial/form-bindings',
                    name: "Form Bindings", description: "Liaison sur les champs de formulaire"
                },
                {
                    path: '/tutorial/conditional-rendering',
                    name: "Conditional rendering", description: "Rendu conditionnel"
                },
                {
                    path: '/tutorial/list-rendering',
                    name: "List rendering", description: "Rendu de liste"
                },
                {
                    path: '/tutorial/computed-property',
                    name: "Computed property", description: "Propriétés calculées"
                },
                {
                    path: '/tutorial/lifecycle',
                    name: "Lifecycle and Template refs", description: "Cycle de vie et références de modèles"
                },
                {
                    path: '/tutorial/watchers',
                    name: "Watchers", description: "Observateurs"
                },
                {
                    path: '/tutorial/components',
                    name: "Components", description: "Composants"
                },
                {
                    path: '/tutorial/props',
                    name: "Props"
                },
                {
                    path: '/tutorial/emits',
                    name: "Emits", description: "Emissions"
                },
                {
                    path: '/tutorial/slots',
                    name: "Slots", description: "Emplacements"
                },
                {
                    path: '/tutorial/autre',
                    name: "Autres exemples"
                },
            ]
        }
    },
  components: {
  },
}
</script>
<style>
.menu-tutorial {
    display: flex;
    flex-wrap: wrap;
}
.menu-tutorial .item-menu a {
    color: black;
}
.menu-tutorial {
    flex-flow: wrap;
}
.menu-tutorial .item-menu {
    background: antiquewhite;
    width: 200px;
    height: 50px;
    margin: 0 15px 10px 0;
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
.menu-tutorial .item-menu a.router-link-active {
    border-bottom: 2px solid black;
    padding-bottom: 5px;
}
</style>
