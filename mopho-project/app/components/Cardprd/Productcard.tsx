import "./Productcard.module.css"

export default function ProductCard() {
  return (
    <div className="product-card">
      {/* IMAGE */}
      <div className="product-image">
        <img src="/cf.png" alt="Latte Hạt Sen" />
      </div>

      {/* CONTENT */}
      <div className="product-content">
        <div className="product-header">
          <h3>Latte Hạt Sen</h3>
          <span className="price">50.000đ</span>
        </div>

        <p className="description">
          “Sự kết hợp tinh tế giữa cà phê Ý hiện đại và hồn quê Việt
          trong từng ngụm sữa bùi ngậy vị sen.”
        </p>

        <button className="add-cart">
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  )
}