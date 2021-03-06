const qnaList = [
  {
    q: '1. 마트에 장보러 갈 때는?',
    a: [
      { answer: 'a. 짐도 있으니 편리하게 교통수단을 이용한다.', type: [0, 1, 2, 3] },
      { answer: 'b. 날씨가 안좋을 때 빼고는 걸어가려고 한다.', type: [4, 5, 6, 7, 8] },
      { answer: 'c. 나는야 뚜벅이. 대부분 걸어서 간다.', type: [9, 10, 11] },
    ]
  },
  {
    q: '2. 정해진 운동 시간이 있다. ',
    a: [
      { answer: 'a. 할 일이 너무 많다. 운동은 나중에~', type: [0, 1] },
      { answer: 'b. 일주일에 하루 정도는 스포츠를 즐긴다.', type: [2, 3, 4, 5, 6, 7] },
      { answer: 'c. 일주일에 세 번 이상 규칙적인 운동을 한다.', type: [8, 9, 10, 11] },
    ]
  },
  {
    q: '3. 앉은 채로도 엉덩이에 힘을 줄 수 있다.',
    a: [
      { answer: 'a. 네? 어떻게 하라고요?', type: [0, 1, 2, 3] },
      { answer: 'b. 괄약근과 엉덩이를 정확히 구분할 수 없다.', type: [4, 5, 6, 7, 8, 9] },
      { answer: 'c. 정확한 부위에 힘을 줄 수 있다.', type: [10, 11] }
    ]
  },
  {
    q: '4. 오래 앉을 때에는 중간에 일어나는 시간을 갖는다.',
    a: [
      { answer: 'a. 뛰어난 집중력으로 오래 앉기 능력자다. ', type: [0, 1 ] },
      { answer: 'b. 무언가 하나 끝내면 잠시 휴식을 갖는다. ', type: [2, 3, 4, 5, 6, 7 ] },
      { answer: 'c. 한 시간에 한 번은 꼭 스트레칭을 한다. ', type: [8, 9, 10, 11 ] },
    ]
  },
  {
    q: '5. 평상시 목이나 허리에 통증을 느낀다.',
    a: [
      { answer: 'a. 자주 어깨가 뭉치고 목이 뻐근하다.', type: [0, 1, 2, 3 ] },
      { answer: 'b. 가끔 통증을 느끼지만 지금은 괜찮다.', type: [4, 5, 6, 7 ]},
      { answer: 'c. 고통따위 느껴본 적 없다.', type: [8, 9, 10, 11] },
    ]
  },

  {
    q: '6. 하루 중 앉아있는 시간이 대부분이다.',
    a: [
      { answer: 'a. 어쩔 수 없이 앉을 일이 많다.', type: [0, 1, 2, 3, 4, 5 ] },
      { answer: 'b. 그래도 중간중간 일어서려고 노력한다.', type: [6, 7, 8, 9 ] },
      { answer: 'c. 전혀. 활동적인 날들을 보내고 있다.', type: [10, 11 ] },
    ]
  },
  {
    q: '7. 엉덩이를 위해 따로 투자해본 적이 없다.',
    a: [
      { answer: 'a. 뭔가 먹어야 되는 건가요?', type: [0, 1, 2, 3 ] },
      { answer: 'b. 홈트는 항상 작심삼일...', type: [4, 5, 6, 7 ] },
      { answer: 'c. 건강한 엉덩이를 위해 꾸준히 투자한다.', type: [8, 9, 10, 11 ] },
    ]
  },
  {
    q: '8. 평소 부지런하다는 소리를 많이 듣는다.',
    a: [
      { answer: 'a. 무슨 말씀, 편한게 최고!', type: [0, 1, 2, 3 ] },
      { answer: 'b. 필요에 의한 부지런함으로 살아간다.', type: [4, 5, 6, 7, 8, 9 ] },
      { answer: 'c. 살면서 부지런하다는 말 많이 들어봤다.', type: [10, 11 ] },
    ]
  },
  {
    q: '9. 내 엉덩이에 자신이 있다.',
    a: [
      { answer: 'a. 쉿. 부끄러우니 비밀로 하겠다.', type: [0, 1, 2, 3 ] },
      { answer: 'b. 엉덩이가 거기서 거기 아니야?', type: [4, 5, 6, 7 ] },
      { answer: 'c. 자신이 있다!', type: [8, 9, 10, 11 ] },
    ]
  },
  {
    q: '10. 출퇴근(등하교)시 당신의 교통수단은? ',
    a: [
      { answer: 'a. 기술의 발전을 즐기며 자동차나 택시를 탄다.', type: [0, 1 ] },
      { answer: 'b. 지하철이나 버스 등 대중교통을 이용한다.', type: [2, 3, 4, 5, 6, 7, 8, 9 ] },
      { answer: 'c. 자전거를 타거나 걸어서 간다.', type: [10, 11 ] },
    ]
  },
  {
    q: '11. 당신의 취미생활은? ',
    a: [
      { answer: 'a. 이불 밖은 위험해!', type: [0, 1 ] },
      { answer: 'b. 가까운 곳에서 문화생활을 즐긴다.', type: [2, 3, 4, 5, 6, 7 ] },
      { answer: 'c. 스포츠나 야외활동을 즐긴다.', type: [8, 9, 10, 11 ] },
    ]
  }
]

const infoList = [
  {
    name: '삼가 엉덩의 명복을 빕니다 <똥멍덩이>',
    desc: '항상 뒹굴뒹굴 굴러다니는 당신! 엉덩이가 깔려 죽었어요! 혹시 아직 숨이 붙어있을지 모르니 한 번 일어나 보실래요? 집 근처 카페라도 잠깐 나가서 바람 좀 쐬는 건 어떨까요? '
  },
  {
    name: '삼가 엉덩의 명복을 빕니다 <똥멍덩이>',
    desc: '항상 뒹굴뒹굴 굴러다니는 당신! 엉덩이가 깔려 죽었어요! 혹시 아직 숨이 붙어있을지 모르니 한 번 일어나 보실래요? 집 근처 카페라도 잠깐 나가서 바람 좀 쐬는 건 어떨까요? '
  },
  {
    name: '앉는 게 제일 좋아 <멍덩이>',
    desc: '의자에 중독된 당신! 더 이상 앉아 있다가는 엉덩이가 깔려 죽겠어요. 근로 시간이 한참은 초과된 엉덩이는 휴가가 필요해요. 엉덩이에게 가장 좋은 휴가는 일어서기랍니다. '
  },
  {
    name: '앉는 게 제일 좋아 <멍덩이>',
    desc: '의자에 중독된 당신! 더 이상 앉아 있다가는 엉덩이가 깔려 죽겠어요. 근로 시간이 한참은 초과된 엉덩이는 휴가가 필요해요. 엉덩이에게 가장 좋은 휴가는 일어서기랍니다. '
  },
  {
    name: '엉덩이 기억상실증에 걸린 <엉덩구리>',
    desc: '엉덩이 기억을 잃어버린 당신! 기억상실증에 걸린 엉덩이는 꾸준히 노력하면 다시 원래 모습으로 돌아갈 수 있어요. 아무 기억도 없는 엉덩이는 관심과 사랑이 필요하답니다. '
  },
  {
    name: '엉덩이 기억상실증에 걸린 <엉덩구리>',
    desc: '엉덩이 기억을 잃어버린 당신! 기억상실증에 걸린 엉덩이는 꾸준히 노력하면 다시 원래 모습으로 돌아갈 수 있어요. 아무 기억도 없는 엉덩이는 관심과 사랑이 필요하답니다. '
  },
  {
    name: '가장 보통의 엉덩이 <쏘쏘덩이>',
    desc: '아직은 괜찮은 당신! 지금은 괜찮다고 안도하기는 일러요. 엉덩이 근육은 사용하지 않으면 금세 기억을 잃어버리니 조심하자구요! 조금만 노력하면 건강한 엉덩이를 가질 수 있는 당신! 오히려 좋아. '
  },
  {
    name: '가장 보통의 엉덩이 <쏘쏘덩이>',
    desc: '아직은 괜찮은 당신! 지금은 괜찮다고 안도하기는 일러요. 엉덩이 근육은 사용하지 않으면 금세 기억을 잃어버리니 조심하자구요! 조금만 노력하면 건강한 엉덩이를 가질 수 있는 당신! 오히려 좋아. '
  },
  {
    name: '엉덩이 좀 쓸 줄 아는 놈인가? <똑덩이>',
    desc: '평소 건강에 신경을 쓰는 당신! 건강한 엉덩이는 건강한 생활습관을 보여주죠. 꾸준히 엉덩이를 위해 신경쓰는 당신은 스마트한 엉덩이의 소유자! 주변에 기억을 잃은 다른 엉덩이들을 도와주는 건 어떨까요? '
  },
  {
    name: '엉덩이 좀 쓸 줄 아는 놈인가? <똑덩이>',
    desc: '평소 건강에 신경을 쓰는 당신! 건강한 엉덩이는 건강한 생활습관을 보여주죠. 꾸준히 엉덩이를 위해 신경쓰는 당신은 스마트한 엉덩이의 소유자! 주변에 기억을 잃은 다른 엉덩이들을 도와주는 건 어떨까요? '
  },
  {
    name: '엉덩이 아이비리그 <똑똑덩이>',
    desc: '활력이 넘치는 당신! 평소 운동을 즐기시는 분인가요? 아주 건강한 삶을 살고있는 당신은 엉덩이계의 아이비리그~! 기억을 잃어버린 다른 엉덩이들에게 구원의 손길을 내밀어주세요~! '
  },
  {
    name: '엉덩이 아이비리그 <똑똑덩이>',
    desc: '활력이 넘치는 당신! 평소 운동을 즐기시는 분인가요? 아주 건강한 삶을 살고있는 당신은 엉덩이계의 아이비리그~! 기억을 잃어버린 다른 엉덩이들에게 구원의 손길을 내밀어주세요~! '
  },
]
