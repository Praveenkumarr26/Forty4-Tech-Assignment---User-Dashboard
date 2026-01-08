User Dashboard — React Frontend Intern Assignment

A responsive User Dashboard built with React.js for the React Frontend Intern assignment. The application fetches user data from an external API, displays users in card layouts, supports searching, and provides a user details view. The project includes both light and dark theme variants.

🌟 Features
Dashboard

✔ Fetch users from API
✔ Display user information in cards:

Name

Email

Phone

Company Name

✔ Search/filter users by name

Create User

✔ Client-side only
✔ Modal-based form
✔ Adds user to global state

User Details Page

✔ Click user → open details
✔ Displays:

Contact Information

Company Information

Address

Geo-coordinates (lat/lng)

Global State Management

✔ React Context API for:

User list

User addition

Routing

✔ React Router DOM for:

/ — Dashboard

/user/:id — Details

Responsive Design

✔ Optimized for PC/Desktop usage as required for the assignment

🧰 Tech Stack

React 18

React Router DOM 6

React Context API

Fetch API

Vite

CSS3 (Flexbox + Grid)

🌐 API Integration

Data source:

https://jsonplaceholder.typicode.com/users

Provides:

Basic user info

Company

Address w/ geolocation

src/
├── assets/
├── components/
│   ├── CreateUserModal.jsx      # Modal form for new user creation
│   ├── Navbar.jsx               # Top navigation bar
│   ├── SearchBar.jsx            # Search input
│   └── UserCard.jsx             # Individual user card
├── context/
│   ├── ThemeContext.jsx         # Light/Dark theme state
│   └── UserContext.jsx          # Global user state
├── pages/
│   ├── Dashboard.jsx            # Main dashboard page
│   └── UserDetails.jsx          # Detailed view of a single user
├── App.css
├── App.jsx
├── index.css
└── main.jsx
                  
public/
vite.config.js
index.html
package.json
README.md

🚀 Installation & Setup
Prerequisites

Node.js (v14+)

npm or yarn

Install
git clone https://github.com/yourusername/user-dashboard.git
cd user-dashboard
npm install

Run Development
npm run dev


Application runs at:

http://localhost:5173/

Build for Production
npm run build

🖥 Output Screenshots (PC View Only)

The application supports Light and Dark themes.
Below are the final desktop output screenshots:

🌞 Dashboard — Light Theme

🌙 Dashboard — Dark Theme

