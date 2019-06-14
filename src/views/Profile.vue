<template>
    <div>
        <van-tabs color="#1989fa">
            <van-tab title="登录">
                <van-cell-group>
                    <van-field
                        v-model="loginUsername"
                        required
                        clearable      
                        label="用户名"
                        placeholder="请输入用户名"
                    />
                    <van-field
                        v-model="loginPassword"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                </van-cell-group>
                <div>
                    <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
                </div>
            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                    <van-field
                        v-model="registUsername"
                        required
                        clearable      
                        label="用户名"
                        placeholder="请输入用户名"
                    />
                    <van-field
                        v-model="registPassword"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                </van-cell-group>
                <div>
                    <van-button @click="registHandler" type="primary" size="large">注册</van-button>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import axios from 'axios';
    import url from '@/service.config.js';
    // 映射
    import {mapActions} from 'vuex';
    export default{
        data(){
            return{
                loginUsername:"",
                loginPassword:"",
                registUsername:"",
                registPassword:""
            }
        },
        methods:{
            // 把方法映射进来
            ...mapActions(['loginAction']),
            //注册处理方法
            registHandler(){
                axios({
                    url: url.registUser,
                    method: 'post',
                    data:{
                        // 和数据库中的键名对应
                        userName: this.registUsername,
                        password: this.registPassword
                    }
                }).then(res => {
                    console.log(res);
                    if(res.data.code == 200){
                        this.$toast.success('注册成功');
                        this.registUsername = this.registPassword = '';
                    }else{
                        this.$toast.fail('注册失败');
                    }
                }).catch(err => {
                    console.log(err);
                    this.$toast.fail('注册失败');
                });
            },
            // 登录
            loginHandler(){
                axios({
                    url: url.loginUser,
                    method: 'post',
                    data:{
                        // 和数据库中的键名对应
                        userName: this.loginUsername,
                        password: this.loginPassword
                    }
                }).then(res => {
                    console.log(res);
                    if(res.data.code == 200){
                        // 模拟网络情况不好
                        new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                                resolve();
                            },1000);
                        }).then(()=>{
                            this.$toast.success('登录成功');
                            // 保存登录状态
                            // 由后端把结果返回来，保存在res中
                            this.loginAction(res.data.userInfo);
                            // 跳转
                            this.$router.push('/');   

                        }).catch(err=>{
                            this.$toast.fail('保存登录状态失败');
                        }); 
                    }else{
                        this.$toast.fail('登录失败');
                    }
                   
                }).catch(err => {
                    console.log(err);
                    this.$toast.fail('登录失败');
                });
            }
        }
    }
</script>

<style lang="scss">

</style>