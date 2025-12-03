# Campus Disha - Online Degree Admissions Platform

A modern, production-ready Next.js website for Campus Disha, showcasing online degree programs from 21+ accredited Indian universities.

## 🚀 Features

- **Modern Design**: Built with Next.js 14 and Bootstrap 5
- **Responsive**: Mobile-first design that works on all devices
- **University Listings**: Search and filter through 21+ partner universities
- **Dynamic Pages**: Individual university detail pages with program information
- **Contact Forms**: Working contact form with form validation
- **Apply Tracking**: Click tracking for university applications
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Analytics Ready**: Google Analytics integration ready

## 📋 Pages & Features

### Core Pages
- **Home** (`/`): Hero section, stats, featured universities, testimonials
- **Universities** (`/universities`): Searchable university listing with filters
- **University Details** (`/universities/[slug]`): Dynamic university pages
- **About** (`/about`): Company information and team
- **Contact** (`/contact`): Contact form and counseling request

### Content Pages
- **Trends** (`/trends`): Online education trends and statistics
- **Comparison** (`/online-vs-traditional`): Online vs traditional education
- **UGC Regulation** (`/ugc-regulation`): Accreditation and compliance information
- **FAQ** (`/faq`): Frequently asked questions
- **Terms** (`/terms`): Terms of service
- **Privacy** (`/privacy`): Privacy policy

### API Endpoints
- **POST** `/api/contact`: Contact form submissions
- **GET/POST** `/api/apply-redirect`: Application click tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: Bootstrap Icons
- **Language**: JavaScript
- **Data**: JSON files for university data
- **Deployment**: Optimized for Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onlinecampusdisha
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Environment Variables** (Optional)
   - Set up in Vercel dashboard or `.env.local`
   - `NEXT_PUBLIC_GA_ID`: Google Analytics ID
   - `CONTACT_EMAIL`: Contact form recipient

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the `out` folder to Netlify
```

**Docker:**
```bash
# Build image
docker build -t campusdisha .
# Run container
docker run -p 3000:3000 campusdisha
```

## 📊 University Data

University information is stored in `data/universities.json`:

```json
[
  {
    "id": 1,
    "name": "University Name",
    "slug": "university-slug",
    "location": "City, State",
    "landing": "https://university-landing-url.com",
    "programs": ["MBA", "BBA", "MCA"],
    "description": "University description",
    "accredited": true,
    "established": "1980"
  }
]
```

### Adding/Updating Universities

1. Open `data/universities.json`
2. Add/modify entries following the structure above
3. Ensure unique `id` and `slug` values
4. Rebuild the site to see changes

## 🧪 Testing

### Manual Testing Checklist

#### **Navigation & Links**
- [ ] All navigation links work correctly
- [ ] University cards link to correct detail pages
- [ ] Apply Now buttons open correct landing URLs
- [ ] Mobile menu functions properly
- [ ] Footer links work correctly

#### **Universities Page**
- [ ] Search functionality works
- [ ] State filter functions correctly
- [ ] Program filter functions correctly
- [ ] Sort functionality works
- [ ] Clear filters button resets all filters
- [ ] No results state displays properly

#### **University Detail Pages**
- [ ] Dynamic routes work for all slugs
- [ ] 404 page works for invalid slugs
- [ ] Program information displays correctly
- [ ] Apply buttons link to correct URLs

#### **Contact Form**
- [ ] Form validation works (required fields)
- [ ] Email validation works
- [ ] Phone number validation works
- [ ] Form submission succeeds
- [ ] Success/error messages display correctly

#### **Responsive Design**
- [ ] Desktop layout looks correct
- [ ] Tablet layout functions properly
- [ ] Mobile layout is usable
- [ ] Images scale correctly
- [ ] Text remains readable

#### **Accessibility**
- [ ] All images have alt text
- [ ] Forms have proper labels
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] ARIA labels are appropriate

#### **Performance**
- [ ] Page load time < 3 seconds
- [ ] Images are optimized
- [ ] CSS and JS are minified in production
- [ ] Google PageSpeed score > 80

### Automated Testing (Optional)

Add testing framework:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (Optional)
CONTACT_EMAIL=info@campusdisha.com

# Site Configuration
SITE_URL=https://campusdisha.com
```

### Customization

#### **Branding**
- Update logo in `public/` folder
- Modify colors in `app/globals.css`
- Update site metadata in `utils/metadata.js`

#### **Styling**
- Custom CSS variables in `app/globals.css`
- Bootstrap theme customization
- Component-specific styles

#### **Content**
- Update hero text in `components/shared/Hero.js`
- Modify university data in `data/universities.json`
- Update contact information in pages

## 📈 Analytics & Monitoring

### Google Analytics

1. Set up Google Analytics 4 property
2. Add measurement ID to environment variables
3. Add GA script to `app/layout.js`

### Contact Form Monitoring

- Form submissions are logged to console
- Implement email notifications in production
- Add database storage for form data

### Apply Click Tracking

- Clicks are logged to console
- Implement analytics integration
- Add conversion tracking

## 🛡️ Security Considerations

- Form validation on both client and server
- Input sanitization for form submissions
- HTTPS enforcement in production
- Content Security Policy headers
- Regular dependency updates

## 📝 API Documentation

### POST /api/contact

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "program": "MBA",
  "university": "NMIMS",
  "message": "I need help with admission"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

### GET /api/apply-redirect

**Query Parameters:**
- `uni`: University slug (required)
- `program`: Program name (optional)

**Response:** Redirects to university landing page

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@campusdisha.com
- Phone: +91 8XXXXXXXXX
- Website: https://campusdisha.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Production Checklist

Before deploying to production:

- [ ] Update environment variables
- [ ] Test all forms and API endpoints
- [ ] Verify university landing URLs
- [ ] Set up Google Analytics
- [ ] Configure domain and SSL
- [ ] Test mobile responsiveness
- [ ] Check accessibility compliance
- [ ] Verify SEO meta tags
- [ ] Test sitemap and robots.txt
- [ ] Monitor performance metrics
- [ ] Set up error tracking
- [ ] Configure backup strategy

---

**Built with ❤️ by Campus Disha Team**