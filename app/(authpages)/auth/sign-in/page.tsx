import { SignInForm } from "@/components/auth/sign-in-form"

export default function SignInPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Sign in
        </h2>
        <p className="mt-1.5 text-sm text-zinc-400">
          Enter your email to continue
        </p>
      </div>
      <SignInForm />
    </div>
  )
}
