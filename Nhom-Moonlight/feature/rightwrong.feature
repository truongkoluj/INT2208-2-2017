Feature: Rightwrong

Scenario: Tôi chọn đúng
    Given Tôi đang ở màn hình Right or Wrong
    And Màn hình hiển thị phép tính 5-4=5
    When Tôi chọn dấu "x" màu đỏ
    Then Màn hình thông báo "Chuẩn đấy AHIHI"
    And Tôi được cộng thêm 1 điểm
    And Màn hình chuyển sang phép tính mới

Scenario: Tôi chọn sai
    Given Tôi đang ở màn hình Right or Wrong
    And Màn hình hiển thị phép tính 5-4=5
    When Tôi chọn dấu tích màu xanh
    Then Màn hình thông báo "Sai mất rồi!" 
    And Tôi không được cộng thêm điểm
    And Màn hình chuyển sang phép tính mới
