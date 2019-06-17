//统一后台接口配置

//mock url
const MOCKURL = 'http://www.zyl.com/';
//真实url
const SERVERURL = 'http://localhost:3000/';     //用到koa路由

const URL = {
    getVarietyList: MOCKURL + 'getVarietyList',
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart'

    //user与后端加载路由的地址一样
    //registUser与后端接收请求的名称一样
    //user控制器下的registUser方法
};

export default URL;