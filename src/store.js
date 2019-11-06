import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: { //存储数据的

        //用户登录状态
        userLogin: false,
        //用户name
        userName: null
    },
    mutations: { //改变state里的值的方法

        changeLogin(state, userLogin) {
            state.userLogin = userLogin;
        },
        setUserName(state, userName) {
            state.userName = userName;
        }
    }
});

export default store;