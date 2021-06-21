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
  </v-col>
</template>

<script>
export default {

}
</script>

<style>
  .default-banner {
    width: 100%;
    color:#858585;
    font-size: 1.1em;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid #febe7b;
    background-color: #fff3cd;
  }
</style>