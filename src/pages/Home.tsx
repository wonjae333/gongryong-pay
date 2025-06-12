import type React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="flex items-center gap-10 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-green-50 border-6 border-green-200 shadow-2xl">
                    <img
                      src="/dinosaur-mascot-hero.png"
                      alt="공룡페이 마스코트"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                    <span className="text-green-600">공룡페이</span> 🦕
                    <br />
                    소액결제 현금화 전문업체
                  </h1>
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                <strong className="text-green-600">3분 내 빠른 현금화!</strong> 급한 자금 문제를 안전하고 신속하게 해결하세요
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                소액결제현금화, 정보이용료현금화(콘텐츠이용료현금화), 신용카드현금화까지 모든 현금화 서비스를 한 번에! 24시간 전문 상담진이 대기중입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://open.kakao.com/o/s9GOcnBh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.485 3 2 6.824 2 11.5c0 2.895 1.582 5.449 4 6.973V21l2.268-1.134C9.424 20.612 10.682 21 12 21c5.515 0 10-3.824 10-8.5S17.515 3 12 3z"/>
                  </svg>
                  카카오톡 즉시상담
                </a>
                <Link
                  to="/how-to-use"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  이용 방법
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              소액결제현금화, 정보이용료현금화(콘텐츠이용료현금화), 신용카드현금화
            </h2>
            <p className="text-xl text-gray-600">
              복잡한 절차 없이 3분 안에 신속하게 현금화 해드립니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              to="/services/micropayment"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">소액결제 현금화</h3>
                <p className="text-gray-600">휴대폰 소액결제 한도를 현금으로 전환. SKT, KT, LGU+ 모든 통신사 지원</p>
              </div>
            </Link>

            <Link
              to="/services/information-fee"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">정보이용료 현금화<br/><span className="text-sm text-gray-500">(콘텐츠이용료 현금화)</span></h3>
                <p className="text-gray-600">게임 아이템, 앱 내 결제 등 통신사 정보이용료 한도를 활용한 현금화 서비스</p>
              </div>
            </Link>

            <Link
              to="/services/credit-card"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-200"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">💳</div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">신용카드 현금화</h3>
                <p className="text-gray-600">신용카드 결제 한도를 활용한 안전하고 빠른 현금화 서비스</p>
              </div>
            </Link>

            <Link
              to="/services/gift-card"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-orange-200"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3">상품권 현금화</h3>
                <p className="text-gray-600">문화상품권, 해피머니 등 각종 상품권을 안전하게 현금화</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              왜 공룡페이를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600">
              업계 최고 수준의 서비스로 고객만족을 최우선으로 합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-8xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3분 내 즉시 처리</h3>
              <p className="text-gray-600 leading-relaxed">
                상담부터 입금까지 평균 3분! 급한 자금이 필요할 때 즉시 해결
              </p>
            </div>

            <div className="text-center">
              <div className="text-8xl mb-6">💰</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">안전한 거래</h3>
              <p className="text-gray-600 leading-relaxed">
                정식 등록 업체로 개인정보 보호 및 안전한 거래 완벽 보장
              </p>
            </div>

            <div className="text-center">
              <div className="text-8xl mb-6">🔒</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">100% 안전 거래</h3>
              <p className="text-gray-600 leading-relaxed">
                정식 등록 업체로 개인정보 보호 및 안전한 거래 완벽 보장
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
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
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1단계: 상담 신청</h3>
              <p className="text-gray-600">24시간 상담 가능, 한도 확인 및 맞춤 상담</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2단계: 본인 확인</h3>
              <p className="text-gray-600">간단한 본인확인 및 안전한 결제 진행</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3단계: 즉시 입금</h3>
              <p className="text-gray-600">3분 내 고객님 계좌로 현금 입금 완료</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              실제 고객 후기
            </h2>
            <p className="text-xl text-gray-600">
              공룡페이를 이용하신 고객님들의 솔직한 후기입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "소액결제 현금화 처음 이용했는데 정말 빠르고 안전했어요. 3분 만에 입금 완료!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">김○○</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">김○○님 (서울)</p>
                  <p className="text-sm text-gray-600">소액결제 이용</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "다른 업체보다 지급률이 높아서 만족합니다. 담당자분도 친절하고 신뢰가 갑니다."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">박○○</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">박○○님 (부산)</p>
                  <p className="text-sm text-gray-600">신용카드 이용</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "24시간 상담 가능해서 새벽에도 처리해주셨어요. 정말 고마웠습니다!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">이○○</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">이○○님 (대구)</p>
                  <p className="text-sm text-gray-600">상품권 이용</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            지금 바로 상담받으세요! 🦕
          </h2>
          <p className="text-xl text-green-100 mb-4 max-w-3xl mx-auto">
            <strong>3분 내 즉시 처리, 안전하고 빠른 서비스</strong>
          </p>
          <p className="text-lg text-green-100 mb-8 max-w-3xl mx-auto">
            24시간 전문 상담진이 대기중입니다. 급한 자금이 필요하시면 지금 바로 연락주세요!
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
              카카오톡 즉시상담
            </a>
            <Link
              to="/how-to-use"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              이용 방법
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
