import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Movie",
      url: "#",
      items: [
        {
          title: "Create Movie",
          url: "/dashboard/movie/create",
        },
        {
          title: "Get Movie",
          url: "/dashboard/movie/get",
        },
      ],
    },
    {
      title: "Movie Details",
      url: "#",
      items: [
        {
          title: "Create Movie Details",
          url: "/dashboard/movie-details/create",
        },
        {
          title: "Get Movie Details",
          url: "/dashboard/movie-details/get",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const handleRouteChange = (url: string) => {
    router.push(url);
  };
  return (
    <Sidebar {...props}>
      Admin Page
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      onClick={() => handleRouteChange(item.url)}
                    >
                      <p className="text-xs pl-4 text-gray-600 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
