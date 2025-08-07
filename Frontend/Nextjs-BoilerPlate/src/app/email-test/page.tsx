import EmailTest from '@/components/EmailTest/EmailTest'

export default function EmailTestPage() {
  return (
    <div className="min-h-screen bg-muted section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Email Configuration Test</h1>
          <p className="text-readable">Test your email setup before going live</p>
        </div>
        
        <EmailTest />
        
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-background rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Setup Instructions</h2>
          <div className="space-y-3 text-sm text-readable">
            <p><strong>1. Create .env.local file</strong> in your project root with:</p>
            <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`SMTP_HOST=mail.privateemail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@theenergyplanet.com
SMTP_PASS=TheEnergyPlanet@1234
BUSINESS_EMAIL=info@theenergyplanet.com
FROM_EMAIL=info@theenergyplanet.com`}
            </pre>
            
            <p><strong>2. For Namecheap Email:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Use mail.privateemail.com as SMTP host</li>
              <li>Port 587 with STARTTLS (SMTP_SECURE=false)</li>
              <li>Use your full email address as username</li>
              <li>Use your email password as SMTP_PASS</li>
            </ul>
            
            <p><strong>3. Test the configuration:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Click "Test Configuration" to verify SMTP settings</li>
              <li>Enter your email and click "Send Test Email"</li>
              <li>Check your inbox for the test email</li>
            </ul>
            
            <p className="text-primary"><strong>Important:</strong> Remove this test page before deploying to production!</p>
          </div>
        </div>
      </div>
    </div>
  )
}