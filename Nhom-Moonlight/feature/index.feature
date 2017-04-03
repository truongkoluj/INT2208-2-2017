Feature: Truy cập các chức năng từ trang chủ
    As a người dùng
    In order to luyện tập toán cơ bản
    So that người dùng mốn chơi các mini game về toán

Scenario: Tôi chọn mục "Đúng hay sai"
    Given Tôi đang ở màn hình trang chủ hiển thị các phần chơi
    When Tôi bấm nút "Bắt đầu" của mục "Đúng hay sai"
    Then Màn hình trang chủ chuyển sang màn hình của minigame "Right or Wrong"  

Scenario: Tôi chọn mục "Chọn kết quả đúng"
    Given Tôi đang ở màn hình trang chủ hiển thị các phần chơi
    When Tôi bấm nút "Bắt đầu" của mục "Chọn kết quả đúng"
    Then Màn hình trang chủ chuyển sang màn hình của minigame "Find the Result"  

Scenario: Tôi chọn mục "Tìm dấu phép tính"
    Given Tôi đang ở màn hình trang chủ hiển thị các phần chơi
    When Tôi bấm nút "Bắt đầu" của mục "Tìm dấu phép tính"
    Then Màn hình trang chủ chuyển sang màn hình của minigame "What's Missing?"  

Scenario: Tôi chọn mục "Sắp xếp"
    Given Tôi đang ở màn hình trang chủ hiển thị các phần chơi
    When Tôi bấm nút "Bắt đầu" của mục "Sắp xếp"
    Then Màn hình trang chủ chuyển sang màn hình của minigame "Small to Big"  
