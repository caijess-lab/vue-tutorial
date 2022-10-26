<template>
    <div class="menu">
        <div class="item-menu" v-for="menu in menus">
            <router-link :to='menu.path'>{{menu.name}}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            menus: this.$router.getRoutes()
        };
    }
}
</script>

<style>
.menu {
    display: flex;
    margin-left: 25px;
}
.menu > * {
    margin: 0 25px;
}
.item-menu a {
    text-decoration: none;
    color: white;
}
.item-menu a.router-link-active {
    border-bottom: 2px solid white;
    padding-bottom: 5px;
}
</style>