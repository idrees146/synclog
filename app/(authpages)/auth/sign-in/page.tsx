import { AuthHeader } from "@/components/auth/auth-header"
import { SignInForm } from "@/components/auth/sign-in-form"

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <AuthHeader
        heading="Welcome back"
        description="Enter your credentials to access your account"
      />
      <SignInForm />
    </div>
  )
}
