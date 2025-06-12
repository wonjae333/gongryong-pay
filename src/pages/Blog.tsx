import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "소액결제 현금화의 모든 것: 안전하고 빠른 이용 방법",
      excerpt: "소액결제 현금화가 무엇인지, 어떻게 안전하게 이용할 수 있는지 자세히 알아보세요.",
      content: `소액결제 현금화는 휴대폰 소액결제 한도를 현금으로 전환하는 서비스입니다.

## 소액결제 현금화란?

소액결제 현금화는 통신사(SKT, KT, LG U+)에서 제공하는 소액결제 서비스를 통해 구매한 상품권이나 디지털 콘텐츠를 현금으로 전환하는 서비스입니다. 월 한도는 통신사별로 최대 100만원까지 가능합니다.

## 이용 방법

1. **상담 신청**: 공룡페이 고객센터로 연락하여 상담을 신청합니다.
2. **본인 확인**: 휴대폰 본인인증 및 신분증 확인을 진행합니다.
3. **한도 확인**: 현재 사용 가능한 소액결제 한도를 확인합니다.
4. **결제 진행**: 안전한 방식으로 소액결제를 진행합니다.
5. **현금 지급**: 수수료를 제외한 현금을 즉시 입금받습니다.

## 주의사항

- 본인 명의의 휴대폰만 이용 가능합니다.
- 월 한도 내에서만 이용 가능합니다.
- 정식 등록업체를 통해서만 이용하세요.
- 불법 업체 이용 시 피해가 발생할 수 있습니다.

## 공룡페이의 장점

- 업계 최고 수준의 지급률
- 3분 내 신속한 처리
- 24시간 상담 가능
- 정식 등록업체로 안전한 거래
- 투명한 수수료 안내

소액결제 현금화는 긴급한 자금이 필요할 때 유용한 서비스이지만, 반드시 신뢰할 수 있는 업체를 통해 이용하시기 바랍니다.`,
      category: "소액결제",
      author: "공룡페이 전문팀",
      readTime: "5분",
      featured: true
    },
    {
      id: 2,
      title: "정보이용료 현금화 완벽 가이드 (콘텐츠이용료 포함)",
      excerpt: "정보이용료와 콘텐츠이용료 현금화에 대한 모든 정보를 한 번에 확인하세요.",
      content: `정보이용료 현금화는 다양한 디지털 콘텐츠 결제를 현금으로 전환하는 서비스입니다.

## 정보이용료란?

정보이용료는 인터넷, 모바일에서 제공되는 각종 디지털 콘텐츠(게임 아이템, 음악, 동영상, 웹툰 등)를 이용할 때 발생하는 요금입니다. 콘텐츠이용료라고도 불립니다.

## 현금화 가능한 서비스

- **게임**: 각종 모바일 게임 아이템, 게임머니
- **엔터테인먼트**: 음악 스트리밍, 동영상 콘텐츠
- **웹툰/소설**: 온라인 만화, 웹소설 결제
- **교육**: 온라인 강의, 교육 콘텐츠
- **기타**: 각종 디지털 상품 및 서비스

## 이용 절차

1. **상담 요청**: 공룡페이로 연락하여 이용 가능 여부 확인
2. **서비스 선택**: 현금화할 콘텐츠 서비스 선택
3. **본인 확인**: 휴대폰 인증 및 본인확인 절차
4. **결제 진행**: 선택한 콘텐츠에 대한 정보이용료 결제
5. **현금 지급**: 수수료 차감 후 현금 즉시 입금

## 한도 및 제한사항

- 월 최대 한도: 100만원 (통신사별 상이)
- 본인 명의 휴대폰 필수
- 미성년자 이용 제한
- 결제 이력이 있는 서비스 우선

## 안전한 이용을 위한 팁

- 정식 등록업체 이용 필수
- 과도한 수수료 요구 업체 주의
- 개인정보 보호에 유의
- 계약서 및 약관 꼼꼼히 확인

정보이용료 현금화는 적절히 이용하면 유용한 서비스이지만, 무분별한 이용은 피하시고 신뢰할 수 있는 업체를 선택하는 것이 중요합니다.`,
      category: "정보이용료",
      author: "공룡페이 전문팀",
      readTime: "6분",
      featured: true
    },
    {
      id: 3,
      title: "신용카드 현금화 vs 카드론, 어떤 것이 더 유리할까?",
      excerpt: "신용카드 현금화와 카드론의 차이점을 비교하고 상황에 맞는 선택법을 알아보세요.",
      content: `급하게 현금이 필요할 때 신용카드 현금화와 카드론 중 어떤 것을 선택해야 할지 고민이 됩니다.

## 신용카드 현금화란?

신용카드 현금화는 신용카드의 결제 기능을 이용하여 상품을 구매한 후, 이를 현금으로 전환하는 서비스입니다.

### 신용카드 현금화의 특징

**장점:**
- 신용카드만 있으면 즉시 이용 가능
- 별도의 대출 승인 절차 불필요
- 신용등급에 큰 영향을 주지 않음
- 3분 내 신속한 처리 가능

**단점:**
- 수수료가 발생함
- 카드 한도 내에서만 가능
- 할부 결제 시 이자 부담

## 카드론이란?

카드론은 신용카드사에서 제공하는 소액 대출 상품입니다.

### 카드론의 특징

**장점:**
- 비교적 낮은 금리 (연 4-20%)
- 분할 상환 가능
- 정식 금융상품으로 안전

**단점:**
- 승인 절차가 복잡
- 신용등급 영향
- 대출 한도 제한
- 처리 시간이 오래 걸림

## 상황별 선택 가이드

### 신용카드 현금화가 유리한 경우
- 급하게 현금이 필요한 상황
- 소액(100만원 이하)이 필요한 경우
- 신용등급이 낮아 대출이 어려운 경우
- 단기간 내 상환 가능한 경우

### 카드론이 유리한 경우
- 비교적 큰 금액이 필요한 경우
- 장기간 분할 상환을 원하는 경우
- 낮은 금리를 원하는 경우
- 시간적 여유가 있는 경우

## 공룡페이 신용카드 현금화 서비스

- **신속성**: 3분 내 처리 완료
- **편의성**: 복잡한 서류 없이 간편 이용
- **안전성**: 정식 등록업체로 안전한 거래
- **투명성**: 명확한 수수료 안내

## 주의사항

1. **정식 업체 이용**: 불법 업체 이용 시 피해 위험
2. **적정 수수료**: 과도한 수수료 요구 업체 주의
3. **상환 계획**: 카드 결제일 고려한 상환 계획 수립
4. **개인정보 보호**: 카드 정보 유출 주의

신용카드 현금화와 카드론 모두 장단점이 있으므로, 자신의 상황에 맞는 선택을 하는 것이 중요합니다.`,
      category: "신용카드",
      author: "공룡페이 전문팀",
      readTime: "7분",
      featured: false
    },
    {
      id: 4,
      title: "상품권 현금화 시 주의해야 할 5가지 체크포인트",
      excerpt: "상품권을 현금으로 바꿀 때 피해를 방지하고 안전하게 거래하는 방법을 알아보세요.",
      content: `상품권 현금화는 편리한 서비스이지만, 안전한 거래를 위해 반드시 알아두어야 할 사항들이 있습니다.

## 상품권 현금화란?

상품권 현금화는 각종 온라인/오프라인 상품권을 현금으로 전환하는 서비스입니다. 문화상품권, 해피머니, 도서문화상품권, 게임 상품권 등 다양한 상품권이 현금화 가능합니다.

## 체크포인트 1: 업체 신뢰성 확인

### 정식 등록업체인지 확인
- 사업자등록증 확인
- 통신판매업 신고번호 확인
- 고객 후기 및 평점 검토
- 오랜 운영 이력 확인

### 피해야 할 업체의 특징
- 과도하게 높은 환율 제시
- 선입금 요구
- 연락처가 불분명
- 홈페이지나 사무실이 없음

## 체크포인트 2: 환율 및 수수료 확인

### 적정 환율 수준
- 문화상품권: 85-90%
- 해피머니: 85-88%
- 도서문화상품권: 87-92%
- 게임 상품권: 80-85%

### 수수료 구조 이해
- 기본 수수료율 확인
- 추가 수수료 여부 확인
- 최종 수령 금액 계산

## 체크포인트 3: 거래 방식 확인

### 안전한 거래 절차
1. 상품권 종류 및 금액 확인
2. 환율 및 수수료 협의
3. 상품권 정보 전달
4. 현금 지급 확인

### 위험한 거래 방식
- 상품권 정보 선전달 요구
- 여러 번에 나누어 거래
- 불분명한 입금 일정

## 체크포인트 4: 상품권 유효성 검증

### 확인해야 할 사항
- 상품권 유효기간
- 사용 가능 여부
- PIN 번호 정확성
- 잔액 확인

### 부정 상품권 주의
- 도용된 상품권 사용 금지
- 출처가 불분명한 상품권 거부
- 비정상적으로 저렴한 상품권 주의

## 체크포인트 5: 개인정보 보호

### 보호해야 할 정보
- 상품권 PIN 번호
- 개인 신분정보
- 계좌 정보
- 연락처

### 정보 보호 방법
- 필요한 정보만 제공
- 통화 내용 녹음 동의 확인
- 거래 완료 후 관련 정보 삭제

## 공룡페이 상품권 현금화 서비스

### 안전성 보장
- 정식 사업자등록 업체
- 투명한 환율 공시
- 안전한 거래 시스템
- 개인정보 보호 시스템

### 서비스 특징
- 다양한 상품권 취급
- 빠른 현금 지급 (3분 이내)
- 24시간 상담 가능
- 경쟁력 있는 환율 제공

## 피해 예방을 위한 팁

1. **충분한 검토**: 급하더라도 업체 신뢰성 확인
2. **비교 검토**: 여러 업체 환율 비교
3. **계약서 작성**: 구두 약속보다 서면 계약
4. **증거 보전**: 거래 내역 스크린샷 저장
5. **신고 채널**: 피해 발생 시 신고 방법 숙지

상품권 현금화는 올바른 업체를 통해 이용하면 매우 유용한 서비스입니다. 위의 체크포인트를 참고하여 안전하고 유리한 거래를 하시기 바랍니다.`,
      category: "상품권",
      author: "공룡페이 전문팀",
      readTime: "8분",
      featured: true
    },
    {
      id: 5,
      title: "현금화 업체 선택 시 반드시 확인해야 할 필수 조건들",
      excerpt: "안전하고 신뢰할 수 있는 현금화 업체를 선택하는 방법과 주의사항을 알아보세요.",
      content: `현금화 서비스를 이용할 때 가장 중요한 것은 신뢰할 수 있는 업체를 선택하는 것입니다.

## 필수 조건 1: 정식 사업자 등록

### 확인해야 할 서류
- **사업자등록증**: 정식으로 등록된 사업체인지 확인
- **통신판매업 신고**: 온라인 거래 허가 여부
- **고유번호증**: 법인 사업체의 경우 추가 확인

### 확인 방법
- 국세청 사업자등록상태 조회 서비스 이용
- 공정거래위원회 전자상거래 등록 확인
- 업체 홈페이지에서 등록번호 공개 여부

## 필수 조건 2: 투명한 수수료 구조

### 확인해야 할 항목
- **기본 수수료율**: 서비스별 기본 수수료
- **추가 수수료**: 부대비용, 수수료 여부
- **최종 지급액**: 실제 받게 될 금액

### 주의사항
- 처음에는 높은 환율을 제시하다가 나중에 추가 수수료 부과
- 불명확한 수수료 안내
- 시장 평균보다 과도하게 높거나 낮은 환율

## 필수 조건 3: 고객 서비스 품질

### 평가 기준
- **상담 전문성**: 서비스에 대한 정확한 안내
- **응답 속도**: 문의에 대한 신속한 응답
- **친절성**: 고객 중심적인 서비스 태도
- **24시간 대응**: 긴급 상황 시 연락 가능성

### 테스트 방법
- 전화 상담을 통한 전문성 확인
- 문자나 카카오톡 응답 속도 체크
- 다양한 시간대에 연락 시도

## 필수 조건 4: 안전한 거래 시스템

### 보안 요소
- **개인정보 보호**: 고객 정보 암호화 보관
- **거래 내역 관리**: 투명한 거래 기록 제공
- **금융사고 예방**: 안전한 입출금 시스템

### 확인 방법
- 개인정보처리방침 존재 여부
- 보안 인증서(SSL) 적용 확인
- 거래 시 보안 절차 준수 여부

## 필수 조건 5: 실제 이용 고객 후기

### 신뢰할 수 있는 후기
- **구체적인 내용**: 추상적이지 않은 실제 경험담
- **다양한 채널**: 여러 플랫폼에서의 일관된 평가
- **최근 후기**: 최신 서비스 품질 반영

### 조작 후기 구별법
- 비슷한 시기에 집중된 후기
- 과도하게 긍정적인 표현
- 구체적인 내용 없이 추상적인 칭찬

## 필수 조건 6: 적절한 처리 시간

### 정상적인 처리 시간
- **소액결제**: 5-15분
- **신용카드**: 10-20분
- **상품권**: 3-10분
- **정보이용료**: 10-30분

### 의심스러운 경우
- 과도하게 빠른 처리 시간 약속
- 불확실한 처리 일정 안내
- 처리 지연에 대한 명확한 사유 없음

## 공룡페이가 모든 조건을 충족하는 이유

### 신뢰성
- 정식 사업자등록 완료
- 투명한 사업자 정보 공개
- 오랜 운영 경력과 노하우

### 서비스 품질
- 업계 최고 수준의 지급률
- 3분 내 신속한 처리
- 24시간 고객 상담 서비스

### 안전성
- 개인정보 보호 시스템
- 안전한 거래 프로세스
- 금융사고 제로 기록

## 피해 예방을 위한 최종 체크리스트

□ 사업자등록증 확인
□ 수수료 구조 명확히 파악
□ 고객 후기 다각도 검증
□ 상담 품질 직접 확인
□ 보안 시스템 점검
□ 처리 시간 합리성 판단
□ 계약 조건 꼼꼼히 검토

현금화 서비스는 올바른 업체 선택이 성공적인 거래의 90%를 좌우합니다. 위의 조건들을 꼼꼼히 확인하여 안전하고 만족스러운 서비스를 이용하시기 바랍니다.`,
      category: "일반정보",
      author: "공룡페이 전문팀",
      readTime: "10분",
      featured: false
    },
    {
      id: 6,
      title: "긴급 자금 필요 시 가장 빠른 현금화 방법은?",
      excerpt: "급하게 현금이 필요할 때 가장 빠르고 안전하게 돈을 마련하는 방법들을 비교해보세요.",
      content: `갑작스럽게 현금이 필요한 상황에서 어떤 방법이 가장 빠르고 안전한지 알아보겠습니다.

## 긴급 자금이 필요한 상황들

### 일상적인 응급 상황
- **의료비**: 갑작스러운 병원비, 응급실 비용
- **교육비**: 등록금, 학원비 납부 기한
- **생활비**: 월세, 관리비, 공과금
- **경조사비**: 결혼식, 장례식 등 예상치 못한 지출

### 사업 관련 응급 상황
- **운영자금**: 일시적 현금 흐름 문제
- **세금 납부**: 부가가치세, 소득세 납부 기한
- **임금 지급**: 직원 급여 지급 자금
- **긴급 수리**: 장비 수리, 시설 보수

## 현금화 방법별 소요 시간 비교

### 1. 소액결제 현금화 ⭐⭐⭐⭐⭐
- **소요 시간**: 3-5분
- **가능 금액**: 월 최대 100만원
- **필요 조건**: 본인 명의 휴대폰
- **장점**: 가장 빠른 처리, 간단한 절차

### 2. 신용카드 현금화 ⭐⭐⭐⭐
- **소요 시간**: 5-15분
- **가능 금액**: 카드 한도 내
- **필요 조건**: 본인 명의 신용카드
- **장점**: 큰 금액 가능, 비교적 빠름

### 3. 상품권 현금화 ⭐⭐⭐⭐⭐
- **소요 시간**: 1-3분
- **가능 금액**: 보유 상품권 금액
- **필요 조건**: 유효한 상품권
- **장점**: 가장 간단, 즉시 처리

### 4. 정보이용료 현금화 ⭐⭐⭐
- **소요 시간**: 10-30분
- **가능 금액**: 월 최대 100만원
- **필요 조건**: 결제 가능한 콘텐츠 서비스
- **장점**: 다양한 서비스 이용

## 상황별 최적 방법 선택 가이드

### 30만원 이하 필요한 경우
**1순위: 소액결제 현금화**
- 가장 빠른 처리 (3분)
- 간단한 절차
- 높은 성공률

**2순위: 상품권 현금화**
- 상품권 보유 시 즉시 가능
- 별도 한도 제한 없음

### 30-100만원 필요한 경우
**1순위: 신용카드 현금화**
- 카드 한도 내에서 자유로운 금액
- 15분 내 처리 가능

**2순위: 소액결제 + 정보이용료 병행**
- 여러 방법 조합으로 필요 금액 확보

### 100만원 이상 필요한 경우
**1순위: 신용카드 현금화**
- 카드 한도가 충분한 경우 가장 효율적

**2순위: 다중 방법 활용**
- 소액결제 + 신용카드 + 상품권 조합

## 빠른 처리를 위한 사전 준비사항

### 필수 준비물
- **신분증**: 주민등록증, 운전면허증
- **휴대폰**: 본인 명의 인증 가능
- **신용카드**: 결제 가능 상태 확인
- **계좌 정보**: 입금받을 계좌번호

### 사전 체크사항
- 휴대폰 소액결제 한도 확인
- 신용카드 사용 가능 한도 확인
- 보유 상품권 종류 및 금액 확인
- 정보이용료 결제 가능 서비스 확인

## 공룡페이 긴급 자금 서비스

### 신속 처리 시스템
- **3분 처리**: 업계 최고 속도
- **24시간 상담**: 언제든지 연락 가능
- **원스톱 서비스**: 상담부터 입금까지 한 번에

### 다양한 방법 지원
- 소액결제, 신용카드, 상품권, 정보이용료 모두 가능
- 고객 상황에 맞는 최적 방법 제안
- 여러 방법 동시 진행 가능

## 긴급 상황 대응 프로세스

### 1단계: 즉시 상담 (0분)
- 공룡페이 고객센터 연락
- 필요 금액 및 상황 설명
- 최적 방법 제안 받기

### 2단계: 방법 선택 (1분)
- 제안받은 방법 중 선택
- 필요 서류 준비 확인
- 처리 시간 및 수수료 확인

### 3단계: 신속 처리 (2-5분)
- 본인 확인 절차
- 선택한 방법으로 현금화 진행
- 계좌 입금 확인

## 주의사항 및 팁

### 긴급 상황에서도 주의할 점
- 너무 급하다고 업체 검증 생략 금지
- 과도한 수수료 요구 업체 거부
- 개인정보 보호에 유의

### 효율적인 이용 팁
- 평소 신뢰할 수 있는 업체 연락처 저장
- 각 방법별 한도 미리 확인
- 여러 계좌 정보 준비

긴급 자금이 필요한 상황에서는 빠른 처리도 중요하지만 안전한 거래가 더욱 중요합니다. 공룡페이와 함께 신속하고 안전하게 문제를 해결하세요.`,
      category: "일반정보",
      author: "공룡페이 전문팀",
      readTime: "8분",
      featured: true
    }
  ];

  const categories = ["all", "소액결제", "신용카드", "상품권", "정보이용료", "일반정보"];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === "all" || post.category === selectedCategory;
    const searchMatch = searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            블로그 목록으로 돌아가기
          </button>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="mb-6">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {selectedPost.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center text-gray-600 text-sm">
                  <span>{selectedPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>읽는 시간: {selectedPost.readTime}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={`h2-${index}`} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={`h3-${index}`} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={`bold-${index}`} className="font-bold text-gray-900 mt-4 mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={`li-${index}`} className="ml-6 text-gray-700 leading-relaxed">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <br key={`br-${index}`} />;
                  }
                  return (
                    <p key={`p-${index}`} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    공룡페이와 함께 안전하고 빠른 현금화 서비스를 경험해보세요
                  </h3>
                  <p className="text-green-700 mb-4">
                    24시간 상담 가능 • 3분 내 처리 • 업계 최고 지급률
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                  >
                    지금 바로 상담받기
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">현금화 정보 블로그</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            현금화 서비스에 대한 모든 정보와 전문적인 가이드를 제공합니다
          </p>
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="궁금한 내용을 검색해보세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <div className="absolute right-3 top-3">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Posts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">추천 게시글</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <span className="text-green-600 font-medium text-sm hover:text-green-700">
                      자세히 보기 →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">카테고리별 찾아보기</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "전체" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            전체 게시글 ({filteredPosts.length}개)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <span className="text-green-600 font-medium text-sm hover:text-green-700">
                      자세히 보기 →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16">
          <div className="bg-green-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              현금화 정보를 더 받아보고 싶으신가요?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              공룡페이의 최신 정보와 유용한 팁을 가장 먼저 받아보세요
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              24시간 상담받기
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
