export type AppState = {
  settings: SettingItem[]
  selectedSetting: SettingItem;
};

export type SettingItem = {
  name: string;
}
