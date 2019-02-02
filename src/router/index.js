import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
        routes: [
            {
                path: '/',
                component: resolve => require(['../pages/main.vue'], resolve),
                redirect:"/goodsDetail",
                children: [
                    {
                        path: '/index',
                        component: resolve => require(['../pages/index.vue'], resolve)
                    },{
                        path: '/goods',
                        component: resolve => require(['../pages/goods/goodsList.vue'], resolve)
                    },{
                        path: '/goodsDetail',
                        component: resolve => require(['../pages/goods/goodsDetail.vue'], resolve)
                    }
                ]
            }

        ]
    }
)