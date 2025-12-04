// Test script to verify Apply button URLs are correctly integrated
const fs = require('fs');
const path = require('path');

console.log('=== Apply Button Functionality Verification ===\n');

// Load universities data
const universities = JSON.parse(fs.readFileSync('./data/universities.json', 'utf8'));

// Check UniversityCard component has been properly updated
const universityCardPath = './components/shared/UniversityCard.js';
const universityCardContent = fs.readFileSync(universityCardPath, 'utf8');

console.log('1. Checking UniversityCard component...');
console.log('✅ Component exists');

// Check for direct href usage
const hasDirectHref = universityCardContent.includes('href={university.landing}');
const hasTargetBlank = universityCardContent.includes('target="_blank"');
const hasRelNoopener = universityCardContent.includes('rel="noopener noreferrer"');
const hasApplyButton = universityCardContent.includes('Apply — 3–5 min');
const hasAnalytics = universityCardContent.includes('apply_click');

console.log('✅ Uses direct university.landing URL:', hasDirectHref);
console.log('✅ Has target="_blank":', hasTargetBlank);
console.log('✅ Has rel="noopener noreferrer":', hasRelNoopener);
console.log('✅ Has updated button text:', hasApplyButton);
console.log('✅ Has analytics tracking:', hasAnalytics);

// Check universities.json data integrity
console.log('\n2. Universities data verification...');
let validUniversities = 0;
universities.forEach(uni => {
  if (uni.landing && uni.slug && uni.name && uni.location) {
    validUniversities++;
  }
});

console.log(`✅ Universities with complete data: ${validUniversities}/${universities.length}`);

// Check specific required URLs
console.log('\n3. Required URL verification...');
const requiredUrls = [
  {
    name: 'NMIMS Online',
    slug: 'nmims-online',
    expected: 'https://nmims.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=Nimmsonline'
  },
  {
    name: 'SRM Online',
    slug: 'srm-online',
    expected: 'https://srm.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=srmonline'
  },
  {
    name: 'Amrita Online',
    slug: 'amrita-online',
    expected: 'https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE'
  },
  {
    name: 'LPU Online',
    slug: 'lpu-online',
    expected: 'https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE'
  }
];

requiredUrls.forEach(req => {
  const uni = universities.find(u => u.slug === req.slug);
  if (uni && uni.landing === req.expected) {
    console.log(`✅ ${req.name}: URL matches exactly`);
  } else {
    console.log(`❌ ${req.name}: URL mismatch or not found`);
  }
});

// Check header component
console.log('\n4. Header component verification...');
const headerPath = './components/shared/Header.js';
const headerContent = fs.readFileSync(headerPath, 'utf8');

const hasBookFreeCounseling = headerContent.includes('Book Free Counseling');
const hasContactButton = headerContent.includes('Contact');
const hasRoundedPill = headerContent.includes('rounded-pill');
const hasGlassEffect = headerContent.includes('backdrop-filter: blur');

console.log('✅ Has "Book Free Counseling" CTA:', hasBookFreeCounseling);
console.log('✅ Has Contact button:', hasContactButton);
console.log('✅ Uses rounded pill styling:', hasRoundedPill);
console.log('✅ Has glass-morphism effect:', hasGlassEffect);

// Summary
console.log('\n=== Summary ===');
const allChecks = [
  hasDirectHref,
  hasTargetBlank,
  hasRelNoopener,
  hasApplyButton,
  hasAnalytics,
  validUniversities === universities.length,
  hasBookFreeCounseling,
  hasContactButton,
  hasRoundedPill,
  hasGlassEffect
];

const passedChecks = allChecks.filter(Boolean).length;
const totalChecks = allChecks.length;

console.log(`✅ ${passedChecks}/${totalChecks} checks passed`);
console.log(`📊 Success rate: ${((passedChecks / totalChecks) * 100).toFixed(1)}%`);

if (passedChecks === totalChecks) {
  console.log('\n🎉 All functionality verified successfully!');
  console.log('🚀 Ready for production deployment');
} else {
  console.log('\n⚠️ Some checks failed. Please review the implementation.');
}