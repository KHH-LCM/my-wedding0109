/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "강희훈",
    father: "강준모",
    mother: "김금자",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이찬미",
    father: "이양재",
    mother: "김금자",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-09",
    time: "11:00",
    venue: "더에끌라프리베",
    hall: "더드림홀",
    address: "구로중앙로 134 리치몰 1층",
    tel: "0507-1448-7002",
    mapLinks: {
      kakao: "https://kko.to/n3Hb1vtHZo",
      naver: "https://naver.me/GRo4lqZD"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "강희훈", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "강준모", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김금자", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이찬미", bank: "농협은행", number: "352-0358-6845-03" },
      { role: "아버지", name: "이양재", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "김금자", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2027년 1월 9일, 소중한 분들을 초대합니다."
  }
};
