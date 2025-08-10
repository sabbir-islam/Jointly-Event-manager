# 🎯 Jointly - Event Management Platform

A modern, responsive event management platform built with React that allows users to create, manage, and join community events. The platform features user authentication, event filtering, and a beautiful UI with animations.

## 🌟 Features

### 🔐 User Authentication

- **Firebase Authentication** with email/password and Google login
- Protected routes for authenticated users
- User profile management
- Secure logout functionality

### 📅 Event Management

- **Create Events**: Authenticated users can create new events
- **Event Details**: Comprehensive event information including title, description, location, date, and type
- **Edit Events**: Modify existing events you've created
- **Delete Events**: Remove events you've created
- **Event Categories**: Filter events by type (Workshop, Conference, Meetup, etc.)

### 🔍 Event Discovery

- **Browse Upcoming Events**: View all upcoming community events
- **Search Functionality**: Find events by title or description
- **Filter by Type**: Filter events by category
- **Event Details Page**: View complete event information
- **Join Events**: Register for events you're interested in

### 👤 User Dashboard

- **My Events**: View events you've created
- **Joined Events**: See events you've registered for
- **Manage Events**: Edit or delete your events

### 🎨 User Experience

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Clean design with Tailwind CSS and DaisyUI components
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Lottie Animations**: Engaging animated graphics
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Beautiful loading animations

## 🛠️ Technologies Used

### Frontend

- **React 19.1.0** - Modern JavaScript library for building user interfaces
- **Vite 6.3.5** - Fast build tool and development server
- **React Router 7.6.2** - Client-side routing
- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Component library for Tailwind CSS

### Authentication & Backend

- **Firebase 11.9.0** - Authentication and backend services
- **Axios 1.9.0** - HTTP client for API requests

### UI/UX Libraries

- **Framer Motion 12.16.0** - Animation library
- **Lottie React 2.4.1** - Render After Effects animations
- **React Icons 5.5.0** - Popular icon library
- **React Toastify 11.0.5** - Notification system
- **React DatePicker 8.4.0** - Date selection component
- **React Social Icons 6.24.0** - Social media icons

### Development Tools

- **ESLint 9.25.0** - Code linting
- **Date-fns 4.1.0** - Date utility library

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase project for authentication

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-sabbir-islam.git
   cd assignment-11-client-side
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add your Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to see the application.

## 📱 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── assets/          # Static assets (images, animations, data)
├── Component/       # Reusable components
│   ├── Footer.jsx
│   └── Navbar.jsx
├── Firebase/        # Firebase configuration
│   └── firebase.config.js
├── Pages/           # Page components
│   ├── CreateEvent.jsx
│   ├── EditEvent.jsx
│   ├── Event.jsx
│   ├── EventDetail.jsx
│   ├── Features.jsx
│   ├── Gallery.jsx
│   ├── Home.jsx
│   ├── JoinedEvents.jsx
│   ├── Login.jsx
│   ├── ManageEvent.jsx
│   ├── MyEvents.jsx
│   ├── SignUp.jsx
│   ├── UpcomingEvents.jsx
│   └── ...
├── Provider/        # Context providers
│   ├── AuthProvider.jsx
│   └── PrivateRoute.jsx
├── Routes/          # Route configuration
│   └── route.jsx
├── App.jsx
└── main.jsx
```

## 🔗 API Integration

This application integrates with a backend API for event management:

- **Base URL**: `https://jointly-event-management.vercel.app`
- **Authentication**: JWT tokens for protected routes
- **Endpoints**:
  - `GET /events` - Fetch events with optional search and filter
  - `POST /events` - Create new event (authenticated)
  - `PUT /events/:id` - Update event (authenticated)
  - `DELETE /events/:id` - Delete event (authenticated)

## 🌐 Deployment

The project is configured for deployment on Vercel with the included `vercel.json` configuration file.

### Deploy to Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Set environment variables** in your Vercel dashboard

## 🔒 Authentication Flow

1. **User Registration**: New users can sign up with email/password
2. **Login Options**: Email/password or Google authentication
3. **Protected Routes**: Certain pages require authentication
4. **Session Management**: Firebase handles session persistence
5. **Logout**: Secure logout with session cleanup

## 📋 Event Management Workflow

1. **Create Event**: Authenticated users can create events with all necessary details
2. **Browse Events**: All users can view upcoming events
3. **Search & Filter**: Find specific events by keywords or category
4. **Join Events**: Registered users can join events
5. **Manage Events**: Users can edit or delete their own events

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **DaisyUI**: Pre-built components for consistent design
- **Custom Classes**: Additional styling for unique components
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## 🔄 State Management

- **React Context**: Used for global authentication state
- **Local State**: Component-level state management with useState
- **Form Handling**: Controlled components for form inputs

## 🚦 Route Protection

- **PrivateRoute Component**: Protects authenticated routes
- **Conditional Rendering**: UI elements based on authentication status
- **Redirect Logic**: Automatic redirection after login

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Sabbir Islam**

- GitHub: [@Programming-Hero-Web-Course4](https://github.com/Programming-Hero-Web-Course4)

## 🙏 Acknowledgments

- Firebase for authentication services
- Tailwind CSS for the styling framework
- React community for the amazing ecosystem
- Lottie for beautiful animations

---

Built with ❤️ using React and modern web technologies.
