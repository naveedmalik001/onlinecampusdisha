import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, program, university, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Log the submission (in production, you'd save to a database or send to email)
    console.log('=== New Contact Form Submission ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone:', phone)
    console.log('Program:', program || 'Not specified')
    console.log('University:', university || 'Not specified')
    console.log('Message:', message || 'No message')
    console.log('================================')

    // In production, you could:
    // 1. Send an email to your team
    // 2. Save to a database (PostgreSQL, MongoDB, etc.)
    // 3. Add to a CRM system
    // 4. Send notifications to Slack/Discord

    // Example: Send email (uncomment and configure)
    /*
    await sendEmail({
      to: 'info@campusdisha.com',
      subject: `New Contact Form Submission - ${name}`,
      body: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Program: ${program || 'Not specified'}
        University: ${university || 'Not specified'}
        Message: ${message || 'No message'}
      `
    })
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Handle GET requests for webhook testing
export async function GET() {
  return NextResponse.json(
    {
      message: 'Contact form API endpoint is working',
      timestamp: new Date().toISOString()
    }
  )
}