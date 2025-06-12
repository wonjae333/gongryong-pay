import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Review {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
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
      review: "급하게 현금이 필요했는데 공룡페이에서 정말 신속하게 도움을 받았습니다. 상품권 현금화가 이렇게 간단할 줄 몰랐어요. 수수료도 합리적이고 직원분들이 매우 친절합니다.",
      amount: "25만원",
      verified: true
    },
    {
      id: 4,
      name: "정○○",
      location: "인천",
      service: "정보이용료",
      rating: 5,
      review: "공룡페이는 정말 믿을 수 있는 업체입니다. 정보이용료 현금화를 처음 해봤는데 과정이 투명하고 설명도 자세히 해주셔서 안심하고 이용했습니다. 지급률도 만족스럽네요!",
      amount: "40만원",
      verified: true
    },
    {
      id: 5,
      name: "최○○",
      location: "광주",
      service: "소액결제",
      rating: 5,
      review: "24시간 언제든지 상담 가능하다는 점이 가장 좋았어요. 새벽에 급하게 연락했는데도 친절하게 응대해주시고 빠르게 처리해주셨습니다. 공룡페이 강력 추천합니다!",
      amount: "35만원",
      verified: true
    },
    {
      id: 6,
      name: "강○○",
      location: "대전",
      service: "신용카드",
      rating: 5,
      review: "여러 업체를 비교해본 결과 공룡페이가 가장 좋았습니다. 수수료 투명하고, 처리 속도 빠르고, 무엇보다 안전하게 거래할 수 있어서 만족합니다. 주변에도 추천하고 있어요.",
      amount: "60만원",
      verified: true
    },
    {
      id: 7,
      name: "윤○○",
      location: "울산",
      service: "상품권",
      rating: 4,
      review: "상품권 현금화 서비스 정말 편리해요. 온라인으로 간단하게 신청하고 빠르게 입금받을 수 있어서 좋습니다. 다만 처음이라 조금 긴장됐는데 직원분이 친절하게 안내해주셔서 감사했어요.",
      amount: "20만원",
      verified: true
    },
    {
      id: 8,
      name: "장○○",
      location: "청주",
      service: "정보이용료",
      rating: 5,
      review: "공룡페이는 정말 전문적인 업체라는 느낌을 받았습니다. 정보이용료 현금화 과정에서 발생할 수 있는 모든 궁금증을 사전에 설명해주시고, 투명한 거래로 신뢰가 갔어요.",
      amount: "45만원",
      verified: true
    },
    {
      id: 9,
      name: "임○○",
      location: "천안",
      service: "소액결제",
      rating: 5,
      review: "처음에는 걱정이 많았는데 공룡페이 이용하면서 모든 걱정이 사라졌어요. 정말 3분 만에 모든 절차가 완료되고 바로 입금받았습니다. 이렇게 빠를 줄 몰랐어요!",
      amount: "28만원",
      verified: true
    },
    {
      id: 10,
      name: "한○○",
      location: "포항",
      service: "신용카드",
      rating: 4,
      review: "신용카드 현금화 서비스 만족스럽게 이용했습니다. 지급률도 좋고 처리 과정이 안전해서 믿고 맡길 수 있었어요. 고객 서비스도 훌륭하고 추천하고 싶은 업체입니다.",
      amount: "55만원",
      verified: true
    },
    {
      id: 11,
      name: "오○○",
      location: "제주",
      service: "상품권",
      rating: 5,
      review: "제주도에 살면서도 공룡페이 서비스를 이용할 수 있어서 정말 편리했어요. 거리에 상관없이 빠르고 안전하게 상품권 현금화 서비스를 받을 수 있어서 만족합니다.",
      amount: "32만원",
      verified: true
    },
    {
      id: 12,
      name: "신○○",
      location: "수원",
      service: "정보이용료",
      rating: 5,
      review: "공룡페이는 정말 고객 중심적인 서비스를 제공하는 것 같아요. 정보이용료 현금화 과정에서 궁금한 점들을 하나하나 친절하게 설명해주시고, 안전한 거래를 위해 노력하는 모습이 인상적이었습니다.",
      amount: "38만원",
      verified: true
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const serviceMatch = selectedService === "all" || review.service === selectedService;
    const ratingMatch = selectedRating === "all" || review.rating.toString() === selectedRating;
    return serviceMatch && ratingMatch;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalAmount = reviews.reduce((sum, review) => {
    return sum + Number.parseInt(review.amount.replace(/[^0-9]/g, ""));
  }, 0);

  const serviceStats = [
    { service: "소액결제", count: reviews.filter(r => r.service === "소액결제").length },
    { service: "신용카드", count: reviews.filter(r => r.service === "신용카드").length },
    { service: "상품권", count: reviews.filter(r => r.service === "상품권").length },
    { service: "정보이용료", count: reviews.filter(r => r.service === "정보이용료").length }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={`star-${index}`} className={`text-lg ${index < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">고객 후기</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            공룡페이를 이용한 고객님들의 생생한 후기를 확인해보세요
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">{reviews.length}+</div>
              <div className="opacity-90">만족한 고객</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{averageRating.toFixed(1)}</div>
              <div className="opacity-90">평균 평점</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{Math.round(totalAmount / 10000)}억+</div>
              <div className="opacity-90">누적 거래액</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">서비스별 필터</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">전체 서비스</option>
                <option value="소액결제">소액결제 현금화</option>
                <option value="신용카드">신용카드 현금화</option>
                <option value="상품권">상품권 현금화</option>
                <option value="정보이용료">정보이용료 현금화</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">평점별 필터</label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">전체 평점</option>
                <option value="5">⭐⭐⭐⭐⭐ (5점)</option>
                <option value="4">⭐⭐⭐⭐ (4점 이상)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Service Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {serviceStats.map((stat) => (
            <div key={stat.service} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-2xl font-bold text-green-600">{stat.count}</div>
              <div className="text-gray-600 text-sm">{stat.service}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">{review.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </div>
                {review.verified && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    ✓ 인증
                  </span>
                )}
              </div>

              <div className="mb-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-2">
                  {review.service} 현금화
                </span>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                  {review.amount}
                </span>
              </div>

              <div className="mb-3">
                {renderStars(review.rating)}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            지금 바로 공룡페이를 경험해보세요
          </h2>
          <p className="text-lg opacity-90 mb-6">
            수많은 고객님들이 만족한 빠르고 안전한 현금화 서비스
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            지금 바로 상담받기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
