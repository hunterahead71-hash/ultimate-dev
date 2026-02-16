import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-6">
          Continue Learning
        </h1>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <p className="text-slate-400 mb-2">
            C++ Course
          </p>
          <h2 className="text-xl font-medium mb-4">
            Control Flow → If Statements
          </h2>

          <div className="flex items-center gap-4">
            <div className="flex-1 bg-slate-800 h-2 rounded">
              <div className="bg-green-500 h-2 w-2/3 rounded" />
            </div>
            <span className="text-sm text-slate-400">
              Level 6
            </span>
          </div>

          <button className="mt-6 bg-green-500 hover:bg-green-400 text-slate-950 px-5 py-2 rounded-lg font-medium">
            Resume Lesson →
          </button>
        </div>
      </main>
    </div>
  );
}
