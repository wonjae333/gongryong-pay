import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  faqs: FAQItem[];
}

const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories: FAQCategory[] = [
    {
      id: "general",
      name: "일반 문의",
      icon: "❓",
      faqs: [
        {
          question: "공룡페이는 어떤 회사인가요?",
          answer: "공룡페이는 정식 등록된 현금화 전문업체로, 소액결제, 정보이용료, 신용카드, 상품권 현금화 서비스를 제공합니다. 안전하고 투명한 거래를 최우선으로 하며, 고객님의 개인정보 보호와 빠른 서비스 처리에 최선을 다하고 있습니다."
        },
        {
          question: "현금화 서비스가 합법인가요?",
          answer: "네, 공룡페이는 관련 법규를 철저히 준수하는 정식 등록 업체입니다. 모든 거래는 투명하게 진행되며, 적법한 절차를 통해 서비스를 제공하고 있습니다. 고객님께서도 본인 명의로만 이용하시면 안전하게 서비스를 이용하실 수 있습니다."
        },
        {
          question: "처리 시간은 얼마나 걸리나요?",
          answer: "공룡페이는 업계 최고 수준의 빠른 처리 속도를 자랑합니다. 상담 신청부터 현금 입금까지 평균 3분 내에 완료되며, 24시간 언제든지 서비스 이용이 가능합니다."
        },
        {
          question: "지급률은 어떻게 되나요?",
          answer: "공룡페이는 업계 최고 수준의 지급률을 제공합니다. 구체적인 지급률은 서비스 종류, 이용 금액, 시장 상황에 따라 달라질 수 있으므로, 정확한 지급률은 상담 시 안내해드립니다. 경쟁 업체 대비 높은 지급률로 고객 만족도를 최우선으로 합니다."
        },
        {
          question: "수수료는 별도로 발생하나요?",
          answer: "공룡페이는 투명한 요금 체계를 운영합니다. 지급률에 모든 수수료가 포함되어 있어 별도의 숨겨진 비용은 없습니다. 상담 시 최종 지급 금액을 명확히 안내해드립니다."
        }
      ]
    },
    {
      id: "micropayment",
      name: "소액결제",
      icon: "📱",
      faqs: [
        {
          question: "소액결제 현금화는 어떤 서비스인가요?",
          answer: "휴대폰 소액결제 한도를 현금으로 전환하는 서비스입니다. SKT, KT, LGU+ 모든 통신사를 지원하며, 복잡한 절차 없이 빠르게 현금화가 가능합니다."
        },
        {
          question: "소액결제 한도는 얼마까지 이용 가능한가요?",
          answer: "월 최대 100만원까지 이용 가능합니다. 고객님의 통신사와 요금제에 따라 실제 이용 가능한 한도가 다를 수 있으므로, 정확한 한도는 상담 시 확인해드립니다."
        },
        {
          question: "모든 통신사에서 이용 가능한가요?",
          answer: "네, SKT, KT, LGU+ 모든 통신사에서 이용 가능합니다. 알뜰폰을 사용하시는 경우에도 대부분 이용 가능하니 상담 시 확인해주세요."
        },
        {
          question: "소액결제 한도를 확인하는 방법이 있나요?",
          answer: "각 통신사 고객센터나 온라인 계정을 통해 확인 가능합니다. 또는 공룡페이 상담 시 함께 확인해드릴 수 있습니다."
        },
        {
          question: "소액결제 이용 후 휴대폰 요금에 영향이 있나요?",
          answer: "소액결제 이용 금액은 다음 달 휴대폰 요금에 합산되어 청구됩니다. 정상적인 소액결제 이용이므로 요금제나 기타 서비스에는 영향이 없습니다."
        }
      ]
    },
    {
      id: "information",
      name: "정보이용료",
      icon: "🎮",
      faqs: [
        {
          question: "정보이용료 현금화는 무엇인가요?",
          answer: "통신사 정보이용료 한도를 활용한 현금화 서비스입니다. 게임 아이템, 앱 내 결제 등 다양한 디지털 콘텐츠 결제를 통해 현금화가 가능합니다. 콘텐츠이용료와 동일한 서비스입니다."
        },
        {
          question: "정보이용료와 콘텐츠이용료는 같은 건가요?",
          answer: "네, 맞습니다. 정보이용료와 콘텐츠이용료는 같은 서비스를 지칭하는 다른 표현입니다. 공룡페이에서는 '정보이용료 현금화 (콘텐츠이용료 현금화)'로 통합하여 표기하고 있습니다."
        },
        {
          question: "정보이용료 한도는 얼마까지인가요?",
          answer: "월 최대 100만원까지 이용 가능합니다. 통신사와 고객님의 이용 패턴에 따라 한도가 다를 수 있으므로 상담 시 정확한 한도를 확인해드립니다."
        },
        {
          question: "어떤 방식으로 정보이용료를 사용하나요?",
          answer: "게임 아이템 구매, 앱 내 결제, 디지털 콘텐츠 구매 등 다양한 방식으로 이용 가능합니다. 고객님께 가장 편리한 방법을 상담 시 안내해드립니다."
        },
        {
          question: "정보이용료와 소액결제는 별도 한도인가요?",
          answer: "네, 정보이용료와 소액결제는 별도의 한도로 운영됩니다. 따라서 두 서비스를 각각 이용하실 수 있어 더 많은 현금화가 가능합니다."
        }
      ]
    },
    {
      id: "credit",
      name: "신용카드",
      icon: "💳",
      faqs: [
        {
          question: "신용카드 현금화는 어떻게 진행되나요?",
          answer: "안전한 PG사를 통해 신용카드 결제를 진행한 후, 약정된 금액을 고객님 계좌로 즉시 입금하는 방식입니다. 모든 과정이 투명하게 진행됩니다."
        },
        {
          question: "어떤 카드사를 지원하나요?",
          answer: "삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC카드 등 모든 카드사를 지원합니다. 체크카드도 일부 가능하니 상담 시 확인해주세요."
        },
        {
          question: "신용카드 현금화 한도는 어떻게 되나요?",
          answer: "고객님의 신용카드 결제 가능 한도 내에서 이용 가능합니다. 최대 100만원까지 이용 가능하며, 카드 한도와 이용 상황에 따라 달라질 수 있습니다."
        },
        {
          question: "신용카드 현금화가 신용등급에 영향을 주나요?",
          answer: "정상적인 카드 결제로 처리되므로 신용등급에 부정적인 영향을 주지 않습니다. 다만 과도한 카드 사용은 개인 신용 관리에 주의가 필요합니다."
        },
        {
          question: "분할결제도 가능한가요?",
          answer: "네, 대부분의 카드에서 분할결제가 가능합니다. 상담 시 고객님의 상황에 맞는 최적의 결제 방법을 안내해드립니다."
        }
      ]
    },
    {
      id: "giftcard",
      name: "상품권",
      icon: "🎁",
      faqs: [
        {
          question: "어떤 상품권을 현금화할 수 있나요?",
          answer: "문화상품권, 해피머니, 도서문화상품권, 스마트문상, 틴캐시 등 대부분의 상품권 현금화가 가능합니다. 기타 상품권도 가능한지 상담 시 문의해주세요."
        },
        {
          question: "상품권 현금화는 어떻게 진행되나요?",
          answer: "상품권 정보(번호, 비밀번호)를 안전한 채널로 전송해주시면, 확인 후 즉시 현금으로 전환해드립니다. 모든 과정이 보안이 철저한 시스템을 통해 진행됩니다."
        },
        {
          question: "상품권 현금화 지급률은 어떻게 되나요?",
          answer: "상품권 종류에 따라 지급률이 약간씩 다를 수 있습니다. 업계 최고 수준의 지급률을 제공하며, 정확한 지급률은 상담 시 안내해드립니다."
        },
        {
          question: "만료일이 임박한 상품권도 가능한가요?",
          answer: "만료일이 남아있는 상품권이라면 현금화가 가능합니다. 다만 만료일이 매우 임박한 경우 지급률이 조정될 수 있으니 빠른 상담을 권해드립니다."
        },
        {
          question: "상품권 정보 전송이 안전한가요?",
          answer: "공룡페이는 보안이 철저한 시스템을 통해 상품권 정보를 처리합니다. 개인정보 보호법을 준수하며, 모든 정보는 안전하게 관리됩니다."
        }
      ]
    },
    {
      id: "safety",
      name: "안전 거래",
      icon: "🔒",
      faqs: [
        {
          question: "개인정보는 안전하게 보호되나요?",
          answer: "공룡페이는 개인정보보호법을 철저히 준수합니다. 모든 개인정보는 암호화되어 저장되며, 서비스 목적 외에는 절대 사용되지 않습니다. 거래 완료 후에는 안전하게 폐기됩니다."
        },
        {
          question: "사기나 피해를 당할 위험은 없나요?",
          answer: "공룡페이는 정식 등록된 업체로 투명한 거래를 약속합니다. 상담 시 업체 등록증을 확인하실 수 있으며, 모든 거래 과정이 투명하게 진행됩니다. 의심스러운 업체와는 거래하지 마시고 반드시 정식 업체를 이용하세요."
        },
        {
          question: "미성년자도 이용할 수 있나요?",
          answer: "아니요, 미성년자는 이용할 수 없습니다. 만 19세 이상의 성인만 이용 가능하며, 반드시 본인 명의의 휴대폰/카드만 사용해야 합니다."
        },
        {
          question: "타인 명의로 이용해도 되나요?",
          answer: "절대 안됩니다. 반드시 본인 명의의 휴대폰, 카드, 상품권만 이용 가능합니다. 타인 명의 사용은 법적 문제가 될 수 있으니 주의해주세요."
        },
        {
          question: "거래 중 문제가 생기면 어떻게 하나요?",
          answer: "거래 중 문제가 발생하면 즉시 상담 채널로 연락주세요. 24시간 고객센터가 운영되며, 모든 문제에 대해 신속하고 정확한 해결책을 제공합니다."
        }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">💡</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              공룡페이 <span className="text-blue-600">자주 묻는 질문</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              고객님들이 가장 많이 궁금해하시는 질문들과 상세한 답변을 정리했습니다.
              원하는 카테고리를 선택해서 필요한 정보를 빠르게 찾아보세요.
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
              찾는 답변이 없으면 직접 상담
            </a>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              카테고리 선택
            </h2>
            <p className="text-lg text-gray-600">
              관심 있는 서비스의 FAQ를 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{currentCategory?.icon}</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentCategory?.name} FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {currentCategory?.faqs.map((faq, index) => (
              <div key={`${currentCategory.id}-faq-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    Q{index + 1}. {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              더 빠른 도움이 필요하신가요?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/how-to-use"
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                이용 방법
              </h3>
              <p className="text-gray-600">단계별 상세 가이드를 확인하세요</p>
            </Link>

            <Link
              to="/safety"
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                안전거래 안내
              </h3>
              <p className="text-gray-600">안전한 거래를 위한 정보를 확인하세요</p>
            </Link>

            <a
              href="https://open.kakao.com/o/s9GOcnBh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                1:1 상담
              </h3>
              <p className="text-gray-600">24시간 전문 상담진과 대화하세요</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            궁금한 점이 해결되지 않으셨나요? 🦕
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            <strong>전문 상담진이 24시간 대기중입니다</strong><br/>
            어떤 질문이든 친절하게 답변해드립니다
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
            바로 상담받기
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
