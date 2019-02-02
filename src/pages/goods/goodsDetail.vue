<template>
    <el-container>
        <el-header class="main-header" style="min-height:20%;padding:3px;">
            <el-row>
                <el-col :span="24">
                    <el-carousel ref="indexTopBanner" height="280px"
                                 :autoplay=false
                                 arrow="never" class="indexTopBanner">
                        <el-carousel-item v-for="goodsImage in goodsImageList">
                            <img :src="goodsImage.url"/>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        </el-header>

    </el-container>
</template>

<script>
export  default {
    name:'index',
    data(){
      return {goodsImageList: [
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