<template>
    <div class="body">
        <h1>{{ bodyTitle }}</h1>
        <p>
            {{ bodyIntro }}
        </p>
        <h3>Interested?</h3>
        <p>Here are some great starter resources:</p>
        <ul><a href="https://react.dev/" target="_blank" rel="noopener">Official React Docs</a></ul>
        <ul><a href="https://stackoverflow.com/" target="_blank" rel="noopener">Stack Overflow</a></ul>
        <ul><a href="https://www.youtube.com/c/webdevsimplified" target="_blank" rel="noopener">Web Dev Simplified's Channel</a></ul>
        <h3>Search Engines</h3>
        <ul>
            <li><a href="https://google.com" target="_blank" rel="noopener">Google</a></li>
            <li><a href="https://bing.com" target="_blank" rel="noopener">Bing</a></li>
            <li><a href="https://escoia.org" target="_blank" rel="noopener">Ecosia</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'BodyComponent',
        props: {
            bodyTitle: String,
            bodyIntro: String
        },
    }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #61DBFB;
}
</style>