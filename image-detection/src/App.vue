<template>
    <div id="app">
        <my-nav></my-nav>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
import MyNav from '@/components/Nav';

export default {
    name: 'app',

    components: {
        MyNav
    }
}
</script>

<style>
    .main {
        text-align: center;
    }
</style>
