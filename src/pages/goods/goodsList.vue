<template>
    <el-container>
        <el-header class="main-header"
                   style="height:auto;padding:3px; width: 100%;    border-bottom: 1px solid #e7e7e7;">
            <baseSearchHeader/>
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
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                <el-col class="goodsItem" :span="24"
                        v-for="(goodsItem) in goodsItemLsit" :key="'goodsItem'+goodsItem.id">
                    <el-container>
                        <el-aside width="30%" height="100%">
                            <img :src="goodsItem.goodsImg"
                                 class="itemImg" @click="toUrl('/goodsDetail')"/>
                        </el-aside>
                        <el-main style="text-align: left;padding-left:10px;padding-right: 5px">
                            <el-row>
                                <el-col :span="24" style="font-size: 16px;font-weight: bolder">
                                    <div @click="toUrl('/goodsDetail')">{{goodsItem.goodsName}}</div>
                                </el-col>
                                <el-col :span="24" style="font-size: 12px;color:#555">
                                    {{goodsItem.goodsBrand}}
                                </el-col>
                                <el-col :span="24"
                                        style="font-size:15px;margin-top:7px;color:#B12704!important;word-wrap:break-word">
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
    </el-container>
</template>

<script>

    import routes from '../../router';
    export default {
        name: 'index',
        data() {
            return {
                goodsItemLsit: [
                    {
                        id: 1,
                        goodsImg: 'https://images-cn.ssl-images-amazon.com/images/I/417YDCA9-cL._AC_SX354_SY510_FMwebp_QL65_.jpg',
                        goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                        goodsBrand: '拜亚动力',
                        goodsPrice: '10000000000',
                        goodsStart: 4.3
                    }, {
                        id: 2,
                        goodsImg: 'https://images-cn.ssl-images-amazon.com/images/I/516Al3DM1qL._AC_SX118_SY170_FMwebp_QL65_.jpg',
                        goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                        goodsBrand: '拜亚动力',
                        goodsPrice: '10000000000',
                        goodsStart: 4.5
                    }, {
                        id: 3,
                        goodsImg: 'https://images-cn.ssl-images-amazon.com/images/I/51KE2JRJFEL._AC_SX354_SY510_FMwebp_QL65_.jpg',
                        goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                        goodsBrand: '拜亚动力',
                        goodsPrice: '10000000000',
                        goodsStart: 4.5
                    }, {
                        id: 4,
                        goodsImg: 'https://images-cn.ssl-images-amazon.com/images/I/51IikZtqrGL._AC_SX354_SY510_FMwebp_QL65_.jpg',
                        goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                        goodsBrand: '拜亚动力',
                        goodsPrice: '10000000000',
                        goodsStart: 4.5
                    }, {
                        id: 5,
                        goodsImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                        goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                        goodsBrand: '拜亚动力',
                        goodsPrice: '10000000000',
                        goodsStart: 4.5
                    }, {
                        id: 6,
                        goodsImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                        goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                        goodsBrand: '拜亚动力',
                        goodsPrice: '10000000000',
                        goodsStart: 4.5
                    }, {
                        id: 7,
                        goodsImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                        goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                        goodsBrand: '拜亚动力',
                        goodsPrice: '10000000000',
                        goodsStart: 4.5
                    }
                ],
                stars: 4.5
            }
        },
        methods: {
            toUrl: function (url) {
                console.log('dddddd')
                routes.push({path:url})
            }
        },
        created: function () {
        }
    }
</script>
<style>

    .el-container {
        height: 100%;
        padding: 0px;
        margin: 0px;
    }

    .goodsFilter {
    }

    .filterItem {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
    }

    .el-main {
        padding: 0px;
    }

    .main-header {
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

    .goodsItem {
        text-align: center;
        border-top: 1px solid #e7e7e7;
        height: 180px;
        padding: 10px;
    }

    .itemImg {
        margin: 0 auto;
        height: 90%;
        max-width: 100%;
    }
</style>