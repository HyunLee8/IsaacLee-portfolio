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
            <DropdownMenuItem onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth"})}>Experience</DropdownMenuItem>
            <DropdownMenuItem onClick={() => document.getElementById("skills")?.scrollIntoView({behavior: "smooth"})}>Skills</DropdownMenuItem>
            <DropdownMenuItem onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}>Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Socials</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem><a href="https://github.com/HyunLee8">GitHub</a></DropdownMenuItem>
            <DropdownMenuItem>LinkedIn</DropdownMenuItem>
            <DropdownMenuItem>Instagram</DropdownMenuItem>
            <DropdownMenuItem>Twitter</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
