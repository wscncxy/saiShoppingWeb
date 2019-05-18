<template>
    <div style="padding-top:5px;background: white">
        <el-row style="height: 40px">
            <!--<el-col :span="2" style="text-align: center;line-height: 43px">-->
            <!--<i class="el-icon-menu" style="font-size: 27px"/>-->
            <!--</el-col>-->
            <el-col :span="2" style="text-align: center;line-height: 35px">
                <el-popover
                        placement="right"
                        width="30%"
                        trigger="click"
                        visible-arrow="false"
                        popper-class="baseSearchHeaderUserPopper">
                    <div class="baseSearchHeaderUserMenu">
                        首页
                    </div>
                    <div class="baseSearchHeaderUserMenu">
                        我的订单
                    </div>
                    <div class="baseSearchHeaderUserMenu">
                        我的账户
                    </div>
                    <div class="baseSearchHeaderUserMenuLine">
                    </div>
                    <div class="baseSearchHeaderUserMenu">
                        设置
                    </div>
                    <div class="baseSearchHeaderUserMenu">
                        在线客服
                    </div>
                    <img slot="reference" src="http://static.saiarea.com/images/shopping/noLoginhead.png" style="height: 40px;"/>
                </el-popover>
            </el-col>
            <el-col :span="22" style="padding-left: 5px; padding-right: 5px">
                <el-input placeholder="请输入商品名" size="small" prefix-icon="el-icon-search"/>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    export default {
        name: 'baseSearchHeader',
        data() {
            return {}
        },
        methods: {},
        created: function () {
            console.log('baseSearchHeader')
        }
    }
</script>
<style>
    .baseSearchHeaderUserPopper {
        visible-arrow: false
    }
    .baseSearchHeaderUserMenu{
        padding:10px;
        padding-bottom:0px;
        font-size: 18px;
        font-family: Microsoft YaHei;
    }
    .baseSearchHeaderUserMenuLine{
        border-bottom: 1px solid #e7e7e7;
        padding-top:10px;
    }
    .el-popper{
        padding: 0px;
    }
    .el-popper .popper__arrow {
        display: none;
    }
</style>