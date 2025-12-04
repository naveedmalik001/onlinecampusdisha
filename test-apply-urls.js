const fs = require('fs');

// Load universities data
const universities = JSON.parse(fs.readFileSync('./data/universities.json', 'utf8'));

console.log('=== Testing University Landing URLs ===\n');

let validUrls = 0;
let invalidUrls = 0;

universities.forEach((uni, index) => {
  const { name, slug, landing } = uni;

  console.log(`${index + 1}. ${name}`);
  console.log(`   Slug: ${slug}`);
  console.log(`   Landing URL: ${landing}`);

  // Basic URL validation
  if (landing && landing.startsWith('https://') && landing.includes('universityadmission.co.in')) {
    console.log('   ✅ Valid URL format\n');
    validUrls++;
  } else {
    console.log('   ❌ Invalid URL format\n');
    invalidUrls++;
  }
});

console.log('=== Summary ===');
console.log(`Total universities: ${universities.length}`);
console.log(`Valid URLs: ${validUrls}`);
console.log(`Invalid URLs: ${invalidUrls}`);
console.log(`Success rate: ${((validUrls / universities.length) * 100).toFixed(1)}%`);

// Test specific URLs mentioned in requirements
const expectedUrls = [
  'https://nmims.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=Nimmsonline',
  'https://srm.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=srmonline'
];

console.log('\n=== Expected URL Verification ===');
expectedUrls.forEach((expectedUrl, index) => {
  const uni = universities.find(u => u.landing === expectedUrl);
  if (uni) {
    console.log(`${index + 1}. ✅ Found correct URL for ${uni.name}`);
  } else {
    console.log(`${index + 1}. ❌ URL not found in database`);
    console.log(`   Expected: ${expectedUrl}`);
  }
});