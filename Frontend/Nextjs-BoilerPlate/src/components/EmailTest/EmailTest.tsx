"use client"

import { useState } from 'react'

export default function EmailTest() {
  const [testEmail, setTestEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(null)

  const testConfiguration = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/test-email')
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to test email configuration'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const sendTestEmail = async () => {
    if (!testEmail || !testEmail.includes('@')) {
      setResult({
        success: false,
        message: 'Please enter a valid email address'
      })
      return
    }

    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ testEmail }),
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to send test email'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-background rounded-lg shadow-lg border">
      <h2 className="text-xl font-bold mb-4 text-center">Email Configuration Test</h2>
      
      <div className="space-content">
        <button
          onClick={testConfiguration}
          disabled={isLoading}
          className="w-full px-4 py-2 bg-accent0 hover:bg-blue-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Testing...' : 'Test Configuration'}
        </button>

        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter test email address"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendTestEmail}
            disabled={isLoading || !testEmail}
            className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send Test Email'}
          </button>
        </div>

        {result && (
          <div
            className={`p-3 rounded-md text-sm ${
              result.success
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-primary/20 text-red-800 border border-red-200'
            }`}
          >
            {result.message}
          </div>
        )}
      </div>

      <div className="mt-6 text-xs text-subtle">
        <p><strong>Note:</strong> This component is for testing email setup during development.</p>
        <p>Remove it before deploying to production.</p>
      </div>
    </div>
  )
}