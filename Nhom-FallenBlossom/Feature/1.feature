Feature: Khởi động phần mềm
Màn hình trang chủ sẽ hiện ra gồm các 3 nút: Học toán, Trò chơi và Điểm cao 


Scenario: Chọn Học toán
Given Đang ở trang chủ, muốn học các kiến thức cơ bản để chơi trò chơi
When Click vào nút Học toán
Then Trang học toán gồm ảnh và video



Scenario: Chọn trò chơi
Given Muốn chơi trò chơi luyện tập tính toán
When Click vào nút Trò chơi
Then Màn hình trò chơi hiện lên với các câu hỏi

Scenario: Chọn Điểm cao
Given Đang ở trang chủ, muốn thành tích của những người điểm cao nhất.
When Chọn Điểm cao ở màn hình
Then Hiện ra bảng 10 người thành tích cao nhất