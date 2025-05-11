"use client";

import Link from "next/link";
import PartySpotLogoWithText from "@/components/common/ps-logo";
import { SignUpForm } from "@/components/auth";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-white p-8 shadow-lg">
        {/* Logo */}
        <PartySpotLogoWithText />

        {/* Greeting */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Join the ACY FUN now
          </h2>
          <div className="mt-1 flex justify-center space-x-1 text-sm">
            <span className="text-gray-600">Already have an account?</span>
            <Link
              href="/sign-in"
              className="font-medium text-pink-600 hover:text-pink-700"
            >
              Log in
            </Link>
          </div>
        </div>

        <SignUpForm />
      </div>
    </div>
  );
}
