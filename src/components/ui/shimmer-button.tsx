"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps {
  children: React.ReactNode
  className?: string
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  href?: string
  onClick?: () => void
}

export default function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  href,
  onClick,
  ...props
}: ShimmerButtonProps) {
  const Component = href ? "a" : "button"
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn("group relative", className)}
    >
      <Component
        href={href}
        onClick={onClick}
        style={{
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--border-radius": borderRadius,
          "--shimmer-duration": shimmerDuration,
          "--background": background,
        } as React.CSSProperties}
        className={cn(
          "relative z-10 flex h-16 w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-elegant-cream/20 bg-[--background] px-6 py-4 text-elegant-cream transition-all duration-300 hover:border-elegant-cream/40 hover:shadow-lg active:scale-95 backdrop-blur-sm",
          "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-r before:from-transparent before:via-elegant-cream/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:animate-shimmer group-hover:before:opacity-100",
        )}
        {...props}
      >
        <span className="relative z-10 block text-sm font-medium font-inter">
          {children}
        </span>
        <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-r from-transparent via-elegant-cream/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100" />
      </Component>
    </motion.div>
  )
}
