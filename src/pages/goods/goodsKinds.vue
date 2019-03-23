<template>
    <el-container style="background:  #F0F0F0">
        <el-header
                style="height:auto; height:45px;width: 100%;">
            <baseSearchHeader/>
        </el-header>
        <el-main style="padding-top: 5px;">
            <el-container>
                <el-aside style="width: 10%;min-width: 80px;">
                    <el-row>
                        <el-col v-for="(kindsItem) in goodsKindsList" :key="'kindsItem'+kindsItem.id"
                                :class="'goodsKindPageLeftItem ' + (kindsItem.id===1?'goodsKindPageLeftItemSelected':'')" >
                            {{kindsItem.name}}
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main>
                    <el-row>
                        <el-col class="goodsItem" :span="24"
                                v-for="(goodsItem) in goodsItemLsit" :key="'goodsItem'+goodsItem.id">
                            <el-container>
                                <el-aside width="30%" height="100%">
                                    <img :src="goodsItem.goodsImg"
                                         class="itemImg"/>
                                </el-aside>
                                <el-main style="text-align: left;padding-left:10px;padding-right: 5px">
                                    <el-row>
                                        <el-col :span="24" style="font-size: 16px;font-weight: bolder">
                                            {{goodsItem.goodsName}}
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
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                goodsKindsList:[
                    {
                        id:0,
                        name:'为你推荐'
                    },
                    {
                        id:1,
                        name:'家用电器'
                    },
                    {
                        id:2,
                        name:'个人护理'
                    },
                    {
                        id:3,
                        name:'居家生活'
                    },
                    {
                        id:4,
                        name:'天下美食'
                    }
                ],
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
        methods: {},
        created: function () {
            console.log('dddddd')
        }
    }
</script>
<style>

   .goodsKindPageLeftItem{
       width: 100%;
       height: 35px;
       line-height: 35px;
       border-top: solid thin #F0F0F0;
       border-left: solid thin #F0F0F0;
       border-right: solid thin #F0F0F0;
       padding-left: 8px;
       background: white;
   }

   .goodsKindPageLeftItemSelected{
       border-left: solid 3px blue;
   }
</style>