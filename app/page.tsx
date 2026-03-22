import { CalendarContainer } from "@/components/calendar-container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Roommate Calendar - Trash Schedule
          </h1>
          <p className="text-muted-foreground">
            Click on a day to assign trash duty
          </p>
        </header>
        <CalendarContainer />
      </div>
    </main>
  );
}
