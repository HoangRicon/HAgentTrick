# Functional Requirements Analysis - Static Website Documentation + Personal Brand

## 1. Tổng quan dự án

Xây dựng một static website hoàn chỉnh sử dụng Next.js (SSG) deploy lên GitHub Pages, bao gồm trang giới thiệu bản thân, khu vực hướng dẫn/tài liệu (docs), và trang thông tin liên lạc. Giao diện hiện đại, mượt mà, tối ưu SEO và performance.

**Loại dự án:** Static website (SSG - Static Site Generation)
**Deployment target:** GitHub Pages
**Tech stack chính:** Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, MDX

---

## 2. Scope

### 2.1 Trong phạm vi (In Scope)

**Trang chủ (Landing Page):**
- Hero section với headline, subheadline, CTA buttons, animated elements
- About/Intro section với avatar, bio, key highlights
- Features/Services section với grid cards
- Stats section với số liệu ấn tượng
- CTA section cuối trang

**Khu vực Documentation (Docs):**
- Docs listing page với danh sách tài liệu theo category
- Doc detail page với MDX rendering
- Table of contents sidebar (desktop)
- Previous/Next navigation
- Search functionality (local fuzzy search)
- Code syntax highlighting với copy button
- Breadcrumbs
- Reading time estimate

**Trang Contact:**
- Contact info section (email, social links)
- Contact form (name, email, subject, message)
- Social links section
- Success/error states

**Foundation:**
- Design system (colors, typography, spacing, design tokens)
- Theme (light/dark mode với persistence)
- Layout system (header, footer, sidebar, responsive)
- Smooth page transitions và scroll animations
- Custom scrollbar, selection color, favicon

**SEO & Performance:**
- Meta tags (title, description, OG tags)
- sitemap.xml và robots.txt
- Open Graph / Twitter Cards
- Structured data (JSON-LD)
- Image optimization
- Font optimization
- Core Web Vitals optimization (LCP < 2.5s, CLS < 0.1, INP < 200ms)

**Deployment:**
- GitHub Actions CI/CD cho GitHub Pages
- Static export từ Next.js
- basePath configuration cho GitHub Pages subpath

### 2.2 Ngoài phạm vi (Out of Scope)

- Backend/API routes
- Database integration
- Authentication/User management
- CMS (Content Management System) - chỉ dùng MDX files
- Real-time features
- Multi-language/i18n (giai đoạn đầu)
- Custom domain (giai đoạn đầu)
- SaaS/multi-tenant
- Payment/gateway integration
- Admin dashboard cho quản lý content

---

## 3. Actor chính

### 3.1 Guest (Visitor)

**Mô tả:** Người truy cập website, chưa đăng nhập (vì đây là static site, không có auth).

**Quyền:**
- Xem tất cả nội dung công khai
- Điều hướng qua tất cả pages
- Tìm kiếm trong docs
- Đọc và xem code snippets
- Gửi form liên hệ
- Toggle light/dark mode

**Flow chính:**
1. Truy cập landing page -> đọc giới thiệu -> xem features
2. Click "Docs" -> xem danh sách tài liệu -> đọc doc chi tiết
3. Click "Contact" -> điền form liên hệ
4. Sử dụng search (Cmd+K) để tìm nội dung

### 3.2 Admin (Owner)

**Mô tả:** Chủ sở hữu website, quản trị nội dung qua code/MDX files.

**Quyền:**
- Tạo/sửa/xóa MDX doc files
- Cập nhật cấu trúc navigation
- Cập nhật landing page content (hero, about, features)
- Cập nhật contact info và social links
- Deploy website qua Git push

**Flow chính:**
1. Clone repo -> tạo/sửa MDX file -> push -> GitHub Actions deploy
2. Cập nhật content files -> push -> GitHub Actions deploy

---

## 4. Core Entities

### 4.1 Page (Trang đơn)

**Mô tả:** Trang web đơn lẻ (.tsx files trong app router)

**Thuộc tính:**
- route path
- title (metadata)
- description
- ogImage
- isIndexed (boolean)

**Ai tạo:** Admin (code trong src/app/)
**Ai xem:** Guest
**Trạng thái:** Static - không có state

### 4.2 Doc (Tài liệu)

**Mô tả:** File MDX chứa nội dung hướng dẫn

**Thuộc tính (Frontmatter):**
- title (string) - tiêu đề tài liệu
- description (string) - mô tả ngắn
- order (number) - thứ tự hiển thị trong category
- category (string) - nhóm tài liệu
- lastUpdated (date) - ngày cập nhật gần nhất
- tags (string[]) - tags cho search

**Ai tạo:** Admin (file trong src/content/docs/)
**Ai xem:** Guest
**Trạng thái:** Static - không có state

### 4.3 Category (Nhóm tài liệu)

**Mô tả:** Nhóm chứa nhiều docs liên quan

**Thuộc tính:**
- name (string) - tên category
- slug (string) - URL slug
- order (number) - thứ tự hiển thị
- description (string) - mô tả category
- icon (string) - icon name (lucide-react)

**Ai tạo:** Admin (config trong src/lib/navigation.ts)
**Ai xem:** Guest
**Trạng thái:** Static - config

### 4.4 Navigation (Cấu trúc điều hướng)

**Mô tả:** Cấu trúc menu và links của website

**Thuộc tính:**
- items (array) - menu items
- sidebar (object) - cấu trúc sidebar docs

**Ai tạo:** Admin (config trong src/lib/navigation.ts)
**Ai xem:** Guest
**Trạng thái:** Static - config

### 4.5 Contact (Thông tin liên lạc)

**Mô tả:** Thông tin liên lạc của chủ website

**Thuộc tính:**
- email (string)
- location (string)
- socialLinks (array) - { platform, url, icon }

**Ai tạo:** Admin (config trong src/lib/contact.ts)
**Ai xem:** Guest
**Trạng thái:** Static - config

---

## 5. Yêu cầu chức năng theo Actor

### 5.1 Guest - Landing Page

| ID | Yêu cầu | Mô tả chi tiết |
|----|----------|----------------|
| G-LP-01 | Xem Hero Section | Guest xem hero section với headline, subheadline, và 2 CTA buttons. Hero có background animation (gradient/ floating shapes). |
| G-LP-02 | Xem About Section | Guest xem avatar, bio text (2-3 paragraphs), và list highlights (3-5 items). |
| G-LP-03 | Xem Features Section | Guest xem grid 3-6 cards mô tả nội dung chính của site. Mỗi card có icon, title, description. |
| G-LP-04 | Xem Stats Section | Guest xem 3-4 stats numbers (years experience, projects, etc.) với animation count-up khi visible. |
| G-LP-05 | Xem CTA Section | Guest xem CTA section cuối trang với headline và button dẫn đến docs hoặc contact. |
| G-LP-06 | Scroll Animation | Guest scroll thì các sections fade-in/slide-up khi vào viewport. Animation nhẹ, không ảnh hưởng performance. |
| G-LP-07 | Navigate to Docs | Guest click "Docs" button/link -> chuyển đến /docs listing page. |
| G-LP-08 | Navigate to Contact | Guest click "Contact" button/link -> chuyển đến /contact page. |

### 5.2 Guest - Docs Section

| ID | Yêu cầu | Mô tả chi tiết |
|----|----------|----------------|
| G-D-01 | Xem Docs Listing | Guest xem trang /docs với danh sách tất cả docs được nhóm theo category. |
| G-D-02 | Xem Doc Detail | Guest xem trang /docs/[slug] với MDX content được render đầy đủ. |
| G-D-03 | Xem Table of Contents | Guest xem TOC sidebar bên phải (desktop) với các headings. Active heading được highlight khi scroll. |
| G-D-04 | Navigate Docs | Guest click vào doc khác trong sidebar -> chuyển đến doc đó. |
| G-D-05 | Prev/Next Navigation | Guest xem "Previous" và "Next" links ở cuối doc để navigate giữa các docs. |
| G-D-06 | Search Docs | Guest nhấn Cmd+K (hoặc click search icon) -> modal search mở ra -> gõ từ khóa -> fuzzy search trả kết quả -> click result -> navigate đến doc. |
| G-D-07 | Copy Code | Guest click copy button trên code block -> code được copy vào clipboard -> toast notification hiển thị. |
| G-D-08 | View Breadcrumbs | Guest xem breadcrumbs ở trên doc content (Docs > Category > Title). Click vào breadcrumb -> navigate đến level đó. |
| G-D-09 | View Reading Time | Guest xem estimated reading time ở trên doc content. |
| G-D-10 | View Code Syntax | Guest xem code blocks với syntax highlighting theo language (js, ts, bash, json, etc.). |

### 5.3 Guest - Contact Page

| ID | Yêu cầu | Mô tả chi tiết |
|----|----------|----------------|
| G-C-01 | Xem Contact Info | Guest xem email address, location, và social links icons. |
| G-C-02 | Xem Social Links | Guest xem danh sách social media links (GitHub, LinkedIn, etc.). Click -> mở link trong new tab. |
| G-C-03 | Fill Contact Form | Guest điền form với: name (required), email (required, valid format), subject (required), message (required, min 10 chars). |
| G-C-04 | Submit Contact Form | Guest click "Send Message" -> form validated -> submitted qua formsp.io/EmailJS endpoint -> success message hiển thị -> form reset. |
| G-C-05 | View Form Validation | Guest submit invalid form -> validation errors hiển thị bên dưới mỗi field -> submit button disabled. |
| G-C-06 | View Form Success | Guest submit valid form -> loading state -> success message "Message sent successfully!" với checkmark icon. |
| G-C-07 | View Form Error | Guest submit form fails -> error message hiển thị "Failed to send message. Please try again." |

### 5.4 Guest - Global

| ID | Yêu cầu | Mô tả chi tiết |
|----|----------|----------------|
| G-G-01 | Navigate via Header | Guest click logo -> về home. Click nav links -> navigate đến page tương ứng. |
| G-G-02 | Toggle Theme | Guest click theme toggle button (sun/moon icon) -> switch light/dark mode -> preference saved in localStorage -> persist across sessions. |
| G-G-03 | View Mobile Menu | Guest trên mobile -> click hamburger icon -> mobile menu slide in từ right -> close khi click outside hoặc X button. |
| G-G-04 | View 404 Page | Guest truy cập non-existent route -> 404 page hiển thị với friendly message và link về home. |
| G-G-05 | Smooth Scroll | Guest click anchor link -> smooth scroll đến section thay vì jump. |

---

## 6. Yêu cầu phi chức năng

### 6.1 Performance

| ID | Yêu cầu | Tiêu chí |
|----|----------|----------|
| NF-P-01 | LCP (Largest Contentful Paint) | < 2.5 seconds |
| NF-P-02 | CLS (Cumulative Layout Shift) | < 0.1 |
| NF-P-03 | INP (Interaction to Next Paint) | < 200ms |
| NF-P-04 | Lighthouse Performance Score | >= 90 |
| NF-P-05 | Bundle Size | JS bundle < 200KB (first load) |
| NF-P-06 | Image Loading | All images lazy loaded, format WebP/AVIF |

### 6.2 Accessibility

| ID | Yêu cầu | Tiêu chí |
|----|----------|----------|
| NF-A-01 | WCAG Compliance | WCAG 2.1 AA |
| NF-A-02 | Color Contrast | >= 4.5:1 cho normal text, >= 3:1 cho large text |
| NF-A-03 | Keyboard Navigation | Tất cả interactive elements accessible qua keyboard |
| NF-A-04 | Focus Indicators | Visible focus ring on all interactive elements |
| NF-A-05 | ARIA Labels | ARIA labels trên icon-only buttons |
| NF-A-06 | Skip Link | Skip-to-content link ở đầu page |
| NF-A-07 | Lighthouse Accessibility Score | >= 90 |

### 6.3 SEO

| ID | Yêu cầu | Tiêu chí |
|----|----------|----------|
| NF-S-01 | Meta Tags | Unique title + description cho mỗi page |
| NF-S-02 | OG Tags | Open Graph tags cho social sharing |
| NF-S-03 | sitemap.xml | Auto-generated, submitted to Google |
| NF-S-04 | robots.txt | Allow crawl đúng pages |
| NF-S-05 | Canonical URLs | Canonical tag trên mỗi page |
| NF-S-06 | Structured Data | JSON-LD (Organization, Person schema) |
| NF-S-07 | Lighthouse SEO Score | >= 90 |

### 6.4 Browser Support

| ID | Yêu cầu |
|----|----------|
| NF-B-01 | Chrome/Edge | Phiên bản mới nhất 2 versions |
| NF-B-02 | Firefox | Phiên bản mới nhất 2 versions |
| NF-B-03 | Safari | Phiên bản mới nhất 2 versions |

---

## 7. Ownership và Permission

### 7.1 Data Ownership

| Entity | Ownership | Ai được xem | Ai được sửa |
|--------|-----------|-------------|-------------|
| Page content | Admin | Guest (all) | Admin (code) |
| Doc content | Admin | Guest (all) | Admin (MDX files) |
| Navigation config | Admin | Guest (read-only) | Admin (navigation.ts) |
| Contact config | Admin | Guest (read-only) | Admin (contact.ts) |
| Theme preference | Guest | Guest (localStorage) | Guest (toggle) |

### 7.2 Access Control

- **Public (không cần auth):** Tất cả pages (/, /docs, /docs/[slug], /contact)
- **No admin area:** Không có /admin routes vì đây là static site
- **Content editing:** Chỉ qua MDX files trong code (git-based workflow)

---

## 8. Actor Priority cho triển khai

| Priority | Actor | Lý do |
|----------|-------|-------|
| 1 | Guest | Trải nghiệm người dùng là ưu tiên số 1. Tất cả features phục vụ Guest. |
| 2 | Admin | Admin chỉ cần edit content qua MDX files - workflow đơn giản. |

**Build order recommendation:**
1. Foundation (Phase 1-2): Layout, theme, navigation - nền tảng cho mọi page
2. Content Pages (Phase 3-5): Landing, Docs, Contact - những gì Guest thấy
3. Polish (Phase 6): SEO, performance - tối ưu sau khi có content
4. Deploy (Phase 7): GitHub Pages - cuối cùng khi mọi thứ ổn định

---

## 9. Build Order đề xuất

1. **Phase 0 (now):** Functional Requirements Analysis (this file)
2. **Phase 1:** Foundation - Project setup, design tokens, config
3. **Phase 2:** Layout Foundation - Header, Footer, Sidebar, Theme
4. **Phase 3:** Landing Page - Hero, About, Features, CTA
5. **Phase 4:** Docs Section - MDX rendering, search, TOC
6. **Phase 5:** Contact Page - Form, social links
7. **Phase 6:** SEO & Polish - Meta tags, sitemap, performance
8. **Phase 7:** GitHub Pages Deployment - CI/CD pipeline

---

## 10. Risk Areas

| Risk | Mức độ | Mitigation |
|------|--------|------------|
| MDX rendering issues với complex components | Medium | Test với sample MDX ngay từ đầu, dùng established library (next-mdx-remote) |
| GitHub Pages basePath configuration phức tạp | High | Cấu hình basePath ngay từ Phase 1, test local với basePath |
| Animation ảnh hưởng Core Web Vitals | Medium | Dùng CSS transforms thay vì layout properties, lazy animate, test Lighthouse |
| Search index stale khi content update | Low | Rebuild search index trong CI/CD pipeline |
| Form spam trên static site | Medium | Honeypot field + rate limiting ở form service (formsp.io) |
| shadcn/ui components không support SSG export | Medium | Chọn components không rely on client-side state, test build export |

---

## 11. Assumptions

| # | Assumption | Ghi chú |
|---|-----------|---------|
| 1 | Admin biên tập nội dung qua MDX files | Không cần CMS, dùng MDX files trong src/content/docs/ |
| 2 | Không cần i18n giai đoạn đầu | Chỉ tiếng Việt hoặc tiếng Anh (config) |
| 3 | GitHub repository đã được tạo | Hoặc sẽ tạo mới trong quá trình setup |
| 4 | Không có custom domain ban đầu | Dùng GitHub Pages default subdomain (username.github.io/repo-name/) |
| 5 | Dùng MDX files thay vì CMS | Content management đơn giản qua git workflow |
| 6 | Local search (client-side) thay vì server-side | Fuzzy search với fuse.js, index build lúc static generation |

---

## 12. Completion Criteria

Website được coi là hoàn thành khi tất cả điều kiện sau được đáp ứng:

1. **Functional:**
   - Landing page hiển thị với hero, about, features, CTA sections
   - Docs section cho phép xem, navigate, search, copy code
   - Contact page với form validation và social links
   - Theme toggle light/dark hoạt động và persist
   - Mobile responsive trên mọi page
   - 404 page custom

2. **Performance:**
   - Lighthouse Performance >= 90
   - LCP < 2.5s, CLS < 0.1, INP < 200ms

3. **Accessibility:**
   - Lighthouse Accessibility >= 90
   - Keyboard navigation hoạt động toàn site
   - Color contrast đạt WCAG AA

4. **SEO:**
   - Lighthouse SEO >= 90
   - sitemap.xml và robots.txt hoạt động
   - OG tags cho social sharing

5. **Deployment:**
   - GitHub Actions deploy tự động khi push
   - Website accessible trên GitHub Pages
   - Không có broken links hoặc console errors
