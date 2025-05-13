"use client";

import { Authenticated } from 'convex/react';
import React, { use } from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Authenticated>
        <div className="container mx-auto mt-24 mb-20">
        {children}
        </div>
    </Authenticated>
  );
};
export default MainLayout;