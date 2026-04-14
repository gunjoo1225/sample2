# PETHROOM 디자인 가이드

> **분석 대상**: https://pethroom.com/
> **분석일**: 2026-04-14
> **버전**: V3 (2026-04-14 한글화 원칙 반영)

---

## 0. 한글 우선 원칙 (Korean-First Principle)

### 대원칙

> **타겟 고객은 한국의 반려동물 보호자이다.**
> 사용자가 네비게이션, 버튼, 라벨 등 행동을 취해야 하는 모든 UI 요소에서
> **사용성 문제를 최소화하기 위해 한글을 사용하는 것을 대원칙으로 한다.**

### 적용 범위

| 구분 | 규칙 | 예시 |
|------|------|------|
| **네비게이션 메뉴** | 반드시 한글 | Shop -> 쇼핑, Event -> 이벤트 |
| **버튼 라벨** | 반드시 한글 | VIP CENTER 바로가기 -> VIP 센터 바로가기 |
| **섹션 타이틀** | 한글 기본, 브랜드명만 예외 허용 | BEST SELLER -> 베스트 상품 |
| **섹션 서브타이틀** | 반드시 한글 | - |
| **상품 배지** | 한글 | BEST -> 인기, NEW -> 신상품, SALE -> 할인 |
| **가격/할인 라벨** | 반드시 한글 | VIP 배지는 이미 인지도 있으므로 허용 |
| **푸터 정보** | 반드시 한글 | SNS -> 소셜 미디어 |
| **히어로 카피** | 한글 (브랜드 슬로건 한글화) | THE REASON WE EXIST -> 우리가 존재하는 이유 |

### 예외 허용 사항

아래 경우에만 영문 사용을 허용한다:

1. **브랜드 고유명사**: PetPark (로고), VIP (등급명으로 이미 한국어화된 외래어)
2. **기술 약어**: IoT (대체 한글 표현이 없는 기술 용어)
3. **수상명**: iF Design Award 등 (고유명사)
4. **CSS 클래스명 등 개발 영역**: 사용자에게 노출되지 않는 코드 레벨

### 적용 전/후 대조표

| V2 (변경 전) | V3 (변경 후) |
|-------------|-------------|
| Shop | 쇼핑 |
| VIP CENTER | VIP 센터 |
| PETPARK FRIENDS | PetPark 프렌즈 |
| Event | 이벤트 |
| THE REASON WE EXIST | 우리가 존재하는 이유 |
| Premium Pet Care | 프리미엄 반려동물 케어 |
| REAL REVIEW | 고객 리뷰 |
| VIP BENEFITS | VIP 혜택 |
| BEST SELLER | 베스트 상품 |
| NEW ARRIVAL | 신상품 |
| CURATION | 추천 상품 |
| PETPARK FRIENDS | PetPark 프렌즈 |
| IoT SMART CARE | 스마트 IoT 케어 |
| WITH LOVE | 함께하는 사랑 |
| COMMUNITY | 커뮤니티 |
| BEST (배지) | 인기 |
| NEW (배지) | 신상품 |
| SNS | 소셜 미디어 |
| IG / YT / BL | 인스타그램 / 유튜브 / 블로그 |

---

## 1. Color System (색상 체계)

### Primary Colors

| 이름           | HEX       | 용도                          |
| -------------- | --------- | ----------------------------- |
| White          | `#FFFFFF` | 기본 배경                     |
| Black          | `#000000` | 메인 타이틀, 강조 텍스트      |
| Dark Gray      | `#333333` | 본문 텍스트                   |
| Orange (CTA)   | `#FF6B35` | VIP 가격, 주요 CTA 버튼      |
| Light Gray (BG)| `#F5F5F5` | 섹션 배경, 구분 영역          |

### Secondary / Utility Colors

| 이름        | HEX       | 용도                     |
| ----------- | --------- | ------------------------ |
| Gold        | `#FFD700` | 배지, 수상 하이라이트     |
| Link Blue   | `#0066CC` | 텍스트 링크              |
| Error Red   | `#FF0000` | 에러, 경고               |
| Success     | `#00AA00` | 할인율, 성공 상태        |
| Disabled    | `#CCCCCC` | 비활성 요소              |

### 색상 사용 원칙

- **배경**: 흰색(`#FFF`) 기반, 섹션 구분 시 `#F5F5F5` 교차 사용
- **텍스트**: 제목 `#000`, 본문 `#333`, 보조 텍스트 `#999`
- **강조**: VIP/할인 관련은 항상 오렌지(`#FF6B35`) 계열
- **대비**: 배경-텍스트 간 WCAG AA 이상 명도 대비 유지

---

## 2. Typography (타이포그래피)

### Font Family

```css
font-family: 'Noto Sans KR', Arial, sans-serif;
```

### Type Scale

| 요소           | Size      | Weight | Line Height | 용도               |
| -------------- | --------- | ------ | ----------- | ------------------ |
| Display        | 48px      | 700    | 1.2         | 히어로 섹션 타이틀 |
| H1             | 32px      | 700    | 1.3         | 섹션 메인 타이틀   |
| H2             | 24px      | 700    | 1.3         | 서브 타이틀        |
| H3             | 20px      | 600    | 1.4         | 카드 타이틀        |
| Body Large     | 18px      | 400    | 1.6         | 리드 텍스트        |
| Body           | 16px      | 400    | 1.6         | 본문               |
| Body Small     | 14px      | 400    | 1.5         | 보조 설명          |
| Caption        | 12px      | 400    | 1.4         | 주석, 라벨         |
| Button         | 14px      | 600    | 1.2         | 버튼 텍스트        |
| Price          | 18-20px   | 700    | 1.4         | 가격 표시          |

### 타이포그래피 원칙

- 제목은 항상 **Bold(700)**, 본문은 **Regular(400)**
- 섹션 타이틀은 `text-align: center`
- 가격 표시에서 원가는 `text-decoration: line-through` + 연한 색상

---

## 3. Layout (레이아웃)

### 전체 페이지 구조

```
┌──────────────────────────────────────────────┐
│  HEADER                                      │
│  로고 | 검색 | 네비게이션 | 로그인 | 장바구니  │
├──────────────────────────────────────────────┤
│  EVENT BANNERS (상단 띠 배너)                 │
├──────────────────────────────────────────────┤
│  TOP NAVIGATION                              │
│  Shop | VIP | Friends App | Event            │
├──────────────────────────────────────────────┤
│                                              │
│  MAIN CONTENT                                │
│  ┌────────────────────────────────────────┐  │
│  │  Hero Section                          │  │
│  │  Awards Section                        │  │
│  │  VIP Introduction                      │  │
│  │  Customer Reviews (Carousel)           │  │
│  │  VIP Benefits                          │  │
│  │  Best Seller (Product Grid)            │  │
│  │  New Arrival (Product Grid)            │  │
│  │  Curation (Product Grid)               │  │
│  │  Friends App Promo                     │  │
│  │  IoT Care Products                     │  │
│  │  CSR (사회공헌)                         │  │
│  │  Community                             │  │
│  └────────────────────────────────────────┘  │
│                                              │
├──────────────────────────────────────────────┤
│  FOOTER                                      │
│  회사정보 | 고객센터 | SNS | 이용약관         │
└──────────────────────────────────────────────┘
```

### Grid System

```css
/* 기본 컨테이너 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 상품 그리드 - 3열 기본 */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### Spacing System

| Token     | Value  | 용도                    |
| --------- | ------ | ----------------------- |
| `xs`      | 8px    | 인라인 요소 간격        |
| `sm`      | 16px   | 카드 내부 패딩          |
| `md`      | 24px   | 요소 간 간격            |
| `lg`      | 40px   | 섹션 내부 패딩          |
| `xl`      | 60px   | 섹션 간 간격            |
| `xxl`     | 80px   | 주요 섹션 간 간격       |

---

## 4. Section Composition (섹션 구성)

### 4.1 Header

- **구성**: 로고 (좌) / 검색바 (중) / 로그인, 장바구니 (우)
- **높이**: ~60px
- **위치**: `position: sticky; top: 0`
- **배경**: `#FFFFFF` + 하단 `border-bottom: 1px solid #eee`

### 4.2 Event Banner (띠 배너)

- **구성**: 가로 전체 배너, 슬라이드 형식
- **내용**: VIP 할인, 쿠폰, 정기배송 프로모션
- **높이**: ~40px
- **배경**: 강조색 또는 다크 계열

### 4.3 Top Navigation

- **구성**: 수평 메뉴 리스트
- **항목**: Shop / VIP CENTER / PETHROOM FRIENDS (APP) / Event
- **스타일**: 균등 분배, 호버 시 밑줄 또는 색상 변화

### 4.4 Hero Section

- **메시지**: "THE REASON WE EXIST"
- **스타일**: 풀 width 이미지 + 오버레이 텍스트
- **목적**: 브랜드 정체성 전달

### 4.5 Awards Section

- **구성**: 4개 디자인상 아이콘 수평 나열
- **목적**: 브랜드 신뢰도 확보

### 4.6 VIP Introduction

- **구성**: 좌측 이미지 + 우측 텍스트 (또는 풀 width)
- **내용**: 정기배송 서비스 소개, 혜택 요약
- **CTA**: "VIP CENTER 바로가기" 버튼

### 4.7 Customer Reviews (Carousel)

- **구성**: 카드형 리뷰 8개, 좌우 슬라이드
- **카드 내용**: 리뷰 텍스트 + 별점 + 작성자 정보
- **자동 슬라이드**: 있음

### 4.8 VIP Benefits

- **구성**: 8가지 혜택 아이콘 + 텍스트 그리드 (4x2 또는 2x4)
- **스타일**: 아이콘 중심, 간결한 설명

### 4.9 Best Seller / New Arrival / Curation

- **구성**: 상품 카드 그리드 (3열 x 2행 = 6개)
- **섹션 타이틀**: 중앙 정렬, Bold
- **"더보기" 링크**: 하단에 위치

### 4.10 Friends App Promo

- **구성**: 앱 스크린샷 + 기능 설명
- **내용**: 쇼츠, 리워드, 커뮤니티 기능
- **CTA**: 앱 다운로드 유도

### 4.11 IoT Care Products

- **구성**: 제품 이미지 + 설명 (자동 급식기, 급수기, 화장실)
- **스타일**: 대형 이미지 중심

### 4.12 CSR Section

- **구성**: 이미지 + 텍스트
- **내용**: 유기동물 보호 활동
- **목적**: 브랜드 가치 전달

### 4.13 Footer

- **구성**: 4열 레이아웃
  - 회사 정보 (상호, 대표, 사업자번호)
  - 고객센터 (전화, 이메일, 운영시간)
  - SNS 링크 (인스타그램, 유튜브 등)
  - 이용약관, 개인정보처리방침

---

## 5. Component Patterns (컴포넌트 패턴)

### 5.1 Navigation Bar

```html
<header class="site-header">
  <div class="container">
    <a href="/" class="logo">
      <img src="logo.svg" alt="PETHROOM" />
    </a>
    <div class="search-bar">
      <input type="text" placeholder="검색어를 입력하세요" />
    </div>
    <nav class="header-nav">
      <a href="/login">로그인</a>
      <a href="/cart">장바구니</a>
    </nav>
  </div>
</header>
```

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #eee;
  height: 60px;
  display: flex;
  align-items: center;
}
```

### 5.2 Product Card

```html
<div class="product-card">
  <div class="product-image">
    <img src="product.jpg" alt="상품명" />
    <span class="badge">BEST</span>
  </div>
  <div class="product-info">
    <h3 class="product-name">소프트 목욕 거품 샴푸</h3>
    <p class="product-desc">순한 거품으로 깨끗하게</p>
    <div class="price-group">
      <span class="original-price">29,900원</span>
      <span class="discount-rate">20%</span>
      <span class="sale-price">23,900원</span>
    </div>
    <div class="vip-price">
      <span class="vip-badge">VIP</span>
      <span class="vip-amount">20,900원</span>
    </div>
  </div>
</div>
```

```css
.product-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.product-image {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #FF6B35;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
}

.product-info {
  padding: 16px;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 4px;
}

.product-desc {
  font-size: 14px;
  color: #999;
  margin-bottom: 12px;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.discount-rate {
  font-size: 16px;
  font-weight: 700;
  color: #FF6B35;
}

.sale-price {
  font-size: 18px;
  font-weight: 700;
  color: #000;
}

.vip-price {
  margin-top: 8px;
  padding: 8px 12px;
  background: #FFF5F0;
  border-radius: 4px;
}

.vip-badge {
  background: #FF6B35;
  color: #fff;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 700;
  margin-right: 6px;
}

.vip-amount {
  font-size: 16px;
  font-weight: 700;
  color: #FF6B35;
}
```

### 5.3 Button System

```html
<!-- Primary CTA -->
<button class="btn btn-primary">VIP CENTER 바로가기</button>

<!-- Secondary -->
<button class="btn btn-secondary">더 알아보기</button>

<!-- Ghost -->
<button class="btn btn-ghost">전체 보기</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #FF6B35;
  color: #fff;
  border: none;
  padding: 14px 32px;
}

.btn-primary:hover {
  background: #E85A25;
}

.btn-secondary {
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  padding: 12px 28px;
}

.btn-secondary:hover {
  border-color: #333;
}

.btn-ghost {
  background: transparent;
  color: #333;
  border: none;
  padding: 8px 16px;
  text-decoration: underline;
}
```

### 5.4 Section Title

```html
<div class="section-header">
  <h2 class="section-title">BEST SELLER</h2>
  <p class="section-subtitle">가장 많이 사랑받는 제품</p>
</div>
```

```css
.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 16px;
  color: #999;
  font-weight: 400;
}
```

### 5.5 Review Card (Carousel)

```html
<div class="review-carousel">
  <div class="review-card">
    <div class="rating">
      <span class="star filled">★</span>
      <span class="star filled">★</span>
      <span class="star filled">★</span>
      <span class="star filled">★</span>
      <span class="star filled">★</span>
    </div>
    <p class="review-text">
      "거품이 풍성하고 향이 은은해서 너무 좋아요.
      아이가 목욕을 싫어했는데 이제는 좋아합니다."
    </p>
    <div class="reviewer">
      <span class="reviewer-name">정기배송 12회차 김**님</span>
    </div>
  </div>
</div>
```

```css
.review-card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  min-width: 300px;
}

.rating .star.filled {
  color: #FFD700;
  font-size: 16px;
}

.review-text {
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin: 16px 0;
}

.reviewer-name {
  font-size: 13px;
  color: #999;
}
```

### 5.6 Event Banner Strip

```html
<div class="event-strip">
  <a href="/event/vip" class="strip-item active">
    VIP 최대 <strong>35% 할인</strong>
  </a>
  <a href="/event/coupon" class="strip-item">
    첫 구매 <strong>3,000원 쿠폰</strong>
  </a>
</div>
```

```css
.event-strip {
  display: flex;
  overflow-x: auto;
  background: #333;
  color: #fff;
  font-size: 13px;
  height: 40px;
}

.strip-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: #ccc;
  text-decoration: none;
}

.strip-item.active {
  color: #fff;
  background: #FF6B35;
}

.strip-item strong {
  font-weight: 700;
  margin-left: 4px;
}
```

---

## 6. Price Display Pattern (가격 표시 패턴)

VIP 정기배송 중심의 가격 구조:

```
원가        29,900원   (#999, line-through, 14px)
할인율      20%        (#FF6B35, bold, 16px)
판매가      23,900원   (#000, bold, 18px)
─────────────────────
VIP 혜택가  20,900원   (#FF6B35, bold, 배경 #FFF5F0)
            "VIP 35% 추가할인가"
```

---

## 7. Responsive Design (반응형 디자인)

### Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { ... }

/* Tablet */
@media (min-width: 768px) and (max-width: 1199px) { ... }

/* Desktop */
@media (min-width: 1200px) { ... }
```

### 반응형 적용

| 요소           | Desktop (1200+) | Tablet (768-1199) | Mobile (~767)   |
| -------------- | --------------- | ----------------- | --------------- |
| 상품 그리드     | 3열             | 2열               | 1-2열           |
| 네비게이션      | 수평 메뉴       | 수평 축소          | 햄버거 메뉴     |
| Hero 텍스트     | 48px            | 36px              | 28px            |
| 섹션 패딩       | 80px            | 60px              | 40px            |
| 컨테이너 패딩   | 20px            | 20px              | 16px            |
| 리뷰 캐러셀     | 3개 보임        | 2개 보임           | 1개 보임        |

### Mobile 특이사항

- 하단 고정 바 (장바구니 / 구매하기)
- 상품 이미지 풀 width
- 터치 스와이프 캐러셀
- 최소 터치 영역: 44px x 44px

---

## 8. Animation & Interaction (애니메이션)

### Scroll Reveal

```css
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Effects

```css
/* 상품 카드 */
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

/* 버튼 */
.btn:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

/* 이미지 줌 */
.product-image:hover img {
  transform: scale(1.05);
  transition: transform 0.4s ease;
}
```

### Carousel

```css
.carousel {
  overflow-x: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Transition 기본값

```css
/* 전역 트랜지션 */
transition: all 0.3s ease;

/* 카드 트랜지션 */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* 이미지 줌 */
transition: transform 0.4s ease;
```

---

## 9. Design Tokens Summary (디자인 토큰 요약)

```css
:root {
  /* Colors */
  --color-primary: #FF6B35;
  --color-primary-hover: #E85A25;
  --color-primary-light: #FFF5F0;
  --color-black: #000000;
  --color-text: #333333;
  --color-text-light: #999999;
  --color-border: #EEEEEE;
  --color-bg: #FFFFFF;
  --color-bg-alt: #F5F5F5;
  --color-gold: #FFD700;
  --color-success: #00AA00;
  --color-error: #FF0000;

  /* Typography */
  --font-family: 'Noto Sans KR', Arial, sans-serif;
  --font-size-display: 48px;
  --font-size-h1: 32px;
  --font-size-h2: 24px;
  --font-size-h3: 20px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-body-sm: 14px;
  --font-size-caption: 12px;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 60px;
  --space-xxl: 80px;

  /* Layout */
  --max-width: 1200px;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

## 10. 핵심 디자인 원칙

1. **미니멀 & 클린**: 화이트 스페이스를 충분히 활용한 깔끔한 레이아웃
2. **명확한 시각 계층**: 타이틀 -> 서브타이틀 -> 본문 -> CTA 순서
3. **VIP 가치 강조**: 오렌지 컬러로 VIP 혜택/가격을 시각적으로 부각
4. **신뢰 구축**: 수상 내역, 리뷰, 정기배송 회차 표시로 신뢰감 형성
5. **일관된 반복 패턴**: 상품 카드, 섹션 타이틀, CTA 버튼의 통일된 스타일
6. **모바일 최적화**: 터치 친화적 크기, 세로 스크롤 중심 UX
