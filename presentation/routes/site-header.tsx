"use client";

import { Button } from "@/presentation/components/ui/button";
import { Separator } from "@/presentation/components/ui/separator";
import { SidebarTrigger } from "@/presentation/components/ui/sidebar";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar el error de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 my-1.5" />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="hidden sm:flex"
            onClick={toggleTheme}
            disabled={!mounted}
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>
          <Button
            variant="outline"
            className="hidden sm:flex text-center justify-center"
          >
            Acciones{" "}
            <span className="text-xs font-mono bg-accent rounded-sm px-2 py-1">
              CTRL + K
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
