import type React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // SEO 최적화를 위한 메타 태그 설정
  useEffect(() => {
    document.title = "공룡페이 블로그 | 현금화 정보, 팁, 업계 동향 | 소액결제현금화 전문";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '소액결제현금화, 정보이용료현금화, 신용카드현금화 관련 최신 정보와 유용한 팁을 제공하는 공룡페이 공식 블로그입니다. 안전한 현금화 방법과 업계 동향을 확인하세요.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화, 현금화방법, 현금화팁, 공룡페이블로그');
    }
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "2024년 소액결제 현금화 완벽 가이드 | 안전하고 빠른 방법",
      excerpt: "소액결제 현금화의 모든 것을 알려드립니다. 통신사별 한도, 지급률, 주의사항까지 한 번에 해결하세요.",
      content: `
소액결제 현금화는 휴대폰 소액결제 한도를 현금으로 전환하는 서비스입니다. 2024년 현재 가장 안전하고 빠른 방법을 소개합니다.

## 소액결제 현금화란?
휴대폰 소액결제 서비스를 이용해 디지털 상품을 구매한 후, 이를 현금으로 전환하는 방식입니다. SKT, KT, LGU+ 모든 통신사에서 이용 가능합니다.

## 통신사별 한도 및 특징
- **SKT**: 월 최대 100만원, 빠른 처리 속도
- **KT**: 월 최대 100만원, 안정적인 서비스
- **LGU+**: 월 최대 100만원, 다양한 결제 옵션

## 안전한 이용 방법
1. **정식 등록업체 확인**: 사업자등록증과 통신판매업 신고증 확인
2. **투명한 지급률**: 사전에 정확한 지급률 확인
3. **본인 명의만**: 타인 명의 사용 절대 금지
4. **개인정보 보호**: 안전한 채널을 통한 정보 전송

## 주의사항
- 과도한 이용은 피하세요
- 정확한 개인정보 제공이 필요합니다
- 한도 소진 시 익월에 이용 가능합니다

공룡페이는 업계 최고 지급률과 3분 내 빠른 처리로 고객님께 만족스러운 서비스를 제공합니다.
      `,
      category: "소액결제",
      tags: ["소액결제현금화", "휴대폰소액결제", "SKT", "KT", "LGU+"],
      date: "2024-12-10",
      readTime: "5분",
      author: "공룡페이 전문팀",
      featured: true
    },
    {
      id: 2,
      title: "정보이용료 vs 콘텐츠이용료 차이점과 현금화 방법 완벽 정리",
      excerpt: "정보이용료와 콘텐츠이용료의 차이점을 명확히 알고, 효율적인 현금화 방법을 알아보세요.",
      content: `
정보이용료와 콘텐츠이용료는 같은 서비스를 지칭하는 다른 표현입니다. 혼동을 방지하기 위해 자세히 설명드립니다.

## 정보이용료 = 콘텐츠이용료
두 용어는 동일한 서비스를 의미합니다. 통신사에서 제공하는 디지털 콘텐츠 결제 서비스로, 게임 아이템, 앱 내 결제 등에 사용됩니다.

## 현금화 방법
1. **게임 아이템 구매**: 다양한 게임의 아이템 구매를 통한 현금화
2. **앱 내 결제**: 모바일 앱의 프리미엄 서비스 결제
3. **디지털 콘텐츠**: 음악, 동영상, 웹툰 등 디지털 콘텐츠 결제

## 소액결제와의 차이점
- **별도 한도**: 소액결제와 독립적인 한도 운영
- **다양한 활용**: 더 많은 디지털 서비스에서 활용 가능
- **높은 지급률**: 일반적으로 소액결제보다 높은 지급률

## 최대 한도
월 최대 100만원까지 이용 가능하며, 소액결제와 합쳐서 월 200만원까지 현금화가 가능합니다.

안전하고 빠른 정보이용료 현금화는 공룡페이와 함께하세요.
      `,
      category: "정보이용료",
      tags: ["정보이용료", "콘텐츠이용료", "게임아이템", "현금화차이점"],
      date: "2024-12-08",
      readTime: "4분",
      author: "공룡페이 전문팀",
      featured: true
    },
    {
      id: 3,
      title: "신용카드 현금화 시 꼭 알아야 할 5가지 주의사항",
      excerpt: "신용카드 현금화를 안전하게 이용하기 위한 필수 주의사항과 올바른 방법을 알려드립니다.",
      content: `
신용카드 현금화는 올바른 방법으로 이용하면 안전하고 유용한 금융 서비스입니다. 주의사항을 숙지하고 현명하게 이용하세요.

## 5가지 핵심 주의사항

### 1. 정식 등록업체 이용
- 사업자등록증 확인 필수
- 통신판매업 신고 확인
- 고객 후기와 평점 확인

### 2. 투명한 수수료 구조
- 사전에 모든 비용 확인
- 숨겨진 수수료가 없는지 점검
- 최종 지급 금액 명확히 확인

### 3. 본인 명의 카드만 사용
- 타인 명의 카드 사용 금지
- 가족 카드도 본인 명의 확인 필요
- 대리 이용 절대 불가

### 4. 적정 한도 내 이용
- 무리한 현금화 피하기
- 월 소득 대비 적정 수준 유지
- 카드 한도의 70% 이내 권장

### 5. 안전한 정보 전송
- 공식 채널을 통한 정보 제공
- 카드 정보 보안 철저히 관리
- 의심스러운 요청 시 즉시 중단

## 추천 카드사
삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC카드 모두 지원됩니다.

안전한 신용카드 현금화는 공룡페이에서 경험하세요.
      `,
      category: "신용카드",
      tags: ["신용카드현금화", "주의사항", "안전거래", "카드사"],
      date: "2024-12-06",
      readTime: "6분",
      author: "공룡페이 전문팀",
      featured: false
    },
    {
      id: 4,
      title: "상품권 현금화 지급률 높이는 꿀팁 7가지",
      excerpt: "상품권 현금화 시 지급률을 최대화할 수 있는 실용적인 팁들을 공개합니다.",
      content: `
상품권 현금화를 더 유리한 조건으로 이용할 수 있는 검증된 방법들을 소개합니다.

## 7가지 지급률 향상 꿀팁

### 1. 상품권 종류별 지급률 확인
- **문화상품권**: 일반적으로 높은 지급률
- **해피머니**: 안정적인 지급률
- **스마트문상**: 빠른 처리 가능
- **도서문화상품권**: 특별 프로모션 대상

### 2. 적정 금액대 선택
- 10만원~50만원: 최적 지급률 구간
- 소액(1-5만원): 상대적으로 낮은 지급률
- 고액(100만원 이상): 별도 상담 필요

### 3. 만료일 여유 확보
- 만료일 1개월 이상 남은 상품권
- 만료 임박 시 지급률 하락
- 미리미리 현금화 진행

### 4. 일괄 처리 활용
- 여러 상품권 동시 현금화
- 처리 비용 절약으로 지급률 향상
- 효율적인 거래 진행

### 5. 정기 이용 고객 혜택
- 재방문 고객 우대 지급률
- 신뢰 관계 구축 시 추가 혜택
- VIP 고객 전용 프로모션

### 6. 시기별 프로모션 활용
- 월말/분기말 특별 이벤트
- 연말연시 프로모션 기간
- 기념일 특별 혜택

### 7. 정확한 정보 제공
- 정확한 상품권 정보 전달
- 빠른 응답으로 처리 시간 단축
- 원활한 소통으로 신뢰 관계 구축

공룡페이는 상품권별 최적의 지급률로 고객님께 만족을 드립니다.
      `,
      category: "상품권",
      tags: ["상품권현금화", "지급률", "꿀팁", "문화상품권", "해피머니"],
      date: "2024-12-04",
      readTime: "5분",
      author: "공룡페이 전문팀",
      featured: false
    },
    {
      id: 5,
      title: "현금화 업체 선택 시 체크해야 할 10가지 포인트",
      excerpt: "안전하고 신뢰할 수 있는 현금화 업체를 선택하는 방법을 상세히 알려드립니다.",
      content: `
현금화 업체 선택은 안전한 거래의 첫걸음입니다. 반드시 확인해야 할 체크포인트를 소개합니다.

## 10가지 필수 체크포인트

### 1. 사업자등록증 확인
- 정식 등록된 사업체인지 확인
- 사업자등록번호 조회 가능
- 대표자 정보 공개

### 2. 통신판매업 신고 여부
- 온라인 거래 필수 허가
- 공정거래위원회 신고 확인
- 소비자 보호 장치 마련

### 3. 고객 후기와 평점
- 실제 이용 고객 후기 확인
- 평점과 리뷰 내용 검토
- 부정적 후기의 원인 파악

### 4. 투명한 지급률 공시
- 명확한 지급률 안내
- 숨겨진 수수료 없음
- 최종 지급 금액 사전 고지

### 5. 24시간 고객센터 운영
- 언제든 상담 가능
- 빠른 응답 시간
- 전문적인 상담 서비스

### 6. 개인정보 보호 정책
- 개인정보보호법 준수
- 정보 암호화 처리
- 거래 후 정보 삭제

### 7. 빠른 처리 시간
- 평균 처리 시간 공개
- 실시간 진행 상황 확인
- 지연 시 사전 안내

### 8. 다양한 서비스 제공
- 여러 현금화 방법 지원
- 고객 맞춤형 서비스
- 전문적인 컨설팅

### 9. 안전한 거래 시스템
- 보안 인증서 적용
- 안전한 결제 시스템
- 거래 기록 보관

### 10. 사후 관리 서비스
- 거래 후 문제 해결
- 지속적인 고객 관리
- 재이용 시 우대 혜택

공룡페이는 모든 체크포인트를 만족하는 신뢰할 수 있는 현금화 전문 업체입니다.
      `,
      category: "가이드",
      tags: ["업체선택", "안전거래", "체크포인트", "현금화업체"],
      date: "2024-12-02",
      readTime: "7분",
      author: "공룡페이 전문팀",
      featured: false
    },
    {
      id: 6,
      title: "2024년 현금화 업계 동향과 전망 분석",
      excerpt: "현금화 업계의 최신 동향과 향후 전망을 전문가 시각으로 분석해드립니다.",
      content: `
2024년 현금화 업계는 기술 발전과 규제 강화로 큰 변화를 겪고 있습니다. 주요 동향을 분석해보겠습니다.

## 주요 업계 동향

### 1. 디지털 전환 가속화
- 모바일 기반 서비스 확산
- AI 활용 자동화 시스템 도입
- 실시간 처리 시스템 고도화

### 2. 보안 강화
- 생체 인증 시스템 도입
- 블록체인 기술 활용
- 다단계 보안 인증 체계

### 3. 고객 서비스 향상
- 24시간 자동 상담 시스템
- 개인 맞춤형 서비스 제공
- 투명한 정보 공개

### 4. 규제 환경 변화
- 금융당국 감독 강화
- 소비자 보호 제도 확대
- 업체 등록 기준 엄격화

## 2024년 전망

### 긍정적 요인
- 디지털 결제 시장 성장
- 간편 결제 서비스 확산
- 핀테크 기술 발전

### 주의 요인
- 규제 리스크 증가
- 경쟁 심화
- 금리 변동 영향

## 고객에게 미치는 영향

### 혜택
- 더 빠른 처리 속도
- 향상된 보안 수준
- 다양한 서비스 옵션

### 변화사항
- 본인 인증 절차 강화
- 투명한 수수료 구조
- 전문 상담 서비스 확대

공룡페이는 업계 동향을 선도하며 고객님께 최고의 서비스를 제공하겠습니다.
      `,
      category: "업계동향",
      tags: ["업계동향", "2024년전망", "현금화시장", "디지털전환"],
      date: "2024-11-30",
      readTime: "8분",
      author: "공룡페이 전문팀",
      featured: true
    }
  ];

  const categories = [
    { id: "all", name: "전체", icon: "📚" },
    { id: "소액결제", name: "소액결제", icon: "📱" },
    { id: "정보이용료", name: "정보이용료", icon: "🎮" },
    { id: "신용카드", name: "신용카드", icon: "💳" },
    { id: "상품권", name: "상품권", icon: "🎁" },
    { id: "가이드", name: "가이드", icon: "📋" },
    { id: "업계동향", name: "업계동향", icon: "📈" }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === "all" || post.category === selectedCategory;
    const searchMatch = searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO용 JSON-LD 구조화 데이터 */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "공룡페이 블로그",
          "description": "소액결제현금화, 정보이용료현금화, 신용카드현금화 관련 최신 정보와 유용한 팁을 제공하는 전문 블로그",
          "url": "https://gongryong-pay.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "공룡페이",
            "url": "https://gongryong-pay.com"
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "keywords": post.tags.join(", ")
          }))
        })}
      </script>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">📚</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              공룡페이 <span className="text-green-600">블로그</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              소액결제현금화, 정보이용료현금화, 신용카드현금화 관련 최신 정보와 유용한 팁을 제공합니다.
              전문가가 직접 작성한 신뢰할 수 있는 정보를 확인하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <a
                href="https://open.kakao.com/o/s9GOcnBh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.485 3 2 6.824 2 11.5c0 2.895 1.582 5.449 4 6.973V21l2.268-1.134C9.424 20.612 10.682 21 12 21c5.515 0 10-3.824 10-8.5S17.515 3 12 3z"/>
                </svg>
                궁금한 점 상담하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ⭐ 추천 포스트
            </h2>
            <p className="text-lg text-gray-600">
              가장 인기 있고 유용한 정보를 담은 추천 글들입니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div key={`featured-${post.id}`} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">추천</span>
                  <span className="text-sm text-gray-600">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime} 읽기</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              카테고리별 포스트
            </h2>
            <p className="text-gray-600">
              관심 있는 주제의 글들을 찾아보세요
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-green-50 border border-gray-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">✨ 추천</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime} 읽기</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      자세히 보기
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600">
                다른 키워드나 카테고리를 선택해보세요
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            📧 최신 정보 받아보기
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            현금화 관련 최신 정보와 유용한 팁을 가장 먼저 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              구독하기
            </button>
          </div>
          <p className="text-sm text-green-200 mt-4">
            * 언제든지 구독을 취소할 수 있습니다
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📋 서비스 이용 가이드
            </h2>
            <p className="text-lg text-gray-600">
              공룡페이의 다양한 서비스를 쉽게 이용하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/how-to-use"
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                이용 방법
              </h3>
              <p className="text-gray-600 text-sm">단계별 상세 가이드</p>
            </Link>

            <Link
              to="/faq"
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                자주 묻는 질문
              </h3>
              <p className="text-gray-600 text-sm">궁금한 점 빠른 해결</p>
            </Link>

            <Link
              to="/reviews"
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                고객 후기
              </h3>
              <p className="text-gray-600 text-sm">실제 이용 고객 경험담</p>
            </Link>

            <a
              href="https://open.kakao.com/o/s9GOcnBh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                1:1 상담
              </h3>
              <p className="text-gray-600 text-sm">24시간 전문 상담</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            유용한 정보가 도움이 되셨나요? 🦕
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            <strong>전문가가 직접 작성한 신뢰할 수 있는 정보</strong><br/>
            공룡페이와 함께 안전하고 현명한 현금화를 경험하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://open.kakao.com/o/s9GOcnBh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.485 3 2 6.824 2 11.5c0 2.895 1.582 5.449 4 6.973V21l2.268-1.134C9.424 20.612 10.682 21 12 21c5.515 0 10-3.824 10-8.5S17.515 3 12 3z"/>
              </svg>
              지금 바로 상담받기
            </a>
            <Link
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              메인 페이지로
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
