# code-review-graph — Hướng dẫn sử dụng

## 1. Giới thiệu

`code-review-graph` là một công cụ xây dựng bản đồ cấu trúc (knowledge graph) của codebase bằng Tree-sitter, giúp AI hiểu nhanh mã nguồn mà không cần đọc lại toàn bộ code. Công cụ này giảm ~8.2x token khi code review và lên tới 49x khi làm việc hàng ngày.

Trong dự án này:
- **65 files** được parse
- **280 nodes** (hàm, class, import)
- **1983 edges** (gọi hàm, import, test)

## 2. Cài đặt

### 2.1 Yêu cầu

- Python 3.10+
- `pip install code-review-graph`

### 2.2 Khởi tạo lần đầu

```bash
python -m code_review_graph build
```

Lệnh này parse toàn bộ mã nguồn, lưu thành đồ thị SQLite tại `.code-review-graph/graph.db`.

### 2.3 Cập nhật đồ thị

- **Tự động**: Mỗi khi có file thay đổi hoặc git commit, hook tự động chạy incremental update (<2s).
- **Thủ công**:

```bash
python -m code_review_graph update   # chỉ cập nhật file đã thay đổi
python -m code_review_graph watch   # liên tục theo dõi thay đổi
```

### 2.4 Cấu hình MCP (Tùy chọn)

Nếu muốn sử dụng qua MCP server (tương thích Cursor/Windsurf/Zed/Continue...):

```bash
# Cài đặt auto-detection
code-review-graph install

# Hoặc cấu hình thủ công cho Cursor
```

Thêm vào `.mcp.json` của project:

```json
{
  "code-review-graph": {
    "command": "code-review-graph",
    "args": ["serve", "--repo", "c:\\Users\\Admin\\Desktop\\HSoft\\base-next.js-fullstack"],
    "env": { "PYTHONUTF8": "1" }
  }
}
```

## 3. Các công cụ (Tools)

### 3.1 Công cụ chính

| Công cụ | Mô tả | Khi nào dùng |
|---------|--------|--------------|
| `get_context` | Trả về ~100 token tóm tắt cấu trúc codebase | Dùng đầu tiên, trước khi bất cứ câu hỏi nào |
| `query_graph` | Tìm callers, callees, imports, inheritance | Khi cần biết ai gọi hàm này / hàm này gọi gì |
| `semantic_search_nodes` | Tìm kiếm theo nghĩa (không chỉ tên) | Khi không nhớ chính xác tên hàm |
| `detect_changes` | Phân tích blast-radius — file nào bị ảnh hưởng | Khi có thay đổi, cần đánh giá tác động |
| `list_graph_stats` | Xem kích thước đồ thị | Khi muốn kiểm tra trạng thái đồ thị |
| `get_architecture_overview` | Bản đồ kiến trúc từ community detection | Khi muốn hiểu quy hoạch của hệ thống |

### 3.2 Công cụ bổ sung

| Công cụ | Mô tả |
|---------|--------|
| `list_communities` | Liệt kê các cụm code (nhóm chức năng liên quan) |
| `get_community` | Chi tiết một cụm code |
| `traverse_graph` | Duyệt đồ thị BFS/DFS từ một node |
| `get_hub_nodes` | Tìm các node nối bật (nhiều liên kết nhất) |
| `get_bridge_nodes` | Tìm điểm chặn (chokepoint kiến trúc) |
| `get_knowledge_gaps` | Tìm khoảng trống kiến trúc (code bị cô lập, không có test) |
| `get_suggested_questions` | Câu hỏi được gợi ý từ phân tích đồ thị |
| `list_flows` | Danh sách luồng thực thi (API -> Service -> DB) |
| `get_affected_flows` | Tìm luồng bị ảnh hưởng bởi file thay đổi |

## 4. Ví dụ sử dụng

### 4.1 Hỏi về cách một chức năng hoạt động

**Câu hỏi:** "API themes hoạt động như thế nào?"

**Trước khi (không dùng graph):**
- Đọc nhiều file: `api/themes/route.ts`, service, repository, schema...
- Tốn hàng nghìn token

**Sau khi (dùng graph):**
1. `get_context` — lấy tóm tắt cấu trúc dự án (~100 tokens)
2. `semantic_search_nodes` với query "themes API" — tìm các node liên quan
3. `query_graph` với tên hàm chính — xem callers và callees
4. `detect_changes` nếu có thay đổi để đánh giá blast radius

### 4.2 Đánh giá tác động khi thay đổi

**Câu hỏi:** "Nếu sửa `Select` component, những file nào bị ảnh hưởng?"

```bash
detect_changes(["src/components/ui/select.tsx"])
# Trả về: các file gọi Select, các test, các component sử dụng Select
```

### 4.3 Tìm hàm gọi một chức năng

```bash
query_graph(node_name="getThemes", edge_type="calls")
# Trả về: các hàm gọi getThemes, các hàm getThemes gọi
```

### 4.4 Hiểu kiến trúc hệ thống

```bash
get_architecture_overview()
# Trả về: bản đồ kiến trúc với các community (UI, API, DB, Auth...)
```

### 4.5 Tìm code bị cô lập

```bash
get_knowledge_gaps()
# Trả về: các hàm không có test, các function chỉ được gọi bởi 1 nơi
```

## 5. Chế độ hoạt động

### 5.1 Build graph

Parse toàn bộ mã nguồn (TypeScript/TSX) thành AST, trích xuất:
- **Nodes**: function, class, import statement
- **Edges**: gọi hàm (call), import, inheritance, test coverage

### 5.2 Tầng blast-radius

Khi một file thay đổi, đồ thị:
1. Tìm các file phụ thuộc (dependents)
2. Tìm các test liên quan
3. Tính toán risk score

### 5.3 Incremental update

- On git commit: so sánh SHA-256, chỉ re-parse file thay đổi
- On file save: watch mode, cập nhật <2s
- On new file: tự động thêm vào đồ thị

## 6. Giới hạn

| Giới hạn | Ghi chú |
|---------|---------|
| Small single-file changes | Graph metadata có thể nhiều hơn đọc file (ví dụ: express repo) |
| Search quality (MRR 0.35) | Tìm kiếm từ khóa chính xác tốt, nhưng đặt tên theo pattern module có thể trả về 0 kết quả |
| Flow detection (33% recall) | Chỉ đáng tin cậy với Python (FastAPI, httpx); JavaScript/TypeScript cần cải thiện |
| Precision | Cố gắng đảm bảo 100% recall (không bỏ sót file), precision thấp hơn (có false positive) |

## 7. Cấu hình nâng cao

### 7.1 Bộ lọc file không cần parse

Tạo `.code-review-graphignore` trong project root:

```
.next/
node_modules/
.env
*.generated.ts
vendor/**
```

### 7.2 Vector embeddings (tìm kiếm theo nghĩa)

```bash
pip install code-review-graph[embeddings]
python -m code_review_graph embed
```

Hoặc sử dụng Gemini, OpenAI-compatible endpoint:

```bash
export CRG_OPENAI_BASE_URL=http://127.0.0.1:3000/v1
export CRG_OPENAI_API_KEY=sk-...
export CRG_OPENAI_MODEL=text-embedding-3-small
```

### 7.3 Community detection (phân cụm code)

```bash
pip install code-review-graph[communities]
python -m code_review_graph build   # tự động phân cụm với Leiden algorithm
```

### 7.4 Chỉ sử dụng một số tools

Nếu muốn giới hạn tools (giảm token):

```bash
code-review-graph serve --tools query_graph_tool,semantic_search_nodes_tool,detect_changes_tool
```

Hoặc qua biến môi trường:

```bash
CRG_TOOLS=query_graph_tool,semantic_search_nodes_tool python -m code_review_graph serve
```

## 8. Khắc phục sự cố

### Lỗi "Invalid JSON / Connection Closed" trên Windows

Đảm bảo `fastmcp` version >= 3.2.4. Cấu hình `.mcp.json` đúng đường dẫn tuyệt đối:

```json
{
  "code-review-graph": {
    "command": "C:\\path\\to\\python\\Scripts\\code-review-graph.exe",
    "args": ["serve", "--repo", "c:\\path\\to\\project"],
    "env": { "PYTHONUTF8": "1" }
  }
}
```

### Đồ thị không cập nhật

```bash
# Xóa và build lại từ đầu
Remove-Item .code-review-graph/graph.db -Force
python -m code_review_graph build
```

### Python 3.14 lỗi (khuyến nghị Python 3.10-3.13)

Nếu gặp lỗi với Python 3.14, sử dụng Python 3.11 hoặc 3.12:

```bash
py -3.12 -m code_review_graph build
```

## 9. Lệnh CLI tham khảo

```bash
# Build đồ thị
python -m code_review_graph build

# Cập nhật incremental
python -m code_review_graph update

# Theo dõi thay đổi liên tục
python -m code_review_graph watch

# Xem trạng thái đồ thị
python -m code_review_graph status

# Sinh bản đồ tương tác (mở trong trình duyệt)
python -m code_review_graph visualize

# Xuất GraphML (cho Gephi)
python -m code_review_graph visualize --format graphml

# Xuất SVG
python -m code_review_graph visualize --format svg

# Phân tích tác động thay đổi
python -m code_review_graph detect-changes

# Sinh wiki từ communities
python -m code_review_graph wiki
```

## 10. Tài nguyên

- Repo: https://github.com/tirth8205/code-review-graph
- Docs: https://code-review-graph.com
- Discord: Được link trong README của repo
