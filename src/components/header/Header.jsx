import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MỘC MIÊN STORE</span>
        <span className="headerTitleLg">Music is what feelings sound like</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/8968276/pexels-photo-8968276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}
