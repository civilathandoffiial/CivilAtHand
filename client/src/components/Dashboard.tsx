import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const getRoleBasedContent = () => {
    switch (user?.role) {
      case 'student':
        return {
          title: 'Student Dashboard',
          description: 'Access study materials, track your progress, and find internship opportunities.',
          features: [
            'View Study Materials',
            'Track Learning Progress',
            'Find Internships',
            'Access Previous Papers',
            'Request Specific Resources'
          ],
          stats: [
            { label: 'Materials Downloaded', value: '24' },
            { label: 'Hours Studied', value: '156' },
            { label: 'Internships Applied', value: '8' }
          ]
        };
      
      case 'professional':
        return {
          title: 'Professional Dashboard',
          description: 'Manage your services, view client requests, and access industry updates.',
          features: [
            'Manage Service Requests',
            'View Client Projects',
            'Access Industry Updates',
            'Network with Peers',
            'Track Earnings'
          ],
          stats: [
            { label: 'Active Projects', value: '12' },
            { label: 'Completed Services', value: '89' },
            { label: 'Client Rating', value: '4.8/5' }
          ]
        };
      
      case 'client':
        return {
          title: 'Client Dashboard',
          description: 'Track your project progress, communicate with professionals, and manage payments.',
          features: [
            'Track Project Progress',
            'Communicate with Engineers',
            'View Project Timeline',
            'Manage Payments',
            'Request Changes'
          ],
          stats: [
            { label: 'Active Projects', value: '3' },
            { label: 'Completed Projects', value: '7' },
            { label: 'Total Spent', value: '₹45,000' }
          ]
        };
      
      case 'admin':
        return {
          title: 'Admin Dashboard',
          description: 'Manage users, content, and platform operations.',
          features: [
            'User Management',
            'Content Moderation',
            'Analytics & Reports',
            'System Settings',
            'Support Tickets'
          ],
          stats: [
            { label: 'Total Users', value: '1,247' },
            { label: 'Active Content', value: '456' },
            { label: 'Support Tickets', value: '23' }
          ]
        };
      
      default:
        return {
          title: 'Dashboard',
          description: 'Welcome to your dashboard.',
          features: [],
          stats: []
        };
    }
  };

  const content = getRoleBasedContent();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
            <p className="text-lg text-gray-600 mt-2">{content.description}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {content.stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">{feature}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                View Profile
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                Settings
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                Help & Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
