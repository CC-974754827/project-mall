<template>
    <div>
         <!--$router.go(-1)回到上一个路由-->
        <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
        <img :src="detail.img" alt="" class="detail-img">
        <div class="detail">
            <p class="detail-name">{{detail.name}}</p>
            <p class="detail-price">￥{{detail.price}}</p>
            <p>公司：{{detail.company}}</p>
            <p>产地：{{detail.city}}</p>
        </div>
        <div class="toolbar">
            <p @click="service()">客服</p>
            <p @click="$router.push('/cart')">购物车</p>
            <p @click="addCart()">加入购物车</p>
            <p>立即购买</p>
        </div>
        
    </div>
</template>
<script>
    import axios from 'axios';
    import url from '@/service.config.js';
    // 映射
    import {mapState} from 'vuex';
    export default{
        data(){
            return{
                detail: []
            }
        },
        created(){
            // 取数据
            axios({
                url: url.getDetail,
                method: 'get',
                params:{
                    id:this.$route.params.id
                }
            }).then(res=>{
                console.log(res);
                this.detail = res.data;
            }).catch(err=>{
                console.log(err);
            });
        },
        computed:{
            ...mapState(['userInfo'])
        },
        methods:{
            // 客服功能
            service(){
                var el = event.currentTarget;
                console.log(el.innerHTML);
                this.$toast.fail('敬请期待');
            },
            // 加入购物车
            addCart(){
                // 校验当前用户是否登录,前端使用vuex保存登录状态【刷新后就消失】
                // 后端保存登录状态，可以用koa-session   redis
                if(JSON.stringify(this.userInfo) === '{}'){
                    this.$toast.fail('请先登录');
                    setTimeout(()=>{
                        this.$router.push('/profile');
                    },1000);
                }else{
                    // 插入产品信息
                    axios({
                        url: url.addCart,
                        method: 'post',
                        data: {
                            productId: this.detail._id,
                            userId: this.userInfo._id
                        }
                    }).then(res=>{
                        console.log(res);
                        this.$toast.success('已加入购物车');
                    }).catch(err=>{ 
                        console.log(err);
                    });
                }

            }
        }
    }
</script>

<style lang="scss">
    .detail{
        padding: 0.2rem;
        overflow: hidden;
        &-img{
            width: 100%;
            height: 5rem;
        }
        &-name{
            color: #333;
            font-weight: bolder;
        }
        &-price{
            color: #ff7300;
            font-size: 0.4rem;
        }
    }
    .toolbar{
        height: 0.8rem;
        border-top: 1px solid #eee;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        line-height: 0.8rem;
        text-align: center;
        p{
            float: left;
            border-left: 1px solid #eee;
        }
    }
    .toolbar p:nth-child(1){
        flex-grow: 1;
        border: none;
    }
    .toolbar p:nth-child(2){
        flex-grow: 1;
    }
    .toolbar p:nth-child(3){
        flex-grow: 3;
        background-color: #ff976a;
        color: #fff;
    }
    .toolbar p:nth-child(4){
        flex-grow: 3;
        background-color: #ff4444;
        color: #fff;
    }
</style>