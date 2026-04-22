# PRINCIPLES_FOR_FUNCTIONAL_REQUIREMENTS_ANALYSIS

## 1. MỤC ĐÍCH CỦA FILE PHÂN TÍCH YÊU CẦU CHỨC NĂNG

File phân tích yêu cầu chức năng tồn tại để làm rõ hệ thống phải làm gì trước khi viết prompt, trước khi code, trước khi tách module, và trước khi quyết định build actor nào trước.

File này không phải nơi để:
- viết code,
- mô tả giải pháp kỹ thuật quá sớm,
- bịa thêm feature,
- nhảy sang kế hoạch implementation chi tiết.

File này phải giúp trả lời rõ:
- hệ thống phục vụ ai,
- họ cần làm gì,
- quyền của họ đến đâu,
- dữ liệu nào liên quan,
- ràng buộc nghiệp vụ là gì,
- cái gì là cốt lõi,
- nên build cái gì trước.

---

## 2. NGUYÊN TẮC QUAN TRỌNG NHẤT

- Phải bám đúng scope gốc của dự án.
- Không được tự ý thêm chức năng mới chỉ vì thấy hợp lý.
- Không được phân tích mơ hồ kiểu “quản lý hệ thống”, “quản lý dữ liệu”, “thao tác người dùng”.
- Mỗi yêu cầu chức năng phải đủ rõ để sau đó có thể viết prompt code chính xác.
- **"Đủ rõ" = một người chưa đọc spec có thể hiểu chính xác cần build gì, KHÔNG cần hỏi thêm.**
  Nếu phải đặt câu hỏi để hiểu thêm = chưa đủ rõ. Cụ thể:
  - ✅ "Admin xem danh sách users, filter theo role, sort theo created_at DESC, phân trang 20 items/page"
  - ❌ "Admin xem danh sách users" (còn thiếu filter, sort, pagination)
- Phải tách rõ yêu cầu chức năng và yêu cầu phi chức năng.
- Phải tách rõ actor, action, permission, entity, và business rule.
- Phải chỉ ra chức năng nào là lõi, chức năng nào là phụ.
- Phải làm rõ side nào quan trọng hơn: admin, user, guest, staff, hoặc actor khác.
- Phải làm rõ actor nào nên build trước và vì sao.
- Nếu đầu vào mơ hồ, phải giữ nguyên intent gốc và ghi assumption rõ ràng.
- Không được biến assumption thành fact.
- Không được dùng từ ngữ marketing hoặc mô tả chung chung thay cho yêu cầu cụ thể.

---

## 3. FILE PHÂN TÍCH PHẢI VIẾT THEO GÓC NHÌN NGHIỆP VỤ

Khi viết file phân tích yêu cầu chức năng, phải ưu tiên mô tả theo góc nhìn nghiệp vụ trước, không nhảy ngay sang kỹ thuật.

Phải trả lời:
- người dùng muốn đạt mục tiêu gì,
- admin cần kiểm soát cái gì,
- dữ liệu được tạo ra từ đâu,
- dữ liệu đi qua những actor nào,
- thao tác nào tạo giá trị cốt lõi cho sản phẩm.

Không nên mở đầu bằng:
- dùng Next.js thế nào,
- nên dùng Prisma hay không,
- API route đặt ở đâu,
- nên dùng server action hay route handler.

Những thứ đó là quyết định kỹ thuật ở giai đoạn sau.  
File phân tích yêu cầu chức năng phải làm rõ bài toán trước.

---

## 4. MỌI CHỨC NĂNG PHẢI GẮN VỚI ACTOR CỤ THỂ

Không viết chức năng mà không xác định ai là người dùng chức năng đó.

Sai:
- Hệ thống có chức năng quản lý đơn hàng.
- Hệ thống có chức năng chỉnh sửa hồ sơ.
- Hệ thống có chức năng duyệt nội dung.

Đúng:
- User xem danh sách đơn hàng của chính mình.
- User cập nhật thông tin hồ sơ cá nhân.
- Admin duyệt nội dung do user gửi lên.
- Admin khóa hoặc mở khóa tài khoản người dùng.

Mỗi chức năng phải trả lời được:
- actor nào dùng,
- actor đó có quyền gì,
- actor đó thao tác trên dữ liệu của ai,
- actor đó bị giới hạn ở đâu.

---

## 5. MỖI CHỨC NĂNG PHẢI CHỈ RÕ ĐỘNG TỪ NGHIỆP VỤ

Tên chức năng phải rõ hành động thực tế, không đặt tên quá rộng.

Ưu tiên các dạng:
- tạo,
- xem,
- cập nhật,
- xóa,
- duyệt,
- hủy,
- gán,
- khóa,
- mở khóa,
- xuất,
- gửi,
- xác nhận,
- thanh toán,
- hoàn tiền,
- lọc,
- tìm kiếm.

Tránh các dạng quá mơ hồ:
- xử lý dữ liệu,       ← không nói rõ CREATE/READ/UPDATE/DELETE gì
- thao tác hệ thống,   ← không nói rõ action nào
- quản trị chung,       ← admin không phải action, phải nói rõ cụ thể
- vận hành nội dung,   ← không nói rõ CREATE/APPROVE/REJECT gì
- xử lý hồ sơ.        ← không nói rõ view/edit/delete gì

**Quy tắc: động từ phải là action cụ thể trên một object cụ thể. Nếu thay thế được bằng 1 trong 15 verb ở trên → hợp lệ. Không thay thế được → viết lại.**

Tên chức năng càng rõ thì prompt code sau này càng ít lệch.

---

## 6. PHẢI TÁCH THEO TỪNG CHỨC NĂNG NHỎ, KHÔNG GỘP BỪA

Một lỗi phổ biến là gộp nhiều hành vi khác nhau vào một mục yêu cầu quá lớn.

**Quy tắc bắt buộc: Mỗi row trong bảng requirements = 1 action cụ thể. KHÔNG BAO GIỜ gộp 2 action vào 1 row.**

Sai (danh sách đầy đủ các lỗi gộp bừa):
- "Admin quản lý người dùng" → gộp xem, tạo, khóa, xóa, đổi role
- "User quản lý tài khoản" → gộp xem, sửa, đổi mật khẩu
- "Hệ thống quản lý sản phẩm" → gộp CRUD, không phân biệt actor
- "User thao tác với đơn hàng" → không nói rõ view/create/cancel
- "Admin kiểm soát nội dung" → không nói rõ approve/reject/hide
- "User xem và chỉnh sửa profile" → gộp 2 action: view + update
- "Quản lý danh mục" → không nói rõ create/read/update/delete

Đúng hơn:
- Admin xem danh sách người dùng.
- Admin xem chi tiết một người dùng.
- Admin khóa tài khoản người dùng.
- Admin mở khóa tài khoản người dùng.
- Admin thay đổi role của người dùng.

- User xem thông tin tài khoản.
- User cập nhật hồ sơ cá nhân.
- User đổi mật khẩu.

- Admin tạo sản phẩm.
- Admin cập nhật sản phẩm.
- Admin ẩn sản phẩm.
- User xem danh sách sản phẩm đang hoạt động.

Tách nhỏ như vậy giúp:
- thấy rõ permission,
- thấy rõ flow,
- thấy rõ contract,
- thấy rõ build order,
- dễ viết prompt từng bước.

---

## 7. PHẢI PHÂN BIỆT RÕ CHỨC NĂNG LÕI VÀ CHỨC NĂNG PHỤ

Không phải chức năng nào cũng quan trọng như nhau.

Phải phân loại:
- chức năng lõi: quyết định giá trị chính của sản phẩm,
- chức năng hỗ trợ: giúp vận hành tốt hơn,
- chức năng phụ: có thể build sau.

Ví dụ:
- nếu đây là hệ thống bán hàng, chức năng lõi có thể là sản phẩm, giỏ hàng, đặt hàng, thanh toán.
- nếu đây là hệ thống quản trị nội dung, chức năng lõi có thể là tạo bài viết, duyệt bài, xuất bản.
- nếu đây là hệ thống khóa học, chức năng lõi có thể là khóa học, bài học, ghi danh, học, theo dõi tiến độ.

Các chức năng như:
- đổi theme,
- export CSV,
- notifications nâng cao,
- dashboard thống kê phức tạp,
thường không nên được đối xử như chức năng lõi nếu đầu vào chưa yêu cầu rõ.

---

## 8. PHẢI XÁC ĐỊNH CORE ENTITY NGAY TRONG PHÂN TÍCH

Mọi chức năng phải gắn với entity.

Ví dụ entity:
- user,
- order,
- product,
- post,
- lesson,
- category,
- invoice,
- comment,
- booking.

Với mỗi entity, phải làm rõ:
- ai tạo,
- ai xem,
- ai sửa,
- ai xóa,
- ownership thuộc về ai,
- lifecycle của entity ra sao,
- trạng thái chính của entity là gì.

Khi không rõ entity lõi, rất dễ:
- build sai actor trước,
- thiết kế sai contract,
- trộn permission,
- viết prompt mơ hồ.

---

## 9. PHẢI PHÂN TÍCH OWNERSHIP RẤT RÕ

Một trong những điểm quan trọng nhất của file phân tích là ownership.

Phải chỉ rõ:
- dữ liệu này là của ai,
- ai được xem toàn bộ,
- ai chỉ được xem dữ liệu của chính mình,
- ai được sửa dữ liệu của người khác,
- ai được xóa,
- ai chỉ được thay đổi trạng thái chứ không được sửa nội dung.

Ví dụ:
- User chỉ được xem đơn hàng của chính mình.
- Admin được xem tất cả đơn hàng.
- User chỉ được sửa hồ sơ cá nhân của chính mình.
- Admin được cập nhật trạng thái đơn hàng nhưng không được giả lập thanh toán nếu scope không cho phép.
- Moderator được duyệt bài nhưng không được thay đổi role người dùng.

Nếu không phân tích ownership rõ từ đầu, code AI rất dễ sai permission.

---

## 10. PHẢI TÁCH RÕ PERMISSION VÀ AUTHENTICATION

File phân tích phải làm rõ:
- chức năng nào cần đăng nhập,
- chức năng nào là public,
- chức năng nào chỉ dành cho admin,
- chức năng nào dành cho user thường,
- chức năng nào cần ownership check,
- chức năng nào cần permission chi tiết hơn role.

Ví dụ:
- Guest có thể xem landing page.
- Guest không thể truy cập dashboard.
- User phải đăng nhập để xem hồ sơ cá nhân.
- Admin phải có role admin để vào khu vực `/admin`.
- User không được truy cập API quản trị.
- Admin có thể xem toàn bộ user nhưng user không được xem danh sách toàn bộ user.

Không được chỉ ghi:
- “có phân quyền”.
Phải ghi cụ thể:
- ai được gì,
- ở route nào,
- trên dữ liệu nào.

---

## 11. PHẢI VIẾT ĐẦY ĐỦ LUỒNG CHÍNH VÀ LUỒNG LỖI

Mỗi chức năng không chỉ có happy path.

Phải ghi đủ TẤT CẢ 4 phần cho mỗi chức năng:

1. **Điều kiện trước (Pre-condition):** User đã đăng nhập, có quyền, dữ liệu tồn tại.
2. **Luồng chính (Happy path):** Từng bước user thao tác → hệ thống phản hồi.
3. **Luồng lỗi (Error paths):** TỪNG lỗi cụ thể. KHÔNG phải "dữ liệu không hợp lệ" chung chung.
4. **Kết quả mong muốn:** State sau khi thành công, response contract, side effects.

Ví dụ đúng cho luồng lỗi:
### Chức năng: User cập nhật hồ sơ cá nhân
- Điều kiện trước: user đã đăng nhập.
- Luồng chính:
  - user mở trang hồ sơ,
  - user cập nhật tên và số điện thoại,
  - hệ thống validate dữ liệu,
  - hệ thống lưu thành công,
  - hệ thống trả thông báo cập nhật thành công.
- Luồng lỗi (PHẢI liệt kê TỪNG case cụ thể):
  - Email sai format → hiện message "Email không hợp lệ", không lưu
  - Email trùng với tài khoản khác → hiện "Email đã được sử dụng", không lưu
  - Tên rỗng → hiện "Tên không được để trống", không lưu
  - User hết phiên đăng nhập → redirect về trang login
  - Lỗi server khi lưu → hiện "Đã xảy ra lỗi, thử lại sau"
- Kết quả mong muốn:
  - hồ sơ được cập nhật đúng,
  - dữ liệu trả về đúng contract,
  - user không sửa được hồ sơ người khác.

**Luồng lỗi phải đủ chi tiết để AI biết từng message cụ thể hiển thị gì. Không được viết chung "xử lý lỗi".**

Phân tích luồng lỗi từ sớm sẽ giúp prompt code không chỉ làm phần “thành công”.

---

## 12. PHẢI TÁCH RÕ YÊU CẦU CHỨC NĂNG VÀ YÊU CẦU PHI CHỨC NĂNG

Chức năng trả lời câu hỏi:
- hệ thống làm gì.

Phi chức năng trả lời câu hỏi:
- hệ thống phải đạt chất lượng gì,
- bị ràng buộc bởi điều gì.

Ví dụ chức năng:
- Admin tạo sản phẩm.
- User đặt đơn hàng.
- User xem lịch sử giao dịch.

Ví dụ phi chức năng (ĐÚNG):
- API response time < 200ms với 1000 concurrent users
- Lighthouse Performance >= 90
- WCAG 2.1 AA compliant (color contrast >= 4.5:1)
- Data encrypted at rest và in transit
- 99.9% uptime
- Bundle size < 200KB first load

**Non-functional = chất lượng hệ thống phải đạt, KHÔNG phải permission, validation logic, hay tech spec.**
Các ví dụ cũ dưới đây LÀ SAI — chúng thuộc sections khác:
- ❌ "chỉ admin mới được tạo sản phẩm" → thuộc Section 7 (Ownership/Permission)
- ❌ "dữ liệu đầu vào phải được validate" → thuộc Section 5 (Functional requirement)
- ❌ "API phải trả response shape nhất quán" → thuộc Section 5 (Functional requirement)

Không được trộn hai loại này vào cùng một dòng mô tả.

---

## 13. PHẢI XÁC ĐỊNH ĐỘ ƯU TIÊN CỦA ACTOR

Phân tích yêu cầu chức năng không chỉ để biết có gì cần làm, mà còn để quyết định nên build actor nào trước.

Phải đánh giá:
- actor nào tạo dữ liệu lõi,
- actor nào quyết định boundary permission,
- actor nào tạo ra giá trị cốt lõi,
- actor nào nếu làm sai sẽ kéo lệch toàn bộ kiến trúc,
- actor nào phụ thuộc dữ liệu do actor khác tạo.

Ví dụ:
- nếu admin tạo sản phẩm và user chỉ mua sản phẩm, có thể cần build admin tạo sản phẩm trước.
- nếu user là trung tâm của sản phẩm và admin chỉ quản trị hỗ trợ, có thể cần build user flow trước.
- nếu auth và role là nền tảng cho cả admin và user, thì auth foundation phải đứng trước cả hai.

File phân tích phải nói rõ:
- actor nào build trước,
- actor nào build sau,
- lý do.

---

## 14. PHẢI XÁC ĐỊNH NHỮNG THỨ BẮT BUỘC CẦN CÓ CHO MỖI ACTOR

Với mỗi actor, file phân tích phải làm rõ actor đó cần gì để hệ thống hoạt động đúng.

Ví dụ cần xác định:
- route group riêng hay không,
- layout riêng hay không,
- dashboard riêng hay không,
- navigation riêng hay không,
- feature module riêng hay không,
- guard nào cần có,
- permission nào cần có,
- entity nào actor đó chạm tới,
- actor đó cần CRUD gì,
- actor đó có form nào,
- actor đó có báo cáo hay setting gì không.

Điều này rất quan trọng để sau đó viết prompt đúng thứ tự.

---

## 15. PHẢI GIỮ FILE PHÂN TÍCH Ở MỨC ĐỦ CỤ THỂ ĐỂ SINH PROMPT

File phân tích không phải code spec siêu kỹ thuật, nhưng cũng không được chung chung.

Một file tốt phải đủ cụ thể để sau đó chuyển thành prompt như:
- dựng auth foundation,
- dựng admin layout,
- dựng user profile flow,
- dựng admin user management,
- dựng order service + repository + API + page.

Nếu file phân tích viết kiểu:
- “cần có admin”,
- “cần có user”,
- “quản lý dữ liệu”,
thì chưa đủ để dùng.

---

## 16. KHÔNG ĐƯỢC NHẢY THẲNG SANG GIẢI PHÁP KỸ THUẬT QUÁ SỚM

Trong file phân tích yêu cầu chức năng, không nên viết kiểu:
- dùng server actions cho phần này,
- dùng React Hook Form cho phần kia,
- dùng Prisma repository pattern cho entity nọ.

Chỉ nên ghi ở mức:
- cần validate input,
- cần auth check,
- cần permission check,
- cần ownership check,
- cần dữ liệu nhất quán,
- cần layout riêng,
- cần module riêng cho actor này.

Quyết định kỹ thuật cụ thể sẽ nằm ở prompt hoặc tài liệu thiết kế kỹ thuật sau đó.

---

## 17. PHẢI GHI ASSUMPTION RÕ RÀNG KHI YÊU CẦU CHƯA ĐỦ

Nếu đầu vào chưa rõ, phải ghi assumption thành một mục riêng.

Ví dụ:
- Giả định admin là actor tạo dữ liệu sản phẩm.
- Giả định user chỉ xem và mua sản phẩm, không tạo sản phẩm.
- Giả định hệ thống có 2 role chính là admin và user.
- Giả định `/admin` là khu vực protected hoàn toàn.
- Giả định user chỉ được truy cập dữ liệu thuộc ownership của chính họ.

Nguyên tắc:
- assumption phải gần intent gốc nhất,
- assumption không được mở rộng scope,
- assumption phải có thể sửa lại về sau,
- không được viết assumption như thể đó là sự thật đã xác nhận.

---

## 18. PHẢI CÓ CẤU TRÚC TRÌNH BÀY NHẤT QUÁN

Một file phân tích tốt nên có thứ tự rõ ràng như sau:

1. Tổng quan dự án
2. Scope
3. Actor chính
4. Core entities
5. Danh sách yêu cầu chức năng theo actor
6. Danh sách yêu cầu phi chức năng
7. Ownership và permission
8. Actor priority
9. Build order đề xuất
10. Risk areas
11. Assumptions
12. Completion criteria

Không nên viết lộn xộn theo kiểu nghĩ đến đâu ghi đến đó.

---

## 19. PHẢI VIẾT SAO CHO SAU NÀY REVIEW ĐƯỢC

File phân tích yêu cầu chức năng không chỉ để đọc một lần rồi bỏ.

Nó phải giúp:
- review scope,
- review actor,
- review permission,
- review build order,
- review risk,
- đối chiếu prompt,
- đối chiếu code sau này.

Vì vậy:
- câu chữ phải rõ,
- thuật ngữ phải nhất quán,
- tên actor và entity phải nhất quán,
- không đổi cách gọi lung tung giữa các phần.

---

## 20. TIÊU CHÍ CỦA MỘT FILE PHÂN TÍCH TỐT

Một file phân tích yêu cầu chức năng được coi là tốt khi:

- xác định rõ scope,
- xác định rõ actor,
- xác định rõ entity,
- xác định rõ chức năng theo actor,
- xác định rõ auth, permission, ownership,
- xác định rõ chức năng lõi và chức năng phụ,
- xác định rõ actor nào nên build trước,
- xác định rõ các nền tảng cần có cho actor đó,
- tách rõ chức năng và phi chức năng,
- có assumption rõ ràng nếu đầu vào thiếu,
- đủ cụ thể để viết prompt code từng bước,
- không tự ý mở rộng dự án,
- không nhảy quá sớm sang implementation kỹ thuật.

---

## 21. KẾT LUẬN

Nguyên tắc viết file phân tích yêu cầu chức năng là:

- viết theo nghiệp vụ trước,
- gắn từng chức năng với actor cụ thể,
- gắn từng chức năng với entity cụ thể,
- làm rõ permission và ownership,
- tách nhỏ chức năng,
- làm rõ chức năng lõi,
- xác định actor ưu tiên,
- xác định thứ tự build,
- ghi assumption rõ,
- giữ nội dung đủ cụ thể để sinh prompt,
- nhưng chưa nhảy sang code và implementation chi tiết.

File này là nền để AI code đúng.
Nếu file phân tích mơ hồ, prompt sẽ mơ hồ.
Nếu prompt mơ hồ, code sẽ lệch scope, lệch quyền, lệch kiến trúc.

---

## 22. TEMPLATE THỰC HÀNH — VIẾT THEO FORMAT NÀY

Đây là template **mặc định** cho dự án đầy đủ (API, Web App có nhiều actors và permissions phức tạp).

- Dự án nhỏ / static site: dùng Section 24 để biết bỏ bớt sections nào.
- Khi bỏ section theo Section 24, vẫn giữ format của sections còn lại đúng template này.

```markdown
# [Tên dự án]

## 1. Tổng quan dự án
Mô tả ngắn gọn: cái gì, cho ai, giải quyết vấn đề gì.
Loại dự án: [web app / static site / API / CLI / mobile / ...]
Tech stack gợi ý: [nếu đã biết, ghi sơ bộ]

## 2. Scope
### 2.1 Trong phạm vi (In Scope)
Liệt kê những gì CÓ trong dự án.

### 2.2 Ngoài phạm vi (Out of Scope)
Liệt kê những gì KHÔNG làm. Quan trọng hơn cả "có gì".

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
- Trạng thái chính

## 5. Yêu cầu chức năng theo Actor
### 5.1 [Actor] - [Module]
| ID | Yêu cầu | Mô tả chi tiết |
|----|----------|----------------|
| XX-01 | [Mô tả ngắn] | [Actor] [action] [object] — kết quả mong đợi |

**Luôn format:** [Actor] [động từ nghiệp vụ] [object] — [kết quả]

## 6. Yêu cầu phi chức năng
| ID | Yêu cầu | Tiêu chí đo lường |
|----|----------|-------------------|
| NF-01 | [Mô tả] | [concrete metric] |

**BẮT BUỘC tách riêng bảng này với bảng yêu cầu chức năng. KHÔNG gộp chung.**

## 7. Ownership và Permission
| Entity | Ownership | Ai được xem | Ai được sửa |
|--------|-----------|-------------|-------------|
| [tên] | [ai sở hữu] | [ai xem] | [ai sửa] |

Access Control:
- Public: [routes không cần auth]
- Protected: [routes cần auth]
- Admin-only: [routes cần role admin]

## 8. Actor Priority cho triển khai
| Priority | Actor | Lý do |
|----------|-------|-------|
| 1 | [actor] | [vì sao trước] |
| 2 | [actor] | [vì sao sau] |

## 9. Build Order đề xuất
1. Phase 1: [tên phase] — [mô tả]
2. Phase 2: [tên phase] — [mô tả]

## 10. Risk Areas
| Risk | Mức độ | Mitigation |
|------|--------|------------|
| [mô tả rủi ro] | Low/Med/High | [cách giảm thiểu] |

## 11. Assumptions
| # | Assumption | Ghi chú |
|---|-----------|---------|
| 1 | [giả định] | [tại sao giả định] |

## 12. Completion Criteria
- [ ] [Tiêu chí 1]
- [ ] [Tiêu chí 2]
```

---

## 23. CHECKLIST ENFORCEABLE — TÁCH CHỨC NĂNG VÀ PHI CHỨC NĂNG

Dùng checklist này sau khi viết xong, trước khi chuyển sang viết prompt.

### Yêu cầu chức năng — mỗi row phải thỏa mãn TẤT CẢ:

- [ ] **Format đúng:** `[Actor] [động từ] [object] — [kết quả]`
  - ✅ "Admin tạo sản phẩm — sản phẩm xuất hiện trong danh sách"
  - ❌ "Quản lý sản phẩm" (thiếu actor, thiếu kết quả)
- [ ] **Có ID duy nhất** theo pattern: `[Actor]-[Module]-[số]`
  - ✅ G-LP-01, A-PR-02, U-OR-03
- [ ] **Mô tả đủ rõ để viết prompt từ đó** — nếu đọc mô tả mà không biết cần build gì = chưa đủ
- [ ] **Có happy path + error path** — hoặc ghi rõ "chỉ có happy path"

### Yêu cầu phi chức năng — mỗi row phải thỏa mãn TẤT CẢ:

- [ ] **Có metric cụ thể** — không phải mô tả chung
  - ✅ "API response time < 200ms với 1000 concurrent users"
  - ❌ "Hệ thống phải nhanh" (không đo được)
- [ ] **Nằm trong bảng riêng** — KHÔNG gộp chung với bảng chức năng
- [ ] **Có category rõ** — Performance / Security / Accessibility / Scalability / UX

### Lỗi thường gặp:

| Lỗi | Cách phát hiện | Cách fix |
|------|---------------|---------|
| Gộp non-functional vào bảng functional | Có row "Scroll Animation" trong bảng Guest-Landing | Tách ra bảng riêng, ghi metric |
| "Quản lý X" quá rộng | Không biết bao gồm những action nào | Tách thành nhiều row nhỏ |
| Không có error path | Luôn nghĩ "thành công" | Thêm row riêng cho error cases |
| Thiếu kết quả mong đợi | Không biết làm sao là "đúng" | Thêm "hệ thống trả về..." |

---

## 24. ADAPTATION CHO DỰ ÁN NHỎ / ĐƠN GIẢN

Không phải dự án nào cũng cần đầy đủ 12 sections. Dùng guide này để biết giản lược thế nào cho phù hợp.

### Loại dự án 1: Static Site / Docs / Landing Page

(Không có auth, không có database, chỉ hiển thị content)

**Có đủ:**
- [x] Section 1: Tổng quan
- [x] Section 2: Scope
- [x] Section 3: Actors (thường chỉ có Guest + Admin đơn giản)
- [x] Section 5: Requirements (theo actor)
- [x] Section 9: Build Order

**Có thể bỏ hoặc giản lược:**
- [~] Section 4 (Entities) — chỉ cần entity "Page" và "Content" nếu cần
- [~] Section 7 (Ownership) — chỉ cần 2 dòng: Guest đọc, Admin sửa qua code
- [~] Section 8 (Actor Priority) — thường chỉ có 1 actor, không cần
- [ ] Section 10 (Risks) — bỏ hẳn nếu dự án quá đơn giản
- [ ] Section 11 (Assumptions) — bỏ nếu mọi thứ đã rõ ràng từ đầu
- [ ] Section 6 (Non-functional) — giản lược chỉ còn 2-3 tiêu chí quan trọng

**Cấu trúc tối thiểu cho static site:**
```
1. Tổng quan
2. Scope (in/out)
3. Actors (Guest + Admin)
5. Requirements theo actor
9. Build Order
12. Completion Criteria
```

### Loại dự án 2: API / Backend Service

(Có data, có logic, có nhiều endpoints)

**Có đủ TẤT CẢ 12 sections** — không giản lược gì cả. Nhất là:
- [x] Section 4 (Entities) — PHẢI CÓ, rất quan trọng cho contract
- [x] Section 7 (Ownership) — PHẢI CÓ, dễ sai permission nhất
- [x] Section 6 (Non-functional) — PHẢI CÓ, đặc biệt là performance/security

### Loại dự án 3: Web App có Frontend + Backend

**Có đủ:** Tất cả 12 sections

**Đặc biệt chú ý:**
- Section 4 (Entities) — cả BE entities lẫn FE data models
- Section 7 (Ownership) — cả API permission lẫn FE route guards
- Section 8 (Actor Priority) — quyết định thứ tự build rất quan trọng

### Decision tree — Dùng cái nào?

```
Dự án là gì?
├─ Static site / Docs / Landing
│   └─ Dùng "Static Site" checklist → 6 sections tối thiểu
├─ API / Backend Service
│   └─ Dùng "API" checklist → 12 sections đầy đủ
└─ Web App (FE + BE)
    └─ Dùng "Web App" checklist → 12 sections đầy đủ
```

---

## 25. KHI NÀO ĐƯỢC PHÉP BỎ QUA / GIẢN LƯỢC

### LUÔN LUÔN PHẢI CÓ (không được bỏ)

- [x] **Section 2 — Scope** — Bỏ = scope creep. Luôn viết cả "In Scope" và "Out of Scope".
- [x] **Section 3 — Actors** — Bỏ = không biết ai dùng. Luôn xác định actor trước.
- [x] **Section 5 — Requirements theo actor** — Bỏ = miss requirements. Đây là phần quan trọng nhất.
- [x] **Section 9 — Build Order** — Bỏ = build lung tung. Luôn có thứ tự rõ ràng.

### ĐƯỢC PHÉP BỎ hoặc GIẢN LƯỢC (tùy dự án)

| Section | Khi nào được bỏ | Khi nào được giản lược | Khi nào phải đầy đủ |
|---------|-----------------|----------------------|---------------------|
| **4. Entities** | Static site không có data model phức tạp | Chỉ cần 1-2 entity chính | API / app có nhiều model |
| **6. Non-functional** | Dự án cá nhân < 1 tuần | Chỉ 2-3 tiêu chí quan trọng | Có khách hàng / stakeholder |
| **7. Ownership** | Public-only, không có permission | Guest/Admin 2 dòng đơn giản | Có multiple roles / ownership phức tạp |
| **8. Actor Priority** | Chỉ có 1 actor duy nhất | 2 actors, lý do đơn giản | Nhiều actors, phụ thuộc lẫn nhau |
| **10. Risks** | Dự án quen thuộc, công nghệ đã biết | 2-3 risks chính | Công nghệ mới / team mới |
| **11. Assumptions** | Mọi thứ đã rõ ràng từ spec | 2-3 assumptions chính | Đầu vào mơ hồ, nhiều thứ phải đoán |
| **12. Completion** | Dự án nhỏ, tự làm | Chỉ 5 tiêu chí chính | Có stakeholder cần验收 |

### Nguyên tắc quyết định

**Bỏ khi:**
- Dự án < 1 tuần
- Không có stakeholder bên ngoài
- Công nghệ và scope đã quen thuộc
- Mọi thứ rõ ràng từ đầu, không cần assumption

**Không bỏ khi:**
- Dự án > 1 tuần
- Có người khác review / contribute
- Công nghệ mới hoặc chưa quen
- Nhiều actors và permissions phức tạp

**Nguyên tắc vàng:**
> Nếu bạn không biết có nên bỏ hay không — **ĐỪNG BỎ**. Giản lược bao giờ cũng tốt hơn thiếu.

---

## 26. KHI NÀO CẬP NHẬT LẠI SPEC

Spec không phải viết một lần xong. Trong thực tế, yêu cầu thay đổi giữa chừng, phát hiện requirement sai sau khi build, hoặc stakeholder thêm feature mới. Không có nguyên tắc này → spec trở nên obsolete và không ai tin.

### Phải cập nhật spec khi:

- [ ] Stakeholder thêm hoặc thay đổi requirement mới
- [ ] Phát hiện assumption ban đầu SAI (không phải "không đúng nữa" mà là "sai từ đầu")
- [ ] Build order thực tế khác với plan, VÀ khác biệt đó thay đổi priority thực sự
- [ ] Entity hoặc ownership mới được phát hiện trong quá trình build
- [ ] Scope thay đổi (thêm hoặc bớt feature)

### Không cần cập nhật spec khi:

- [ ] Chỉ thay đổi tech stack nhưng giữ nguyên requirements
- [ ] Refactor code nhưng giữ nguyên behavior
- [ ] Fix bug không thay đổi requirements
- [ ] Thay đổi giao diện nhưng giữ nguyên chức năng

### Nguyên tắc quan trọng:

**Spec là source of truth.** Nếu code không match spec → fix CODE, không sửa spec để match code.

**Spec drift = warning signal.** Khi code lệch spec mà không sửa spec → spec không còn đáng tin. Mỗi lần phát hiện code không match spec, phải chọn 1 trong 2:
- Sửa code cho match spec (spec đúng)
- Sửa spec cho match code (spec phải được cập nhật với lý do rõ ràng)

**Change log bắt buộc.** Mỗi lần cập nhật spec, ghi vào đầu file:
```markdown
## Changelog
- [YYYY-MM-DD] [Người sửa] — [Lý do thay đổi]: [Mô tả thay đổi cụ thể]
```

### Workflow khi phát hiện thay đổi:

```
Phát hiện thay đổi trong quá trình build
├─ Đây là requirement mới?
│   └─ Có → Thêm vào spec → Update changelog → Tiếp tục build
├─ Đây là spec sai?
│   └─ Có → Sửa spec → Update changelog → Fix code → Tiếp tục build
└─ Code đang lệch spec mà không có lý do?
    └─ Có → Fix code cho match spec (không sửa spec)
```