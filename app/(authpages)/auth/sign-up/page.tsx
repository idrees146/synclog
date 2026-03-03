import { AuthHeader } from "@/components/auth/auth-header"
import { SignUpForm } from "@/components/auth/sign-up-form"

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      <AuthHeader
        heading="Create your account"
        description="Start tracking time with your team in minutes"
      />
      <SignUpForm />
    </div>
  )
}
