/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"
import { DayPicker } from "react-day-picker"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("max-w-60 rounded-md bg-day_picker_bg p-2", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full",
        caption:
          "flex justify-center pt-1 relative items-center capitalize text-white",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex w-full",
        head_cell:
          "capitalize text-gray-500 rounded-md w-full font-normal text-[0.8rem] dark:text-gray-400",
        row: "flex w-full mt-2 ",
        cell: "size-8 text-center text-sm text-white p-0 relative focus-within:relative",
        day: "bg-transparent h-9 w-9 p-0 font-normal rounded-md hover:bg-gray-100 hover:text-gray-900 aria-selected:bg-gray-100 aria-selected:text-day_picker_bg aria-selected:hover:bg-white",
        day_range_end: "day-range-end",
        day_outside:
          "day-outside text-gray-500 aria-selected:bg-gray-100 aria-selected:text-day_picker_bg",
        day_disabled: "text-gray-500 opacity-50 dark:text-gray-400",
        day_range_middle:
          "aria-selected:bg-gray-100 aria-selected:text-gray-900 dark:aria-selected:bg-gray-800 dark:aria-selected:text-gray-50",
        day_hidden: "invisible",
        ...classNames
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
