import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import universities from '../../../data/universities.json'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const uni = searchParams.get('uni')
    const program = searchParams.get('program')

    // Validate university parameter
    if (!uni) {
      return NextResponse.json(
        { error: 'University parameter is required' },
        { status: 400 }
      )
    }

    // Find university by slug
    const university = universities.find(u => u.slug === uni)

    if (!university) {
      return NextResponse.json(
        { error: 'University not found' },
        { status: 404 }
      )
    }

    // Log the click for analytics (in production, save to database)
    console.log('=== Apply Redirect Click ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('University:', university.name)
    console.log('Slug:', uni)
    console.log('Program:', program || 'Not specified')
    console.log('Landing URL:', university.landing)
    console.log('User Agent:', request.headers.get('user-agent'))
    console.log('Referer:', request.headers.get('referer') || 'Direct')
    console.log('========================')

    // In production, you could:
    // 1. Save click analytics to a database
    // 2. Update click counters in Redis
    // 3. Send to analytics service (Google Analytics, Mixpanel, etc.)
    // 4. Track conversion events

    // Example: Save to database (uncomment and implement)
    /*
    await db.clickAnalytics.create({
      data: {
        universityName: university.name,
        universitySlug: uni,
        program: program,
        userAgent: request.headers.get('user-agent'),
        referer: request.headers.get('referer'),
        timestamp: new Date(),
      }
    })
    */

    // Redirect to the university landing page
    return NextResponse.redirect(university.landing, 302)

  } catch (error) {
    console.error('Apply redirect error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Handle POST requests for server-side tracking
export async function POST(request) {
  try {
    const body = await request.json()
    const { uni, program, userAgent, referer } = body

    // Validate university parameter
    if (!uni) {
      return NextResponse.json(
        { error: 'University parameter is required' },
        { status: 400 }
      )
    }

    // Find university by slug
    const university = universities.find(u => u.slug === uni)

    if (!university) {
      return NextResponse.json(
        { error: 'University not found' },
        { status: 404 }
      )
    }

    // Log the click for analytics
    console.log('=== Apply Redirect Click (POST) ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('University:', university.name)
    console.log('Slug:', uni)
    console.log('Program:', program || 'Not specified')
    console.log('Landing URL:', university.landing)
    console.log('User Agent:', userAgent || 'Unknown')
    console.log('Referer:', referer || 'Direct')
    console.log('================================')

    // Return the landing URL for client-side redirect
    return NextResponse.json(
      {
        success: true,
        landingUrl: university.landing,
        university: university.name
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Apply redirect POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}