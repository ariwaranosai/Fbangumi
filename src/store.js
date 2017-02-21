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
        }
   }
})