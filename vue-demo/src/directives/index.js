import copy from './copy'
import datefomat from './dateformat'

const directives = {
    copy,
    datefomat
};

// 批量注册指令
export default {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key]);
        });
    },
};
