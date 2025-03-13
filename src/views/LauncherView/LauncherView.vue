<template>
  <h1>Launcher</h1>
  <el-row :gutter="20">
    <el-col v-for="card in cards" :key="card.id" :span="6">
      <RouterLink :to="{ name: card.routerName }">
        <el-card>
          <p>{{ card.content }}</p>
          <template #footer>
            <span>{{ card.title }}</span>
          </template>
        </el-card>
      </RouterLink>
    </el-col>
  </el-row>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { useCards } from '@/stores/cards'
import { storeToRefs } from 'pinia'

const store = useCards()
const { cards } = storeToRefs(store)
</script>
<style scoped>
.card {
  /* width: 120px; */
  height: 200px;
}
</style>
