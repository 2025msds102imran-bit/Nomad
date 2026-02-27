export const users = [
  { id: 1, name: "Sarah Mitchell", email: "sarah.mitchell@gmail.com", role: "candidate", avatar: "SM", status: "Active" },
  { id: 2, name: "James Chen", email: "james.chen@outlook.com", role: "candidate", avatar: "JC", status: "Active" },
  { id: 3, name: "Maria Garcia", email: "maria.garcia@yahoo.com", role: "candidate", avatar: "MG", status: "Interview" },
  { id: 4, name: "Alex Kim", email: "alex.kim@proton.me", role: "candidate", avatar: "AK", status: "Active" },
  { id: 5, name: "Emma Wilson", email: "emma.wilson@gmail.com", role: "candidate", avatar: "EW", status: "Hired" },
  { id: 6, name: "David Brown", email: "david.brown@company.co", role: "candidate", avatar: "DB", status: "Under Review" },
  { id: 7, name: "Sophie Taylor", email: "sophie.t@hotmail.com", role: "candidate", avatar: "ST", status: "Active" },
  { id: 8, name: "Ryan Patel", email: "ryan.patel@gmail.com", role: "candidate", avatar: "RP", status: "Offer Sent" },
];

export const recruiters = [
  { id: 1, name: "TechRecruit Ltd", email: "hello@techrecruit.io", placements: 47, rating: 4.8, status: "Verified", speciality: "Engineering" },
  { id: 2, name: "DesignHire Co", email: "team@designhire.com", placements: 32, rating: 4.6, status: "Verified", speciality: "Design & UX" },
  { id: 3, name: "PM Talent Agency", email: "info@pmtalent.co", placements: 28, rating: 4.9, status: "Verified", speciality: "Product Management" },
  { id: 4, name: "CloudHire", email: "recruit@cloudhire.dev", placements: 63, rating: 4.7, status: "Verified", speciality: "DevOps & Cloud" },
  { id: 5, name: "FinanceFirst", email: "jobs@financefirst.uk", placements: 19, rating: 4.5, status: "Pending", speciality: "Finance" },
  { id: 6, name: "GlobalStaff Inc", email: "contact@globalstaff.com", placements: 85, rating: 4.4, status: "Verified", speciality: "General" },
];

export const companies = [
  { id: 1, name: "Stripe", industry: "Fintech", location: "San Francisco, US", openRoles: 5, logo: "S" },
  { id: 2, name: "Notion", industry: "Productivity", location: "New York, US", openRoles: 3, logo: "N" },
  { id: 3, name: "Figma", industry: "Design Tools", location: "Remote", openRoles: 7, logo: "F" },
  { id: 4, name: "Vercel", industry: "Developer Tools", location: "Remote", openRoles: 4, logo: "V" },
  { id: 5, name: "Linear", industry: "Project Management", location: "London, UK", openRoles: 2, logo: "L" },
  { id: 6, name: "Coinbase", industry: "Crypto", location: "Remote", openRoles: 8, logo: "C" },
];

export const jobs = [
  { id: 1, title: "Senior React Developer", company: "Stripe", location: "Remote", budget: "$8,000 - $12,000", candidates: 5, status: "Active", posted: "Feb 20, 2026" },
  { id: 2, title: "Product Manager", company: "Notion", location: "London, UK", budget: "$6,000 - $10,000", candidates: 3, status: "Active", posted: "Feb 18, 2026" },
  { id: 3, title: "UX Designer", company: "Figma", location: "New York, US", budget: "$5,000 - $8,000", candidates: 7, status: "Active", posted: "Feb 15, 2026" },
  { id: 4, title: "DevOps Engineer", company: "Vercel", location: "Berlin, DE", budget: "$7,000 - $11,000", candidates: 2, status: "Draft", posted: "Feb 14, 2026" },
  { id: 5, title: "Full Stack Engineer", company: "Linear", location: "Remote", budget: "$9,000 - $14,000", candidates: 6, status: "Active", posted: "Feb 12, 2026" },
  { id: 6, title: "Data Scientist", company: "Coinbase", location: "San Francisco, US", budget: "$10,000 - $15,000", candidates: 4, status: "Active", posted: "Feb 10, 2026" },
  { id: 7, title: "iOS Developer", company: "Stripe", location: "Remote", budget: "$7,500 - $11,000", candidates: 1, status: "Closed", posted: "Feb 5, 2026" },
  { id: 8, title: "Marketing Lead", company: "Notion", location: "New York, US", budget: "$5,000 - $9,000", candidates: 3, status: "Active", posted: "Feb 3, 2026" },
];

export const candidates = [
  { id: 1, name: "Sarah Mitchell", role: "UX Designer", recruiter: "DesignHire Co", fee: "$6,500", status: "Under Review", experience: "5 years", location: "New York, US" },
  { id: 2, name: "James Chen", role: "Senior React Developer", recruiter: "TechRecruit Ltd", fee: "$10,000", status: "Interview", experience: "7 years", location: "Remote" },
  { id: 3, name: "Maria Garcia", role: "Product Manager", recruiter: "PM Talent Agency", fee: "$8,000", status: "Offer Sent", experience: "6 years", location: "London, UK" },
  { id: 4, name: "Alex Kim", role: "DevOps Engineer", recruiter: "CloudHire", fee: "$9,500", status: "Under Review", experience: "4 years", location: "Berlin, DE" },
  { id: 5, name: "Emma Wilson", role: "Full Stack Engineer", recruiter: "TechRecruit Ltd", fee: "$11,000", status: "Hired", experience: "8 years", location: "Remote" },
  { id: 6, name: "David Brown", role: "Data Scientist", recruiter: "GlobalStaff Inc", fee: "$12,000", status: "Under Review", experience: "5 years", location: "San Francisco, US" },
  { id: 7, name: "Sophie Taylor", role: "iOS Developer", recruiter: "TechRecruit Ltd", fee: "$9,000", status: "Interview", experience: "4 years", location: "Remote" },
  { id: 8, name: "Ryan Patel", role: "Marketing Lead", recruiter: "GlobalStaff Inc", fee: "$7,500", status: "Offer Sent", experience: "6 years", location: "New York, US" },
];

export const payments = [
  { id: 1, description: "Full Stack Engineer - Emma Wilson", amount: "$11,000", date: "Feb 25, 2026", status: "Completed", type: "out" },
  { id: 2, description: "UX Designer - Sarah Mitchell", amount: "$6,500", date: "Feb 22, 2026", status: "In Escrow", type: "escrow" },
  { id: 3, description: "Product Manager - Maria Garcia", amount: "$8,000", date: "Feb 18, 2026", status: "In Escrow", type: "escrow" },
  { id: 4, description: "Senior React Developer - James Chen", amount: "$10,000", date: "Feb 15, 2026", status: "Completed", type: "out" },
  { id: 5, description: "DevOps Engineer - Alex Kim", amount: "$9,500", date: "Feb 10, 2026", status: "In Escrow", type: "escrow" },
  { id: 6, description: "iOS Developer - Sophie Taylor", amount: "$9,000", date: "Feb 5, 2026", status: "Completed", type: "out" },
  { id: 7, description: "Data Scientist - David Brown", amount: "$12,000", date: "Feb 1, 2026", status: "Refunded", type: "refund" },
];

export const recentActivity = [
  { id: 1, action: "New candidate submitted", detail: "Senior React Developer - by TechRecruit Ltd", time: "2 hours ago" },
  { id: 2, action: "Payment released", detail: "$11,000 for Full Stack Engineer placement", time: "5 hours ago" },
  { id: 3, action: "Job posted", detail: "Marketing Lead - New York, US", time: "1 day ago" },
  { id: 4, action: "Offer accepted", detail: "UX Designer - Sarah Mitchell", time: "2 days ago" },
  { id: 5, action: "Interview scheduled", detail: "James Chen - Senior React Developer", time: "2 days ago" },
  { id: 6, action: "New recruiter joined", detail: "FinanceFirst applied for verification", time: "3 days ago" },
  { id: 7, action: "Candidate withdrawn", detail: "iOS Developer role - by applicant request", time: "4 days ago" },
  { id: 8, action: "Payment held in escrow", detail: "$9,500 for DevOps Engineer placement", time: "5 days ago" },
];

export const stats = {
  activeJobs: 12,
  totalCandidates: 48,
  pendingPayments: "$24,500",
  successRate: "94%",
  totalPaid: "$30,000",
  inEscrow: "$24,000",
  totalTransactions: 7,
  activeRecruiters: 6,
};
