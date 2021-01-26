<template>
  <v-col
    class="fill-height"
    fluid
  >
    <v-row class="mt-2" align="start" justify="center">
      <v-col class="d-flex" cols="12" sm="8">
        <div class="default-banner">
          <span>暂时只支持数据库实例的查询，后期会添加 docker 容器的查询……</span>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-5" align="start" justify="center">
      <v-col class="d-flex" cols="12" sm="2">
        <v-select
          :items="types"
          label="Type"
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="2">
        <v-select
          :items="envs"
          label="Environment"
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          :items="databases"
          label="Datebase"
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="1">
        <v-btn large color="blue darken-1" style="font-size: 1.8em;height: 55px;" @click="changeResultStatus">🚀</v-btn>
      </v-col>
      <v-col cols="12" sm="8" v-show="showResult">
        <v-textarea
          :label="item.label"
          auto-grow
          outlined
          rows="1"
          row-height="15"
          background-color="#e0e0e0"
          v-for="(item, index) in results"
          :key="index"
          :value="item.command"
          append-icon="mdi-comment"
        ></v-textarea>
      </v-col>
      <v-col cols="12" sm="8" v-show="showResult">
        <a href="#" @click="showTips">结果不准确？点我反馈</a>
      </v-col>
    </v-row>

    <!-- dialog -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">😀反馈成功</v-card-title>
        <v-card-text>Guanyu Sama 会抽空解决哒！</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">才怪</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">知道了</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </v-col>
</template>

<script>
export default {
    name: 'home',
    props: {

    },
    data: () => ({
      types: ['Server','Docker'],
      envs: ['DEV','UAT', 'PRE', 'PRO'],
      databases: ['yw_cp_opem_baseDB','yw_cp_open_statisticsDB'],
      services: ['QuickcpQidianServer', 'QuickcpQidianServer'],
      results: [
        {
          label: '实例1',
          command: 'mysql -hgamedb.txwxtest6.TXWX.db -P10008 -uopenplattest -popenPlatTest#0428'
        }, 
        {
          label: '实例2',
          command: 'mysql -hgamedb.txwxtest6.TXWX.db -P10008 -uopenplattest -popenPlatTest#0428'
        }],
        showResult: false,
        showFeedback: true,
        dialog: false,
        key: 'f1c701be77264f3f8f151c8de0aa4c8f'
    }),
    created: function() {
      let cityInfo = {}
      // get city info
      this.$axios({
        methods: 'GET',
        url: 'https://geoapi.qweather.com/v2/city/lookup',
        params: {
          key: this.key,
          location: 'shanghai'
        }
      }).then((res) => {
        cityInfo = res.location[0]
      }).catch((e) => {
        console.log(e)
      })
      // get weather info
      this.$axios({
        methods: 'GET',
        url: 'https://geoapi.qweather.com/v7/weather/now',
        params: {
          key: this.key,
          location: cityInfo.id
        }
      }).then((res) => {
        alert(res.now)
      }).catch((e) => {
        console.log(e)
      })
    }, 
    methods: {
      changeResultStatus: function() {
        this.showResult = !this.showResult
      },
      showTips: function() {
        this.dialog = !this.dialog
      }
    }
}
</script>

<style scoped>
  .default-banner {
    width: 100%;
    color: rgba(0, 0, 0, .8);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ffecb5;
    background-color: #fff3cd;
  }
</style>