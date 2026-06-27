const categories = [
  { emoji: '🌿', name: 'Sâm\nHàn Quốc' },
  { emoji: '🍄', name: 'Linh Chi\nNấm Hàn Quốc' },
  { emoji: '🐛', name: 'Đông Trùng\nHạ Thảo' },
  { emoji: '💊', name: 'Thực Phẩm\nChức Năng' },
  { emoji: '✨', name: 'Mỹ Phẩm\nHàn Quốc' },
  { emoji: '🍇', name: 'Trái Cây\nNhập Khẩu' },
  { emoji: '🍚', name: 'Hàng Gia Dụng\nHàn Quốc' },
]

export default function Categories() {
  return (
    <section className="bg-white py-8 px-4" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {categories.map((cat, i) => (
            <a
              key={i}
              href="#"
              className="flex flex-col items-center gap-3 group flex-1 min-w-[80px] max-w-[120px]"
            >
              <div
                className="cat-circle w-[88px] h-[88px] flex items-center justify-center text-3xl bg-gray-50 flex-shrink-0"
                style={{ border: '2px solid #eee' }}
              >
                {cat.emoji}
              </div>
              <span
                className="text-center text-[12px] font-semibold leading-snug group-hover:text-yellow-600 transition-colors"
                style={{ color: '#1a1a1a', whiteSpace: 'pre-line' }}
              >
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
