Feature: Học toán
Khi vào màn hình Học toán nhìn thấy có hai cột Cột 1 là các ảnh & Cột 2 là các video youtube

Scenario: Học qua ảnh
Given Muốn học nội dung trong mỗi ảnh
When Click chuột vào ảnh
Then Ảnh được phóng to sẽ hiện ra giữa màn hình và không thấy các ảnh khác nữa.

Scenario: Học qua video
Given Muốn học phép cộng, trừ, nhân, chia qua Bài giảng trực tuyến
When Click vào giữa màn hình mỗi video Youtube
Then Video sẽ chạy và học bài giảng Online
