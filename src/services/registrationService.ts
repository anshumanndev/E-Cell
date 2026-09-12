import { RegistrationSubmission } from '../types';

const STORAGE_KEY = 'illuminate_registrations_v1';

const INITIAL_SEED: RegistrationSubmission[] = [
  {
    id: "reg-101",
    registrationId: "ILLUM-2026-8491",
    fullName: "Arpita Mishra",
    email: "arpita.m@example.com",
    phone: "+91 98765 43210",
    college: "United Institute of Technology",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    city: "Prayagraj",
    interests: ["Entrepreneurship", "Innovation", "Technology"],
    projectTitle: "AI Workflow Agent for Campus Operations",
    teamSize: "1",
    ambassadorCodeUsed: "CA26ZTBUW",
    amountPaid: 699,
    paymentStatus: "Confirmed",
    registeredAt: "2026-09-08T10:14:00Z"
  },
  {
    id: "reg-102",
    registrationId: "ILLUM-2026-9234",
    fullName: "Rohan V. Sharma",
    email: "rohan.sharma@example.com",
    phone: "+91 91234 56789",
    college: "Motilal Nehru National Institute of Technology (MNNIT)",
    course: "B.Tech Mechanical & Product",
    year: "4th Year",
    city: "Prayagraj",
    interests: ["Startup", "Design", "Leadership"],
    projectTitle: "Modular Electric Micro-Mobility",
    teamSize: "3",
    ambassadorCodeUsed: "CA26ZTBUW",
    amountPaid: 699,
    paymentStatus: "Confirmed",
    registeredAt: "2026-09-09T14:30:00Z"
  },
  {
    id: "reg-103",
    registrationId: "ILLUM-2026-7712",
    fullName: "Sneha Mukherjee",
    email: "sneha.m@example.com",
    phone: "+91 99887 66554",
    college: "University of Allahabad",
    course: "B.Sc Statistics & Data",
    year: "2nd Year",
    city: "Prayagraj",
    interests: ["Technology", "Marketing", "Networking"],
    projectTitle: "Predictive Analytics for Rural Agri-Fintech",
    teamSize: "2",
    ambassadorCodeUsed: "",
    amountPaid: 799,
    paymentStatus: "Confirmed",
    registeredAt: "2026-09-10T11:45:00Z"
  }
];

export const registrationService = {
  getRegistrations(): RegistrationSubmission[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED));
        return INITIAL_SEED;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_SEED;
    }
  },

  getRegistrationById(idOrRegId: string): RegistrationSubmission | null {
    const list = this.getRegistrations();
    return list.find(r => r.id === idOrRegId || r.registrationId === idOrRegId) || null;
  },

  submitRegistration(data: Omit<RegistrationSubmission, 'id' | 'registrationId' | 'registeredAt'>): RegistrationSubmission {
    const list = this.getRegistrations();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newRecord: RegistrationSubmission = {
      ...data,
      id: 'reg-' + Date.now(),
      registrationId: `ILLUM-2026-${randomSuffix}`,
      registeredAt: new Date().toISOString()
    };
    
    const updated = [newRecord, ...list];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save registration locally", e);
    }
    return newRecord;
  },

  deleteRegistration(id: string): void {
    const list = this.getRegistrations().filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  },

  exportToCSV(): void {
    const list = this.getRegistrations();
    if (list.length === 0) return;

    const headers = [
      "Registration ID",
      "Full Name",
      "Email",
      "Phone",
      "College",
      "Course",
      "Year",
      "City",
      "Interests",
      "Project Title",
      "Ambassador Code",
      "Amount Paid (INR)",
      "Payment Status",
      "Date Registered"
    ];

    const rows = list.map(item => [
      `"${item.registrationId}"`,
      `"${item.fullName.replace(/"/g, '""')}"`,
      `"${item.email}"`,
      `"${item.phone}"`,
      `"${item.college.replace(/"/g, '""')}"`,
      `"${item.course.replace(/"/g, '""')}"`,
      `"${item.year}"`,
      `"${item.city}"`,
      `"${item.interests.join(', ')}"`,
      `"${(item.projectTitle || '').replace(/"/g, '""')}"`,
      `"${item.ambassadorCodeUsed || 'NONE'}"`,
      item.amountPaid,
      `"${item.paymentStatus}"`,
      `"${item.registeredAt}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ECell_IlluminatE_Registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
