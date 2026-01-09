import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="pt-4 z-50">
      <nav className="fixed dark:bg-black bg-white fixed inset-x-0 items-center justify-center space-x-3 flex w-full max-w-[40rem] mx-auto py-2 border-[0.2px] rounded-full transition border-opacity-10 shadow-[0_0_10px_#4f46e5]">
        <DropdownMenu>
          <DropdownMenuTrigger>Navigation</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth"})}>Landing Page</DropdownMenuItem>
            <DropdownMenuItem onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth"})}>About</DropdownMenuItem>
            <DropdownMenuItem onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth"})}>Experience</DropdownMenuItem>
            <DropdownMenuItem onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth"})}>Projects</DropdownMenuItem>
            <DropdownMenuItem onClick={() => document.getElementById("skills")?.scrollIntoView({behavior: "smooth"})}>Skills</DropdownMenuItem>
            <DropdownMenuItem onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}>Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Socials</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem><a href="https://github.com/HyunLee8">GitHub</a></DropdownMenuItem>
            <DropdownMenuItem><a href="https://open.spotify.com/user/249lw9zwlh70b2wak8phnb9k9?si=2777a88c30a342ab&nd=1&dlsi=d6fdf3cc75474d4a">Spotify</a></DropdownMenuItem>
            <DropdownMenuItem><a href="https://www.linkedin.com/in/hyun-lee-a2934b396/">LinkedIn</a></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
