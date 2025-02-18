// See the Electron documentation for details on how to use preload scripts:

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
console.log('preload', process.versions)
import { contextBridge, ipcRenderer } from 'electron'
import type { IpcRendererEvent } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  title: '测试标题',
  writeText: (text: string) => {
    console.log('preload接收数据', text)
    // 发送数据给主进程
    ipcRenderer.send('write-text', text)
  },
  readText: () => {
    // 调用主进程的方法(invoke始终返回promise)
    return ipcRenderer.invoke('read-text')
  },
  getMainMessage: (cb) => {
    // 主进程主动发送消息给渲染进程
    return ipcRenderer.on('main-message', cb)
  },
})
