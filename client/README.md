# Civil At Hand - Professional Civil Engineering Platform

A comprehensive digital hub for the civil engineering community, integrating learning resources, industry updates, professional services, and expert-written blogs. Built with React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

### 🔐 Role-Based Authentication System
- **Student**: Access study materials, track progress, find internships
- **Professional**: Manage services, view client requests, network with peers
- **Client**: Track project progress, communicate with engineers, manage payments
- **Admin**: User management, content moderation, analytics

### 📢 Civil Engineering Updates
- Latest job notifications (Central & State, private sector)
- Exam results & answer keys
- Internship opportunities
- Tender announcements
- Category filters and search functionality
- Social sharing (WhatsApp, LinkedIn, Telegram)

### 📚 Study Material & Resources
- Class notes (semester & subject-wise)
- Civil engineering textbooks (PDFs)
- Previous year question papers
- Lab manuals
- Design codes (IS, IRC, etc.)
- Advanced search and filtering
- Premium content access

### 🛠️ Professional Services
- **Civil Engineering Services**:
  - AutoCAD & Revit design
  - Estimation & costing
  - Structural analysis
  - Soil & foundation reports
- **Academic Services**:
  - PPT preparation
  - Excel automation
  - 3D rendering
  - Research support

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **State Management**: React Context API
- **Authentication**: Custom role-based system
- **UI Components**: Custom components with Tailwind CSS

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginModal.tsx
│   │   ├── RegisterModal.tsx
│   │   └── ProtectedRoute.tsx
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ClientPage.tsx
│   ├── Dashboard.tsx
│   └── Footer.tsx
├── contexts/
│   └── AuthContext.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd civilathand/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS PostCSS plugin**
   ```bash
   npm install -D @tailwindcss/postcss
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔐 Demo Accounts

For testing purposes, you can use these demo accounts:

| Role | Email | Password |
|------|-------|----------|
| Student | student@example.com | password |
| Professional | professional@example.com | password |
| Client | client@example.com | password |
| Admin | admin@example.com | password |

## 🎨 Key Components

### Authentication System
- **AuthContext**: Manages user authentication state and role-based access
- **ProtectedRoute**: Wraps components that require authentication
- **LoginModal/RegisterModal**: User authentication forms

### Navigation
- **Navbar**: Professional navigation with user menu and role badges
- **Tab Navigation**: Content switching between Updates, Resources, and Services

### Content Sections
- **HeroSection**: Compelling landing section with call-to-action
- **ClientPage**: Main content with tabbed interface
- **Dashboard**: Role-specific dashboard for authenticated users
- **Footer**: Professional footer with links and social media

## 🎯 User Roles & Permissions

### Student
- Access to study materials and resources
- Request specific materials
- View internship opportunities
- Track learning progress

### Professional Engineer
- Manage service requests
- View client projects
- Access industry updates
- Network with peers

### Client
- Submit service requests
- Track project progress
- Communicate with engineers
- Manage payments

### Administrator
- User management
- Content moderation
- Analytics and reports
- System configuration

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with PostCSS. Configuration is in:
- `postcss.config.cjs` - PostCSS configuration
- `index.css` - Tailwind imports and global styles

### Environment Variables
Create a `.env` file for environment-specific configuration:
```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=Civil At Hand
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel/Netlify
The project is configured for easy deployment to modern hosting platforms.

## 🔒 Security Features

- Role-based access control (RBAC)
- Protected routes for authenticated users
- Input validation and sanitization
- Secure authentication flow
- File upload restrictions

## 📈 Future Enhancements

- **Phase 2**: Payment integration (Stripe/PayPal)
- **Phase 3**: Real-time chat and notifications
- **Phase 4**: Advanced analytics and reporting
- **Phase 5**: Mobile app development
- **Phase 6**: AI-powered content recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: support@civilathand.com
- Documentation: [docs.civilathand.com](https://docs.civilathand.com)
- Issues: [GitHub Issues](https://github.com/your-repo/issues)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the fast build tool
- Civil engineering community for inspiration

---

**Built with ❤️ for the Civil Engineering Community**
