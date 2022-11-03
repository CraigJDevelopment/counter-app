<template>
        <div class="counter">
            {{ $store.state.counter }}
        </div>
        <div class="buttons">
            <button @click="$store.commit('decreaseCounter')">-1</button>
            <button @click="$store.commit('increaseCounter')">+1</button>
        </div>
        <div class="buttons">
            <button @click="$store.commit('decreaseCounterBy5')">-5</button>
            <button @click="$store.commit('increaseCounterBy5')">+5</button>
        </div>
        <div class="buttons">
            <button @click="$store.dispatch('decreaseRandomNumber')">-Random</button>
            <button @click="$store.dispatch('increaseRandomNumber')">+Random</button>
        </div>
    <div class="buttons">
        <button @click="$store.commit('resetCounter')">Reset Number</button>
    </div>
</template>

<script>

export default {
    name: 'Number',
}
</script>

<style>
div {
    margin-bottom: 10px;
    margin-top: 40px;
}

.counter {
    font-size: 80px;
}

.buttons button {
    font-size: 40px;
    width: 200px;
    margin: 0 10px;
}
</style>
