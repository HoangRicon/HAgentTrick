# QUY TẮC VIẾT PROMPT CHO AI AGENT

## 1. MỤC ĐÍCH VÀ PHẠM VI

Tài liệu này định nghĩa nguyên tắc viết prompt chuẩn để giao tiếp với AI Agent hiệu quả nhất. Prompt không phải câu hỏi bất kỳ — prompt là **hợp đồng chỉ rõ ngữ cảnh, yêu cầu, ràng buộc và kỳ vọng đầu ra** để AI hiểu đúng và làm đúng.

Prompt tốt giúp AI:

- Hiểu đúng nghiệp vụ thay vì đoán ý
- Tuân thủ kiến trúc và quy tắc code của dự án
- Sinh code đúng chỗ, đúng cách, không thêm bừa
- Tránh scope creep và hallucination
- Làm việc có kiểm soát, có checkpoint

### Prompt tốt không phải là prompt dài

Prompt dài không phải prompt tốt. Prompt tốt là prompt **đủ ngữ cảnh, đủ ràng buộc, đủ kỳ vọng** và không thừa thông tin không liên quan. Tối ưu hóa prompt là loại bỏ thông tin nhiễu, giữ lại thông tin cần thiết.

### Prompt này không phải nơi để:

- Viết code hoặc mô tả kỹ thuật ở mức implementation syntax
- Tự ý mở rộng scope hoặc thêm feature mới
- Gửi toàn bộ codebase vào prompt
- Dùng ngôn ngữ mơ hồ, không có thuật ngữ rõ ràng
- Viết prompt mà không xác định actor, entity, permission trước

---

## 2. NGUYÊN TẮC QUAN TRỌNG NHẤT

### 2.1. Bốn thành phần bắt buộc của mọi prompt

Mọi prompt gửi cho AI Agent phải chứa đủ bốn thành phần theo thứ tự:

1. **Ngữ cảnh (Context)** — Bối cảnh dự án, tình trạng hiện tại, tài liệu liên quan
2. **Nhiệm vụ (Task)** — Việc cần làm, cụ thể và rõ ràng
3. **Ràng buộc (Constraints)** — Giới hạn kỹ thuật, nghiệp vụ, quy tắc phải tuân thủ
4. **Kỳ vọng đầu ra (Expected Output)** — Định dạng, cấu trúc, tiêu chí đánh giá kết quả

### 2.2. Ngữ cảnh phải đủ để AI hiểu domain

- Mô tả nghiệp vụ bằng ngôn ngữ của người dùng cuối, không phải ngôn ngữ kỹ thuật
- Cung cấp thông tin về hệ thống đang có, không phải mô tả hệ thống lý tưởng
- Đính kèm tài liệu phân tích yêu cầu khi có liên quan
- Đề cập actor nào đang thực hiện hành động, quyền hạn ra sao

### 2.3. Nhiệm vụ phải là hành động cụ thể

- Dùng động từ hành động rõ ràng: tạo, sửa, xóa, viết, phân tích, review, triển khai
- Không dùng động từ mơ hồ: cải thiện, nâng cấp, tối ưu, làm cho tốt hơn
- Nhiệm vụ phải có giới hạn rõ: làm gì, cho ai, ở đâu, trong phạm vi nào

### 2.4. Ràng buộc phải cụ thể và có thể kiểm chứng

- Ràng buộc kỹ thuật: dùng framework nào, version nào, tuân thủ rule nào
- Ràng buộc nghiệp vụ: permission nào được phép, ownership ra sao
- Ràng buộc về chất lượng: phải pass test nào, phải verify bằng cách nào
- Ràng buộc phải được viết bằng ngôn ngữ có thể kiểm tra được, không phải ngôn ngữ mơ hồ

### 2.5. Kỳ vọng đầu ra phải có tiêu chí đánh giá

- Định dạng đầu ra: markdown, JSON, code file, báo cáo
- Cấu trúc đầu ra: có những phần nào, thứ tự ra sao
- Tiêu chí hoàn thành: làm sao biết đã đạt yêu cầu
- Ví dụ đầu ra: càng cụ thể càng tốt

---

## 3. CẤU TRÚC CHI TIẾT TỪNG THÀNH PHẦN

### 3.1. Ngữ cảnh (Context)

Ngữ cảnh tốt giúp AI hiểu **tại sao** việc này cần làm, không chỉ **làm gì**.

#### 3.1.1. Thông tin dự án

```
Dự án: [Tên dự án]
Stack: [Framework, ngôn ngữ, database, deployment]
Kiến trúc: [Mô tả ngắn về cấu trúc chính]
Trạng thái hiện tại: [Hệ thống đã có những gì, đang thiếu gì]
```

#### 3.1.2. Thông tin người dùng và quyền hạn

```
Actor chính: [Vai trò, ví dụ: admin, user, guest]
Quyền hạn: [Actor được phép làm gì, không được phép làm gì]
Luồng hiện tại: [Mô tả luồng nghiệp vụ liên quan]
```

#### 3.1.3. Tài liệu liên quan

```
Tài liệu phân tích: [Đường dẫn hoặc nội dung chính]
Quy tắc code: [Đường dẫn hoặc tóm tắt quy tắc áp dụng]
Kế hoạch triển khai: [Đường dẫn hoặc phase hiện tại]
```

#### 3.1.4. Bối cảnh kỹ thuật

```
File hiện tại: [Đường dẫn và mô tả file đang làm việc]
Module liên quan: [Các file/component có liên quan]
Dependency: [Package hoặc thư viện có sẵn]
```

### 3.2. Nhiệm vụ (Task)

Nhiệm vụ phải viết theo cấu trúc: **Hành động + Đối tượng + Phạm vi + Điều kiện**.

```
THỰC HIỆN: [Hành động cụ thể]
ĐỐI TƯỢNG: [File, component, function cụ thể]
PHẠM VI: [Giới hạn cụ thể, không làm gì ngoài phạm vi này]
TỪ: [Trạng thái ban đầu]
SANG: [Trạng thái mong muốn cụ thể]
```

Ví dụ:

```
THỰC HIỆN: Thêm validation cho form đăng ký
ĐỐI TƯỢNG: src/app/(auth)/register/page.tsx
PHẠM VI: Chỉ sửa component form, không sửa API route
TỪ: Form hiện tại không validate email format
SANG: Form validate email format và hiển thị lỗi cụ thể
```

### 3.3. Ràng buộc (Constraints)

Ràng buộc phải được viết bằng **ngôn ngữ có thể kiểm tra**, không phải nguyên tắc chung chung.

#### 3.3.1. Ràng buộc kỹ thuật

```
TUYỆT ĐỐI PHẢI:
- Sử dụng [framework version], không dùng phiên bản khác
- Tuân thủ [tên file quy tắc code]
- Không sửa file ngoài thư mục [đường dẫn]
- Giữ nguyên [function/component] nếu không được yêu cầu sửa
- Viết test cho [function/feature] với ít nhất [số lượng] test case
- Thêm [field/type] vào interface hiện có, không tạo interface mới
```

#### 3.3.2. Ràng buộc nghiệp vụ

```
TUYỆT ĐỐI PHẢI:
- [Actor] chỉ được thực hiện [hành động] khi có [permission]
- Dữ liệu [entity] chỉ được tạo bởi [actor], không ai khác
- Không exposed [field/api] ra ngoài khi chưa được authorize
- Giữ nguyên [business rule] đã được định nghĩa trong tài liệu
```

#### 3.3.3. Ràng buộc về chất lượng

```
TUYỆT ĐỐI PHẢI:
- Code phải pass type check (tsc --noEmit)
- Không sử dụng any type
- Không commit [file] vào git
- Mọi API response phải có error handling
- Phải verify bằng cách [chạy test / build / kiểm tra thủ công]
```

#### 3.3.4. Ràng buộc về phạm vi

```
KHÔNG ĐƯỢC:
- Thêm feature mới ngoài yêu cầu
- Sửa file không liên quan đến task hiện tại
- Xóa file đang dùng bởi phần khác
- Thay đổi config toàn cục
- Tự ý thêm dependency
```

### 3.4. Kỳ vọng đầu ra (Expected Output)

#### 3.4.1. Định dạng đầu ra

```
ĐẦU RA MONG ĐỢI:
- Định dạng: [code file / markdown / JSON / báo cáo]
- Ngôn ngữ: [TypeScript, Python, markdown tiếng Việt]
- File tạo mới: [danh sách đường dẫn]
- File sửa: [danh sách đường dẫn]
- File xóa: [danh sách đường dẫn, nếu có]
```

#### 3.4.2. Cấu trúc đầu ra

```
CẤU TRÚC ĐẦU RA:
1. [Phần 1: Mô tả gì, viết gì]
2. [Phần 2: Mô tả gì, viết gì]
3. [Phần 3: Mô tả gì, viết gì]
```

#### 3.4.3. Tiêu chí hoàn thành

```
TIÊU CHÍ HOÀN THÀNH:
- [ ] Code sinh ra compile thành công
- [ ] Tất cả test case đã viết pass
- [ ] Không có type error
- [ ] Không sửa file ngoài phạm vi
- [ ] Tài liệu (nếu yêu cầu) đã được cập nhật
```

---

## 4. PROMPT TEMPLATE TỪNG LOẠI NHIỆM VỤ

### 4.1. Prompt viết code mới

```
## NGỮ CẢNH
Dự án: [Tên dự án]
Stack: [Framework, language, database]
Kiến trúc: [Mô tả ngắn]
Trạng thái hiện tại: [Hệ thống đã có gì]

Actor: [Vai trò người dùng]
Quyền hạn: [Permission cụ thể]
Luồng: [Mô tả luồng nghiệp vụ]

Tài liệu liên quan:
- Phân tích yêu cầu: [tóm tắt hoặc đường dẫn]
- Quy tắc code: [tóm tắt hoặc đường dẫn]

File liên quan:
- [Đường dẫn file]: [Mô tả vai trò]
- [Đường dẫn file]: [Mô tả vai trò]

## NHIỆM VỤ
THỰC HIỆN: [Hành động cụ thể]
ĐỐI TƯỢNG: [File/component cụ thể]
PHẠM VI: [Giới hạn cụ thể]
TỪ: [Trạng thái ban đầu]
SANG: [Trạng thái mong muốn]

## RÀNG BUỘC
TUYỆT ĐỐI PHẢI:
- [Ràng buộc kỹ thuật cụ thể]
- [Ràng buộc nghiệp vụ cụ thể]
- [Ràng buộc chất lượng cụ thể]

KHÔNG ĐƯỢC:
- [Hành động bị cấm cụ thể]

## KỲ VỌNG ĐẦU RA
Định dạng: [code file]
File tạo mới: [danh sách]
File sửa: [danh sách]

Tiêu chí hoàn thành:
- [ ] [Tiêu chí cụ thể]
- [ ] [Tiêu chí cụ thể]
```

### 4.2. Prompt sửa code (fix bug)

```
## NGỮ CẢNH
Dự án: [Tên dự án]
Stack: [Framework, language]

Bug gặp phải: [Mô tả bug cụ thể]
Hành vi mong muốn: [Mô tả đúng]
Hành vi thực tế: [Mô tả sai]

File liên quan:
- [Đường dẫn file]: [Mô tả vai trò]
- Error message (nếu có): [Lỗi cụ thể]

## NHIỆM VỤ
THỰC HIỆN: Sửa bug
ĐỐI TƯỢNG: [File/component chứa bug]
PHẠM VI: Chỉ sửa bug này, không thay đổi logic khác
TỪ: [Hành vi sai hiện tại]
SANG: [Hành vi đúng mong muốn]

## RÀNG BUỘC
- Giữ nguyên interface/API của function
- Không thay đổi code không liên quan đến bug
- Không thêm feature mới
- Viết hoặc cập nhật test để cover bug này

## KỲ VỌNG ĐẦU RA
- File sửa: [danh sách]
- Test case mới/đã sửa: [mô tả]
- Verify: [cách kiểm tra đã fix]
```

### 4.3. Prompt review code

```
## NGỮ CẢNH
Dự án: [Tên dự án]
Stack: [Framework, language]
File cần review: [Đường dẫn cụ thể]
File liên quan: [Đường dẫn, mô tả]

Quy tắc code áp dụng: [đường dẫn hoặc tóm tắt]
Nghiệp vụ: [Mô tả ngắn về chức năng]

## NHIỆM VỤ
THỰC HIỆN: Review code
ĐỐI TƯỢNG: [File/component]
PHẠM VI: [Giới hạn review]

## RÀNG BUỘC
- Đánh giá theo tiêu chí: correctness, security, performance, maintainability
- Không đề xuất refactor nếu không cần thiết
- Chỉ suggest thay đổi khi có lý do cụ thể
- Kiểm tra đúng architecture layer: [tên layer] chỉ được phép import từ [danh sách layer]

## KỲ VỌNG ĐẦU RA
Định dạng: Markdown
Cấu trúc:
1. Tóm tắt: [Tổng quan code]
2. Vấn đề: [Danh sách vấn đề, mỗi vấn đề ghi rõ file:dòng, mô tả, mức độ nghiêm trọng]
3. Đề xuất: [Danh sách cách sửa, mỗi cách gắn với vấn đề cụ thể]
4. Điểm tốt: [Danh sách code làm tốt]
```

### 4.4. Prompt viết tài liệu

```
## NGỮ CẢNH
Dự án: [Tên dự án]
File/Component cần viết docs: [Đường dẫn]
Người đọc mục tiêu: [Vai trò, ví dụ: developer mới, end user]
Ngôn ngữ tài liệu: [Tiếng Việt / English]

## NHIỆM VỤ
THỰC HIỆN: Viết tài liệu
ĐỐI TƯỢNG: [File/component]
PHẠM VI: [Giới hạn phạm vi tài liệu]
TỪ: [Trạng thái hiện tại]
SANG: [Tài liệu đầy đủ theo cấu trúc quy định]

## RÀNG BUỘC
- Ngôn ngữ: [tiếng Việt chuẩn / English]
- Tuân thủ cấu trúc tài liệu: [mô tả cấu trúc]
- Không bịa thêm thông tin không có trong code
- Ghi rõ version, date, author
- Code examples phải copy-paste runnable

## KỲ VỌNG ĐẦU RA
Định dạng: Markdown
File: [đường dẫn]
Cấu trúc:
- [Phần 1: mô tả]
- [Phần 2: mô tả]
```

### 4.5. Prompt phân tích và lập kế hoạch

```
## NGỮ CẢNH
Dự án: [Tên dự án]
Trạng thái: [Greenfield / Brownfield, mô tả hệ thống hiện có]
Yêu cầu mới: [Mô tả yêu cầu cần phân tích]

## NHIỆM VỤ
THỰC HIỆN: Phân tích yêu cầu và lập kế hoạch triển khai
PHẠM VI: [Giới hạn phạm vi]

## RÀNG BUỘC
- Tuân thủ quy tắc phân tích yêu cầu: [đường dẫn]
- Tuân thủ quy tắc viết kế hoạch: [đường dẫn]
- Không bịa thêm feature
- Giữ nguyên intent nghiệp vụ

## KỲ VỌNG ĐẦU RA
Định dạng: Markdown
Cấu trúc:
1. Tổng quan: [Mô tả yêu cầu]
2. Actor: [Danh sách actor]
3. Entity: [Danh sách entity]
4. Permission: [Ma trận permission]
5. Build Order: [Thứ tự triển khai]
6. Phase: [Danh sách phase]
```

---

## 5. KỸ THUẬT VIẾT PROMPT NÂNG CAO

### 5.1. Zero-shot, Few-shot và Chain-of-Thought

**Zero-shot**: Không cung cấp ví dụ. Dùng khi yêu cầu đơn giản, AI đã hiểu rõ domain.

**Few-shot**: Cung cấp 1-3 ví dụ minh họa input→output. Dùng khi yêu cầu phức tạp hoặc định dạng đầu ra đặc biệt.

**Chain-of-Thought**: Yêu cầu AI giải thích suy luận trước khi đưa ra kết quả. Dùng khi:
- Bài toán có nhiều bước logic
- Cần debug suy nghĩ của AI
- Muốn verify logic trước khi accept code

```
Sau đây là bài toán. Hãy SUY NGHĨ TỪNG BƯỚC trước khi viết code:
1. [Bước 1: phân tích]
2. [Bước 2: xác định entity]
3. [Bước 3: xác định relationship]
...
Bây giờ hãy viết code thực hiện.
```

### 5.2. Iterative prompting

Thay vì viết một prompt dài bao gồm mọi thứ, chia thành nhiều bước:

**Bước 1 — Phân tích**: Yêu cầu AI phân tích và xác nhận hiểu đúng yêu cầu
**Bước 2 — Thiết kế**: Yêu cầu AI đề xuất approach và chờ approval
**Bước 3 — Implementation**: Yêu cầu AI viết code dựa trên approach đã chốt
**Bước 4 — Verify**: Yêu cầu AI verify code theo tiêu chí đã định

```
Bước 1: Phân tích yêu cầu
"Đọc yêu cầu sau và cho biết bạn hiểu gì:
[Yêu cầu]
Trả lời theo format:
- Actor: [danh sách]
- Entity: [danh sách]
- Chức năng cần làm: [danh sách]
- Rủi ro tiềm ẩn: [danh sách]"

Bước 2: Chờ user approve phân tích

Bước 3: Thiết kế
"Đề xuất cách implement dựa trên phân tích đã approve:
- File structure
- Approach cho từng chức năng
- Dependency
- Rủi ro và cách mitigate"

Bước 4: Chờ user approve design

Bước 5: Implement
"Implement theo design đã approve. Tuân thủ:
- [Danh sách ràng buộc]
- [Danh sách tiêu chí verify]"
```

### 5.3. System prompt và User prompt

**System prompt** (persistent, cho toàn bộ session):
- Quy tắc code của dự án
- Kiến trúc và cấu trúc thư mục
- Nguyên tắc làm việc
- Danh sách công cụ được phép sử dụng

**User prompt** (cho từng task):
- Ngữ cảnh cụ thể của task
- Nhiệm vụ cụ thể
- Ràng buộc cụ thể cho task này
- Kỳ vọng đầu ra cụ thể

```
# System Prompt (gửi 1 lần ở đầu session)
Bạn là AI Agent làm việc trên dự án [tên dự án].
- Stack: [danh sách]
- Kiến trúc: [mô tả]
- Tuân thủ: [đường dẫn quy tắc code]

# User Prompt (gửi cho từng task)
[Xem mục 4.1 - Prompt viết code mới]
```

### 5.4. Spec-driven prompting

Yêu cầu AI tự sinh spec trước khi viết code, rồi dùng spec đó làm ràng buộc cho implementation.

```
Trước khi viết code, hãy viết SPEC.md cho task này theo format:
# SPEC: [Tên feature]
## Mục đích
## Input
## Output
## Logic chính
## Edge cases
## Test cases cần cover

Sau khi tôi approve SPEC.md, hãy implement theo spec đó.
```

### 5.5. Structured output

Yêu cầu đầu ra theo cấu trúc cố định để dễ parse và verify.

```
Trả lời theo format JSON sau:
{
  "action": "[hành động cụ thể]",
  "reasoning": "[giải thích ngắn gọn tại sao chọn cách này]",
  "files": {
    "create": ["danh sách file tạo mới"],
    "modify": ["danh sách file sửa"],
    "delete": ["danh sách file xóa"]
  },
  "tests": ["danh sách test case cần thêm"],
  "verification": ["cách verify code đúng"]
}
```

---

## 6. NHỮNG LỖI THƯỜNG GẶP

### 6.1. Prompt không đủ ngữ cảnh

**Sai:**
```
Viết function đăng nhập cho tôi.
```

**Đúng:**
```
Viết function login cho Next.js app sử dụng NextAuth.js với credentials provider.
- Email/password login, không social login
- Sử dụng existing User model trong Prisma schema
- Không tạo schema mới
- Handle error: wrong credentials, account not found, account locked
- Trả về session token hợp lệ sau khi login thành công
- Redirect về /dashboard sau login, redirect về /login nếu failed
```

### 6.2. Prompt có scope creep

**Sai:**
```
Thêm authentication. Bao gồm login, logout, register, forgot password, email verification, 2FA, session management, và làm đẹp UI.
```

**�úng:**
```
THỰC HIỆN: Thêm login page
PHẠM VI: Chỉ login page và API route /api/auth/signin
KHÔNG LÀM: logout, register, forgot password, email verification, 2FA, UI changes

Login requirements:
- Email/password với NextAuth credentials provider
- Error handling: wrong credentials, account not found
- Redirect: /dashboard (thành công), /login?error=XYZ (thất bại)
```

### 6.3. Không có ràng buộc rõ ràng

**Sai:**
```
Viết API route để lấy danh sách sản phẩm. Nên dùng cache cho nhanh.
```

**Đúng:**
```
THỰC HIỆN: Tạo GET /api/products
PHẠM VI: Chỉ route này, không tạo service layer mới

RÀNG BUỘC:
- Sử dụng existing productService.getAll() trong lib/services
- Pagination: page, limit query params (mặc định page=1, limit=20)
- Filter: category, minPrice, maxPrice query params
- Response format: { data: [...], total, page, limit }
- Cache: dùng unstable_cache từ next/cache, revalidate 60s
- Authorization: public endpoint (không cần auth)
- Error: 500 nếu service throw, message không leak internal error

ĐẦU RA:
- Tạo: src/app/api/products/route.ts
- Verify: chạy GET http://localhost:3000/api/products và kiểm tra response format
```

### 6.4. Không có tiêu chí hoàn thành

**Sai:**
```
Viết component button.
```

**Đúng:**
```
THỰC HIỆN: Viết Button component
PHẠM VI: src/components/ui/button.tsx

RÀNG BUỘC:
- Props: variant (default|outline|destructive|ghost), size (sm|md|lg), disabled, loading, onClick, children
- Dùng cva (class-variance-authority) cho variant management
- Loading state: hiển thị spinner và disable button
- Tuân thủ existing button styles trong globals.css

TIÊU CHÍ HOÀN THÀNH:
- [ ] TypeScript type đầy đủ, không any
- [ ] Tất cả variant render đúng style
- [ ] Loading state hoạt động đúng
- [ ] Button disabled không click được
- [ ] Có export type ButtonProps
```

### 6.5. Dùng ngôn ngữ mơ hồ

**Sai:**
```
Viết function xử lý data cho đẹp.
```

**Đúng:**
```
THỰC HIỆN: Chuyển đổi product array thành grouped structure
ĐẦU VÀO: Product[] với fields: id, name, category, price, stock
ĐẦU RA: Record<string, Product[]> grouped theo category, mỗi category sort theo name ASC

XỬ LÝ EDGE CASES:
- Empty array → trả về {}
- Product không có category → bỏ qua (không throw)
- Duplicate category → gộp vào cùng group
```

---

## 7. PROMPT CHO CÁC TÌNH HUỐNG ĐẶC BIỆT

### 7.1. Debugging

```
## NGỮ CẢNH
Dự án: [Tên]
Error: [Lỗi cụ thể, stack trace]
Hành vi mong muốn: [Mô tả]
Hành vi thực tế: [Mô tả]
File: [Đường dẫn]

## NHIỆM VỤ
Phân tích lỗi và đề xuất cách fix.

## RÀNG BUỘC
- Chỉ sửa nguyên nhân gốc, không fix symptom
- Không thay đổi logic không liên quan
- Viết test để prevent regression

## KỲ VỌNG ĐẦU RA
- Root cause: [mô tả]
- Fix: [đường dẫn file:dòng]
- Test case: [mô tả]
```

### 7.2. Refactoring

```
## NGỮ CẢNH
Dự án: [Tên]
Mục tiêu refactor: [Cải thiện gì, ví dụ: tách component, gộp logic, đổi pattern]
File hiện tại: [Đường dẫn]
Tại sao cần refactor: [Lý do cụ thể]

## NHIỆM VỤ
THỰC HIỆN: Refactor
ĐỐI TƯỢNG: [File/component]
PHẠM VI: [Giới hạn]

## RÀNG BUỘC
- Giữ nguyên public API / interface
- Không thay đổi behavior
- Cập nhật tất cả import nếu rename
- Chạy test sau refactor

## KỲ VỌNG ĐẦU RA
- Files tạo mới: [danh sách]
- Files sửa: [danh sách]
- Verify: [cách verify behavior không đổi]
```

### 7.3. Viết test

```
## NGỮ CẢNH
Dự án: [Tên]
Test framework: [Vitest / Jest / Playwright]
File cần test: [Đường dẫn]
Function/logic cần test: [Tên]

## NHIỆM VỤ
THỰC HIỆN: Viết unit test
ĐỐI TƯỢNG: [Function/component]
PHẠM VI: [Giới hạn]

## RÀNG BUỘC
- Mỗi test case ghi rõ: arrange (setup), act (gọi), assert (kiểm tra)
- Cover happy path và edge cases
- Mock external dependencies
- Test name mô tả behavior, không phải implementation
- Không test internal implementation details

## KỲ VỌNG ĐẦU RA
- Test file: [đường dẫn]
- Coverage target: [số %]
- Test cases: [danh sách cụ thể]
```

### 7.4. Migration

```
## NGỮ CẢNH
Dự án: [Tên]
Migration từ: [Version/Framework cũ]
Migration sang: [Version/Framework mới]
Tại sao: [Lý do migration]

## NHIỆM VỤ
THỰC HIỆN: Migration
PHẠM VI: [Danh sách file/module]

## RÀNG BUỘC
- Backup trước khi migrate
- Migrate từng bước nhỏ, verify sau mỗi bước
- Giữ backward compatibility nếu cần
- Update tất cả import sau khi rename
- Chạy full test suite sau migration

## KỲ VỌNG ĐẦU RA
- Files sửa: [danh sách]
- Breaking changes (nếu có): [danh sách]
- Migration steps: [danh sách bước đã thực hiện]
```

---

## 8. CHECKLIST TRƯỚC KHI GỬI PROMPT

Trước khi gửi prompt cho AI Agent, kiểm tra:

- [ ] **Ngữ cảnh**: Đã cung cấp đủ thông tin để AI hiểu domain chưa?
- [ ] **Actor & Permission**: Đã xác định rõ actor nào thực hiện, quyền gì chưa?
- [ ] **Nhiệm vụ**: Động từ hành động có cụ thể không? Phạm vi đã rõ chưa?
- [ ] **Ràng buộc kỹ thuật**: Đã đề cập stack, version, quy tắc code chưa?
- [ ] **Ràng buộc nghiệp vụ**: Đã đề cập permission, ownership, business rule chưa?
- [ ] **Ràng buộc phạm vi**: Đã liệt kê KHÔNG ĐƯỢC làm gì chưa?
- [ ] **Kỳ vọng đầu ra**: Format đầu ra đã rõ chưa?
- [ ] **Tiêu chí hoàn thành**: Có checklist để verify kết quả chưa?
- [ ] **Không có thông tin nhiễu**: Prompt có thừa thông tin không liên quan không?
- [ ] **Không có scope creep**: Nhiệm vụ có nằm trong phạm vi cho phép không?
- [ ] **Ngôn ngữ rõ ràng**: Không dùng từ mơ hồ như "tối ưu", "cải thiện", "làm tốt hơn"?

---

## 9. TÓM TẮT

Viết prompt hiệu quả = **4 thành phần bắt buộc** + **ngôn ngữ cụ thể** + **tiêu chí đo lường**.

| Thành phần | Câu hỏi cần trả lời |
|---|---|
| **Context** | Tại sao cần làm? Ai làm? Hệ thống đang ở đâu? |
| **Task** | Làm gì? Ở đâu? Giới hạn nào? |
| **Constraints** | Phải tuân thủ gì? Không được làm gì? |
| **Expected Output** | Kết quả trông như thế nào? Làm sao biết đã xong? |

Ghi nhớ: **Prompt tốt nhất không phải prompt dài nhất — prompt tốt nhất là prompt đủ ngữ cảnh, đủ ràng buộc, đủ kỳ vọng và không thừa thông tin không cần thiết.**
