<template>
    <div class="login">
        <div class="wrapper" :style="{transform: active=='login' ? 'translateY(-50%) rotateY(360deg)' : 'translateY(-50%) rotateY(0deg)'}">
            <div class="tabbar">
                <div :class="active=='login' ? 'tab active' : 'tab'" @click="active='login'">登录</div>
                <div :class="active=='register' ? 'tab active' : 'tab'" @click="active='register'">注册</div>
            </div>
            <img src="../assets/logo.png">
            <div class="tab-item">
                <form>
                    <div class="input-item">
                        <input type="text" placeholder="用户名">
                    </div>
                    <div class="input-item">
                        <input type="password" placeholder="密码">
                    </div>
                    <div class="input-item">
                        <div class="btn">{{ active=='login' ? '登录' : '注册' }}</div>
                    </div>
                </form>
            </div>
        </div>
        <rain-drop :canvasWidth="400" :canvasHeight="800"></rain-drop>
    </div>
</template>

<script>
import RainDrop from '../components/RainDrop.vue'
export default {
    name: 'Login',
    components: {
        'RainDrop': RainDrop
    },
    data () {
        return {
            active: 'login',
            rotating: {
                transform: ''
            },
            login: {
                accout: '',
                pwd: ''
            },
            register: {
                accout: '',
                pwd: ''
            }
        }
    },
    watch: {
        active: function(cur, old) {
            if (cur === 'login') {
                this.rotating = {
                  transform: 'transform: translateY(-50%) rotateY(0deg)'
                }
            } else {
                this.rotating = {
                  transform: 'transform: translateY(-50%) rotateY(360deg)'
                }
            }
        }
    },
    methods: {
        tabClick: function () {
            
        }
    }
}
</script>

<style scoped>
    @import './css/loginregister.css';
</style>
