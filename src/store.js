import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    // namespaced: true, //命名空间
    // namespace: 'a/',
    state: { //存储数据的
        //用户登录状态
        userLogin: false,
        //用户name
        userName: null,
        count: 0,
        personList: []
    },
    mutations: { //改变state里的值的方法

        changeLogin(state, userLogin) {
            state.userLogin = userLogin;
        },
        setUserName(state, userName) {
            state.userName = userName;
        },
        add(state, countNum) {
            state.count = countNum.count;
        },
        changePersonList(state, addValue) {
            console.log('actions的触发', addValue);
            state.personList.push(addValue)
        }
    },
    actions: {
        addsyb(ctx, mynum) {
            ctx.commit('add', { count: mynum });
        },
        changeP(ctx, addValue) {
            // setTimeout(() => {
                ctx.commit('changePersonList', addValue);//触发mutations中的changePersonList函数
            // }, 1000)

        }
    }
});

export default store;