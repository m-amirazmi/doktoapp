import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function LayoutMain({ children }) {
  return (
    <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div class="flex items-start justify-between">
        <Sidebar />
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header />
          <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap sm:flex-row ">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
