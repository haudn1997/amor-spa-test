# AMOR THẢO MỘC - Spa Website

> Nơi lưu giữ bình yên - Website chính thức của AMOR THẢO MỘC

## 🌿 Giới thiệu

AMOR THẢO MỘC là một website spa hiện đại được xây dựng bằng Next.js, mang đến trải nghiệm thư giãn và bình yên cho khách hàng. Website được thiết kế với giao diện đẹp mắt, responsive và tối ưu hóa hiệu suất.

## ✨ Tính năng

- 🏠 **Trang chủ**: Giao diện chào mừng với hero section ấn tượng
- 📖 **Về AMOR**: Giới thiệu về spa và dịch vụ
- 🍽️ **Menu**: Danh sách dịch vụ và liệu trình
- 🚀 **Khởi nghiệp**: Thông tin về cơ hội hợp tác
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị
- ⚡ **Performance**: Tốc độ tải trang nhanh với Next.js 15
- 🎨 **Modern UI**: Giao diện hiện đại với Tailwind CSS

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: React 19
- **Build Tool**: Turbopack
- **Linting**: ESLint

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống

- Node.js 18.0 hoặc cao hơn
- npm hoặc yarn

### Hướng dẫn cài đặt

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd amor-spa-test
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy môi trường development**
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt và truy cập**
   ```
   http://localhost:3000
   ```

### Các lệnh khác

- **Build production**: `npm run build`
- **Start production**: `npm run start`
- **Lint code**: `npm run lint`

## 📁 Cấu trúc dự án

```
amor-spa-test/
├── public/                    # Static assets
│   ├── amor-banner.png
│   ├── amor-logo-color.png
│   ├── amor-logo.png
│   └── ...
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── about/            # Trang về AMOR
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Trang chủ
│   ├── components/           # React components
│   │   ├── about/           # Components cho trang about
│   │   ├── home/            # Components cho trang chủ
│   │   └── layout/          # Layout components
│   ├── constants/           # Hằng số và cấu hình
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 🎨 Thiết kế và UI/UX

- **Màu sắc**: Tông màu tự nhiên, thư giãn phù hợp với thương hiệu spa
- **Typography**: Font chữ dễ đọc, phù hợp với không gian thư giãn
- **Layout**: Responsive design, mobile-first approach
- **Images**: Hình ảnh chất lượng cao, tối ưu hóa cho web

## 🔧 Cấu hình

### Tailwind CSS
Dự án sử dụng Tailwind CSS 4.0 với cấu hình tối ưu cho performance và development experience.

### TypeScript
Strict TypeScript configuration đảm bảo type safety và code quality.

### ESLint
Cấu hình ESLint với Next.js rules để maintain code consistency.

## 📱 Responsive Design

Website được thiết kế responsive cho:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)
