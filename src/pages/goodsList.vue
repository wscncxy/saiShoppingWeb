<template>
    <el-container>
        <el-header class="main-header" style="height:40px;padding:3px; width: 100%">
            <el-row>
                <el-col :span="2" style="text-align: center;line-height: 43px">
                    <i class="el-icon-menu" style="font-size: 27px"/>
                </el-col>
                <el-col :span="20" style="padding-left: 5px; padding-right: 5px">
                    <el-input placeholder="请输入商品名" size="small" prefix-icon="el-icon-search"/>
                </el-col>
                <el-col :span="2" style="text-align: center;line-height: 35px">
                    <img src="../static/images/noLoginhead.png" style="height: 100%;width: 100%"/>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                <el-col class="goodsFilter" :span="24">
                    <el-row type="flex" justify="space-between">
                        <el-col :span="6" class="filterItem" style="color: red">
                            新品
                        </el-col>
                        <el-col :span="6" class="filterItem">
                            销量
                        </el-col>
                        <el-col :span="6" class="filterItem">
                            筛选
                        </el-col>
                    </el-row>
                </el-col>
                <el-col class="goodsItem" :span="24"
                v-for="(goodsItem) in goodsItemLsit" :key="'goodsItem'+goodsItem.id">
                    <el-container>
                        <el-aside width="30%" height="100%">
                                    <img :src="goodsItem.goodsImg"
                                     class="itemImg"/>
                        </el-aside>
                        <el-main style="text-align: left;padding-left:10px;padding-right: 5px">
                            <el-row>
                                <el-col :span="24" style="font-size: 16px;font-weight: bolder" >
                                    {{goodsItem.goodsName}}
                                </el-col>
                                <el-col :span="24" style="font-size: 12px;color:#555">
                                    {{goodsItem.goodsBrand}}
                                </el-col>
                                <el-col :span="24" style="font-size:15px;margin-top:7px;color:#B12704!important;word-wrap:break-word">
                                    ¥{{goodsItem.goodsPrice}}
                                </el-col>
                                <el-col :span="24">
                                    <el-rate
                                            v-model="goodsItem.goodsStart"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                            score-template="{value}">
                                    </el-rate>
                                </el-col>
                            </el-row>
                        </el-main>
                    </el-container>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="main-footer" style="height: 50px">
            <el-row class="footerNav">
                <el-col :span="6" class="footerNavItem">
                    <el-row>
                        <el-col :span="24">
                            <i class="el-icon-star-off" style="font-size: 27px"/>
                        </el-col>
                        <el-col :span="24" class="footerNavItemLabel">
                            首页
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" class="footerNavItem" >
                    <el-row>
                        <el-col :span="24">
                            <i class="el-icon-tickets" style="font-size: 27px"/>
                        </el-col>
                        <el-col :span="24" class="footerNavItemLabel">
                            分类
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" class="footerNavItem">
                    <el-row>
                        <el-col :span="24">
                            <i class="el-icon-goods" style="font-size: 27px"/>
                        </el-col>
                        <el-col :span="24" class="footerNavItemLabel">
                            购物车
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" class="footerNavItem">
                    <el-row>
                        <el-col :span="24">
                            <i class="el-icon-star-on" style="font-size: 27px"/>
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
export  default {
    name:'index',
    data(){
      return {goodsItemLsit: [
              {
                  id:1,
                  goodsImg:'https://images-cn.ssl-images-amazon.com/images/I/417YDCA9-cL._AC_SX354_SY510_FMwebp_QL65_.jpg',
                  goodsName:' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                  goodsBrand:'拜亚动力',
                  goodsPrice:'10000000000',
                  goodsStart:4.3
              },{
                  id:1,
                  goodsImg:'https://images-cn.ssl-images-amazon.com/images/I/516Al3DM1qL._AC_SX118_SY170_FMwebp_QL65_.jpg',
                  goodsName:' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                  goodsBrand:'拜亚动力',
                  goodsPrice:'10000000000',
                  goodsStart:4.5
              },{
                  id:1,
                  goodsImg:'https://images-cn.ssl-images-amazon.com/images/I/51KE2JRJFEL._AC_SX354_SY510_FMwebp_QL65_.jpg',
                  goodsName:' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                  goodsBrand:'拜亚动力',
                  goodsPrice:'10000000000',
                  goodsStart:4.5
              },{
                  id:1,
                  goodsImg:'https://images-cn.ssl-images-amazon.com/images/I/51IikZtqrGL._AC_SX354_SY510_FMwebp_QL65_.jpg',
                  goodsName:' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                  goodsBrand:'拜亚动力',
                  goodsPrice:'10000000000',
                  goodsStart:4.5
              },{
                  id:1,
                  goodsImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                  goodsName:' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                  goodsBrand:'拜亚动力',
                  goodsPrice:'10000000000',
                  goodsStart:4.5
              },{
                  id:1,
                  goodsImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                  goodsName:' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                  goodsBrand:'拜亚动力',
                  goodsPrice:'10000000000',
                  goodsStart:4.5
              },{
                  id:1,
                  goodsImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                  goodsName:' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                  goodsBrand:'拜亚动力',
                  goodsPrice:'10000000000',
                  goodsStart:4.5
              }
          ],
          stars: 4.5}
    },
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

    .goodsFilter{
        padding:3px
    }
    .filterItem{
        text-align: center;
        font-size: 16px;
        font-weight: bold;
    }
    .el-main{
        padding:0px;
    }
    .main-header{
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
        height: 100%;
        margin-top: 1px;
    }

    .footerNavItemLabel{
        font-size: 12px;
        vertical-align: bottom;
    }

    .goodsItem{
        text-align: center;
        border-top:1px solid #e7e7e7;
        height: 180px;
        padding:10px;
    }

    .itemImg{
        margin: 0 auto;
        height: 90%;
        max-width: 100%;
    }
</style>