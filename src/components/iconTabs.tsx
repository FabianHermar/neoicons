"use client"

import * as Tabs from "@radix-ui/react-tabs"
import type { IconStyle } from "@/types"

interface IconTabsProps {
  activeStyle: IconStyle
  onStyleChange: (style: IconStyle) => void
}

export function IconTabs({ activeStyle, onStyleChange }: IconTabsProps) {
  return (
    <Tabs.Root value={activeStyle} onValueChange={(value) => onStyleChange(value as IconStyle)}>
      <Tabs.List className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 max-w-md">
        <Tabs.Trigger
          value="outline"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm"
        >
          Outline
        </Tabs.Trigger>
        <Tabs.Trigger
          value="solid"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm"
        >
          Solid
        </Tabs.Trigger>
        <Tabs.Trigger
          value="mini"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm"
        >
          Mini
        </Tabs.Trigger>
        <Tabs.Trigger
          value="micro"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm"
        >
          Micro
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
