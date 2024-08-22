import { useAppState } from "@/providers/app-state-provider";
import { Button } from "./ui/button";
import { SettingItem } from "@/lib/types";

export function Sidebar() {
  const { state, setState } = useAppState();

  function selectSetting(setting: SettingItem) {
    const direction = setting.id > state.selectedSetting.id ? 'down' : 'up';
    setState({ ...state, selectedSetting: setting, updateDirection: direction });
  }

  function isTabSelected(setting: SettingItem) {
    return state.selectedSetting?.name === setting.name;
  }

  return (
    <div className="flex min-w-fit flex-col gap-2 p-2">
      {state.settings.map((setting, index) => (
        <Button key={index} variant={isTabSelected(setting) ? "secondary" : "ghost"} className="w-full justify-start" onClick={() => selectSetting(setting)}>
          {setting.name}
        </Button>
      ))}
    </div>
  );
}
