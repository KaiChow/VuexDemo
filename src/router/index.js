import Vue from 'vue'
import Router from 'vue-router'
import Counter from "@/components/Counter.vue";
import User from "@/components/User.vue";
import Profilte from "@/components/Profilte.vue";
import Learn from "@/components/Learn.vue";

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      name: "Counter",
      component: Counter
    },
    {
      path: "/user",
      name: "user",
      component: User,
      children: [{
          name: "profilte",
          path: "profilte/:name",
          component: Profilte,
          props:(route)=>({
            name: route.params.name
          })
        },
        {
          name: "learn",
          path: "learn/:id",
          component: Learn,
          props: true
        }
      ]
    }
  ]
});
