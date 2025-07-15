"use client";

import { AppSidebar } from "@/components/elements/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import store from "@/store/store";
import { Provider } from "react-redux";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Provider store={store}>
              <div>{children}</div>
            </Provider>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default DashboardWrapper;
