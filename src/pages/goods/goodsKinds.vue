<template>
    <el-container style="background:  #F0F0F0">
        <el-header
                style="height:auto; height:45px;width: 100%;">
            <baseSearchHeader/>
        </el-header>
        <el-main style="padding-top: 5px;">
            <el-container style="height: 100%">
                <el-aside style="width: 10%;min-width: 80px;overflow: no-display">
                    <el-row>
                        <el-col v-for="(kindsItem) in goodsKindsList" :key="'kindsItem'+kindsItem.id" :id="'kindsItem'+kindsItem.id"
                                :class="'goodsKindPageLeftItem ' + (kindsItem.id===0?'goodsKindPageLeftItemSelected':'')"
                                @click="selectKindsItem(kindsItem.id)"
                            >
                            {{kindsItem.name}}
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main style="padding:5px;width: 100%">
                    <el-row style="margin-top: -2px">
                        <el-col>
                            <img src="http://static.saiarea.com/images/shopping/banner1.jpg" style="width: 100%;height: 100px">
                        </el-col>
                    </el-row>
                    <el-row v-for="(categorItem) in goodsCategoryList"
                            :key="'categorItem'+categorItem.id"
                            :id="'categorItem'+categorItem.id"
                            style="width: 100%;margin-top: 10px">
                        <el-col class="categorItemTitle":span="24" style="width: 100%;height: 30px;padding:3px">
                            {{categorItem.name}}
                        </el-col>
                        <el-col v-for="(goodsType) in categorItem.goodsTypeList"
                                :key="'categorItem'+categorItem.id"
                                :id="'categorItem'+categorItem.id"
                                :span="8"
                                class="goodsTypeItem">
                            <div style="background: white;">
                                {{goodsType.name}}
                            </div>
                            <div style="background: white">
                                <img :src="goodsType.img" style="width: 100%"/>
                            </div>
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
                    },
                    {
                        id:6,
                        name:'天下美食'
                    },
                    {
                        id:7,
                        name:'天下美食'
                    },
                    {
                        id:8,
                        name:'天下美食'
                    },
                    {
                        id:9,
                        name:'天下美食'
                    },
                    {
                        id:10,
                        name:'天下美食'
                    },
                    {
                        id:11,
                        name:'天下美食'
                    },
                    {
                        id:12,
                        name:'天下美食'
                    },
                    {
                        id:13,
                        name:'天下美食'
                    },
                    {
                        id:14,
                        name:'天下美食'
                    },
                    {
                        id:15,
                        name:'天下美食'
                    }
                ],
                goodsCategoryList: [
                    {
                        id:'1',
                        name: '水果',
                        goodsTypeList:[
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            }
                        ]
                    },
                    {
                        id:'2',
                        name: '水果',
                        goodsTypeList:[
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            }
                        ]
                    },
                    {
                        id:'3',
                        name: '水果',
                        goodsTypeList:[
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            },
                            {
                                name: '热带水果',
                                img:'http://static.saiarea.com/images/shopping/japan.jpg'
                            }
                        ]
                    },
                ],
                stars: 4.5
            }
        },
        methods: {

        },
        created: function () {
            console.log('dddddd')
        }
    }
</script>
<style>

   .goodsKindPageLeftItem{
       width: 100%;
       height: 50px;
       line-height: 50px;
       border-top: solid thin #F0F0F0;
       border-left: solid thin #F0F0F0;
       border-right: solid thin #F0F0F0;
       padding-left: 5px;
       background: white;
   }

   .goodsKindPageLeftItemSelected{
       border-left: solid 3px blue;
   }
   .categorItemTitle{
       background: white;
   }
   .goodsTypeItem{
       text-align: center;
       font-size: 15px
    }
</style>