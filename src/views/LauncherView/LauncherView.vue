<template>
  <h1>Launcher</h1>
  <el-row :gutter="20">
    <el-col v-for="card in cards" :key="card.name" :span="6">
      <RouterLink :to="{ name: card.routerName }">
        <el-card>
          <h2>{{ card.name }}</h2>
        </el-card>
      </RouterLink>
    </el-col>
  </el-row>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'

const cards = reactive([
  { name: 'Scan', routerName: 'scan' },
  { name: 'Copy', routerName: 'copy' },
  { name: 'Setting', routerName: 'setting' },
  { name: 'About', routerName: 'about' },
])

const handleClick = () => {}
</script>
<style scoped>
.card {
  /* width: 120px; */
  height: 200px;
}
</style>
