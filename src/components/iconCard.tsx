"use client"

import type { IconData, IconStyle } from "@/types"

interface IconCardProps {
  icon: IconData
  style: IconStyle
  onClick: () => void
}

export function IconCard({ icon, style, onClick }: IconCardProps) {
  return (
    <div>
      <div
        className="group rounded-lg border border-gray-200 bg-white duration-200 cursor-pointer hover:bg-gray-50"
        onClick={onClick}
      >
        <div className="p-4 flex flex-col items-center gap-3">
          <div
            className="w-12 h-26 flex items-center justify-center text-gray-700 group-hover:text-gray-900 transition-colors"
            dangerouslySetInnerHTML={{ __html: icon.svg[style] }}
          />
        </div>
      </div>
        <div className="text-center">
          <p className="text-xs font-display pt-4 text-gray-900 truncate w-full">{icon.name}</p>
        </div>
    </div>
  )
}
