<template>
    <div class="nav">
        <ul>
            <li>
                <router-link to="/face">face</router-link>
            </li>
            <li>
                <router-link to="/text">text</router-link>
            </li>
            <li>
                <router-link to="/qr">qr</router-link>
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
        transition: all 1s ease;
    }
    li:hover {
        background-color: rgba(0, 0, 0, .5);
    }
    li a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
    }
</style>
