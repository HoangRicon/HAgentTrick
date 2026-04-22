# Superpowers — Khung kỹ năng Agent & Phương pháp phát triển phần mềm

## 1. Giới thiệu

[Superpowers](https://github.com/obra/superpowers) là một **khung kỹ năng (skills framework)** hoàn chỉnh cho coding agent, được xây dựng trên nền tảng tập hợp các skill có thể ghép nối và các hướng dẫn ban đầu giúp agent sử dụng chúng đúng cách.

Repo: [github.com/obra/superpowers](https://github.com/obra/superpowers) — **161k stars, 14k forks**

### 1.1 Nó hoạt động như thế nào

Superpowers bắt đầu từ khi bạn khởi động coding agent. Ngay khi agent nhận ra bạn đang xây dựng thứ gì đó, nó **không nhảy ngay vào viết code**. Thay vào đó, nó lùi lại và hỏi bạn thực sự đang cố làm gì.

Quy trình cốt lõi:

1. **Brainstorming** — Agent đặt câu hỏi để hiểu rõ yêu cầu, trình bày thiết kế thành từng phần nhỏ để bạn xác nhận
2. **Viết kế hoạch** — Sau khi thiết kế được approve, agent tạo kế hoạch triển khai chi tiết đến mức một junior engineer có thể follow
3. **Implement** — Agent thực thi qua từng task nhỏ (2-5 phút/task), tự review và tiếp tục. Không hiếm khi Claude tự làm việc autonomous trong vài giờ mà không lệch khỏi kế hoạch
4. **Checkpoint** — Sau mỗi giai đoạn, agent dừng lại để bạn xác nhận trước khi tiếp tục

### 1.2 Điểm khác biệt

| Không phải | Mà là |
|---|---|
| Agent nhảy thẳng vào viết code | Agent hỏi trước, hiểu rõ mới làm |
| Developer phải gõ từng lệnh | Skills trigger tự động khi phát hiện context phù hợp |
| Agent làm một mình | **Subagent-driven development** — nhiều agent con cùng làm, có review |
| Cứ viết code rồi test sau | **RED-GREEN-REFACTOR TDD** — test trước, code sau |

### 1.3 Triết lý cốt lõi

- **Test-Driven Development** — Viết test trước, luôn luôn
- **Systematic over ad-hoc** — Quy trình hơn đoán mò
- **Complexity reduction** — Đơn giản là mục tiêu hàng đầu
- **Evidence over claims** — Verify trước khi khẳng định thành công

---

## 2. Cài đặt

### 2.1 Claude Code (Marketplace chính thức)

```bash
# Marketplace chính thức của Anthropic
/plugin install superpowers@claude-plugins-official

# Hoặc qua Superpowers marketplace
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

### 2.2 Claude Code CLI (macOS/Linux)

```bash
# Tải script cài đặt
curl -fsSL https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/scripts/install.sh | bash
```

### 2.3 Cursor

```bash
# Trong Cursor Agent chat
/add-plugin superpowers

# Hoặc tìm "superpowers" trong plugin marketplace
```

### 2.4 OpenAI Codex CLI

```bash
# Mở giao diện tìm plugin
/plugins

# Tìm "Superpowers", chọn Install Plugin
```

### 2.5 OpenAI Codex App

Trong Codex app, click **Plugins** ở sidebar → tìm **Superpowers** trong mục Coding → click **+** và làm theo hướng dẫn.

### 2.6 OpenCode

```bash
Fetch and follow instructions from https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.opencode/INSTALL.md
```

### 2.7 GitHub Copilot CLI

```bash
copilot plugin marketplace add obra/superpowers-marketplace
copilot plugin install superpowers@superpowers-marketplace
```

### 2.8 Gemini CLI

```bash
gemini extensions install https://github.com/obra/superpowers

# Cập nhật
gemini extensions update superpowers
```

---

## 3. Quy trình làm việc cơ bản

### 3.1 Sơ đồ tổng quan

```
[Bắt đầu dự án]
      │
      ▼
┌─────────────────┐
│  brainstorming  │ ← Agent hỏi, bạn trả lời. Thiết kế được trình bày
└────────┬────────┘     thành từng phần nhỏ để xác nhận.
         ▼
┌─────────────────┐
│  using-git-     │ ← Tạo workspace cô lập trên branch mới
│  worktrees      │   Setup project, verify baseline sạch
└────────┬────────┘
         ▼
┌─────────────────┐
│  writing-plans   │ ← Break work thành task nhỏ 2-5 phút.
└────────┬────────┘   Mỗi task có file path, code, verification.
         ▼
┌─────────────────────────┐
│  subagent-driven-       │ ← Dispatch agent con cho từng task.
│  development /           │   Review 2 giai đoạn: spec compliance
│  executing-plans         │   → code quality. Checkpoint giữa các task.
└────────┬────────────────┘
         ▼
┌─────────────────┐
│  test-driven-   │ ← RED: viết test fail
│  development     │   GREEN: viết code minimal cho test pass
└────────┬────────┘   REFACTOR: dọn code
         ▼
┌─────────────────┐
│  requesting-    │ ← Review giữa các task.
│  code-review    │   Báo cáo theo mức độ nghiêm trọng.
└────────┬────────┘   Issue nghiêm trọng → block tiến độ.
         ▼
┌─────────────────┐
│  finishing-a-   │ ← Verify tests, present options
│  development-   │   (merge/PR/keep/discard)
│  branch         │   Cleanup worktree.
└─────────────────┘
```

### 3.2 Chi tiết từng bước

#### Bước 1: Brainstorming (trước khi viết code)

Kích hoạt khi agent phát hiện bạn đang xây dựng thứ gì đó.

- Agent đặt câu hỏi Socratic để tinh chỉnh ý tưởng thô
- Khám phá các alternatives
- Trình bày thiết kế thành từng phần nhỏ để xác nhận
- Lưu design document khi hoàn tất

#### Bước 2: Git Worktrees

Kích hoạt sau khi design được approve.

- Tạo workspace cô lập trên branch mới
- Chạy project setup
- Verify baseline sạch (tests pass)

#### Bước 3: Writing Plans

Kích hoạt khi design được approve.

- Break work thành task nhỏ, mỗi task 2-5 phút
- Mỗi task có:
  - **File path chính xác**
  - **Code hoàn chỉnh**
  - **Verification step** để confirm đã xong
- Tôn trọng YAGNI (You Aren't Gonna Need It) và DRY

#### Bước 4: Subagent-driven Development / Executing Plans

Kích hoạt khi có plan.

- Dispatch fresh subagent cho từng task
- **Review 2 giai đoạn**:
  1. Spec compliance — có đúng thiết kế không?
  2. Code quality — code có tốt không?
- Tiếp tục forward sau mỗi checkpoint

#### Bước 5: Test-Driven Development

Kích hoạt trong quá trình implement.

- **RED** — Viết test fail, watch it fail
- **GREEN** — Viết code minimal để test pass, watch it pass
- **REFACTOR** — Dọn code, commit
- Xóa code được viết trước khi có test

#### Bước 6: Requesting Code Review

Kích hoạt giữa các task.

- Review dựa trên plan
- Báo cáo issue theo mức độ nghiêm trọng
- Issue nghiêm trọng (critical) → block tiến độ

#### Bước 7: Finishing a Development Branch

Kích hoạt khi tasks hoàn tất.

- Verify tests
- Trình bày options: merge / PR / keep / discard
- Cleanup worktree

---

## 4. Thư viện Skills

### 4.1 Testing

| Skill | Mô tả |
|-------|--------|
| `test-driven-development` | RED-GREEN-REFACTOR cycle (kèm testing anti-patterns reference) |

### 4.2 Debugging

| Skill | Mô tả |
|-------|--------|
| `systematic-debugging` | Quy trình root cause 4 giai đoạn (kèm root-cause-tracing, defense-in-depth, condition-based-waiting) |
| `verification-before-completion` | Đảm bảo thực sự đã fix |

### 4.3 Collaboration

| Skill | Mô tả |
|-------|--------|
| `brainstorming` | Tinh chỉnh thiết kế bằng phương pháp Socratic |
| `writing-plans` | Break work thành task nhỏ, mỗi task có file path + code + verification |
| `executing-plans` | Batch execution với checkpoint |
| `dispatching-parallel-agents` | Workflow subagent đồng thời |
| `requesting-code-review` | Pre-review checklist |
| `receiving-code-review` | Phản hồi feedback |
| `using-git-worktrees` | Parallel development branches |
| `finishing-a-development-branch` | Merge/PR decision workflow |
| `subagent-driven-development` | Fast iteration với two-stage review (spec compliance, code quality) |

### 4.4 Meta

| Skill | Mô tả |
|-------|--------|
| `writing-skills` | Tạo skill mới theo best practices (kèm testing methodology) |
| `using-superpowers` | Giới thiệu hệ thống skills |

---

## 5. Cấu trúc thư mục repo

```
superpowers/
├── .claude-plugin/        # Plugin config cho Claude Code
├── .codex/                # Plugin config cho Codex
├── .cursor-plugin/        # Plugin config cho Cursor
├── .github/               # GitHub workflows
├── .opencode/             # Plugin config cho OpenCode
├── agents/                # Agent definitions
├── commands/              # Custom commands
├── docs/                  # Tài liệu chi tiết
├── hooks/                 # Git hooks (auto-update graph, etc.)
├── scripts/               # Install scripts
├── skills/                # Thư viện skills
│   ├── brainstorming/
│   ├── debugging/
│   ├── testing/
│   ├── collaboration/
│   └── writing-skills/
├── tests/                 # Test cho skills
├── CLAUDE.md              # Hướng dẫn cho Claude
├── GEMINI.md              # Hướng dẫn cho Gemini
└── README.md
```

---

## 6. Cách Skills hoạt động

### 6.1 Trigger tự động

**Agent tự kiểm tra skills trước mọi task.** Skills là mandatory workflows, không phải suggestions.

```
Khi bạn nói: "Thêm chức năng login"
Agent tự động:
1. Check skills liên quan
2. Kích hoạt brainstorming → hỏi về thiết kế
3. Chờ bạn approve design
4. Gọi writing-plans → tạo task list
5. Chờ bạn approve plan
6. Thực thi từng task với TDD
```

### 6.2 Skills không phải commands

Khác với lệnh `/command`, skills trigger dựa trên **context detection**:

- Không cần gõ lệnh gì đặc biệt
- Agent nhận diện tình huống và kích hoạt skill phù hợp
- Skills có thể chain với nhau

---

## 7. So sánh với workflow thông thường

### Workflow thông thường (không Superpowers)

```
1. Developer: "Viết cho tôi chức năng login"
2. Agent: Viết code luôn
3. Developer: "Sai rồi, cần thêm email verification"
4. Agent: Thêm email verification
5. Developer: "Bây giờ sửa lại UI"
6. Agent: Sửa UI, break something khác
7. Developer: "Bug rồi, revert đi"
...
```

### Workflow với Superpowers

```
1. Developer: "Tôi muốn thêm chức năng login"
2. Agent (brainstorming): "Bạn muốn social login hay email/password?
   Có cần email verification không? Quên mật khẩu có cần không?"
3. Developer: "Chỉ email/password thôi"
4. Agent: Trình bày thiết kế: Auth flow → Database schema → API endpoints
5. Developer: "OK, design đúng"
6. Agent (writing-plans): "Đây là 8 tasks: setup Prisma schema,
   viết API route, viết test RED, implement GREEN, refactor..."
7. Developer: "Go"
8. Agent: Thực thi từng task với TDD, checkpoint sau task 3, 5, 7
9. Agent (finishing): "Done. 12 tests pass. Bạn muốn merge hay PR?"
```

---

## 8. Cấu hình nâng cao

### 8.1 Chạy một số skills nhất định

Tùy vào nhu cầu, bạn có thể chỉ chạy subset của skills:

```bash
# Chỉ brainstorming và TDD
# (cấu hình trong file config của từng platform)
```

### 8.2 Tạo skill mới

Skill mới phải hoạt động cross-platform (Claude, Cursor, Codex...).

Xem `skills/writing-skills/SKILL.md` để biết cách tạo và test skill mới.

### 8.3 Disable skills

Nếu muốn agent nhảy thẳng vào code (không recommended):

```bash
# Tham khảo docs của từng platform để disable skills
```

---

## 9. Tài nguyên

| Tài nguyên | Link |
|------------|------|
| GitHub Repo | https://github.com/obra/superpowers |
| Discord Community | Link trong README của repo |
| Issues | https://github.com/obra/superpowers/issues |
| Release Announcements | Đăng ký để nhận thông báo version mới |
| Docs chi tiết | `docs/` trong repo |
| Writing Skills Guide | `skills/writing-skills/SKILL.md` |
