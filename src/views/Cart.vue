<template>
    <div>
        <van-nav-bar title="购物车"></van-nav-bar>
        <div class="card">
            <van-card num="2" price="2.00" desc="描述信息"  title="商品标题" :thumb="imageURL"/>    
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import axios from 'axios';
    import url from '@/service.config.js';
    export default{
        data(){
            return{
                imageURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559387757134&di=8d1988e361cc634669b4ee6a1e3df9f7&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20181105%2F20181105203706_2504283500e77714b851542bc2cb11a8_2.jpeg',
                productlist: []
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        created(){
            if(JSON.stringify(this.userInfo) === '{}'){
                this.$toast.fail('请先登录');
                setTimeout(()=>{
                    this.$router.push('/profile');
                },1000);
            }else{
                axios({
                    url: url.getCart,
                    method: 'get',
                    params:{
                        id: this.userInfo._id
                    }
                }).then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                });
            }
        }
    }
</script>

<style lang="scss">

</style>