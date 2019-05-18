<template>
    <el-container>
        <!--<el-header class="main-header" style="height:35px;padding:3px; position: absolute;width: 100%">-->
        <!--<el-row>-->
        <!--<el-col :span="3" style="text-align: center">-->
        <!--分类-->
        <!--</el-col>-->
        <!--<el-col :span="18" style="padding-left: 3px; padding-right: 5px">-->
        <!--<el-input placeholder="请输入商品名" size="mini" prefix-icon="el-icon-search"/>-->
        <!--</el-col>-->
        <!--<el-col :span="3">我的</el-col>-->
        <!--</el-row>-->
        <!--</el-header>-->
        <el-main>
            <router-view/>
        </el-main>
        <el-footer class="main-footer" style="height: 60px;z-index: 10000">
            <el-row class="footerNav">
                <el-col :span="6" class="footerNavItem">
                    <el-row>
                        <div @click="tabMenuTo('/index')">
                            <el-col :span="24">
                                <i class="el-icon-star-off" style="font-size: 27px"/>
                            </el-col>
                            <el-col :span="24" class="footerNavItemLabel">
                                首页
                            </el-col>
                        </div>
                    </el-row>
                </el-col>
                <el-col :span="6" class="footerNavItem">
                    <el-row>
                        <div @click="tabMenuTo('/goodsKinds')">
                            <el-col :span="24">
                                <i class="el-icon-tickets" style="font-size: 27px"/>
                            </el-col>
                            <el-col :span="24" class="footerNavItemLabel">
                                分类
                            </el-col>
                        </div>
                    </el-row>
                </el-col>
                <el-col :span="6" class="footerNavItem">
                    <el-row>
                        <div @click="tabMenuTo('/cart')">
                            <el-col :span="24">
                                <i class="el-icon-goods" style="font-size: 27px"/>
                            </el-col>
                            <el-col :span="24" class="footerNavItemLabel">
                                购物车
                            </el-col>
                        </div>
                    </el-row>
                </el-col>
                <el-col :span="6" class="footerNavItem">
                    <el-row>
                        <el-col :span="24">
                            <img src="http://static.saiarea.com/images/shopping/noLoginhead.png" style="height: 27px;width: 27px"/>
                        </el-col>
                        <el-col :span="24" class="footerNavItemLabel">
                            我的
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
    import routes from '../router'

    export default {
        name: 'mainPage',
        data() {
            return {}
        },
        methods: {
            tabMenuTo: function (url) {
                console.log(url)
                routes.push({path:url})
            }
        },
        created: function () {
            console.log('dddddd')
        }
    }
</script>
<style>

    .el-container {
        height: 100%;
        padding: 0px;
        margin: 0px auto;
        width: 100%;
        max-width: 1024px;
    }

    .el-header {
        padding: 0px;
    }

    .el-main {
        padding: 0px;
        height: 100%;
    }

    .el-footer {
        margin-bottom: 0;
        padding: 0px;
        height: 35px;
    }

    .footerNav {
        width: 100%;
        height: 35px;
        text-align: center;
        margin-bottom: 0px;
    }

    .footerNav .el-col {
        height: 100%;
        margin-top: 1px;
    }

    .footerNavItemLabel {
        font-size: 12px;
        vertical-align: bottom;
    }
</style>