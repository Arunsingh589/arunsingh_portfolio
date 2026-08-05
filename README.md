# Arun Singh Portfolio

Welcome to the central repository for Arun Singh's personal portfolio website. This platform serves to showcase my software development skills, professional experience, latest projects, and easily accessible contact information.

## Introduction
Designed from the ground up to present a highly interactive, responsive, and performance-optimized experience, this portfolio utilizes a modern tech stack to deliver fast rendering and a smooth user flow across all devices.

## Features
- **Interactive UI:** Smooth transitions and beautifully designed UI components using Framer Motion.
- **Performance Optimized:** Clean 2D standard elements alongside specifically optimized lightweight 3D graphics built to prevent lag.
- **Responsive Layout:** Complete support for both desktop and mobile platforms natively via Tailwind CSS utility classes.
- **Functional Contact Form:** Ready-to-use email forwarding built cleanly into the contact module.
- **Robust Component Architecture:** Strictly typed functional React components for massive modular scaling.

## Tech Stack
This project is built directly using the latest technologies in the web ecosystem:
- [TypeScript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)

## Folder Structure
```bash
arunsingh_portfolio/
├── src/
│   ├── assets/        # Global static graphic assets and logos
│   ├── components/    # Reusable React components (Sections, Canvas, UI)
│   ├── constants/     # Website data, configs, and text entries
│   ├── utils/         # Helper functions (framer motion variants)
│   ├── App.tsx        # Base Application Container
│   └── main.tsx       # Vite DOM Mount Point
├── public/            # Publicly distributed static logic and fallback assets
├── .env               # Environment bindings
├── package.json       # App constraints and running scripts
├── tailwind.config.cjs# Design system specifications
└── README.md          # Project Documentation
```

## Installation
To clone and install this project in your own environment:
1. Clone the repository: `git clone <YOUR_REPOSITORY_LINK>`
2. Navigate to the root directory.
3. Install the node modules:
```bash
npm install
```

## Environment Variables
Because the contact form depends on EmailJS to forward messages securely without a dedicated backend server, please create a `.env` file at the root level formatted exactly like this:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_ACCESS_TOKEN=your_emailjs_public_key
```

## Run Locally
Boot the Vite development server using the following command inside your terminal:
```bash
npm run dev
```
Navigate to `http://localhost:5173/` in your configured browser.

## Build for Production
Create an optimized, minified production build with:
```bash
npm run build
```
This script will produce a `dist` footprint ready for public hosting.

## Deployment
For seamless hosting, platforms like **Vercel** or **Netlify** are highly recommended. Simply link your GitHub fork or repository to either service to rapidly deploy directly from your deployment branch.

## Contact
Arun Singh  
Please navigate to the `Contact` module directly inside the hosted website to shoot over a message, or explore the platform's embedded social tags to stay in touch!
