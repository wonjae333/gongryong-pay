import type React from "react";
import { Link } from "react-router-dom";

const CreditCardService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">💳</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              신용카드 현금화: <span className="text-purple-600">신용카드 한도로 급전 마련</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              신용카드 결제 한도를 활용한 안전하고 빠른 현금화 서비스. 삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC카드 등 모든 카드사 지원으로 복잡한 절차 없이 3분 안에 신속하게 현금화 해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://open.kakao.com/o/s9GOcnBh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.485 3 2 6.824 2 11.5c0 2.895 1.582 5.449 4 6.973V21l2.268-1.134C9.424 20.612 10.682 21 12 21c5.515 0 10-3.824 10-8.5S17.515 3 12 3z"/>
                </svg>
                신용카드 즉시 상담
              </a>
              <Link
                to="/how-to-use"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                이용 방법
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              공룡페이 신용카드 현금화 핵심 장점
            </h2>
            <p className="text-xl text-gray-600">
              업계 최고 수준의 서비스로 안전하고 빠른 신용카드 현금화를 경험하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">업계 최고 지급률</h3>
              <p className="text-gray-600">경쟁 업체 대비 높은 지급률로 고객님의 만족도를 최우선으로 합니다</p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">초고속 처리 (3분)</h3>
              <p className="text-gray-600">접수부터 입금까지 평균 3분 내 처리 완료</p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="text-6xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">전 카드사 지원</h3>
              <p className="text-gray-600">삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC카드 등 모든 카드</p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">안전 보장 거래</h3>
              <p className="text-gray-600">정식 등록 업체로 개인정보 보호 완벽 보장</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              간단한 3단계 프로세스
            </h2>
            <p className="text-xl text-gray-600">
              복잡한 절차 없이 3분 안에 신속하게 처리해드립니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1단계: 상담 신청 및 한도 확인</h3>
              <p className="text-gray-600">24시간 상담 가능, 신용카드 한도 확인 및 맞춤 상담</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2단계: 본인 확인 및 결제 진행</h3>
              <p className="text-gray-600">간단한 본인확인 후 안전한 신용카드 결제 진행</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3단계: 3분 내 계좌 입금 완료</h3>
              <p className="text-gray-600">처리 완료 즉시 고객님 계좌로 현금 입금 완료</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                신용카드 현금화 서비스 상세 정보
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💳</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">지원 카드사</h3>
                    <p className="text-gray-600">삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC카드 등 모든 카드사</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">💵</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">이용 한도</h3>
                    <p className="text-gray-600">최대 100만원까지 이용 가능</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">처리 시간</h3>
                    <p className="text-gray-600">평균 3분 내 처리 완료</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="text-8xl mb-6">💳</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  신용카드만 있으면 OK!
                </h3>
                <p className="text-gray-600 mb-6">
                  복잡한 서류나 절차 없이<br/>
                  신용카드만으로 간편하게<br/>
                  현금화가 가능합니다
                </p>
                <a
                  href="https://open.kakao.com/o/s9GOcnBh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.485 3 2 6.824 2 11.5c0 2.895 1.582 5.449 4 6.973V21l2.268-1.134C9.424 20.612 10.682 21 12 21c5.515 0 10-3.824 10-8.5S17.515 3 12 3z"/>
                  </svg>
                  바로 상담받기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Types Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              지원하는 카드사
            </h2>
            <p className="text-xl text-gray-600">
              모든 카드사의 신용카드로 현금화가 가능합니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900">삼성카드</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900">신한카드</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900">현대카드</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900">KB국민카드</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900">롯데카드</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900">우리카드</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900">하나카드</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900">BC카드</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            지금 바로 신용카드 현금화 상담받으세요! 🦕
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            <strong>3분 내 즉시 처리, 안전하고 빠른 서비스</strong><br/>
            모든 카드사 신용카드 현금화 가능합니다
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
            신용카드 즉시 상담받기
          </a>
        </div>
      </section>
    </div>
  );
};

export default CreditCardService;
