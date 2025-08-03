"use client"

import type React from "react"

interface IconBadgeProps {
  children: React.ReactNode
}

export function IconBadge({ children }: IconBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
      {children}
    </span>
  )
}
