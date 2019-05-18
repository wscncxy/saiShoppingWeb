import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
        routes: [
            {
                path: '/',
                component: resolve => require(['../pages/main.vue'], resolve),
                redirect:"/index",
                children: [
                    {
                        path: '/index',
                        component: resolve => require(['../pages/index.vue'], resolve)
                    },{
                        path: '/goods',
                        component: resolve => require(['../pages/goods/goodsList.vue'], resolve)
                    },{
                        path: '/goodsKinds',
                        component: resolve => require(['../pages/goods/goodsKinds.vue'], resolve)
                    },{
                        path: '/cart',
                        component: resolve => require(['../pages/personal/cart.vue'], resolve)
                    }
                ]
            },
            {
                path: '/goodsDetail',
                component: resolve => require(['../pages/goods/goodsDetail.vue'], resolve)
            }

        ]
    }
)