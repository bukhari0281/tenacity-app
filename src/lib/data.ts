import {
  FileText,
  Presentation,
  FlaskConical,
  GraduationCap,
  Code,
  BarChart3,
  Palette,
  Video,
  Calculator,
  LucideIcon,
  Lock,
  RefreshCw,
  Headphones,
  Zap,
} from "lucide-react";

// Navigation Items
export const navItems = [
  { id: "home", label: "Beranda", href: "#home" },
  { id: "services", label: "Layanan", href: "#services" },
  { id: "features", label: "Keunggulan", href: "#features" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "contact", label: "Kontak", href: "#contact" },
];

// Mobile Navigation Items
export const mobileNavItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Layanan", href: "#services" },
  { id: "chat", label: "Chat", href: "#contact", isCenter: true },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "profile", label: "Info", href: "#features" },
];

// Stats Data
export const statsData = [
  {
    id: "satisfaction",
    number: 100,
    suffix: "%",
    label: "Tingkat Kepuasan",
    subtext: "Dari ribuan pelanggan",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "experience",
    number: 12,
    suffix: "+",
    label: "Tahun Pengalaman",
    subtext: "Melayani mahasiswa",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "tasks",
    number: 20000,
    suffix: "+",
    label: "Tugas Selesai",
    subtext: "Dan terus bertambah",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: "categories",
    number: 90,
    suffix: "+",
    label: "Mata Kuliah",
    subtext: "Berbagai jurusan",
    color: "from-blue-400 to-cyan-500",
  },
];

// Services Data
export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const servicesData: ServiceItem[] = [
  {
    id: "essay",
    name: "Essay & Makalah",
    description: "Berbagai topik dan format penulisan akademik",
    icon: FileText,
  },
  {
    id: "ppt",
    name: "Presentasi PPT",
    description: "Desain slide profesional dan engaging",
    icon: Presentation,
  },
  {
    id: "lab",
    name: "Laporan Praktikum",
    description: "Lab report lengkap dengan analisis data",
    icon: FlaskConical,
  },
  {
    id: "thesis",
    name: "Skripsi & Thesis",
    description: "Bimbingan dan pengerjaan tugas akhir",
    icon: GraduationCap,
  },
  {
    id: "coding",
    name: "Coding & Programming",
    description: "Java, Python, C++, Web Development, dll",
    icon: Code,
  },
  {
    id: "data",
    name: "Analisis Data",
    description: "SPSS, Excel, R, Python untuk statistik",
    icon: BarChart3,
  },
  {
    id: "design",
    name: "Desain Grafis",
    description: "Poster, infografis, ilustrasi",
    icon: Palette,
  },
  {
    id: "video",
    name: "Video Editing",
    description: "Editing profesional untuk project kuliah",
    icon: Video,
  },
  {
    id: "math",
    name: "Tugas Matematika",
    description: "Kalkulus, statistik, aljabar, dll",
    icon: Calculator,
  },
];

// Features Section 1 Data
export const featuresAlternating = [
  {
    id: "quality",
    badge: "Quality First",
    title: "Kualitas yang Bisa Diandalkan",
    points: [
      "Dikerjakan oleh ahli sesuai bidang studi",
      "Plagiarism check dengan Turnitin",
      "Proofread & grammar check menyeluruh",
      "Format sesuai guideline kampus",
    ],
    link: { text: "Lihat Contoh Hasil →", href: "#" },
    imagePosition: "right" as const,
    image: "/features/quality.png",
  },
  {
    id: "ontime",
    badge: "On-Time Delivery",
    title: "Deadline? Kami Jago Kelola Waktu",
    points: [
      "Garansi selesai sebelum deadline",
      "Real-time progress tracking",
      "Rush order untuk tugas urgent",
      "Reminder H-1 sebelum deadline",
    ],
    link: { text: "Cek Estimasi Waktu →", href: "#" },
    imagePosition: "left" as const,
    image: "/features/ontime.png",
  },
  {
    id: "affordable",
    badge: "Fair Pricing",
    title: "Harga Ramah Kantong Mahasiswa",
    points: [
      "Harga mulai dari 50K",
      "Sistem pembayaran fleksibel (DP/full)",
      "Diskon untuk repeat order",
      "Paket bundling untuk hemat",
    ],
    link: { text: "Lihat Harga →", href: "#" },
    imagePosition: "right" as const,
    image: "/features/affordable.png",
  },
];

// Features Section 2 Grid Data
export interface FeatureGridItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export const featuresGrid: FeatureGridItem[] = [
  {
    id: "privacy",
    icon: Lock,
    title: "100% Confidential",
    description: "Data kamu aman dan tidak akan dibagikan ke pihak manapun",
    points: ["End-to-end encryption", "Private communication", "No data retention"],
  },
  {
    id: "revision",
    icon: RefreshCw,
    title: "Revisi Sampai Puas",
    description: "Kami revisi sampai kamu benar-benar satisfied",
    points: ["Unlimited minor revision", "Fast revision turnaround", "No additional charge"],
  },
  {
    id: "support",
    icon: Headphones,
    title: "Always Available",
    description: "CS kami siap bantu kapanpun kamu butuh",
    points: ["Response time < 5 menit", "Friendly & helpful", "Konsultasi gratis"],
  },
  {
    id: "simple",
    icon: Zap,
    title: "Simpel & Cepat",
    description: "3 langkah aja dan tugas kamu kelar",
    points: ["Chat via WhatsApp", "Kirim requirements", "Terima hasil, done!"],
  },
];

// FAQ Data
export const faqData = [
  {
    id: "faq-1",
    question: "Bagaimana cara memesan?",
    answer:
      "Hubungi via WhatsApp → Kirim detail tugas → Dapat quotation → Bayar DP/Full → Kami kerjakan → Revisi jika perlu → Selesai!",
  },
  {
    id: "faq-2",
    question: "Berapa lama waktu pengerjaan?",
    answer:
      "Tergantung kompleksitas. Essay 500 kata: 1-2 hari. PPT 10 slide: 1 hari. Coding project: 3-7 hari. Rush order available!",
  },
  {
    id: "faq-3",
    question: "Apakah aman dan terjaga kerahasiaannya?",
    answer:
      "100% confidential. Kami tidak menyimpan data personal dan menggunakan enkripsi untuk semua komunikasi.",
  },
  {
    id: "faq-4",
    question: "Bagaimana sistem pembayaran?",
    answer: "Transfer bank, e-wallet (GoPay, OVO, DANA), atau QRIS. Bisa DP 50% atau full payment.",
  },
  {
    id: "faq-5",
    question: "Apakah ada garansi revisi?",
    answer: "Ya! Unlimited minor revision hingga kamu puas (sesuai brief awal).",
  },
  {
    id: "faq-6",
    question: "Mata kuliah apa saja yang bisa dikerjakan?",
    answer: "90+ kategori: Teknik, Ekonomi, Hukum, Kedokteran, Psikologi, IT, Desain, dan lainnya.",
  },
  {
    id: "faq-7",
    question: "Bisa urgent/rush order?",
    answer: "Bisa! Untuk deadline < 24 jam ada additional charge.",
  },
  {
    id: "faq-8",
    question: "Bagaimana jika hasil tidak sesuai?",
    answer:
      "Kami revisi gratis. Jika tetap tidak sesuai (sangat jarang), ada money-back guarantee.",
  },
  {
    id: "faq-9",
    question: "Apakah bisa konsultasi dulu?",
    answer: "Tentu! Konsultasi gratis tanpa biaya. Chat aja langsung.",
  },
  {
    id: "faq-10",
    question: "Berapa minimal pemesanan?",
    answer: "Mulai dari 50K untuk tugas sederhana.",
  },
];

// Footer Links
export const footerLinks = {
  services: [
    { label: "Essay & Makalah", href: "#services" },
    { label: "Presentasi PPT", href: "#services" },
    { label: "Laporan Praktikum", href: "#services" },
    { label: "Skripsi & Thesis", href: "#services" },
    { label: "Coding & Programming", href: "#services" },
    { label: "Semua Layanan →", href: "#services" },
  ],
  company: [
    { label: "Beranda", href: "#home" },
    { label: "Layanan", href: "#services" },
    { label: "Keunggulan", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#contact" },
  ],
  legal: [
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
};

// Social Links
export const socialLinks = [
  { id: "instagram", label: "Instagram", href: "#", icon: "instagram" },
  { id: "twitter", label: "Twitter", href: "#", icon: "twitter" },
  { id: "linkedin", label: "LinkedIn", href: "#", icon: "linkedin" },
  { id: "tiktok", label: "TikTok", href: "#", icon: "tiktok" },
];

// Pricelist Data
export interface PricelistItem {
  name: string;
  price?: string;
  details?: string;
  isFeatured?: boolean;
  features?: string[];
}

export interface PricelistCategory {
  title: string;
  items: PricelistItem[];
}

export const pricelistData: PricelistCategory[] = [
  {
    title: "Tugas",
    items: [
      { name: "Makalah", price: "Rp 15.000", details: "per lembar" },
      { name: "Proposal Penelitian Semester", price: "Rp 17.000", details: "per lembar" },
      { name: "Essay", price: "Rp 18.000", details: "per lembar" },
      { name: "Jurnal/Artikel", price: "Rp 18.000", details: "per lembar" },
      { name: "PPT", price: "Rp 7.000", details: "per slide" },
    ],
  },
  {
    title: "Skripsi",
    items: [
      {
        name: "Basic: 1 BAB",
        price: "Rp 550.000",
        details: "per BAB",
        features: ["Free 1x revisi"],
      },
      {
        name: "Gold: 3 BAB (Sempro)",
        price: "Rp 1.500.000",
        details: "Paket 3 BAB",
        features: ["Free 3x revisi", "Setara Rp 500.000/bab"],
        isFeatured: true,
      },
      {
        name: "Platinum: 5 BAB (Semhas)",
        price: "Rp 2.000.000",
        details: "Paket Lengkap",
        features: ["Free 4x revisi", "Setara Rp 400.000/bab"],
      },
    ],
  },
  {
    title: "Publikasi Jurnal",
    items: [
      { name: "Sinta 6 (Paket Bersih)", price: "Rp 1.000.000", details: "Pembuatan & Publikasi" },
      { name: "Sinta 5 (Paket Bersih)", price: "Rp 1.400.000", details: "Pembuatan & Publikasi" },
      {
        name: "Sinta 4 (Paket Bersih)",
        price: "Rp 2.000.000",
        details: "Pembuatan jurnal + publikasi",
      },
    ],
  },
  {
    title: "Tesis",
    items: [
      { name: "Pengerjaan Tesis", price: "Hubungi Kami", details: "Custom brief & analisis data" },
    ],
  },
  {
    title: "Teknologi Informasi",
    items: [
      {
        name: "Web Development (Fullstack / Frontend / Backend)",
        price: "Hubungi Kami",
        details: "React, Next.js, Laravel, PHP, Express/Node.js, dll.",
      },
      {
        name: "Mobile App Development",
        price: "Hubungi Kami",
        details: "Flutter, React Native, Native Android (Java/Kotlin), Swift.",
      },
      {
        name: "Desktop Application",
        price: "Hubungi Kami",
        details: "Java (Swing/JavaFX), C# (.NET), Python (PyQt/Tkinter), C++.",
      },
      {
        name: "Machine Learning, AI & Data Science",
        price: "Hubungi Kami",
        details: "Python, Model Training (TensorFlow/PyTorch), Jupyter Notebook, OpenCV.",
      },
      {
        name: "Database Design & SQL Query",
        price: "Hubungi Kami",
        details: "MySQL, PostgreSQL, MongoDB, ERD Design, Query Optimization.",
      },
      {
        name: "Bug Fixing & Code Optimization",
        price: "Hubungi Kami",
        details: "Perbaikan error program, integrasi API, refactoring kode.",
      },
    ],
  },
];
