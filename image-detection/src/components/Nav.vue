<template>
    <div class="nav">
        <ul>
            <li>
                <router-link to="/face">face detection</router-link>
            </li>
            <li>
                <router-link to="/text">text detection</router-link>
            </li>
            <li>
                <router-link to="/qr">qr detection</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    ul {
        font-size: 0;
    }
    li {
        display: inline-block;
        box-sizing: border-box;
        width: 33.3%;
        font-size: 24px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #fff;
        background-color: rgba(0, 0, 0, .3);
    }
    li a {
        transition: all 1s ease;
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
    }
    li a:hover,
    li .router-link-active {
        background-color: rgba(0, 0, 0, .8);
    }
</style>
