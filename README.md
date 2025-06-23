# Creative Designer Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for freelance UI/UX designers, Notion template creators, and Canva designers.

## 🌟 Features

### Design & User Experience

- **Modern, Clean Design** - Professional layout with smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Custom Color Scheme** - Soft, professional color palette with accent highlights
- **Glass Morphism Effects** - Modern UI elements with backdrop blur effects

### Pages & Sections

- **Hero Section** - Eye-catching landing area with animated background
- **Portfolio Gallery** - Filterable project showcase with categories
- **About Page** - Personal story, skills, and achievements
- **Services Page** - Detailed service offerings with pricing
- **Blog Section** - Content marketing with featured articles
- **Contact Form** - Professional contact form with validation
- **Responsive Navigation** - Mobile-friendly header with smooth transitions

### Technical Features

- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Heroicons** - Beautiful SVG icons
- **SEO Optimized** - Meta tags and structured data
- **Performance Optimized** - Fast loading and smooth interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Groksite/Website.git
   cd Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio gallery
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── icons/             # Custom icon components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── FeaturedPortfolio.tsx # Portfolio preview
│   └── Footer.tsx         # Site footer
└── ...
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

- **Primary**: Soft indigo (#5A67D8)
- **Secondary**: Soft purple (#B794F4)
- **Accent**: Soft yellow (#F6E05E)
- **Gray**: Professional gray scale

### Content

Update the following files to customize content:

- `src/app/page.tsx` - Home page content
- `src/components/Hero.tsx` - Hero section text and links
- `src/app/about/page.tsx` - About page information
- `src/app/services/page.tsx` - Service offerings and pricing
- `src/app/portfolio/page.tsx` - Portfolio projects

### Images

Replace placeholder images with your own:

- Update Unsplash URLs in components
- Add your own images to `public/` folder
- Update `next.config.js` domains if using external images

## 🛠️ Technologies Used

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 11.11.17
- **Icons**: Heroicons 2.2.0
- **Fonts**: Inter (Google Fonts)

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Performance Features

- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic code splitting for faster loads
- **SEO Optimization** - Meta tags, Open Graph, and Twitter Cards
- **Smooth Scrolling** - CSS scroll-behavior for better UX
- **Optimized Animations** - Hardware-accelerated CSS transforms

## 🎯 Use Cases

Perfect for:

- **Freelance Designers** - Showcase your design portfolio
- **Notion Template Creators** - Display your template collection
- **Canva Designers** - Show off your graphic design work
- **UI/UX Designers** - Professional portfolio presentation
- **Creative Agencies** - Team portfolio websites

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the website, please open an issue or contact the developer.

---

**Built with ❤️ for the creative community**
