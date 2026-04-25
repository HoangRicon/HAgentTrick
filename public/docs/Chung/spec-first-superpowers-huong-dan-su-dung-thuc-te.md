# spec-first-superpowers — Hướng Dẫn Sử Dụng Thực Tế

> **spec-first-superpowers** là skill orchestration giúp enforce spec-before-code workflow cho AI-driven development. Đảm bảo mọi feature, bugfix, refactor đều đi qua specification phase trước khi viết code.

## Mục lục

- [1. Commands chính](#1-commands-chính)
- [2. Quick Reference](#2-quick-reference)
- [3. Tình huống thực tế](#3-tình-huống-thực-tế)
  - [3.1. Feature mới (Standard)](#31-feature-mới-standard)
  - [3.2. Bug fix nhanh (Quick)](#32-bug-fix-nhanh-quick)
  - [3.3. Refactor lớn (Thorough)](#33-refactor-lớn-thorough)
  - [3.4. Tiếp tục công việc bị gián đoạn (Session Recovery)](#34-tiếp-tục-công-việc-bị-gián-đoạn-session-recovery)
  - [3.5. Force Spec-Kit cho project mới](#35-force-spec-kit-cho-project-mới)
  - [3.6. Anti-Rush protection](#36-anti-rush-protection)
  - [3.7. UI/UX Design phase](#37-uiux-design-phase)
  - [3.8. 3-Strike Protocol khi gặp lỗi lặp](#38-3-strike-protocol-khi-gặp-lỗi-lặp)
  - [3.9. Reset mode](#39-reset-mode)
  - [3.10. Upgrade versions](#310-upgrade-versions)
- [4. Templates sinh ra](#4-templates-sinh-ra)
- [5. Quality Gates](#5-quality-gates)
- [6. Mode Selection](#6-mode-selection)
- [7. Complexity Triage](#7-complexity-triage)
- [8. Gap đáng lưu ý](#8-gap-đáng-lưu-ý)

---

## 1. Commands chính

| Command | Effect |
|---------|--------|
| `/super-spec` | Full workflow (auto mode + auto complexity) — **dùng phổ biến nhất** |
| `/super-spec force-spec-kit` | Force Spec-Kit mode |
| `/super-spec force-openspec` | Force OpenSpec mode |
| `/super-spec reset` | Reset mode selection, xóa `.spec-mode` |
| `/super-spec upgrade` | Check all integrated projects for updates |

---

## 2. Quick Reference

```
/super-spec                    → Bắt đầu feature/bug/refactor (99% trường hợp)
/super-spec force-spec-kit    → Project mới từ đầu, cần phase gating strict
/super-spec force-openspec    → Project đang có, workflow nhẹ
/super-spec reset             → Chọn sai mode, muốn re-detect
/super-spec upgrade           → Kiểm tra/cập nhật versions
```

---

## 3. Tình huống thực tế

### 3.1. Feature mới (Standard)

**Tình huống:** Thêm chức năng đăng nhập Google vào app React

```
/super-spec
↓
[Mô tả feature]
"Thêm đăng nhập Google OAuth cho ứng dụng React. User click nút Login with Google → chuyển hướng → callback → lưu token → hiển thị profile."

↓
[AI tự động]
→ Chọn OpenSpec (project đã có 50+ files)
→ Đề xuất: Standard
→ G1: User confirm spec
→ G2: Plan + file mapping
→ Phase 3: UI design (có button, form)
→ G3: User confirm design
→ Phase 4: TDD implementation
→ G4: Tests pass
→ Phase 5: Archive
```

**Output files:**
```
openspec/changes/login-google/
├── proposal.md
├── specs/auth/spec.md
├── design.md
├── tasks.md
task_plan.md     ← persistent checklist
progress.md      ← log tiến độ
findings.md      ← research notes
```

**Phase flow đầy đủ:**

```
Phase 0: Session Recovery (auto, nếu có task_plan.md)
    ↓
Phase 1: Specification — /opsx:explore hoặc /speckit.specify
    ↓ G1 (hard stop)
Phase 2: Persistent Planning — task_plan.md + findings.md + progress.md
    ↓ G2 (hard stop)
Phase 3: UI/UX Design (chỉ khi có từ khóa UI)
    ↓ G3 (hard stop)
Phase 4: Implementation — TDD RED-GREEN-REFACTOR
    ↓ G4 (hard stop)
Phase 5: Archive — fining-a-development-branch
```

---

### 3.2. Bug fix nhanh (Quick)

**Tình huống:** Fix lỗi type error trong 1 file

```
/super-spec
↓
"Fix type error: UserProfile.name is possibly undefined in src/components/UserCard.tsx"

↓
[AI tự động]
→ Complexity: Quick
→ Simplified flow: /opsx:propose → TDD → archive
→ G1: Skip (spec đơn giản, confirm nhanh)
→ G2: Skip
→ Phase 4: Viết test trước → fix → run tests
→ G4: Tests pass → done
```

**Đặc điểm Quick:**
- Single-file bugfix/typo/config
- Simplified spec → TDD → archive
- Không qua đầy đủ các phase

---

### 3.3. Refactor lớn (Thorough)

**Tình huống:** Chuyển từ Redux → Zustand cho toàn bộ app

```
/super-spec
↓
"Migrate Redux store sang Zustand trong React app. 15 files store, 30+ components dùng useSelector/useDispatch. Cần maintain backward compatibility trong quá trình migrate."

↓
[AI tự động]
→ Complexity: Thorough
→ Spec-Kit mode (refactor lớn, cần phase gating rõ ràng)
→ /speckit.specify → spec.md (What & Why)
→ /speckit.clarify → hỏi từng câu về edge cases
→ /speckit.plan → plan.md (How, architecture)
→ /speckit.analyze → validate consistency
→ /speckit.tasks → task list
→ Subagent-Driven execution (parallel per module)
→ Two-stage review per task
→ G4: All tests pass
```

**Đặc điểm Thorough:**
- Multi-module, architecture decisions
- Tất cả phases + Agent Teams evaluation
- Spec-Kit recommended (phase gating strict)

---

### 3.4. Tiếp tục công việc bị gián đoạn (Session Recovery)

**Tình huống:** Hôm qua đang làm feature, hôm nay quay lại

```
/super-spec
↓
[AI tự động chạy Phase 0]
→ Thấy task_plan.md tồn tại
→ 5-Question Reboot Test:
  1. Where am I?       → Phase 4, Task 3.2/8
  2. Where am I going? → Complete auth module
  3. What's the goal?  → Google OAuth login working
  4. What did I learn? → Need CORS config for localhost
  5. What did I do?    → Tasks 1.1-3.1 done, tests passing
→ git diff --stat vs progress.md
→ Resume: Task 3.2 (OAuth callback handler)
```

**Output:** AI báo cáo trạng thái + hỏi confirm trước khi tiếp tục

---

### 3.5. Force Spec-Kit cho project mới

**Tình huống:** Khởi tạo app hoàn toàn mới từ đầu

```
/super-spec force-spec-kit
↓
"Build một ứng dụng Kanban board với drag-drop. Backend Node.js + PostgreSQL, Frontend React + Tailwind."

↓
[AI tự động]
→ Spec-Kit mode (brand new project)
→ /speckit.constitution → constitution.md
→ /speckit.specify → spec.md
→ /speckit.clarify → clarifying questions
→ /speckit.plan → plan.md + architecture
→ /speckit.analyze → validate alignment
→ /speckit.tasks → tasks.md
→ G1: User confirm (spec + plan + tasks)
→ /speckit.implement → execute
→ G4: All tests pass
```

---

### 3.6. Anti-Rush protection

**Tình huống:** User muốn bỏ qua spec phase

```
Thử:
"Viết thẳng auth handler luôn đi"

↓
[AI từ chối]
"Để tránh viết code không đúng spec, mình nên chạy /super-spec trước.
Spec sẽ giúp xác định rõ:
- OAuth flow cụ thể (PKCE hay Authorization Code?)
- Error handling ra sao?
- Token storage ở đâu?
Bạn đồng ý chạy spec phase trước không?"
```

**Nguyên tắc:** AI sẽ từ chối viết code nếu chưa qua spec phase, dù user có yêu cầu.

---

### 3.7. UI/UX Design phase

**Tình huống:** Thêm dashboard mới với nhiều charts

```
/super-spec
↓
"Thêm dashboard hiển thị analytics: line chart revenue, bar chart orders, pie chart categories. Dashboard responsive mobile-first."

↓
[AI tự động]
→ Thấy từ khóa UI: "dashboard", "chart", "responsive"
→ Trigger Phase 3: ui-ux-pro-max
→ G3: Design system generated + user confirm
→ Phase 4: Implementation với design tokens
```

**UI keywords trigger Phase 3:**
- UI, UX, page, dashboard, component
- interaction, interface, design, app, web, mobile

---

### 3.8. 3-Strike Protocol khi gặp lỗi lặp

**Tình huống:** OAuth redirect không hoạt động dù đã thử nhiều cách

```
[AI đang fix OAuth callback]
→ Thử cách 1: FAIL
→ Thử cách 2: FAIL
→ Thử cách 3: FAIL
↓
[3-Strike Protocol trigger]
→ Auto-escalate: systematic-debugging
→ 4-phase root cause analysis
→ Nếu vẫn fail:
→ "Architecture có thể cần rethink. Mình nên dừng và hỏi bạn:
   - Có nên dùng NextAuth thay vì custom OAuth?
   - Hoặc debug offline trước?"
```

**Implementer Status Handling:**

| Status | Action |
|--------|--------|
| DONE | Proceed to spec compliance review |
| DONE_WITH_CONCERNS | Read concerns → address if correctness/scope |
| NEEDS_CONTEXT | Provide missing info, re-dispatch |
| BLOCKED | Escalate: more context / better model / break down / rethink |

---

### 3.9. Reset mode

**Tình huống:** Project lẽ ra nên dùng Spec-Kit nhưng AI chọn OpenSpec

```
/super-spec reset
↓
[Xóa .spec-mode]
→ Lần sau /super-spec sẽ re-detect đúng mode

Hoặc force trực tiếp:
/super-spec force-spec-kit
```

---

### 3.10. Upgrade versions

**Tình huống:** Muốn update spec-first-superpowers lên phiên bản mới nhất

```
/super-spec upgrade
↓
[AI kiểm tra]
- Spec-Kit: v0.7.1 → v0.7.2? (có update)
- OpenSpec: v1.2.0 → v1.2.0 (mới nhất)
- Superpowers: v5.0.7 → v5.0.8? (có update)
→ Update recommendations + execute
```

---

## 4. Templates sinh ra

### 4.1. Template `spec.md` (Spec-Kit) / `proposal.md` (OpenSpec)

**Output path:** `.specify/specs/[feature-name]/spec.md` hoặc `openspec/changes/[name]/proposal.md`

```markdown
# [Feature Name]

## 1. Feature Description
[What - pure product perspective, no tech stack]

## 2. User Stories
### As a [role], I want [goal] so that [benefit]

## 3. Acceptance Criteria (Given-When-Then)
### Scenario 1: [name]
**Given** [precondition]
**When** [action]
**Then** [expected outcome]

### Scenario 2: [name]
...

## 4. Success Metrics
- [Metric 1]
- [Metric 2]

## 5. Out of Scope
- [What this does NOT include]

## 6. References
[Links to related docs]
```

**Constraints:**
- Pure What & Why — **không có** tech stack, framework, code structure
- Mỗi acceptance criterion phải map được sang test case
- Phải reference constitution checkpoints

---

### 4.2. Template `plan.md` (Spec-Kit)

**Output path:** `.specify/specs/[feature-name]/plan.md`

```markdown
# Technical Implementation Plan — [Feature Name]

## 1. Architecture Decisions
[How — tech choices, libs, patterns]
References: §3 (Architecture governance), §2.1 (Code quality)

## 2. File Structure Mapping
```
src/
├── features/[feature]/
│   ├── [file].ts
│   └── [file].test.ts
└── ...
```

## 3. Component Design
[Components, interfaces, data flow]

## 4. Risk Assessment
| Risk | Mitigation |
|------|------------|
| [Risk 1] | [Strategy] |

## 5. Rollback Strategy
[How to undo if this fails]

## 6. Implementation Dependencies
[What must be done first]
```

**Constraints:**
- Must reference constitution checkpoints
- Must include file structure mapping trước khi task decomposition

---

### 4.3. Template `design.md` (OpenSpec)

**Output path:** `openspec/changes/[name]/design.md`

```markdown
# Technical Design — [Change Name]

## Overview
[Engineering perspective, How]

## Architecture
[Tech stack, patterns, data flow]

## File Structure Mapping
```
src/
├── [domain]/
│   └── ...
```

## API Design (if applicable)
[Endpoints, contracts]

## Testing Strategy
[Unit, integration, e2e approach]

## Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| ... | ... |
```

---

### 4.4. Template `tasks.md` (Spec-Kit) / `tasks.md` (OpenSpec)

**Output path:** `.specify/specs/[feature-name]/tasks.md`

```markdown
# Task Breakdown — [Feature Name]

## Phase 1: [User Story 1]
### Task 1.1: [Task name]
- **File**: `src/path/[file].ts`
- **Test**: `src/path/[file].test.ts`
- **Status**: [ ]
- **TDD**: RED → GREEN → REFACTOR

### Task 1.2: [Task name]
...

## Phase 2: [User Story 2]
...

## Dependencies
- Task 1.1 must complete before 1.2
- [P] = parallel execution allowed
```

---

### 4.5. Template `task_plan.md` (Persistent Planning)

**Output path:** `task_plan.md` (root)

```markdown
# Task Plan — [Feature Name]
**Created**: [DATE]
**Status**: In Progress

## File Structure Mapping
```
src/
├── features/
├── components/
└── services/
```

## Tasks
- [ ] 1.1 [Task description] → `src/file.ts`, `src/file.test.ts`
- [ ] 1.2 [Task description] → `src/file2.ts`, `src/file2.test.ts`
- [ ] 2.1 [Task description] → ...

## Acceptance Traceability
- Task 1.1 → AC: Scenario 1
- Task 1.2 → AC: Scenario 2
```

---

### 4.6. Template `progress.md`

```markdown
# Progress Log — [Feature Name]
**Started**: [DATE]

## Session 1 — [DATE]
- [x] Task 1.1 completed
- [x] Task 1.2 completed — REFACTOR: extracted utils
- Tests: 12 pass, 0 fail

## Session 2 — [DATE]
...
```

---

### 4.7. Template `findings.md`

```markdown
# Findings — [Feature Name]

## Research
- [Tech A]: [notes]
- [Tech B]: [notes]

## Decisions Made
1. Use [X] because [Y]
2. Avoid [Z] because [W]

## Open Questions
- [Question 1]: [Status]
```

---

### 4.8. File Structure tổng thể (Spec-Kit)

```
.specify/
├── memory/
│   └── constitution.md
├── specs/
│   └── [feature-name]/
│       ├── spec.md          ← Product spec (What & Why)
│       ├── plan.md          ← Technical plan (How)
│       ├── tasks.md         ← Task breakdown
│       ├── contracts/       ← API specs (optional)
│       ├── data-model.md    ← DB schema (optional)
│       └── research.md      ← Research notes (optional)
├── templates/
│   ├── spec-template.md
│   ├── plan-template.md
│   └── tasks-template.md
└── scripts/
```

---

### 4.9. File Structure tổng thể (OpenSpec)

```
openspec/
├── config.yaml
├── changes/
│   └── [change-name]/
│       ├── .openspec.yaml   ← Metadata
│       ├── proposal.md      ← Change proposal
│       ├── specs/           ← Feature specs
│       │   └── [domain]/spec.md
│       ├── design.md        ← Technical design
│       └── tasks.md         ← Task list
├── specs/                   ← Main specs (synced)
└── archive/                 ← Completed changes
```

---

## 5. Quality Gates

Mỗi gate là **hard stop** — không có gì tiến lên cho đến khi tất cả checks pass.

| Gate | Phase | Checks |
|------|-------|--------|
| **G0** | Session Recovery | task_plan.md exists? → resume from checkpoint |
| **G1** | Specification | User confirmed + spec aligns with constitution + inline spec review + scope check |
| **G2** | Planning | Every task has file paths + acceptance criteria + test strategy + inline plan review |
| **G3** | UI/UX Design | Pre-delivery checklist + user confirmed design (chỉ khi có UI) |
| **G4** | Implementation | All tests pass + review passed + verification evidence + MemPalace archived |

### Quality Gates Checklist

```
G1 — Specification Gate:
□ User gave explicit confirmation
□ spec.md contains no implementation details (pure What & Why)
□ Inline spec review checklist passed
□ Scope check done

G2 — Planning Gate:
□ task_plan.md generated
□ Every task has: file paths + acceptance criteria + test strategy
□ File structure mapped before task decomposition
□ Inline plan review checklist passed

G3 — Design Gate (conditional):
□ UI keywords detected
□ ui-ux-pro-max generated design system
□ Pre-delivery checklist passed
□ User confirmed design

G4 — Implementation Gate:
□ All tests pass (0 failures)
□ Two-stage review passed (spec conformance + code quality)
□ Code quality: SOLID · DRY · KISS · No Critical/Important issues
□ Verification evidence written to progress.md
□ /opsx:verify passed (if available)
□ MemPalace archived (if configured)
```

---

## 6. Mode Selection

### Auto-detection (thứ tự ưu tiên)

```
Signal                          → Mode
──────────────────────────────────────────
.spec-mode file exists          → Use whatever it says
.specify/ directory             → Spec-Kit
openspec/ directory             → OpenSpec
Brand new project, < 30 files  → Spec-Kit
Everything else                 → OpenSpec (default)
```

### So sánh Spec-Kit vs OpenSpec

| Dimension | OpenSpec | Spec-Kit |
|-----------|----------|----------|
| **Weight** | Lightweight, fluid | Strict, phased |
| **Best for** | Existing/iterating | New/complex systems |
| **Philosophy** | Actions, not phases | Phase-gated progression |
| **Constitution** | Optional (config.yaml) | Required (constitution.md) |
| **Artifacts** | proposal → specs → design → tasks | spec → plan → tasks |
| **Quick path** | `/opsx:propose` one-shot | `/speckit.implement` after full flow |
| **Verification** | `/opsx:verify` + `/opsx:refine` | `/speckit.analyze` + `/speckit.checklist` |
| **Archiving** | `/opsx:archive` | Manual |

### Khi nào dùng Spec-Kit
- Brand new project từ đầu
- Large systems (multi-module, multi-team)
- Enterprise projects requiring strict phase control
- Projects needing extensions, presets, or custom workflows

### Khi nào dùng OpenSpec
- Existing codebases with established patterns
- Fast iteration, small teams
- Feature enhancements, bugfixes, refactors

---

## 7. Complexity Triage

```
Task received
    ├─ Single-file bugfix/typo/config?           → Quick
    ├─ Touches ≥ 3 files?                        → Standard or Thorough
    ├─ Requires architecture decisions?            → Thorough
    ├─ Involves UI/UX design?                   → Standard (triggers Phase 3)
    ├─ Can split into ≥ 2 independent subtasks?  → Thorough (+ Agent Teams)
    └─ Other single-feature changes              → Standard
```

| Level | When | What happens |
|-------|------|-------------|
| **Quick** | Single-file bugfix, typo, config | Simplified spec (`/opsx:propose`) → TDD → archive |
| **Standard** | Single feature, clear scope | All phases (Phase 3 only if UI) |
| **Thorough** | Multi-module, architecture decisions | All phases + Agent Teams evaluation |

---

## 8. Gap đáng lưu ý

### 8.1. Feature vs Type Structure — Không hỏi tự động

**Vấn đề:** spec-first-superpowers không có step nào hỏi về project structure (feature-based vs type-based).

```
Feature-based (theo tính năng):
├── features/
│   ├── auth/
│   │   ├── login.ts
│   │   └── register.ts
│   └── payment/
│       ├── checkout.ts
│       └── invoice.ts

Type-based (theo loại):
├── components/
├── hooks/
├── services/
├── utils/
└── types/
```

**Cách xử lý:**
- Dùng **Brainstorming** trước để hỏi về architecture
- Hoặc thêm câu hỏi trực tiếp trong spec phase
- AI sẽ tự đoán hoặc follow existing patterns trong codebase

### 8.2. Code Quality — Có đầy đủ

**Được định nghĩa trong Constitution (bắt buộc):**

```
Spec-Kit Constitution §2.1:
- Readable, maintainable, testable (Clean Code)
- SOLID · DRY · KISS
- No Critical/Important issues unfixed

OpenSpec Constitution §2:
- Clean Code · SOLID · DRY · KISS
```

**Được kiểm tra ở G4 Gate (hard stop):**

```
G4 Code Quality Review:
├── SOLID principles
├── Security
├── Performance
└── NO Critical/Important issues unfixed
```

---

## 9. Dependencies & Installation

### Required Skills

| Skill | Role | Phase |
|-------|------|-------|
| `using-superpowers` | Loads Superpowers methodology | Phase 4 |
| `brainstorming` | Design exploration + inline spec review | Phase 1 |
| `writing-plans` | Implementation plans + inline plan review | Phase 2 |
| `test-driven-development` | TDD RED-GREEN-REFACTOR | Phase 4 |
| `requesting-code-review` | Two-stage code review | Phase 4 |
| `verification-before-completion` | Pre-completion verification | Phase 4 (G4) |
| `planning-with-files` | File-based planning + session recovery | Phase 0/2 |
| `finishing-a-development-branch` | Branch wrap-up | Phase 5 |

### Optional Skills

| Skill | Role | Phase |
|-------|------|-------|
| `ui-ux-pro-max` | UI/UX design system | Phase 3 (conditional) |
| `systematic-debugging` | 4-phase root cause analysis | Phase 4 (on demand) |
| `subagent-driven-development` | Subagent execution + two-stage review | Phase 4 (on demand) |
| `executing-plans` | Batch execution + checkpoints | Phase 4 (on demand) |
| `dispatching-parallel-agents` | Concurrent subagent workflows | Phase 4 (on demand) |

### External Tools

| Tool | Role | Required? |
|------|------|-----------|
| MemPalace | Cross-session memory + knowledge graph | Optional (recommended) |
| Spec-Kit CLI | Spec-driven development framework | Recommended |
| OpenSpec CLI | Lightweight spec workflow | Recommended |

---

## 10. Troubleshooting

| Problem | Solution |
|---------|---------|
| Mode seems wrong? | `/super-spec reset` hoặc `force-spec-kit`/`force-openspec` |
| AI skipped spec phase? | Check `.cursor/rules/00-spec-first-superpowers.mdc` exists với `alwaysApply: true` |
| UI/UX design didn't trigger? | Include UI keywords: UI, UX, page, dashboard, component, interface, design, app |
| Context drifting? | Check `task_plan.md`/`progress.md` up to date. Enable MemPalace |
| Same error 3 times? | 3-Strike Protocol → auto-escalate to `systematic-debugging` |
| OpenSpec directory not found? | Run `openspec init` (uses `openspec/` not `.openspec/`) |
| OpenSpec profile confusion? | "expanded" renamed to "custom" in v1.2.0 |

---

## 11. Related Projects

| Project | GitHub | Version | Role |
|---------|--------|---------|------|
| Spec-Kit | [github/spec-kit](https://github.com/github/spec-kit) | v0.7.1 | GitHub's spec-driven framework |
| OpenSpec | [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | v1.2.0 | Lightweight OPSX workflow |
| Superpowers | [obra/superpowers](https://github.com/obra/superpowers) | v5.0.7 | TDD + inline review methodology |
| planning-with-files | [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | v2.30.0 | File-based persistent planning |
| ui-ux-pro-max | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | v2.5.0 | UI/UX design system |
| MemPalace | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | v3.3.0 | Cross-session memory + knowledge graph |
