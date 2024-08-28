import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { AppStateProvider } from "@/providers/app-state-provider";

export function renderWithAppState(ui: React.ReactNode, options?: RenderOptions) {
  return rtlRender(ui, { wrapper: AppStateProvider, ...options });
}