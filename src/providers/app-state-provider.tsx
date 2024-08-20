import { createContext, useContext, useEffect, useState } from "react";

type AppStateProviderProps = {
  children: React.ReactNode;
};

type AppState = {
  selectedSetting: string;
  title: string;
};

type AppStateProviderState = {
  state: AppState;
  setState: (state: AppState) => void;
};

const initialState: AppStateProviderState = {
  state: {
    selectedSetting: "Untitled",
    title: "Untitled",
  },
  setState: () => null,
};

const AppStateContext = createContext<AppStateProviderState>(initialState);

export function AppStateProvider({
  children,
  ...props
}: AppStateProviderProps) {
  const [state, setState] = useState<AppState>(initialState.state);

  useEffect(() => {
    setState({ ...state, selectedSetting: state.title });
  }, [state]);

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

export const useAppState = () => {
    const context = useContext(AppStateContext)

    if (context === undefined)
        throw new Error("useAppState must be used within a AppStateProvider")

    return context
}