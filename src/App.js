// 1. React와 필요한 모듈 불러오기
import React, { useState } from "react";

// 2. Lottie 애니메이션을 위한 컴포넌트와 JSON 파일 불러오기
import Lottie from "lottie-react";
import ideaAnimation from "./lotties/get-an-idea.json";

// 3. 우리가 만든 컴포넌트들 불러오기
import Slide from "./components/Slide";
import Navigation from "./components/Navigation";
import slides from "./components/SlideData";

// 4. CSS 파일 불러오기
import "./App.css";

// 5. 메인 컴포넌트 정의
function App() {
  // 현재 슬라이드 번호를 저장하는 상태값 (0부터 시작)
  const [index, setIndex] = useState(0);

  // JSX 반환
  return (
    <div className="presentation-container">
      {/* 현재 슬라이드 번호 표시 */}
      <div className="slide-counter">
        {index + 1} / {slides.length}
      </div>

      {/* 슬라이드 본문 출력 */}
      <Slide slide={slides[index]} />

      {/* 이전 / 다음 버튼 */}
      <Navigation
        current={index}
        total={slides.length}
        onPrev={() => setIndex(index - 1)}
        onNext={() => setIndex(index + 1)}
      />

      {/* 오른쪽 아래 Lottie 애니메이션 */}
      <div className="corner-lottie">
        <Lottie animationData={ideaAnimation} loop={true} />
      </div>
    </div>
  );
}

// 6. 컴포넌트 내보내기
export default App;
