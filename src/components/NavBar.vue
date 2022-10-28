<template>
    <div class="menu">
        <div class="item-menu" v-for="menu in getMenus">
            <router-link :to='menu.path'>{{menu.name}}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import type { RouteRecordName, RouteRecordNormalized } from 'vue-router';

export default {
    data: () => ({
    }),
    props: ['menus'],
    computed: {
        getMenus: function() {
            if (this.menus) {
                return this.menus;
            } else {
                let l_routes: any[]=[];
                let l_menus: RouteRecordName[] = ["home", "about", "tutorial"];
                for (let l_index of l_menus) {
                    l_routes.push(this.$router.getRoutes().find(item => item.name===l_index));
                }
                return l_routes;
            }
        }
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