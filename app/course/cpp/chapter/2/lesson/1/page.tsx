import Sidebar from "@/components/Sidebar";
import CodePanel from "@/components/CodePanel";

export default function LessonPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Lesson Content */}
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-3xl">
          <p className="text-sm text-slate-400 mb-2">
            Chapter 2 • Control Flow
          </p>

          <h1 className="text-3xl font-semibold mb-6">
            If Statements
          </h1>

          <p className="text-slate-300 mb-4 leading-relaxed">
            Conditional statements allow your program to make decisions.
            The <code className="bg-slate-800 px-1 rounded">if</code> keyword
            executes code only when a condition is true.
          </p>

          <pre className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-6 text-sm">
{`int x = 10;

if (x > 5) {
  cout << "x is greater than 5";
}`}
          </pre>

          <p className="text-slate-300 mb-6">
            If the condition inside the parentheses evaluates to true,
            the code block will run.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-medium mb-2">
              Your Task
            </h3>
            <p className="text-slate-400 text-sm">
              Modify the condition so the program prints:
              <span className="text-green-400 ml-1">x is small</span>
            </p>
          </div>
        </div>
      </main>

      {/* Code Panel */}
      <CodePanel />
    </div>
  );
}
