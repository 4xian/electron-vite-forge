import type { IpcMainEvent } from 'electron'
import fs from 'fs'

export const writeText = (_: IpcMainEvent, data: string) => {
  console.log('主进程收到数据', data)
  fs.writeFile(__dirname + '/test.txt', data, (err) => {
    if (err) {
      console.log('写入文件失败', err)
    } else {
      console.log('写入文件成功')
    }
  })
}

export const readText = () => {
  return fs.readFileSync(__dirname + '/test.txt', 'utf-8')
}
