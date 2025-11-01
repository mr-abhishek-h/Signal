import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.25 },
}

export function AuthForm({ isLogin, onSubmit, register, errors }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <AnimatePresence mode="wait">
        {!isLogin && (
          <motion.div key="name" {...fadeInUp}>
            <Label htmlFor="name" className="text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase mb-2">
              Display Name <span className="text-[hsl(var(--discord-red))]">*</span>
            </Label>
            <Input
              id="name"
              placeholder=""
              {...register("name", { required: !isLogin })}
              className="mt-1 bg-[hsl(var(--discord-darker))] border-[hsl(var(--discord-darker))] text-[hsl(var(--discord-text))] placeholder:text-[hsl(var(--discord-text-muted))] focus:border-[hsl(var(--discord-blurple))] h-10"
            />
            {errors.name && (
              <p className="text-xs text-[hsl(var(--discord-red))] mt-1 italic">{errors.name.message}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div key="email" {...fadeInUp}>
        <Label htmlFor="email" className="text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase mb-2">
          Email <span className="text-[hsl(var(--discord-red))]">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder=""
          {...register("email", { required: true })}
          className="mt-1 bg-[hsl(var(--discord-darker))] border-[hsl(var(--discord-darker))] text-[hsl(var(--discord-text))] placeholder:text-[hsl(var(--discord-text-muted))] focus:border-[hsl(var(--discord-blurple))] h-10"
        />
        {errors.email && (
          <p className="text-xs text-[hsl(var(--discord-red))] mt-1 italic">{errors.email.message}</p>
        )}
      </motion.div>

      <motion.div key="password" {...fadeInUp}>
        <Label htmlFor="password" className="text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase mb-2">
          Password <span className="text-[hsl(var(--discord-red))]">*</span>
        </Label>
        <Input
          id="password"
          type="password"
          placeholder=""
          {...register("password", { required: true })}
          className="mt-1 bg-[hsl(var(--discord-darker))] border-[hsl(var(--discord-darker))] text-[hsl(var(--discord-text))] placeholder:text-[hsl(var(--discord-text-muted))] focus:border-[hsl(var(--discord-blurple))] h-10"
        />
        {errors.password && (
          <p className="text-xs text-[hsl(var(--discord-red))] mt-1 italic">{
            errors.password.message
          }</p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {!isLogin && (
          <motion.div key="confirm" {...fadeInUp}>
            <Label htmlFor="confirm" className="text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase mb-2">
              Confirm Password <span className="text-[hsl(var(--discord-red))]">*</span>
            </Label>
            <Input
              id="confirm"
              type="password"
              placeholder=""
              {...register("confirm", {
                required: !isLogin,
                validate: (value) => value === register("password").value,
              })}
              className="mt-1 bg-[hsl(var(--discord-darker))] border-[hsl(var(--discord-darker))] text-[hsl(var(--discord-text))] placeholder:text-[hsl(var(--discord-text-muted))] focus:border-[hsl(var(--discord-blurple))] h-10"
            />
            {errors.confirm && (
              <p className="text-xs text-[hsl(var(--discord-red))] mt-1 italic">{
                errors.confirm.message
              }</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        className="w-full mt-6 bg-[hsl(var(--discord-blurple))] hover:bg-[hsl(235,86%,60%)] text-white rounded-[3px] h-11 text-base font-medium transition-colors"
      >
        {isLogin ? "Log In" : "Continue"}
      </Button>
    </form>
  )
}
