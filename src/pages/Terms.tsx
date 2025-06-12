import type React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            이용약관 📜
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            공룡페이 서비스 이용에 관한 제반 사항과 기타 필요한 사항을 규정합니다.
            서비스 이용 전 반드시 확인해주시기 바랍니다.
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
                <a href="#section-1" className="block text-green-600 hover:text-green-800 transition-colors">
                  1. 총칙
                </a>
                <a href="#section-2" className="block text-green-600 hover:text-green-800 transition-colors">
                  2. 서비스 제공 및 변경
                </a>
                <a href="#section-3" className="block text-green-600 hover:text-green-800 transition-colors">
                  3. 이용자의 의무
                </a>
                <a href="#section-4" className="block text-green-600 hover:text-green-800 transition-colors">
                  4. 서비스 이용료 및 결제
                </a>
                <a href="#section-5" className="block text-green-600 hover:text-green-800 transition-colors">
                  5. 계약 해지 및 서비스 이용 제한
                </a>
              </div>
              <div className="space-y-2">
                <a href="#section-6" className="block text-green-600 hover:text-green-800 transition-colors">
                  6. 손해배상 및 면책조항
                </a>
                <a href="#section-7" className="block text-green-600 hover:text-green-800 transition-colors">
                  7. 개인정보보호
                </a>
                <a href="#section-8" className="block text-green-600 hover:text-green-800 transition-colors">
                  8. 분쟁해결
                </a>
                <a href="#section-9" className="block text-green-600 hover:text-green-800 transition-colors">
                  9. 준거법 및 관할법원
                </a>
                <a href="#section-10" className="block text-green-600 hover:text-green-800 transition-colors">
                  10. 부칙
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section id="section-1" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1️⃣ 총칙</h2>
            <div className="prose max-w-none space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제1조 (목적)</h3>
                <p className="text-gray-700">
                  이 약관은 공룡페이(이하 "회사")이 제공하는 현금화 서비스(이하 "서비스")의 이용과 관련하여
                  회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제2조 (정의)</h3>
                <div className="text-gray-700">
                  <p className="mb-3">이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>"서비스"</strong>: 회사가 제공하는 소액결제, 정보이용료, 신용카드, 상품권, 콘텐츠이용료 현금화 서비스</li>
                    <li><strong>"이용자"</strong>: 회사의 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 고객</li>
                    <li><strong>"현금화"</strong>: 다양한 결제 수단이나 상품권 등을 현금으로 전환하는 서비스</li>
                    <li><strong>"지급률"</strong>: 현금화 신청 금액 대비 실제 지급되는 현금의 비율</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제3조 (약관의 효력 및 변경)</h3>
                <div className="text-gray-700">
                  <p className="mb-2">① 이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</p>
                  <p className="mb-2">② 회사는 필요시 관련법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                  <p>③ 약관이 변경되는 경우 회사는 변경사항을 시행일자 7일 전부터 공지합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2️⃣ 서비스 제공 및 변경</h2>
            <div className="prose max-w-none space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제4조 (서비스의 제공)</h3>
                <div className="text-gray-700">
                  <p className="mb-3">① 회사는 다음과 같은 서비스를 제공합니다:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">📱 소액결제 현금화</h4>
                      <p className="text-sm">휴대폰 소액결제 한도를 이용한 현금화</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">📊 정보이용료 현금화</h4>
                      <p className="text-sm">통신사 정보이용료를 활용한 현금화</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">💳 신용카드 현금화</h4>
                      <p className="text-sm">신용카드 결제 한도를 이용한 현금화</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">🎁 상품권 현금화</h4>
                      <p className="text-sm">각종 상품권의 현금 전환 서비스</p>
                    </div>
                  </div>
                  <p>② 서비스는 연중무휴 24시간 제공함을 원칙으로 하나, 시스템 점검 등의 사유로 중단될 수 있습니다.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제5조 (서비스의 변경 및 중단)</h3>
                <div className="text-gray-700">
                  <p className="mb-2">① 회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있습니다.</p>
                  <p className="mb-2">② 회사는 다음 각 호의 경우 서비스 제공을 일시적으로 중단할 수 있습니다:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>시스템 점검, 교체, 고장, 통신 두절</li>
                    <li>국가비상사태, 정전, 불가항력적 사유</li>
                    <li>기타 정상적인 서비스 제공이 불가능한 경우</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3️⃣ 이용자의 의무</h2>
            <div className="prose max-w-none space-y-6">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제6조 (이용자의 의무)</h3>
                <div className="text-gray-700">
                  <p className="mb-3">① 이용자는 다음 행위를 하여서는 안 됩니다:</p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
                    <h4 className="font-semibold text-red-800 mb-2">🚫 금지 행위</h4>
                    <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                      <li>타인의 정보를 도용하거나 허위 정보를 제공하는 행위</li>
                      <li>회사 서비스의 정보를 이용하여 얻은 정보를 무단으로 복제, 유통, 조작하는 행위</li>
                      <li>회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
                      <li>공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음향, 동영상을 전송하는 행위</li>
                      <li>범죄와 결부된다고 객관적으로 인정되는 행위</li>
                      <li>기타 관계법령에 위배되는 행위</li>
                    </ul>
                  </div>
                  <p>② 이용자는 관계법령, 이 약관의 규정, 이용안내 및 서비스상에 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 합니다.</p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제7조 (개인정보의 보호 및 사용)</h3>
                <div className="text-gray-700">
                  <p className="mb-2">① 회사는 관계법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다.</p>
                  <p className="mb-2">② 개인정보의 보호 및 사용에 대해서는 관련법령 및 회사의 개인정보처리방침이 적용됩니다.</p>
                  <p>③ 이용자는 개인정보를 최신의 정보로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4️⃣ 서비스 이용료 및 결제</h2>
            <div className="prose max-w-none space-y-6">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제8조 (이용료 및 지급률)</h3>
                <div className="text-gray-700">
                  <p className="mb-3">① 현금화 서비스 이용 시 적용되는 지급률은 다음과 같습니다:</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 mb-3">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">서비스 종류</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">기본 지급률</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">수수료</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">소액결제 현금화</td>
                          <td className="border border-gray-300 px-4 py-3">85% ~ 92%</td>
                          <td className="border border-gray-300 px-4 py-3">8% ~ 15%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">정보이용료 현금화</td>
                          <td className="border border-gray-300 px-4 py-3">80% ~ 90%</td>
                          <td className="border border-gray-300 px-4 py-3">10% ~ 20%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">신용카드 현금화</td>
                          <td className="border border-gray-300 px-4 py-3">80% ~ 90%</td>
                          <td className="border border-gray-300 px-4 py-3">10% ~ 20%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">상품권 현금화</td>
                          <td className="border border-gray-300 px-4 py-3">75% ~ 95%</td>
                          <td className="border border-gray-300 px-4 py-3">5% ~ 25%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>② 지급률은 시장 상황, 거래 금액, 서비스 종류에 따라 변동될 수 있으며, 상담 시 정확한 지급률을 안내합니다.</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제9조 (결제 및 정산)</h3>
                <div className="text-gray-700">
                  <p className="mb-2">① 현금화 대금은 거래 승인 완료 후 즉시 이용자가 지정한 계좌로 입금됩니다.</p>
                  <p className="mb-2">② 입금 처리 시간은 평균 3~5분이며, 금융기관 사정에 따라 지연될 수 있습니다.</p>
                  <p>③ 잘못된 계좌정보 제공으로 인한 입금 오류의 책임은 이용자에게 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5️⃣ 계약 해지 및 서비스 이용 제한</h2>
            <div className="prose max-w-none space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제10조 (서비스 이용 제한)</h3>
                <div className="text-gray-700">
                  <p className="mb-3">① 회사는 다음 각 호에 해당하는 경우 사전 통지 없이 이용자의 서비스 이용을 제한할 수 있습니다:</p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-3">
                    <ul className="list-disc list-inside text-yellow-800 space-y-1 text-sm">
                      <li>이 약관을 위반한 경우</li>
                      <li>허위 정보를 제공하거나 타인의 정보를 도용한 경우</li>
                      <li>결제 수단의 정당한 사용권자가 아닌 경우</li>
                      <li>서비스의 정상적인 운영을 방해한 경우</li>
                      <li>관계법령을 위반한 경우</li>
                      <li>기타 회사가 서비스 제공을 부적절하다고 판단하는 경우</li>
                    </ul>
                  </div>
                  <p>② 회사는 이용 제한 사유가 해소된 경우 즉시 이용 제한을 해제합니다.</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제11조 (계약 해지)</h3>
                <div className="text-gray-700">
                  <p className="mb-2">① 이용자는 언제든지 서비스 이용을 중단하고 계약을 해지할 수 있습니다.</p>
                  <p className="mb-2">② 회사는 이용자가 이 약관을 위반하거나 서비스의 정상적인 운영을 방해한 경우 계약을 해지할 수 있습니다.</p>
                  <p>③ 계약 해지 시 관련 법령 및 개인정보처리방침에 따라 이용자의 정보를 처리합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6️⃣ 손해배상 및 면책조항</h2>
            <div className="prose max-w-none space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제12조 (손해배상)</h3>
                <div className="text-gray-700">
                  <p className="mb-2">① 회사와 이용자는 이 약관을 위반하여 상대방에게 손해를 입힌 경우 그 손해를 배상할 책임이 있습니다.</p>
                  <p className="mb-2">② 회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못한 것에 대하여 책임을 지지 않습니다.</p>
                  <p>③ 회사는 이용자의 고의 또는 과실로 인한 손해에 대하여 책임을 지지 않습니다.</p>
                </div>
              </div>

              <div className="border-l-4 border-gray-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제13조 (면책조항)</h3>
                <div className="text-gray-700">
                  <p className="mb-3">① 회사는 다음 각 호의 경우 이용자에 대한 손해배상책임을 지지 않습니다:</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우</li>
                      <li>이용자의 귀책사유로 서비스 이용에 장애가 있는 경우</li>
                      <li>이용자가 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용</li>
                      <li>이용자 상호간 또는 이용자와 제3자 상호간에 서비스를 매개로 발생한 분쟁</li>
                      <li>무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 손해</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Sections */}
        <section className="mb-12 space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7️⃣ 분쟁해결 및 준거법</h2>
            <div className="prose max-w-none space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제14조 (분쟁해결)</h3>
                <p className="text-gray-700">
                  ① 회사와 이용자는 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.
                  ② 분쟁이 발생한 경우 소비자분쟁조정위원회, 개인정보보호위원회 등을 통해 조정을 신청할 수 있습니다.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">제15조 (준거법 및 관할법원)</h3>
                <p className="text-gray-700">
                  ① 이 약관은 대한민국의 법령에 따라 규율됩니다.
                  ② 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 민사소송법상의 관할법원에 제기합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">📞 약관 관련 문의</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              이용약관에 대해 궁금한 점이 있으시거나 서비스 이용 중 문제가 발생했다면 언제든지 연락해주세요.
              친절하고 신속하게 도움을 드리겠습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 고객센터 문의
              </Link>
              <Link
                to="/safety"
                className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                🔒 안전거래 안내
              </Link>
              <Link
                to="/privacy"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                📄 개인정보처리방침
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
