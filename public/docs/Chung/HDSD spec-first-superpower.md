# Hướng Dẫn Sử Dụng

## 1. Mục Tiêu Hệ Thống

Bắt buộc trợ lý lập trình AI hoàn thành quy chuẩn (SDD) trước khi viết mã, loại bỏ hoàn toàn "viết tùy tiện theo cảm xúc".
Tích hợp sáu công cụ cốt lõi: Spec-Kit + OpenSpec (OPSX) + Superpowers + planning-with-files + ui-ux-pro-max (v2.5.0) + MemPalace.

**Nâng cấp cốt lõi v5:** Inline Self-Review thay thế vòng kiểm tra subagent · Tích hợp MemPalace bộ nhớ xuyên phiên · Spec-Kit Workflow Engine · ui-ux-pro-max v2.5.0 · OpenSpec `/opsx:refine` · Đồng bộ toàn bộ phiên bản.

## 2. Cài Đặt

### Cài đặt một lần (khuyến nghị)

```bash
npx skills add zxzvsdcj/spec-first-superpowers
```

Cài đặt không tương tác (phù hợp script hoặc bàn giao hàng loạt):

```bash
npx skills add zxzvsdcj/spec-first-superpowers --skill spec-first-superpowers --agent cursor --global --yes
```

### CLI bên ngoài (khi cần)

```bash
chmod +x install-all.sh && ./install-all.sh
```

```powershell
.\install-all.ps1
```

### Cursor Skills phụ thuộc

Trong Cursor đảm bảo đã cài đặt:
- `using-superpowers` (bao gồm sub Skills)
- `planning-with-files`
- `finishing-a-development-branch`
- `ui-ux-pro-max` (khuyến nghị, v2.5.0)

### Tùy chọn: MemPalace

```bash
pip install mempalace
mempalace init ~/projects/your-project
```

Thêm server mempalace trong Cursor Settings → MCP. Chi tiết xem `references/mempalace-integration.md`.

### Tùy chọn: Quy tắc Gatekeeper

Sao chép `.cursor/00-spec-first-superpowers.mdc` vào thư mục `.cursor/rules/` của dự án, đảm bảo AI luôn ưu tiên kích hoạt quy trình quy chuẩn.

## 3. Cách Sử Dụng

### Khởi động

```
/super-spec
```

Hoặc với tham số:

```
/super-spec force-openspec thêm dashboard người dùng
```

Nâng cấp một lần (tự động kiểm tra tất cả dự án tích hợp phiên bản mới nhất và thực hiện nâng cấp):

```
/super-spec upgrade
```

### Quy trình hoàn chỉnh

1. **Phân loại độ phức tạp** — AI tự động xác định nhanh/chuẩn/sâu, người dùng xác nhận
2. **Khôi phục ngữ cảnh** — Phát hiện task_plan.md đã có sẵn thì tự động khôi phục (5 câu hỏi khởi động lại + truy vấn lịch sử MemPalace)
3. **Quy chuẩn SDD** — Thực thi theo chế độ: OpenSpec dùng `/opsx:propose` hoặc `/opsx:explore`; Spec-Kit dùng `/speckit.specify`
4. **Cổng G1** — Người dùng xác nhận + căn chỉnh hiến pháp + **Inline Spec Review** (danh sách tự kiểm tra, ~30 giây/vòng)
5. **Quy hoạch bền vững** — Tạo ba file + **ánh xạ cấu trúc file** + **Inline Plan Review**, cổng G2
6. **Thiết kế UI/UX** — Kích hoạt có điều kiện, hệ thống thiết kế thông minh v2.5.0 (67 styles, 161 palettes, 57 fonts, 14 stacks, 6 specialist skills), `--persist` bền vững, cổng G3
7. **Thực thi TDD** — Subagent-Driven (bao gồm **chọn model** + **xử lý trạng thái implementer**) hoặc Executing-Plans, cổng G4
8. **Lưu trữ** — finishing-a-development-branch + cập nhật tất cả file + lưu trữ quyết định MemPalace

### Khả năng mới thêm trong v5

| Khả năng | Mô tả |
|---------|-------|
| Inline Self-Review | Thay thế vòng kiểm tra subagent, ~30 giây/vòng (so với ~25 phút), chất lượng tương đương |
| Tích hợp MemPalace | Bộ nhớ xuyên phiên · Knowledge Graph theo dõi quyết định · Agent Diary audit · Phát hiện mẫu Spec xuyên dự án |
| Spec-Kit Workflow Engine | Đăng ký và khám phá workflow tùy chỉnh (hệ thống Catalog, v0.7.0+) |
| `/opsx:refine` | Kiểm tra và tối ưu hóa có mục tiêu artifact Spec đã có (custom profile) |
| Cập nhật thuật ngữ OpenSpec | "expanded" → "custom" (v1.2.0) |
| ui-ux-pro-max v2.5.0 | +6 Skills mới (banner-design/slides/ui-styling/design-system/design/brand) · Three.js · 1923 Google Fonts |
| 6 chuỗi协同链 | Thêm Chain 6: MemPalace Memory Chain |

### Khả năng được giữ lại từ v4

| Khả năng | Mô tả |
|---------|-------|
| Phân loại độ phức tạp | Ba cấp nhanh/chuẩn/sâu |
| Khôi phục phiên | 5 câu hỏi khởi động lại |
| Cổng chất lượng G0-G4 | Bao gồm xác minh hiến pháp |
| Kiểm tra hai giai đoạn | Tuân thủ Spec + Chất lượng mã |
| Thực thi Subagent | Không ô nhiễm ngữ cảnh |
| Chọn model | fast → standard → capable |
| Trạng thái implementer | DONE / DONE_WITH_CONCERNS / NEEDS_CONTEXT / BLOCKED |
| Kiểm tra phạm vi | Phát hiện sớm phân rã |
| Ánh xạ cấu trúc file | Ánh xạ trước phân rã công việc |
| Lưu trữ thiết kế | `--persist` tái sử dụng xuyên phiên |

## 4. Câu Hỏi Thường Gặp

| Câu hỏi | Giải pháp |
|---------|-----------|
| Không kích hoạt? | Kiểm tra skills đã cài đặt chưa, khởi động lại Cursor |
| Lỗi chế độ? | `/super-spec reset` để reset |
| UI không kích hoạt? | Viết rõ từ khóa giao diện trong yêu cầu |
| Mất ngữ cảnh? | Kiểm tra task_plan.md / progress.md có cập nhật không; bật MemPalace |
| 3 lần lỗi? | Tự động gọi systematic-debugging |
| Thư mục OpenSpec không tìm thấy? | OpenSpec hiện dùng `openspec/` (không phải `.openspec/`), chạy `openspec init` |
| Thuật ngữ Profile thay đổi? | v1.2.0 đổi "expanded" thành "custom", chạy `openspec config profile` |
| Spec-Kit --ai không hoạt động? | v0.7.1 đã bỏ `--ai`, dùng `--integration` |

## 5. Tài Liệu Tham Khảo Chi Tiết

- [Tiêu chuẩn cổng chất lượng](skills/spec-first-superpowers/references/quality-gates.md)
- [Mẫu协同链](skills/spec-first-superpowers/references/synergy-patterns.md)
- [Hướng dẫn tích hợp](skills/spec-first-superpowers/references/integration-guide.md)
- [Workflow OpenSpec](skills/spec-first-superpowers/references/openspec-workflow.md)
- [Workflow Spec-Kit](skills/spec-first-superpowers/references/spec-kit-workflow.md)
- [Tích hợp MemPalace](skills/spec-first-superpowers/references/mempalace-integration.md)
- [Nghị định nâng cấp](skills/spec-first-superpowers/references/upgrade-protocol.md)
