import { NextRequest, NextResponse } from 'next/server';
import { validateEmailConfig, getEmailConfig } from '@/lib/email-config';

export async function GET() {
  try {
    // Test email configuration
    validateEmailConfig();
    const config = getEmailConfig();
    
    return NextResponse.json({
      success: true,
      message: 'Email configuration is valid',
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
    console.error('Email configuration test failed:', error);
    
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Email configuration test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function POST() {
  try {
    // Test basic quote submission without sending emails
    return NextResponse.json({
      success: true,
      message: 'Test quote endpoint is working',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Test quote endpoint error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Test endpoint failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}