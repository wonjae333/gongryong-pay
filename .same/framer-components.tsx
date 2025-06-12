// 🎨 공룡페이 Framer 코드 컴포넌트 템플릿

import { addPropertyControls, ControlType } from "framer"

// 1. 서비스 카드 컴포넌트
export function ServiceCard(props) {
    const {
        title = "서비스 제목",
        description = "서비스 설명",
        icon = "📱",
        color = "#10b981",
        link = "/services/micropayment"
    } = props

    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                width: "100%",
                height: "100%",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid #e5e7eb"
            }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
            }}
        >
            <div
                style={{
                    fontSize: "48px",
                    marginBottom: "16px",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {icon}
            </div>
            <h3
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#111827",
                    marginBottom: "12px",
                    lineHeight: "1.4"
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    lineHeight: "1.5",
                    marginBottom: "16px"
                }}
            >
                {description}
            </p>
            <div
                style={{
                    backgroundColor: color,
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline-block"
                }}
            >
                자세히 보기 →
            </div>
        </div>
    )
}

addPropertyControls(ServiceCard, {
    title: { type: ControlType.String, defaultValue: "소액결제 현금화" },
    description: { type: ControlType.String, defaultValue: "휴대폰 소액결제 한도를 현금으로 전환" },
    icon: { type: ControlType.String, defaultValue: "📱" },
    color: { type: ControlType.Color, defaultValue: "#10b981" },
    link: { type: ControlType.String, defaultValue: "/services/micropayment" }
})

// 2. 특징 카드 컴포넌트
export function FeatureCard(props) {
    const {
        title = "특징 제목",
        description = "특징 설명",
        icon = "⚡"
    } = props

    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "center",
                width: "100%",
                height: "100%",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
        >
            <div
                style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: "24px"
                }}
            >
                {icon}
            </div>
            <h3
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#111827",
                    marginBottom: "12px"
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    lineHeight: "1.5"
                }}
            >
                {description}
            </p>
        </div>
    )
}

addPropertyControls(FeatureCard, {
    title: { type: ControlType.String, defaultValue: "3분 내 즉시 처리" },
    description: { type: ControlType.String, defaultValue: "상담부터 입금까지 평균 3분! 급한 자금이 필요할 때 즉시 해결" },
    icon: { type: ControlType.String, defaultValue: "⚡" }
})

// 3. 고객 후기 카드 컴포넌트
export function TestimonialCard(props) {
    const {
        name = "김○○님",
        location = "서울",
        rating = 5,
        review = "정말 빠르고 안전한 서비스였습니다!",
        avatar = "👤"
    } = props

    const stars = "⭐".repeat(rating)

    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "100%",
                border: "1px solid #e5e7eb"
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px"
                }}
            >
                <div
                    style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#10b981",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        marginRight: "12px"
                    }}
                >
                    {avatar}
                </div>
                <div>
                    <div
                        style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#111827"
                        }}
                    >
                        {name}
                    </div>
                    <div
                        style={{
                            fontSize: "14px",
                            color: "#6b7280"
                        }}
                    >
                        {location}
                    </div>
                </div>
            </div>
            <div
                style={{
                    fontSize: "18px",
                    marginBottom: "12px"
                }}
            >
                {stars}
            </div>
            <p
                style={{
                    fontSize: "16px",
                    color: "#374151",
                    lineHeight: "1.5",
                    fontStyle: "italic"
                }}
            >
                "{review}"
            </p>
        </div>
    )
}

addPropertyControls(TestimonialCard, {
    name: { type: ControlType.String, defaultValue: "김○○님" },
    location: { type: ControlType.String, defaultValue: "서울" },
    rating: { type: ControlType.Number, defaultValue: 5, min: 1, max: 5 },
    review: { type: ControlType.String, defaultValue: "정말 빠르고 안전한 서비스였습니다!" },
    avatar: { type: ControlType.String, defaultValue: "👤" }
})

// 4. 히어로 섹션 컴포넌트
export function HeroSection(props) {
    const {
        title = "공룡페이 - 소액결제 현금화 전문업체 🦕",
        subtitle = "3분 내 빠른 현금화! 업계 최고 지급률로 급한 자금 문제를 해결하세요",
        description = "SKT, KT, LGU+ 소액결제부터 신용카드, 상품권까지 모든 현금화 서비스를 한 번에!",
        ctaText = "무료 상담 신청하기",
        backgroundColor = "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
    } = props

    return (
        <div
            style={{
                background: backgroundColor,
                padding: "80px 24px",
                textAlign: "center",
                width: "100%",
                minHeight: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div style={{ maxWidth: "800px" }}>
                <h1
                    style={{
                        fontSize: "48px",
                        fontWeight: "bold",
                        color: "#111827",
                        marginBottom: "24px",
                        lineHeight: "1.2"
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        fontSize: "24px",
                        color: "#374151",
                        marginBottom: "16px",
                        lineHeight: "1.4"
                    }}
                >
                    {subtitle}
                </p>
                <p
                    style={{
                        fontSize: "18px",
                        color: "#6b7280",
                        marginBottom: "40px",
                        lineHeight: "1.5"
                    }}
                >
                    {description}
                </p>
                <button
                    style={{
                        backgroundColor: "#10b981",
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "600",
                        padding: "16px 32px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease"
                    }}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#059669"
                    }}
                >
                    {ctaText}
                </button>
            </div>
        </div>
    )
}

addPropertyControls(HeroSection, {
    title: {
        type: ControlType.String,
        defaultValue: "공룡페이 - 소액결제 현금화 전문업체 🦕"
    },
    subtitle: {
        type: ControlType.String,
        defaultValue: "3분 내 빠른 현금화! 업계 최고 지급률로 급한 자금 문제를 해결하세요"
    },
    description: {
        type: ControlType.String,
        defaultValue: "SKT, KT, LGU+ 소액결제부터 신용카드, 상품권까지 모든 현금화 서비스를 한 번에!"
    },
    ctaText: {
        type: ControlType.String,
        defaultValue: "무료 상담 신청하기"
    },
    backgroundColor: {
        type: ControlType.Color,
        defaultValue: "#f0f9ff"
    }
})

// 5. 프로세스 단계 컴포넌트
export function ProcessStep(props) {
    const {
        stepNumber = 1,
        title = "상담 신청 및 한도 확인",
        description = "전화, 카카오톡, 텔레그램으로 상담 신청",
        icon = "📞",
        color = "#10b981"
    } = props

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                width: "100%",
                marginBottom: "16px"
            }}
        >
            <div
                style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: color,
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginRight: "16px"
                }}
            >
                {stepNumber}
            </div>
            <div style={{ flex: 1 }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "4px"
                    }}
                >
                    <span style={{ fontSize: "20px", marginRight: "8px" }}>
                        {icon}
                    </span>
                    <h3
                        style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#111827",
                            margin: 0
                        }}
                    >
                        {title}
                    </h3>
                </div>
                <p
                    style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        margin: 0,
                        lineHeight: "1.4"
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    )
}

addPropertyControls(ProcessStep, {
    stepNumber: { type: ControlType.Number, defaultValue: 1, min: 1, max: 10 },
    title: { type: ControlType.String, defaultValue: "상담 신청 및 한도 확인" },
    description: { type: ControlType.String, defaultValue: "전화, 카카오톡, 텔레그램으로 상담 신청" },
    icon: { type: ControlType.String, defaultValue: "📞" },
    color: { type: ControlType.Color, defaultValue: "#10b981" }
})

// 6. CTA 버튼 컴포넌트
export function CTAButton(props) {
    const {
        text = "무료 상담 신청하기",
        color = "#10b981",
        size = "large",
        variant = "primary"
    } = props

    const sizeStyles = {
        small: { padding: "8px 16px", fontSize: "14px" },
        medium: { padding: "12px 24px", fontSize: "16px" },
        large: { padding: "16px 32px", fontSize: "20px" }
    }

    const variantStyles = {
        primary: {
            backgroundColor: color,
            color: "white",
            border: "none"
        },
        secondary: {
            backgroundColor: "white",
            color: color,
            border: `2px solid ${color}`
        },
        outline: {
            backgroundColor: "transparent",
            color: color,
            border: `2px solid ${color}`
        }
    }

    return (
        <button
            style={{
                ...sizeStyles[size],
                ...variantStyles[variant],
                borderRadius: "12px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)"
            }}
        >
            {text}
        </button>
    )
}

addPropertyControls(CTAButton, {
    text: { type: ControlType.String, defaultValue: "무료 상담 신청하기" },
    color: { type: ControlType.Color, defaultValue: "#10b981" },
    size: {
        type: ControlType.Enum,
        defaultValue: "large",
        options: ["small", "medium", "large"]
    },
    variant: {
        type: ControlType.Enum,
        defaultValue: "primary",
        options: ["primary", "secondary", "outline"]
    }
})
