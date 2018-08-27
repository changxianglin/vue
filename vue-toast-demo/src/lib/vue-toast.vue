<template>
    <section class="toast-container">
        <div class="toast">
            <span>{{message}}</span>
        </div>
    </section>
</template>

<script>
    export default {
        name: "vue-toast.vue",
        data() {
            return {
                message: 'hello Toast'
            }
        }
    }
</script>

<style lang = 'scss'>
    .toast-container {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        .toast {
            width: 180px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.61);
            border-radius: 10px;
            color: #fff;
        }
    }
</style>