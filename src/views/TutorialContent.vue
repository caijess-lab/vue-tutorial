<template>
    <h1 v-if="getCurrentRoute === 'hello-world'">Hello World !</h1>
    <div v-else-if="getCurrentRoute === 'declarative-rendering'">
        <h1>declarative-rendering !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'attributes-bindings'">
        <h1>attributes-bindings !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'event-listeners'">
        <h1>event-listeners !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'form-bindings'">
        <h1>form-bindings !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'conditional-rendering'">
        <h1>conditional-rendering !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'list-rendering'">
        <h1>list-rendering !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'computed-property'">
        <h1>computed-property !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'lifecycle'">
        <h1>lifecycle !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'watchers'">
        <h1>watchers !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'components'">
        <h1>components !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'props'">
        <h1>props !</h1>
    </div>
    <div v-else-if="getCurrentRoute === 'emits'">
        <h1>emits !</h1>
    </div>
    <div v-else>
        <h1>slots !</h1>
    </div>
</template>

<script lang="ts">
export default {
    data() {
    },
    computed: {
        getCurrentRoute() {
            return this.$route.path.split('/').pop();
        }
        
    }
}
</script>