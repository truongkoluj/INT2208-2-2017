Feature: Smallbig

Scenario: Tôi chọn đúng
    Given Tôi đang ở màn hình hiển thị dãy số là 5 23 28 8 3 21
    When Tôi chọn lần lượt các số theo thứ tự là 3 5 8 21 23 28
    Then Tôi được cộng thêm 6 điểm
    And Màn hình chuyển sang phép tính mới

Scenario: Tôi chọn sai
    Given Tôi đang ở màn hình hiển thị dãy số là 5 23 28 8 3 21
    When Tôi không chọn lần lượt các số theo thứ tự là 3 5 8 21 23 28
    Then Tôi được cộng thêm 1 điểm cho mỗi lần chọn đúng
    And Màn hình hiển thị chữ "-OVER-"