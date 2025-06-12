import type React from "react";
import { Link } from "react-router-dom";

const GiftCardService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">🎁</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              상품권 현금화: <span className="text-orange-600">각종 상품권을 높은 지급률로 현금전환</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              문화상품권, 해피머니, 도서문화상품권, 스마트문상, 틴캐시 등 각종 상품권을 안전하고 빠르게 현금화. 복잡한 절차 없이 3분 안에 신속하게 현금화 해드립니다.
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
                상품권 즉시 상담
              </a>
              <Link
                to="/how-to-use"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
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
              공룡페이 상품권 현금화 핵심 장점
            </h2>
            <p className="text-xl text-gray-600">
              업계 최고 수준의 서비스로 안전하고 빠른 상품권 현금화를 경험하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">업계 최고 지급률</h3>
              <p className="text-gray-600">경쟁 업체 대비 높은 지급률로 고객님의 만족도를 최우선으로 합니다</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">초고속 처리 (3분)</h3>
              <p className="text-gray-600">접수부터 입금까지 평균 3분 내 처리 완료</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">모든 상품권 지원</h3>
              <p className="text-gray-600">문화상품권, 해피머니, 도서문화상품권 등 모든 상품권</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-xl">
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
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1단계: 상담 신청 및 상품권 확인</h3>
              <p className="text-gray-600">24시간 상담 가능, 보유 상품권 종류 및 금액 확인</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2단계: 상품권 정보 전송</h3>
              <p className="text-gray-600">안전한 방법으로 상품권 정보 전송 및 확인</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3단계: 3분 내 계좌 입금 완료</h3>
              <p className="text-gray-600">확인 완료 즉시 고객님 계좌로 현금 입금 완료</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              지원하는 상품권 종류
            </h2>
            <p className="text-xl text-gray-600">
              다양한 상품권을 현금화할 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">문화상품권</h3>
              <p className="text-gray-600">온라인/오프라인 문화상품권 모두 가능</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">😊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">해피머니</h3>
              <p className="text-gray-600">해피머니 상품권 즉시 현금화</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">도서문화상품권</h3>
              <p className="text-gray-600">도서구매용 상품권도 현금화 가능</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">스마트문상</h3>
              <p className="text-gray-600">모바일 문화상품권 현금화</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">틴캐시</h3>
              <p className="text-gray-600">틴캐시 상품권 즉시 현금화</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl shadow-lg text-center">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">기타 상품권</h3>
              <p className="text-gray-600">다양한 상품권 종류 지원</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                상품권 현금화 서비스 상세 정보
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎁</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">지원 상품권</h3>
                    <p className="text-gray-600">문화상품권, 해피머니, 도서문화상품권, 스마트문상, 틴캐시</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">💵</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">최소 금액</h3>
                    <p className="text-gray-600">1만원부터 현금화 가능</p>
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
              <div className="bg-orange-50 p-8 rounded-xl">
                <div className="text-8xl mb-6">🎁</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  상품권만 있으면 OK!
                </h3>
                <p className="text-gray-600 mb-6">
                  복잡한 서류나 절차 없이<br/>
                  상품권만으로 간편하게<br/>
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            지금 바로 상품권 현금화 상담받으세요! 🦕
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            <strong>3분 내 즉시 처리, 안전하고 빠른 서비스</strong><br/>
            모든 종류의 상품권 현금화 가능합니다
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
            상품권 즉시 상담받기
          </a>
        </div>
      </section>
    </div>
  );
};

export default GiftCardService;
