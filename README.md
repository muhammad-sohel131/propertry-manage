# Property Management Landing Page

A modern, responsive landing page for a property management service built with Next.js and TypeScript.

## 🚀 Technologies Used

- **Framework**: Next.js 16.2.2 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.19
- **UI Components**: React 19.2.4
- **Animations**: Framer Motion 12.38.0
- **Icons**: Lucide React 1.7.0, React Icons 5.6.0
- **Fonts**: 
  - Poppins (weights: 400, 500, 600, 700)
  - Plus Jakarta Sans (weights: 400, 700)
  - Manrope (weights: 200, 300, 400, 500, 600, 700, 800)
- **Build Tools**: PostCSS, Autoprefixer
- **Linting**: ESLint 9

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page with all sections
├── components/
│   ├── home/                # Home page components
│   │   ├── ClientReview.tsx # Auto-changing review carousel
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── GettingStarted.tsx
│   │   ├── Hero.tsx         # Hero section
│   │   ├── OurServices.tsx  # Services section
│   │   ├── OutTools.tsx     # Tools section
│   │   ├── PricingSection.tsx
│   │   ├── TrustedBy.tsx    # Trusted companies
│   │   └── WhyChooseUs.tsx
│   └── layout/              # Layout components
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── shared/
│           └── PrimaryBtn.tsx
├── public/                  # Static assets
│   ├── companies/           # Company logos
│   ├── icons/               # Icon assets
│   ├── reviews/             # Review avatars
│   └── services/            # Service images
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── eslint.config.mjs        # ESLint configuration
```

## 🏗️ Implementation Details

### Architecture
- Uses Next.js App Router for file-based routing
- Component-based architecture with reusable UI elements
- Responsive design with mobile-first approach
- Client-side interactivity with 'use client' directives where needed

### Key Features
- **Responsive Design**: Mobile-first responsive layout using Tailwind CSS
- **Smooth Animations**: Framer Motion for smooth transitions and interactions
- **Modern UI**: Clean, professional design with consistent spacing and typography
- **Performance**: Optimized with Next.js Image component for images

### Component Structure
- **Layout Components**: Header and Footer for consistent navigation
- **Home Sections**: Modular sections for different parts of the landing page
- **Shared Components**: Reusable elements like buttons

### Styling Approach
- Utility-first CSS with Tailwind CSS
- Custom CSS variables for brand colors
- Consistent design system with predefined spacing, colors, and typography
- Hover effects and transitions for interactive elements

## 🚀 Getting Started
1. **Clone Repo**:
   ```bash
   git clone https://github.com/muhammad-sohel131/propertry-manage.git
   cd propertry-manage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```



## 🎨 Design System

- **Colors**: Brand color variable, black text, gray backgrounds
- **Typography**: Bold headings, medium body text
- **Spacing**: Consistent gap utilities (gap-6, gap-8, etc.)
- **Shadows**: Subtle shadows for depth and focus

This project demonstrates modern React development practices with Next.js, TypeScript, and Tailwind CSS for building performant, maintainable web applications.
