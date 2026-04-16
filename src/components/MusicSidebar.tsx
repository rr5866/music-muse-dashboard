import { Home, Compass, Library, Heart, Music, Plus } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Compass, label: "Explore" },
  { icon: Library, label: "Library" },
  { icon: Heart, label: "Liked Songs" },
];

const playlists = [
  "Chill Vibes",
  "Workout Mix",
  "Late Night Jazz",
  "Focus Flow",
  "Road Trip",
  "Throwback Hits",
  "Acoustic Morning",
  "Electronic Beats",
  "Indie Favorites",
  "Classical Study",
];

export function MusicSidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col bg-sidebar border-r border-sidebar-border h-screen sticky top-0">
      {/* Logo */}
      <div className="px-6 py-5 flex items-center gap-2">
        <Music className="h-7 w-7 text-primary" />
        <span className="text-lg font-bold text-foreground tracking-tight">Wavify</span>
      </div>

      {/* Nav */}
      <nav className="px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Playlists */}
      <div className="mt-6 px-3 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-3 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Playlists
          </span>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto hide-scrollbar space-y-0.5">
          {playlists.map((name) => (
            <button
              key={name}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors truncate"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
