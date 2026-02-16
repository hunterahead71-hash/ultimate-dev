export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 p-4 flex flex-col">
      <div className="mb-6">
        <h1 className="text-lg font-semibold">
          C++ Path
        </h1>
        <p className="text-sm text-slate-400">
          Fundamentals → Advanced
        </p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        <SidebarItem title="0. Introduction" status="done" />
        <SidebarItem title="1. Variables & Types" status="done" />
        <SidebarItem title="2. Control Flow" status="current" />
        <SidebarItem title="3. Functions" status="locked" />
        <SidebarItem title="4. Pointers" status="locked" />
      </nav>

      <div className="mt-4 border-t border-slate-800 pt-4 text-sm text-slate-400">
        🔥 Streak: 4 days
      </div>
    </aside>
  );
}

function SidebarItem({
  title,
  status,
}: {
  title: string;
  status: "done" | "current" | "locked";
}) {
  const styles = {
    done: "text-green-400",
    current: "bg-slate-800 text-white",
    locked: "text-slate-500",
  };

  return (
    <div
      className={`px-3 py-2 rounded-lg cursor-pointer ${styles[status]}`}
    >
      {title}
    </div>
  );
}
