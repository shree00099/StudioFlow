
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  CalendarDays,
  CheckSquare,
  MessageSquare,
  Settings,
  Search,
  Plus,
  ArrowUpRight,
  Clock3,
  Video,
  Palette,
  MoreHorizontal,
  Bell,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    name: "Beyond Temptation",
    type: "Social Media Campaign",
    progress: 75,
    status: "In Progress",
    color: "violet",
    icon: Video,
    due: "Oct 18, 2026",
  },
  {
    name: "Moscowtics Jeans",
    type: "Product Shoot",
    progress: 45,
    status: "In Progress",
    color: "blue",
    icon: Palette,
    due: "Oct 20, 2026",
  },
  {
    name: "Little Thumbs",
    type: "Brand Identity",
    progress: 100,
    status: "Completed",
    color: "green",
    icon: Sparkles,
    due: "Oct 12, 2026",
  },
];

const activities = [
  {
    initials: "AK",
    color: "purple",
    text: "Aarav uploaded a new video edit",
    project: "Beyond Temptation",
    time: "12 min ago",
  },
  {
    initials: "SP",
    color: "orange",
    text: "Client requested revisions",
    project: "Moscowtics Jeans",
    time: "38 min ago",
  },
  {
    initials: "RS",
    color: "blue",
    text: "Riya completed a design",
    project: "Little Thumbs",
    time: "1 hour ago",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-white/[0.07] bg-[#101116] lg:flex">
        <div className="flex h-20 items-center gap-3 border-b border-white/[0.07] px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/20">
            <Sparkles size={21} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">studioflow</h1>
            <p className="text-[10px] tracking-[0.2em] text-gray-500">
              CREATIVE WORKSPACE
            </p>
          </div>
        </div>

        <div className="px-4 pt-7">
          <p className="mb-3 px-3 text-[10px] font-semibold tracking-[0.2em] text-gray-500">
            WORKSPACE
          </p>

          {[
            [LayoutDashboard, "Overview", true],
            [FolderKanban, "Projects", false],
            [Users, "Clients", false],
            [CalendarDays, "Shoot planner", false],
            [CheckSquare, "Tasks", false],
            [MessageSquare, "Messages", false],
          ].map(([Icon, label, active]) => (
            <button
              key={label}
              className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                active
                  ? "bg-violet-600/15 font-medium text-violet-300"
                  : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <Icon size={18} />
              {label}
              {label === "Messages" && (
                <span className="ml-auto h-2 w-2 rounded-full bg-violet-400" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-auto space-y-1 border-t border-white/[0.07] p-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-400 hover:bg-white/[0.04]">
            <Settings size={18} /> Settings
          </button>
          <div className="mt-3 flex items-center gap-3 rounded-xl bg-white/[0.04] p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold">
              SP
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Studio Admin</p>
              <p className="text-xs text-gray-500">Agency owner</p>
            </div>
            <ChevronDown size={15} className="text-gray-500" />
          </div>
        </div>
      </aside>

      <main className="lg:ml-64">
        <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-white/[0.07] bg-[#0b0c10]/90 px-5 backdrop-blur-xl sm:px-8">
          <div>
            <p className="text-xs text-gray-500">Workspace / Overview</p>
            <h2 className="mt-1 text-lg font-semibold">Dashboard</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-400 sm:flex">
              <Search size={16} /> Search
              <span className="ml-4 rounded border border-white/10 px-1.5 py-0.5 text-[10px]">
                Ctrl K
              </span>
            </button>
            <button className="relative rounded-xl border border-white/10 p-2.5 text-gray-400 hover:text-white">
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-400" />
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2.5 text-sm font-medium transition hover:bg-violet-500">
              <Plus size={17} />
              <span className="hidden sm:inline">New project</span>
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] space-y-8 p-5 sm:p-8">
          <section className="relative overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-r from-[#20153c] via-[#19152b] to-[#13131c] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="relative max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs text-violet-200">
                <Sparkles size={13} /> Your creative command center
              </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Good evening, Studio Admin
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                Keep your projects moving, your team aligned and your clients
                delighted. Here's what's happening across your workspace.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200">
                Explore workspace <ArrowUpRight size={16} />
              </button>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Workspace overview</h3>
                <p className="mt-1 text-xs text-gray-500">
                  Your agency at a glance
                </p>
              </div>
              <span className="text-xs text-gray-500">October 2026</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  label: "Active projects",
                  value: "12",
                  note: "4 due this week",
                  Icon: FolderKanban,
                  color: "violet",
                },
                {
                  label: "Awaiting approval",
                  value: "08",
                  note: "Needs client feedback",
                  Icon: CheckSquare,
                  color: "amber",
                },
                {
                  label: "Upcoming shoots",
                  value: "05",
                  note: "Next one in 2 days",
                  Icon: Video,
                  color: "blue",
                },
                {
                  label: "Team members",
                  value: "07",
                  note: "6 active this week",
                  Icon: Users,
                  color: "green",
                },
              ].map(({ label, value, note, Icon, color }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-[#111218] p-5 transition hover:border-white/15"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{label}</span>
                    <div
                      className={`rounded-xl p-2 ${
                        color === "violet"
                          ? "bg-violet-500/10 text-violet-300"
                          : color === "amber"
                            ? "bg-amber-500/10 text-amber-300"
                            : color === "blue"
                              ? "bg-blue-500/10 text-blue-300"
                              : "bg-emerald-500/10 text-emerald-300"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                  <p className="mt-5 text-3xl font-semibold tracking-tight">
                    {value}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">{note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
            <div className="rounded-2xl border border-white/[0.07] bg-[#111218]">
              <div className="flex items-center justify-between border-b border-white/[0.07] p-5">
                <div>
                  <h3 className="font-semibold">Recent projects</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Keep an eye on your latest work
                  </p>
                </div>
                <button className="text-xs font-medium text-violet-300 hover:text-violet-200">
                  View all
                </button>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {projects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={project.name}
                      className="flex flex-col gap-4 p-5 transition hover:bg-white/[0.02] sm:flex-row sm:items-center"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          project.color === "violet"
                            ? "bg-violet-500/10 text-violet-300"
                            : project.color === "blue"
                              ? "bg-blue-500/10 text-blue-300"
                              : "bg-emerald-500/10 text-emerald-300"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-medium">{project.name}</h4>
                        <p className="mt-1 text-xs text-gray-500">
                          {project.type}
                        </p>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                          <div
                            className={`h-full rounded-full ${
                              project.color === "violet"
                                ? "bg-violet-400"
                                : project.color === "blue"
                                  ? "bg-blue-400"
                                  : "bg-emerald-400"
                            }`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <p className="mt-1.5 text-[11px] text-gray-500">
                          {project.progress}% complete
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:block sm:text-right">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] ${
                            project.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-300"
                              : "bg-blue-500/10 text-blue-300"
                          }`}
                        >
                          {project.status}
                        </span>
                        <p className="mt-2 text-xs text-gray-500">
                          Due {project.due}
                        </p>
                      </div>
                      <button
                        aria-label={`More options for ${project.name}`}
                        className="hidden text-gray-500 hover:text-white sm:block"
                      >
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-[#111218]">
              <div className="border-b border-white/[0.07] p-5">
                <h3 className="font-semibold">Recent activity</h3>
                <p className="mt-1 text-xs text-gray-500">
                  What's happening in your team
                </p>
              </div>

              <div className="space-y-6 p-5">
                {activities.map((activity) => (
                  <div key={activity.text} className="flex gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        activity.color === "purple"
                          ? "bg-violet-500/15 text-violet-300"
                          : activity.color === "orange"
                            ? "bg-orange-500/15 text-orange-300"
                            : "bg-blue-500/15 text-blue-300"
                      }`}
                    >
                      {activity.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm leading-5 text-gray-300">
                        {activity.text}
                      </p>
                      <p className="mt-1 text-xs text-violet-300">
                        {activity.project}
                      </p>
                      <p className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-500">
                        <Clock3 size={12} /> {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mx-5 mb-5 rounded-xl border border-dashed border-white/10 p-4 text-center">
                <p className="text-sm text-gray-300">
                  Keep the whole team in sync
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  More collaboration features coming soon
                </p>
              </div>
            </div>
          </section>

          <footer className="flex flex-col justify-between gap-2 border-t border-white/[0.07] pt-5 text-xs text-gray-600 sm:flex-row">
            <p>© 2026 StudioFlow. Built for creative teams.</p>
            <p>Plan better. Create better. Deliver better.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
