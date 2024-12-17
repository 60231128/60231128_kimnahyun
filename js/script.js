$(document).ready(function () {
  // 문 열림 박스와 팝업 박스 날짜 구분
  const doorDays = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]; // 홀수 번호 (문 열림)
  const popupDays = Array.from({ length: 24 }, (_, i) => i + 1).filter(
    (day) => !doorDays.includes(day) // 짝수 번호 (팝업 박스)
  );

  // 랜덤 색상 배열
  const initialColors = ["#f3b9cb", "#cb2026", "#ede2c5", "#f4d093"]; // 로딩 시
  const clickColors = [
    "#f3b9cb",
    "#ede2c5",
    "#f4d093",
    "#6da34d",
    "#88d498",
    "#add8e6",
    "#ffe4b5",
  ]; // 클릭 시

  // 팝업 창에 표시될 내용
  const popupContents = {
    2: `
  🎅 <strong>산타클로스의 기원</strong><br><br>
  산타클로스는 4세기 터키에 살았던 성 니콜라스에서 유래되었어요.<br>
  그는 가난한 이웃들을 위해 밤마다 몰래 선물을 두고 갔다고 해요.<br>
  어느 날, 세 자매의 양말에 금화를 넣어주면서<br>
  크리스마스 양말 전통이 시작되었답니다.🎄
  `,
    4: `
  🦌 <strong>루돌프의 반짝이는 코</strong><br><br>
  루돌프는 반짝이는 빨간 코 덕분에 산타의 썰매를 이끌게 되었어요!<br>
  이 이야기는 다름의 아름다움과 특별함을 믿으면<br>
  기적이 일어난다는 메시지를 전해준답니다.✨
  `,
    6: `
  🎄 <strong>크리스마스 트리의 유래</strong><br><br>
  독일에서 시작된 크리스마스 트리는 희망과 사랑을 상징해요.<br>
  마틴 루터가 별빛을 본 영감으로 집안에 트리를 장식했다고 해요.🌟
  `,
    8: `
  🎁 <strong>양말 속 선물 이야기</strong><br><br>
  성 니콜라스는 벽난로에 걸린 양말에 금화를 넣어주었어요.<br>
  이 이야기가 전해져 양말에 선물을 담는 전통이 시작되었답니다.🧦
  `,
    10: `
  ❄️ <strong>첫눈과 크리스마스의 마법</strong><br><br>
  첫눈은 마법처럼 세상을 하얗게 덮어주며 행운을 가져다준대요.<br>
  사랑하는 사람과 첫눈을 맞으며 소원을 빌어보세요.🌨️
  `,
    12: `
  🕯️ <strong>크리스마스 양초의 빛</strong><br><br>
  양초는 희망과 사랑을 상징하며<br>
  당신의 크리스마스에도 따뜻한 빛이 가득하길 바랄게요.💛
  `,
    14: `
  ⛄ <strong>눈사람의 비밀 소원</strong><br><br>
  눈사람을 만들고 소원을 빌면 새해에 이루어진다는 전설이 있어요.<br>
  작은 소원을 눈사람에게 살짝 이야기해 보세요!❄️
  `,
    16: `
  🍪 <strong>크리스마스 쿠키의 시작</strong><br><br>
  중세 유럽에서 시작된 크리스마스 쿠키는 사랑과 나눔을 상징해요.<br>
  별: 희망, 하트: 사랑, 사탕 지팡이: 행복을 의미한답니다.❤️
  `,
    18: `
  🦌 <strong>산타를 돕는 9마리 순록</strong><br><br>
  다스her, 댄서, 프랜서, 루돌프까지!<br>
  순록들은 산타와 함께 아이들에게 선물을 나눠주는 특별한 친구들이에요.🎠
  `,
    20: `
  🎶 <strong>캐롤이 들려주는 이야기</strong><br><br>
  크리스마스 캐롤은 사랑과 평화의 메시지를 전하는 노래예요.<br>
  'Silent Night'은 작은 교회에서 시작되어 세계로 퍼졌답니다.🎼
  `,
    22: `
  🎀 <strong>크리스마스 리스의 의미</strong><br><br>
  리스는 영원한 사랑과 평화를 상징하며 가정에 행운을 가져다준대요.<br>
  문에 걸어두면 행복과 축복이 가득할 거예요.🌿
  `,
    24: `
  🌟 <strong>베들레헴의 별</strong><br><br>
  예수님의 탄생을 알린 베들레헴의 별은 희망과 인도를 상징해요.<br>
  크리스마스 트리 꼭대기에서 우리에게 빛을 비추어준답니다.⭐
  `,
  };

  let clickedDays = new Set(); // 클릭된 날짜 저장

  // 페이지 로딩 시 모든 박스에 랜덤 색상 적용
  $(".day").each(function () {
    const randomColor =
      initialColors[Math.floor(Math.random() * initialColors.length)];
    $(this).css("background-color", randomColor);
  });

  // 문 열림 박스와 팝업 박스에 클래스 부여
  $(".day").each(function () {
    const day = $(this).data("day");
    if (doorDays.includes(day)) {
      $(this).addClass("door"); // 홀수: 문 열림
    } else if (popupDays.includes(day)) {
      $(this).addClass("popup-box"); // 짝수: 팝업
    }
  });

  // 숫자가 항상 보이도록 설정
  $(".door-number").css({
    display: "block",
    zIndex: 6,
  });

  // 문 열림 기능 처리 (홀수 번호, 24번 제외)
  doorDays.forEach((day) => {
    $(`.day[data-day="${day}"]`).on("click", function () {
      const door = $(this);
      door.toggleClass("open"); // 문 열림 효과 추가

      // 클릭된 날짜 기록
      clickedDays.add(door.data("day"));
      checkAllDaysClicked();
    });
  });

  // 팝업 박스 클릭 이벤트 (짝수 번호)
  $(".popup-box").on("click", function () {
    const box = $(this);
    const day = box.data("day");

    // 팝업 열기
    $(".popup").removeClass("hidden");
    $(".popup-content").html(`
      <p>${popupContents[day] || "🎉 서프라이즈!"}</p>
      <button class="close-btn">닫기</button>
    `);

    // 배경색 랜덤 변경
    const newColor =
      clickColors[Math.floor(Math.random() * clickColors.length)];
    box.css("background-color", newColor);

    // 클릭된 날짜 기록
    clickedDays.add(day);
    checkAllDaysClicked();
  });

  // 팝업 닫기 버튼
  $(".popup").on("click", ".close-btn", function () {
    $(".popup").addClass("hidden");
  });

  // 모든 날짜가 클릭되었는지 확인하는 함수
  function checkAllDaysClicked() {
    if (clickedDays.size === 24) {
      showFinalMessage();
    }
  }

  // 모든 칸이 클릭되었을 때 최종 메시지 표시
  function showFinalMessage() {
    $(".popup").removeClass("hidden");
    $(".popup-content").html(`
      <h1>✨ 2025년 새해 운세 ✨</h1>
      <p>
        🩷24개의 모든 칸을 열어주셔서 감사해요🩷<br><br>
        2025년, 당신의 운세는:<br>
        <strong>${getRandomFortune()}</strong><br><br>
        🎄크리스마스와 새해에 행복과 행운이 가득하길 바래요🎁❤️
      </p>
      <button class="close-btn">닫기</button>
    `);
  }

  // 랜덤 운세 메시지 반환 함수
  function getRandomFortune() {
    const fortunes = [
      "🎄 포근한 크리스마스처럼, 당신의 마음에 따뜻한 행복이 내릴 거예요.",
      "🎁 당신을 기다리는 2025년은 반짝이는 선물처럼 행복이 가득할 거예요.",
      "🎅 산타가 귓속말하네요. '당신에게 큰 기쁨과 놀라운 기회가 찾아올 거예요!'",
      "❄️ 첫눈처럼 설레는 순간이 곧 당신을 찾아올 거예요. 기대하세요!",
      "⛄ 눈사람이 말했어요. '당신의 따뜻한 미소가 세상을 녹일 거예요.'",
      "🎀 올해는 당신을 반짝이게 해줄 소중한 인연이 다가올 거예요.",
      "🍀 행운의 바람이 당신에게로 불어오고 있어요. 멋진 일들이 기다리고 있어요.",
      "🌹 사랑과 기쁨이 꽃처럼 피어나는 한 해를 보낼 거예요.",
      "💌 작은 노력들이 모여 당신을 더 멋진 곳으로 이끌어 줄 거예요.",
      "💞 당신을 웃게 할 단 한 사람이 곧 나타날 거예요. 두근두근 준비되셨나요?",
      "🎈 마법처럼 놀라운 일이 당신의 삶에 스며들 거예요. 준비되셨나요?",
      "🕯️ 당신의 따뜻한 마음 덕분에 주변 사람들도 행복해질 거예요.",
      "🌻 햇살처럼 환한 기회가 찾아와 당신의 세상을 환하게 비출 거예요.",
      "🎁 산타가 선물을 준비했어요. 바로 당신을 위한 특별한 사랑이에요.",
      "⭐ 크리스마스의 기적처럼 당신에게도 반짝이는 순간이 찾아올 거예요.",
    ];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }

  $(document).ready(function () {
    // 짝수 번호 박스 클릭 이벤트
    $(".day").on("click", function () {
      const day = $(this).data("day");

      // 조건: 짝수 번호 (24번 포함)
      if (day % 2 === 0) {
        // 클릭된 박스에 테두리 효과 추가 (지속되도록 설정)
        $(this).addClass("clicked");
      }
    });
  });

  // 글
  $(document).ready(function () {
    // 한글 문구 타이핑 효과 실행
    setTimeout(function () {
      $("#christmas-message").css("opacity", 1); // 투명도 변경
      $("#christmas-message").css(
        "animation",
        "typing 3s steps(30, end) forwards"
      ); // 타이핑 애니메이션
    }, 2000); // Merry Christmas 타이핑 끝난 후 2초 뒤 실행
  });

  // 눈 내리는 효과
  $(document).ready(function () {
    const totalSnow = 300; // 눈송이 개수

    for (let i = 0; i < totalSnow; i++) {
      const randomX = Math.random() * 100; // 가로 위치 랜덤
      const randomDelay = Math.random() * -20; // 애니메이션 딜레이
      const randomDuration = 20 + Math.random() * 30; // 느리게 떨어지는 시간 (20s ~ 50s)
      const randomSize = Math.random() * 0.7 + 0.3; // 눈송이 크기 비율 랜덤
      const randomOpacity = Math.random() * 0.2 + 0.1; // 더 희미하게 (0.1 ~ 0.3)
      const randomTop = Math.random() * -20; // 시작점 화면 위쪽 (-20vh ~ 0vh)

      // 눈송이 div 생성
      const $snowflake = $("<div class='snow'></div>");

      // 랜덤 스타일 설정
      $snowflake.css({
        left: `${randomX}vw`,
        top: `${randomTop}vh`, // 화면 위쪽에서 시작
        animationDelay: `${randomDelay}s`,
        animationDuration: `${randomDuration}s`,
        transform: `scale(${randomSize})`,
        opacity: randomOpacity, // 투명도 적용
      });

      $("body").append($snowflake);
    }
  });
});
