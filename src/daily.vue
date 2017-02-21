<template lang="pug">
  f7-page(hide-bars-on-scroll='')
    f7-navbar(back-link='Back', v-bind:title='$route.params.week', sliding='')
    f7-list(accordion="")
        f7-list-item(accordion-item="" v-bind:title="bgm.title" v-for="bgm in getByDay($route.params.week)")
            f7-accordion-content
                f7-list
                  f7-list-item(v-for="(url, site) in bgm.url")
                    f7-link(v-bind:href="url" external="" target="view_window") {{ line(bgm.update_time[site], site) }}
                    
</template>

<script>
import store from './store'

export default {
  name: 'daily',
  data () {
    return {
      bangumi: store.data
    }
  },
  methods: {
    line: function(date, site) {
      if(date == null)
        return site
      else
        return site + " " + date
    },
    getByDay: function(day) {
      return this.bangumi[this.week2num(day)];
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
          "不定期": -1
      };
      return m[key];
    }
  }
}
</script>