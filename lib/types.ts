export interface CalendarAssignment {
  id: string;
  date: string;
  roommate: string;
  created_at: string;
}

export const ROOMMATES = ["Alex", "Fang", "Richie", "Jil"] as const;
export type Roommate = (typeof ROOMMATES)[number];
