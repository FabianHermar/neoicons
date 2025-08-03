"use client"

import { useState } from "react"
import { toast } from "sonner"
import type { IconStyle } from "@/types"
import { iconLibrary } from "@/data/iconData"
import { getIconInfo } from "@/utils/iconsUtils"
import { IconTabs } from "@/components/iconTabs"
import { IconBadge } from "@/components/iconBadge"
import { IconCard } from "@/components/iconCard"

export default function SVGIconLibrary() {
  const [activeStyle, setActiveStyle] = useState<IconStyle>("outline")
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null)

  const copyToClipboard = async (svg: string, iconName: string) => {
    try {
      await navigator.clipboard.writeText(svg)
      setCopiedIcon(iconName)
      toast.success(`Icon "${iconName}" copied`, {
        description: "The SVG has been copied to the clipboard",
        position: "bottom-right",
      })
      setTimeout(() => setCopiedIcon(null), 2000)
    } catch (err) {
      toast.error("Error copying", {
        description: "The SVG could not be copied to the clipboard",
        position: "bottom-right",
      })
    }
  }

  const iconInfo = getIconInfo(activeStyle)

  return (
    <div className="w-full max-w-7xl mx-auto pt-16">
      <div className="flex items-center justify-between mb-8">
        <IconTabs activeStyle={activeStyle} onStyleChange={setActiveStyle} />

        <div className="flex items-center gap-2">
          <IconBadge>{activeStyle.charAt(0).toUpperCase() + activeStyle.slice(1)}</IconBadge>
          <span className="text-sm text-gray-500">
            {iconInfo.size}, {iconInfo.stroke}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {iconLibrary.map((icon) => (
          <IconCard
            key={icon.name}
            icon={icon}
            style={activeStyle}
            onClick={() => copyToClipboard(icon.svg[activeStyle], icon.name)}
          />
        ))}
      </div>
    </div>
  )
}
