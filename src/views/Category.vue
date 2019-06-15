<template>
    <div>
        <van-nav-bar title="商品类型"></van-nav-bar>
        <div class="category">
            <van-row>
                <van-col span="6" class="nav">
                    <ul>
                        <li @click="selectCategory(item.typeId, index)" :class="{active: active==index}" v-for="(item, index) in types" :key="index">
                            {{item.typeName}}
                        </li>
                    </ul>
                </van-col>
                <van-col span="18" class="containers">
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                        <van-list class="content" @load="onLoad" v-model="isLoading" :finished="finished" finished-text="没有更多了">
                            <div @click="goDetail(item._id)" class="content-item" v-for="(item, index) in productList" :key="index">
                                <img :src="item.img" alt="">
                                <p class="content-item-name">{{item.name}}</p>
                                <p>￥{{item.price}}</p>
                            </div>
                        </van-list>
                    </van-pull-refresh>
                    
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import url from '@/service.config.js';
    export default{
        data(){
            return{
                types: [],
                active: 0,
                productList: [],
                typeId: 1,
                // 分页
                start: 0,
                limit: 10,
                // 是否数据加载完成
                finished: false,
                isLoading: false
            };
        },
        created(){
            axios({
                url: url.getTypes
            }).then(res=>{
                // console.log(res);
                this.types = res.data;
                // 第一次进入，默认选中第一个
                this.selectCategory(this.typeId, this.active);
            }).catch(err=>{
                console.log(err);
            });
        },
        methods:{
            // 选中类型
            selectCategory(typeId, index){
                this.active = index;
                this.typeId = typeId;
                this.productList = [];
                // 选中时获取数据
                this.getProductList();
                this.finished = false;
            },
            // 获取商品信息
            getProductList(){
                this.isLoading = true;
                axios({
                    url: url.getProductsByType,
                    method: 'get',
                    params:{
                        typeId: this.typeId,
                        start: this.productList.length,
                        limit: this.limit
                    }
                }).then(res=>{
                    // console.log(res);
                    // .concat()用于连接两个或多个数组
                    if(res.data.length != 0){
                        this.productList = this.productList.concat(res.data);
                    }else{
                        this.finished = true;
                    }
                    this.isLoading = false;
                }).catch(err=>{
                    console.log(err);
                });
            },
            // 加载
            onLoad(){
                // 异步加载
                setTimeout(()=>{
                    this.getProductList();
                },2000);
            },
            // 刷新
            onRefresh() {
                setTimeout(() => {
                    this.productList = [];
                    this.getProductList();
                }, 2000);   
            },
            // 商品详情
            goDetail(id){
                // console.log(id);
                // $router.push()页面跳转可传参
                // 1.params
                // this.$router.push({
                //     name:'detail',
                //     params:{
                //         id: id
                //     }
                // });
                // 2.query
                // this.$router.push({
                //     path: '/detail',
                //     query: {
                //         id: id
                //     }
                // });
                // 3.path: '/address/:id'
                this.$router.push(`/detail/${id}`);
            }
        }
    }
</script>

<style lang="scss">
    .nav{
        background-color: #eee;
        li{
            height: 0.6rem;
            line-height: 0.6rem;
            border-bottom: 1px solid #fff;
            padding: 3px;
            text-align: center;
        }
        .active{
            background-color: #fff;
        }
    }
    .containers{
        position: fixed;
        top: 46px;
        bottom: 1rem;
        right: 0;
        overflow-y: scroll;
    }
    .content{
        display: flex;
        padding-bottom: 1rem;
        // flex-wrap: wrap; 规定灵活的项目在必要的时候拆行或拆列
        flex-wrap: wrap;
        &-item{
            width: 40%;
            padding: 0 10px;
            text-align: center;
            img{
                width: 2rem;
                height: 2rem;
            }
            // 规定字段只两行
            &-name{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>