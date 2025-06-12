import type React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            개인정보처리방침 📄
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            공룡페이는 고객님의 개인정보를 소중히 여기며, 개인정보보호법에 따라 투명하고 안전하게 관리합니다.
            개인정보 처리에 관한 상세한 내용을 확인해주세요.
          </p>
          <div className="text-sm text-gray-500">
            시행일자: 2024년 1월 1일 | 최종 수정일: 2024년 12월 1일
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Table of Contents */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 목차</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#section-1" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  1. 개인정보의 처리 목적
                </a>
                <a href="#section-2" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  2. 개인정보의 처리 및 보유기간
                </a>
                <a href="#section-3" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  3. 개인정보의 제3자 제공
                </a>
                <a href="#section-4" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  4. 개인정보 처리의 위탁
                </a>
                <a href="#section-5" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  5. 정보주체의 권리·의무
                </a>
              </div>
              <div className="space-y-2">
                <a href="#section-6" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  6. 처리하는 개인정보 항목
                </a>
                <a href="#section-7" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  7. 개인정보의 파기
                </a>
                <a href="#section-8" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  8. 개인정보 보호책임자
                </a>
                <a href="#section-9" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  9. 개인정보 처리방침 변경
                </a>
                <a href="#section-10" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  10. 권익침해 구제방법
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section id="section-1" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1️⃣ 개인정보의 처리 목적</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                공룡페이(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리합니다.
                처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🏪 현금화 서비스 제공</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>소액결제, 정보이용료, 신용카드, 상품권, 콘텐츠이용료 현금화 서비스 제공</li>
                    <li>본인확인, 신원확인, 가입의사 확인, 연령확인</li>
                    <li>서비스 이용료 정산 및 요금결제, 채권추심</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📞 고객상담 및 서비스 개선</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>고객상담, 불만처리, 공지사항 전달</li>
                    <li>서비스 개선을 위한 의견수렴, 분쟁조정을 위한 기록보존</li>
                    <li>이벤트 및 광고성 정보 제공 및 참여기회 제공</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🔒 법령준수 및 보안</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>관계법령에서 정한 의무사항 이행</li>
                    <li>부정이용 방지 및 비인가 사용방지</li>
                    <li>통계작성, 학술연구, 시장조사</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2️⃣ 개인정보의 처리 및 보유기간</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
                동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">처리목적</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">개인정보 항목</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">보유기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">현금화 서비스 제공</td>
                      <td className="border border-gray-300 px-4 py-3">성명, 휴대폰번호, 계좌정보</td>
                      <td className="border border-gray-300 px-4 py-3">거래 완료 후 30일</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">고객상담</td>
                      <td className="border border-gray-300 px-4 py-3">성명, 연락처, 상담내용</td>
                      <td className="border border-gray-300 px-4 py-3">상담 완료 후 1년</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">법령준수</td>
                      <td className="border border-gray-300 px-4 py-3">거래기록, 접속로그</td>
                      <td className="border border-gray-300 px-4 py-3">전자상거래법에 따라 5년</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">부정이용 방지</td>
                      <td className="border border-gray-300 px-4 py-3">IP주소, 접속기록</td>
                      <td className="border border-gray-300 px-4 py-3">수집일로부터 6개월</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 font-semibold">⚠️ 보유기간 예외사항</p>
                <ul className="list-disc list-inside text-yellow-700 mt-2 space-y-1">
                  <li>관계법령 위반에 따른 수사·조사 등이 진행중인 경우: 해당 수사·조사 종료시까지</li>
                  <li>서비스 이용에 따른 채권·채무관계 잔존시: 해당 채권·채무관계 정산시까지</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3️⃣ 개인정보의 제3자 제공</h2>
            <div className="prose max-w-none">
              <div className="p-6 bg-red-50 border border-red-200 rounded-lg mb-6">
                <p className="text-red-800 font-semibold text-lg mb-2">🚫 원칙적 제공 금지</p>
                <p className="text-red-700">
                  회사는 정보주체의 개인정보를 개인정보의 처리 목적으로 명시한 범위 내에서만 처리하며,
                  정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 제3자 제공 현황</h3>
              <p className="text-gray-700 mb-4">현재 회사는 다음과 같은 경우에만 개인정보를 제3자에게 제공하고 있습니다:</p>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🏦 금융기관 (입금 처리)</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>제공받는 자:</strong> 각 은행 및 금융기관</li>
                    <li><strong>제공 목적:</strong> 현금화 대금 입금 처리</li>
                    <li><strong>제공 항목:</strong> 성명, 계좌번호</li>
                    <li><strong>보유기간:</strong> 입금 처리 후 즉시 삭제</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🏛️ 수사기관 (법령에 의한 요청)</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>제공받는 자:</strong> 경찰청, 검찰청 등 수사기관</li>
                    <li><strong>제공 목적:</strong> 수사협조, 법령준수</li>
                    <li><strong>제공 항목:</strong> 수사기관 요청 최소 범위</li>
                    <li><strong>보유기간:</strong> 수사 목적 달성시까지</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4️⃣ 개인정보 처리의 위탁</h2>
            <div className="prose max-w-none">
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg mb-6">
                <p className="text-green-800 font-semibold text-lg mb-2">✅ 현재 위탁 현황</p>
                <p className="text-green-700">
                  회사는 현재 개인정보 처리업무를 외부에 위탁하고 있지 않습니다.
                  향후 처리업무 위탁이 필요한 경우, 관련 법령에 따라 위탁계약 체결 및 관리·감독을 철저히 하겠습니다.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">📝 위탁 시 준수사항</h3>
              <p className="text-gray-700 mb-4">향후 개인정보 처리 위탁이 필요한 경우 다음 사항을 준수합니다:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">🔒 위탁계약 필수조항</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>개인정보 보호 관련 법령 준수</li>
                    <li>개인정보 처리 목적 외 이용금지</li>
                    <li>기술적·관리적 보호조치</li>
                    <li>재위탁 제한</li>
                    <li>수탁자 책임에 관한 사항</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">👀 관리·감독</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>정기적 위탁업체 점검</li>
                    <li>개인정보 처리 현황 모니터링</li>
                    <li>보안사고 발생 시 즉시 보고</li>
                    <li>위탁계약 종료 시 정보 반납·삭제</li>
                    <li>교육 및 기술지원</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5️⃣ 정보주체의 권리·의무 및 행사방법</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">📋 정보주체의 권리</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800">👀 열람권</h4>
                      <p className="text-sm text-gray-700">본인의 개인정보 처리현황을 확인할 권리</p>
                    </div>
                    <div className="p-3 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800">✏️ 정정·삭제권</h4>
                      <p className="text-sm text-gray-700">잘못된 정보의 수정이나 삭제를 요구할 권리</p>
                    </div>
                    <div className="p-3 border border-orange-200 rounded-lg">
                      <h4 className="font-semibold text-orange-800">⏸️ 처리정지권</h4>
                      <p className="text-sm text-gray-700">개인정보 처리를 중단하도록 요구할 권리</p>
                    </div>
                    <div className="p-3 border border-purple-200 rounded-lg">
                      <h4 className="font-semibold text-purple-800">💰 손해배상청구권</h4>
                      <p className="text-sm text-gray-700">개인정보 침해로 인한 손해배상을 청구할 권리</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">📞 권리 행사 방법</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">연락처</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>📞 전화: 010-0000-0000</li>
                        <li>📧 이메일: privacy@gongryongticket.com</li>
                        <li>📝 서면: 개인정보보호책임자 앞</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">처리절차</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>1. 권리행사 신청 접수</li>
                        <li>2. 본인확인 (신분증 등)</li>
                        <li>3. 처리결과 통지 (10일 이내)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ 권리행사 제한사유</h4>
                <ul className="list-disc list-inside text-yellow-700 text-sm space-y-1">
                  <li>법령에서 열람을 제한하거나 금지한 경우</li>
                  <li>다른 사람의 생명·신체를 해할 우려가 있는 경우</li>
                  <li>다른 사람의 개인정보 등 권리를 침해할 우려가 있는 경우</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6️⃣ 처리하는 개인정보 항목</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집·처리하고 있습니다.
              </p>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ 필수 수집 항목</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">👤 개인식별정보</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>성명 (본명)</li>
                        <li>휴대폰번호</li>
                        <li>생년월일 (성인인증용)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">💳 결제정보</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>은행명, 계좌번호 (입금용)</li>
                        <li>결제수단 정보</li>
                        <li>거래금액 및 내역</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 자동 수집 항목</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">🌐 접속정보</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>IP주소, 접속시간</li>
                        <li>브라우저 종류 및 버전</li>
                        <li>운영체제 정보</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">📊 서비스 이용기록</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>서비스 이용 내역</li>
                        <li>접속 페이지 정보</li>
                        <li>이용시간 및 빈도</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ 개인정보 수집 방법</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    <li>홈페이지, 서면양식, 전화, 팩스를 통한 직접 수집</li>
                    <li>상담 및 서비스 신청 과정에서 수집</li>
                    <li>서비스 이용 과정에서 자동 생성·수집</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Remaining sections continue... */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">🛡️ 개인정보보호 관련 문의</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              개인정보 처리에 관한 문의사항이 있으시면 언제든지 연락해주세요.
              신속하고 성실하게 답변드리겠습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 개인정보 문의
              </Link>
              <Link
                to="/safety"
                className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                🔒 안전거래 안내
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
