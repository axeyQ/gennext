'use client';
import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

// Individual UI Component Cards - Much Larger
const UICard = ({ children, className = "", title, size = "default" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    small: "md:col-span-1 md:row-span-1",
    default: "md:col-span-1 md:row-span-1", 
    large: "md:col-span-2 md:row-span-1",
    tall: "md:col-span-1 md:row-span-2",
    wide: "md:col-span-2 md:row-span-2",
    xl: "md:col-span-3 md:row-span-2"
  };

  return (
    <motion.div
      className={`
        relative bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer
        transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10
        ${sizeClasses[size]} ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {title && (
        <div className="absolute top-4 left-4 z-10">
          <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-lg font-medium">
            {title}
          </span>
        </div>
      )}
      <div className="p-6 h-full">
        {children}
      </div>
    </motion.div>
  );
};

// Deploy Project Interface
const DeployInterface = () => (
  <div className="h-full flex flex-col">
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy your project</h3>
      <p className="text-gray-600">Connect your GitHub repository to get started</p>
    </div>
    
    <div className="space-y-4 flex-1">
      <button className="w-full flex items-center justify-center space-x-3 bg-gray-900 text-white py-4 px-6 rounded-xl hover:bg-gray-800 transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
        <span className="font-medium">Deploy from GitHub</span>
      </button>
      
      <div className="text-center text-gray-500">or</div>
      
      <button className="w-full border-2 border-dashed border-gray-300 py-8 px-6 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-colors">
        <div className="text-center">
          <div className="text-2xl mb-2">📁</div>
          <div className="font-medium text-gray-700">Upload your project</div>
          <div className="text-sm text-gray-500 mt-1">Drag and drop or click to browse</div>
        </div>
      </button>
    </div>
  </div>
);

// Project Dashboard
const ProjectDashboard = () => (
  <div className="h-full">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">my-app</h3>
      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
        ✓ Active
      </span>
    </div>
    
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="font-medium text-gray-900">Frontend</span>
        </div>
        <div className="text-sm text-gray-600">my-app-production.up.railway.app</div>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="font-medium text-gray-900">API</span>
        </div>
        <div className="text-sm text-gray-600">Port 3001</div>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="font-medium text-gray-900">PostgreSQL</span>
        </div>
        <div className="text-sm text-gray-600">Connected</div>
      </div>
    </div>
    
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="font-semibold text-gray-900">99.9%</div>
          <div className="text-sm text-gray-600">Uptime</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">12ms</div>
          <div className="text-sm text-gray-600">Response</div>
        </div>
        <div>
          <div className="font-semibold text-gray-900">2.1K</div>
          <div className="text-sm text-gray-600">Requests</div>
        </div>
      </div>
    </div>
  </div>
);

// Database Management Interface
const DatabaseInterface = () => (
  <div className="h-full">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold">DB</span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">PostgreSQL Database</h3>
        <p className="text-sm text-gray-600">production-db-railway</p>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Status</span>
        <span className="text-green-600 font-medium">● Available</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Version</span>
        <span className="text-gray-900">15.2</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Storage</span>
        <span className="text-gray-900">2.3 GB / 10 GB</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Connections</span>
        <span className="text-gray-900">3 / 100</span>
      </div>
    </div>
    
    <div className="mt-6 pt-4 border-t border-gray-200">
      <h4 className="font-medium text-gray-900 mb-3">Connection Details</h4>
      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
        <div className="text-green-400">DATABASE_URL</div>
        <div className="text-gray-400 mt-1">postgresql://user:***@host:5432/railway</div>
      </div>
    </div>
  </div>
);

// Environment Variables Interface
const EnvironmentInterface = () => (
  <div className="h-full">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Environment Variables</h3>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
        + Add Variable
      </button>
    </div>
    
    <div className="space-y-3">
      {[
        { key: 'NODE_ENV', value: 'production', scope: 'All Services' },
        { key: 'DATABASE_URL', value: '***************', scope: 'Backend Only' },
        { key: 'JWT_SECRET', value: '***************', scope: 'Backend Only' },
        { key: 'STRIPE_PUBLIC_KEY', value: 'pk_live_***', scope: 'Frontend Only' }
      ].map((env, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex-1">
            <div className="font-medium text-gray-900">{env.key}</div>
            <div className="text-sm text-gray-600 font-mono">{env.value}</div>
          </div>
          <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
            {env.scope}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Deployment Logs
const DeploymentLogs = () => (
  <div className="h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">Latest Deployment</h3>
      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
        Successful
      </span>
    </div>
    
    <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm flex-1 overflow-hidden">
      <div className="space-y-1 text-gray-300">
        <div><span className="text-blue-400">[INFO]</span> Building application...</div>
        <div><span className="text-yellow-400">[BUILD]</span> Installing dependencies</div>
        <div><span className="text-green-400">[BUILD]</span> ✓ Dependencies installed (23.4s)</div>
        <div><span className="text-blue-400">[BUILD]</span> Running build command</div>
        <div><span className="text-green-400">[BUILD]</span> ✓ Build completed (1m 45s)</div>
        <div><span className="text-purple-400">[DEPLOY]</span> Uploading build artifacts</div>
        <div><span className="text-green-400">[DEPLOY]</span> ✓ Deployment successful</div>
        <div><span className="text-cyan-400">[HEALTH]</span> Service is healthy</div>
      </div>
    </div>
    
    <div className="mt-4 text-sm text-gray-600">
      Deployed 2 minutes ago • Build time: 2m 8s
    </div>
  </div>
);

// Team Management
const TeamInterface = () => (
  <div className="h-full">
    <h3 className="text-lg font-semibold text-gray-900 mb-6">Team Members</h3>
    
    <div className="space-y-4">
      {[
        { name: 'Alex Chen', email: 'alex@company.com', role: 'Owner', avatar: '👨‍💻' },
        { name: 'Sarah Kim', email: 'sarah@company.com', role: 'Admin', avatar: '👩‍💼' },
        { name: 'Mike Johnson', email: 'mike@company.com', role: 'Developer', avatar: '👨‍🔧' }
      ].map((member, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-lg">
              {member.avatar}
            </div>
            <div>
              <div className="font-medium text-gray-900">{member.name}</div>
              <div className="text-sm text-gray-600">{member.email}</div>
            </div>
          </div>
          <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
            {member.role}
          </span>
        </div>
      ))}
    </div>
    
    <button className="w-full mt-6 border-2 border-dashed border-gray-300 py-4 px-6 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-colors">
      <span className="text-gray-700 font-medium">+ Invite team member</span>
    </button>
  </div>
);

// Main Bento Grid Component - Much Larger Layout
export default function RailwayUIBentoGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        
        {/* Deploy Interface - Large */}
        <UICard size="default">
          <DeployInterface />
        </UICard>

        {/* Project Dashboard - Wide */}
        <UICard size="large">
          <ProjectDashboard />
        </UICard>

        {/* Database Interface - Tall */}
        <UICard size="tall">
          <DatabaseInterface />
        </UICard>

        {/* Environment Variables - Large */}
        <UICard size="large">
          <EnvironmentInterface />
        </UICard>

        {/* Deployment Logs - Default */}
        <UICard size="default">
          <DeploymentLogs />
        </UICard>

        {/* Team Management - Wide */}
        <UICard size="xl">
          <TeamInterface />
        </UICard>

      </div>
    </div>
  );
}