import React from "react";

// 이전/다음 버튼 영역
const Navigation = ({ current, total, onPrev, onNext }) => {
  return (
    <div className="navigation">
      <button disabled={current === 0} onClick={onPrev}>
        Previous
      </button>
      <span>
        {current + 1} / {total}
      </span>
      <button disabled={current === total - 1} onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Navigation;
