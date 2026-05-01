"use client";

import { useState } from "react";

const tools = [
  ["AI Command Chat", "🤖", "Smart business answers and execution guidance."],
  ["Ad Campaign Builder", "📢", "USA-style ads, hooks, captions and offers."],
  ["Client Reply Writer", "💬", "Clean customer and client replies."],
  ["Business Idea Lab", "💡", "USA digital product and startup ideas."],
  ["CEO Daily Planner", "📅", "Daily business tasks and execution plan."],
  ["Content Studio", "✍️", "Posts, scripts, captions and emails."],
  ["Sales Script Pro", "🔥", "Sales scripts and conversion CTAs."],
  ["Email Executive", "📧", "Professional emails and follow-ups."],
  ["Website Copy Pro", "🌐", "Landing page and website copy."],
  ["Brand Message Maker", "💎", "Premium brand wording and positioning."],
];

const plans = [
  ["Starter", "$19/mo", "For beginners and solo creators"],
  ["Pro Command", "$29/mo", "Best for marketers and small businesses"],
  ["Elite Workspace", "$49/mo", "For founders, consultants and agencies"],
  ["Agency Suite", "$99/mo", "For teams and client work"],
];

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTool, setActiveTool] = useState(tools[0]);
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState(25);

  async function generate() {
    if (!loggedIn) {
      document.getElementById("login")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (!input.trim()) {
      setReply("Please enter your project request first.");
      return;
    }

    if (credits <= 0) {
      setReply("Your credits are finished. Please upgrade your monthly plan.");
      return;
    }

    setLoading(true);
    setReply("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tool: activeTool[0], message: input }),
    });

    const data = await res.json();
    setReply(data.reply);
    setCredits((c) => c - 1);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#020403] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#00ff9d33,transparent_28%),radial-gradient(circle_at_top_right,#ffffff16,transparent_28%),radial-gradient(circle_at_bottom,#00ff9d22,transparent_32%),#020403]" />
      <div className="fixed inset-0 -z-10 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="bg-[#00ff9d] text-black text-center py-2 text-sm font-black tracking-wide">
        PREMIUM AI WORKSPACE FOR USA CREATORS, MARKETERS, AGENCIES & BUSINESSES
      </div>

      <nav className="sticky top-0 z-50 bg-black/75 backdrop-blur-2xl border-b border-white/10 px-6 md:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#00ff9d] text-black flex items-center justify-center text-2xl shadow-[0_0_35px_#00ff9d66]">
            🤖
          </div>
          <div>
            <h1 className="font-black text-xl tracking-wide">NOVA AI</h1>
            <p className="text-xs text-[#00ff9d]">USA Executive Command Suite</p>
          </div>
        </div>

        <div className="hidden md:flex gap-7 text-sm text-gray-300">
          <a href="#dashboard" className="hover:text-[#00ff9d]">Dashboard</a>
          <a href="#tools" className="hover:text-[#00ff9d]">Tools</a>
          <a href="#app" className="hover:text-[#00ff9d]">AI Console</a>
          <a href="#pricing" className="hover:text-[#00ff9d]">Plans</a>
        </div>

        <a href={loggedIn ? "#app" : "#login"} className="bg-white text-black px-6 py-3 rounded-full font-black hover:scale-105 transition">
          {loggedIn ? "Open App" : "Login"}
        </a>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00ff9d]/30 bg-[#00ff9d]/10 text-[#00ff9d] text-sm font-bold mb-6">
            ● AI SYSTEM ONLINE
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight">
            Build Faster.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff9d] to-white">
              Sell Smarter.
            </span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl">
            A premium black, green and white AI workspace for USA creators, marketers,
            agencies and businesses. Generate ads, replies, emails, content, scripts,
            websites and business ideas from one command center.
          </p>

          <div className="mt-10 flex gap-4 flex-col sm:flex-row">
            <a href={loggedIn ? "#app" : "#login"} className="bg-[#00ff9d] text-black px-9 py-4 rounded-full font-black shadow-[0_0_35px_#00ff9d44] hover:scale-105 transition">
              Start Workspace
            </a>
            <a href="#tools" className="border border-[#00ff9d]/40 px-9 py-4 rounded-full font-black hover:bg-[#00ff9d]/10 transition">
              Explore Tools
            </a>
          </div>
        </div>

        <div className="relative rounded-[36px] border border-[#00ff9d]/20 bg-white/[0.04] p-6 shadow-2xl">
          <div className="absolute -top-10 -right-10 h-60 w-60 bg-[#00ff9d]/20 blur-3xl rounded-full" />

          <div className="rounded-[28px] bg-black border border-white/10 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ff9d22,transparent_45%)]" />

            <div className="relative z-10">
              <div className="text-8xl text-center">🤖</div>
              <h2 className="text-4xl font-black text-center mt-6">Live AI Command Center</h2>
              <p className="text-gray-400 text-center mt-3">
                Tools active. Credits loaded. Project output engine ready for USA business workflows.
              </p>

              <div className="grid grid-cols-3 gap-3 mt-8">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-black text-[#00ff9d]">10</p>
                  <p className="text-xs text-gray-400">Tools</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-black text-[#00ff9d]">{credits}</p>
                  <p className="text-xs text-gray-400">Credits</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-black text-[#00ff9d]">4</p>
                  <p className="text-xs text-gray-400">Plans</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#00ff9d]/10 border border-[#00ff9d]/20 p-4">
                <p className="text-sm text-[#00ff9d] font-black">Latest Activity</p>
                <p className="text-gray-300 mt-2 text-sm">Ad campaign generated for a USA small business</p>
                <p className="text-gray-500 text-xs mt-1">2 minutes ago</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <button
                  onClick={() => {
                    setActiveTool(tools[1]);
                    document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-xl bg-white text-black py-3 font-black"
                >
                  Generate Ad
                </button>
                <button
                  onClick={() => {
                    setActiveTool(tools[2]);
                    document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-xl border border-white/20 py-3 font-black"
                >
                  Write Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="login" className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6 rounded-[32px] border border-[#00ff9d]/20 bg-white/[0.04] p-6">
          <div className="bg-black/60 rounded-3xl p-8 border border-white/10">
            <h2 className="text-4xl font-black">Workspace Login</h2>
            <p className="text-gray-400 mt-3">Access your AI command center.</p>
            <input className="mt-8 w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#00ff9d]" placeholder="Full name" />
            <input className="mt-4 w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#00ff9d]" placeholder="Email address" />
            <input className="mt-4 w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#00ff9d]" placeholder="Password" type="password" />
            <button
              onClick={() => {
                setLoggedIn(true);
                setTimeout(() => document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
              className="mt-6 w-full bg-[#00ff9d] text-black py-4 rounded-full font-black"
            >
              Enter AI Workspace
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#00ff9d]/20 to-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-black">Built For USA Users</h3>
            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✓ Small business owners</li>
              <li>✓ Marketing agencies</li>
              <li>✓ Content creators</li>
              <li>✓ Consultants and coaches</li>
              <li>✓ Online entrepreneurs</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="dashboard" className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-[36px] border border-[#00ff9d]/20 bg-white/[0.04] p-8">
          <div className="flex justify-between flex-col md:flex-row gap-5">
            <div>
              <h2 className="text-4xl md:text-5xl font-black">Executive Dashboard</h2>
              <p className="text-gray-400 mt-2">
                {loggedIn ? "Your AI workspace is active and ready." : "Login to activate your workspace."}
              </p>
            </div>
            <div className="bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/20 px-5 py-3 rounded-full self-start">
              {loggedIn ? "Account Active" : "Guest View"}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[
              ["10", "Active Tools"],
              [String(credits), "Credits Left"],
              ["4", "Monthly Plans"],
              ["24/7", "Workspace"],
            ].map(([n, l]) => (
              <div className="bg-black/60 rounded-3xl border border-white/10 p-6 hover:border-[#00ff9d]/30 transition" key={l}>
                <p className="text-4xl font-black text-[#00ff9d]">{n}</p>
                <p className="text-gray-400 mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-black">USA AI Business Tools</h2>
          <p className="text-gray-400 mt-3">Click any tool and start creating business-ready outputs.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-5 mt-12">
          {tools.map((tool) => (
            <button
              key={tool[0]}
              onClick={() => {
                setActiveTool(tool);
                setInput("");
                setReply("");
                document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-left bg-black/60 border border-white/10 hover:border-[#00ff9d]/40 hover:bg-[#00ff9d]/10 rounded-3xl p-5 transition hover:-translate-y-1"
            >
              <div className="text-4xl">{tool[1]}</div>
              <h3 className="font-black mt-4">{tool[0]}</h3>
              <p className="text-gray-400 text-sm mt-2">{tool[2]}</p>
            </button>
          ))}
        </div>
      </section>

      <section id="app" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white/[0.04] border border-[#00ff9d]/20 rounded-3xl p-6">
            <h3 className="text-2xl font-black">AI Tools Menu</h3>
            <div className="mt-6 space-y-3">
              {tools.map((tool) => (
                <button
                  key={tool[0]}
                  onClick={() => {
                    setActiveTool(tool);
                    setInput("");
                    setReply("");
                  }}
                  className={`w-full text-left px-5 py-4 rounded-2xl transition ${
                    activeTool[0] === tool[0] ? "bg-[#00ff9d] text-black" : "bg-black/60 border border-white/10 hover:border-[#00ff9d]/30"
                  }`}
                >
                  {tool[1]} {tool[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/[0.04] border border-[#00ff9d]/20 rounded-3xl p-8">
            <h2 className="text-4xl font-black">{activeTool[1]} {activeTool[0]}</h2>
            <p className="text-gray-400 mt-2">{activeTool[2]}</p>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Type your USA business request for ${activeTool[0]}...`}
              className="mt-8 w-full min-h-44 bg-black/80 border border-white/10 rounded-3xl p-6 outline-none resize-none focus:border-[#00ff9d]"
            />

            <div className="flex gap-3 mt-5 flex-col sm:flex-row">
              <button onClick={generate} disabled={loading} className="bg-[#00ff9d] text-black px-8 py-4 rounded-full font-black disabled:opacity-60">
                {loading ? "Generating..." : "Generate Project Output"}
              </button>
              <button onClick={() => { setInput(""); setReply(""); }} className="border border-white/20 px-8 py-4 rounded-full font-black hover:bg-white/10">
                Clear
              </button>
            </div>

            {reply && (
              <div className="mt-8 bg-black border border-[#00ff9d]/20 rounded-3xl p-6 shadow-[0_0_40px_#00ff9d11]">
                <h3 className="text-[#00ff9d] font-black text-xl">Generated Project Output</h3>
                <pre className="whitespace-pre-wrap text-gray-300 mt-4 leading-relaxed">{reply}</pre>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center">Monthly AI Workspace Plans</h2>
        <div className="grid md:grid-cols-4 gap-5 mt-12">
          {plans.map((p, i) => (
            <div key={p[0]} className={`rounded-3xl p-7 border ${i === 1 ? "bg-white text-black" : i === 3 ? "bg-[#00ff9d] text-black" : "bg-white/[0.04] border-white/10"}`}>
              <h3 className="text-2xl font-black">{p[0]}</h3>
              <p className="text-4xl font-black mt-4">{p[1]}</p>
              <p className="text-sm mt-4 opacity-70">{p[2]}</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>✓ AI tools access</li>
                <li>✓ USA business outputs</li>
                <li>✓ Business templates</li>
                <li>✓ Monthly usage</li>
              </ul>
              <a href="#app" className={`block text-center mt-7 py-3 rounded-full font-black ${i === 1 || i === 3 ? "bg-black text-white" : "bg-white text-black"}`}>
                Start Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 text-center text-gray-500 py-8">
        © 2026 Nova AI USA Executive Command Suite.
      </footer>
    </main>
  );
}