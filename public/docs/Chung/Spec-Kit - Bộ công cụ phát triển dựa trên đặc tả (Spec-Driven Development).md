# SPEC-KIT - Bộ công cụ phát triển dựa trên đặc tả (Spec-Driven Development)

> **Nguồn:** [github/spec-kit](https://github.com/github/spec-kit) | **Stars:** 90,000+ | **Giấy phép:** MIT

---

## Mục lục

- [Tổng quan](#tổng-quan)
- [Spec-Driven Development (SDD) là gì?](#spec-driven-development-sdd-là-gì)
- [Triết lý cốt lõi](#triết-lý-cốt-lõi)
- [Các giai đoạn phát triển](#các-giai-đoạn-phát-triển)
- [Cài đặt](#cài-đặt)
- [Bắt đầu nhanh (6 bước)](#bắt-đầu-nhanh-6-bước)
- [Các lệnh Slash commands](#các-lệnh-slash-commands)
- [Các AI coding agent được hỗ trợ](#các-ai-coding-agent-được-hỗ-trợ)
- [Hệ thống mở rộng (Extensions)](#hệ-thống-mở-rộng-extensions)
- [Hệ thống điều chỉnh (Presets)](#hệ-thống-điều-chỉnh-presets)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Tham chiếu CLI](#tham-chiếu-cli)
- [Nâng cấp và bảo trì](#nâng-cấp-và-bảo-trì)
- [Cộng đồng và đóng góp](#cộng-đồng-và-đóng-góp)
- [Câu hỏi thường gặp (FAQ)](#câu-hỏi-thường-gặp-faq)

---

## Tổng quan

### Spec-Kit là gì?

Spec-Kit là một bộ công cụ mã nguồn mở giúp lập trình viên tập trung vào **kịch bản sản phẩm** và **kết quả có thể dự đoán** thay vì phải xây dựng từng phần một cách cảm tính ("vibe coding").

Thay vì viết code trước rồi mới viết tài liệu, Spec-Kit đảo ngược quy trình: **đặc tả (specifications) trở thành có thể thực thi (executable)**, trực tiếp sinh ra code hoạt động thay vì chỉ hướng dẫn nó.

### Điểm nổi bật

| Tính năng | Mô tả |
|-----------|--------|
| **Đặc tả thực thi** | Từ specification đến implementation không còn khoảng cách |
| **Tích hợp AI mạnh mẽ** | Hỗ trợ 30+ AI coding agents (Claude Code, Copilot, Gemini, v.v.) |
| **Hệ thống mở rộng** | 60+ extensions từ cộng đồng cho docs, code, process, integration |
| **Hệ thống Presets** | 10+ presets tùy chỉnh workflow (viết sách, screenplay, Jira, v.v.) |
| **CLI đa nền tảng** | Hỗ trợ Linux, macOS, Windows (PowerShell) |
| **Miễn phí & mã nguồn mở** | MIT License |

---

## Spec-Driven Development (SDD) là gì?

### Sự đảo ngược quyền lực

Trong hàng thập kỷ, **code là vua**. Đặc tả chỉ là giàn giáo — chúng ta xây dựng rồi vứt đi khi "công việc thực sự" là viết code bắt đầu. Chúng ta viết PRD để hướng dẫn phát triển, tạo tài liệu thiết kế để thông báo cho implementation, vẽ sơ đồ để hình dung kiến trúc. Nhưng tất cả đều phục vụ code — code mới là sự thật.

**Spec-Driven Development đảo ngược cấu trúc quyền lực này:**

- **Đặc tả không phục vụ code** — code phục vụ đặc tả
- **PRD không phải là hướng dẫn implementation** — nó là nguồn sinh ra implementation
- **Kế hoạch kỹ thuật không phải tài liệu** — chúng là định nghĩa chính xác tạo ra code

### Tại sao SDD quan trọng bây giờ?

**Xu hướng 1: Khả năng AI đã đạt ngưỡng**
Khả năng AI đã đạt đến mức đặc tả bằng ngôn ngữ tự nhiên có thể tạo ra code hoạt động đáng tin cậy. Đây không phải thay thế developers — mà là khuếch đại hiệu quả của họ.

**Xu hướng 2: Độ phức tạp phần mềm tăng theo cấp số nhân**
Các hệ thống hiện đại tích hợp hàng chục services, frameworks và dependencies. SDD cung cấp sự sắp xếp có hệ thống thông qua generation dựa trên đặc tả.

**Xu hướng 3: Nhịp độ thay đổi tăng tốc**
Yêu cầu thay đổi nhanh hơn bao giờ hết. SDD biến thay đổi yêu cầu từ trở ngại thành quy trình làm việc bình thường — khi đặc tả drive implementation, pivots trở thành regeneration có hệ thống thay vì viết lại thủ công.

### Lỗ hổng giữa đặc tả và implementation

Lỗ hổng giữa specification và implementation đã ám ảnh phát triển phần mềm từ khi bắt đầu. Chúng ta đã cố gắng thu hẹp nó bằng tài liệu tốt hơn, yêu cầu chi tiết hơn, quy trình nghiêm ngặt hơn. Những cách tiếp cận này thất bại vì chúng chấp nhận lỗ hổng là không thể tránh khỏi.

**SDD loại bỏ lỗ hổng bằng cách làm cho specifications và implementation plans trở thành có thể thực thi.** Khi specifications tạo ra code, không có khoảng cách — chỉ có transformation.

---

## Triết lý cốt lõi

### 6 nguyên tắc chính của SDD

| Nguyên tắc | Mô tả |
|-----------|--------|
| **1. Đặc tả như Lingua Franca** | Specification trở thành artifact chính. Code trở�i thành biểu hiện của nó trong ngôn ngữ và framework cụ thể. Bảo trì phần mềm có nghĩa là phát triển đặc tả. |
| **2. Đặc tả có thể thực thi** | Specifications phải đủ precise, complete và unambiguous để tạo ra các hệ thống hoạt động. Điều này loại bỏ khoảng cách giữa intent và implementation. |
| **3. Refinement liên tục** | Consistency validation diễn ra liên tục, không phải như một cổng một lần. AI phân tích specifications cho ambiguity, contradictions và gaps như một quá trình đang diễn ra. |
| **4. Ngữ cảnh dựa trên Research** | Research agents thu thập ngữ cảnh quan trọng trong suốt quá trình đặc tả, điều tra các tùy chọn kỹ thuật, implications về hiệu năng và constraints tổ chức. |
| **5. Phản hồi hai chiều** | Thực tế sản xuất thông báo cho evolution của đặc tả. Metrics, incidents và bài học vận hành trở thành inputs cho specification refinement. |
| **6. Branching cho Exploration** | Tạo nhiều cách tiếp cận implementation từ cùng một specification để khám phá các mục tiêu optimization khác nhau — performance, maintainability, UX, cost. |

### Cấu trúc Constitution (Hiến pháp)

Spec-Kit bao gồm một "constitution" — tập hợp các nguyên tắc bất biến chi phối cách specifications trở thành code. Constitution hoạt động như "DNA kiến trúc" của hệ thống.

**9 Điều khoản chính:**

| Điều | Tên | Mô tả |
|------|-----|--------|
| I | Library-First Principle | Mọi feature phải bắt đầu như một standalone library — không ngoại lệ |
| II | CLI Interface Mandate | Mọi library phải expose chức năng qua command-line interface |
| III | Test-First Imperative | **QUAN TRỌNG NHẤT** — Không viết code trước khi viết tests |
| VII | Simplicity Gate | Giới hạn 3 projects cho implementation ban đầu, không "future-proofing" |
| VIII | Anti-Abstraction | Sử dụng framework features trực tiếp thay vì wrap chúng |
| IX | Integration-First Testing | Ưu tiên testing trong môi trường thực, không mocks/stubs |

---

## Các giai đoạn phát triển

### Phase 0-to-1 (Greenfield)

| Trọng tâm | Hoạt động chính |
|-----------|-----------------|
| Generate from scratch | Bắt đầu với requirements cấp cao → Tạo specifications → Lập kế hoạch implementation → Build production-ready applications |

### Phase Creative Exploration

| Trọng tâm | Hoạt động chính |
|-----------|-----------------|
| Parallel implementations | Khám phá các giải pháp đa dạng, hỗ trợ nhiều tech stacks & architectures, thử nghiệm các UX patterns |

### Phase Iterative Enhancement (Brownfield)

| Trọng tâm | Hoạt động chính |
|-----------|-----------------|
| Brownfield modernization | Thêm features một cách lặp đi, hiện đại hóa legacy systems, thích nghi processes |

---

## Cài đặt

### Yêu cầu hệ thống

| Yêu cầu | Chi tiết |
|---------|----------|
| **OS** | Linux / macOS / Windows (PowerShell scripts được hỗ trợ) |
| **AI coding agent** | Claude Code, GitHub Copilot, Gemini CLI, Codex CLI, Cursor, và 25+ agents khác |
| **Package manager** | `uv` (khuyến nghị) hoặc `pipx` |
| **Python** | 3.11+ |
| **Git** | 2.0+ |

### Cài đặt persistent (Khuyến nghị)

```bash
# Cài đặt phiên bản stable cụ thể (thay vX.Y.Z bằng tag mới nhất)
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@vX.Y.Z

# Hoặc cài đặt latest từ main (có thể bao gồm thay đổi chưa release)
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

# Sử dụng pipx (cũng hoạt động)
pipx install git+https://github.com/github/spec-kit.git@vX.Y.Z
```

### Cài đặt một lần (One-time usage)

```bash
# Tạo project mới
uvx --from git+https://github.com/github/spec-kit.git@vX.Y.Z specify init <PROJECT_NAME>

# Hoặc initialize trong project hiện tại
uvx --from git+https://github.com/github/spec-kit.git@vX.Y.Z specify init . --ai copilot
```

### Xác minh cài đặt

```bash
specify version
specify check
```

### Cài đặt cho môi trường Enterprise/Air-Gapped

Nếu môi trường chặn truy cập PyPI hoặc GitHub:

1. **Bước 1:** Build wheel trên máy có mạng (cùng OS và Python version):
   ```bash
   git clone https://github.com/github/spec-kit.git
   cd spec-kit
   pip install build
   python -m build --wheel --outdir dist/
   pip download -d dist/ dist/specify_cli-*.whl
   ```

2. **Bước 2:** Transfer `dist/` sang máy air-gapped

3. **Bước 3:** Cài đặt trên máy air-gapped:
   ```bash
   pip install --no-index --find-links=./dist specify-cli
   ```

4. **Bước 4:** Initialize project (không cần mạng):
   ```bash
   specify init my-project --ai claude --offline
   ```

> **Lưu ý quan trọng:** Chỉ các package chính thức từ GitHub repository là được duy trì. Các package cùng tên trên PyPI (ví dụ `specify-cli`) **không** liên quan đến project này.

---

## Bắt đầu nhanh (6 bước)

### Tổng quan workflow

```
Ý tưởng → Đặc tả (spec) → Kế hoạch (plan) → Task list → Implement → Code
```

### Bước 1: Thiết lập nguyên tắc dự án (Constitution)

```bash
# Khởi tạo project mới
specify init <PROJECT_NAME> --ai copilot

# Sử dụng lệnh constitution trong AI agent của bạn
/speckit.constitution Create principles focused on code quality, testing standards, user experience consistency, and performance requirements
```

### Bước 2: Tạo specification

```bash
# Mô tả what và why, KHÔNG tập trung vào tech stack
/speckit.specify Build an application that can help me organize my photos in separate photo albums. Albums are grouped by date and can be re-organized by dragging and dropping on the main page.
```

### Bước 3: Làm rõ specification (Clarify)

```bash
# Chạy clarification workflow TRƯỚC khi tạo technical plan
/speckit.clarify
```

### Bước 4: Tạo technical implementation plan

```bash
# Bây giờ mới tập trung vào tech stack
/speckit.plan The application uses Vite with minimal number of libraries. Use vanilla HTML, CSS, and JavaScript. Images are stored locally with metadata in SQLite.
```

### Bước 5: Tạo task breakdown

```bash
# Tạo task list từ plan
/speckit.tasks
```

### Bước 6: Implement

```bash
# Thực thi tất cả tasks
/speckit.implement
```

### Cấu trúc thư mục sau khi khởi tạo

```
.
├── .specify/
│   ├── memory/
│   │   └── constitution.md      # Nguyên tắc dự án
│   ├── scripts/
│   │   ├── check-prerequisites.sh
│   │   ├── common.sh
│   │   ├── create-new-feature.sh
│   │   ├── setup-plan.sh
│   │   └── update-claude-md.sh
│   ├── specs/
│   │   └── 001-my-feature/
│   │       ├── spec.md         # Đặc tả feature
│   │       ├── plan.md          # Kế hoạch implementation
│   │       ├── tasks.md         # Task list
│   │       ├── data-model.md    # Data models
│   │       ├── contracts/       # API specifications
│   │       ├── research.md      # Research notes
│   │       └── quickstart.md    # Quickstart guide
│   └── templates/
│       ├── spec-template.md
│       ├── plan-template.md
│       └── tasks-template.md
├── .claude/                     # Claude Code commands (hoặc agent tương ứng)
│   └── commands/
│       ├── speckit.constitution.md
│       ├── speckit.specify.md
│       ├── speckit.plan.md
│       ├── speckit.tasks.md
│       └── speckit.implement.md
└── CLAUDE.md
```

---

## Các lệnh Slash Commands

### Lệnh Core (Cốt lõi)

| Lệnh | Skill Agent | Mô tả |
|------|-------------|--------|
| `/speckit.constitution` | `speckit-constitution` | Tạo hoặc cập nhật nguyên tắc quản trị dự án |
| `/speckit.specify` | `speckit-specify` | Định nghĩa what bạn muốn build (requirements và user stories) |
| `/speckit.plan` | `speckit-plan` | Tạo kế hoạch implementation với tech stack đã chọn |
| `/speckit.tasks` | `speckit-tasks` | Tạo task list có thể thực thi cho implementation |
| `/speckit.taskstoissues` | `speckit-taskstoissues` | Chuyển task list thành GitHub issues để tracking |
| `/speckit.implement` | `speckit-implement` | Thực thi tất cả tasks để build feature theo plan |

### Lệnh Optional (Tùy chọn)

| Lệnh | Skill Agent | Mô tả |
|------|-------------|--------|
| `/speckit.clarify` | `speckit-clarify` | Làm rõ các vùng chưa được đặc tả (nên chạy trước `/speckit.plan`) |
| `/speckit.analyze` | `speckit-analyze` | Phân tích consistency & coverage xuyên artifacts (chạy sau `/speckit.tasks`, trước `/speckit.implement`) |
| `/speckit.checklist` | `speckit-checklist` | Tạo quality checklists tùy chỉnh để validate completeness |

### Chi tiết từng lệnh

#### `/speckit.specify` — Tạo Đặc tả

1. **Tự động đánh số feature**: Quét specs hiện có để xác định feature number tiếp theo
2. **Tạo branch**: Tạo branch name semantic từ mô tả và tự động tạo branch
3. **Template-based**: Copy và customize feature specification template
4. **Directory Structure**: Tạo cấu trúc `specs/[branch-name]/` phù hợp

#### `/speckit.plan` — Tạo Kế hoạch

1. **Phân tích Specification**: Đọc và hiểu requirements, user stories, acceptance criteria
2. **Constitutional Compliance**: Đảm bảo align với constitution và architectural principles
3. **Technical Translation**: Chuyển đổi business requirements thành kiến trúc kỹ thuật
4. **Detailed Documentation**: Tạo data models, API contracts, test scenarios
5. **Quickstart Validation**: Tạo hướng dẫn validation scenarios

#### `/speckit.tasks` — Tạo Task List

1. **Inputs**: Đọc `plan.md` (bắt buộc) và `data-model.md`, `contracts/`, `research.md` nếu có
2. **Task Derivation**: Chuyển contracts, entities và scenarios thành tasks cụ thể
3. **Parallelization**: Đánh dấu independent tasks `[P]` và outline parallel groups
4. **Output**: Viết `tasks.md` trong feature directory

#### `/speckit.implement` — Thực thi Implementation

- Validate tất cả prerequisites (constitution, spec, plan, tasks)
- Parse task breakdown từ `tasks.md`
- Execute tasks theo đúng thứ tự, tôn trọng dependencies và parallel markers
- Follow TDD approach
- Provide progress updates và handle errors

---

## Các AI Coding Agent được hỗ trợ

Spec-Kit hỗ trợ **30+ AI coding agents**. Chạy `specify integration list` để xem tất cả trong phiên bản đã cài đặt.

### Danh sách đầy đủ

| Agent | Key | Loại | Ghi chú |
|-------|-----|------|---------|
| Claude Code | `claude` | CLI | Skills-based, cài đặt trong `.claude/skills` |
| GitHub Copilot | `copilot` | IDE | Cả IDE và CLI |
| Gemini CLI | `gemini` | CLI | — |
| Codex CLI | `codex` | CLI | Skills-based, cài đặt trong `.agents/skills` |
| Cursor | `cursor-agent` | IDE | — |
| Windsurf | `windsurf` | IDE | — |
| Kilo Code | `kilocode` | IDE | — |
| Roo Code | `roo` | IDE | — |
| Tabnine CLI | `tabnine` | CLI | — |
| Kiro CLI | `kiro-cli` | CLI | Alias: `--integration kiro` |
| Mistral Vibe | `vibe` | CLI | — |
| opencode | `opencode` | CLI | — |
| Pi Coding Agent | `pi` | CLI | Không có MCP mặc định |
| Qoder CLI | `qodercli` | CLI | — |
| Qwen Code | `qwen` | CLI | — |
| Junie | `junie` | IDE | — |
| Forge | `forge` | CLI | — |
| Goose | `goose` | CLI | Sử dụng YAML recipe format |
| Amp | `amp` | CLI | — |
| Antigravity (agy) | `agy` | CLI | Skills-based |
| Auggie CLI | `auggie` | CLI | — |
| CodeBuddy CLI | `codebuddy` | CLI | — |
| IBM Bob | `bob` | IDE | — |
| iFlow CLI | `iflow` | CLI | — |
| Kimi Code | `kimi` | CLI | Skills-based, hỗ trợ `--migrate-legacy` |
| SHAI (OVHcloud) | `shai` | CLI | — |
| Trae | `trae` | IDE | Skills-based |
| Generic | `generic` | — | Cho agents không có trong danh sách |

### Quản lý Integration

```bash
# Liệt kê integrations
specify integration list

# Cài đặt integration
specify integration install claude

# Chuyển đổi integration
specify integration switch copilot

# Gỡ cài đặt integration
specify integration uninstall

# Nâng cấp integration
specify integration upgrade
```

---

## Hệ thống mở rộng (Extensions)

Extensions thêm **khả năng mới** cho Spec-Kit — commands mới, workflows domain-specific, integrations với external tools, quality gates.

### Duyệt Extensions

**Website:** [speckit-community.github.io/extensions/](https://speckit-community.github.io/extensions/)

### Danh mục Extensions theo Category

| Category | Mô tả | Ví dụ |
|----------|--------|-------|
| `docs` | Đọc, validate, hoặc generate spec artifacts | Blueprint, DocGuard, Iterate, Learning |
| `code` | Review, validate, hoặc modify source code | Review, Security Review, QA Testing, Verify |
| `process` | Orchestrate workflow xuyên các phases | Conduct, Jira, MAQA, Spec Refine |
| `integration` | Sync với external platforms | Jira, Azure DevOps, GitHub Issues, Confluence |
| `visibility` | Reports về project health hoặc progress | Spec Diagram, Project Health Check, Status |

### Một số Extensions nổi bật

| Tên | Mục đích | Category | Effect |
|-----|----------|----------|--------|
| **Jira Integration** | Tạo Jira Epics, Stories, Issues từ specs | `integration` | R+W |
| **MAQA** | Multi-Agent QA workflow với parallel worktree | `process` | R+W |
| **Spec Validate** | Validation, review gating, approval state | `process` | R+W |
| **Spec Sync** | Detect và resolve drift giữa specs và implementation | `docs` | R+W |
| **Verify Extension** | Quality gate validation implemented code vs specification | `code` | Read-only |
| **Cleanup Extension** | Post-implementation quality gate | `code` | R+W |
| **Red Team** | Adversarial review của specs — prompt injection, integrity gaps | `docs` | R+W |
| **Fix Findings** | Automated analyze-fix-reanalyze loop | `code` | R+W |
| **Spec Scope** | Effort estimation và scope tracking | `process` | Read-only |
| **What-if Analysis** | Preview downstream impact của requirement changes | `visibility` | Read-only |
| **Worktree Isolation** | Spawn isolated git worktrees cho parallel development | `process` | R+W |
| **Confluence Extension** | Tạo doc trong Confluence từ specs | `integration` | R+W |
| **Security Review** | Comprehensive security audit với AI-powered DevSecOps | `code` | Read-only |
| **Memory MD** | Repository-native durable memory cho Spec Kit | `docs` | R+W |
| **SpecTest** | Auto-generate test scaffolds từ spec criteria | `code` | R+W |
| **Fleet Orchestrator** | Full feature lifecycle với human-in-the-loop gates | `process` | R+W |
| **Ship Release** | Automate release pipeline | `process` | R+W |
| **Retro Extension** | Sprint retrospective analysis | `process` | R+W |
| **Product Forge** | Full product lifecycle: research → spec → implement → verify | `process` | R+W |
| **Brownfield Bootstrap** | Bootstrap Spec Kit cho codebases hiện có | `process` | R+W |
| **Bugfix Workflow** | Structured bugfix workflow | `process` | R+W |
| **Checklist Extension** | Commit changes giữa implementation | `code` | R+W |
| **V-Model Extension** | Enforces V-Model paired generation dev specs và test specs | `docs` | R+W |
| **AIDE** | Structured 7-step workflow cho building projects từ đầu | `process` | R+W |
| **Superpowers Bridge** | Orchestrates obra/superpowers skills trong SDD workflow | `process` | R+W |
| **Wireframe Feedback** | SVG wireframe generation và review | `visibility` | R+W |
| **Repository Index** | Generate index cho existing repo | `docs` | Read-only |
| **Canon** | Canon-driven (baseline-driven) workflows | `process` | R+W |

*(60+ extensions tổng cộng — xem full list trong [community catalog](https://speckit-community.github.io/extensions/))*

### Cài đặt Extension

```bash
# Tìm kiếm extensions
specify extension search jira
specify extension search --tag integration

# Cài đặt extension
specify extension add jira-integration

# Cài đặt từ URL tùy chỉnh
specify extension add my-extension --from https://github.com/user/spec-kit-my-extension/archive/refs/tags/v1.0.0.zip

# Cài đặt từ thư mục local (development)
specify extension add my-extension --dev /path/to/extension

# Cài đặt với priority tùy chỉnh
specify extension add my-extension --priority 5
```

### Quản lý Extension

```bash
# Liệt kê extensions đã cài đặt
specify extension list

# Thông tin chi tiết
specify extension info jira-integration

# Cập nhật extension
specify extension update jira-integration
specify extension update  # Cập nhật tất cả

# Bật/Tắt extension
specify extension enable jira-integration
specify extension disable jira-integration

# Gỡ cài đặt
specify extension remove jira-integration

# Đặt priority
specify extension set-priority jira-integration 5

# Quản lý catalogs
specify extension catalog list
specify extension catalog add https://example.com/catalog.json --name my-catalog --priority 5
specify extension catalog remove my-catalog
```

### Cấu hình Extension

Hầu hết extensions bao gồm file cấu hình trong thư mục install:

```
.specify/extensions/<ext>/
├── <ext>-config.yml           # Config của project (version controlled)
├── <ext>-config.local.yml     # Override cục bộ (gitignored)
└── <ext>-config.template.yml  # Template reference
```

Copy template để cấu hình:

```bash
cp .specify/extensions/jira-integration/jira-integration-config.template.yml \
   .specify/extensions/jira-integration/jira-integration-config.yml
```

### Publish Extension lên Catalog

1. Fork repository spec-kit
2. Thêm extension vào `extensions/catalog.community.json`
3. Thêm vào bảng Community Extensions trong README.md
4. Tạo Pull Request

Extension phải bao gồm:
- `extension.yml` manifest hợp lệ
- `README.md` với hướng dẫn cài đặt và sử dụng
- `LICENSE` file
- GitHub release với semantic versioning
- Đã test trên project thực

---

## Hệ thống điều chỉnh (Presets)

Presets **tùy chỉnh cách Spec-Kit hoạt động** — override templates, commands, terminology mà không thay đổi tooling.

### Khi nào dùng Extension vs Preset

| Mục tiêu | Nên dùng |
|----------|----------|
| Thêm brand-new command hoặc workflow | Extension |
| Tùy chỉnh format của specs, plans, hoặc tasks | Preset |
| Tích hợp external tool hoặc service | Extension |
| Áp dụng organizational hoặc regulatory standards | Preset |
| Ship reusable domain-specific templates | Extension (nếu bundle với new commands) |

### Danh sách Community Presets

| Preset | Mục đích | Templates | Commands |
|--------|----------|----------|----------|
| **Fiction Book Writing** | SDD cho viết tiểu thuyết — 27 AI commands từ ý tưởng đến submission, hỗ trợ multi-POV, 12 ngôn ngữ, audiobook pipeline | 22 | 27 |
| **Screenwriting** | SDD cho viết kịch bản phim/truyền hình/sân khấu — 32 commands, hỗ trợ three-act, Save the Cat, Fountain export | 26 | 32 |
| **Pirate Speak** | Chuyển tất cả Spec Kit output thành ngôn ngữ cướp biển ("Specs become Voyage Manifests") | 6 | 9 |
| **Canon Core** | Adapts workflow để làm việc với Canon extension | 2 | 8 |
| **Multi-Repo Branching** | Coordinate branch creation across multiple git repos | 0 | 2 |
| **Table of Contents** | Adds navigable TOC to spec.md, plan.md, tasks.md | 3 | 3 |
| **Explicit Task Dependencies** | Adds explicit `(depends on T###)` declarations và Execution Wave DAG | 1 | 1 |
| **Jira Issue Tracking** | Overrides taskstoissues để tạo Jira thay vì GitHub Issues | 0 | 1 |
| **Claude AskUserQuestion** | Nâng cấp /speckit.clarify lên native AskUserQuestion picker | 0 | 2 |
| **VS Code Ask Questions** | Sử dụng vscode/askQuestions cho batched interactive questioning | 0 | 1 |
| **AIDE In-Place Migration** | Adapts AIDE workflow cho in-place technology migrations (X → Y) | 2 | 8 |

### Cài đặt Preset

```bash
# Tìm kiếm presets
specify preset search
specify preset search --tag writing

# Cài đặt preset
specify preset add fiction-book-writing

# Cài đặt với priority tùy chỉnh
specify preset add pirate-speak --priority 5
```

### Quản lý Preset

```bash
# Liệt kê presets đã cài đặt
specify preset list

# Thông tin chi tiết
specify preset info fiction-book-writing

# Resolve một file (debug)
specify preset resolve plan-template.md

# Bật/Tắt
specify preset enable fiction-book-writing
specify preset disable fiction-book-writing

# Gỡ cài đặt
specify preset remove fiction-book-writing

# Đặt priority
specify preset set-priority fiction-book-writing 5
```

### Priority Resolution Stack

```
⬆ Highest precedence
1. Project-local overrides    (.specify/templates/overrides/)
2. Presets — by priority      (.specify/presets/<id>/)
3. Extensions — by priority   (.specify/extensions/<id>/)
4. Spec Kit core              (.specify/templates/)
⬇ Lowest precedence
```

---

## Cấu trúc dự án

### Cấu trúc đầy đủ sau SDD workflow

```
PROJECT_ROOT/
├── .specify/
│   ├── memory/
│   │   ├── constitution.md     # Nguyên tắc dự án (HIẾN PHÁP)
│   │   └── memory/             # Shared memory files
│   ├── specs/
│   │   └── 001-my-feature/
│   │       ├── spec.md         # Feature specification (PRD)
│   │       ├── plan.md         # Implementation plan
│   │       ├── tasks.md        # Task breakdown
│   │       ├── data-model.md   # Data models
│   │       ├── contracts/      # API specifications
│   │       │   ├── api-spec.json
│   │       │   └── signalr-spec.md
│   │       ├── research.md     # Research notes
│   │       └── quickstart.md   # Quickstart guide
│   ├── scripts/
│   │   ├── check-prerequisites.sh (.ps1)
│   │   ├── common.sh (.ps1)
│   │   ├── create-new-feature.sh (.ps1)
│   │   ├── setup-plan.sh (.ps1)
│   │   └── update-claude-md.sh (.ps1)
│   ├── templates/
│   │   ├── spec-template.md
│   │   ├── plan-template.md
│   │   ├── tasks-template.md
│   │   ├── constitution-template.md
│   │   └── CLAUDE-template.md
│   ├── extensions/             # Extensions installed
│   │   └── <ext-name>/
│   ├── presets/                # Presets installed
│   │   └── <preset-name>/
│   ├── extension-catalogs.yml
│   └── preset-catalogs.yml
├── .claude/                    # Claude Code commands
│   └── commands/
│       ├── speckit.*.md
│       └── ... (các lệnh core + extension)
├── CLAUDE.md                   # AI agent context
├── specs/                      # Alias cho .specify/specs/
└── [source code files]
```

### Template-driven Quality

Các template của Spec-Kit hoạt động như sophisticated prompts để constrain LLM output:

1. **Ngăn chặn Implementation Details sớm**: Template yêu cầu tập trung vào WHAT/WHY, không HOW
2. **Forcing Explicit Uncertainty Markers**: Sử dụng `[NEEDS CLARIFICATION]` cho các vùng mơ hồ
3. **Structured Thinking qua Checklists**: Comprehensive checklists như "unit tests for English"
4. **Constitutional Compliance Gates**: Phase -1 gates enforce architectural principles
5. **Hierarchical Detail Management**: Giữ plan ở high-level, chi tiết trong separate files
6. **Test-First Thinking**: Enforce test-first development ordering
7. **Preventing Speculative Features**: Không có "nice to have" không có nguồn gốc

---

## Tham chiếu CLI

### Core Commands

```bash
# Initialize project mới
specify init <project_name>
specify init <project_name> --ai claude
specify init . --here --ai copilot
specify init . --here --force --ai copilot

# Script type
specify init <project_name> --ai copilot --script ps  # PowerShell
specify init <project_name> --ai copilot --script sh  # Bash

# Options
specify init <project_name> --ai copilot --ignore-agent-tools
specify init <project_name> --ai copilot --no-git
specify init <project_name> --ai copilot --preset compliance
specify init <project_name> --ai copilot --branch-numbering timestamp

# Check installed tools
specify check

# Version info
specify version
specify --version
```

### Integration Commands

```bash
specify integration list
specify integration install claude
specify integration switch copilot
specify integration uninstall
specify integration upgrade
```

### Extension Commands

```bash
specify extension search [query]
specify extension search --tag integration --verified
specify extension add <name>
specify extension add <name> --from https://...zip
specify extension add <name> --dev /path/to/extension
specify extension add <name> --priority 5
specify extension list
specify extension list --all
specify extension info <name>
specify extension update [name]
specify extension enable <name>
specify extension disable <name>
specify extension remove <name>
specify extension set-priority <name> <priority>
specify extension catalog list
specify extension catalog add <url> --name <name> --priority 5
specify extension catalog remove <name>
```

### Preset Commands

```bash
specify preset search [query]
specify preset search --tag writing
specify preset add <preset_id>
specify preset add <preset_id> --from https://...zip
specify preset add <preset_id> --dev /path/to/preset
specify preset add <preset_id> --priority 5
specify preset list
specify preset info <preset_id>
specify preset resolve <filename>
specify preset enable <preset_id>
specify preset disable <preset_id>
specify preset remove <preset_id>
specify preset set-priority <preset_id> <priority>
specify preset catalog list
specify preset catalog add <url> --name <name> --priority 5
specify preset catalog remove <name>
```

---

## Nâng cấp và bảo trì

### Nâng cấp CLI Tool

```bash
# Nâng cấp với uv
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git@vX.Y.Z

# Nâng cấp với pipx
pipx install --force git+https://github.com/github/spec-kit.git@vX.Y.Z
```

### Cập nhật Project Files

```bash
# Cập nhật slash commands, templates, scripts
specify init --here --force --ai copilot
```

### Cảnh báo quan trọng khi nâng cấp

> ⚠️ **Constitution file sẽ bị ghi đè**: `specify init --here --force` ghi đè `.specify/memory/constitution.md`. Luôn backup trước:

```bash
# Backup constitution trước khi nâng cấp
cp .specify/memory/constitution.md .specify/memory/constitution-backup.md

# Sau nâng cấp
git restore .specify/memory/constitution.md
# hoặc
mv .specify/memory/constitution-backup.md .specify/memory/constitution.md
```

### Các file an toàn khi nâng cấp

| File/Directory | An toàn? |
|---------------|---------|
| `specs/` (specifications, plans, tasks) | ✅ AN TOÀN TUYỆT ĐỐI |
| Source code | ✅ AN TOÀN TUYỆT ĐỐI |
| Git history | ✅ AN TOÀN TUYỆT ĐỐI |
| `.specify/templates/` | ⚠️ Bị ghi đè với `--force` |
| `.specify/scripts/` | ⚠️ Bị ghi đè với `--force` |
| `.specify/memory/constitution.md` | ⚠️ **Bị ghi đè** |

---

## Cộng đồng và đóng góp

### Community Extensions (60+)

Xem đầy đủ tại: [speckit-community.github.io/extensions/](https://speckit-community.github.io/extensions/)

### Community Presets (10+)

Xem đầy đủ tại: [catalog.community.json](https://raw.githubusercontent.com/github/spec-kit/main/presets/catalog.community.json)

### Community Walkthroughs

Xem Spec-Driven Development trong thực tế qua các walkthroughs từ cộng đồng: [Community Walkthroughs](https://github.github.io/spec-kit/community/walkthroughs.html)

### Community Friends

Các project cộng đồng mở rộng, visualize hoặc xây dựng trên Spec Kit: [Community Friends](https://github.github.io/spec-kit/community/friends.html)

### Đóng góp

1. Fork repository
2. Thêm extension/preset vào catalog tương ứng
3. Tạo GitHub release với semantic versioning
4. Submit Pull Request
5. Review bởi maintainers (3-7 ngày làm việc)

---

## Câu hỏi thường gặp (FAQ)

### Chung

**Q: Tôi có cần chạy `specify` mỗi lần mở project không?**
A: Không. Chỉ chạy `specify init` một lần khi khởi tạo project (hoặc khi nâng cấp). Slash commands được cài đặt vĩnh viễn vào thư mục agent của bạn.

**Q: Tôi có thể dùng nhiều integrations cùng lúc không?**
A: Không. Chỉ một AI coding agent integration có thể active trong một project. Sử dụng `specify integration switch` để thay đổi.

**Q: Extensions và Presets khác nhau thế nào?**
A: **Extensions** thêm khả năng MỚI (new commands, workflows). **Presets** tùy chỉnh cách ĐƯỢC cách hoạt động (override templates, commands).

**Q: Làm sao để sử dụng Spec Kit cho codebase hiện có?**
A: Sử dụng **Brownfield Bootstrap** extension (`specify extension add spec-kit-brownfield`) để tự động khám phá architecture và adopt SDD một cách từ từ.

**Q: Spec Kit có hoạt động offline không?**
A: Có, sau khi cài đặt CLI, bạn có thể sử dụng `--offline` flag hoặc chuyển wheel bundle sang máy air-gapped.

### Extensions

**Q: Tại sao tôi không tìm thấy extension trong search?**
A: Kiểm tra chính tả, extension có thể chưa được publish, hoặc nằm trong catalog bạn chưa thêm. Dùng `specify extension catalog list` để xem catalogs active.

**Q: Tại sao extension command không xuất hiện trong AI agent?**
A: Verify extension đã được cài đặt và enabled với `specify extension list`. Restart AI agent nếu cần.

**Q: Extension có miễn phí không?**
A: Core functionality phải miễn phí và open source. Commercial support/services được cho phép.

### Presets

**Q: Tôi có thể dùng nhiều presets cùng lúc không?**
A: Có. Presets stack theo priority — mỗi file được resolve độc lập từ source có priority cao nhất. Dùng `specify preset set-priority` để kiểm soát thứ tự.

**Q: Làm sao biết file nào đang được sử dụng?**
A: Dùng `specify preset resolve <filename>` để trace resolution stack và xem file nào thắng.

**Q: Làm sao tạm thời tắt một preset?**
A: Dùng `specify preset disable <preset_id>`. Preset vẫn được cài đặt nhưng bị skip trong resolution. Dùng `enable` để bật lại.

### Nâng cấp

**Q: Tôi mất constitution đã tùy chỉnh sau khi nâng cấp**
A: Restore từ git: `git restore .specify/memory/constitution.md` hoặc từ backup.

**Q: Tôi thấy duplicate slash commands trong IDE**
A: Xóa thủ công các command file cũ từ thư mục agent (ví dụ: `.kilocode/rules/`). Restart IDE.

---

## Tài liệu tham khảo

| Nguồn | URL |
|--------|-----|
| GitHub Repository | https://github.com/github/spec-kit |
| Documentation | https://github.github.io/spec-kit/ |
| Community Extensions | https://speckit-community.github.io/extensions/ |
| Releases | https://github.com/github/spec-kit/releases |
| Issues | https://github.com/github/spec-kit/issues |

---

## License

MIT License — xem file [LICENSE](https://github.com/github/spec-kit/blob/main/LICENSE)

---

*Tài liệu này được viết dựa trên repository [github/spec-kit](https://github.com/github/spec-kit) với hơn 90,000 stars. Spec-Kit là một project mã nguồn mở của GitHub và cộng đồng.*
