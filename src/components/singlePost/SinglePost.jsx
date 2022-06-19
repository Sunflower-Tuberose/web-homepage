import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://blog.vietvocal.com/wp-content/uploads/2021/11/6-7.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Các loại nhạc cụ phổ biến hiện nay
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Lyly
              </Link>
            </b>
          </span>
          <span>2 day ago</span>
        </div>
        <p className="singlePostDesc">
          Piano
          <br/>

        Được mệnh danh là vua của các loại nhạc cụ và luôn nằm trong top những loại đàn được ưa chuộng nhất trên thế giới. 
        Tiền thân của Piano là những chiếc đàn Harpsichord và được cải tiến vào thành Piano khoảng thế kỷ XVI - XVII.
        <img
          src="https://blog.vietvocal.com/wp-content/uploads/2021/11/4-11.jpg"
          alt=""
        />
          <br />
          <br />
          Âm thanh từ Piano được tạo ra khi bạn nhấn các phím đàn làm chuyển động những chiếc búa bọc nỉ. 
          Những chiếc búa bọc nỉ này sẽ đập vào dây đàn, dây đàn phát ra âm thanh ngân vang ở tần số cộng hưởng riêng. 
          Những rung động này được truyền qua cầu đàn đến bảng cộng hưởng âm thanh (soundboard) và được khuếch đại thông qua sự cộng hưởng với nhiều bộ phận cấu tạo đàn.
          Tiếng đàn Piano du dương, sâu lắng dễ đi vào lòng người nên rất thích hợp để chơi các bản nhạc cổ điển cũng như những bản nhạc hiện đại có giai điệu nhẹ nhàng, ngọt ngào. 
          Những người biểu diễn Piano thường mang một nét gì đó thanh tao, nhã nhặn nên ngày xưa nó đại diện cho những tầng lớp quý tộc. 
          Bạn có thể tìm hiểu các mẫu đàn Piano từ các thương hiệu Piano nổi tiếng nhất thế giới như: Steinway & Sons, Bosendorfer, Luther, C.Bechstein… 
          <br/>
          Hiện nay việc học chơi Piano khá phổ biến ở Việt Nam, bạn có thể đến trung tâm hoặc đăng ký các khóa học online để luyện tập. 
          Nếu muốn tự học, bạn có thể tham khảo bài biết Cách tự học đàn Piano hiệu quả và nhanh nhất của VietVocal nhé!    
          <br/>
          <br/>
          Đàn Organ
          <br/>
           Organ là loại đàn có bàn phím mô phỏng phím Piano. 
           Tiền thân của đàn Organ là loại Organ Hammond được Martenot sáng chế năm 1928 và đến năm 1934 thì được cải tiến và có tên là đàn Organ cho đến bây giờ. 
          Đàn Organ có một bộ phận máy giao động nối tới máy khuếch đại và loa phóng thanh. 
          Cơ chế tạo ra âm thanh cũng tương tự như đàn Piano vậy.
          <br/>
          Đàn Organ dễ chơi và có mức phí rẻ hơn nhiều sao với Piano nên cũng khá được ưa chuộng hiện nay. 
          Bạn có thể tham khảo các bài viết của VietVocal về đàn Organ như: Học đàn Organ cơ bản, 
          Phương pháp học Organ tại nhà cho người mới để biết thêm thông tin nhé!
          <br/> <br/>
          Đàn Guitar
          <br/>
          Đàn Guitar luôn nằm trong top những loại nhạc cụ phổ biến nhất trên thế giới. 
          Có tài liệu ghi chép về cây đàn Guitar đầu tiên xuất hiện ở Ai Cập và Babylon từ 1000 năm trước Công nguyên.
         <img src="https://blog.vietvocal.com/wp-content/uploads/2021/11/5-11.jpg"></img>
        </p>
      </div>
    </div>
  );
}
