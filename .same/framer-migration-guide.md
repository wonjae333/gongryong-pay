# 🎨 공룡티켓 Framer 마이그레이션 가이드

## 📊 현재 상태 요약

**완성된 React 프로젝트:**
- ✅ 15개 완성된 페이지 (홈, 서비스 5개, 정보 페이지 9개)
- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 한국어 SEO 최적화
- ✅ Netlify 배포 완료: https://same-xtr496j4fn8-latest.netlify.app

## 🚀 Framer 마이그레이션 전략

### 옵션 1: 비주얼 재구축 (추천) ⭐

**장점:**
- Framer의 강력한 애니메이션 기능 활용
- 드래그 앤 드롭으로 빠른 구축
- Framer 고유의 인터랙션 기능

**단계별 가이드:**

#### 1단계: Framer 프로젝트 설정
```
1. Framer.com 접속 → 새 프로젝트 생성
2. 프로젝트명: "공룡티켓"
3. 템플릿: "Blank" 선택
```

#### 2단계: 디자인 시스템 구축
```
Colors (컬러 팔레트):
- Primary Green: #10b981 (소액결제)
- Primary Blue: #3b82f6 (정보이용료)
- Primary Purple: #8b5cf6 (신용카드)
- Primary Orange: #f97316 (상품권)
- Primary Red: #ef4444 (콘텐츠이용료)
- Gray Scale: #f9fafb, #f3f4f6, #e5e7eb, #6b7280, #374151, #111827

Typography:
- Headings: 'font-bold' (700)
- Body: 'font-normal' (400)
- Sizes: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl

Spacing:
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
```

#### 3단계: 컴포넌트 라이브러리 구축

**기본 컴포넌트:**
1. **Header Component**
   - 로고 + 네비게이션
   - 모바일 메뉴 버튼
   - 드롭다운 메뉴

2. **Footer Component**
   - 회사 정보
   - 링크 섹션
   - 연락처 정보

3. **Button Components**
   - Primary Button (각 서비스별 색상)
   - Secondary Button
   - Link Button

4. **Card Components**
   - Service Card
   - Feature Card
   - Testimonial Card

#### 4단계: 페이지별 재구축 순서

**우선순위 1: 핵심 페이지**
1. 홈페이지 (/)
2. 연락처 (/contact)
3. 소액결제 서비스 (/services/micropayment)

**우선순위 2: 서비스 페이지**
4. 정보이용료 (/services/information-fee)
5. 신용카드 (/services/credit-card)
6. 상품권 (/services/gift-card)
7. 콘텐츠이용료 (/services/content-fee)

**우선순위 3: 정보 페이지**
8. 이용방법 (/how-to-use)
9. 안전거래 (/safety)
10. FAQ (/faq)
11. 고객후기 (/reviews)
12. 블로그 (/blog)
13. 개인정보처리방침 (/privacy)
14. 이용약관 (/terms)

### 옵션 2: 코드 컴포넌트 이전

**Framer 코드 컴포넌트 예시:**

```tsx
// Framer 코드 컴포넌트 예시
import { addPropertyControls, ControlType } from "framer"

export default function ServiceCard(props) {
    const { title, description, icon, color } = props

    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                width: "100%",
                height: "100%"
            }}
        >
            <div
                style={{
                    fontSize: "48px",
                    marginBottom: "16px"
                }}
            >
                {icon}
            </div>
            <h3
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#111827",
                    marginBottom: "12px"
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    lineHeight: "1.5"
                }}
            >
                {description}
            </p>
        </div>
    )
}

// Property Controls
addPropertyControls(ServiceCard, {
    title: { type: ControlType.String, defaultValue: "서비스 제목" },
    description: { type: ControlType.String, defaultValue: "서비스 설명" },
    icon: { type: ControlType.String, defaultValue: "📱" },
    color: { type: ControlType.Color, defaultValue: "#10b981" }
})
```

## 🎯 각 페이지별 이전 가이드

### 홈페이지 구조
```
Hero Section:
- 배경: gradient (green-50 to green-100)
- 제목: "공룡티켓 - 소액결제 현금화 전문업체"
- 설명: 신속하고 안전한 현금화 서비스
- CTA 버튼: "무료 상담 신청"

Services Section:
- 4개 서비스 카드 (2x2 그리드)
- 각 카드: 아이콘 + 제목 + 설명 + 링크

Features Section:
- 3개 특징 카드
- 아이콘 + 제목 + 설명

Testimonials Section:
- 고객 후기 3개
- 별점 + 이름 + 후기 내용

CTA Section:
- 최종 행동 유도
- 연락처 정보
```

### 서비스 페이지 구조 (공통)
```
Hero Section:
- 서비스별 색상 테마
- 서비스 제목 + 설명
- CTA 버튼

Info Section:
- 서비스 설명
- 3단계 이용 방법
- 핵심 장점 (4개 카드)

FAQ Section:
- 자주 묻는 질문
- 접히는/펼치는 아코디언

Final CTA:
- 상담 신청 버튼
```

## 📱 반응형 디자인 설정

**Framer 브레이크포인트:**
```
Desktop: 1200px+
Tablet: 768px - 1199px
Mobile: 320px - 767px
```

**주요 반응형 요소:**
- 네비게이션: 데스크톱 메뉴 → 모바일 햄버거
- 그리드: 4컬럼 → 2컬럼 → 1컬럼
- 폰트 크기: text-5xl → text-4xl → text-3xl
- 패딩: py-20 → py-16 → py-12

## 🔗 필수 설정

### 1. 도메인 연결
```
1. Framer 프로젝트 → Settings → Domain
2. 커스텀 도메인 연결
3. DNS 설정 (A record / CNAME)
```

### 2. SEO 설정
```
각 페이지별:
- Title: 한국어 제목
- Description: 서비스 설명
- Keywords: 현금화 관련 키워드
- Open Graph 이미지
```

### 3. Analytics 연결
```
1. Google Analytics 4 연결
2. Facebook Pixel (선택사항)
3. 네이버 웹마스터도구
```

## ⚡ 애니메이션 개선 아이디어

**Framer Motion 활용:**
1. **Hero Section**: 텍스트 순차 등장 애니메이션
2. **Service Cards**: 호버 시 scale + shadow 효과
3. **Feature Cards**: 스크롤 시 순차 등장
4. **CTA Buttons**: 맥동 효과 (pulse)
5. **Mobile Menu**: 슬라이드 애니메이션

## 🚀 마이그레이션 체크리스트

### Phase 1: 기본 구조 (1주차)
- [ ] Framer 프로젝트 생성
- [ ] 디자인 시스템 구축
- [ ] 기본 컴포넌트 제작
- [ ] 홈페이지 구축

### Phase 2: 서비스 페이지 (2주차)
- [ ] 소액결제 서비스 페이지
- [ ] 정보이용료 서비스 페이지
- [ ] 신용카드 서비스 페이지
- [ ] 상품권 서비스 페이지
- [ ] 콘텐츠이용료 서비스 페이지

### Phase 3: 정보 페이지 (3주차)
- [ ] 이용방법 페이지
- [ ] 안전거래 페이지
- [ ] FAQ 페이지
- [ ] 고객후기 페이지
- [ ] 블로그 페이지

### Phase 4: 법적 페이지 & 최적화 (4주차)
- [ ] 개인정보처리방침
- [ ] 이용약관
- [ ] 반응형 최적화
- [ ] SEO 설정
- [ ] 성능 최적화

## 📞 추가 지원

**필요한 에셋:**
- 로고 SVG 파일
- 아이콘 세트
- 브랜드 가이드라인
- 컨텐츠 텍스트 (현재 React 코드에서 추출 가능)

**Framer 리소스:**
- Framer Academy: https://www.framer.com/academy/
- Framer Community: https://www.framer.com/community/
- Templates: https://www.framer.com/templates/

## 🎯 예상 완성 시간

**총 소요 시간: 4-6주**
- 기본 구축: 1-2주
- 페이지 완성: 2-3주
- 최적화 & 테스트: 1주

**시간 단축 팁:**
1. 기존 React 컴포넌트 구조 참고
2. Framer 템플릿 활용
3. 컴포넌트 재사용 최대화
4. 점진적 개선 (MVP → 완성형)
