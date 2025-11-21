document.addEventListener('DOMContentLoaded', function() {
    // 모든 토글 버튼 요소를 가져옵니다.
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 이 버튼이 목표로 하는 섹션 ID를 가져옵니다.
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // 해당 섹션이 열려 있는지 확인합니다.
            const is_open = targetSection.classList.contains('open');

            // 1. 이미 열려있는 모든 섹션을 닫습니다. (하나만 열리도록)
            document.querySelectorAll('.content-section').forEach(section => {
                if (section.classList.contains('open')) {
                    section.classList.remove('open');
                }
            });

            // 2. 현재 클릭한 섹션이 닫혀있었다면(is_open이 false), 이제 엽니다.
            if (!is_open) {
                targetSection.classList.add('open');
            }
        });
    });
});
