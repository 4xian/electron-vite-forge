<script setup lang="ts">
defineOptions({
  name: 'TheWelcome',
})
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { loadLocaleAsync } from '@/locales/index'
import { onBeforeRouteLeave } from 'vue-router'
const { t, locale } = useI18n()

const changeLang = () => {
  if (locale.value === 'en') {
    loadLocaleAsync('zh')
    // locale.value = 'zh'
  } else {
    loadLocaleAsync('en')
    // locale.value = 'en'
  }
}

const inputValue = ref('')
const readValue = ref('')
const write = () => {
  window.electronAPI.writeText(inputValue.value)
}

const read = async () => {
  const value = await window.electronAPI.readText()
  console.log(value)
  readValue.value = value
}

window.electronAPI.getMainMessage((_: any, data: string) => {
  console.log('收到主进程消息', data)
})

onBeforeRouteLeave(() => {
  console.log('离开欢迎页面')
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (!answer) return false
})
</script>

<template>
  <div>{{ t('title') }}</div>
  <button @click="changeLang()">切换语言</button>
  <input type="text" v-model="inputValue" />
  <button @click="write()">向磁盘写入数据</button>
  <button @click="read()">从磁盘读取数据</button>
  <input type="text" v-model="readValue" />
</template>
