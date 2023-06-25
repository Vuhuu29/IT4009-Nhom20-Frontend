import { Link } from "react-router-dom";

export default function NotFoundScreen() {
  return (
    <div className="not-found row justify-content-center align-items-center flex-column overflow-hidden
     " style={{ height: "calc(100vh - 20px)", width: "100%", zIndex: 2 }}>
      <h1 className="text-center">404</h1>
      <h3 className="text-center">Không tìm thấy trang</h3>
      <h5 className="text-center">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa</h5>
      <h5 className="text-center">Vui lòng kiểm tra lại đường dẫn</h5>
      
    

      <Link to="/" className="link-home col col-12 row justify-content-center align-items-center">
        <button className="btn btn-outline-info col col-2">Trang chủ</button>
      </Link>
    </div>
  )
}