"use client"

import { ReactNode } from "react"

type RootProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function Root({ children, isOpen, onClose }: RootProps) {
  if (!isOpen) return null
  return (
    // BackDrop
    <div
      className="visible fixed inset-0 z-50 flex items-center justify-center bg-dark/80 transition-colors"
      onClick={onClose}
    >
      {/* Content */}
      <div
        className={
          "shadow-blur w-full max-w-[618px] rounded bg-gradient-to-r from-light_blue to-default_blue p-[3px] shadow-default_blue transition-all"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex size-full flex-col justify-between rounded bg-gradient-to-br from-dark_blue to-dark p-14 transition-all">
          {children}
        </div>
      </div>
    </div>
  )
}
