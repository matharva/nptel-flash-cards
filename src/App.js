import React, { useEffect, useState } from "react";

// CSS
import "./App.css";
import "swiper/css";

// Libraries
import Select from "react-dropdown-select";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard } from "swiper";

// Data
import { data } from "./data";

SwiperCore.use([Keyboard]);

const Options = ({ x, showAnswer }) => {
  return (
    <div
      className="options-child"
      style={x.isAnswer > 0 && showAnswer ? { color: "green" } : {}}
    >
      <div className="options-child-index">({x.index})</div>
      <div className="options-child-text">{x.text}</div>
    </div>
  );
};

function Card({ item }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="card-content" onClick={() => setShowAnswer(!showAnswer)}>
      <div
        className="question-text"
        dangerouslySetInnerHTML={{ __html: item.questionText }}
      />
      {item.options.filter((q) => q.isAnswer > 0).length > 1 && (
        <span>(multiple)</span>
      )}
      <div className="options-parent">
        {item.options.map((x) => (
          <Options x={x} showAnswer={showAnswer} />
        ))}
      </div>
    </div>
  );
}
const options = [
  {
    value: 1,
    label: "PSOSM",
  },
  {
    value: 2,
    label: "CC",
  },
  {
    value: 3,
    label: "BA",
  },
  {
    value: 4,
    label: "FSA",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cardData, setCardData] = useState(data["PSOSM"]);
  const [currentSubject, setCurrentSubject] = useState(options[0].label);

  const filteredItems = cardData.filter((x) =>
    JSON.stringify(x).toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    setCardData(data[currentSubject]);
  }, [currentSubject]);

  return (
    <div className="parent">
      <div className="app-name" style={{ textAlign: "center" }}>
        NPTEL Flash Cards
      </div>

      <div className="filters">
        <input
          type="text"
          className="search-box"
          placeholder="Search questions..."
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <Select
          options={options}
          onChange={(values) => setCurrentSubject(values[0].label)}
          placeholder="Select subject"
          className="custom-select"
          values={[options[0]]}
        />
      </div>

      {searchQuery && (
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          Results: {filteredItems.length}
        </div>
      )}

      <div className="App">
        <Swiper className="mySwiper" keyboard={{ enabled: true }}>
          {filteredItems.map((item) => {
            return (
              <SwiperSlide className="">
                <Card item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
