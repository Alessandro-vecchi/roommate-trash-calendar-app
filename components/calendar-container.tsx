"use client";

import { useEffect, useState } from "react";
import { Calendar } from "./calendar";
import { createClient } from "@/lib/supabase/client";
import { CalendarAssignment } from "@/lib/types";
import { Spinner } from "@/components/ui/spinner";

export function CalendarContainer() {
  const [assignments, setAssignments] = useState<CalendarAssignment[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  const fetchAssignments = async () => {
    const { data, error } = await supabase
      .from("calendar_assignments")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error("Error fetching assignments:", error);
    } else {
      setAssignments(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const handleAssign = async (date: string, roommate: string) => {
    const existingAssignment = assignments.find((a) => a.date === date);

    if (existingAssignment) {
      const { error } = await supabase
        .from("calendar_assignments")
        .update({ roommate })
        .eq("id", existingAssignment.id);

      if (error) {
        console.error("Error updating assignment:", error);
        return;
      }
    } else {
      const { error } = await supabase
        .from("calendar_assignments")
        .insert({ date, roommate });

      if (error) {
        console.error("Error inserting assignment:", error);
        return;
      }
    }

    await fetchAssignments();
  };

  const handleRemove = async (date: string) => {
    const { error } = await supabase
      .from("calendar_assignments")
      .delete()
      .eq("date", date);

    if (error) {
      console.error("Error removing assignment:", error);
      return;
    }

    await fetchAssignments();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  return (
    <Calendar
      assignments={assignments}
      onAssign={handleAssign}
      onRemove={handleRemove}
    />
  );
}
