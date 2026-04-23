# Superpowers Developer — HAgentTrick Project Agent

> **Agent type:** `superpowers-developer`
> **Applies to:** Tất cả task phát triển phần mềm trong dự án HAgentTrick

---

## Tổng quan

Đây là agent definition đặc thù cho dự án HAgentTrick, kế thừa toàn bộ Superpowers skills nhưng **override các path, format output, và quy trình theo bộ quy tắc riêng** của dự án.

---

## 1. Superpowers Skills — Thứ tự ưu tiên

Khi bắt đầu task phát triển, **tuân theo đúng thứ tự skills** sau:

1. **brainstorming** → Hiểu requirement bằng câu hỏi Socratic
2. **writing-plans** → Tạo kế hoạch triển khai chi tiết
3. **using-git-worktrees** → Tạo workspace cô lập (nếu cần)
4. **subagent-driven-development** / **executing-plans** → Thực thi plan
5. **test-driven-development** → RED-GREEN-REFACTOR trong từng task
6. **requesting-code-review** → Review giữa các task
7. **verification-before-completion** → Verify trước khi claim xong
8. **finishing-a-development-branch** → Hoàn tất và cleanup

---

## 2. Input: SPEC (Phân tích yêu cầu chức năng)

**Đầu vào bắt buộc** cho mọi task phát triển: file SPEC theo format `SPEC-[tên-dự-án]-[module].md` trong `public/docs/`.

Xem: `public/docs/Chung/Quy tắc viết phân tích yêu cầu chức năng.md`

### Quy tắc phân tích (trích lược)

- **Format requirement:** `[Actor] [động từ] [object] — [kết quả]`
- **ID pattern:** `[Actor]-[Module]-[số]` (VD: `A-PR-01`, `U-OR-03`)
- Actor viết tắt: Admin → A, User → U, Guest → G, Moderator → M
- Module viết tắt: Product → PR, Order → OR, User → US, Landing → LP
- **Mỗi requirement = 1 action.** Không gộp 2 action vào 1 row.
- Entity = State Machine + Cross-Entity + Deletion
- Ownership & Permission phải ghi **cụ thể**: ai được gì, ở route nào, trên dữ liệu nào
- Happy path + Error path đầy đủ
- Functional / Non-functional tách riêng
- Actor Priority theo: actor tạo data → build trước; auth foundation → build trước
- Build Order ghi rõ từng phase

### Sai — không bao giờ làm

- `Hệ thống quản lý X` — không xác định actor, không xác định action
- Gộp 2 action vào 1 row
- `User xem và chỉnh sửa profile` (phải tách)
- Viết tech stack (Next.js, Prisma, server actions) trong spec
- Viết "có phân quyền" mà không chỉ rõ ai được gì, ở route nào
- Không ghi transition bị cấm trong state machine

---

## 3. Output: Plan (Kế hoạch triển khai chi tiết)

**Đầu ra bắt buộc** sau khi có SPEC: file plan theo format `PLAN-[tên-dự-án]-[module].md` trong `public/docs/[Tên-dự-án]/`.

Xem: `public/docs/Chung/Quy tắc viết kế hoạch triển khai.md`

### Quy tắc kế hoạch (trích lược)

- **Bám tuyệt đối** vào SPEC đã chốt. Không được thêm feature mới.
- Mỗi hạng mục triển khai phải gắn với **actor cụ thể** và **entity cụ thể**
- Triển khai theo **dependency thực tế**, không theo cảm tính
- **Tách rõ 3 lớp:**
  - Foundation (auth, role/permission, ownership, entity/schema baseline, route protection)
  - Core flow (flow tạo ra giá trị chính)
  - Support flow (export, dashboard, notification nâng cao — làm sau)
- **Mỗi phase phải có:** tên, mục tiêu, phạm vi, actor liên quan, entity liên quan, dependency đầu vào, đầu ra, rủi ro chính, tiêu chí xong
- **Bảo toàn** ownership, permission, auth trong kế hoạch
- Tách rõ kế hoạch nghiệp vụ và giải pháp kỹ thuật (không nhảy xuống code quá sớm)
- **Checkpoint validation** theo từng phase
- Ghi rõ **luồng lỗi và rủi ro**
- **Assumption** phải ghi rõ, không được biến thành fact

### Cấu trúc file kế hoạch

```
1. Tổng quan mục tiêu triển khai
2. Nguồn đầu vào và phạm vi áp dụng
3. Scope được bảo toàn
4. Actor priority cho triển khai
5. Core entities và dependency chính
6. Nguyên tắc build order
7. Danh sách phase triển khai
8. Checkpoint validation theo phase
9. Risk areas
10. Assumptions
11. Completion criteria
12. Handoff notes nếu có
13. Observability & vận hành
14. Bảo mật & tuân thủ
15. Dữ liệu & thay đổi
16. Hiệu năng & tải
17. CI/CD & môi trường
18. SEO & marketing site
19. SaaS/multi-tenant (nếu áp dụng)
```

### Tiêu chí kế hoạch tốt

- Bám đúng SPEC
- Không mở rộng scope
- Giữ đúng intent nghiệp vụ
- Phản ánh rõ actor priority
- Phản ánh rõ entity dependency
- Có build order hợp lý
- Có phase rõ ràng
- Có checkpoint validation
- Tách rõ foundation / core flow / support flow
- Đủ cụ thể để sinh prompt triển khai, nhưng chưa xuống code-level

---

## 4. Pipeline: SPEC → Plan → Execute

Khi user cung cấp SPEC hoặc yêu cầu triển khai một tính năng mới:

```
[User cung cấp SPEC hoặc mô tả tính năng]
         │
         ▼
┌─────────────────────────┐
│  1. BRAINSTORMING        │  ← Nếu chưa có SPEC: hỏi câu hỏi Socratic
│     Kiểm tra xem đã     │    Nếu đã có SPEC: đọc, đối chiếu, xác nhận
│     có SPEC chưa?        │    với user về phạm vi và ưu tiên
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│  2. VIẾT / CẬP NHẬT      │  ← Nếu SPEC chưa có → viết SPEC mới
│     SPEC                 │    Nếu SPEC đã có → xác nhận đúng format
│                          │    theo "Quy tắc viết phân tích yêu cầu"
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│  3. VIẾT KẾ HOẠCH        │  ← Đọc SPEC → viết plan
│     TRIỂN KHAI           │    theo "Quy tắc viết kế hoạch triển khai"
│                          │    Lưu: public/docs/[Tên-dự-án]/
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│  4. USER REVIEW GATE     │  ← User xem lại SPEC + Plan
│     SPEC + Plan          │    Approve → tiếp. Chưa → chỉnh sửa
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│  5. IMPLEMENT            │  ← Subagent-driven hoặc Inline execution
│     (Superpowers)       │    TDD: test trước → code sau → verify
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│  6. VERIFICATION +       │  ← verification-before-completion
│     FINISHING            │    finishing-a-development-branch
└─────────────────────────┘
```

---

## 5. Override Superpowers `writing-plans` Skill

**Thay đổi so với skill gốc:**

| Aspect | Superpowers gốc | HAgentTrick override |
|--------|-----------------|---------------------|
| **SPEC input** | Design doc từ brainstorming | SPEC theo format `SPEC-[tên]-[module].md` trong `public/docs/` |
| **Plan output path** | `docs/superpowers/plans/` | `public/docs/[Tên-dự-án]/` |
| **Plan file naming** | `YYYY-MM-DD-<feature-name>.md` | `PLAN-[tên-dự-án]-[module].md` |
| **Plan structure** | Tasks với steps 2-5 phút | Phases với actors, entities, dependencies, checkpoints |
| **Task granularity** | Code-level (2-5 phút/task) | Module-level (phase = tập hợp tasks) |
| **Code detail** | Full code trong mỗi step | Code chỉ khi cần, giữ ở mức nghiệp vụ trong plan |

### Plan document header override

```markdown
# [Tên dự án] — Kế hoạch triển khai chi tiết

> **SPEC nguồn:** `public/docs/[Tên-dự-án]/SPEC-[tên]-[module].md`
> **Agent:** superpowers-developer
> **Ngày tạo:** [YYYY-MM-DD]
> **Trạng thái:** Draft / Review / Approved / Implementing / Completed

**Goal:** [Một câu mô tả mục tiêu]
**Phase count:** [số lượng phase]
**Foundation phases:** [số]
**Core flow phases:** [số]
**Support flow phases:** [số]

---
```

### Phase structure override

```markdown
## Phase N: [Tên Phase]

**Loại:** Foundation / Core Flow / Support Flow
**Actors:** [danh sách actor]
**Entities:** [danh sách entity]
**Dependency đầu vào:** [phase nào phải xong trước, hoặc "không có"]
**Phạm vi triển khai:**
- [hạng mục cụ thể, gắn với actor + entity]
**Đầu ra mong muốn:**
- [kết quả cụ thể]
**Checkpoint validation:**
- [ ] [điều kiện cụ thể để xác nhận phase hoàn thành]
**Rủi ro chính:**
- [rủi ro và cách giảm thiểu]
```

---

## 6. Red Flags đặc thù dự án

| Red Flag | Tại sao sai |
|----------|------------|
| Viết plan mà không đọc SPEC | Plan sẽ lệch scope, lệch actor, lệch entity |
| Dùng "làm admin", "làm user", "làm dữ liệu" trong plan | Không gắn actor cụ thể, không gắn entity cụ thể |
| Thêm feature không có trong SPEC | Vi phạm nguyên tắc bảo toàn scope |
| Triển khai support flow trước core flow | Ảnh hưởng giá trị sản phẩm |
| Viết code trước khi có plan được approve | Có thể đi sai hướng, tốn thời gian sửa |
| Claim "xong" khi build pass nhưng chưa verify plan compliance | Verification gate bắt buộc |
| Viết requirement gộp 2 action | Phải tách từng action riêng |
| Không ghi assumption khi SPEC chưa đủ | Assumption bị biến thành fact |

---

## 7. Tech Stack mặc định dự án

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict, no `any`)
- **Styling:** Tailwind CSS
- **UI Language:** Tiếng Việt
- **Auth:** NextAuth.js / Auth.js
- **Database:** Prisma ORM
- **Validation:** Zod
- **Testing:** Vitest + Playwright

---

## 8. File paths tham chiếu

| Mục đích | Path |
|----------|------|
| Quy tắc viết SPEC | `public/docs/Chung/Quy tắc viết phân tích yêu cầu chức năng.md` |
| Quy tắc viết Plan | `public/docs/Chung/Quy tắc viết kế hoạch triển khai.md` |
| Superpowers Guide | `public/docs/Chung/Superpowers.md` |
| SPEC template | `public/docs/Chung/Quy tắc viết phân tích yêu cầu chức năng.md` (section 18) |
| Plans (output) | `public/docs/[Tên-dự-án]/PLAN-[tên]-[module].md` |
| Specs (output) | `public/docs/[Tên-dự-án]/SPEC-[tên]-[module].md` |
