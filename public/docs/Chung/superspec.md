# Superspec - Hướng Dẫn Sử Dụng Chi Tiết

**Specification-Driven Development (SDD) với Superpowers**

Superspec là một công cụ giúp hỗ trợ phát triển phần mềm theo phương pháp **Specification-Driven Development (SDD)** - phát triển dựa trên định nghĩa chi tiết. Nó kết hợp khả năng quản lý tài liệu (constitution, specs, plans, tasks) của spec-kit với các kỹ năng nâng cao từ obra/superpowers (brainstorming, writing-plans, TDD, code-review).

> **Tương thích**: Superspec hoạt động với bất kỳ AI coding agent nào hỗ trợ Skill, bao gồm Cursor, Claude Code, Codex CLI, và nhiều công cụ khác.

---

## Mục Lục

- [Lợi ích](#lợi-ích-khi-sử-dụng-superspec)
- [Cài đặt cho Cursor](#cài-đặt-cho-cursor)
- [Các lệnh cơ bản](#các-lệnh-cơ-bản)
- [Quy trình làm việc](#quy-trình-làm-việc-6-giai-đoạn)
- [Khởi đầu nhanh](#khởi-đầu-nhanh)
- [Khai phá chi tiết từng giai đoạn](#khai-phá-chi-tiết-từng-giai-đoạn)
- [Tài khoản phục hồi khi gặp sự cố](#tài-khoản-phục-hồi-khi-gặp-sự-cố)
- [Công thức cuối cùng](#công-thức-cuối-cùng)

---

## Lợi Ích Khi Sử Dụng Superspec

### 1. Chất lượng tài liệu tăng vọt

Thay vì viết code rồi mới sửa sau, Superspec bắt buộc phải định nghĩa rõ ràng **cái gì** cần xây dựng, **tại sao**, và **làm thế nào để kiểm tra**. Mỗi yêu cầu đều có:

- **User Stories** - mô tả người dùng sẽ tương tác như thế nào
- **Acceptance Scenarios** - mô tả theo cú pháp Given/When/Then để kiểm thử độc lập
- **Edge Cases** - các trường hợp biên

### 2. Giảm thiểu lặp lại và sửa lỗi

Qua giai đoạn **brainstorming** (dùng kỹ năng brainstorming hoặc built-in), hệ thống sẽ nắm bắt những trường hợp biên mà bạn có thể bỏ sót:

- Lỗi nhập liệu sai
- Mạng lỗi, database lỗi
- Lỗi bảo mật (injection, unauthorized access)
- Hiệu ứng mở rộng (10x hay 100x người dùng)
- Xung đột dữ liệu đồng thời

### 3. Phân chia công việc thông minh

Lệnh `/superspec.tasks` tự động tạo danh sách công việc với các marker thực thi:

| Marker | Ý nghĩa |
|--------|---------|
| `[TDD]` | Phải theo quy trình Red-Green-Refactor |
| `[P]` | Có thể chạy song song với task khác |
| `[SUBAGENT]` | Có thể ủy quyền cho subagent |
| `[REVIEW]` | Cần review trước khi tiếp tục |

### 4. Tiến độ được lưu lại và phục hồi

Mỗi giai đoạn được ghi lại vào file `.specify/specs/xxx/progress.yml`. Nếu cuộc hội thoại bị gián đoạn (agent timeout, mất điện, đóng cửa sổ), bạn có thể tiếp tục chính xác từ chỗ đã dừng lại.

### 5. Điểm kiểm tra con người

Tại mỗi giai đoạn chuyển tiếp (giai đoạn 1 sang giai đoạn 2, 2 sang 3...), agent sẽ **dừng lại và cho phép bạn xác nhận** trước khi tiếp tục. Bạn toàn quyền kiểm soát tốc độ và chất lượng.

### 6. Tự động phát hiện kỹ năng nâng cao

Khi các kỹ năng superpowers (brainstorming, writing-plans, TDD, etc.) được cài đặt, Superspec tự động nhận diện và sử dụng chúng để tăng cường trải nghiệm. Nếu chưa cài, nó vẫn hoạt động với phương pháp có sẵn.

---

## Cài Đặt Cho Cursor

### Bước 1: Cài đặt Superpowers (nếu chưa có)

Nếu bạn chưa cài obra/superpowers, thực hiện:

```bash
# Clone repository
git clone https://github.com/obra/superpowers.git ~/.agents/skills/superpowers

# Hoặc nếu sử dụng Cursor, copy vào thư mục skills
cp -r superpowers/skills/superpowers C:/Users/Admin/.cursor/skills/superpowers/skills/
```

### Bước 2: Cài đặt Superspec

**Cách 1: Symlink (khuyến nghị)**

```powershell
# Tạo symlink từ thư mục superspec vào skills của Cursor
New-Item -ItemType SymbolicLink -Path "C:\Users\Admin\.cursor\skills\superpowers\skills\superspec" -Target "C:\path\to\superspec-main\superspec-main"
```

**Cách 2: Copy trực tiếp**

```powershell
# Copy toàn bộ thư mục superspec vào skills
Copy-Item -Recurse "C:\path\to\superspec-main\superspec-main" "C:\Users\Admin\.cursor\skills\superpowers\skills\superspec"
```

**Cách 3: Symlink người dùng global**

```powershell
# Đặt cho mọi project đều sử dụng được
New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\.agents\skills\superspec" -Target "C:\path\to\superspec-main\superspec-main"
```

### Bước 3: Xác minh cài đặt

Trong Cursor, gõ lệnh:

```
/superspec.status
```

Nếu thấy thông báo dạng như bên dưới thì đã thành công:

```
Superspec Project Status
========================
Constitution: Chưa có (chạy /superspec.constitution để bắt đầu)
Superpowers:  brainstorming (đã phát hiện), writing-plans (đã phát hiện)
```

---

## Các Lệnh Cơ Bản

Superspec cung cấp 9 lệnh chính:

| Lệnh | Chức năng |
|------|-----------|
| `/superspec.constitution` | Tạo văn bản quản lý dự án (nguyên tắc, stack, chất lượng) |
| `/superspec.specify` | Viết định nghĩa chi tiết cho một tính năng |
| `/superspec.brainstorm` | Kiểm tra cạnh viên và tìm lỗ hổng thiết kế |
| `/superspec.plan` | Thiết kế phương án kỹ thuật triển khai |
| `/superspec.tasks` | Phân chia thành danh sách công việc |
| `/superspec.execute` | Thực thi triển khai với kỷ luật TDD |
| `/superspec.review` | Đánh giá code theo yêu cầu của định nghĩa |
| `/superspec.checklist` | Tạo danh sách kiểm tra theo ngữ cảnh |
| `/superspec.status` | Hiển thị tiến độ hiện tại |

---

## Quy Trình Làm Việc 6 Giai Đoạn

```
Giai đoạn 0:  Constitution   (Thiết lập quản lý)
     ↓
Giai đoạn 1:  Specify        (Định nghĩa yêu cầu)
     ↓
Giai đoạn 2:  Brainstorm     (Kiểm tra cạnh viên)
     ↓
Giai đoạn 3:  Plan           (Thiết kế kỹ thuật)
     ↓
Giai đoạn 4:  Tasks          (Phân chia công việc)
     ↓
Giai đoạn 5:  Execute        (Triển khai code)
     ↓
Giai đoạn 6:  Review         (Kiểm tra cuối cùng)
```

**Mỗi giai đoạn đều có công cụ riêng**:
- Tiến độ được ghi lại
- Có thể quay lại sửa chữa
- Điểm kiểm tra con người giữa các giai đoạn

---

## Khởi Đầu Nhanh

### 1. Khởi tạo quản lý dự án

```
/superspec.constitution DựÁnCủaTôi
```

Hệ thống sẽ hỏi bạn về:

- Nguyên tắc cốt lõi của dự án
- Ngôn ngữ và framework
- Quy ước đặt tên
- Công cụ kiểm thử
- Các kiểu kiểm tra chất lượng

### 2. Định nghĩa tính năng đầu tiên

```
/superspec.specify "Đăng nhập bằng email và mật khẩu"
```

Hệ thống tạo file `.specify/specs/001-login/spec.md` với:

- User stories có xếp hạng ưu tiên
- Acceptance scenarios
- Brainstorm prompts
- Open questions

### 3. Kiểm tra cạnh viên

```
/superspec.brainstorm .specify/specs/001-login/spec.md
```

Agent sẽ **hỏi từng câu hỏi một** để khám phá:

- Giới hạn đầu vào (boundary conditions)
- Lỗi hệ thống (network lỗi, database lỗi)
- Vấn đề bảo mật
- Lỗi người dùng (UX)
- Lỗi mở rộng

### 4. Kế hoạch + Công việc + Thực thi

```
/superspec.plan                            # Thiết kế kỹ thuật
/superspec.tasks                           # Phân chia task
/superspec.execute                         # Viết code với TDD
/superspec.review                          # Kiểm tra cuối
```

---

## Khai Phá Chi Tiết Từng Giai Đoạn

### Giai đoạn 0: Constitution - Văn Bản Quản Lý

**Mục đích**: Thiết lập "hiến pháp" cho toàn bộ dự án.

**Nó bao gồm**:

- Tên và mô tả dự án
- Các nguyên tắc phát triển
- Công nghệ sử dụng (ngôn ngữ, framework, thư viện)
- Quy ước đặt tên và cấu trúc thư mục
- Mục tiêu chất lượng (test coverage, code review)
- Các công cụ kiểm thử được sử dụng

**Tại sao quan trọng**: Khi có tranh chấp về quyết định kỹ thuật, constitution là nguồn sự thật cuối cùng. Ví dụ: "Nếu quy ước chỉ dùng PostgreSQL, ta không được chọn MongoSQL nếu không có lý do chính đáng."

**Output**: `.specify/memory/constitution.md`

---

### Giai đoạn 1: Specify - Định Nghĩa Yêu Cầu

**Mục đích**: Rời rạc hóa yêu cầu người dùng thành những khối có thể kiểm thử độc lập.

**Nó bao gồm**:

- **User Stories**: Các kịch bản sử dụng, xếp hạng P1/P2/P3
- **Acceptance Scenarios**: Theo cú pháp Given/When/Then
- **Functional Requirements**: Các tính năng bắt buộc phải có
- **Success Criteria**: Các chỉ số đo lường được
- **Assumptions**: Các giả định ban đầu

**Tam quan trọng**: Một user story P1 phải có thể triển khai và kiểm thử **độc lập**, không phụ thuộc vào P2 hay P3. Nó chính là "MVP slice" của tính năng.

**Output**: `.specify/specs/NNN-tên-tính-năng/spec.md`

---

### Giai đoạn 2: Brainstorm - Kiểm Tra Cạnh Viên

**Mục đích**: Tìm lỗ hổng trước khi bắt đầu viết code.

**Quá trình**: Agent hỏi **một câu hỏi mỗi lần**, tập trung vào:

| Danh mục | Ví dụ câu hỏi |
|---------|---------------|
| Boundary | "Nếu người dùng nhập mật khẩu dài 0 ký tự thì sao?" |
| Error | "Nếu database mất kết nối giữa chỗ reset password thì sao?" |
| Scale | "Nếu 10.000 người dùng cùng lúc reset password thì sao?" |
| Security | "Có thể làm gì để tránh kẻ gửi request giả mạo?" |
| UX | "Nếu người dùng đóng tab giữa chỗ nhập OTP thì sao?" |

**Kết quả**: File spec.md được cập nhật với:

- Các câu hỏi đã được trả lời (trong bảng Open Questions)
- Những phát hiện mới (trong Brainstorm Log)
- Các edge cases đã xử lý

**Output**: Cập nhật `spec.md`, tạo `Brainstorm Log`

---

### Giai đoạn 3: Plan - Thiết Kế Kỹ Thuật

**Mục đích**: Quyết định **cách nào** triển khai, không phải **cái gì**.

**Nó bao gồm**:

- Kiểm tra tính phù hợp với constitution
- Phân tích codebase hiện tại (ngôn ngữ, cấu trúc, storage)
- Xác định các file cần tạo / sửa
- Chiến lược thực thi: task nào cần TDD, task nào có thể chạy song song, chỗ nào cần review

**Output**: `.specify/specs/NNN-tên-tính-năng/plan.md`

---

### Giai đoạn 4: Tasks - Phân Chia Công Việc

**Mục đích**: Phân rã giai đoạn 3 thành những bước có thể thực thi ngay.

**Tổ chức**:

```
Giai đoạn 1: Setup
  ├─ [ ] T001: Cài đặt thư viện X
  └─ [ ] T002: Cấu hình môi trường

Giai đoạn 2: Foundation
  └─ [ ] T003: Tạo bảng dữ liệu [TDD]

Giai đoạn 3: User Stories
  └─ [P] [TDD] T004: Hiển thị form login
  └─ [P] [TDD] T005: Xử lý submit form

Giai đoạn 4: Polish
  └─ [ ] T012: Test e2e
  └─ [REVIEW] T013: Code review
```

**Marker thực thi**:

- `[P]` = Parallel: Task này có thể chạy song song với task khác
- `[TDD]` = Test-Driven Development: Phải viết test trước
- `[REVIEW]` = Code Review: Phải review trước khi tiếp tục
- `[SUBAGENT]` = Subagent: Có thể ủy quyền cho agent phụ

**Output**: `.specify/specs/NNN-tên-tính-năng/tasks.md`

---

### Giai đoạn 5: Execute - Triển Khai Code

**Mục đích**: Viết code theo kỷ luật TDD, với điểm kiểm tra con người.

**Quá trình với TDD** (cho task có marker `[TDD]`):

```
RED:    Viết test mô tả hành vi mong muốn → Test fail
GREEN:  Viết code ít nhất để test pass
REFACTOR: Đánh giá lại code (reusability, performance)
```

**Quá trình với Subagent** (cho task có marker `[SUBAGENT]`):

```
1. Trích xuất yêu cầu cụ thể từ spec và plan
2. Khởi tạo subagent với context đầy đủ
3. Thu thập kết quả
4. Tích hợp vào code chính
5. Chạy test
```

**Điểm kiểm tra con người**: Tại mỗi chặn mỗi giai đoạn (Setup → Foundation → User Stories → Polish), agent sẽ dừng lại và cho phép bạn xác nhận.

**Output**: Code thực tế, các checkbox trong `tasks.md` được đánh dấu `[x]`

---

### Giai đoạn 6: Review - Kiểm Tra Cuối Cùng

**Mục đích**: Đảm bảo code thực tế phù hợp với định nghĩa ban đầu.

**Kiểm tra theo 5 chiều**:

| Chiều đo | Nội dung |
|----------|----------|
| Spec compliance | Tất cả acceptance scenarios đã được implement? |
| Edge case coverage | Tất cả brainstormed cases đã được xử lý? |
| Constitution compliance | Tất cả nguyên tắc quản lý đã được tuân thủ? |
| Code quality | Có bug, vấn đề bảo mật, xử lý lỗi? |
| Test coverage | Có test cho các đường dẫn critical? |

**Confidence Score**: Mỗi phát hiện được chấm điểm 0-100. Chỉ hiển thị những phát hiện có điểm >= 80.

**Output**: Bảng phát hiện theo độ nghiêm trọng (Critical > Important > Suggestion)

---

## Tài Khoản Phục Hồi Khi Gặp Sự Cố

Superspec được thiết kế để **không mất tiến độ**. Tất cả trạng thái đều được lưu trong `.specify/` như file markdown và YAML.

### Khi nào có thể phục hồi?

- Agent timeout
- Mất điện / đóng máy
- Đóng cửa sổ Cursor
- Bất kỳ gián đoạn nào

### Cách phục hồi?

```
/superspec.status
```

Hệ thống sẽ hiển thị:

```
Superspec Project Status
========================
Constitution: Đã xong (2026-04-22)
Superpowers:  brainstorming (phát hiện), writing-plans (chưa phát hiện)

Tính năng:
  001-đăng-nhập  [####----] thực thi (Giai đoạn 5/6) — 11/19 task đã xong
  002-upload     [##------] brainstorm (Giai đoạn 2/6) — 2 câu hỏi chưa giải quyết

Đề xuất bước tiếp theo: /superspec.execute 001
```

### Nguyên tắc phục hồi

| Giai đoạn | Tín hiệu hồi sức | Cách tiếp tục |
|-----------|-------------------|---------------|
| `brainstorm` | Có Brainstorm Log, Open Questions | Bỏ qua đã thảo luận, tiếp tục từ câu hỏi chưa giải quyết |
| `execute` | Có checkbox trong tasks.md | Bỏ qua task đã đánh dấu `[x]`, tiếp tục từ task chưa đánh dấu |
| `review` | Có checklist chưa xong | Tiếp tục từ mục chưa đánh dấu |

---

## Công Thức Cuối Cùng

```
1. /superspec.constitution TênDựÁn
2. /superspec.specify "Mô tả tính năng"
3. /superspec.brainstorm .specify/specs/001/spec.md   (lặp lại nhiều lần)
4. /superspec.plan
5. /superspec.tasks
6. /superspec.execute
7. /superspec.review
```

**Công thức thật sự**: Chỉ cần 3 bước đầu tiên vững vàng, phần còn lại sẽ tự nhiên xảy ra. Giai đoạn 1-3 (constitution, specify, brainstorm) chính là 80% giá trị của Superspec. Hãy dành nhiều thời gian cho nó nhất.

---

## Cấu Trúc Thư Mục Được Tạo

```
dự-án-của-bạn/
├── .specify/
│   ├── memory/
│   │   └── constitution.md      # Nguyên tắc quản lý
│   ├── superpowers.yml          # Trạng thái kỹ năng (tự động)
│   ├── specs/
│   │   └── 001-tên-tính-năng/
│   │       ├── spec.md          # Định nghĩa tính năng
│   │       ├── plan.md          # Kế hoạch kỹ thuật
│   │       ├── tasks.md         # Danh sách task
│   │       ├── progress.yml     # Tiến độ (tự động)
│   │       └── checklist-*.md   # Checklist kiểm tra
│   └── templates/               # Mẫu tài liệu
└── ... (mã nguồn của bạn)
```

---

## Lợi Ích Theo Vai Trò

| Vai trò | Lợi ích chính |
|---------|--------------|
| **Developer** | Không còn phải đoán yêu cầu; có checklist rõ ràng để follow |
| **Tech Lead** | Đảm bảo team tuân thủ constitution; review có cấu trúc |
| **PO/PM** | Tất cả yêu cầu đều có acceptance criteria đo lường được |
| **QA** | Có sẵn danh sách edge cases để test; acceptance scenarios rõ ràng |
| **Onboarding** | New member đọc constitution là hiểu được toàn bộ dự án |

---

## Các Tình Huống Sử Dụng Phổ Biến

### Tưởng: Bắt đầu dự án mới

```
/superspec.constitution WebsiteBánHàng
/superspec.specify "Giỏ hàng mua sắm"
# ... brainstorm nhiều lần ...
```

### Trung bình: Thêm tính năng mới

```
/superspec.specify "Thanh toán qua PayPal"
/superspec.brainstorm .specify/specs/003/spec.md
```

### Nhẹ: Chỉ cần phân tích

```
/superspec.specify "OAuth2 login"
/superspec.brainstorm .specify/specs/004/spec.md
/superspec.plan
```

### Kỹ thuật: Chỉ cần thực thi

```
/superspec.execute .specify/specs/002/
```

---

**Tài liệu này được viết cho Superspec phiên bản 1.0.0**
