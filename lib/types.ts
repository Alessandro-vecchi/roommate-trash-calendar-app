export interface CalendarAssignment {
  id: string;
  date: string;
  roommate: string;
  created_at: string;
}

export const ROOMMATES = ["Alex", "Jordan", "Sam", "Taylor"] as const;
export type Roommate = (typeof ROOMMATES)[number];
