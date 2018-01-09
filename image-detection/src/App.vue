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
    },

    mounted () {
        if(!window.FaceDetector || !window.TextDetector || !window.BarcodeDetector) {
            alert('您的浏览器不支持图像识别');
        }
    }
}
</script>

<style>
    .main {
        text-align: center;
    }
</style>
