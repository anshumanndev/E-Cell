export function downloadCalendarInvite() {
  const eventDetails = {
    title: "ILLUMINATE 2026 — E-Cell UIT Conclave",
    description: "UNPLUG. INNOVATE. BREAK. Empowering the Next Generation of Changemakers. Premier entrepreneurship & startup conclave at United Institute of Technology, Prayagraj.",
    location: "Auditorium Complex, United Institute of Technology, Prayagraj, UP 211010",
    startTime: "20260930T090000Z",
    endTime: "20260930T180000Z"
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//E-Cell UIT//ILLUMINATE 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${eventDetails.title}`,
    `DESCRIPTION:${eventDetails.description}`,
    `LOCATION:${eventDetails.location}`,
    `DTSTART:${eventDetails.startTime}`,
    `DTEND:${eventDetails.endTime}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "ILLUMINATE-2026-Calendar.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
