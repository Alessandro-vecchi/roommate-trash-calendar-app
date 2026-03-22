"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ROOMMATES } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RoommateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRoommate: (roommate: string) => void;
  onRemove: () => void;
  selectedDate: string | null;
  currentAssignment?: string;
}

const roommateButtonColors: Record<string, string> = {
  Alex: "bg-blue-500 hover:bg-blue-600 text-white",
  Fang: "bg-emerald-500 hover:bg-emerald-600 text-white",
  Richie: "bg-amber-500 hover:bg-amber-600 text-white",
  Xavier: "bg-rose-500 hover:bg-rose-600 text-white",
};

export function RoommateModal({
  isOpen,
  onClose,
  onSelectRoommate,
  onRemove,
  selectedDate,
  currentAssignment,
}: RoommateModalProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("default", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-xl sm:rounded-lg">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-lg">Assign Trash Duty</DialogTitle>
          <DialogDescription className="text-sm">
            {selectedDate && formatDate(selectedDate)}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 py-2 sm:py-4">
          {ROOMMATES.map((roommate) => (
            <Button
              key={roommate}
              onClick={() => onSelectRoommate(roommate)}
              className={cn(
                "h-12 sm:h-14 text-base font-medium touch-manipulation",
                roommateButtonColors[roommate],
                currentAssignment === roommate && "ring-2 ring-offset-2 ring-foreground"
              )}
            >
              {roommate}
            </Button>
          ))}
        </div>
        {currentAssignment && (
          <Button
            variant="outline"
            onClick={onRemove}
            className="w-full h-11 text-destructive hover:text-destructive touch-manipulation"
          >
            Remove Assignment
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
}
