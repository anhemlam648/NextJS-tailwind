// pages/index.tsx

import Link from 'next/link';
export default function Home() {
  return (
    // Sử dụng Tailwind CSS để tạo kiểu cho trang
    // Bạn có thể thay đổi các lớp CSS theo ý muốn
    // Ví dụ: bg-gray-100 là màu nền xám nhạt, p-8 là khoảng cách padding 2rem
    // r,ounded-lg là bo tròn góc, shadow-lg là đổ bóng lớn
    // text-center là căn giữa nội dung
    // flex là sử dụng Flexbox để căn giữa nội dung
    // justify-center là căn giữa theo chiều ngang
    // items-center là căn giữa theo chiều dọc
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-xl text-gray-800">Hello world</p>
        <li>
          <ul></ul>    
        </li>
        <Link href="/profile">
          {/* Bỏ thẻ <a> và sử dụng trực tiếp các lớp của thẻ bên trong Link */}
          <div className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Go to Profile
          </div>
        </Link>
      </div>
    </div>
  );
}
