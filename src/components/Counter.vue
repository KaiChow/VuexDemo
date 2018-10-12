<template>
<div class="hello">
    <h1>{{msg}}</h1>

    <p>{{$store.state.count }}</p>
    <p>count is {{ evenOrOdd }}</p>
    <p>name id {{name}}</p>
    <p>sum is {{$store.state.sum}}</p>
    <div>
        <button @click="increment">+</button> <button @click="decrement">-</button>
    </div>

    <div>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
    

</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    name: "Counter",
    data() {
        return {
            sum: 0,
            localCount: 10,
            count: 0,
            msg: "Counter"
        };
    },

    computed: mapGetters([
        'evenOrOdd',
        'name'
    ]),
    methods: mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
    ])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
button {
    margin-top: 20px;
    width: 80px;
    height: 30px;
    padding: 0 10px;
}
</style>
