// 전역 변수
let currentInstitution = null;
let currentTab = 'pregnancy';

// 메인 페이지 - 기관 목록 표시
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('institutionGrid')) {
        renderInstitutions();
    }
});

function renderInstitutions() {
    const grid = document.getElementById('institutionGrid');
    const icons = ['🏛️', '🧘', '👨‍👩‍👧', '🌱'];

    institutions.forEach((inst, index) => {
        if (inst.isFoundation) return;

        const card = document.createElement('div');
        card.className = 'institution-card';
        card.onclick = () => goToInstitution(inst.id);

        card.innerHTML = `
            <div class="inst-icon">${icons[index - 1]}</div>
            <div class="inst-name">${inst.name}</div>
            <span class="inst-category">${inst.category}</span>
            <div class="inst-desc">${inst.description}</div>
            <div class="inst-arrow">→</div>
        `;

        grid.appendChild(card);
    });
}

function goToInstitution(instId) {
    window.location.href = `institution.html?id=${instId}`;
}

function goHome() {
    window.location.href = 'index.html';
}

// 기관 페이지 - 기관 정보 로드
function loadInstitution() {
    const params = new URLSearchParams(window.location.search);
    const instId = params.get('id');

    currentInstitution = institutions.find(i => i.id === instId);

    if (!currentInstitution) {
        alert('기관을 찾을 수 없습니다.');
        goHome();
        return;
    }

    document.getElementById('instName').textContent = currentInstitution.name;
    document.getElementById('instDesc').textContent = currentInstitution.description;
}

// 탭 선택
function selectTab(tab) {
    currentTab = tab;

    // 버튼 스타일 변경
    document.getElementById('tab-pregnancy').classList.toggle('active', tab === 'pregnancy');
    document.getElementById('tab-postpartum').classList.toggle('active', tab === 'postpartum');

    // 입력 영역 표시/숨김
    document.getElementById('pregnancy-input').classList.toggle('hidden', tab !== 'pregnancy');
    document.getElementById('postpartum-input').classList.toggle('hidden', tab !== 'postpartum');
}

// 프로그램 확인
function checkPrograms() {
    if (!currentInstitution) return;

    let userStatus = {};

    if (currentTab === 'pregnancy') {
        const weeks = parseInt(document.getElementById('weeks').value);
        if (!weeks || weeks < 1) {
            alert('임신 주수를 입력해주세요');
            return;
        }
        userStatus = { type: 'pregnancy', weeks: weeks };
    } else {
        const months = parseInt(document.getElementById('months').value) || 0;
        const days = parseInt(document.getElementById('days').value) || 0;
        const totalDays = (months * 30) + days;

        if (totalDays === 0) {
            alert('출산 후 경과 기간을 입력해주세요');
            return;
        }
        userStatus = { type: 'postpartum', days: totalDays };
    }

    // 결과 표시
    const resultsDiv = document.getElementById('program-results');
    const listDiv = document.getElementById('programsList');

    resultsDiv.classList.remove('hidden');
    listDiv.innerHTML = '';

    currentInstitution.programs.forEach((prog, index) => {
        const isAvailable = checkEligibility(prog, userStatus);
        const item = createProgramItem(prog, index + 1, isAvailable, userStatus);
        listDiv.appendChild(item);
    });

    // 스크롤
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

function checkEligibility(program, userStatus) {
    if (program.targetType === 'pregnancy' && userStatus.type !== 'pregnancy') return false;
    if (program.targetType === 'postpartum' && userStatus.type !== 'postpartum') return false;

    if (userStatus.type === 'pregnancy') {
        return userStatus.weeks >= (program.minWeek || 0) && 
               userStatus.weeks <= (program.maxWeek || 42);
    } else {
        return userStatus.days >= (program.minDays || 0) && 
               userStatus.days <= (program.maxDays || 365);
    }
}

function createProgramItem(program, number, isAvailable, userStatus) {
    const item = document.createElement('div');
    item.className = `program-item ${isAvailable ? 'available' : 'not-available'}`;
    item.onclick = () => showProgramDetail(program, number, isAvailable, userStatus);

    const timeDisplay = program.schedule.time !== '시간 미정' ? 
        program.schedule.time : '시간 미정';

    item.innerHTML = `
        <div class="prog-header">
            <span class="prog-name">${number}. ${program.name}</span>
            <span class="prog-status ${isAvailable ? 'available' : 'not-available'}">
                ${isAvailable ? '신청 가능' : '조건 미충족'}
            </span>
        </div>
        <div class="prog-meta">
            <span>📅 ${program.schedule.days}</span>
            <span>⏰ ${timeDisplay}</span>
        </div>
    `;

    return item;
}

function showProgramDetail(program, number, isAvailable, userStatus) {
    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('modal-body');

    const timeDisplay = program.schedule.time !== '시간 미정' ? 
        program.schedule.time : '시간 추후공지';

    let actionHtml;
    if (isAvailable) {
        actionHtml = `
            <div style="background: linear-gradient(135deg, #EC4899, #8B5CF6); color: white; padding: 18px; border-radius: 14px; margin-bottom: 20px; text-align: center;">
                <div style="font-size: 0.9rem; margin-bottom: 4px;">임산부 프리패스 정원</div>
                <div style="font-size: 1.3rem; font-weight: 800;">정원의 ${program.freePass.ratio} (${program.freePass.count}명)</div>
            </div>
            <a href="${program.link}" target="_blank" style="display: block; width: 100%; padding: 16px; background: linear-gradient(135deg, #EC4899, #8B5CF6); color: white; text-align: center; text-decoration: none; border-radius: 14px; font-weight: 700; font-size: 1rem;">
                신청하러 가기 →
            </a>
        `;
    } else {
        let msg = userStatus.type === 'pregnancy' ? 
            '임신 주수가 맞지 않습니다' : '산후 경과 기간이 맞지 않습니다';
        actionHtml = `
            <div style="background: #FEF2F2; color: #DC2626; padding: 15px; border-radius: 12px; text-align: center;">
                ${msg}
            </div>
        `;
    }

    body.innerHTML = `
        <div style="margin-bottom: 20px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: linear-gradient(135deg, #EC4899, #8B5CF6); color: white; border-radius: 50%; font-weight: 700; margin-bottom: 12px;">${number}</span>
            <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 8px;">${program.name}</h3>
            <p style="color: #6B7280;">${program.description}</p>
        </div>

        <div style="display: grid; gap: 12px; margin-bottom: 20px;">
            <div style="background: linear-gradient(135deg, #FCE7F3, #E9D5FF); padding: 15px; border-radius: 12px;">
                <div style="font-size: 0.8rem; color: #6B7280; margin-bottom: 4px;">📅 운영기간</div>
                <div style="font-weight: 600;">${program.schedule.period}</div>
            </div>
            <div style="background: linear-gradient(135deg, #FCE7F3, #E9D5FF); padding: 15px; border-radius: 12px;">
                <div style="font-size: 0.8rem; color: #6B7280; margin-bottom: 4px;">⏰ 시간</div>
                <div style="font-weight: 600;">${timeDisplay}</div>
            </div>
            <div style="background: linear-gradient(135deg, #FCE7F3, #E9D5FF); padding: 15px; border-radius: 12px;">
                <div style="font-size: 0.8rem; color: #6B7280; margin-bottom: 4px;">📍 요일</div>
                <div style="font-weight: 600;">${program.schedule.days}</div>
            </div>
            <div style="background: linear-gradient(135deg, #FCE7F3, #E9D5FF); padding: 15px; border-radius: 12px;">
                <div style="font-size: 0.8rem; color: #6B7280; margin-bottom: 4px;">👤 대상</div>
                <div style="font-weight: 700; color: #8B5CF6;">${program.target}</div>
            </div>
        </div>

        ${actionHtml}
    `;

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');
}

// 모달 외부 클릭 시 닫기
document.addEventListener('click', function(e) {
    const modal = document.getElementById('detail-modal');
    if (e.target === modal) {
        closeModal();
    }
});