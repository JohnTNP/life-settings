import { useAppState } from "@/providers/app-state-provider";
import { Button } from "./ui/button";

interface SettingItem {
  name: string;
}

const mockSettings: SettingItem[] = [
  { name: "Profile" },
  { name: "Family" },
  { name: "Travel" },
];

export function Sidebar() {
  const { state, setState } = useAppState();

  function selectSetting(setting: SettingItem) {
    setState({ ...state, title: setting.name });
  }

  function isTabSelected(setting: SettingItem) {
    return state.selectedSetting === setting.name;
  }

  return (
    <div className="flex min-w-fit flex-col gap-2 p-2">
      {mockSettings.map((setting, index) => (
        <Button key={index} variant={isTabSelected(setting) ? "secondary" : "ghost"} className="w-full justify-start" onClick={() => selectSetting(setting)}>
          {setting.name}
        </Button>
      ))}
    </div>
  );
}
