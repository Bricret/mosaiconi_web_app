"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/presentation/components/ui/sidebar";
import Image from "next/image";
import { ROUTES } from "./route";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offExamples" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! data-[slot=sidebar-menu-button]:py-7!"
            >
              <a href="/admin">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-primary object-cover w-10 h-10"
                />
                <span className="text-base font-semibold">
                  Mosaico Nicaragua
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={ROUTES.navMain} />
        <NavSecondary items={ROUTES.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={ROUTES.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
