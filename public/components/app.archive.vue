<template>
    <div>
        <h3>archive page list:</h3>
        <h3>archive page list:</h3>
        <div>
            <ul v-if="docs">
                <li v-for="doc in docs" >
                    <a v-link="{{doc._source.url }}">{{doc._source.title }}</a>
                </li>
            </ul>
            <ul v-else>
                <a>no docs</a>
            </ul>
        </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){

            return{
                docs:[{'_source':{'url':'http://www.baidu.com', 'title':'baidu'}}]
            }
        }
    }
</script>
