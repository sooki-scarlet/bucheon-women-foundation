
print('''const institutions = [
    {
        id: "foundation",
        name: "부천여성청소년재단",
        subtitle: "맘편한 임산부 프리패스",
        description: "누구나 장벽 없이 배움을 누릴 수 있는 포용적인 사회를 지향합니다",
        logo: "logo.png",
        isFoundation: true
    },
    {
        id: "women-center",
        name: "부천시여성회관",
        category: "교육/문화",
        description: "여성의 평생교육과 문화활동을 지원합니다",
        target: "임신 중 ~ 출산 후 6개월",
        requiresBirthDate: false,
        homepage: "https://www.bwyf.or.kr/reserve/webEdcLctreList.do?key=2815&searchInsttCode=2&&pageIndex=1&pageUnit=10&searchCnd=all&searchKrwd=",
        programs: [
            {
                category: "건강/운동",
                items: ["임산부 요가", "산후 운동 클래스", "필라테스"]
            },
            {
                category: "교육/자기계발", 
                items: ["임산부 교육", "육아 클래스", "직업능력 개발"]
            },
            {
                category: "문화/여가",
                items: ["공예 만들기", "음악 감상", "독서 모임"]
            }
        ],
        freePassInfo: "정원의 10% (2~3명) 프리패스 배정",
        contact: "032-XXX-XXXX"
    },
    {
        id: "ilshim",
        name: "부천시일쉼지원센터",
        category: "증진강좌",
        description: "감정노동자의 신체적 회복과 건강관리역량 증진",
        target: "산후 100일~1년 감정노동자",
        requiresBirthDate: true,
        homepage: "https://www.bcilshim.or.kr",
        programs: [
            {
                id: "is-1",
                name: "SNPE 바른자세 척추운동",
                part: "1부",
                target: "산후 100일~1년 감정노동자",
                targetType: "postpartum",
                minDays: 100,
                maxDays: 365,
                schedule: { days: "매주 수요일", time: "18:50-19:40", period: "5월~7월" },
                freePass: { ratio: "10%", count: 2 },
                link: "https://www.bcilshim.or.kr/main/site/edusatRequest/seum.do",
                description: "올바른 자세를 회복하는 척추 운동"
            },
            {
                id: "is-2",
                name: "SNPE 바른자세 척추운동",
                part: "2부",
                target: "산후 100일~1년 감정노동자",
                targetType: "postpartum",
                minDays: 100,
                maxDays: 365,
                schedule: { days: "매주 수요일", time: "19:50-20:40", period: "5월~7월" },
                freePass: { ratio: "10%", count: 2 },
                link: "https://www.bcilshim.or.kr/main/site/edusatRequest/seum.do",
                description: "올바른 자세를 회복하는 척추 운동 (2부)"
            },
            {
                id: "is-3",
                name: "아사나를 통한 교정 및 통증 완화",
                target: "산후 100일~1년 감정노동자",
                targetType: "postpartum",
                minDays: 100,
                maxDays: 365,
                schedule: { days: "매주 목요일", time: "시간 미정", period: "5월~7월" },
                freePass: { ratio: "10%", count: 2 },
                link: "https://www.bcilshim.or.kr/main/site/edusatRequest/seum.do",
                description: "요가 아사나 동작을 통한 신체 교정"
            },
            {
                id: "is-4",
                name: "코어&근력강화 소도구 필라테스",
                part: "1부",
                target: "산후 100일~1년 감정노동자",
                targetType: "postpartum",
                minDays: 100,
                maxDays: 365,
                schedule: { days: "매주 목요일", time: "시간 미정", period: "5월~7월" },
                freePass: { ratio: "10%", count: 2 },
                link: "https://www.bcilshim.or.kr/main/site/edusatRequest/seum.do",
                description: "소도구를 활용한 코어 및 근력 강화"
            },
            {
                id: "is-5",
                name: "코어&근력강화 소도구 필라테스",
                part: "2부",
                target: "산후 100일~1년 감정노동자",
                targetType: "postpartum",
                minDays: 100,
                maxDays: 365,
                schedule: { days: "매주 목요일", time: "시간 미정", period: "5월~7월" },
                freePass: { ratio: "10%", count: 2 },
                link: "https://www.bcilshim.or.kr/main/site/edusatRequest/seum.do",
                description: "소도구를 활용한 코어 및 근력 강화 (2부)"
            }
        ]
    },
    {
        id: "healthy-family",
        name: "부천시건강가정지원센터",
        category: "가족지원",
        description: "건강한 가정과 아동발달 지원",
        target: "임신 중 ~ 출산 후 6개월",
        requiresBirthDate: false,
        homepage: "https://bucheon.familynet.or.kr/center/lay1/program/S295T322C451/recruitReceipt/list.do",
        programs: [
            {
                category: "산후/육아",
                items: ["산후 우울증 예방", "부모-영유아 놀이", "수유 클리닉"]
            },
            {
                category: "가족상담",
                items: ["부부상담", "가족치유 프로그램", "심리검사"]
            },
            {
                category: "아동발달",
                items: ["발달모니터링", "놀이치료", "언어치료"]
            }
        ],
        freePassInfo: "정원의 10% (3명) 프리패스 배정",
        contact: "032-XXX-XXXX"
    },
    {
        id: "youth",
        name: "부천시여성청소년센터",
        category: "청소년/성인지",
        description: "여성청소년의 건강한 성장과 성인지 교육",
        target: "청소년 임산부 (임신 중~산후 1년)",
        requiresBirthDate: false,
        homepage: "https://www.bwyf.or.kr/reserve/webEdcLctreList.do?key=2815&rep=1&searchInsttCode=3",
        programs: [
            {
                category: "청소년 엄마 지원",
                items: ["종합상담", "의료비 지원", "학습 지원", "자립 프로그램"]
            },
            {
                category: "성인지 교육",
                items: ["성교육", "폭력예방", "권리보장"]
            }
        ],
        freePassInfo: "정원의 20% (2명) 프리패스 배정",
        contact: "032-XXX-XXXX"
    }
];

// 정책 안내
const policyInfo = {
    title: "맘편한 임산부 우선 이용",
    description: "부천시 인구정책의 일환으로 임산부(임신 중~분만 후)에게 전 프로그램 최우선 등록 기회를 제공합니다",
    note: "※ 일쉼지원센터는 산후 100일~1년 감정노동자 대상 프로그램으로 출산일 확인이 필요합니다",
    };''')
