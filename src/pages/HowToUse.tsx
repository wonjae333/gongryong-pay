import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HowToUse: React.FC = () => {
  const [selectedService, setSelectedService] = useState("micropayment");

  const services = {
    micropayment: {
      title: "소액결제 현금화",
      icon: "📱",
      color: "green",
      steps: [
        {
          number: 1,
          title: "카카오톡 상담 신청",
          description: "24시간 상담 가능한 카카오톡 채널로 연락주세요",
          details: "휴대폰 번호, 통신사, 현재 소액결제 한도를 미리 확인해주세요"
        },
        {
          number: 2,
          title: "본인확인 및 한도 확인",
          description: "간단한 본인확인 후 현재 이용 가능한 한도를 확인합니다",
          details: "신분증과 본인 명의 휴대폰이 필요합니다"
        },
        {
          number: 3,
          title: "결제 진행",
          description: "안전한 결제 시스템을 통해 소액결제를 진행합니다",
          details: "결제 확인 후 즉시 현금 입금이 처리됩니다"
        }
      ]
    },
    information: {
      title: "정보이용료 현금화 (콘텐츠이용료)",
      icon: "🎮",
      color: "blue",
      steps: [
        {
          number: 1,
          title: "상담 및 한도 확인",
          description: "정보이용료 한도와 이용 가능 여부를 확인합니다",
          details: "게임 아이템, 앱 내 결제 등 다양한 방식으로 이용 가능합니다"
        },
        {
          number: 2,
          title: "결제 방식 선택",
          description: "고객님께 가장 적합한 정보이용료 결제 방식을 선택합니다",
          details: "SKT, KT, LGU+ 모든 통신사에서 이용 가능합니다"
        },
        {
          number: 3,
          title: "즉시 현금 입금",
          description: "결제 완료 즉시 고객님 계좌로 현금이 입금됩니다",
          details: "평균 3분 내 처리 완료됩니다"
        }
      ]
    },
    credit: {
      title: "신용카드 현금화",
      icon: "💳",
      color: "purple",
      steps: [
        {
          number: 1,
          title: "카드 정보 확인",
          description: "보유하신 신용카드의 종류와 한도를 확인합니다",
          details: "모든 카드사 (삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC) 지원"
        },
        {
          number: 2,
          title: "결제 진행",
          description: "안전한 PG사를 통해 신용카드 결제를 진행합니다",
          details: "본인 명의 카드만 이용 가능하며, 안전한 결제 시스템을 사용합니다"
        },
        {
          number: 3,
          title: "현금 지급",
          description: "결제 확인 후 약정된 금액을 즉시 입금해드립니다",
          details: "업계 최고 수준의 지급률로 만족스러운 서비스를 제공합니다"
        }
      ]
    },
    giftcard: {
      title: "상품권 현금화",
      icon: "🎁",
      color: "orange",
      steps: [
        {
          number: 1,
          title: "상품권 종류 확인",
          description: "보유하신 상품권의 종류와 금액을 확인합니다",
          details: "문화상품권, 해피머니, 도서문화상품권, 스마트문상, 틴캐시 등 모든 상품권"
        },
        {
          number: 2,
          title: "상품권 정보 전송",
          description: "안전한 방법으로 상품권 정보를 전송해주세요",
          details: "상품권 번호와 비밀번호를 보안이 철저한 채널로 전송합니다"
        },
        {
          number: 3,
          title: "즉시 현금 입금",
          description: "상품권 확인 후 즉시 현금으로 전환해드립니다",
          details: "상품권 종류에 따라 약간의 차이가 있을 수 있습니다"
        }
      ]
    }
  };

  const currentService = services[selectedService as keyof typeof services];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">📋</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              공룡페이 <span className="text-green-600">이용 방법</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              처음 이용하시는 분들도 쉽게 따라할 수 있는 단계별 가이드를 제공합니다.
              각 서비스별로 상세한 이용 방법을 확인하세요.
            </p>
            <a
              href="https://open.kakao.com/o/s9GOcnBh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.485 3 2 6.824 2 11.5c0 2.895 1.582 5.449 4 6.973V21l2.268-1.134C9.424 20.612 10.682 21 12 21c5.515 0 10-3.824 10-8.5S17.515 3 12 3z"/>
              </svg>
              궁금한 점이 있으시면 바로 상담
            </a>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              원하는 서비스를 선택하세요
            </h2>
            <p className="text-lg text-gray-600">
              각 서비스별 상세한 이용 방법을 확인할 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <button
              onClick={() => setSelectedService("micropayment")}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedService === "micropayment"
                  ? "border-green-500 bg-green-50 shadow-lg"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900">소액결제</h3>
            </button>

            <button
              onClick={() => setSelectedService("information")}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedService === "information"
                  ? "border-blue-500 bg-blue-50 shadow-lg"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-semibold text-gray-900">정보이용료</h3>
            </button>

            <button
              onClick={() => setSelectedService("credit")}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedService === "credit"
                  ? "border-purple-500 bg-purple-50 shadow-lg"
                  : "border-gray-200 hover:border-purple-300"
              }`}
            >
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-semibold text-gray-900">신용카드</h3>
            </button>

            <button
              onClick={() => setSelectedService("giftcard")}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedService === "giftcard"
                  ? "border-orange-500 bg-orange-50 shadow-lg"
                  : "border-gray-200 hover:border-orange-300"
              }`}
            >
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-semibold text-gray-900">상품권</h3>
            </button>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">{currentService.icon}</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentService.title} 이용 방법
            </h2>
            <p className="text-xl text-gray-600">
              3단계로 간단하게 완료되는 현금화 프로세스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentService.steps.map((step) => (
              <div key={step.number} className="bg-white rounded-xl shadow-lg p-8">
                <div className={`w-16 h-16 bg-${currentService.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {step.description}
                </p>
                <div className={`bg-${currentService.color}-50 p-4 rounded-lg`}>
                  <p className="text-sm text-gray-700">
                    <strong>참고사항:</strong> {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ⚠️ 이용 시 주의사항
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">필수 확인사항</h3>
              <ul className="space-y-2 text-red-800">
                <li>• 반드시 본인 명의의 휴대폰/카드만 이용 가능</li>
                <li>• 미성년자는 이용할 수 없습니다</li>
                <li>• 정확한 개인정보 제공 필수</li>
                <li>• 한도 소진 시 익월에 이용 가능</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">안전 이용 팁</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• 정식 등록업체인지 확인하세요</li>
                <li>• 사전에 지급률을 명확히 확인하세요</li>
                <li>• 개인정보는 안전한 채널로만 전송하세요</li>
                <li>• 이상 징후 발견 시 즉시 상담하세요</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              더 자세한 정보가 필요하신가요?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/faq"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                자주 묻는 질문
              </h3>
              <p className="text-gray-600">고객들이 가장 많이 묻는 질문들과 답변을 확인하세요</p>
            </Link>

            <Link
              to="/safety"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                안전거래 안내
              </h3>
              <p className="text-gray-600">안전하고 투명한 거래를 위한 보안 정책을 확인하세요</p>
            </Link>

            <a
              href="https://open.kakao.com/o/s9GOcnBh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                1:1 상담
              </h3>
              <p className="text-gray-600">24시간 전문 상담진이 직접 도움을 드립니다</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            아직 궁금한 점이 있으신가요? 🦕
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            <strong>3분 내 즉시 처리, 안전하고 빠른 서비스</strong><br/>
            전문 상담진이 친절하게 안내해드립니다
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
              카카오톡 상담하기
            </a>
            <Link
              to="/faq"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQ 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToUse;
