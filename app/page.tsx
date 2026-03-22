import { CalendarContainer } from "@/components/calendar-container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-2 py-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">
            <span className="hidden sm:inline">Roommate Calendar - </span>
            <span>Trash Schedule</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Tap a day to assign trash duty
          </p>
        </header>
        <CalendarContainer />
      </div>
    </main>
  );
}
