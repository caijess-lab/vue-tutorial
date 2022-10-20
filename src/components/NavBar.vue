<template>
    <div class="menu" v-for="menu in menus">
        <div class="item-menu">
            <router-link :to='menu.path'>{{menu.name}}</router-link>
        </div>
    </div>
    <h1>{{getTitle}}</h1>
</template>

<script lang="ts">
export default {
    data() {
        return {
            menus: this.$router.getRoutes()
        };
    },
    computed: {
        getTitle() {
            return this.$route.name
        }
    }
}
</script>

<style>
.menu {
    display: inline-flex;
}
.menu > * {
    margin: 0 15px;
}
.item-menu {
    width: fit-content;
    height: 30px;
    border: 1px solid grey;
    padding: 10px 20px;
}
</style>