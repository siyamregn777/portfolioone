// app/page.tsx or app/dashboard/page.tsx
"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Sidebars"
import { IconHome2, IconCode } from "@tabler/icons-react";

export default function SideShow() {
  const links = [
    { label: "Home", href: "/", icon: <IconHome2 /> },
    { label: "Projects", href: "/projects", icon: <IconCode /> },
  ];

  return (
    <Sidebar>
      <SidebarBody>
        <div className="flex flex-col gap-2">
          {links.map((link, i) => (
            <SidebarLink key={i} link={link} />
          ))}
        </div>
      </SidebarBody>

      {/* Main content area */}
      <div className="p-6 flex-1 bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
        {/* Add more page content here */}
      </div>
    </Sidebar>
  );
}
