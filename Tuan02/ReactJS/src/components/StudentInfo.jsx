// Nhận 3 props đầu vào
function StudentInfo({ hoTen, mssv, lop }) {
  
  // Style đơn giản cho thẻ sinh viên
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px auto', // Canh giữa
    maxWidth: '400px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ color: 'blue' }}>Thông tin cá nhân</h3>
      <hr />
      {/* Hiển thị dữ liệu props ra màn hình */}
      <p><strong>Họ và tên:</strong> {hoTen}</p>
      <p><strong>MSSV:</strong> {mssv}</p>
      <p><strong>Lớp:</strong> {lop}</p>
    </div>
  );
}

export default StudentInfo;