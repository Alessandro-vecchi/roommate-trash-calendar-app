"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendarDay } from "./calendar-day";
import { RoommateModal } from "./roommate-modal";
import { CalendarAssignment } from "@/lib/types";

interface CalendarProps {
  assignments: CalendarAssignment[];
  onAssign: (date: string, roommate: string) => Promise<void>;
  onRemove: (date: string) => Promise<void>;
}

export function Calendar({ assignments, onAssign, onRemove }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(dateStr);
    setIsModalOpen(true);
  };

  const handleSelectRoommate = async (roommate: string) => {
    if (selectedDate) {
      await onAssign(selectedDate, roommate);
      setIsModalOpen(false);
      setSelectedDate(null);
    }
  };

  const handleRemoveAssignment = async () => {
    if (selectedDate) {
      await onRemove(selectedDate);
      setIsModalOpen(false);
      setSelectedDate(null);
    }
  };

  const getAssignmentForDate = (day: number): CalendarAssignment | undefined => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return assignments.find((a) => a.date === dateStr);
  };

  const days: (number | null)[] = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const weekdaysFull = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4 sm:mb-6 px-1">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToPreviousMonth}
          className="h-10 w-10 sm:h-9 sm:w-9"
        >
          <ChevronLeft className="h-5 w-5 sm:h-4 sm:w-4" />
        </Button>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
          {monthName} {year}
        </h2>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToNextMonth}
          className="h-10 w-10 sm:h-9 sm:w-9"
        >
          <ChevronRight className="h-5 w-5 sm:h-4 sm:w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-1 sm:mb-2">
        {weekdays.map((day, index) => (
          <div
            key={index}
            className="text-center text-xs sm:text-sm font-medium text-muted-foreground py-1 sm:py-2"
          >
            <span className="sm:hidden">{day}</span>
            <span className="hidden sm:inline">{weekdaysFull[index]}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
        {days.map((day, index) => (
          <CalendarDay
            key={index}
            day={day}
            assignment={day ? getAssignmentForDate(day) : undefined}
            onClick={() => day && handleDayClick(day)}
          />
        ))}
      </div>

      <RoommateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectRoommate={handleSelectRoommate}
        onRemove={handleRemoveAssignment}
        selectedDate={selectedDate}
        currentAssignment={
          selectedDate
            ? assignments.find((a) => a.date === selectedDate)?.roommate
            : undefined
        }
      />
    </div>
  );
}
