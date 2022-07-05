import { useState, useEffect } from "react";
import axios from "axios";
import "./components.css";
import "antd/dist/antd.css";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

export const Business = () => {
  const [image, setImage] = useState<any>();
  const [results, setResults] = useState<any[]>([]);
  const url =
    "https://api.unsplash.com/collections?business-work" +
    image +
    "&client_id=" +
    process.env.clientId;

  const getBusiness = async () => {
    axios.get(url).then((response) => {
      console.log(response);
      setResults(response.data.results);
    });
  };

  useEffect(() => {
    getBusiness();
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
    let listW = results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="imageRow">
      <h2>Business & Work</h2>
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
            width: results.length * 150,
          }}
        >
          {results.length > 0 &&
            results.map((image) => (
              <div className="imageRow--item">
                <img src={image.urls.small} key={image.id} alt={image.title} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
