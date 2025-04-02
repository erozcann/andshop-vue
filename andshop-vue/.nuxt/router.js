import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16876a18 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _5879e85c = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _a6c835a8 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _fd03c224 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _736e4b03 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _7099fa7a = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _8719389a = () => interopDefault(import('..\\pages\\electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _bea6245c = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _61bd01ae = () => interopDefault(import('..\\pages\\furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _21a06649 = () => interopDefault(import('..\\pages\\grocery.vue' /* webpackChunkName: "pages/grocery" */))
const _b79a90b6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _382e33fc = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _6b703482 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _74ef9127 = () => interopDefault(import('..\\pages\\pharmacy.vue' /* webpackChunkName: "pages/pharmacy" */))
const _5c5ee88b = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _af4bf9d2 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _61f59d58 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _13b9c85f = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _86aacdba = () => interopDefault(import('..\\pages\\admin\\chat.vue' /* webpackChunkName: "pages/admin/chat" */))
const _70eb615d = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _70f978de = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _5be85912 = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _9604d64e = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _95e8a74c = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _95cc784a = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _6cff0f98 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _df758b22 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _8a766f5c = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _1473374e = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _0388d352 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _142183ea = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _142f9b6b = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _2681e115 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _13fcd41b = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _b5145a54 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _06cf4be5 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _d7f2d676 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _54db7914 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _54bf4a12 = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _2aaf8b05 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _2abda286 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _2acbba07 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _2ad9d188 = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _1aa8ab10 = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _2c8488db = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _bb3d2688 = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _05e13c76 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _17fdd4c6 = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _4ae9d6e4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _aa357838 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _438dadc2 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _16876a18,
    name: "404"
  }, {
    path: "/about-us",
    component: _5879e85c,
    name: "about-us"
  }, {
    path: "/blog",
    component: _a6c835a8,
    name: "blog"
  }, {
    path: "/cart",
    component: _fd03c224,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _736e4b03,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _7099fa7a,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _8719389a,
    name: "electronics"
  }, {
    path: "/faq",
    component: _bea6245c,
    name: "faq"
  }, {
    path: "/furniture",
    component: _61bd01ae,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _21a06649,
    name: "grocery"
  }, {
    path: "/login",
    component: _b79a90b6,
    name: "login"
  }, {
    path: "/lookbook",
    component: _382e33fc,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _6b703482,
    name: "my-account"
  }, {
    path: "/pharmacy",
    component: _74ef9127,
    name: "pharmacy"
  }, {
    path: "/privacy-policy",
    component: _5c5ee88b,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _af4bf9d2,
    name: "register"
  }, {
    path: "/shop",
    component: _61f59d58,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _13b9c85f,
    name: "vendor-dashboard"
  }, {
    path: "/admin/chat",
    component: _86aacdba,
    name: "admin-chat"
  }, {
    path: "/blog/blog-2",
    component: _70eb615d,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _70f978de,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _5be85912,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _9604d64e,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _95e8a74c,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _95cc784a,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _6cff0f98,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _df758b22,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _8a766f5c,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _1473374e,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _0388d352,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _142183ea,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _142f9b6b,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _2681e115,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _13fcd41b,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _b5145a54,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _06cf4be5,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _d7f2d676,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _54db7914,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _54bf4a12,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _2aaf8b05,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _2abda286,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _2acbba07,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _2ad9d188,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _1aa8ab10,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _2c8488db,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _bb3d2688,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _05e13c76,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _17fdd4c6,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _4ae9d6e4,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _aa357838,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _438dadc2,
    name: "product-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
