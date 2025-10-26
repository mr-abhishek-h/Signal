import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.25 }
}

export function AuthForm({ isLogin, onSubmit, register }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <AnimatePresence mode="wait">
        {!isLogin && (
          <motion.div key="name" {...fadeInUp}>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name", { required: !isLogin })}
              className="mt-1"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div key="email" {...fadeInUp}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email", { required: true })}
          className="mt-1"
        />
      </motion.div>

      <motion.div key="password" {...fadeInUp}>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password", { required: true })}
          className="mt-1"
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {!isLogin && (
          <motion.div key="confirm" {...fadeInUp}>
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input
              id="confirm"
              type="password"
              placeholder="••••••••"
              {...register("confirm", {
                required: !isLogin,
                validate: (value) => value === register("password").value
              })}
              className="mt-1"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        className="w-full mt-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl py-2 transition-all"
      >
        {isLogin ? "Login" : "Sign Up"}
      </Button>
    </form>
  )
}