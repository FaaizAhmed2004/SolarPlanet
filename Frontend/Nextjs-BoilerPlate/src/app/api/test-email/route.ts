import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateEmailConfig, getEmailConfig } from '@/lib/email-config';

export async function GET() {
  try {
    // Validate configuration
    validateEmailConfig();
    const config = getEmailConfig();
    
    // Create transporter
    const transporter = nodemailer.createTransport(config.smtp);
    
    // Test connection
    await transporter.verify();
    
    return NextResponse.json({
      success: true,
      message: 'Email configuration is valid and SMTP connection successful',
      config: {
        host: config.smtp.host,
        port: config.smtp.port,
        secure: config.smtp.secure,
        user: config.smtp.auth.user,
        businessEmail: config.addresses.business,
        fromEmail: config.addresses.from
      }
    });
    
  } catch (error) {
    console.error('Email test failed:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Email configuration test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { testEmail } = await request.json();
    
    if (!testEmail || !testEmail.includes('@')) {
      return NextResponse.json({
        success: false,
        message: 'Valid test email address is required'
      }, { status: 400 });
    }
    
    // Validate configuration
    validateEmailConfig();
    const config = getEmailConfig();
    
    // Create transporter
    const transporter = nodemailer.createTransport(config.smtp);
    
    // Send test email
    await transporter.sendMail({
      from: config.addresses.from,
      to: testEmail,
      subject: 'Test Email - The Energy Planet',
      html: `
        <h2>Email Test Successful!</h2>
        <p>This is a test email from The Energy Planet website.</p>
        <p>If you received this email, your email configuration is working correctly.</p>
        <p>Sent at: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
      `
    });
    
    return NextResponse.json({
      success: true,
      message: `Test email sent successfully to ${testEmail}`
    });
    
  } catch (error) {
    console.error('Test email failed:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Failed to send test email',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}