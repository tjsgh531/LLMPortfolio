import React from "react";

const NewsArchitectureImage = () => {
  // 이미지가 포함된 SVG 코드
  return (
    <svg width="300" height="700" xmlns="http://www.w3.org/2000/svg">
      {/* 뉴스 크롤러 */}
      <g>
        <rect x="50" y="30" width="200" height="80" rx="40" ry="40" fill="white" stroke="black" stroke-width="2"/>
        <text x="150" y="80" font-family="Arial" font-size="20" text-anchor="middle" dominant-baseline="middle">뉴스 크롤러</text>
      </g>
      {/* 화살표 1 */}
      <g>
        <line x1="150" y1="110" x2="150" y2="160" stroke="black" stroke-width="2"/>
        <polygon points="150,160 145,150 155,150" fill="black"/>
      </g>
      {/* 뉴스 전처리 시스템 */}
      <g>
        <rect x="50" y="160" width="200" height="80" rx="40" ry="40" fill="white" stroke="black" stroke-width="2"/>
        <text x="150" y="190" font-family="Arial" font-size="20" text-anchor="middle" dominant-baseline="middle">뉴스 전처리 시스템</text>
      </g>
      {/* 화살표 2 */}
      <g>
        <line x1="150" y1="240" x2="150" y2="290" stroke="black" stroke-width="2"/>
        <polygon points="150,290 145,280 155,280" fill="black"/>
      </g>
      {/* PostgreSQL */}
      <g>
        <ellipse cx="150" cy="340" rx="100" ry="50" fill="white" stroke="black" stroke-width="2"/>
        <text x="150" y="340" font-family="Arial" font-size="20" text-anchor="middle" dominant-baseline="middle">PostgreSQL</text>
      </g>
      {/* 화살표 3 */}
      <g>
        <line x1="150" y1="390" x2="150" y2="440" stroke="black" stroke-width="2"/>
        <polygon points="150,440 145,430 155,430" fill="black"/>
      </g>
      {/* 블로그 글 생성기 */}
      <g>
        <rect x="50" y="440" width="200" height="80" rx="40" ry="40" fill="white" stroke="black" stroke-width="2"/>
        <text x="150" y="470" font-family="Arial" font-size="18" text-anchor="middle" dominant-baseline="middle">블로그 글 생성기</text>
        <text x="150" y="495" font-family="Arial" font-size="16" text-anchor="middle" dominant-baseline="middle">(OpenAI API)</text>
      </g>
      {/* 화살표 4 */}
      <g>
        <line x1="150" y1="520" x2="150" y2="570" stroke="black" stroke-width="2"/>
        <polygon points="150,570 145,560 155,560" fill="black"/>
      </g>
      {/* 블로그 스타일 포매터 */}
      <g>
        <rect x="50" y="570" width="200" height="80" rx="40" ry="40" fill="white" stroke="black" stroke-width="2"/>
        <text x="150" y="610" font-family="Arial" font-size="18" text-anchor="middle" dominant-baseline="middle">블로그 스타일</text>
        <text x="150" y="635" font-family="Arial" font-size="18" text-anchor="middle" dominant-baseline="middle">포매터</text>
      </g>
      {/* 화살표 5 */}
      <g>
        <line x1="150" y1="650" x2="150" y2="700" stroke="black" stroke-width="2"/>
        <polygon points="150,700 145,690 155,690" fill="black"/>
      </g>
      {/* 저장 or 업로드 */}
      <g>
        <rect x="50" y="700" width="200" height="80" rx="40" ry="40" fill="white" stroke="black" stroke-width="2"/>
        <text x="150" y="745" font-family="Arial" font-size="20" text-anchor="middle" dominant-baseline="middle">저장 or 업로드</text>
      </g>
    </svg>
  );
}

export default NewsArchitectureImage;