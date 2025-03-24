/**
 * 월드생성기
 */
class World {
    id = Math.floor(Math.random() * 100000000); // DB와 연동
    role = {
        planning: null,     // 기획
        art: null,          // 그림
        story: null,        // 스토리
        puzzle: null,       // 퍼즐
        mechanic: null,    // 기능
        support: null       // 도움
    }
    title;                       // 제목
    description;                 // 설명
    thumbnailURL;                // 월드 썸네일 URL
    form = "s";                  // 폼      s(슬라이드)·c(클릭앤터치)
    theme;                       // 테마    h(호러)·a(어드벤쳐)·m(미스터리)
    tag = [];                    // 태그
    difficulty;                  // 난이도
    play_time;                   // 소요 시간
    visibility = "public";         // public(공개)·unlisted(일부공개)·private(비공개)
    is_ranking = false;          // 랭킹 표시 여부
    achievement = [];            // 업적
    inventory = [];              // 인벤토리
    // view = 0;                 // 조회수
    // grade = 0;                // 평점
    // gradeList = [];           // 평점 리스트
    // created_at = new Date();  // 처음 만든 날짜
    // updated_at;               // 최근 수정된 날짜
    stage = [];
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
    // addView() {
    //     this.view++;
    // }
    // getGrade(num) {
    //     this.gradeList.push(num);
    // }
    // setGrade() {
    //     let num = 0;
    //     this.gradeList.forEach(element => {
    //         num += element;
    //     });
    //     num / this.gradeList.length;
    // }
    createAchievement() {
        this.achievement.push(new Achievement());
    }
}



class Achievement {
    name;
    constructor() {
    }
}



/**
 * 스테이지생성기
 */
class Stage {
    name;
    type;   // n(노말)·d(죽음)·e(엔딩)
    imgURL;
    description;
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
}


/**
 * 컷 생성기
 */
class Cut {
    name;
    type;   // n(노말)·p(퍼즐)·m(스테이지 이동)·f(실패)·
    imgURL;
    constructor() {

    }
}


// 모듈 내보내기
export { World, Stage, Cut }