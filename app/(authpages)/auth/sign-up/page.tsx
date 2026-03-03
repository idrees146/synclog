import { SignUpForm } from "@/components/auth/sign-up-form"

export default function SignUpPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Create account
        </h2>
        <p className="mt-1.5 text-sm text-zinc-400">
          Get started with your team
        </p>
      </div>
      <SignUpForm />
    </div>
  )
}
