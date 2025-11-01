import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
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
    <div className="min-h-screen w-full flex items-center justify-center bg-[hsl(var(--discord-dark))]">
      <Card className="md:w-[480px] w-[90%] max-w-[480px] shadow-2xl border-none rounded-lg bg-[hsl(var(--discord-gray))]">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-[hsl(var(--discord-text))]">
            {isLogin ? "Welcome back!" : "Create an account"}
          </CardTitle>
          <p className="text-sm text-[hsl(var(--discord-text-muted))]">
            {isLogin
              ? "We're so excited to see you again!"
              : "We're excited to have you join us!"}
          </p>
        </CardHeader>

        <CardContent>
          <AuthForm
            isLogin={isLogin}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
          />

          <motion.div
            className="text-sm text-[hsl(var(--discord-text-muted))] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {isLogin ? (
              <div className="flex items-center gap-1">
                <span>Need an account?</span>
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-[hsl(var(--discord-blurple))] hover:underline font-normal"
                >
                  Register
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-[hsl(var(--discord-blurple))] hover:underline font-normal"
                >
                  Already have an account?
                </button>
              </div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}