import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface ServiceRequest {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
  deadline: string;
  files: File[];
}

interface JobUpdate {
  id: number;
  title: string;
  category: 'Jobs' | 'Results' | 'Internships' | 'Tenders';
  organization: string;
  location: string;
  deadline: string;
  description: string;
}

interface StudyResource {
  id: number;
  title: string;
  type: 'Notes' | 'Textbooks' | 'Question Papers' | 'Lab Manuals' | 'Design Codes';
  semester?: string;
  subject?: string;
  description: string;
  isPremium: boolean;
}

const ClientPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth(); // Will be used for role-based features
  const [activeTab, setActiveTab] = useState('updates');
  const [serviceRequest, setServiceRequest] = useState<ServiceRequest>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    description: '',
    deadline: '',
    files: []
  });

  // Mock data for updates
  const jobUpdates: JobUpdate[] = [
    {
      id: 1,
      title: "Assistant Engineer - Civil Engineering",
      category: "Jobs",
      organization: "Central Public Works Department",
      location: "New Delhi",
      deadline: "2024-02-15",
      description: "Applications invited for the post of Assistant Engineer in Civil Engineering..."
    },
    {
      id: 2,
      title: "GATE 2024 Results Announced",
      category: "Results",
      organization: "IIT Kanpur",
      location: "Online",
      deadline: "2024-02-10",
      description: "GATE 2024 results have been declared. Check your scorecard..."
    },
    {
      id: 3,
      title: "Summer Internship Program 2024",
      category: "Internships",
      organization: "L&T Construction",
      location: "Mumbai",
      deadline: "2024-03-01",
      description: "Applications open for summer internship program in structural engineering..."
    },
    {
      id: 4,
      title: "Highway Construction Tender",
      category: "Tenders",
      organization: "National Highways Authority",
      location: "Punjab",
      deadline: "2024-03-15",
      description: "Tender for construction of 4-lane highway project..."
    }
  ];

  // Mock data for study resources
  const studyResources: StudyResource[] = [
    {
      id: 1,
      title: "Structural Analysis - Complete Notes",
      type: "Notes",
      semester: "6th",
      subject: "Structural Analysis",
      description: "Comprehensive notes covering all topics of structural analysis",
      isPremium: false
    },
    {
      id: 2,
      title: "IS 456:2000 - Plain and Reinforced Concrete",
      type: "Design Codes",
      subject: "Concrete Design",
      description: "Latest Indian Standard for concrete design and construction",
      isPremium: true
    },
    {
      id: 3,
      title: "Soil Mechanics Lab Manual",
      type: "Lab Manuals",
      semester: "4th",
      subject: "Soil Mechanics",
      description: "Complete lab procedures and experiments for soil mechanics",
      isPremium: false
    },
    {
      id: 4,
      title: "Previous Year GATE Question Papers",
      type: "Question Papers",
      subject: "Civil Engineering",
      description: "Collection of GATE question papers from 2015-2024",
      isPremium: true
    }
  ];

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service request submitted:', serviceRequest);
    alert('Service request submitted successfully! We will contact you soon.');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setServiceRequest({
        ...serviceRequest,
        files: Array.from(e.target.files)
      });
    }
  };

  const shareUpdate = (platform: string, update: JobUpdate) => {
    const text = `${update.title} - ${update.organization}`;
    const url = window.location.href;
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
        break;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Jobs': return 'bg-green-100 text-green-800';
      case 'Results': return 'bg-blue-100 text-blue-800';
      case 'Internships': return 'bg-yellow-100 text-yellow-800';
      case 'Tenders': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResourceTypeColor = (type: string) => {
    switch (type) {
      case 'Notes': return 'bg-green-100 text-green-800';
      case 'Textbooks': return 'bg-blue-100 text-blue-800';
      case 'Question Papers': return 'bg-yellow-100 text-yellow-800';
      case 'Lab Manuals': return 'bg-red-100 text-red-800';
      case 'Design Codes': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Main navigation">
            {[
              { id: 'updates', label: 'Latest Updates', icon: '📢' },
              { id: 'resources', label: 'Study Resources', icon: '📚' },
              { id: 'services', label: 'Professional Services', icon: '🛠️' }
            ].map(tab => (
                                <button 
                    key={tab.id}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={activeTab === tab.id ? 'true' : 'false'}
                  >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Civil Engineering Updates */}
        {activeTab === 'updates' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Civil Engineering Updates</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest job notifications, exam results, internship opportunities, and tender announcements in the civil engineering industry.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search updates..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Search updates"
                />
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Filter by category"
                >
                  <option value="">All Categories</option>
                  <option value="Jobs">Jobs</option>
                  <option value="Results">Results</option>
                  <option value="Internships">Internships</option>
                  <option value="Tenders">Tenders</option>
                </select>
              </div>
            </div>

            {/* Updates Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobUpdates.map((update) => (
                <div key={update.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(update.category)}`}>
                        {update.category}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => shareUpdate('whatsapp', update)}
                          className="text-gray-400 hover:text-green-500 transition-colors"
                          aria-label="Share on WhatsApp"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => shareUpdate('linkedin', update)}
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{update.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{update.organization}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {update.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Deadline: {new Date(update.deadline).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Study Resources */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Study Resources & Materials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access comprehensive study materials including class notes, textbooks, previous year papers, lab manuals, and design codes.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Search resources"
                />
                                 <select 
                   className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   aria-label="Filter by resource type"
                 >
                   <option value="">All Types</option>
                   <option value="Notes">Notes</option>
                   <option value="Textbooks">Textbooks</option>
                   <option value="Question Papers">Question Papers</option>
                   <option value="Lab Manuals">Lab Manuals</option>
                   <option value="Design Codes">Design Codes</option>
                 </select>
                 <select 
                   className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   aria-label="Filter by semester"
                 >
                   <option value="">All Semesters</option>
                   <option value="1st">1st Semester</option>
                   <option value="2nd">2nd Semester</option>
                   <option value="3rd">3rd Semester</option>
                   <option value="4th">4th Semester</option>
                   <option value="5th">5th Semester</option>
                   <option value="6th">6th Semester</option>
                   <option value="7th">7th Semester</option>
                   <option value="8th">8th Semester</option>
                 </select>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {studyResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getResourceTypeColor(resource.type)}`}>
                        {resource.type}
                      </span>
                      {resource.isPremium && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Premium
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    {resource.semester && (
                      <p className="text-sm text-gray-600 mb-2">Semester: {resource.semester}</p>
                    )}
                    {resource.subject && (
                      <p className="text-sm text-gray-600 mb-3">Subject: {resource.subject}</p>
                    )}
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                      {resource.isPremium ? 'Get Premium Access' : 'Download Free'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Request Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Specific Materials</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Material name or description"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Material name or description"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Your email"
                />
                <button
                  type="submit"
                  className="md:col-span-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Request Material
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Professional Services */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get expert civil engineering services including design, analysis, estimation, and academic support from qualified professionals.
              </p>
            </div>

            {/* Services Overview */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Civil Engineering Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AutoCAD & Revit Design
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Estimation & Costing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Structural Analysis
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Soil & Foundation Reports
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    PPT Preparation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Excel Automation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    3D Rendering
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Research Support
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Request Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Request a Service</h3>
              <form onSubmit={handleServiceSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={serviceRequest.name}
                      onChange={(e) => setServiceRequest({...serviceRequest, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={serviceRequest.email}
                      onChange={(e) => setServiceRequest({...serviceRequest, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={serviceRequest.phone}
                      onChange={(e) => setServiceRequest({...serviceRequest, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      value={serviceRequest.serviceType}
                      onChange={(e) => setServiceRequest({...serviceRequest, serviceType: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="autocad">AutoCAD & Revit Design</option>
                      <option value="estimation">Estimation & Costing</option>
                      <option value="structural">Structural Analysis</option>
                      <option value="soil">Soil & Foundation Reports</option>
                      <option value="ppt">PPT Preparation</option>
                      <option value="excel">Excel Automation</option>
                      <option value="rendering">3D Rendering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    value={serviceRequest.description}
                    onChange={(e) => setServiceRequest({...serviceRequest, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your project requirements, scope, and any specific details..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Deadline
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      value={serviceRequest.deadline}
                      onChange={(e) => setServiceRequest({...serviceRequest, deadline: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Files (Optional)
                    </label>
                    <input
                      type="file"
                      id="files"
                      multiple
                      onChange={handleFileUpload}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      accept=".pdf,.dwg,.rvt,.doc,.docx,.xls,.xlsx"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Supported formats: PDF, DWG, RVT, DOC, XLS (Max 10MB each)
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Request Quotation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ClientPage;
