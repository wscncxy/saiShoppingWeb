<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="24" style="max-height: 35%">
                    <div
                            @click="goBack()"
                            style="position: absolute;width: 100%;color: red;z-index: 1000">返回</div>
                    <el-carousel ref="indexTopBanner"
                                 :autoplay=false
                                 arrow="never" class="indexTopBanner">
                        <el-carousel-item v-for="goodsImage in goodsImageList" style="height: 100%">
                            <img :src="goodsImage.url" style="width: 100%;height: "/>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" style="padding: 8px;padding-top:3px;font-size: 16px;color: rgb(51, 51, 51);font-weight: bold;">
                    周突破新日语能力考试N2(语法+听解+文字词汇)(套装共3册)
                </el-col>
            </el-row>
            <el-row style="padding: 5px;">
                <el-col :span="18" style="font-size: 18px">
                    <div style="color: #A80000">
                        $218(¥1200)
                        <span style="font-size: 10px;color: #707070">
                            价格不包含运费及关税
                        </span>
                    </div>
                    <div class="orgPrice" style="font-size: 14px">
                        $220(¥1300)
                    </div>
                </el-col>
                <el-col :span="6" style="text-align: right;font-size: 14px;color: rgb(153, 153, 153)">
                    产地:美国
                </el-col>
            </el-row>
            <el-row class="selectGoodsTypeButton">
                <el-col :span="24">
                    <span style="color: rgb(153, 153, 153)">规格:</span>
                    <span style="margin-left: 3px">
                        IPHONE MAX，5.5寸，玫瑰金，256G
                    </span>
                </el-col>
            </el-row>
            <el-row style="margin-left:5px;margin-right:5px;margin-top:5px;border-radius: 10px;padding:10px;border:thin solid rgb(176,176,176)">
                <el-col :span="24" style="color: #0033FF">
                    需要预定
                </el-col>
                <el-col :span="24" style="font-size: 14px;color: #111">
                    由代购者从境外采购并发货, 购买行为受当地法律的约束。了解更多。
                    <br/>送达日期: 预计最快十五天后送达，具体请咨询代购者
                </el-col>
            </el-row>
            <el-row style="height: 40px;margin-top: 3px">
                <el-col :span="8" class="goodsInfoNav" style="border-left: none;border-right: none">
                    商品详情
                </el-col>
                <el-col :span="8" class="goodsInfoNav" style="border-right: none">
                    具体参数
                </el-col>
                <el-col :span="8" class="goodsInfoNav" style="border-right: none">
                    包装售后
                </el-col>
            </el-row>
            <!-- 商品详情 -->
            <el-row style="margin-top: 3px">
                <el-col :span="8" id="goodsDetailInfo" style="width: 100%;">
                    <img src="http://static.saiarea.com/images/shopping/Heiba.JPG" style="width: 100%"/>
                </el-col>
                <el-col :span="8" id="goodsParamsInfo" style="width: 100%; display: none">
                    <img src="http://static.saiarea.com/images/shopping/Heiba.JPG" style="width: 100%"/>
                </el-col>
                <el-col :span="8" style="width: 100%; display: none">
                    <img src="http://static.saiarea.com/images/shopping/Heiba.JPG" style="width: 100%"/>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="main-footer" style="height: 40px;z-index: 10000;padding-top: 3px;">
            <el-row class="footerNav">
                <el-col :span="3" class="footerNavItem">
                    <el-row style="text-align: center">
                        <div @click="tabMenuTo('/index')">
                            <el-col :span="24">
                                <i class="el-icon-star-off bottomIcon"/>
                            </el-col>
                            <el-col :span="24" class="footerNavItemLabel">
                                联系客服
                            </el-col>
                        </div>
                    </el-row>
                </el-col>
                <el-col :span="3" class="footerNavItem">
                    <el-row style="text-align: center">
                        <div @click="tabMenuTo('/goodsKinds')">
                            <el-col :span="24">
                                <i class="el-icon-tickets bottomIcon"/>
                            </el-col>
                            <el-col :span="24" class="footerNavItemLabel">
                                店铺
                            </el-col>
                        </div>
                    </el-row>
                </el-col>
                <el-col :span="3" class="footerNavItem">
                    <el-row style="text-align: center">
                        <el-col :span="24">
                            <i class="el-icon-goods bottomIcon"/>
                        </el-col>
                        <el-col :span="24" class="footerNavItemLabel">
                            购物车
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="7" class="footerNavItem" style="height: 100%">
                    <el-row style="height: 39px">
                        <el-col :span="24"
                                class="footerGoBuy" style="
                                background-image: linear-gradient(to right, #FFC500, #FF9402)"
                        >
                            加入购物车
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8" class="footerNavItem">
                    <el-row>
                        <el-col :span="24"
                        class="footerGoBuy" style="background-image: linear-gradient(to right, #FF7A00, #FE560A);">
                            立即购买
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
    import routes from '../../router';
export  default {
    name:'index',
    data(){
      return {
          goodsImageList: [
              {
                  id: 1,
                  url: 'https://images-cn.ssl-images-amazon.com/images/I/417YDCA9-cL._AC_SX354_SY510_FMwebp_QL65_.jpg'
              }, {
                  id: 2,
                  url: 'https://images-cn.ssl-images-amazon.com/images/I/516Al3DM1qL._AC_SX118_SY170_FMwebp_QL65_.jpg'
              }, {
                  id: 3,
                  url: 'https://images-cn.ssl-images-amazon.com/images/I/51KE2JRJFEL._AC_SX354_SY510_FMwebp_QL65_.jpg'
              }, {
                  id: 4,
                  url: 'https://images-cn.ssl-images-amazon.com/images/I/51IikZtqrGL._AC_SX354_SY510_FMwebp_QL65_.jpg'
              }, {
                  id: 5,
                  url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544796959503&di=00737e33795fb80c68146c5788645280&imgtype=0&src=http%3A%2F%2Fauctions.c.yimg.jp%2Fimages.auctions.yahoo.co.jp%2Fimage%2Fdr000%2Fauc0311%2Fusers%2F8%2F7%2F0%2F0%2Fkunochikara-img1200x900-1510686097bhnp7k18296.jpg'
              }
          ],
          stars: 4.5}
    },
    methods:{
        goBack: function(){
            routes.go(-1)
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
        width: 100%;
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
    .bottomIcon{
        font-size: 20px
    }
    .footerNavItemLabel{
        font-size: 10px;
    }
    .el-carousel__indicator .el-carousel__button {
        width: 10px;
    }
    .indexTopBanner{
        height: 100%;
    }
    .orgPrice{
        text-decoration: line-through;
        color:#C0C0C0
    }
    .footerGoBuy{
        text-align: center;
        line-height: 39px;
        background: red;
        height: 100%;
        color:white;
    }

    .selectGoodsTypeButton{
        margin-left:5px;
        margin-right:5px;
        margin-top:5px;
        border-radius: 10px;
        padding:3px;
        padding-left:5px;
        background: linear-gradient(to bottom,#f7f8fa,#e7e9ec);
        box-shadow: 0 0.1rem 0 rgba(255,255,255,.6) inset;
        border-radius: .3rem;
        border-color: #ADB1B8 #A2A6AC #8D9096;
        border-style: solid;
        border-width: 1px;
        color: #111;
        font-size: 14px;
    }

    .goodsInfoNav{
        font-size: 14px;
        text-align: center;
        line-height: 45px;
        border: 1px solid #ddd;
        color: #333;
    }

</style>