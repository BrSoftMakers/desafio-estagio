"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { ptBR } from "date-fns/locale"
import { Dispatch, SetStateAction, useState } from "react"
import Input from "../Input"

type DatePickerProps = {
  value: Date | undefined
  setValue: Dispatch<SetStateAction<Date | undefined>>
  disabled?: boolean
}

export function DatePicker({ value, setValue, disabled }: DatePickerProps) {
  const [calendarOpen, setCalendarOpen] = useState(false)

  if (disabled) {
    return (
      <Input
        value={value?.toLocaleDateString() || new Date().toLocaleDateString()}
        disabled={disabled}
      />
    )
  }

  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "size-full max-h-10 max-w-[321px] justify-start rounded-[10px] border-3 border-grey bg-transparent p-[10px] text-left font-normal outline-none",
            !value && "text-grey"
          )}
        >
          {value?.toLocaleDateString() || new Date().toLocaleDateString()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={ptBR}
          mode="single"
          selected={value}
          onSelect={(v) => {
            setValue(v)
            setCalendarOpen(false)
          }}
          disabled={{ after: new Date() }}
          required
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
