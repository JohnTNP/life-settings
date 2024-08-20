interface DetailLayoutProps {
    title: string;
}

export function DetailLayout({title}: DetailLayoutProps) {
    return (<div className="px-4 py-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
    </div>)
}