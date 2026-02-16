"use client";

export default function CodePanel() {
  return (
    <aside className="w-[420px] bg-slate-900 border-l border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-800">
        <h2 className="font-medium">Challenge</h2>
        <p className="text-sm text-slate-400">
          Fix the condition
        </p>
      </div>

      <div className="flex-1 p-4">
        <textarea
          className="w-full h-full bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-sm text-slate-200 resize-none focus:outline-none"
          defaultValue={`int x = 10;

if (x > 5) {
  cout << "x is small";
}`}
        />
      </div>

      <div className="p-4 border-t border-slate-800 flex gap-3">
        <button className="flex-1 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm">
          Hint
        </button>

        <button className="flex-1 bg-green-500 hover:bg-green-400 text-slate-950 px-4 py-2 rounded-lg font-medium text-sm">
          Run Code
        </button>
      </div>
    </aside>
  );
}
