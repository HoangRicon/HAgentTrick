"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type TechStack = {
  name: string;
  color: string;
};

type Feature = {
  label: string;
  icon: string;
};

type Project = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: Feature[];
  techStack: TechStack[];
  image: string;
  accentColor: string;
  role: string;
  status: string;
  year: string;
};

const projects: Project[] = [
  {
    id: "quan-ly-xe-ghep",
    name: "XeGhép Pro",
    category: "Transportation",
    tagline: "Kết nối hành khách — Tối ưu lộ trình",
    description:
      "Nền tảng quản lý xe ghép giúp kết nối hành khách có cùng lộ trình, tối ưu hóa việc ghép chuyến, giảm chi phí di chuyển cho người dùng và tăng doanh thu cho nhà xe.",
    features: [
      { label: "Tìm kiếm ghép chuyến theo tuyến", icon: "Search" },
      { label: "Đặt chỗ & thanh toán online", icon: "CreditCard" },
      { label: "Quản lý xe & tài xế", icon: "TruckIcon" },
      { label: "Theo dõi GPS real-time", icon: "MapPin" },
      { label: "Hệ thống đánh giá & xếp hạng", icon: "Star" },
      { label: "Thống kê doanh thu & báo cáo", icon: "BarChart3" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "Socket.io", color: "bg-yellow-500/30 text-yellow-200" },
    ],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1400&q=85",
    accentColor: "amber",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "quan-ly-ban-hang",
    name: "POS Hub",
    category: "Retail",
    tagline: "Bán hàng thông minh — Quản lý dễ dàng",
    description:
      "Hệ thống POS (Point of Sale) toàn diện cho các cửa hàng bán lẻ và nhà hàng. Hỗ trợ bán hàng nhanh, quản lý tồn kho, chương trình khách hàng thân thiết, và tích hợp thanh toán đa kênh.",
    features: [
      { label: "Bán hàng nhanh với POS", icon: "ShoppingCart" },
      { label: "Quản lý tồn kho tự động", icon: "Package" },
      { label: "Chương trình khách hàng thân thiết", icon: "Users" },
      { label: "Tích hợp MoMo, ZaloPay, VNPay", icon: "CreditCard" },
      { label: "Báo cáo doanh thu real-time", icon: "BarChart3" },
      { label: "Quản lý nhân viên & phân quyền", icon: "Settings" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Node.js", color: "bg-green-500/30 text-green-200" },
      { name: "MongoDB", color: "bg-emerald-500/30 text-emerald-200" },
      { name: "REST API", color: "bg-orange-500/30 text-orange-200" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85",
    accentColor: "emerald",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "san-thuong-mai-dien-tu",
    name: "MarketHub",
    category: "E-Commerce",
    tagline: "Sàn thương mại điện tử — Mua bán toàn quốc",
    description:
      "Sàn thương mại điện tử đa nền tảng kết nối người mua và người bán trên toàn quốc. Tích hợp thanh toán an toàn, vận chuyển tích hợp, và hệ thống đánh giá uy tín.",
    features: [
      { label: "Đăng bán & quản lý sản phẩm", icon: "ShoppingBag" },
      { label: "Tìm kiếm & lọc nâng cao", icon: "Search" },
      { label: "Giỏ hàng & thanh toán đa kênh", icon: "CreditCard" },
      { label: "Quản lý đơn hàng & vận chuyển", icon: "TruckIcon" },
      { label: "Kênh người bán & thống kê", icon: "BarChart3" },
      { label: "Chat & hỗ trợ khách hàng", icon: "MessageCircle" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "Stripe", color: "bg-violet-600/30 text-violet-200" },
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=85",
    accentColor: "violet",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "erp-doanh-nghiep",
    name: "ERP Suite",
    category: "Enterprise",
    tagline: "Quản lý doanh nghiệp — Tích hợp toàn diện",
    description:
      "Hệ thống ERP doanh nghiệp tích hợp quản lý nhân sự, tài chính, kho hàng, sản xuất và CRM trên một nền tảng duy nhất. Giúp doanh nghiệp tối ưu quy trình và giảm chi phí vận hành.",
    features: [
      { label: "Quản lý nhân sự & chấm công", icon: "Users" },
      { label: "Quản lý tài chính & kế toán", icon: "CreditCard" },
      { label: "Quản lý kho hàng & sản xuất", icon: "Package" },
      { label: "CRM & quản lý khách hàng", icon: "Building2" },
      { label: "Báo cáo tổng hợp dashboard", icon: "BarChart3" },
      { label: "Phân quyền & quản lý workflow", icon: "Settings" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Node.js", color: "bg-green-500/30 text-green-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "GraphQL", color: "bg-pink-500/30 text-pink-200" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85",
    accentColor: "blue",
    role: "Lead Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "crm-khach-hang",
    name: "CRM Pro",
    category: "CRM",
    tagline: "Chăm sóc khách hàng — Tăng trưởng bền vững",
    description:
      "Hệ thống CRM giúp doanh nghiệp quản lý quan hệ khách hàng, theo dõi cơ hội kinh doanh, tự động hóa marketing và tăng hiệu quả chăm sóc khách hàng.",
    features: [
      { label: "Quản lý danh sách khách hàng", icon: "Users" },
      { label: "Theo dõi cơ hội & pipeline", icon: "BarChart3" },
      { label: "Email marketing tự động", icon: "Mail" },
      { label: "Lịch hẹn & nhắc nhở", icon: "Calendar" },
      { label: "Báo cáo & phân tích doanh thu", icon: "TrendingUp" },
      { label: "Tích hợp điện thoại & chat", icon: "Phone" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "SendGrid", color: "bg-teal-500/30 text-teal-200" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85",
    accentColor: "rose",
    role: "Full-stack Developer",
    status: "Production",
    year: "2023",
  },
  {
    id: "ai-chat-assistant",
    name: "AI Assistant",
    category: "AI",
    tagline: "Trợ lý AI thông minh — Tự động hóa công việc",
    description:
      "Chatbot AI thông minh tích hợp vào website và ứng dụng, hỗ trợ khách hàng 24/7, trả lời câu hỏi, hướng dẫn sử dụng sản phẩm và tự động xử lý yêu cầu cơ bản.",
    features: [
      { label: "Chat AI tự động 24/7", icon: "MessageCircle" },
      { label: "Tích hợp vào website", icon: "Globe" },
      { label: "Hỗ trợ đa ngôn ngữ", icon: "Languages" },
      { label: "Train dữ liệu riêng", icon: "Brain" },
      { label: "Analytics & insights", icon: "BarChart3" },
      { label: "Escalate sang human", icon: "Phone" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "OpenAI API", color: "bg-green-500/30 text-green-200" },
      { name: "Supabase", color: "bg-emerald-500/30 text-emerald-200" },
      { name: "LangChain", color: "bg-orange-500/30 text-orange-200" },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=85",
    accentColor: "cyan",
    role: "AI Integration Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "travel-booking",
    name: "TravelVista",
    category: "Travel",
    tagline: "Khám phá thế giới — Đặt tour dễ dàng",
    description:
      "Nền tảng đặt tour du lịch trực tuyến kết nối du khách với các công ty lữ hành. Hỗ trợ đặt tour trong nước và quốc tế, quản lý lịch trình, đánh giá điểm đến và tích hợp thanh toán an toàn.",
    features: [
      { label: "Tìm kiếm tour & điểm đến", icon: "Search" },
      { label: "Đặt tour trong nước & quốc tế", icon: "Globe" },
      { label: "Quản lý lịch trình chi tiết", icon: "Calendar" },
      { label: "Hệ thống đánh giá & review", icon: "Star" },
      { label: "Tích hợp thanh toán VNPay", icon: "CreditCard" },
      { label: "Blog du lịch & chia sẻ trải nghiệm", icon: "MessageCircle" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "Mapbox", color: "bg-green-500/30 text-green-200" },
    ],
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=85",
    accentColor: "orange",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "hotel-booking",
    name: "StayHub",
    category: "Hospitality",
    tagline: "Đặt phòng khách sạn — Trải nghiệm tuyệt vời",
    description:
      "Nền tảng đặt phòng khách sạn và homestay trực tuyến với hàng ngàn lựa chọn trên toàn quốc. Tích hợp check-in online, quản lý đặt phòng cho chủ khách sạn và hệ thống loyalty program.",
    features: [
      { label: "Tìm kiếm & so sánh giá phòng", icon: "Search" },
      { label: "Đặt phòng trực tuyến 24/7", icon: "Calendar" },
      { label: "Check-in / Check-out online", icon: "CreditCard" },
      { label: "Quản lý cho chủ khách sạn", icon: "Building2" },
      { label: "Chương trình tích điểm thưởng", icon: "Star" },
      { label: "Review & hình ảnh thực tế", icon: "Camera" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Node.js", color: "bg-green-500/30 text-green-200" },
      { name: "MongoDB", color: "bg-emerald-500/30 text-emerald-200" },
      { name: "Stripe", color: "bg-violet-600/30 text-violet-200" },
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=85",
    accentColor: "teal",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "lms-hoc-truc-tuyen",
    name: "EduPro",
    category: "Education",
    tagline: "Học trực tuyến — Kiến thức không giới hạn",
    description:
      "Nền tảng học trực tuyến (LMS) với khóa học đa dạng từ lập trình đến kinh doanh. Tích hợp video bài giảng, bài tập tương tác, chứng chỉ hoàn thành và hệ thống thanh toán học phí.",
    features: [
      { label: "Khóa học video bài giảng", icon: "Play" },
      { label: "Bài tập & quiz tương tác", icon: "CheckCircle2" },
      { label: "Chứng chỉ hoàn thành khóa học", icon: "Award" },
      { label: "Theo dõi tiến độ học tập", icon: "BarChart3" },
      { label: "Thanh toán học phí online", icon: "CreditCard" },
      { label: "Diễn đàn thảo luận & hỏi đáp", icon: "MessageCircle" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "Mux", color: "bg-orange-500/30 text-orange-200" },
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1400&q=85",
    accentColor: "indigo",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "quan-ly-benh-vien",
    name: "MediCare",
    category: "Healthcare",
    tagline: "Quản lý bệnh viện — Chăm sóc sức khỏe",
    description:
      "Hệ thống quản lý bệnh viện toàn diện giúp quản lý hồ sơ bệnh nhân, lịch khám, kê đơn thuốc, quản lý giường bệnh và tích hợp thanh toán bảo hiểm y tế.",
    features: [
      { label: "Quản lý hồ sơ bệnh nhân", icon: "Users" },
      { label: "Đặt lịch khám online", icon: "Calendar" },
      { label: "Kê đơn thuốc điện tử", icon: "FileText" },
      { label: "Quản lý giường bệnh", icon: "Bed" },
      { label: "Tích hợp bảo hiểm y tế", icon: "Shield" },
      { label: "Báo cáo thống kê y tế", icon: "BarChart3" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Node.js", color: "bg-green-500/30 text-green-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "HL7 FHIR", color: "bg-teal-500/30 text-teal-200" },
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=85",
    accentColor: "red",
    role: "Lead Developer",
    status: "Production",
    year: "2023",
  },
  {
    id: "bat-dong-san",
    name: "RealiStay",
    category: "Real Estate",
    tagline: "Bất động sản — Tìm nhà dễ dàng",
    description:
      "Sàn bất động sản kết nối người mua, người bán và môi giới. Hỗ trợ đăng tin, tìm kiếm theo vị trí trên bản đồ, ước tính giá và tích hợp virtual tour 360°.",
    features: [
      { label: "Đăng tin bất động sản", icon: "Home" },
      { label: "Tìm kiếm theo vị trí bản đồ", icon: "MapPin" },
      { label: "Virtual tour 360°", icon: "Camera" },
      { label: "Ước tính giá tự động", icon: "Calculator" },
      { label: "Tính toán khoản vay ngân hàng", icon: "CreditCard" },
      { label: "Môi giới & quản lý lead", icon: "Users" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "Mapbox", color: "bg-green-500/30 text-green-200" },
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=85",
    accentColor: "yellow",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "giao-hang",
    name: "FlashShip",
    category: "Logistics",
    tagline: "Giao hàng nhanh — Giao đến mọi nơi",
    description:
      "Nền tảng giao hàng tích hợp cho các cửa hàng online và doanh nghiệp. Tự động hóa việc tạo đơn, theo dõi giao hàng real-time, tính phí shipping và quản lý fleet tài xế.",
    features: [
      { label: "Tạo đơn giao hàng tự động", icon: "Package" },
      { label: "Theo dõi giao hàng real-time", icon: "MapPin" },
      { label: "Tính phí shipping tự động", icon: "Calculator" },
      { label: "Quản lý fleet tài xế", icon: "TruckIcon" },
      { label: "Tích hợp GHN, GHTK, J&T", icon: "Globe" },
      { label: "Báo cáo & phân tích logistics", icon: "BarChart3" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Node.js", color: "bg-green-500/30 text-green-200" },
      { name: "MongoDB", color: "bg-emerald-500/30 text-emerald-200" },
      { name: "Socket.io", color: "bg-yellow-500/30 text-yellow-200" },
    ],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1400&q=85",
    accentColor: "lime",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "tuyen-dung",
    name: "JobFlow",
    category: "Recruitment",
    tagline: "Tuyển dụng thông minh — Kết nối nhân tài",
    description:
      "Nền tảng tuyển dụng kết nối nhà tuyển dụng với ứng viên. Hỗ trợ đăng tin tuyển dụng, lọc ứng viên bằng AI, lịch phỏng vấn và quản lý pipeline tuyển dụng.",
    features: [
      { label: "Đăng tin tuyển dụng", icon: "FileText" },
      { label: "Lọc ứng viên bằng AI", icon: "Brain" },
      { label: "Lịch phỏng vấn tự động", icon: "Calendar" },
      { label: "Quản lý pipeline tuyển dụng", icon: "BarChart3" },
      { label: "CV parser & matching", icon: "Search" },
      { label: "Báo cáo & thống kê hiring", icon: "TrendingUp" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "OpenAI", color: "bg-green-500/30 text-green-200" },
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=85",
    accentColor: "sky",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "thuc-don-nha-hang",
    name: "MenuBox",
    category: "F&B",
    tagline: "Thực đơn số — Order nhanh chóng",
    description:
      "Ứng dụng thực đơn số cho nhà hàng và quán cà phê. Khách hàng quét QR code để xem menu, đặt món và thanh toán. Quản lý món ăn, nguyên liệu và báo cáo doanh thu cho chủ quán.",
    features: [
      { label: "Thực đơn số quét QR code", icon: "QrCode" },
      { label: "Đặt món & thanh toán online", icon: "CreditCard" },
      { label: "Quản lý món ăn & topping", icon: "Package" },
      { label: "Quản lý nguyên liệu & tồn kho", icon: "Warehouse" },
      { label: "Báo cáo doanh thu theo ngày", icon: "BarChart3" },
      { label: "Đánh giá & phản hồi khách hàng", icon: "Star" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Node.js", color: "bg-green-500/30 text-green-200" },
      { name: "MongoDB", color: "bg-emerald-500/30 text-emerald-200" },
      { name: "QR Code API", color: "bg-violet-500/30 text-violet-200" },
    ],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85",
    accentColor: "pink",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "hoa-don-ke-toan",
    name: "InvoiceFlow",
    category: "Accounting",
    tagline: "Hóa đơn điện tử — Kế toán thông minh",
    description:
      "Hệ thống hóa đơn điện tử và kế toán doanh nghiệp. Tự động xuất hóa đơn, quản lý công nợ, theo dõi dòng tiền và tích hợp với các phần mềm kế toán phổ biến.",
    features: [
      { label: "Xuất hóa đơn điện tử", icon: "FileText" },
      { label: "Quản lý công nợ phải thu/trả", icon: "CreditCard" },
      { label: "Theo dõi dòng tiền", icon: "TrendingUp" },
      { label: "Báo cáo tài chính tự động", icon: "BarChart3" },
      { label: "Tích hợp MISA, Fast", icon: "Globe" },
      { label: "Phê duyệt đa cấp", icon: "Shield" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "PDF.js", color: "bg-red-500/30 text-red-200" },
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85",
    accentColor: "slate",
    role: "Full-stack Developer",
    status: "Production",
    year: "2023",
  },
  {
    id: "san-giao-dich",
    name: "TradeHub",
    category: "Marketplace",
    tagline: "Sàn giao dịch — Mua bán an toàn",
    description:
      "Sàn giao dịch trực tuyến cho các sản phẩm nông sản và hàng hóa. Kết nối người bán với nhà thu mua, đấu giá sản phẩm, theo dõi giao dịch và thanh toán có bảo hiểm.",
    features: [
      { label: "Đăng bán sản phẩm nông sản", icon: "ShoppingBag" },
      { label: "Đấu giá sản phẩm", icon: "Gavel" },
      { label: "Theo dõi giao dịch", icon: "BarChart3" },
      { label: "Thanh toán có bảo hiểm", icon: "Shield" },
      { label: "Xếp hạng người bán", icon: "Star" },
      { label: "Báo cáo thị trường", icon: "TrendingUp" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Node.js", color: "bg-green-500/30 text-green-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "Redis", color: "bg-red-500/30 text-red-200" },
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=85",
    accentColor: "gold",
    role: "Full-stack Developer",
    status: "Production",
    year: "2024",
  },
  {
    id: "quan-ly-nha-thuoc",
    name: "PharmaCore",
    category: "Pharmacy",
    tagline: "Quản lý nhà thuốc — Dược phẩm thông minh",
    description:
      "Hệ thống quản lý nhà thuốc và quầy thuốc, hỗ trợ quản lý thuốc theo lô, kiểm soát hạn sử dụng, kê đơn online và tích hợp cảnh báo tương tác thuốc.",
    features: [
      { label: "Quản lý thuốc theo lô & hạn", icon: "Package" },
      { label: "Kiểm soát hạn sử dụng", icon: "AlertTriangle" },
      { label: "Kê đơn & tư vấn thuốc", icon: "FileText" },
      { label: "Cảnh báo tương tác thuốc", icon: "Shield" },
      { label: "Tích hợp bảo hiểm y tế", icon: "CreditCard" },
      { label: "Báo cáo doanh thu nhà thuốc", icon: "BarChart3" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-white/10 text-white/80" },
      { name: "TypeScript", color: "bg-blue-500/30 text-blue-200" },
      { name: "Prisma", color: "bg-violet-500/30 text-violet-200" },
      { name: "PostgreSQL", color: "bg-blue-600/30 text-blue-200" },
      { name: "Drug API", color: "bg-teal-500/30 text-teal-200" },
    ],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1400&q=85",
    accentColor: "green",
    role: "Lead Developer",
    status: "Production",
    year: "2024",
  },
];

const themeConfig: Record<
  string,
  { gradientFrom: string; gradientTo: string; accent: string; dotActive: string; dotInactive: string }
> = {
  amber: {
    gradientFrom: "from-amber-500/30",
    gradientTo: "to-orange-600/10",
    accent: "bg-amber-500",
    dotActive: "bg-amber-400",
    dotInactive: "bg-white/20",
  },
  emerald: {
    gradientFrom: "from-emerald-500/30",
    gradientTo: "to-teal-600/10",
    accent: "bg-emerald-500",
    dotActive: "bg-emerald-400",
    dotInactive: "bg-white/20",
  },
  violet: {
    gradientFrom: "from-violet-500/30",
    gradientTo: "to-purple-600/10",
    accent: "bg-violet-500",
    dotActive: "bg-violet-400",
    dotInactive: "bg-white/20",
  },
  blue: {
    gradientFrom: "from-blue-500/30",
    gradientTo: "to-indigo-600/10",
    accent: "bg-blue-500",
    dotActive: "bg-blue-400",
    dotInactive: "bg-white/20",
  },
  rose: {
    gradientFrom: "from-rose-500/30",
    gradientTo: "to-pink-600/10",
    accent: "bg-rose-500",
    dotActive: "bg-rose-400",
    dotInactive: "bg-white/20",
  },
  cyan: {
    gradientFrom: "from-cyan-500/30",
    gradientTo: "to-blue-600/10",
    accent: "bg-cyan-500",
    dotActive: "bg-cyan-400",
    dotInactive: "bg-white/20",
  },
  orange: {
    gradientFrom: "from-orange-500/30",
    gradientTo: "to-red-600/10",
    accent: "bg-orange-500",
    dotActive: "bg-orange-400",
    dotInactive: "bg-white/20",
  },
  teal: {
    gradientFrom: "from-teal-500/30",
    gradientTo: "to-cyan-600/10",
    accent: "bg-teal-500",
    dotActive: "bg-teal-400",
    dotInactive: "bg-white/20",
  },
  indigo: {
    gradientFrom: "from-indigo-500/30",
    gradientTo: "to-violet-600/10",
    accent: "bg-indigo-500",
    dotActive: "bg-indigo-400",
    dotInactive: "bg-white/20",
  },
  red: {
    gradientFrom: "from-red-500/30",
    gradientTo: "to-rose-600/10",
    accent: "bg-red-500",
    dotActive: "bg-red-400",
    dotInactive: "bg-white/20",
  },
  yellow: {
    gradientFrom: "from-yellow-500/30",
    gradientTo: "to-amber-600/10",
    accent: "bg-yellow-500",
    dotActive: "bg-yellow-400",
    dotInactive: "bg-white/20",
  },
  lime: {
    gradientFrom: "from-lime-500/30",
    gradientTo: "to-green-600/10",
    accent: "bg-lime-500",
    dotActive: "bg-lime-400",
    dotInactive: "bg-white/20",
  },
  sky: {
    gradientFrom: "from-sky-500/30",
    gradientTo: "to-blue-600/10",
    accent: "bg-sky-500",
    dotActive: "bg-sky-400",
    dotInactive: "bg-white/20",
  },
  pink: {
    gradientFrom: "from-pink-500/30",
    gradientTo: "to-rose-600/10",
    accent: "bg-pink-500",
    dotActive: "bg-pink-400",
    dotInactive: "bg-white/20",
  },
  slate: {
    gradientFrom: "from-slate-500/30",
    gradientTo: "to-gray-600/10",
    accent: "bg-slate-500",
    dotActive: "bg-slate-400",
    dotInactive: "bg-white/20",
  },
  gold: {
    gradientFrom: "from-yellow-600/30",
    gradientTo: "to-amber-700/10",
    accent: "bg-yellow-600",
    dotActive: "bg-yellow-500",
    dotInactive: "bg-white/20",
  },
  green: {
    gradientFrom: "from-green-500/30",
    gradientTo: "to-emerald-600/10",
    accent: "bg-green-500",
    dotActive: "bg-green-400",
    dotInactive: "bg-white/20",
  },
};

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number, dir: "left" | "right" = "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 450);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    const idx = (current + 1) % projects.length;
    goTo(idx, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    const idx = (current - 1 + projects.length) % projects.length;
    goTo(idx, "left");
  }, [current, goTo]);

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 7000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const p = projects[current];
  const theme = themeConfig[p.accentColor] || themeConfig.blue;

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover"
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {/* Left: Project meta */}
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${theme.accent} animate-pulse`} />
            <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {/* Keyboard hint */}
          <div className="flex items-center gap-3 text-xs text-white/20">
            <kbd className="px-2 py-0.5 rounded border border-white/10 bg-white/5 font-mono text-[10px]">←</kbd>
            <kbd className="px-2 py-0.5 rounded border border-white/10 bg-white/5 font-mono text-[10px]">→</kbd>
            <span className="hidden sm:inline">navigate</span>
            <span className="text-white/10 mx-1">·</span>
            <span className="hidden sm:inline">7s auto-play</span>
          </div>
        </div>

        {/* Center: Project name (left) + Nav buttons on sides */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isAnimating
              ? direction === "right"
                ? "opacity-0 translate-y-6"
                : "opacity-0 -translate-y-6"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Prev button - left edge */}
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center group flex-shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
          </button>

          {/* Center content */}
          <div className="flex-1 text-center px-4">
            {/* Category + Status */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/15 bg-white/5 text-white/50 backdrop-blur-sm">
                {p.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${theme.accent} text-white`}>
                {p.status}
              </span>
              <span className="text-[10px] text-white/30 font-medium">{p.year}</span>
            </div>

            {/* Project name */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[1] tracking-tight">
              {p.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white/40">
              {p.tagline}
            </p>
          </div>

          {/* Next button - right edge */}
          <button
            onClick={next}
            className={`w-12 h-12 rounded-full ${theme.accent} transition-all duration-300 flex items-center justify-center hover:brightness-110 flex-shrink-0`}
            style={{ boxShadow: `0 0 24px ${theme.accent.replace("bg-", "rgba(").replace("-500", ", 0.35)")}` }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Bottom: Dot indicators */}
        <div className="flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className={`rounded-full transition-all duration-500 ${
                i === current
                  ? `w-8 h-2 ${theme.dotActive}`
                  : `w-2 h-2 ${theme.dotInactive} hover:${theme.dotActive}`
              }`}
              style={
                i === current
                  ? {
                      boxShadow: `0 0 10px ${theme.accent.replace("bg-", "").replace("-500", "")}`,
                    }
                  : {}
              }
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
