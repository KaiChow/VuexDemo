<template>
<div class="wrapper">
    <p>{{name}}</p>
    <p>步骤二：点击编辑器右下角笑脸左边的文件类型，选择配置文件关联，输入vue然后回车。右下角的文件类型就会从html变成vue。这时再用tab键就可以成功生成模板了~
以上就是本文的全部内容，希望对大家的学习有所帮助，也希望大家多多支持脚本之家。</p>
</div>
</template>

<script>
export default {
    name:"profilte",
    props:{
        name:String
    },
    data() {
        return {}
    }
}
</script>

<style  scoped>

</style>
