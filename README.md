# 🎓 Student Portal 

![Dashboard Screenshot](./screenshot/Dashboard(dark).png )  


A modern student dashboard built with React and Tailwind CSS, featuring authentication, data visualization, and responsive design.

## ✨ Features Implemented

###  Authentication System
- Login/Logout functionality with context API
- Protected routes for dashboard access
- Mock user validation

###  Dashboard
- Summary cards (GPA, Attendance, Subjects)
- Responsive grid layout
- Dark mode toggle
- Recent activity feed

###  Student Management
- User directory from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- Profile cards with contact information
- Loading and error states

###  UI/UX
- Sticky navbar with user avatar
- Mobile-first responsive design
- Animated transitions
- Accessible color schemes

## 📸 Screenshots

| Login Page | Dashboard (Light) | Dashboard (Dark) |
|------------|-------------------|------------------|
| ![Login](./screenshots/login.png) | ![Light Mode](./screenshots/dashboard-light.png) | ![Dark Mode](./screenshots/dashboard-dark.png) |

*(Replace with your actual screenshot files)*

## 🧠 Challenges & Learnings

### 🚧 Technical Challenges
1. **Authentication Flow**  
   Implementing protected routes with React Router required careful state management between components.

2. **Dark Mode Toggle**  
   Persisting user theme preference across page reloads using localStorage while avoiding flash-of-unstyled-content (FOUC).

3. **API Data Handling**  
   Managing loading/error states when fetching user data improved my async operations understanding.

### 💡 Key Learnings
- **Tailwind Best Practices**: Learned to organize utility classes and use `@apply` for repeated styles
- **React Performance**: Memoization techniques for preventing unnecessary re-renders
- **DevOps**: Setting up Vite with PostCSS required deeper build process understanding
- **UI Principles**: Contrast ratios for accessibility in dark/light modes

## 🛠️ Tech Stack
- React 18
- Tailwind CSS 3
- Vite
- React Router 6
- Axios
- Heroicons

## 🚀 Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/student-portal.git
