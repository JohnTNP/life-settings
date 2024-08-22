import { mockSettings } from "@/lib/mocks";
import { AppState } from "@/lib/types";
import { createContext, useContext, useState } from "react";

type AppStateProviderProps = {
  children: React.ReactNode;
};

type AppStateProviderState = {
  state: AppState;
  setState: (state: AppState) => void;
};

const initialState: AppStateProviderState = {
  state: {
    settings: mockSettings,
    selectedSetting: mockSettings[0],
    updateDirection: 'down',
  },
  setState: () => null,
};

const AppStateContext = createContext<AppStateProviderState>(initialState);

export function AppStateProvider({
  children,
  ...props
}: AppStateProviderProps) {
  const [state, setState] = useState<AppState>(initialState.state);

  const value = {
    state,
    setState: (state: Partial<AppState>) => {
      setState((prevState) => ({ ...prevState, ...state }));
    },
  };

  return (
    <AppStateContext.Provider {...props} value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppState = () => {
  const context = useContext(AppStateContext)

  if (context === undefined)
      throw new Error("useAppState must be used within a AppStateProvider")

  return context
}