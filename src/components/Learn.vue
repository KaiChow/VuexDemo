<template>
<div class="wrapper">
    <p>Learn {{id}}</p>
    <p>{{param}}</p>
    <p>{{$route.params.id}}</p>
</div>
</template>

<script>
export default {
    components: {},
    props: ['id'],
    data() {
        return {
            param: this.$route.params.id
        }
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
}
</script>

<style  scoped>

</style>
