export interface CalendarAssignment {
  id: string;
  date: string;
  roommate: string;
  created_at: string;
}

export const ROOMMATES = ["Alex", "Fang", "Richie", "Xavier"] as const;
export type Roommate = (typeof ROOMMATES)[number];
