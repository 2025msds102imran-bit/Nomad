export const currentUser = {
  name: "John",
  fullName: "John Doe",
  email: "john@nomad.io",
  company: "Recruiter Company",
  rating: 4.7,
  role: "recruiter",
  avatar: "JD",
};

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
  { id: 1, title: "Senior React Developer", company: "Stripe", location: "Remote", budget: "$8,000 - $12,000", candidates: 5, status: "Active", posted: "Feb 20, 2026", category: "Technology", level: "Expert Level", country: "Netherlands" },
  { id: 2, title: "Product Manager", company: "Notion", location: "London, UK", budget: "$6,000 - $10,000", candidates: 3, status: "Active", posted: "Feb 18, 2026", category: "Technology", level: "Mid Level", country: "United Kingdom" },
  { id: 3, title: "UX Designer", company: "Figma", location: "New York, US", budget: "$5,000 - $8,000", candidates: 7, status: "Active", posted: "Feb 15, 2026", category: "Marketing", level: "Mid Level", country: "Netherlands" },
  { id: 4, title: "DevOps Engineer", company: "Vercel", location: "Berlin, DE", budget: "$7,000 - $11,000", candidates: 2, status: "Draft", posted: "Feb 14, 2026", category: "Technology", level: "Expert Level", country: "Germany" },
  { id: 5, title: "Full Stack Engineer", company: "Linear", location: "Remote", budget: "$9,000 - $14,000", candidates: 6, status: "Active", posted: "Feb 12, 2026", category: "Technology", level: "Mid Level", country: "Netherlands" },
  { id: 6, title: "Data Scientist", company: "Coinbase", location: "San Francisco, US", budget: "$10,000 - $15,000", candidates: 4, status: "Active", posted: "Feb 10, 2026", category: "Technology", level: "Entry Level", country: "Germany" },
  { id: 7, title: "iOS Developer", company: "Stripe", location: "Remote", budget: "$7,500 - $11,000", candidates: 1, status: "Closed", posted: "Feb 5, 2026", category: "Technology", level: "Mid Level", country: "France" },
  { id: 8, title: "Marketing Lead", company: "Notion", location: "New York, US", budget: "$5,000 - $9,000", candidates: 3, status: "Active", posted: "Feb 3, 2026", category: "Marketing", level: "Expert Level", country: "Netherlands" },
  { id: 9, title: "Financial Analyst", company: "Stripe", location: "Amsterdam, NL", budget: "$6,000 - $9,000", candidates: 2, status: "Active", posted: "Feb 1, 2026", category: "Finance", level: "Entry Level", country: "Netherlands" },
  { id: 10, title: "Sales Manager", company: "Vercel", location: "Paris, FR", budget: "$5,500 - $8,500", candidates: 1, status: "Active", posted: "Jan 28, 2026", category: "Sales", level: "Mid Level", country: "France" },
  { id: 11, title: "Operations Coordinator", company: "Linear", location: "Brussels, BE", budget: "$4,000 - $6,000", candidates: 3, status: "Active", posted: "Jan 25, 2026", category: "Operations", level: "Entry Level", country: "Belgium" },
  { id: 12, title: "Finance Director", company: "Coinbase", location: "Amsterdam, NL", budget: "$12,000 - $18,000", candidates: 1, status: "Active", posted: "Jan 22, 2026", category: "Finance", level: "Expert Level", country: "Netherlands" },
];

export const candidates = [
  { id: 1, name: "Sarah Mitchell", role: "UX Designer", recruiter: "DesignHire Co", fee: "$6,500", status: "Under Review", experience: "5 years", location: "New York, US", expectedSalary: "$65k" },
  { id: 2, name: "James Chen", role: "Senior React Developer", recruiter: "TechRecruit Ltd", fee: "$10,000", status: "Interview", experience: "7 years", location: "Remote", expectedSalary: "$95k" },
  { id: 3, name: "Maria Garcia", role: "Product Manager", recruiter: "PM Talent Agency", fee: "$8,000", status: "Offer Sent", experience: "6 years", location: "London, UK", expectedSalary: "$80k" },
  { id: 4, name: "Alex Kim", role: "DevOps Engineer", recruiter: "CloudHire", fee: "$9,500", status: "Under Review", experience: "4 years", location: "Berlin, DE", expectedSalary: "$72k" },
  { id: 5, name: "Emma Wilson", role: "Full Stack Engineer", recruiter: "TechRecruit Ltd", fee: "$11,000", status: "Hired", experience: "8 years", location: "Remote", expectedSalary: "$110k" },
  { id: 6, name: "David Brown", role: "Data Scientist", recruiter: "GlobalStaff Inc", fee: "$12,000", status: "Under Review", experience: "5 years", location: "San Francisco, US", expectedSalary: "$92k" },
  { id: 7, name: "Sophie Taylor", role: "iOS Developer", recruiter: "TechRecruit Ltd", fee: "$9,000", status: "Interview", experience: "4 years", location: "Remote", expectedSalary: "$78k" },
  { id: 8, name: "Ryan Patel", role: "Marketing Lead", recruiter: "GlobalStaff Inc", fee: "$7,500", status: "Offer Sent", experience: "6 years", location: "New York, US", expectedSalary: "$70k" },
];

export const payments = [
  { id: 1, description: "Full Stack Engineer - Emma Wilson", amount: "$11,000", rawAmount: 11000, date: "Feb 25, 2026", status: "Completed", type: "out" },
  { id: 2, description: "UX Designer - Sarah Mitchell", amount: "$6,500", rawAmount: 6500, date: "Feb 22, 2026", status: "In Escrow", type: "escrow" },
  { id: 3, description: "Product Manager - Maria Garcia", amount: "$8,000", rawAmount: 8000, date: "Feb 18, 2026", status: "In Escrow", type: "escrow" },
  { id: 4, description: "Senior React Developer - James Chen", amount: "$10,000", rawAmount: 10000, date: "Feb 15, 2026", status: "Completed", type: "out" },
  { id: 5, description: "DevOps Engineer - Alex Kim", amount: "$9,500", rawAmount: 9500, date: "Feb 10, 2026", status: "In Escrow", type: "escrow" },
  { id: 6, description: "iOS Developer - Sophie Taylor", amount: "$9,000", rawAmount: 9000, date: "Feb 5, 2026", status: "Completed", type: "out" },
  { id: 7, description: "Data Scientist - David Brown", amount: "$12,000", rawAmount: 12000, date: "Feb 1, 2026", status: "Refunded", type: "refund" },
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

export const placements = [
  { id: 1, candidateName: "Sarah Johnson", role: "Senior Developer", company: "TechCorp", salary: "$80K", time: "2h ago", status: "In Progress" },
  { id: 2, candidateName: "Sarah", role: "Data Scientist", company: "AI Labs", salary: "$80K", time: "2h ago", status: "Completed" },
  { id: 3, candidateName: "Michelle", role: "Product Manager", company: "InnovateTech", salary: "$80K", time: "2h ago", status: "Completed" },
  { id: 4, candidateName: "John", role: "Data Scientist", company: "DesignHub", salary: "$80K", time: "2h ago", status: "In Progress" },
  { id: 5, candidateName: "Sarah Micheal", role: "Senior Developer", company: "CloudTech", salary: "$80K", time: "2h ago", status: "In Progress" },
  { id: 6, candidateName: "Doe", role: "Data Scientist", company: "WebSolutions", salary: "$80K", time: "2h ago", status: "Completed" },
  { id: 7, candidateName: "Jack", role: "Senior Developer", company: "ServerPro", salary: "$80K", time: "2h ago", status: "In Progress" },
];

export const interviews = [
  { id: 1, candidateName: "Sarah Johnson", initials: "SJ", avatarColor: "bg-indigo-500", date: "Fri, Nov 21", time: "02:00:00 - 03:00:00", status: "Scheduled" },
  { id: 2, candidateName: "Michael Chen", initials: "MC", avatarColor: "bg-pink-500", date: "Fri, Nov 21", time: "02:00:00 - 03:00:00", status: "Scheduled" },
  { id: 3, candidateName: "Emma Wilson", initials: "EW", avatarColor: "bg-emerald-500", date: "Fri, Nov 21", time: "02:00:00 - 03:00:00", status: "Scheduled" },
  { id: 4, candidateName: "James Brown", initials: "JB", avatarColor: "bg-amber-500", date: "Sat, Nov 22", time: "10:00:00 - 11:00:00", status: "Scheduled" },
  { id: 5, candidateName: "Lisa Wong", initials: "LW", avatarColor: "bg-violet-500", date: "Mon, Nov 24", time: "14:00:00 - 15:00:00", status: "Scheduled" },
];

export const performanceMetrics = [
  { label: "Response Time", value: 85, color: "bg-indigo-500", textColor: "text-indigo-500", shadow: "shadow-[0_0_10px_rgba(99,102,241,0.25)]" },
  { label: "Quality", value: 92, color: "bg-emerald-500", textColor: "text-emerald-500", shadow: "shadow-[0_0_10px_rgba(16,185,129,0.25)]" },
  { label: "Satisfaction", value: 88, color: "bg-pink-500", textColor: "text-pink-500", shadow: "shadow-[0_0_10px_rgba(236,72,153,0.25)]" },
  { label: "Speed", value: 78, color: "bg-amber-500", textColor: "text-amber-500", shadow: "shadow-[0_0_10px_rgba(245,158,11,0.25)]" },
];

export const revenueData = [
  { month: "Jan", value: 32000 },
  { month: "Feb", value: 35000 },
  { month: "Mar", value: 34000 },
  { month: "Apr", value: 42000 },
  { month: "May", value: 39000 },
  { month: "Jun", value: 58000 },
];

export const topCountries = [
  { flag: "🇳🇱", name: "Netherlands", code: "NL", growthPct: "+18%" },
  { flag: "🇩🇪", name: "Germany", code: "DE", growthPct: "+12%" },
  { flag: "🇬🇧", name: "United Kingdom", code: "GB", growthPct: "+8%" },
  { flag: "🇫🇷", name: "France", code: "FR", growthPct: "+15%" },
  { flag: "🇧🇪", name: "Belgium", code: "BE", growthPct: "+6%" },
];

export const dashboardActivity = [
  { id: 1, text: "New placement: Alex Thompson at TechCorp", time: "5 min ago" },
  { id: 2, text: "Interview scheduled with Maria Garcia", time: "23 min ago" },
  { id: 3, text: "Offer accepted by James Brown", time: "1 hour ago" },
  { id: 4, text: "12 new applications received", time: "2 hours ago" },
];

export const vacancyCards = [
  {
    id: 1,
    company: "Company 1",
    rating: 4,
    location: "Pakwan Cross Road, Bodakdev, Ahmedabad, Gujarat, India (5.1 km)",
    salary: "$1200",
    title: "QA - Mid Level / Specialist",
    type: "Fulltime/Partime or Both",
    avatarGradient: "from-indigo-400 to-blue-500",
  },
  {
    id: 2,
    company: "Consultancy Services",
    rating: 4,
    location: "TCS, Gandhinagar, Gujarat, India (54.3 km)",
    salary: "$400",
    title: "Frontend Developer - Intern / Trainee",
    type: "Fulltime/Partime or Both",
    avatarGradient: "from-emerald-400 to-teal-500",
  },
  {
    id: 3,
    company: "Consultancy Services",
    rating: 4,
    location: "TCS, Gandhinagar, Gujarat, India (54.3 km)",
    salary: "$600",
    title: "Backened Developer - Intern / Trainee",
    type: "Fulltime/Partime or Both",
    avatarGradient: "from-pink-400 to-rose-500",
  },
];

export const vacancyStats = [
  { label: "Open Vacancies", value: 47, change: "+5", pct: "12%", iconColor: "#6366F1", bgColor: "bg-indigo-500/10" },
  { label: "Matching Vacancies", value: 29, change: "+156", pct: "14%", iconColor: "#EC4899", bgColor: "bg-pink-500/10" },
  { label: "Active Bids", value: 14, change: "+23", pct: "23%", iconColor: "#10B981", bgColor: "bg-emerald-500/10" },
  { label: "Nearby Jobs", value: 11, change: "+€67K", pct: "15%", iconColor: "#F59E0B", bgColor: "bg-amber-500/10" },
];

export const candidateStats = [
  { label: "Total Candidates", value: 47, change: "+5", pct: "12%", iconColor: "#6366F1", bgColor: "bg-indigo-500/10" },
  { label: "Candidates Submitted", value: 29, change: "+156", pct: "14%", iconColor: "#EC4899", bgColor: "bg-pink-500/10" },
  { label: "Active Interviews", value: 11, change: "+€67K", pct: "15%", iconColor: "#10B981", bgColor: "bg-emerald-500/10" },
  { label: "Under Review", value: 14, change: "+23", pct: "23%", iconColor: "#F59E0B", bgColor: "bg-amber-500/10" },
];

export const candidateTableData = [
  { id: 1, jobName: "Frontend Developer", candidateName: "Teja Patel", seen: false, spoke: false, timePeriod: "Fulltime", hourlyPrice: "$600", hiringPrice: "$600", expectedSalary: "$600", description: "A front-end developer is" },
  { id: 2, jobName: "Frontend Developer", candidateName: "Teja Patel", seen: false, spoke: false, timePeriod: "Parttime", hourlyPrice: "$600", hiringPrice: "$600", expectedSalary: "$600", description: "A front-end developer is" },
  { id: 3, jobName: "Frontend Developer", candidateName: "Teja Patel", seen: false, spoke: false, timePeriod: "Fulltime", hourlyPrice: "$600", hiringPrice: "$600", expectedSalary: "$600", description: "A front-end developer is" },
  { id: 4, jobName: "Frontend Developer", candidateName: "Teja Patel", seen: false, spoke: false, timePeriod: "Parttime", hourlyPrice: "$600", hiringPrice: "$600", expectedSalary: "$600", description: "A front-end developer is" },
  { id: 5, jobName: "Frontend Developer", candidateName: "Teja Patel", seen: false, spoke: false, timePeriod: "Fulltime", hourlyPrice: "$600", hiringPrice: "$600", expectedSalary: "$600", description: "A front-end developer is" },
  { id: 6, jobName: "Frontend Developer", candidateName: "Teja Patel", seen: false, spoke: false, timePeriod: "Parttime", hourlyPrice: "$600", hiringPrice: "$600", expectedSalary: "$600", description: "A front-end developer is" },
];

export const myBids = [
  { id: 1, title: "Senior Backend Developer", bidder: "John Doe", company: "TechCorp Netherlands", rating: 4, type: "fulltime", hours: 40, amount: "€4,500", rawAmount: 4500, status: "Pending" },
  { id: 2, title: "Data Scientist", bidder: "Sara", company: "Analytics Pro", rating: 4, type: "fulltime", hours: 40, amount: "€5,800", rawAmount: 5800, status: "Won" },
  { id: 3, title: "DevOps Engineer", bidder: "Johsnon", company: "CloudFirst", rating: 4, type: "fulltime", hours: 40, amount: "€5,200", rawAmount: 5200, status: "Won" },
  { id: 4, title: "Frontend Developer", bidder: "Franklin", company: "WebSolutions Inc", rating: 5, type: "fulltime", hours: 40, amount: "€4,800", rawAmount: 4800, status: "Active" },
  { id: 5, title: "Full Stack Developer", bidder: "Michey", company: "TechStart", rating: 4, type: "fulltime", hours: 40, amount: "€6,200", rawAmount: 6200, status: "Pending" },
];

export const bidStats = [
  { label: "Total Bids", value: 7, change: "+2", pct: "12%", iconColor: "#6366F1", bgColor: "bg-indigo-500/10" },
  { label: "Active Bids", value: 3, change: "+1", pct: "8%", iconColor: "#EC4899", bgColor: "bg-pink-500/10" },
  { label: "Won Bids", value: 2, change: "+1", pct: "15%", iconColor: "#10B981", bgColor: "bg-emerald-500/10" },
  { label: "Pending Bids", value: 1, change: "0", pct: "15%", iconColor: "#F59E0B", bgColor: "bg-amber-500/10" },
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
