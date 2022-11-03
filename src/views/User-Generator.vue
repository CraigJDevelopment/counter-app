<template>
    <div id="app">
        <img
            :src="$store.state.picture"
            :alt="`${$store.state.firstName} ${$store.state.lastName}`"
            :class="$store.state.gender"/>

        <h1>{{$store.state.firstName}} {{$store.state.lastName}}</h1>

            <h3>Email: {{$store.state.email}}</h3>
            <h3>Country: {{$store.state.country}}</h3>
            <h3>Age: {{$store.state.age}}</h3>

        <button     :class="$store.state.gender"
                    @click="$store.dispatch('getUser')">Get Random User</button>
    </div>
</template>

<script>

export default {
    name: 'User-generator',
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    font-family: Arial, Helvetica, sans-serif;
}

#app {
    width: 400px;
    height: 100vh;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1,
h3 {
    margin-bottom: 1rem;
    font-weight: normal;
}

img {
    border-radius: 50%;
    border: 5px #333 solid;
    margin-bottom: 1rem;
}

.male {
    border-color: steelblue;
    background-color: steelblue;
}

.female {
    border-color: pink;
    background-color: pink;
    color: #333;
}

button {
    cursor: pointer;
    display: inline-block;
    background: #333;
    color: white;
    font-size: 18px;
    border: 0;
    padding: 1rem 1.5rem;
}

button:focus {
    outline: none;
}


</style>
