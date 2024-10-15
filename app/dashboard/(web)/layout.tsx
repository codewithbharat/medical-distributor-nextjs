import React from 'react';
import Sidebar from '@/components/web/Sidebar';

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex flex-col-reverse md:flex-row h-screen w-full dark:bg-[#387478] dark:text-[#E2F1E7] text-[#629584]">
        {/* Sidebar */}
        <section className="dark:bg-[#243642] bg-[#e2f1e7b9] h-12  absolute left-0 right-0 bottom-0 md:static md:w-20 lg:w-56 shadow-sm md:h-screen">
          <Sidebar />
        </section>
  
        {/* Main Content */}
        <div className="flex flex-col w-full h-full">
          {/* Header */}
          <section className="w-full dark:bg-[#243642] bg-[#effcf3b9] h-12 md:h-16">
            header
          </section>
  
          {/* Scrollable Content */}
          <section className="overflow-y-auto flex-grow h-full">
            {children}
          </section>
        </div>
      </section>
    );
  }
  