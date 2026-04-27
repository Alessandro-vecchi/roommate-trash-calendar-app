"use client";

import { CalendarAssignment } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CalendarDayProps {
  day: number | null;
  assignment?: CalendarAssignment;
  onClick: () => void;
}

const roommateColors: Record<string, string> = {
  Alex: "bg-blue-500 text-white",
  Fang: "bg-emerald-500 text-white",
  Richie: "bg-amber-500 text-white",
  Jil: "bg-rose-500 text-white",
};

export function CalendarDay({ day, assignment, onClick }: CalendarDayProps) {
  if (day === null) {
    return <div className="aspect-square" />;
  }

  const today = new Date();
  const isToday =
    today.getDate() === day &&
    today.getMonth() === new Date().getMonth() &&
    today.getFullYear() === new Date().getFullYear();

  // Get first letter on mobile, full name on desktop
  const displayName = assignment?.roommate;
  const initial = displayName?.charAt(0);

  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-square p-1 sm:p-2 rounded-md sm:rounded-lg border border-border bg-card hover:bg-accent active:bg-accent transition-colors flex flex-col items-center justify-start gap-0.5 sm:gap-1 cursor-pointer touch-manipulation",
        isToday && "ring-2 ring-primary ring-inset"
      )}
    >
      <span
        className={cn(
          "text-xs sm:text-sm font-medium leading-none",
          isToday ? "text-primary" : "text-foreground"
        )}
      >
        {day}
      </span>
      {assignment && (
        <span
          className={cn(
            "text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 rounded-full truncate max-w-full font-medium",
            roommateColors[assignment.roommate] || "bg-muted text-muted-foreground"
          )}
        >
          <span className="sm:hidden">{initial}</span>
          <span className="hidden sm:inline">{displayName}</span>
        </span>
      )}
    </button>
  );
}
