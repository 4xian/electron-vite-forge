export interface ElectronAPI {
  title: string
  writeText: (text: string) => void
  readText: () => string
  getMainMessage: (cb: Function) => void
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}
