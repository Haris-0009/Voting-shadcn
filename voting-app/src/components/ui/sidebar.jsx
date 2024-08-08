import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { SquareChartGantt } from 'lucide-react';
import { UserRoundCheck } from 'lucide-react';
import { User } from 'lucide-react';
import { Vote } from 'lucide-react';
import { LogIn } from 'lucide-react';




const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-black-900 text-white flex flex-col">
     
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="text-blue-500"
              className="flex items-center space-x-2"
            >
                <LayoutDashboard/>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage_elections"
              activeClassName="text-blue-500"
              className="flex items-center space-x-2"
            >
                <SquareChartGantt/>              
                <span>Manage Elections</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/results"
              activeClassName="text-blue-500"
              className="flex items-center space-x-2"
            >
            <UserRoundCheck/>
              <span>Result</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              activeClassName="text-blue-500"
              className="flex items-center space-x-2"
            >
                <User/>
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cast_vote"
              activeClassName="text-blue-500"
              className="flex items-center space-x-2"
            >
              <Vote/>
              <span>Cast Vote</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              activeClassName="text-blue-500"
              className="flex items-center space-x-2"
            >
              <LogIn/>
              <span>Login</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;