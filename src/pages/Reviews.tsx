import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Review {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  review: string;
  amount: string;
  verified: boolean;
}

const Reviews: React.FC = () => {
  const [selectedService, setSelectedService] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const reviews: Review[] = [
    {
      id: 1,
      name: "김○○",
      location: "서울",
      service: "소액결제",
      rating: 5,
      date: "2024-12-01",
      review: "처음 이용해봤는데 정말 빠르고 안전했어요! 상담부터 입금까지 정말 3분 만에 완료됐습니다. 담당자분도 친절하게 설명해주셔서 믿고 이용할 수 있었어요. 다음에도 필요하면 공룡페이 이용할 예정입니다.",
      amount: "30만원",
      verified: true
    },
    {
      id: 2,
      name: "박○○",
      location: "부산",
      service: "신용카드",
      rating: 5,
      date: "2024-11-28",
      review: "다른 업체들과 비교해봤는데 공룡페이가 지급률이 가장 높았어요. 무엇보다 정식 등록업체라는 점에서 안심이 되었습니다. 절차도 간단하고 빠르게 처리해주셔서 만족합니다.",
      amount: "50만원",
      verified: true
    },
    {
      id: 3,
      name: "이○○",
      location: "대구",
      service: "상품권",
      rating: 5,
      date: "2024-11-25",
      review: "문화상품권 현금화 급하게 필요했는데, 24시간 상담이라고 해서 새벽에 연락드렸더니 정말 친절하게 도움주셨어요. 덕분에 급한 일 해결할 수 있었습니다. 고마워요!",
      amount: "20만원",
      verified: true
    },
    {
      id: 4,
      name: "정○○",
      location: "인천",
      service: "정보이용료",
      rating: 5,
      date: "2024-11-20",
      review: "게임 아이템으로 현금화가 가능하다는 걸 처음 알았는데, 생각보다 간단하고 빨랐어요. 정보이용료와 소액결제 둘 다 이용할 수 있어서 필요한 만큼 현금화할 수 있었습니다.",
      amount: "40만원",
      verified: true
    },
    {
      id: 5,
      name: "최○○",
      location: "광주",
      service: "소액결제",
      rating: 5,
      date: "2024-11-18",
      review: "공룡페이 정말 추천합니다! 처리 속도가 빠르고 지급률도 만족스러워요. 상담사분이 처음부터 끝까지 친절하게 안내해주셔서 안심하고 이용할 수 있었습니다.",
      amount: "45만원",
      verified: true
    },
    {
      id: 6,
      name: "강○○",
      location: "대전",
      service: "신용카드",
      rating: 5,
      date: "2024-11-15",
      review: "급전이 필요해서 여러 업체를 알아봤는데, 공룡페이가 가장 신뢰할 만했어요. 정식 사업자등록증도 보여주시고, 모든 과정이 투명하게 진행되어서 좋았습니다.",
      amount: "60만원",
      verified: true
    },
    {
      id: 7,
      name: "윤○○",
      location: "울산",
      service: "상품권",
      rating: 4,
      date: "2024-11-12",
      review: "해피머니 상품권 현금화 이용했는데 만족합니다. 지급률이 생각보다 높아서 좋았어요. 다음에 또 이용할 의향 있습니다.",
      amount: "15만원",
      verified: true
    },
    {
      id: 8,
      name: "송○○",
      location: "창원",
      service: "정보이용료",
      rating: 5,
      date: "2024-11-10",
      review: "앱 내 결제로 현금화가 된다는 걸 몰랐는데, 공룡페이에서 자세히 설명해주셔서 이해할 수 있었어요. 절차도 간단하고 빠르게 처리되어서 만족합니다.",
      amount: "35만원",
      verified: true
    },
    {
      id: 9,
      name: "임○○",
      location: "수원",
      service: "소액결제",
      rating: 5,
      date: "2024-11-08",
      review: "LGU+ 소액결제 이용했는데, 통신사 상관없이 빠르게 처리해주시네요. 24시간 상담 가능하다고 해서 늦은 시간에도 도움받을 수 있어서 좋았습니다.",
      amount: "25만원",
      verified: true
    },
    {
      id: 10,
      name: "한○○",
      location: "성남",
      service: "신용카드",
      rating: 5,
      date: "2024-11-05",
      review: "처음에는 걱정했는데 정말 안전하고 빨랐어요. 상담할 때 궁금한 점들 다 친절하게 답변해주셔서 믿고 이용할 수 있었습니다. 업계 최고 지급률이라는 말이 맞는 것 같아요.",
      amount: "80만원",
      verified: true
    },
    {
      id: 11,
      name: "오○○",
      location: "안양",
      service: "상품권",
      rating: 4,
      date: "2024-11-02",
      review: "틴캐시 상품권 현금화 했는데 생각보다 지급률이 괜찮았어요. 처리도 빠르고 안전해서 만족합니다.",
      amount: "12만원",
      verified: true
    },
    {
      id: 12,
      name: "신○○",
      location: "천안",
      service: "정보이용료",
      rating: 5,
      date: "2024-10-30",
      review: "게임 아이템 구매를 통한 현금화, 처음 해봤는데 정말 신기하고 편리했어요. 공룡페이 덕분에 급한 자금 문제 해결할 수 있었습니다. 감사합니다!",
      amount: "55만원",
      verified: true
    }
  ];

  const serviceOptions = [
    { value: "all", label: "전체 서비스", icon: "🏢" },
    { value: "소액결제", label: "소액결제", icon: "📱" },
    { value: "정보이용료", label: "정보이용료", icon: "🎮" },
    { value: "신용카드", label: "신용카드", icon: "💳" },
    { value: "상품권", label: "상품권", icon: "🎁" }
  ];

  const ratingOptions = [
    { value: "all", label: "전체 평점" },
    { value: "5", label: "5점만" },
    { value: "4", label: "4점 이상" }
  ];

  const filteredReviews = reviews.filter(review => {
    const serviceMatch = selectedService === "all" || review.service === selectedService;
    const ratingMatch = selectedRating === "all" ||
      (selectedRating === "5" && review.rating === 5) ||
      (selectedRating === "4" && review.rating >= 4);
    return serviceMatch && ratingMatch;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const renderStars = (rating: number) => {
    return [1, 2, 3, 4, 5].map((starNumber) => (
      <span key={starNumber} className={`text-xl ${starNumber <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">⭐</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              공룡페이 <span className="text-yellow-600">고객 후기</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              실제 공룡페이를 이용하신 고객님들의 솔직한 후기입니다.
              안전하고 빠른 서비스를 경험하신 분들의 생생한 이야기를 확인해보세요.
            </p>

            {/* Rating Summary */}
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-gray-600">
                총 <strong>{totalReviews}개</strong>의 후기
              </p>
            </div>

            <a
              href="https://open.kakao.com/o/s9GOcnBh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.485 3 2 6.824 2 11.5c0 2.895 1.582 5.449 4 6.973V21l2.268-1.134C9.424 20.612 10.682 21 12 21c5.515 0 10-3.824 10-8.5S17.515 3 12 3z"/>
              </svg>
              나도 후기 남기러 가기
            </a>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              후기 필터링
            </h2>
            <p className="text-lg text-gray-600">
              원하는 서비스나 평점별로 후기를 확인하세요
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Service Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">서비스 종류</label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedService(option.value)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedService === option.value
                        ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                        : "border-gray-300 hover:border-yellow-300"
                    }`}
                  >
                    <span className="mr-2">{option.icon}</span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">평점</label>
              <div className="flex gap-2">
                {ratingOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedRating(option.value)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedRating === option.value
                        ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                        : "border-gray-300 hover:border-yellow-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              총 <strong>{filteredReviews.length}개</strong>의 후기가 있습니다
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">{review.name}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      ✓ 인증
                    </span>
                  )}
                </div>

                {/* Rating and Service */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {serviceOptions.find(s => s.value === review.service)?.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700">{review.service}</span>
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{review.review}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-4">
                  <span>이용금액: {review.amount}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                선택하신 조건의 후기가 없습니다
              </h3>
              <p className="text-gray-600">
                다른 필터 조건을 선택해보세요
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              고객 만족도 통계
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <p className="text-gray-600">고객 만족도</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3분</div>
              <p className="text-gray-600">평균 처리 시간</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24시간</div>
              <p className="text-gray-600">상담 서비스</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <p className="text-gray-600">누적 고객 수</p>
            </div>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              공룡페이를 이용해보셨나요?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              소중한 후기를 남겨주시면 다른 고객님들께 큰 도움이 됩니다
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
                후기 남기기
              </a>
              <Link
                to="/how-to-use"
                className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                이용 방법 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            당신도 만족스러운 경험을 해보세요! 🦕
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            <strong>수많은 고객들이 만족한 공룡페이</strong><br/>
            안전하고 빠른 현금화 서비스를 지금 바로 경험해보세요
          </p>
          <a
            href="https://open.kakao.com/o/s9GOcnBh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.485 3 2 6.824 2 11.5c0 2.895 1.582 5.449 4 6.973V21l2.268-1.134C9.424 20.612 10.682 21 12 21c5.515 0 10-3.824 10-8.5S17.515 3 12 3z"/>
            </svg>
            지금 바로 상담받기
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
