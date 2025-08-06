import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-full bg-[#F0EDCC]/10 border border-[#F0EDCC]/20 px-6 py-2 text-sm font-medium font-inter backdrop-blur-sm transition-all duration-300 hover:bg-[#F0EDCC]/20 hover:border-[#F0EDCC]/30",
        className,
      )}
    >
      <span className="inline-block text-[#F0EDCC] font-medium">
        {children}
      </span>
    </div>
  )
}
