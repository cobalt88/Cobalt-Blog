import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/Authentication/AuthLayout'
import { Button } from '@/components/Buttons/Button'
import { TextField } from '@/components/PageComponents/Fields'
import { Logo } from '@/components/PageComponents/Logos/Logo'
import AuthTest from '@/components/Authentication/AuthTest'
import LoginButton from '@/components/Buttons/LoginButton'

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - Circle Connect</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-20 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="my-10 w-full"
            >
              <span>
                Sign in<span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
            <LoginButton className="my-5" />
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
