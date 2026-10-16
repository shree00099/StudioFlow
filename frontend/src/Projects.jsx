
import { useState } from "react";
import { Plus, Search, FolderKanban, X } from "lucide-react";

const initialProjects = [
  {
    id: 1,
    name: "Beyond Temptation",
    type: "Social Media Campaign",
    status: "In Progress",
    client: "Beyond Temptation",
    due: "2026-10-18",
  },
  {
    id: 2,
    name: "Moscowtics Jeans",
    type: "Product Shoot",
    status: "In Progress",
    client: "Moscowtics Jeans",
    due: "2026-10-20",
  },
  {
    id: 3,
    name: "Little Thumbs",
    type: "Brand Identity",
    status: "Completed",
    client: "Little Thumbs",
    due: "2026-10-12",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("studioflow-projects")
      ) || initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    client: "",
    type: "Social Media Campaign",
    due: "",
  });

  function saveProjects(updatedProjects) {
    setProjects(updatedProjects);
    localStorage.setItem(
      "studioflow-projects",
      JSON.stringify(updatedProjects)
    );
  }

  function createProject(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      ...form,
      status: "In Progress",
    };

    saveProjects([newProject, ...projects]);

    setForm({
      name: "",
      client: "",
      type: "Social Media Campaign",
      due: "",
    });

    setShowForm(false);
  }

  function deleteProject(id) {
    saveProjects(projects.filter((project) => project.id !== id));
  }

  const filteredProjects = projects.filter((project) =>
    `${project.name} ${project.client} ${project.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0c10] p-5 text-white sm:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Projects</h1>
            <p className="mt-2 text-sm text-gray-400">
              Manage your creative work in one place.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium hover:bg-violet-500"
          >
            <Plus size={18} />
            New project
          </button>
        </div>

        <div className="mb-6 flex items-center gap-3 rounded-xl border border-white/10 bg-[#111218] px-4 py-3">
          <Search size={18} className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects, clients or types..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
          />
        </div>

        {showForm && (
          <div className="mb-8 rounded-2xl border border-white/10 bg-[#111218] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Create project</h2>
              <button onClick={() => setShowForm(false)}>
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={createProject}
              className="grid gap-4 sm:grid-cols-2"
            >
              <input
                required
                placeholder="Project name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="rounded-xl border border-white/10 bg-[#0b0c10] p-3 outline-none focus:border-violet-500"
              />

              <input
                required
                placeholder="Client name"
                value={form.client}
                onChange={(e) =>
                  setForm({ ...form, client: e.target.value })
                }
                className="rounded-xl border border-white/10 bg-[#0b0c10] p-3 outline-none focus:border-violet-500"
              />

              <select
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value })
                }
                className="rounded-xl border border-white/10 bg-[#0b0c10] p-3 outline-none"
              >
                <option>Social Media Campaign</option>
                <option>Product Shoot</option>
                <option>Music Video</option>
                <option>Brand Identity</option>
                <option>Event Coverage</option>
                <option>Other</option>
              </select>

              <input
                required
                type="date"
                value={form.due}
                onChange={(e) =>
                  setForm({ ...form, due: e.target.value })
                }
                className="rounded-xl border border-white/10 bg-[#0b0c10] p-3 outline-none"
              />

              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-4 py-3 font-medium hover:bg-violet-500 sm:col-span-2"
              >
                Create project
              </button>
            </form>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 transition hover:border-violet-500/40"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-300">
                  <FolderKanban size={22} />
                </div>

                <button
                  onClick={() => deleteProject(project.id)}
                  className="text-sm text-gray-500 hover:text-red-400"
                  aria-label={`Delete ${project.name}`}
                >
                  <X size={18} />
                </button>
              </div>

              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-gray-400">
                {project.type}
              </p>

              <div className="mt-5 space-y-3 border-t border-white/[0.08] pt-4 text-sm">
                <p className="text-gray-400">
                  Client: <span className="text-gray-200">{project.client}</span>
                </p>
                <p className="text-gray-400">
                  Due: <span className="text-gray-200">{project.due}</span>
                </p>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs ${
                    project.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-300"
                      : "bg-blue-500/10 text-blue-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            No projects found. Try another search or create a project.
          </div>
        )}
      </div>
    </div>
  );
}
