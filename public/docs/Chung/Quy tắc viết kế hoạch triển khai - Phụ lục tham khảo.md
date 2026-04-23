# PHỤ LỤC: CÁC CHỦ ĐỀ MỞ RỘNG CHO KẾ HOẠCH TRIỂN KHAI

File này là phụ lục của **"Quy tắc viết kế hoạch triển khai chi tiết từ yêu cầu chức năng"**. Các mục dưới đây không phải quy tắc viết kế hoạch — chúng là tài liệu tham khảo theo nhu cầu dự án. Đưa vào kế hoạch triển khai cụ thể khi dự án thực sự cần.

---

## A. SaaS / Multi-Tenant

Khi sản phẩm triển khai theo mô hình SaaS, kế hoạch phải làm rõ tối thiểu:

* **Tenancy model**: pooled (chung schema với cột `tenant_id`), siloed (schema/DB riêng), hoặc hybrid. Quy định rõ chiến lược chọn theo quy mô, compliance, isolation.
* **Propagation `tenantId`**: từ auth → API → service/repository → ORM/query. Cấm truy vấn thiếu điều kiện scope theo tenant.
* **Enforcement**: ownership/permission theo tenant tại service/repository layer; test chống "tenant data leak" là checkpoint bắt buộc.
* **RBAC theo tenant**: vai trò trong phạm vi tổ chức/workspace; phân biệt rõ superadmin hệ thống và admin tenant.
* **Tổ chức/Workspace & mời thành viên**: mô hình tổ chức, lời mời, vai trò, chuyển nhượng quyền sở hữu.
* **Billing & kế hoạch giá**: cổng thanh toán (Stripe/Braintree), metering events, trial, dunning, thuế, hóa đơn, customer portal.
* **Plan enforcement**: giới hạn theo gói (số user, project, API calls, tính năng); feature flags/gates theo gói.
* **Custom domains**: ánh xạ domain → tenant; cấp chứng chỉ tự động (ACME), gia hạn, kiểm soát ownership.
* **Audit & compliance**: audit logs theo tenant, data export, xóa dữ liệu theo yêu cầu, retention policy.
* **SSO doanh nghiệp**: OIDC/SAML theo tenant; SCIM (nếu gói phù hợp).
* **Webhooks**: ký HMAC, retry/backoff, idempotency, portal theo dõi webhook.
* **Công cụ hỗ trợ vận hành**: admin console an toàn (just-in-time access, breakglass), impersonation có audit.
* **Data residency**: vùng lưu trữ dữ liệu theo tenant (nếu có yêu cầu pháp lý/thị trường).
* **Rate limiting/quota**: theo tenant và theo user; phối hợp với gói cước.

**Checkpoint bắt buộc theo phase SaaS:**

* Không có truy vấn nào trả dữ liệu chéo tenant (negative tests).
* Plan limit được cưỡng chế trên API/UI theo gói.
* Billing events đầy đủ, đúng thời điểm, có thể bù trễ an toàn.
* Custom domain sở hữu hợp lệ, chứng chỉ phát hành thành công, tự động gia hạn.

---

## B. Observability & Vận hành

Kế hoạch phải quy định rõ lớp quan sát và vận hành:

* **Logging chuẩn hóa**: mức log, cấu trúc, không lộ PII; gắn trace/span IDs.
* **Distributed tracing**: gắn trace qua các dịch vụ; sampling chiến lược theo môi trường.
* **Metrics**: RED/USE metrics, business metrics theo actor/tenant; dashboard bắt buộc.
* **SLO/SLA/SLI**: mục tiêu, ngưỡng báo động, quy trình xử lý.
* **Alerting**: rule, kênh, thời gian phản hồi; loại trừ nhiễu.
* **Runbooks**: kịch bản xử lý sự cố, checklist khôi phục.
* **Feature flags & dark launch**: bật/tắt theo tenant/actor, canary, progressive delivery.
* **Capacity planning**: dự báo lưu lượng, chiến lược scale (horizontal/vertical), warm-up.

**Checkpoint:**

* Mỗi flow lõi có logs/metrics/traces tối thiểu.
* Dashboard và cảnh báo hoạt động trước khi mở rộng user thật.

---

## C. Bảo mật & Tuân thủ

* **Threat modeling** theo phase; xác định asset, actor tấn công, đường tấn công.
* **Mã hóa**: in-transit (TLS bắt buộc), at-rest (DB, object storage), quản trị key.
* **Secret management**: không hardcode; rotation định kỳ; phân quyền truy cập tối thiểu.
* **Backup/Restore/DR**: RPO/RTO, bài diễn tập khôi phục, kiểm chứng backup khởi động được.
* **Admin RBAC**: giới hạn quyền, session ngắn, MFA, ghi audit, tách môi trường.
* **Tuân thủ**: GDPR/PDPA (quyền truy cập/xóa dữ liệu), lưu trữ theo vùng; cookie & tracking hợp lệ.
* **Dependency & image scanning**: SAST/DAST/Secrets scan trong CI.

**Checkpoint:**

* Tất cả endpoint nhạy cảm có authz kiểm chứng.
* Bản dựng không chứa secrets; dependency không có lỗ hổng nghiêm trọng chưa xử lý.

---

## D. Quản trị dữ liệu & Thay đổi

* **Migrations**: chiến lược an toàn, không downtime, khả năng rollback; version hóa lược đồ.
* **Seed data**: theo môi trường; dữ liệu mẫu cho demo/tenant mới.
* **API/Contract versioning**: semver; deprecation policy; backward-compat windows.
* **Data lifecycle**: retention, purge, archive; quyền truy cập dữ liệu lịch sử.

**Checkpoint:**

* Migration được thử trên dữ liệu thật giả lập; có kịch bản quay lui.

---

## E. Hiệu năng & Tải

* **Core Web Vitals**: mục tiêu LCP/CLS/INP cho marketing site.
* **Caching**: edge/app/db; invalidation rõ ràng; cache key có tenant.
* **Rate limiting & quotas**: theo IP/user/tenant; backpressure, circuit breaker.
* **Nén & phân phối**: CDN, định dạng ảnh WebP/AVIF, prefetch/preload.
* **Nhiệt độ dữ liệu**: hot/warm/cold; tối ưu truy vấn và index.

**Checkpoint:**

* Kịch bản tải chính đạt mục tiêu; không rò rỉ bộ nhớ/kết nối.

---

## F. Sản phẩm & UX

* **i18n/l10n**: chiến lược ngôn ngữ, định dạng vùng; nội dung SEO theo ngôn ngữ.
* **Accessibility**: tiêu chí WCAG; bàn phím, contrast, aria, focus.
* **Email/SMS**: SPF/DKIM/DMARC, theo dõi gửi, retry, template theo ngôn ngữ/tenant.
* **Empty states & onboarding**: hành trình người dùng mới; checklist hoàn tất thiết lập tenant.

**Checkpoint:**

* Trang trọng yếu đạt tiêu chí a11y; email xác thực tới được inbox chính.

---

## G. CI/CD & Môi trường

* **Gates theo phase**: lint, unit, integration, e2e, SAST/DAST, secret scan.
* **Promotion dev → staging → prod**: tiêu chí lên môi trường; freeze window.
* **Policy PR**: review bắt buộc, kiểm tra contract/test snapshot, bảo vệ nhánh.
* **Release strategy**: canary/blue-green; rollback nhanh.

**Checkpoint:**

* Pipeline chặn merge khi kiểm thất bại; kịch bản rollback đã thử.

---

## H. SEO & Marketing Site

Áp dụng chủ yếu cho khu vực marketing công khai; khu vực ứng dụng đăng nhập nên noindex.

* **Render & crawl**: SSR/SSG; `robots.txt` theo môi trường; chặn staging.
* **Sitemap & canonical**: `sitemap.xml` tự động; canonical tránh trùng lặp nội dung.
* **Metadata & social**: title/description động; Open Graph/Twitter Cards; favicon/manifest.
* **Structured data (JSON-LD)**: Organization, Product, BreadcrumbList, FAQPage/HowTo/Article khi phù hợp.
* **i18n/hreflang**: thẻ `hreflang` cho ngôn ngữ/khu vực; cấu trúc URL rõ (`/vi/`, `/en/`).
* **Hiệu năng (CWV)**: preload critical, lazy-load media, image CDN, split JS/CSS critical.
* **URL & nội dung**: slug sạch, breadcrumb, headings H1/H2 hợp lý, internal linking; noindex trang lọc vô giá trị.
* **Technical hygiene**: 301 canonical, 404/410 đúng; theo dõi GSC; giám sát CWV.
* **App area**: `noindex, nofollow` cho trang đăng nhập/khu vực nội bộ.

**Checkpoint:**

* Trang chính có schema/canonical đúng; sitemap sinh tự động và được crawl.

---

## I. Cấu trúc thư mục tham khảo (Monorepo, SaaS-ready)

Tham khảo mẫu cấu trúc monorepo (điều chỉnh theo stack thực tế):

```bash
/ (repo root)
├─ apps/
│  ├─ web/                 # marketing site + public pages (SSR/SSG, SEO)
│  └─ app/                 # ứng dụng đăng nhập (dashboard), noindex
│
├─ services/
│  └─ api/                 # backend API, auth, tenancy, rate limiting
│
├─ packages/
│  ├─ ui/                  # design system, components dùng chung
│  ├─ config/              # cấu hình build/lint/tsconfig/chung
│  ├─ sdk/                 # client SDK (versioned) cho API
│  └─ tooling/             # tiện ích CLI, codegen
│
├─ infra/
│  ├─ terraform/           # IaC (VPC, DB, queue, CDN, DNS)
│  ├─ k8s/                 # manifests/helm nếu dùng k8s
│  └─ pipelines/           # CI/CD (lint/test/build/deploy, gates)
│
├─ db/
│  ├─ migrations/          # migration hỗ trợ multi-tenant
│  └─ seeds/               # seed theo môi trường/tenant mẫu
│
├─ docs/
│  ├─ product/             # BRD, use cases, actor/entity
│  ├─ implementation-plan/ # kế hoạch hiện tại + checkpoints
│  ├─ architecture/        # ADRs, sơ đồ, tenancy model
│  └─ runbooks/            # vận hành, DR, incident
│
├─ .github/
│  └─ workflows/           # CI (lint, unit, e2e, SAST/DAST, scan secrets)
│
├─ scripts/                # seed, backup/restore, rotate secrets
└─ SECURITY.md / CONTRIBUTING.md / CODEOWNERS
```

**Nguyên tắc kèm theo:**

* `apps/web` tối ưu SEO; `apps/app` noindex, tách `robots.txt`.
* `services/api` có middleware context tenant, enforcer ownership theo tenant.
* `db/migrations` có chiến lược pooled/siloed/hybrid rõ ràng.
* `packages/sdk` công bố surface ổn định, có versioning.
* `infra` bao gồm metering/billing events, webhooks, worker queues.
