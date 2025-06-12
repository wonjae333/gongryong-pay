import type React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Need to scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-green-50 border-2 border-green-200 shadow-sm hover:scale-110 transition-transform duration-200">
                  <img
                    src="/dinosaur-mascot-logo.png"
                    alt="공룡페이 마스코트"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold text-green-600">공룡페이</span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
                  서비스 소개
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/services/micropayment" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">소액결제 현금화</Link>
                    <Link to="/services/information-fee" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">정보이용료 현금화</Link>
                    <Link to="/services/credit-card" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">신용카드 현금화</Link>
                    <Link to="/services/gift-card" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">상품권 현금화</Link>
                  </div>
                </div>
              </div>
              <Link to="/how-to-use" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">이용 방법</Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
                  고객 지원
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/reviews" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">고객 후기</Link>
                    <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">블로그</Link>
                    <Link to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">자주묻는질문(FAQ)</Link>
                    <Link to="/safety" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">안전 거래 안내</Link>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">24시 문의</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="space-y-2">
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">홈</Link>
                <div className="px-4 py-2">
                  <p className="text-gray-500 text-sm font-medium mb-2">서비스 소개</p>
                  <div className="pl-4 space-y-1">
                    <Link to="/services/micropayment" className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors">소액결제 현금화</Link>
                    <Link to="/services/information-fee" className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors">정보이용료 현금화</Link>
                    <Link to="/services/credit-card" className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors">신용카드 현금화</Link>
                    <Link to="/services/gift-card" className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors">상품권 현금화</Link>
                  </div>
                </div>
                <Link to="/how-to-use" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">이용 방법</Link>
                <div className="px-4 py-2">
                  <p className="text-gray-500 text-sm font-medium mb-2">고객 지원</p>
                  <div className="pl-4 space-y-1">
                    <Link to="/reviews" className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors">고객 후기</Link>
                    <Link to="/blog" className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors">블로그</Link>
                    <Link to="/faq" className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors">자주묻는질문(FAQ)</Link>
                    <Link to="/safety" className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors">안전 거래 안내</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {children}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">공룡페이</h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  가장 빠르고 안전한 현금화 서비스. 공룡페이는 고객님의 긴급한 자금 문제를 신속하고 간편하게 해결해 드립니다. 소액결제, 정보이용료, 신용카드, 상품권 현금화 등 업계 최고 수준의 만족도를 경험하세요.
                </p>
              </div>
            </div>
            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">주요 서비스</h3>
              <ul className="space-y-3">
                <li><Link to="/services/micropayment" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">소액결제 현금화</Link></li>
                <li><Link to="/services/information-fee" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">정보이용료 현금화</Link></li>
                <li><Link to="/services/credit-card" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">신용카드 현금화</Link></li>
                <li><Link to="/services/gift-card" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">상품권 현금화</Link></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">고객지원 및 정보</h3>
              <ul className="space-y-3">
                <li><Link to="/how-to-use" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">이용 방법</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">자주 묻는 질문 (FAQ)</Link></li>
                <li><Link to="/safety" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">안전 거래 안내</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">유용한 정보 블로그</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">24시 고객센터 문의</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">개인정보처리방침</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-base">이용약관</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 md:mt-16 pt-8 md:pt-10">
            <div className="text-center">
              <p className="text-base text-gray-300 font-medium mb-4">© 2025 공룡페이 (GongryongPay). 모든 권리 보유.</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                본 사이트의 모든 콘텐츠는 저작권법의 보호를 받으며, 무단 복제 및 배포를 금지합니다. 공룡페이는 고객님의 개인정보를 안전하게 보호하며, 관련 법규를 철저히 준수합니다.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
