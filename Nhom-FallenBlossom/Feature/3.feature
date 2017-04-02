Feature: Chơi game. 
Màn hình hiện ra 10 màn chơi ứng với mức độ đã chọn.

Scenario: Chọn màn chơi
Given Sau khi chọn độ khó thì sẽ hiện màn hình gồm 10 nút tương ứng với 10 màn chơi 

When Click vào 1 màn chơi
Then Chuyển vào màn chơi với các câu hỏi trắc nghiệm và 4 đáp án

When Bấm ra ngoài 
Then Các nút đồng thời nhấp nháy 2 lần.

Scenario: Trả lời câu hỏi
Ứng với mỗi màn chơi sẽ có 5 câu hỏi lần lượt hiện lên. Câu hỏi có 4 đáp án đẻ lựa chọn, click vào 1 ô để trả lời

When Trả lời đúng.
Then Thông báo rằng bạn đã trả lời đúng.
     Tính và cộng tổng điểm đã đạt được.
     Hiện lên nút chuyển câu.

When Trả lời sai.
Then Hiện lên thông tin rằng câu trả lời đã sai.
     Hiện tổng điểm, hiện nút chuyển câu.
