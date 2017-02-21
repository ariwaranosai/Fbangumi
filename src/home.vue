<template lang="pug">
  div#app
    f7-views(navbar-through='')
      f7-view(main='', url='/', :dynamic-navbar='true')
        f7-navbar
          f7-nav-left
          f7-nav-center(sliding='') 新番表
          f7-nav-right
        f7-pages#pages
          f7-page.navbar-fixed
            f7-list
              f7-list-item(v-for="week in weeks" v-bind:title='week.day' v-bind:link='"/daily/" + week.day + "/"')
              f7-list-item(title="搜索" link='/search/')
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import store from './store'

export default {
  name: 'app',
  created: function() {
    axios.get("http://bangumi.feng.zone/raw_json").then(function(response){
      let res = response.data
      if (res.success == 0) {
        store.updateData(res.data)
      } else {
        chrome.notifications.create("", {
          type: "basic",
          title: "Error",
          message: "服务器错误",
          iconUrl: "img/error.jpg"
        })
      }
    }).catch(function(error){
      console.log(error)
        chrome.notifications.create("", {
          type: "basic",
          title: "Error",
          message: "网络错误",
          iconUrl: "img/error.jpg"
        })
    })
  },
  data () {
    return {
      weeks:  [ 
        {day: "星期日", num: 0},
        {day: "星期一", num: 1},
        {day: "星期二", num: 2},
        {day: "星期三", num: 3},
        {day: "星期四", num: 4},
        {day: "星期五", num: 5},
        {day: "星期六", num: 6},
        {day: "不定期", num: -1}
        ]
    }
  }
}
</script>