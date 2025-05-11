import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

export default function SignUpForm() {
  return (
    <SignUp.Root path="/sign-up" routing="path">
      {/* Initial Sign-up Step */}
      <SignUp.Step name="start" className="space-y-4">
        {/* Name fields */}
        <div className="grid grid-cols-2 gap-3">
          <Clerk.Field name="firstName" className="space-y-1">
            <Clerk.Label className="block text-sm font-medium text-gray-700">
              First Name
            </Clerk.Label>
            <Clerk.Input
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
              placeholder="First Name"
              required
              autoComplete="given-name"
            />
            <Clerk.FieldError className="text-sm text-red-600" />
          </Clerk.Field>
          <Clerk.Field name="lastName" className="space-y-1">
            <Clerk.Label className="block text-sm font-medium text-gray-700">
              Last Name
            </Clerk.Label>
            <Clerk.Input
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
              placeholder="Last Name"
              required
              autoComplete="family-name"
            />
            <Clerk.FieldError className="text-sm text-red-600" />
          </Clerk.Field>
        </div>

        {/* Email field */}
        <Clerk.Field name="emailAddress" className="space-y-1">
          <Clerk.Label className="block text-sm font-medium text-gray-700">
            Email Address
          </Clerk.Label>
          <Clerk.Input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            placeholder="example@partyspot.com"
            required
            autoComplete="email"
          />
          <Clerk.FieldError className="text-sm text-red-600" />
        </Clerk.Field>

        {/* Password field */}
        <Clerk.Field name="password" className="space-y-1">
          <Clerk.Label className="block text-sm font-medium text-gray-700">
            Password
          </Clerk.Label>
          <Clerk.Input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            type="password"
            placeholder="••••••••••"
            required
            minLength={8}
            autoComplete="new-password"
          />
          <Clerk.FieldError className="text-sm text-red-600" />
        </Clerk.Field>

        {/* Terms and conditions */}
        <div className="space-y-3">
          <Clerk.Field name="terms">
            <div className="flex items-start">
              <Clerk.Input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
              />
              <label className="ml-2 block text-sm text-gray-600">
                I accept the{" "}
                <a
                  href="/terms"
                  className="font-medium text-pink-600 hover:text-pink-700"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="font-medium text-pink-600 hover:text-pink-700"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
            <Clerk.FieldError className="mt-1 text-sm text-red-600" />
          </Clerk.Field>
        </div>

        {/* Sign Up Button */}
        <SignUp.Action
          submit
          className="w-full rounded-md bg-pink-600 px-3 py-2 text-center font-medium text-white shadow-sm transition-colors hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none"
        >
          Create Account
        </SignUp.Action>

        {/* Social Login Options */}
        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <Clerk.Connection
              name="google"
              className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <Clerk.Icon className="h-5 w-5" />
            </Clerk.Connection>
            <Clerk.Connection
              name="facebook"
              className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <Clerk.Icon className="h-5 w-5" />
            </Clerk.Connection>
            <Clerk.Connection
              name="apple"
              className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <Clerk.Icon className="h-5 w-5" />
            </Clerk.Connection>
          </div>
        </div>
      </SignUp.Step>

      {/* Verification Step */}
      <SignUp.Step name="verifications" className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Verify your email address
        </h2>
        <p className="text-sm text-gray-600">
          We’ve sent a verification code to your email address
        </p>
        <Clerk.Field name="code" className="space-y-1">
          <Clerk.Label className="block text-sm font-medium text-gray-700">
            Verification Code
          </Clerk.Label>
          <Clerk.Input
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            placeholder="6-digit code"
            maxLength={6}
            pattern="\d{6}"
            inputMode="numeric"
            autoComplete="one-time-code"
          />
          <Clerk.FieldError className="text-sm text-red-600" />
        </Clerk.Field>
        <div className="flex flex-col space-y-2">
          <SignUp.Action
            submit
            className="w-full rounded-md bg-pink-600 px-3 py-2 text-center font-medium text-white shadow-sm transition-colors hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none"
          >
            Verify Email
          </SignUp.Action>
          <button
            type="button"
            className="text-center text-sm font-medium text-pink-600 hover:text-pink-700"
          >
            Resend Code
          </button>
        </div>
      </SignUp.Step>
    </SignUp.Root>
  );
}
