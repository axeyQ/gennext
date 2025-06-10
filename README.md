# AutoGen Labs

A cutting-edge infrastructure automation platform built with Next.js, featuring an immersive railway-themed UI with advanced glassmorphism effects and 3D visualizations.

![AutoGen Labs](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)


## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Architecture](#-architecture)
- [Component Library](#-component-library)
- [Design System](#-design-system)
- [Performance](#-performance)
- [Features](#-features)
- [Development](#-development)
- [Component Usage Guide](#-component-usage-guide)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🛠 Tech Stack

### Core Dependencies
```json
{
  "next": "15.3.3",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "tailwindcss": "^4",
  "framer-motion": "^12.16.0"
}
```

### Additional Libraries
- **@lottiefiles/dotlottie-react**: For Lottie animations
- **lucide-react**: Modern icon library
- **swiper**: Touch slider for carousels
- **clsx** & **tailwind-merge**: Utility functions for className management

### Development Tools
- **Turbopack**: Fast bundler for development
- **ESLint**: Code linting
- **PostCSS**: CSS processing

## 📁 Project Structure

```
src/
├── app/                      # Next.js app directory
│   ├── layout.jsx           # Root layout with navbar/footer
│   ├── page.jsx             # Home page with lazy-loaded sections
│   ├── globals.css          # Global styles and Tailwind directives
│   └── templates/           # Templates route
│       └── page.jsx         # Template gallery page
│
├── components/
│   ├── dynamic/             # Dynamically imported components
│   │   └── DynamicComponents.jsx  # Lazy-loaded component exports
│   │
│   ├── pages/               # Page-specific components
│   │   └── templates/       # Template page components
│   │       ├── TemplateLibraryHero.jsx
│   │       ├── PremiumTemplateShowcase.jsx
│   │       └── HeroSectionGallery.jsx
│   │
│   ├── sections/            # Main section components
│   │   ├── Hero.jsx         # Hero with typewriter effect
│   │   ├── TipOne-Five.jsx  # Railway-themed tip sections
│   │   ├── TrainSectionTwo.jsx  # Masonry grid section
│   │   ├── FeatureSection.jsx   # Network diagram
│   │   ├── PricingSection.jsx   # Glassmorphic pricing cards
│   │   ├── TestimonialSection.jsx  # Stacked card testimonials
│   │   ├── ContactSection.jsx     # Contact form
│   │   ├── AboutUsSection.jsx     # About section
│   │   └── FAQSection.jsx         # Expandable FAQ
│   │
│   ├── shared/              # Shared components
│   │   ├── Navbar.jsx       # Navigation with dropdowns
│   │   └── Footer.jsx       # Footer with 3D globe
│   │
│   └── ui/                  # Reusable UI components
│       ├── AutoGenChatBot.jsx    # 3D chatbot component
│       ├── VideoSection.jsx      # Lazy-loaded video player
│       ├── LazyLoader.jsx        # Lazy loading utilities
│       ├── LazySpline.jsx        # 3D Spline scene loader
│       └── OptimizedImage.jsx    # Image optimization wrapper
│
├── lib/
│   └── utils.js             # Utility functions
│
└── public/                  # Static assets
    ├── logoAuto.webp       # Company logo
    ├── train1.svg        # Train SVG animations
    ├── track1.svg          # Railway track graphics
    └── ai.lottie           # Lottie animation files
    ├── train2.svg.webp       # Train SVG animations
    ├── train3.svg        # Train SVG animations
    └── train4.svg          # Train SVG animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/axeyQ/gennext
cd autogen-labs
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server** (No environment variables needed)
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm run start
```

## 🏗 Architecture

### Component Architecture

The project follows a modular component architecture with clear separation of concerns:

#### 1. **Dynamic Loading Strategy**
```javascript
// Components are loaded based on priority
const loadingPriorities = {
  critical: ['Hero', 'Navbar'],           // Load immediately
  high: ['ThreeSteps', 'TipOne'],        // Load after critical
  medium: ['FeatureSection', 'Pricing'],  // Load when in viewport
  low: ['Testimonials', 'FAQ'],          // Load with delay
  lowest: ['Chatbot', 'Footer3DGlobe']   // Load last
}
```

#### 2. **Section Flow**
The main page follows a railway journey metaphor:
- **Hero**: Starting station with VS Code-style UI
- **Tips 1-5**: Railway track sections with alternating left/right trains
- **Feature Section**: Central hub network diagram
- **Supporting Sections**: Additional infrastructure components

### State Management
- Local component state with React hooks
- No global state management needed due to component isolation
- Form states managed individually within components

### Routing
- Next.js App Router for file-based routing
- Two main routes: `/` (home) and `/templates`
- Hash-based navigation for sections (e.g., `/#pricing`)

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-purple: #8b5cf6;  /* Purple 600 */
--primary-cyan: #06b6d4;    /* Cyan 600 */
--primary-pink: #ec4899;    /* Pink 600 */

/* Background Colors */
--bg-primary: #040406;      /* Near black */
--bg-secondary: #09080D;    /* Dark purple-black */
--bg-tertiary: #07060B;     /* Darker variant */

/* Railway Theme Colors */
--railway-track: #C2298A;   /* Pink track color */
--railway-glow: rgba(202, 36, 77, 0.8);
```

### Typography
- **Font**: Geist Sans (primary), Geist Mono (code)
- **Headings**: Bold, responsive sizing with `text-4xl` to `text-6xl`
- **Body**: Regular weight, `text-gray-300` for primary text

### Glassmorphism Effects
```css
/* Standard glass effect */
backdrop-filter: blur(20px);
background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
border: 1px solid rgba(255,255,255,0.2);
```

### Animation Patterns
1. **Scroll-triggered animations**: Using Framer Motion's `whileInView`
2. **Railway trains**: Transform based on scroll progress
3. **Hover effects**: Scale, glow, and border transitions
4. **Loading animations**: Shimmer effects and progress indicators

## ⚡ Performance

### Optimization Strategies

#### 1. **Code Splitting**
- Dynamic imports for all heavy components
- Route-based splitting with Next.js
- Component-level splitting with loading priorities

#### 2. **Image Optimization**
```javascript
// Custom image component with lazy loading
<OptimizedImage
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false}  // Only true for above-fold images
  quality={80}      // Balanced quality/size
/>
```

#### 3. **Lazy Loading Implementation**
- Intersection Observer for viewport detection
- Staged loading with delays
- Fallback components during load

#### 4. **3D Content Strategy**
- Spline scenes load after 5-10 seconds
- Fallback graphics for immediate display
- Only load when in viewport + delay

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized with tree shaking

## 🌟 Features

### Core Features

#### 1. **Hero Section**
- Typewriter effect showcasing different prompts
- VS Code-style copilot UI mockup
- Animated circuit board background
- Lazy-loaded video demonstration

#### 2. **Railway Journey Sections**
- 5 tip sections with animated trains
- Scroll-based train movement
- Alternating left/right track layouts
- Video previews for each tip

#### 3. **Interactive Components**
- **Network Diagram**: Real-time service visualization
- **Pricing Cards**: Glassmorphic design with hover effects
- **Testimonials**: Stacked card carousel
- **FAQ**: Expandable accordion with search

#### 4. **Templates Page**
- Filter system for template categories
- Masonry grid layout
- Image carousel on hover
- Premium template showcase

#### 5. **AI Chatbot**
- 3D robot avatar (Spline)
- Glassmorphic chat interface
- Auto-response system
- Minimizable design

### Unique Interactions
- Scroll-triggered train animations
- Hover-based image carousels
- Glassmorphism shine effects
- Progressive content reveal

## 💻 Development

### Local Development Tips

1. **Component Development**
```bash
# Create new component
touch src/components/sections/NewSection.jsx

# Add to dynamic imports if needed
# Edit: src/components/dynamic/DynamicComponents.jsx
```

2. **Adding New Sections**
- Create component in `/sections`
- Add to dynamic imports if lazy loading needed
- Import and place in `page.jsx` with appropriate priority

3. **Styling Guidelines**
- Use Tailwind utility classes
- Create glass effects with backdrop-filter
- Maintain consistent spacing with Tailwind's spacing scale
- Follow mobile-first responsive design

### Code Style
- Use functional components with hooks
- Implement proper loading states
- Add prop validation where necessary
- Comment complex animations or calculations

### Testing
```bash
# Run linting
npm run lint

# Type checking (if TypeScript is added)
npm run type-check
```

## 📚 Component Usage Guide

### LazyLoader.jsx

The LazyLoader provides utilities for lazy loading components with viewport detection and staged loading.

#### Basic Usage
```jsx
import { LazyComponent, LazyVideo, LazyChatbot } from '@/components/ui/LazyLoader';

// Basic lazy loading with skeleton
<LazyComponent delay={1000} fallback={<SkeletonLoader />}>
  <YourComponent />
</LazyComponent>

// Video with specific skeleton
<LazyVideo delay={2000}>
  <VideoSection />
</LazyVideo>

// Chatbot with long delay (non-critical)
<LazyChatbot delay={5000} viewport={false}>
  <AutoGenChatbot />
</LazyChatbot>
```

#### Available Components
- `LazyComponent` - Generic wrapper
- `LazyVideo` - Video components (2s delay)
- `LazyChatbot` - Chatbot (5s delay, no viewport detection)
- `LazyGrid` - Grid layouts (1s delay)
- `LazyNetworkDiagram` - Network visualizations (1.5s delay)

#### Props
```jsx
<LazyComponent
  delay={1000}              // Delay in ms before loading
  viewport={true}           // Use viewport detection (default: true)
  fallback={<Skeleton />}   // Component to show while loading
  className="custom-class"  // Additional classes
>
```

#### Skeleton Components
```jsx
import { 
  SkeletonLoader,
  VideoSkeleton,
  ChatbotSkeleton,
  GridSkeleton,
  NetworkDiagramSkeleton 
} from '@/components/ui/LazyLoader';

// Custom skeleton with height
<SkeletonLoader height="h-64" className="rounded-xl" />
```

### LazySpline.jsx

Handles loading of 3D Spline scenes with fallback support.

#### Usage
```jsx
import LazySpline from '@/components/ui/LazySpline';

<LazySpline
  src="https://my.spline.design/scene-url/"
  fallback={<FallbackComponent />}  // Component shown while loading
  delay={5000}                       // Global delay in ms
  intersectionDelay={1000}           // Delay after entering viewport
  className="w-full h-full"
  title="3D Robot"
/>
```

#### Best Practices
- Use high delays (5000ms+) for non-critical 3D content
- Always provide a fallback component
- 3D scenes are resource-intensive, limit per page

### OptimizedImage.jsx

Next.js Image component wrapper with built-in optimization and lazy loading.

#### Basic Usage
```jsx
import OptimizedImage from '@/components/ui/OptimizedImage';

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false}  // true only for above-fold images
/>
```

#### Specialized Components
```jsx
import { 
  HeroImage,       // priority=true, quality=90
  GalleryImage,    // lazy loaded, quality=80
  ThumbnailImage,  // small size optimization
  LogoImage        // logo-specific settings
} from '@/components/ui/OptimizedImage';

// Hero section image (loads immediately)
<HeroImage
  src="/hero-bg.jpg"
  alt="Hero background"
  width={1920}
  height={1080}
/>

// Gallery grid
<GalleryImage
  src="/gallery-1.jpg"
  alt="Gallery item"
  width={400}
  height={300}
/>
```

#### Props
```jsx
<OptimizedImage
  src="/image.jpg"
  alt="Required alt text"
  width={800}
  height={600}
  priority={false}      // Load priority
  lazy={true}          // Lazy load (default: true)
  quality={80}         // Image quality (default: 80)
  fill={false}         // Fill container
  sizes="(max-width: 768px) 100vw, 50vw"  // Responsive sizes
  fallback={<Custom />}  // Custom fallback component
  onLoad={handleLoad}    // Load callback
  onError={handleError}  // Error callback
/>
```

### DynamicComponents.jsx

Centralized dynamic imports for code splitting and performance.

#### Usage in Pages
```jsx
import {
  DynamicVideoSection,
  DynamicFeatureSection,
  DynamicChatbot,
  DynamicPricingSection
} from '@/components/dynamic/DynamicComponents';

// In your page component
export default function Home() {
  return (
    <>
      {/* Critical content loads immediately */}
      <Hero />
      
      {/* Lazy loaded with appropriate delays */}
      <LazyComponent delay={500}>
        <DynamicThreeSteps />
      </LazyComponent>
      
      <LazyComponent delay={2000}>
        <DynamicFeatureSection />
      </LazyComponent>
      
      {/* Lowest priority */}
      <LazyComponent delay={5000} viewport={false}>
        <DynamicChatbot />
      </LazyComponent>
    </>
  );
}
```

#### Loading Priority Guide
```javascript
// Follow this priority structure:
const loadingPriorities = {
  // Never dynamically import these
  critical: ['Hero', 'Navbar', 'Footer'],
  
  // Load quickly after page load
  high: {
    components: ['ThreeSteps', 'TipOne', 'TipTwo'],
    delay: '500-1000ms'
  },
  
  // Load when approaching viewport
  medium: {
    components: ['TipThree-Five', 'FeatureSection'],
    delay: '1000-2000ms'
  },
  
  // Load when in viewport
  low: {
    components: ['Pricing', 'Testimonials', 'Contact'],
    delay: '2000-3000ms'
  },
  
  // Load last or on interaction
  lowest: {
    components: ['Chatbot', 'VideoSection'],
    delay: '5000ms+',
    viewport: false
  }
};
```

#### Adding New Dynamic Components
```jsx
// 1. In DynamicComponents.jsx, add:
export const DynamicNewSection = dynamic(
  () => import('../sections/NewSection'),
  {
    ssr: false,
    loading: () => <SkeletonLoader height="h-96" />
  }
);

// 2. Use in your page:
<LazyComponent delay={1500}>
  <DynamicNewSection />
</LazyComponent>
```

#### Performance Tips
1. **SSR Consideration**: Set `ssr: false` for client-only components
2. **Loading States**: Always provide meaningful loading components
3. **Delay Strategy**: Higher delays for less critical content
4. **Bundle Size**: Monitor bundle size when adding new dynamic imports
5. **Testing**: Test on slower connections to ensure good UX

### Complete Example
```jsx
// Page with optimized loading
import { LazyComponent } from '@/components/ui/LazyLoader';
import { HeroImage } from '@/components/ui/OptimizedImage';
import { DynamicVideoSection, DynamicChatbot } from '@/components/dynamic/DynamicComponents';
import LazySpline from '@/components/ui/LazySpline';

export default function OptimizedPage() {
  return (
    <>
      {/* Critical: Hero with priority image */}
      <section className="hero">
        <HeroImage
          src="/hero-bg.jpg"
          alt="Hero"
          width={1920}
          height={1080}
        />
        <h1>Welcome to AutoGen Labs</h1>
      </section>

      {/* High Priority: Video section */}
      <LazyComponent delay={1000}>
        <DynamicVideoSection />
      </LazyComponent>

      {/* Low Priority: 3D Scene */}
      <section className="my-8">
        <LazySpline
          src="https://my.spline.design/scene/"
          fallback={<div className="h-96 bg-gray-900 rounded-xl" />}
          delay={5000}
          className="h-96"
        />
      </section>

      {/* Lowest Priority: Chatbot */}
      <LazyComponent delay={8000} viewport={false}>
        <DynamicChatbot />
      </LazyComponent>
    </>
  );
}
```

## 🚀 Deployment

The project is deployed on Vercel for optimal performance with Next.js.

### Vercel Deployment

1. **Connect Repository**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

2. **Automatic Deployment**
- Connect your GitHub repository to Vercel
- Every push to main branch triggers automatic deployment
- Preview deployments for pull requests

3. **No Environment Variables Required**
This project runs without any environment variables or API keys.

### Production Build
```bash
# Build locally
npm run build

# Test production build
npm run start
```

## 🤝 Contributing

Contributions are welcome! Simply:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure your code follows the existing style and patterns in the project.

## 📝 License

This project is proprietary software. All rights reserved.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Spline for 3D design tools
- All contributors and testers

---

Built with ❤️ by the AutoGen Labs team