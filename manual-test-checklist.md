# Manual Testing Checklist

## Apply Now Button Testing

### Test Cases Completed ✅
1. **Data Integration**: All 21 universities have correct landing URLs in universities.json
2. **URL Verification**: 100% success rate - all URLs follow the correct format
3. **Component Update**: UniversityCard now uses direct `href={university.landing}` instead of redirect route
4. **Target Attributes**: Apply buttons have `target="_blank" rel="noopener noreferrer"`

### Expected URLs to Verify Manually:
1. **NMIMS Online**: https://nmims.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=Nimmsonline
2. **SRM Online**: https://srm.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=srmonline
3. **Parul Online**: https://parul.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=parulonline
4. **LPU Online**: https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE
5. **Amity Online**: https://amity.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=amityonline

### Manual Steps:
1. Open http://localhost:3005/universities
2. Click each "Apply — 3–5 min" button
3. Verify it opens the correct landing page in a new tab
4. Check that the URL matches exactly with the expected URL above

## Header/Menu Testing
### ✅ Features Implemented:
- **Heroic Design**: Glass-morphism effect with backdrop blur
- **Sticky Behavior**: Header shrinks and changes appearance on scroll
- **Primary CTA**: "Book Free Counseling" button with pill design
- **Secondary CTA**: "Contact" button with outlined design
- **Mobile Responsive**: Offcanvas menu with proper styling

### Manual Steps:
1. Open http://localhost:3005
2. Test header transparency effect
3. Scroll down to see sticky behavior
4. Test mobile menu on smaller screens
5. Verify CTA buttons link to /contact

## Hero Section Testing
### ✅ Features Implemented:
- **Modern Design**: Trust badges at the top
- **Clear Value Prop**: "Find Your Perfect Online Degree"
- **Benefit Icons**: Four key benefits with circular icons
- **Updated CTAs**: "Explore Programs" and "Free Counseling"

## UniversityCard Testing
### ✅ Features Implemented:
- **Direct Links**: Apply buttons link directly to university landing pages
- **Next.js Image**: Proper image optimization with fixed dimensions
- **Card Click**: Whole card is clickable to university detail page
- **Program Badges**: Rounded pill badges for programs
- **Accessibility**: Proper ARIA labels and semantic HTML

## Server Status
- ✅ Production server running on http://localhost:3005
- ✅ All 21 university detail pages generated successfully
- ✅ Build completed without errors

## Next Steps for Production
1. Run Lighthouse performance audit
2. Take screenshots of header, hero, and university cards
3. Test on mobile devices
4. Verify all external links work correctly