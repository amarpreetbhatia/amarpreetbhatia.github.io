# Amarpreet Bhatia - Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and shadcn/ui.

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Beautiful & consistent icon toolkit

## 🎨 Features

- **Modern Design** - Clean, professional design with smooth animations
- **Responsive** - Works perfectly on desktop, tablet, and mobile
- **TypeScript** - Full type safety throughout the application
- **Component Library** - Built with shadcn/ui for consistent, accessible components
- **Smooth Scrolling** - Interactive navigation with smooth scroll behavior
- **Performance Optimized** - Fast loading with Vite's build optimization

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amarpreetbhatia.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📈 Google Analytics

This project supports Google Analytics using a Vite environment variable so the tracking ID is not committed to the repository.

1. Copy `.env.example` to `.env.local`
2. Set your measurement ID in `.env.local`:
   ```bash
   VITE_GA_MEASUREMENT_ID=G-SNWEH0RQBD
   ```
3. Build for production with `npm run build`

The analytics script loads only in production when `VITE_GA_MEASUREMENT_ID` is defined.

## 🎯 Sections

The portfolio includes the following sections:

1. **Professional Summary** - Overview of experience and expertise
2. **Core Competencies** - Technical skills and technologies
3. **Professional Experience** - Detailed work history and achievements
4. **Education** - Academic background
5. **Certifications** - Professional certifications and courses
6. **Contact** - Professional contact information and social links

## 🎨 Styling

The application uses:
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** design system for consistent components
- **CSS Variables** for theming and customization
- **Responsive design** with mobile-first approach

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Automatic Deployment
The site automatically deploys when you push to the `main` branch via GitHub Actions.

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://amarpreetbhatia.github.io`

#### GitHub Pages Setup
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Ensure the repository is public

### Live Demo
Visit: [https://amarpreetbhatia.github.io](https://amarpreetbhatia.github.io)

## 🔧 Configuration

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with:
- Custom color palette
- Responsive breakpoints
- Component-specific utilities

### TypeScript

TypeScript configuration in `tsconfig.json` includes:
- Strict type checking
- Path aliases for clean imports
- React JSX support

### Vite

Vite configuration in `vite.config.ts` includes:
- React plugin
- Path aliases
- Build optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **LinkedIn**: [Amarpreet Bhatia](https://www.linkedin.com/in/amarpreetbhatia/)
- **Email**: contact@amarpreetbhatia.com
- **GitHub**: [@amarpreetbhatia](https://github.com/amarpreetbhatia)

---

Built with ❤️ using React, TypeScript, and shadcn/ui