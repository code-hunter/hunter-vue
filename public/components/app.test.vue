<template>
    <div>
        <header-component></header-component>
        <content-component></content-component>
        <footer-component></footer-component>
    </div>
</template>

<style src="../assets/css/amazeui.min.css"></style>
<style src="../assets/css/app.css"></style>

<script>
    import Header from './header.vue'
    import Content from './content.vue'
    import Footer from './footer.vue'

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            'header-component': Header,
            'content-component': Content,
            'footer-component': Footer
        }
    }

</script>
