import React from 'react';

export default function DashboardLayout({
  children,
  sidebar,
  notifications,
  users,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex w-1/2  gap-4">
        <div className="shadow-sm border-spacing-1 border border-cyan-600">
          {sidebar}
          {notifications}
        </div>
        <div className="shadow-md">{users}</div>
      </div>
    </div>
  );
}
