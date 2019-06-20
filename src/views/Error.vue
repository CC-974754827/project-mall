<template>
    <div>
        <h1><strong>404</strong></h1>
        <p>对不起，您要找的页面不存在</p>
        <span>您确定是这个网址吗？或者</span><span class="goback" @click="$router.push('/')">返回首页</span>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss">
    div{
        text-align: center;

        h1{
            color: #b5c6d6;
            font-size: 1.5rem;
            margin-top: 2rem;
        }
        p{
            font-size: 0.3rem;
        }
        span{
            font-size: 0.1rem;
        }
        .goback{
            color: #2875e8;
        }
    }
</style>