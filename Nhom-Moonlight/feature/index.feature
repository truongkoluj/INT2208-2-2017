Feature: Truy cập các chức năng từ trang chủ
    As a người dùng
    I to luyện tập toán cơ bản
    So that tôi chơi các mini game về toán

Scenario: Tôi chọn mục "Đúng hay sai"
    Given Tôi đang ở màn hình trang chủ hiển thị các phần chơi
    When Tôi bấm nút "Bắt đầu" của mục "Đúng hay sai"
    Then Màn hình trang chủ chuyển sang màn hình của minigame "Đúng hay Sai"  

Scenario: Tôi chọn mục "Chọn kết quả đúng"
    Given Tôi đang ở màn hình trang chủ hiển thị các phần chơi
    When Tôi bấm nút "Bắt đầu" của mục "Chọn kết quả đúng"
    Then Màn hình trang chủ chuyển sang màn hình của minigame "Chọn kết quả đúng"  

Scenario: Tôi chọn mục "Tìm dấu phép tính"
    Given Tôi đang ở màn hình trang chủ hiển thị các phần chơi
    When Tôi bấm nút "Bắt đầu" của mục "Tìm dấu phép tính"
    Then Màn hình trang chủ chuyển sang màn hình của minigame "Tìm dấu phép tính"  

Scenario: Tôi chọn mục "Sắp xếp các số"
    Given Tôi đang ở màn hình trang chủ hiển thị các phần chơi
    When Tôi bấm nút "Bắt đầu" của mục "Sắp xếp các số"
    Then Màn hình trang chủ chuyển sang màn hình của minigame "Sắp xếp các số"  
