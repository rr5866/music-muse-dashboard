import { Search, Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TopNavBar() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-4 lg:px-8 py-3 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Left: Nav arrows */}
      <div className="flex items-center gap-2">
        <button className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Center: Search */}
      <div className={`relative flex-1 max-w-md transition-all ${searchFocused ? "max-w-lg" : ""}`}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search songs, artists, playlists..."
          className="w-full h-9 pl-10 pr-4 rounded-full bg-surface text-sm text-foreground placeholder:text-muted-foreground border border-transparent focus:border-primary/50 focus:bg-surface-hover outline-none transition-colors"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
        </button>
        <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-transparent hover:ring-primary/50 transition-all">
          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
