export default [
  {
    path: "/services/",
    component: () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/Users/ovan/Documents/Programming/Repos/lemondemon/src/pages/Services.vue")
  },
  {
    path: "/news-events/",
    component: () => import(/* webpackChunkName: "page--src--pages--news-events-vue" */ "/Users/ovan/Documents/Programming/Repos/lemondemon/src/pages/NewsEvents.vue")
  },
  {
    path: "/books/",
    component: () => import(/* webpackChunkName: "page--src--pages--books-vue" */ "/Users/ovan/Documents/Programming/Repos/lemondemon/src/pages/Books.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/ovan/Documents/Programming/Repos/lemondemon/src/pages/About.vue")
  },
  {
    path: "/articles/",
    component: () => import(/* webpackChunkName: "page--src--pages--articles-vue" */ "/Users/ovan/Documents/Programming/Repos/lemondemon/src/pages/Articles.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ovan/Documents/Programming/Repos/lemondemon/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ovan/Documents/Programming/Repos/lemondemon/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ovan/Documents/Programming/Repos/lemondemon/node_modules/gridsome/app/pages/404.vue")
  }
]

