<template>
<f7-page hide-bars-on-scroll>
  <f7-navbar back-link='Back' title='搜索' sliding=''></f7-navbar>
  <f7-searchbar
    cancel-link="Cancel"
    search-list="#search-list"
    placeholder="Search in items"
    :clear-button="true"
    @searchbar:search="onSearch"
  ></f7-searchbar>

  <f7-list class="searchbar-not-found">
    <f7-list-item title="Nothing found"></f7-list-item>
  </f7-list>

  <f7-list class="searchbar-found" id="search-list">
    <f7-list-item accordion-item v-for="bgm in bangumi" :title="bgm.title">        
        <f7-accordion-content>
            <f7-list accordion>
                <f7-list-item class="needed" v-for="(url, site) in bgm.url">
                    <f7-link :href="url" external="" target="view_window"> 
                        {{ line(bgm.update_time[site], site) }}
                    <f7-link>
                </f7-list-item>
            </f7-list>
        </f7-accordion-content>
    </f7-list-item>
  </f7-list>
</f7-page>
</template>

<script>
  import store from './store'

  export default {
    data: function () {
      return {
        bangumi: this.merge(store.data)
      }
    },

    methods: {
       line: function(date, site) {
           if(date == null)
                return site
            else
                return site + " " + date
        },
        merge: function(data) {
            let res = Array();
            for (var k in data) {
                res = res.concat(data[k]);
            }
            return res;
        },
        onSearch: function (query, found) {
            if(query.length == 0)
                return ;

            let cls = "hidden-by-searchbar"
            let eles = document.getElementsByClassName("needed")
            for (var index = 0; index < eles.length; index++) {
                var ele = eles[index]
                if(ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'))) {
                    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
                    ele.className=ele.className.replace(reg,' ');
                }
            }
        }
    }
  }
</script>