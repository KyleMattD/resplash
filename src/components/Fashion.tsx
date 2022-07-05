import { useState, useEffect } from "react";
import axios from "axios";
import "./components.css";
import "antd/dist/antd.css";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

export const Fashion = () => {
  const [image, setImage] = useState<any>();
  const [res, setRes] = useState<any[]>([]);
  const url =
    "https://api.unsplash.com/collections?fashion" +
    image +
    "&client_id=" +
    process.env.clientId;

  const getFashion = async () => {
    axios.get(url).then((response) => {
      console.log(response);
      setRes(response.data.results);
    });
  };

  useEffect(() => {
    getFashion();
  });

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 4);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 4);
    let listW = res?.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="imageRow">
      <h2>Fashion</h2>
      <div className="imageRow--left" onClick={handleLeftArrow}>
        <CaretLeftOutlined style={{ fontSize: 50 }} />
      </div>

      <div className="imageRow--right" onClick={handleRightArrow}>
        <CaretRightOutlined style={{ fontSize: 50 }} />
      </div>
      <div className="imageRow--listarea">
        <div
          className="imageRow--list"
          style={{
            marginLeft: scrollX,
            width: res?.length * 150,
          }}
        >
          {res?.length > 0 &&
            res?.map((image) => (
              <div className="imageRow--item">
                <img src={image.urls.small} key={image.id} alt={image.title} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
