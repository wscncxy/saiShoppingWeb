<template>
    <el-container>
        <el-main>
            <el-row v-for="store in storeList" class="storeList">
                <el-col :span="24">
                    <el-row>
                        <el-col :span="3" class="storeCheckBox">
                            <el-checkbox v-model="checked" style="border-radius:10px;">{{store.storeName}}</el-checkbox>
                        </el-col>
                        <el-col :span="21" style="text-align: right;color:#999;font-size: 13px">
                            总计<span style="padding:2px">{{store.goodsItemList.length}}</span>个商品
                        </el-col>
                    </el-row>
                    <el-row v-for="goodsItem in store.goodsItemList" class="goodsItem">
                        <el-col :span="1" style="padding-right: 10px">
                            <el-checkbox v-model="checked" style="border-radius:10px;margin-top: 30px"></el-checkbox>
                        </el-col>
                        <el-col :span="5" style="padding-left: 5px">
                            <img :src="goodsItem.goodsImg" style="width: 100%">
                        </el-col>
                        <el-col :span="18" style="padding-left:5px; ">
                            <el-row style="   font-size: 1em;font-weight: 700!important;">
                                {{goodsItem.goodsName}}
                            </el-row>
                            <el-row style="color:#999;font-size: 13px">
                                {{goodsItem.country}},
                                {{goodsItem.goodsBrand}}
                            </el-row>
                            <el-row style="height: 30px">
                                <el-col :span="5"
                                        style="color: #e93b3d!important;font-size: 15px!important;line-height: 30px;height: 100%">
                                    ${{goodsItem.goodsPrice}}
                                </el-col>
                                <el-col :span="19" style="text-align: right">
                                    <el-input-number v-model="goodsItem.count" size="mini" @change="handleChange"
                                                     :min="1" :max="999" label="描述文字"></el-input-number>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="main-footer" style="height: 60px;padding: 5px">
            <el-row>
                <el-col :span="3">
                    <el-checkbox v-model="checked" style="border-radius:10px;line-height: 50px">全选,已选中1件</el-checkbox>

                </el-col>
                <el-col :span="21" style="text-align: right;padding-right: 5px;padding-top:5px">
                    <el-button type="danger"  style="width: 30%;">下单去</el-button>
                </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                storeList: [
                    {
                        id: 1,
                        storeName: '萨易自营',
                        goodsItemList: [{
                            id: 2,
                            goodsImg: 'https://images-cn.ssl-images-amazon.com/images/I/516Al3DM1qL._AC_SX118_SY170_FMwebp_QL65_.jpg',
                            goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                            goodsBrand: '拜亚动力',
                            goodsPrice: '10000000000',
                            goodsStart: 4.5,
                            country: "日本",
                            count: 1
                        }, {
                            id: 3,
                            goodsImg: 'https://images-cn.ssl-images-amazon.com/images/I/51KE2JRJFEL._AC_SX354_SY510_FMwebp_QL65_.jpg',
                            goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                            goodsBrand: '拜亚动力',
                            goodsPrice: '10000000000',
                            goodsStart: 4.5,
                            country: "日本",
                            count: 3
                        }, {
                            id: 4,
                            goodsImg: 'https://images-cn.ssl-images-amazon.com/images/I/51IikZtqrGL._AC_SX354_SY510_FMwebp_QL65_.jpg',
                            goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                            goodsBrand: '拜亚动力',
                            goodsPrice: '10000000000',
                            goodsStart: 4.5,
                            country: "日本",
                            count: 1
                        }]
                    },
                    {
                        id: 2,
                        storeName: '陈先生人肉代购',
                        goodsItemList: [{
                            id: 5,
                            goodsImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                            goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                            goodsBrand: '拜亚动力',
                            goodsPrice: '10000000000',
                            goodsStart: 4.5,
                            country: "日本",
                            count: 1
                        }, {
                            id: 6,
                            goodsImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                            goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                            goodsBrand: '拜亚动力',
                            goodsPrice: '10000000000',
                            goodsStart: 4.5,
                            country: "日本",
                            count: 1
                        }, {
                            id: 7,
                            goodsImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg',
                            goodsName: ' 周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)',
                            goodsBrand: '拜亚动力',
                            goodsPrice: '10000000000',
                            goodsStart: 4.5,
                            country: "日本",
                            count: 2
                        }]
                    }
                ],
                stars: 4.5
            }
        },
        methods: {
            handleChange: function (index) {
            }
        }
        ,
        created: function () {
            console.log('dddddd')
        }
    }
</script>
<style>

    .storeList {
        border-radius: 10px;
        margin-left: 3px;
        margin-right: 3px;
        margin-top: 10px;
        padding: 10px;
    }


    .footerNav .el-col {
        height: 100%;
        margin-top: 1px;
    }

    .storeCheckBox .el-checkbox__label {
        font-size: 16px;
        font-weight: 700;
        color: #333;
    }

    .goodsItem {
        margin-top: 15px;
        padding: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }


</style>