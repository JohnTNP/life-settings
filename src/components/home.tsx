import { useAppState } from "@/providers/app-state-provider";
import { DetailLayout } from "./detail-layout";
import { Sidebar } from "./sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";

export function Home() {
    const { state } = useAppState()

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="w-full h-full border-2 rounded-xl">
                <ResizablePanel className="min-w-fit" defaultSize={15} maxSize={25}>
                    <Sidebar />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <DetailLayout title={state.selectedSetting.name} />
                </ResizablePanel>
        </ResizablePanelGroup>
    )
}