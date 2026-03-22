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
  Xavier: "bg-rose-500 text-white",
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

  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-square p-2 rounded-lg border border-border bg-card hover:bg-accent transition-colors flex flex-col items-center justify-start gap-1 cursor-pointer",
        isToday && "ring-2 ring-primary"
      )}
    >
      <span
        className={cn(
          "text-sm font-medium",
          isToday ? "text-primary" : "text-foreground"
        )}
      >
        {day}
      </span>
      {assignment && (
        <span
          className={cn(
            "text-xs px-2 py-0.5 rounded-full truncate max-w-full",
            roommateColors[assignment.roommate] || "bg-muted text-muted-foreground"
          )}
        >
          {assignment.roommate}
        </span>
      )}
    </button>
  );
}
