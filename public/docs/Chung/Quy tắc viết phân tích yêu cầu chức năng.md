# PRINCIPLES_FOR_FUNCTIONAL_REQUIREMENTS_ANALYSIS

---

## 1. MỤC ĐÍCH

File phân tích yêu cầu chức năng = làm rõ hệ thống làm gì, cho ai, với dữ liệu nào, theo quyền nào, build cái nào trước.

**Không phải nơi để:** viết code, mô tả kỹ thuật, bịa feature, viết kế hoạch implementation.

---

## 2. FORMAT MỖI REQUIREMENT

Mỗi requirement phải viết đúng format:

**`[Actor] [động từ] [object] — [kết quả]`**

Ví dụ:
- `Admin tạo sản phẩm — sản phẩm xuất hiện trong danh sách`
- `User xem danh sách đơn hàng của chính mình — hiển thị tối đa 20 items, sort theo created_at DESC`
- `User cập nhật hồ sơ — hệ thống validate và lưu, trả success message`

**Format ID bắt buộc:** `[Actor]-[Module]-[số]`

- Actor viết tắt: Admin → A, User → U, Guest → G, Moderator → M
- Module viết tắt: Product → PR, Order → OR, User → US, Landing → LP
- Số: 2 chữ số, bắt đầu từ 01

Ví dụ: `A-PR-01`, `U-OR-03`, `G-LP-01`

**"Đủ rõ" = đọc mô tả mà không cần hỏi thêm vẫn biết cần build gì.**

---

## 3. SAI — KHÔNG BAO GIỜ LÀM

1. `Hệ thống quản lý X` — không xác định actor, không xác định action
2. `User xem và chỉnh sửa profile` — gộp 2 action vào 1 row
3. `Admin quản lý người dùng` — gộp xem, tạo, khóa, xóa, đổi role
4. `Hệ thống xử lý dữ liệu` — động từ không cụ thể
5. Viết tech stack (Next.js, Prisma, server actions) trong spec
6. Gộp functional và non-functional vào cùng 1 bảng
7. Viết "có phân quyền" mà không chỉ rõ ai được gì, ở route nào
8. Không ghi transition bị cấm trong state machine (AI sẽ tự cho phép)
9. Ghi requirement mà không gắn actor cụ thể
10. Dùng từ marketing thay cho yêu cầu cụ thể

---

## 4. MỖI REQUIREMENT = 1 ACTION

Mỗi row trong bảng = đúng 1 action. Không bao giờ gộp 2 action vào 1 row.

| Sai | Đúng |
|-----|------|
| `Admin quản lý người dùng` | `Admin xem danh sách người dùng` |
| | `Admin xem chi tiết một người dùng` |
| | `Admin khóa tài khoản người dùng` |
| | `Admin mở khóa tài khoản người dùng` |
| | `Admin thay đổi role của người dùng` |
| `User xem và chỉnh sửa profile` | `User xem thông tin tài khoản` |
| | `User cập nhật hồ sơ cá nhân` |

---

## 5. ENTITY = STATE MACHINE + CROSS-ENTITY + DELETION

Mỗi entity phải mô tả đủ 3 phần.

### State Machine (bắt buộc nếu entity có trạng thái)

```
Entity: [Tên]
Trạng thái hợp lệ: [liệt kê tất cả]
Transitions:
  [A] → [B]
    - Ai được phép: [actor]
    - Điều kiện: [validation]
    - Side effects: [email, cập nhật inventory, ...]
  [A] ↛ [C]
    - Transition bị cấm: [tại sao]
```

Mỗi transition phải ghi: ai được phép, điều kiện, side effects.
Transition bị cấm phải ghi rõ với `↛`.

### Cross-Entity (nếu action ảnh hưởng nhiều entity)

```
Cross-Entity: [tên action]
Affected: [list entities]
Atomic: TẤT CẢ thành công hoặc không có gì. Fail bất kỳ → rollback toàn bộ.
```

### Deletion (bắt buộc)

```
Deletion:
- Soft delete hay Hard delete? (mặc định = soft)
- Khi xóa entity này, entity liên quan xử lý thế nào?
- Ai được phép xóa?
```

---

## 6. OWNERSHIP VÀ PERMISSION

Với mỗi entity, ghi rõ:

```
| Entity | Ownership | Ai được xem | Ai được sửa | Ai được xóa |
|--------|-----------|-------------|-------------|-------------|
| [tên] | [ai sở hữu] | [ai xem] | [ai sửa] | [ai xóa] |
```

Access Control:
- Public: [routes không cần auth]
- Protected: [routes cần auth]
- Admin-only: [routes cần role admin]

**Không được viết "có phân quyền". Phải viết cụ thể: ai được gì, ở route nào, trên dữ liệu nào.**

---

## 7. HAPPY PATH + ERROR PATH

Mỗi chức năng phải ghi đủ:

1. **Điều kiện trước** — user đã đăng nhập, có quyền, dữ liệu tồn tại
2. **Happy path** — từng bước user thao tác → hệ thống phản hồi
3. **Error paths** — TỪNG lỗi cụ thể, không phải "dữ liệu không hợp lệ" chung chung
4. **Kết quả mong muốn** — state sau thành công, response contract

Ví dụ error path:
- Email sai format → "Email không hợp lệ", không lưu
- Email trùng → "Email đã được sử dụng", không lưu
- User hết phiên → redirect về login

---

## 8. FUNCTIONAL vs NON-FUNCTIONAL

**Functional** trả lời: hệ thống làm gì.
**Non-functional** trả lời: hệ thống phải đạt chất lượng gì.

| Functional | Non-functional |
|------------|----------------|
| `Admin tạo sản phẩm` | `API response time < 200ms với 1000 concurrent users` |
| `User đặt đơn hàng` | `Lighthouse Performance >= 90` |
| `User xem lịch sử giao dịch` | `WCAG 2.1 AA compliant` |

**BẮT BUỘC tách riêng 2 loại này vào 2 bảng khác nhau.**

Non-functional phải có metric cụ thể. "Hệ thống phải nhanh" = sai. "API response < 200ms" = đúng.

---

## 9. ASSUMPTION

Nếu đầu vào chưa rõ, ghi assumption thành mục riêng.

```
| # | Assumption | Ghi chú |
|---|-----------|---------|
| 1 | [giả định cụ thể] | [tại sao giả định] |
```

**Không được viết assumption như thể đó là sự thật đã xác nhận.**

---

## 10. ACTOR PRIORITY

Khi nhiều actors, ghi rõ thứ tự build và lý do.

```
| Priority | Actor | Lý do |
|----------|-------|-------|
| 1 | [actor] | [vì sao trước] |
| 2 | [actor] | [vì sao sau] |
```

Tiebreaker:
1. Actor tạo data → build trước
2. Auth foundation → build trước
3. Actor ít permission nhất → build trước (Guest → User → Moderator → Admin)

---

## 11. SCOPE RÕ

```
### 2.1 Trong phạm vi (In Scope)
Những gì CÓ trong dự án.

### 2.2 Ngoài phạm vi (Out of Scope)
Những gì KHÔNG làm. Quan trọng hơn cả "có gì".
```

---

## 12. BUSINESS RULES

Mỗi ràng buộc nghiệp vụ không phải CRUD:

```
| # | Business Rule | Entity | Ai affected | Priority |
|---|---------------|--------|------------|----------|
| BR-01 | [rule cụ thể, có thể verify được] | [entity] | [actor] | Must/Should |
```

Ví dụ:
- `BR-01 | User chỉ được hủy đơn trong vòng 24 giờ | Order | User | Must`
- `BR-02 | Tối đa 5 sản phẩm cùng loại trong một đơn hàng | OrderItem | User | Must`
- `BR-03 | Admin không thể tự thay đổi role của chính mình | User | Admin | Must`

Rule phải verify được. "Hệ thống phải tốt" = sai. "User phải đủ 18 tuổi để đăng ký" = đúng.

---

## 13. EXTERNAL INTEGRATIONS

Khi tích hợp bên thứ ba:

```
| # | Integration | Provider | Critical | Fallback |
|---|-------------|---------|---------|---------|
| EI-01 | [tên] | [provider] | Yes/No | [khi fail thì sao] |
```

Với mỗi integration, ghi rõ:
- Happy path
- Failure modes
- Fallback behavior
- Retry policy

Critical = Yes → PHẢI có fallback rõ ràng.

---

## 14. CẤU TRÚC FILE

Mặc định viết đủ 17 sections theo thứ tự:

```
1. Tổng quan dự án
2. Scope (in/out)
3. Actor chính
4. Core Entities (kèm State Machine, Cross-Entity, Deletion)
5. Yêu cầu chức năng theo actor
6. Yêu cầu phi chức năng
7. Ownership và Permission
8. Actor Priority
9. Build Order
10. Risk Areas
11. Assumptions
12. Completion Criteria
13. Business Rules
14. External Integrations
15. Review Process
16. Glossary
17. Changelog
```

**Tên actor và entity phải NHẤT QUÁN xuyên suốt file. Không đổi cách gọi.**

---

## 15. GLOSSARY

Bắt buộc ở cuối file. Liệt kê thuật ngữ có thể gây nhầm lẫn.

```
| Thuật ngữ | Định nghĩa trong spec này |
|-----------|---------------------------|
| [tên] | [nghĩa chính xác] |
```

---

## 16. FILE NAMING

```
SPEC-[tên-dự-án]-[module].md
SPEC-[tên-dự-án]-OVERVIEW.md    ← overview (nếu nhiều module)
```

Update spec: giữ nguyên file, thêm changelog entry ở đầu file.

---

## 17. KHI NÀO CẬP NHẬT SPEC

**Phải cập nhật khi:**
- Stakeholder thêm/thay đổi requirement mới
- Phát hiện assumption SAI từ đầu
- Scope thay đổi

**Không cần cập nhật khi:**
- Thay đổi tech stack nhưng giữ nguyên requirements
- Refactor code nhưng giữ nguyên behavior
- Fix bug không thay đổi requirements

**Spec là source of truth.** Code không match spec → fix CODE, không sửa spec.

---

## 18. TEMPLATE

```markdown
# [Tên dự án]

## 1. Tổng quan dự án
Cái gì, cho ai, giải quyết vấn đề gì.
Loại dự án: [web app / static site / API / CLI / ...]
Tech stack gợi ý: [nếu đã biết]

## 2. Scope
### 2.1 In Scope
[Những gì CÓ]

### 2.2 Out of Scope
[Những gì KHÔNG làm]

## 3. Actor chính
### 3.1 [Tên Actor]
- Mô tả: ai, vai trò gì
- Quyền: liệt kê cụ thể
- Flow chính: 3-5 bước

## 4. Core Entities
### 4.1 [Entity 1]
- Mô tả: cái gì
- Thuộc tính: field chính
- Ai tạo / ai xem / ai sửa / ai xóa
- Trạng thái: [nếu có]
  - Trạng thái hợp lệ: [liệt kê]
  - Transitions: [Ai được phép, điều kiện, side effects]
- Cross-Entity: [action ảnh hưởng entity khác, atomic]
- Deletion: [soft/hard, cascade]

## 5. Yêu cầu chức năng
### 5.1 [Actor] - [Module]
| ID | Yêu cầu | Mô tả chi tiết |
|----|----------|----------------|
| XX-01 | [mô tả ngắn] | [Actor] [action] [object] — [kết quả] |

**Format:** `[Actor] [động từ] [object] — [kết quả]`
**ID pattern:** `[Actor]-[Module]-[số]` (VD: A-PR-01)

## 6. Yêu cầu phi chức năng
| ID | Yêu cầu | Tiêu chí đo lường |
|----|----------|-------------------|
| NF-01 | [mô tả] | [concrete metric] |

## 7. Ownership và Permission
| Entity | Ownership | Ai được xem | Ai được sửa |
|--------|-----------|-------------|-------------|
| [tên] | [ai sở hữu] | [ai xem] | [ai sửa] |

Access Control:
- Public: [routes không cần auth]
- Protected: [routes cần auth]
- Admin-only: [routes cần role admin]

## 8. Actor Priority
| Priority | Actor | Lý do |
|----------|-------|-------|
| 1 | [actor] | [vì sao trước] |
| 2 | [actor] | [vì sao sau] |

## 9. Build Order
1. Phase 1: [tên] — [mô tả]
2. Phase 2: [tên] — [mô tả]

## 10. Risk Areas
| Risk | Mức độ | Mitigation |
|------|--------|------------|
| [mô tả] | Low/Med/High | [cách giảm] |

## 11. Assumptions
| # | Assumption | Ghi chú |
|---|-----------|---------|
| 1 | [giả định] | [lý do] |

## 12. Completion Criteria
- [ ] [tiêu chí đo lường được]

## 13. Business Rules
| # | Business Rule | Entity | Ai affected | Priority |
|---|---------------|--------|------------|----------|
| BR-01 | [rule] | [entity] | [actor] | Must/Should |

## 14. External Integrations
| # | Integration | Provider | Critical | Fallback |
|---|-------------|---------|---------|---------|
| EI-01 | [tên] | [provider] | Yes/No | [khi fail] |

## 15. Review Process
- Người review: [ai]
- Approval criteria: [gì]
- Re-review trigger: [khi nào]

## 16. Glossary
| Thuật ngữ | Định nghĩa |
|-----------|------------|
| [tên] | [nghĩa] |

## 17. Changelog
- [YYYY-MM-DD] [Người sửa] — [lý do]: [mô tả thay đổi]
```

---

## 19. ADAPTATION

Không phải dự án nào cũng cần đủ 17 sections.

**Static site / Landing page** (không có auth, không có database):
- Tối thiểu: Sections 1, 2, 3, 5, 9, 16, 17
- Có thể bỏ: 4, 6, 7, 8, 10, 11, 12, 13, 14, 15

**API / Backend Service:**
- Tất cả 17 sections

**Web App (FE + BE):**
- Tất cả 17 sections

**Nguyên tắc:** Nếu không chắc có nên bỏ hay không → ĐỪNG BỎ. Giản lược luôn tốt hơn thiếu.
