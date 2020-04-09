<template>
    <el-container style="background: #F0F0F0">
        <el-header
                style="height:auto; height:48px;width: 100%;">
            <baseSearchHeader/>
        </el-header>
        <el-main>
            <div @click="reBannerToAuto">
                <el-carousel ref="indexTopBanner" height="150px"
                             :autoplay=false
                             arrow="never" class="indexTopBanner">
                    <el-carousel-item :key="'banner'+banner.id" v-for="banner in topBannerList">
                        <img :src="banner.image"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <el-row style="margin-top: 3px;background: white;border-radius: 10px">
                <el-col class="indexMidNav" :span="6" v-for="item in midNavList">
                    <div @click="toUrl(item.url)">
                        <img :src="item.image"/>
                    </div>
                    <div>
                        {{item.title}}
                    </div>
                </el-col>
            </el-row>
            <el-row style="font-size: 14px;background: white;margin-top: 3px">
                <el-col :span="4"
                        style="padding-left: 8px;color: red">
                    淘快报:
                </el-col>
                <el-col :span="17">
                    <el-carousel ref="indexTopNews" height="20px"
                                 :autoplay=false
                                 arrow="never"
                                 indicator-position="none">
                        <el-carousel-item v-for="news in topNewsList">
                            {{news.title}}
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <el-col :span="3" style="font-size: 12px;text-align: right;padding-right: 5px;line-height: 20px">|&nbsp;更多</el-col>
            </el-row>
            <el-row style="margin-top: 3px;background: white;border-radius: 10px;padding: 3px">
                <el-col :span="24" style="">
                    <el-row>
                        淘优品
                    </el-row>
                    <el-row style="padding: 5px;padding-top: 0px;background: #FFFAFA;margin-top: 3px">
                        <el-col :span="15" style="padding-left: 20px">
                            <el-row><img height="15px" width="80px" src="http://static.saiarea.com/images/shopping/deguo.jpg"/></el-row>
                            <el-row style="font-size: 16px;font-weight: bolder">POLA新品沐浴露</el-row>
                            <el-row style="color: red;font-size: 12px;margin-top: 5px">¥160.66-¥230.33</el-row>
                            <el-row style="color: red;font-size: 12px;margin-top: 5px">新配方，新包装</el-row>
                        </el-col>
                        <el-col :span="9" style="height: 100%">
                            <img src="http://static.saiarea.com/images/shopping/banner1.jpg" style="width: 100%;margin-top: 10%">
                        </el-col>
                    </el-row>

                    <el-row style="padding: 5px;padding-top: 0px;background: #FFFAFA;margin-top: 8px">
                        <el-col :span="15" style="padding-left: 20px">
                            <el-row><img height="15px" width="80px" src="http://static.saiarea.com/images/shopping/deguo.jpg"/></el-row>
                            <el-row style="font-size: 16px;font-weight: bolder">POLA新品沐浴露</el-row>
                            <el-row style="color: red;font-size: 12px;margin-top: 5px">¥160.66-¥230.33</el-row>
                            <el-row style="color: red;font-size: 12px;margin-top: 5px">新配方，新包装</el-row>
                        </el-col>
                        <el-col :span="9" style="height: 100%">
                            <img src="http://static.saiarea.com/images/shopping/banner1.jpg" style="width: 100%;margin-top: 10%">
                        </el-col>
                    </el-row><el-row style="padding: 5px;padding-top: 0px;background: #FFFAFA;margin-top: 8px">
                    <el-col :span="15" style="padding-left: 20px">
                        <el-row><img height="15px" width="80px" src="http://static.saiarea.com/images/shopping/deguo.jpg"/></el-row>
                        <el-row style="font-size: 16px;font-weight: bolder">POLA新品沐浴露</el-row>
                        <el-row style="color: red;font-size: 12px;margin-top: 5px">¥160.66-¥230.33</el-row>
                        <el-row style="color: red;font-size: 12px;margin-top: 5px">新配方，新包装</el-row>
                    </el-col>
                    <el-col :span="9" style="height: 100%">
                        <img src="http://static.saiarea.com/images/shopping/banner1.jpg" style="width: 100%;margin-top: 10%">
                    </el-col>
                </el-row><el-row style="padding: 5px;padding-top: 0px;background: #FFFAFA;margin-top: 8px">
                    <el-col :span="15" style="padding-left: 20px">
                        <el-row><img height="15px" width="80px" src="http://static.saiarea.com/images/shopping/deguo.jpg"/></el-row>
                        <el-row style="font-size: 16px;font-weight: bolder">POLA新品沐浴露</el-row>
                        <el-row style="color: red;font-size: 12px;margin-top: 5px">¥160.66-¥230.33</el-row>
                        <el-row style="color: red;font-size: 12px;margin-top: 5px">新配方，新包装</el-row>
                    </el-col>
                    <el-col :span="9" style="height: 100%">
                        <img src="http://static.saiarea.com/images/shopping/banner1.jpg" style="width: 100%;margin-top: 10%">
                    </el-col>
                </el-row>


                </el-col>
            </el-row>
        </el-main>

    </el-container>
</template>

<script>

    import routes from '../router';
    let indexTopBannerInterval;
    let indexTopNewsInterval;
    export default {
        name: 'index',
        data() {
            return {
                midNavList: [
                    {
                        title: "本地超市",
                        image: "http://static.saiarea.com/images/shopping/japan.jpg",
                        url: "/goods"
                    },
                    {
                        title: "日韩直邮",
                        image: "http://static.saiarea.com/images/shopping/deguo.jpg",
                        url: "/goods"
                    },
                    {
                        title: "欧美直邮",
                        image: "http://static.saiarea.com/images/shopping/faguo.jpeg",
                        url: "/goods"
                    },
                    {
                        title: "全球淘货",
                        image: "http://static.saiarea.com/images/shopping/meiguo.jpg",
                        url: "/goods"
                    },
                    {
                        title: "今日汇率",
                        image: "http://static.saiarea.com/images/shopping/youhuiquan.jpeg",
                        url: "/goods"
                    },
                    {
                        title: "知识百科",
                        image: "http://static.saiarea.com/images/shopping/baike.png",
                        url: "/goods"
                    },
                    {
                        title: "自助直邮",
                        image: "http://static.saiarea.com/images/shopping/gongju.jpeg",
                        url: "/goods"
                    },
                    {
                        title: "百宝箱",
                        image: "http://static.saiarea.com/images/shopping/gengduo.png",
                        url: "/goods"
                    }
                ],
                topBannerList: [
                    {
                        id:1,
                        image: "http://static.saiarea.com/images/shopping/banner1.jpg",
                        url: ""
                    }, {
                        id:2,
                        image: "http://static.saiarea.com/images/shopping/banner2.jpg",
                        url: ""
                    }, {
                        id:3,
                        image: "http://static.saiarea.com/images/shopping/banner3.jpg",
                        url: ""
                    }
                ],
                topNewsList: [
                    {
                        title: "中国海关将从2019年1月1日开始实行新政",
                        url: ""
                    }, {
                        title: "日本樱花季到来,季节限量品集体上市",
                        url: ""
                    }, {
                        title: "就是各种乱扯的，没啥意义，凑字数",
                        url: ""
                    }
                ]
            }
        },
        methods: {
            reBannerToAuto: function () {
                let _this = this
                window.clearInterval(indexTopBannerInterval);
                indexTopBannerInterval = window.setInterval(function () {
                    _this.$refs.indexTopBanner.next()
                }, 3000);
            },
            toUrl: function (url) {
                routes.push({path:url})
            }
        },
        created: function () {
            let _this = this
            indexTopBannerInterval = window.setInterval(function () {
                _this.$refs.indexTopBanner.next()
            }, 3000);

            indexTopNewsInterval = window.setInterval(function () {
                _this.$refs.indexTopNews.next()
            }, 2000);
        },
        destroyed: function(){
            window.clearInterval(indexTopBannerInterval);
            window.clearInterval(indexTopNewsInterval);
        }
    }

</script>
<style>

    .el-container {
        height: 100%;
        padding: 0px;
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

    .indexTopBanner img {
        width: 100%;
    }

    .indexMidNav {
        text-align: center;
        margin-top: 5px;
        /*border: 1px solid #e7e7e7;*/
        font-size: 14px;
    }

    .indexMidNav div img {
        margin-top: 3px;
        width: 40px;
        height: 40px;
        border-radius: 50%
    }
</style>