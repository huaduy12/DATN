// khi click các nút trong photo detail review level

// nút reload lại trang
document.getElementById("reloadButton").addEventListener("click", function() {
    location.reload(); // Reload lại trang
});

// nút kiểm tra
document.getElementById("checkButton").addEventListener("click", function() {
    // Lấy đáp án chính xác từ Spring Boot hoặc từ nguồn dữ liệu khác
    var correctAnswer = "A"; // Ví dụ: Đáp án chính xác là A

    // Lấy đáp án người dùng chọn
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            // Nếu đáp án người dùng chọn đúng, thay đổi màu sắc thành xanh
            selectedAnswer.nextElementSibling.style.color = "green"; // Thay đổi màu chữ của label thành xanh
            console.log('dung');
        } else {
            // Nếu đáp án người dùng chọn sai, thay đổi màu sắc thành đỏ
            selectedAnswer.nextElementSibling.style.color = "red"; // Thay đổi màu chữ của label thành đỏ
            console.log('sai');
        }
    } else {
        alert("Vui lòng chọn một đáp án trước khi kiểm tra!");
    }
});


// end