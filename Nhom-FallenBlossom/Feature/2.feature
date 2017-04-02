Feature: Chọn độ khó cho game.
Có ba mức độ Dễ, trung bình, khó.
Scenario: Chọn độ khó.
When Bấm chọn một trong ba nút
Then Hiện màn hình chơi game tương ứng với độ khó.
When Bấm ra ngoài các nút.
Then Các nút nháy sáng 2 lần, không có tác dụng gì thêm.