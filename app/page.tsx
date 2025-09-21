import { ThemeToggle } from "@/components/ui/themeToggle";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-200">Welcome to Next.js!</h1>

      <ThemeToggle />
    </div>
  );
}
