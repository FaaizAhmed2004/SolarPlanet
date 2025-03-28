import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { sendVerificationEmail, sendPasswordResetEmail } from "../../lib/email-service"

// This is a mock implementation - in a real app, you would integrate with your actual API
export async function POST(request: Request) {
  const { action, ...data } = await request.json()

  switch (action) {
    case "register":
      return handleRegister(data)
    case "login":
      return handleLogin(data)
    case "logout":
      return handleLogout()
    case "verify-email":
      return handleVerifyEmail(data)
    case "resend-verification":
      return handleResendVerification(data)
    case "forgot-password":
      return handleForgotPassword(data)
    case "reset-password":
      return handleResetPassword(data)
    default:
      return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  }
}

async function handleRegister(data: any) {
  try {
    // Forward the registration request to your API
    const response = await fetch("http://localhost:3000/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: responseData.message || "Registration failed" }, { status: response.status })
    }

    // If your API returns a verification token, send the verification email
    if (responseData.verificationToken) {
      await sendVerificationEmail(data.email, responseData.verificationToken)
    }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "An error occurred during registration" }, { status: 500 })
  }
}

async function handleLogin(data: any) {
  try {
    // Forward the login request to your API
    const response = await fetch("http://localhost:3000/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: responseData.message || "Login failed" }, { status: response.status })
    }

    // Set the token in a cookie
    if (responseData.token) {
      cookies().set({
        name: "token",
        value: responseData.token,
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      })
    }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}

async function handleLogout() {
  cookies().delete("token")
  return NextResponse.json({ success: true })
}

async function handleVerifyEmail(data: any) {
  try {
    // Forward the verification request to your API
    const response = await fetch(`http://localhost:3000/v1/verify-email?token=${data.token}`, {
      method: "GET",
    })

    const responseData = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: responseData.message || "Verification failed" }, { status: response.status })
    }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Verification error:", error)
    return NextResponse.json({ error: "An error occurred during email verification" }, { status: 500 })
  }
}

async function handleResendVerification(data: any) {
  try {
    // Forward the resend verification request to your API
    const response = await fetch("http://localhost:3000/v1/resend-verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.message || "Failed to resend verification" },
        { status: response.status },
      )
    }

    // If your API returns a verification token, send the verification email
    if (responseData.verificationToken) {
      await sendVerificationEmail(data.email, responseData.verificationToken)
    }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Resend verification error:", error)
    return NextResponse.json({ error: "An error occurred while resending verification" }, { status: 500 })
  }
}

async function handleForgotPassword(data: any) {
  try {
    // Forward the forgot password request to your API
    const response = await fetch("http://localhost:3000/v1/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.message || "Failed to process forgot password request" },
        { status: response.status },
      )
    }

    // If your API returns a reset token, send the password reset email
    if (responseData.resetToken) {
      await sendPasswordResetEmail(data.email, responseData.resetToken)
    }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Forgot password error:", error)
    return NextResponse.json({ error: "An error occurred while processing forgot password request" }, { status: 500 })
  }
}

async function handleResetPassword(data: any) {
  try {
    // Forward the reset password request to your API
    const response = await fetch("http://localhost:3000/v1/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.message || "Failed to reset password" },
        { status: response.status },
      )
    }

    return NextResponse.json(responseData)
  } catch (error) {
    console.error("Reset password error:", error)
    return NextResponse.json({ error: "An error occurred while resetting password" }, { status: 500 })
  }
}

