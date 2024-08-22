export type AppState = {
  settings: SettingItem[]
  selectedSetting: SettingItem
  updateDirection: 'up' | 'down'
}

export type SettingItem = {
  id: number
  name: string
}
