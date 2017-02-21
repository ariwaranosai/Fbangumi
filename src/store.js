import Vue from 'vue'

export default new Vue({
    data: {
        isReady: false,
        data: {}
    },
    methods: { 
        updateData: function(d) {
            this.data = d;
            this.isReady = true;
        },
        getByDay: function(day) {
            return this.data[week2num(day)];
        },
        week2num: function(key) {
            let m = {
            "星期日": 0,
            "星期一": 1,
            "星期二": 2,
            "星期三": 3,
            "星期四": 4,
            "星期五": 5,
            "星期六": 6,
            "其他": -1
            }
            return m[key];
        }
    }
})