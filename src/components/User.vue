<template>
<div class="wrapper">
    <p>路由嵌套-用户信息</p>
    <p>name:kevin</p>
    <p>age:25岁</p>
    <p>sex:男</p>
    <input type="text" v-model="name">
    <p>{{name |filterA}}</p>
    <router-view></router-view>
</div>
</template>

<script>
/* alt +shift +a 块注释 */
export default {
    components: {},
    props: {},
    data() {
        return {
            name: ""
        };
    },
    filters: {
        filterA: function (value) {
            if (typeof value == "string") {
                return value
                    .split("")
                    .reverse()
                    .join("");
            }
        }
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>

<style  scoped>
</style>
