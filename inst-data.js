// ============================================================
// 3개 기관 데이터 — 가상 프로그램 (실제 확인 전 임시)
// 실제 정보 입력 시 각 항목 교체
// ============================================================

const institutionsData = {

    women: {
        key: "women",
        name: "여성회관",
        fullName: "부천시여성회관",
        phone: "032-654-0101",
        address: "부천시 원미구 부천로 231",
        website: "https://www.bwyf.or.kr/woman/index.do",
        eligibilityType: "pregnant_6months",
        maxPostpartumDays: 180,
        applicationNote: "홈페이지 또는 방문 신청",
        programs: [
            {
                id: "w1",
                name: "산전·산후 회복 요가",
                description: "임신·출산으로 변화된 몸을 부드럽게 회복하는 전문 요가 프로그램. 체형 교정과 골반 안정에 도움을 드립니다.",
                schedule: {
                    days: "매주 화·목요일",
                    time: "10:00 – 11:00",
                    period: "2025년 5월 ~ 8월"
                },
                freePass: {
                    ratio: "정원의 10%",
                    count: "2명",
                    totalCapacity: "20명"
                },
                application: {
                    method: "홈페이지 선착순 접수",
                    period: "2025년 4월 중 공지 예정"
                },
                link: "https://www.bwyf.or.kr/woman/index.do"
            },
            {
                id: "w2",
                name: "엄마와 함께하는 오감 놀이",
                description: "출산 후 6개월 이내 엄마와 아기가 함께하는 감각 발달 중심 놀이 프로그램. 애착 형성과 정서 안정에 도움을 드립니다.",
                schedule: {
                    days: "매주 수요일",
                    time: "10:30 – 12:00",
                    period: "2025년 5월 ~ 8월"
                },
                freePass: {
                    ratio: "정원의 10%",
                    count: "2명",
                    totalCapacity: "15명"
                },
                application: {
                    method: "방문 또는 전화 신청",
                    period: "2025년 4월 중 공지 예정"
                },
                link: "https://www.bwyf.or.kr/woman/index.do"
            }
        ]
    },

    family: {
        key: "family",
        name: "건강가정지원센터",
        fullName: "부천시건강가정지원센터",
        phone: "032-614-5933",
        address: "부천시 원미구 길주로 210",
        website: "https://bucheon.familynet.or.kr/center/lay1/program/S295T322C451/recruitReceipt/list.do",
        eligibilityType: "pregnant_6months",
        maxPostpartumDays: 180,
        applicationNote: "홈페이지 또는 전화 신청",
        programs: [
            {
                id: "f1",
                name: "태교 음악·힐링 명상",
                description: "임산부를 위한 클래식 기반 음악 태교와 호흡·이완 명상을 결합한 통합 심신 힐링 프로그램입니다.",
                schedule: {
                    days: "매주 월요일",
                    time: "14:00 – 15:30",
                    period: "2025년 5월 ~ 8월"
                },
                freePass: {
                    ratio: "정원의 10%",
                    count: "2명",
                    totalCapacity: "15명"
                },
                application: {
                    method: "홈페이지 또는 전화 선착순",
                    period: "2025년 4월 중 공지 예정"
                },
                link: "https://bucheon.familynet.or.kr/center/lay1/program/S295T322C451/recruitReceipt/list.do"
            },
            {
                id: "f2",
                name: "출산 후 맘케어 심리지원",
                description: "출산 후 6개월 이내 여성을 위한 정서 회복 및 자기 돌봄 중심 집단 심리지원 프로그램입니다.",
                schedule: {
                    days: "매주 목요일",
                    time: "10:00 – 11:30",
                    period: "2025년 5월 ~ 8월"
                },
                freePass: {
                    ratio: "정원의 10%",
                    count: "2명",
                    totalCapacity: "12명"
                },
                application: {
                    method: "홈페이지 선착순",
                    period: "2025년 4월 중 공지 예정"
                },
                link: "https://bucheon.familynet.or.kr/center/lay1/program/S295T322C451/recruitReceipt/list.do"
            }
        ]
    },

    youth: {
        key: "youth",
        name: "여성청소년센터",
        fullName: "부천시여성청소년센터",
        phone: "032-325-9400",
        address: "부천시 소사구 송내대로 244",
        website: "https://www.bwyf.or.kr/bwycenter/index.do",
        eligibilityType: "pregnant_6months",
        maxPostpartumDays: 180,
        applicationNote: "센터 방문 또는 전화 신청",
        programs: [
            {
                id: "y1",
                name: "임산부 아쿠아로빅",
                description: "임산부 및 출산 후 여성을 위해 설계된 수중 유산소 운동 프로그램. 관절 부담 없이 전신 근력과 유연성을 키울 수 있습니다.",
                schedule: {
                    days: "매주 화·금요일",
                    time: "09:30 – 10:30",
                    period: "2025년 5월 ~ 8월"
                },
                freePass: {
                    ratio: "정원의 10%",
                    count: "2명",
                    totalCapacity: "20명"
                },
                application: {
                    method: "방문 또는 전화 선착순",
                    period: "2025년 4월 중 공지 예정"
                },
                link: "https://www.bwyf.or.kr/bwycenter/index.do"
            }
        ]
    }

};
