<template>
    <el-container>
        <el-header class="main-header" style="height:35px;padding:3px; position: absolute;width: 100%">
            <el-row>
                <el-col :span="3" style="text-align: center">
                    分类
                </el-col>
                <el-col :span="18" style="padding-left: 3px; padding-right: 5px">
                    <el-input placeholder="请输入商品名" size="mini" prefix-icon="el-icon-search"/>
                </el-col>
                <el-col :span="3">我的</el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="24" style="height: 150px">
                    这里是banner
                </el-col>
                <el-col :span="24">
                    <el-row>
                        <el-col :span="4">s</el-col>
                        <el-col :span="4">s</el-col>
                        <el-col :span="4">s</el-col>
                        <el-col :span="4">s</el-col>
                        <el-col :span="4">s</el-col>
                        <el-col :span="4">s</el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    公告
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    特价
                </el-col>
                <el-col>
                    公告
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="main-footer" style="height: 35px">
            <el-row class="footerNav">
                <el-col :span="6" class="footerNavItem">
                    首
                </el-col>
                <el-col :span="6" class="footerNavItem">分类</el-col>
                <el-col :span="6" class="footerNavItem">购物车</el-col>
                <el-col :span="6" class="footerNavItem">我的</el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
export  default {
    name:'index',
    methods:{

    },
    created: function () {
        console.log('dddddd')
    }
}
</script>
<style>

    .el-container{
        height: 100%;
        padding:0px;
        margin: 0px;
    }
    .el-main{
        background: beige;
        padding:0px;
        height: 1000px;
    }
    .main-header{
        opacity:0.3;
        background: blue;
        border:red solid 1px;
    }
    .el-footer{
        margin-bottom: 0;
        padding:0px;
        height: 35px;
    }
    .footerNav{
        width: 100%;
        height: 35px;
        text-align: center;
        margin-bottom: 0px;
    }
    .footerNav .el-col{
        border: solid 1px red;
        height: 100%;

    }
</style>