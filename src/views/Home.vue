<template>
    <div class="container">
        <!--标题-->
        <van-nav-bar title="首页" class="nav-title">
            <van-icon name="search" slot="left"></van-icon>
            <van-icon name="cart" slot="right"></van-icon>
        </van-nav-bar>
        <!--轮播图-->
        <van-swipe :autoplay="3000" >
            <van-swipe-item v-for="(image, index) in images" :key="index" >
                <img v-lazy="image.imgSrc" class="swipe-imgs"/>
            </van-swipe-item>
        </van-swipe>
        <!--热门-->
        <div class="hot">
            <p class="hot-title">-----  热门角色  -----</p>
            <swiper class="hot-swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in hotList" :key="index">
                    <div class="hot-swiper-content">
                        <img :src="item.img" alt="">
                        <div>{{item.name}}</div>
                        <div>{{item.origin}}</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!--推荐-->
        <div class="variety">
            <p class="variety-title">-----  星推荐  -----</p>
            <ul>
                <li class="variety-item" v-for="(item, index) in varietyList" :key="index">
                    <img :src="item.img" alt="">
                    <p>{{item.name}}</p>
                    <p>{{item.origin}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import axios from 'axios';
    import url from '@/service.config.js';
    export default{
         data() {
            return {
                // 轮播图
                images: [
                    {
                        name:'img1',
                        imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559387757134&di=8d1988e361cc634669b4ee6a1e3df9f7&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20181105%2F20181105203706_2504283500e77714b851542bc2cb11a8_2.jpeg',
                    },
                    {
                        name:'img2',
                        imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559404468158&di=7ff6e0be14e7c62de41f3d0eb10d1ab3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F07%2F20180807154235_WEzGJ.thumb.700_0.jpeg',
                    },
                    {
                        name:'img3',
                        imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559387918970&di=b0cfa5bbaa9e6362c16bd8dc48394066&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-14%2F5b21ff0fd10af.jpg',
                    },
                    {
                        name:'img4',
                        imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3652630575,2289336554&fm=26&gp=0.jpg'
                    }
                ],
                // 热门
                hotList:[
                    {
                        "name":"吴邪",
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559407667499&di=599ce5990185768c42a433100c647500&imgtype=0&src=http%3A%2F%2Fmobile.pic.people.com.cn%2Fthumbs%2F320%2F528%2Fdata%2Fcms%2FNMediaFile%2F2018%2F0817%2FWIRELESS201808171625000550295005184.jpg",
                        "origin":"《盗墓笔记·重启》"
                    }, 
                    {
                        "name":"沈巍",
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559407775342&di=7aaf57aa860402506d324c15fe8194b0&imgtype=0&src=http%3A%2F%2Fwww.desktx.com%2Fd%2Ffile%2Fphone%2Fmingxing%2F20180627%2Ffae5d5a3f8040c5545555b061073d3dc.jpg",
                        "origin":"《镇魂》"
                    },
                    {
                        "name":"傅红雪",
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559408440306&di=cebb074e5592149de5676e03ba74656b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F27%2F20180527183750_lkkdn.thumb.700_0.jpg",
                        "origin":"《新边城浪子》"
                    },
                    {
                        "name":"井然",
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559408445425&di=4dbf064883e0248289b1f701698d9500&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F799%2Fw960h1439%2F20180908%2F6777-hivtsyi7996351.jpg",
                        "origin":"《我的真朋友》"
                    },
                    {
                        "name":"齐衡",
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559408446676&di=5e4f6de9813a0801d3b39d6ca1e89c06&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F22%2F20181222110832_glwcc.thumb.700_0.jpg",
                        "origin":"《知否知否应是绿肥红瘦》"
                    },
                    {
                        "name":"罗浮生",
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559474005740&di=c9839c127387781c56d9ca4825903261&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F29%2F20180729222733_gttwi.jpg",
                        "origin":"《许你浮生若梦》"
                    }
                ],
                swiperOption:{
                    slidesPerView: 3
                },
                //推荐
                varietyList:[
                    // {
                    //     "name":"吴邪",
                    //     img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559407667499&di=599ce5990185768c42a433100c647500&imgtype=0&src=http%3A%2F%2Fmobile.pic.people.com.cn%2Fthumbs%2F320%2F528%2Fdata%2Fcms%2FNMediaFile%2F2018%2F0817%2FWIRELESS201808171625000550295005184.jpg",
                    //     "origin":"《盗墓笔记·重启》"
                    // }, 
                    // {
                    //     "name":"沈巍",
                    //     img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559407775342&di=7aaf57aa860402506d324c15fe8194b0&imgtype=0&src=http%3A%2F%2Fwww.desktx.com%2Fd%2Ffile%2Fphone%2Fmingxing%2F20180627%2Ffae5d5a3f8040c5545555b061073d3dc.jpg",
                    //     "origin":"《镇魂》"
                    // },
                    // {
                    //     "name":"傅红雪",
                    //     img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559408440306&di=cebb074e5592149de5676e03ba74656b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F27%2F20180527183750_lkkdn.thumb.700_0.jpg",
                    //     "origin":"《新边城浪子》"
                    // },
                    // {
                    //     "name":"井然",
                    //     img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559408445425&di=4dbf064883e0248289b1f701698d9500&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F799%2Fw960h1439%2F20180908%2F6777-hivtsyi7996351.jpg",
                    //     "origin":"《我的真朋友》"
                    // },
                    // {
                    //     "name":"齐衡",
                    //     img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559408446676&di=5e4f6de9813a0801d3b39d6ca1e89c06&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F22%2F20181222110832_glwcc.thumb.700_0.jpg",
                    //     "origin":"《知否知否应是绿肥红瘦》"
                    // },
                    // {
                    //     "name":"罗浮生",
                    //     img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559474005740&di=c9839c127387781c56d9ca4825903261&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F29%2F20180729222733_gttwi.jpg",
                    //     "origin":"《许你浮生若梦》"
                    // }
                ]
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        created(){
            let url1 = url.getVarietyList;
            axios.get(url1).then(res=>{
                console.log(res);
                this.varietyList=res.data;
            });
        }

    }
</script>

<style lang="scss">
    .container{
        background: #eee;
    }
    .van-nav-bar{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999 !important;
    }
    
    //轮播图
    .swipe-imgs{
        height: 4rem;
        width: 100%;
    }
    //热门
    .hot{
        margin-top: 0.2rem;
        background: #fff;
        &-title{
            width: 100%;
            height: 0.5rem;
            text-align: center;
            color: #ccc;
            padding-top: 0.2rem;
        }
        &-swiper{
            width: 100%;
            height: 5rem;
            text-align: center;
            &-content img{
                height: 3rem;
                width: 2rem;
            }
        }
    }
    //推荐
    .variety ul{
        display: flex;
        flex-wrap: wrap; //换行
        justify-content: center;
        
    }
    .variety{
        margin-top: 0.2rem;
        background: #fff;
        margin-bottom: 1rem;
        &-title{
            width: 100%;
            height: 0.5rem;
            text-align: center;
            color: #ccc;
            padding-top: 0.2rem;
        }
        &-item{
            flex-basis: 45%;   //代替宽度
            text-align: center;
        }
        &-item img{
            width: 2rem;
            height: 3rem;
        }
    }
    

    
</style>