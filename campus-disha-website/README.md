# Campus Disha - Online Education Consultancy Website

A comprehensive website for Campus Disha, an education consultancy providing guidance for online degrees from India's top universities.

## 🎯 Project Overview

Campus Disha connects students with 20+ top Indian universities offering UGC-entitled online programs. The website provides:

- Information about online vs traditional education
- UGC guidelines and degree validity
- Detailed partner university information
- Free counseling and contact forms
- Mobile-responsive design
- SEO-optimized content

## 🏛️ Partner Universities

The website features 20 prestigious universities including:
- NMIMS Online
- SRM Online
- Parul Online
- DPU Mumbai
- Galgotias Online
- UPES Online
- And 15 more top-tier institutions

## 🚀 Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Modern component library
- **SEO Optimization** - Meta tags, sitemap, robots.txt

## 📱 Features

### 🏠 Homepage
- Hero section with compelling messaging
- Lead generation form
- Key statistics display
- Call-to-action buttons

### 📚 About Online Education
- Benefits of online learning
- Comparison table (Online vs Traditional)
- Flexibility, cost-effectiveness, and recognition

### 🎓 Universities Section
- All 20 partner universities
- Accreditation details
- Direct university links
- Individual university cards

### 📋 UGC Guidelines
- UGC entitlement information
- Validity across India
- Key guidelines for 2024-25
- Quality assurance information

### 📞 Contact Section
- Office address: Residency Road, Lal Chowk, Srinagar, J&K 190001
- Phone: +91 9469328661
- Email: contact@campusdisha.in
- Contact form integration

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd campus-disha-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding University Logos
1. Place logo images in `public/universities/` folder
2. Ensure logos are named according to university (e.g., `nmims.png`)
3. Update logo paths in universities array if needed

### Updating Content
- Edit university information in `src/app/page.tsx`
- Modify contact details in contact section
- Update SEO metadata in `src/app/layout.tsx`

### Color Scheme
- Primary Blue: `bg-blue-600`
- Secondary Colors: Tailwind default palette
- Can be customized via Tailwind configuration

## 🔧 SEO Features

- **Meta Tags**: Comprehensive metadata for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Rich snippets support

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Hosting Options
1. **Build application**
   ```bash
   npm run build
   ```

2. **Deploy static files**
   - Upload `.next` folder to your hosting provider
   - Ensure Node.js environment for server-side rendering

## 📊 Environment Variables

Create `.env.local` file for sensitive data:
```
GOOGLE_VERIFICATION_CODE=your-code
YANDEX_VERIFICATION_CODE=your-code
YAHOO_VERIFICATION_CODE=your-code
```

## 🔍 Analytics Setup

1. **Google Analytics**
   - Add tracking script to `src/app/layout.tsx`
   - Update `GOOGLE_VERIFICATION_CODE` in metadata

2. **Other Analytics**
   - Follow respective platform documentation

## 🤝 Contact Information

- **Company**: Campus Disha
- **Address**: Residency Road, Lal Chowk, Srinagar, J&K 190001
- **Phone**: +91 9469328661
- **Email**: contact@campusdisha.in
- **Website**: www.online.campusdisha.in

## 📝 License

This project is proprietary to Campus Disha. All rights reserved.

## 🚀 Future Enhancements

- [ ] Student testimonials section
- [ ] Blog/resources section
- [ ] Application tracking system
- [ ] Live chat integration
- [ ] Payment gateway for application fees
- [ ] WhatsApp integration
- [ ] SMS notifications
- [ ] Student dashboard
- [ ] Document upload portal

## 📞 Support

For technical support or website updates:
- Email: contact@campusdisha.in
- Phone: +91 9469328661

---

**Campus Disha - Your Gateway to Quality Online Education**