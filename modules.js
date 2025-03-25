/**
 * 월드생성기
 */
class World {
    id = Math.floor(Math.random() * 100000000); // DB와 연동
    title;                       // 제목
    thumbnailURL;                // 월드 썸네일 URL
    description;                 // 설명
    role = {                     // 제작자 역할
        planning: null,     // 기획
        art: null,          // 그림
        story: null,        // 스토리
        puzzle: null,       // 퍼즐
        mechanic: null,     // 기능
        support: null       // 도움
    }
    form = "s";                  // 폼      s(슬라이드)·c(클릭앤터치)
    theme;                       // 테마    h(호러)·a(어드벤쳐)·m(미스터리)
    tag = [];                    // 태그
    postscript;                  // 후기
    difficulty;                  // 난이도
    playTime;                    // 소요 시간
    visibility = "public";       // public(공개)·unlisted(일부공개)·private(비공개)
    isRanking = false;           // 랭킹 표시 여부
    isHiddenStage = false;       // 히든 스테이지 여부
    achievement = [];            // 업적
    // === 인게임 정보 ===
    time;                        // 클리어 시간 제기
    inventory = [];              // 인벤토리
    generalVar = [];             // 일반 변수
    switchVar = [];              // 스위치 변수
    stage = [];                  // 스테이지
    // stage = [
    //     {
    //         name: "오프닝",
    //         type: 1,
    //         img: "",
    //         cut: [
    //             {
    //                 name: "",
    //                 type: 1,
    //                 img: ""
    //             },
    //             {}
    //         ]
    //     },
    //     {
    //         type:2
    //     }
    // ]

    /**
     * 방탈출 월드 생성
     * @param {문자} title 제목
     * @param {문자} thumbnailURL 썸네일URL
     * @param {문자} form s(슬라이드)·c(클릭앤터치)
     * @param {문자} theme h(호러)·a(어드벤쳐)·m(미스터리)
     */
    constructor(title, thumbnailURL, form, theme) {
        if(form) {
            this.form = form;
        }
        this.is_ranking = false
        this.title = title;
        this.thumbnailURL = thumbnailURL;
        this.theme = theme;
        this.stage[0] = new Stage();
    }

    // 업적 생성
    createAchievement() {
        this.achievement.push(new Achievement());
    }
    createGeneralVar() {

    }
    createSwitchVar() {

    }
    // 스테이지 생성
    createStage() {
        this.stage.push(new Stage());
    }
    // 스테이지 수정
    updateStage(i) {
        this.stage[i].type = 12
        this.updated_at = new Date();
    }
    // 스테이지 삭제
    deleteStage(i) {
        this.stage[i]
    }
}



class Achievement {
    name;
    constructor() {
    }
}



class GeneralVar {
    id;
    name;
    type;   // 변수 자료형
}
class SwitchVar {
    id;
    name;   // 변수명
}



/**
 * 스테이지생성기
 */
class Stage {
    name;
    type;   // n(노말)·d(죽음)·e(엔딩)·h(히든)
    imgURL;
    description;
    timeLimit;   // 스테이지 시간제한
    gateOpen = true;    // 이동할 수 있는지 여부
    closedGateMessage;  // 이동할 수 없는 게이트를 이동하려 할 때 뜨는 메시지. 예시: "{Stage.name}이(가) 잠겼습니다."
    cut = [];

    constructor() {
        this.cut[0] = new Cut();
    }

    // 컷 생성
    createCut() {
        this.cut.push(new Cut());
    }
    // 컷 수정
    updateCut(i) {
        this.cut[i].type = 1;
    }
    // 컷 삭제
    deleteCut(i) {
        this.cut
    }
    connectStage(객체) {
        if(!this.connectedStage) this.connectedStage = [];
        if(객체) this.connectedStage.push(객체);
    }
}



/**
 * 컷 생성기
 */
class Cut {
    name;   // 상하·동서남북으로도 이름지을 수 있겠다
    type;   // n(노말)·p(퍼즐)·m(스테이지 이동)·f(실패)·
    imgURL;
    timeLimit;  // 시간제한
    setVar;
    // direction;  // 방향: 상·하·동·서·남·북 (유저가 직접 별명 지을 수 있음)
    constructor() {

    }
    setVar() {}
    connectCut(객체) {
        if(!this.connectedCut) this.connectedCut = [];
        if(객체) this.connectedCut.push(객체);
    }
    createPuzzle() {
        this.puzzle = new Puzzle();
    }
}



class Puzzle {
    id;
    type;
    answer;
    hint;
    constructor() {
        this.transition = new Transition();
    }
    createPuzzle() {
        switch(this.type) {
            case "choice":  // 선택지
                // 선택지 생성
                break;
            case "dial":    // 다이얼
                // 다이얼 생성
                break;
        }
    }
}



class Transition {
    id;
    time;
}



class Item {
    name;
    type;
    iconURL;        // 아이템 아이콘 url
    imgURL;         // 아이템 상세 이미지 url
    description;
    quantity;   // 수량
}



// 모듈 내보내기
export { World, Stage, Cut }