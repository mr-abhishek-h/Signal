import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AuthForm } from "./AuthForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const authSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.confirm) return true
      return data.password === data.confirm
    },
    {
      message: "Passwords don't match",
      path: ["confirm"],
    }
  )

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  })

  const onSubmit = async (data) => {
    try {
      // Here you would typically make an API call
      console.log(isLogin ? "Logging in..." : "Signing up...", data)
      reset()
    } catch (error) {
      console.error("Auth error:", error)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <Card className="md:w-1/3 lg:w-1/4 xl:w-1/5 w-[90%] shadow-xl border-none rounded-2xl backdrop-blur-sm bg-white/70 dark:bg-slate-800/60">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
          </CardTitle>
          <p className="text-sm text-slate-500 mt-1">
            {isLogin
              ? "Log in to continue to your dashboard."
              : "Sign up to get started with your journey."}
          </p>
        </CardHeader>

        <CardContent>
          <AuthForm
            isLogin={isLogin}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
          />

          <motion.div
            className="text-center mt-6 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-slate-800 dark:text-slate-300 font-medium hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-slate-800 dark:text-slate-300 font-medium hover:underline"
                >
                  Log in
                </button>
              </>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}

