/**
 * 월드생성기
 */
class World {
    id = Math.floor(Math.random() * 100000000);
    role = {
        planning: null, art: null, story: null, mechanics: null, support: null
    }
    title;                      // 제목
    thumbnailURL;               // 월드 썸네일 URL
    form = "s";                 // 폼 s(슬라이드)·c(클릭앤터치)
    theme;                      // 테마 h(호러)·a(어드벤쳐)·m(미스터리)
    level;                      // 난이도
    play_time;                  // 소요 시간
    is_ranking = false;         // 랭킹 여부
    view = 0;                   // 조회수
    grade = 0                   // 평점
    gradeList = []              // 평점 점수들들
    created_at = new Date();    // 처음 만든 날짜
    updated_at;                 // 최근 수정된 날짜
    stage = [];
    // stage = new Stage();
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
        this.title = title;
        this.thumbnailURL = thumbnailURL
        this.form = form;
        this.theme = theme;
        this.stage[0] = new Stage(); 
    }

    // 스테이지 생성
    createStage(i) {
        this.stage[i] = new Stage();
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
    addView() {
        this.view++;
    }
    setGrade() {
        let num = 0;
        this.gradeList.forEach(element => {
            num += element;
        });
        num / this.gradeList.length;
    }
}


/**
 * 스테이지생성기
 */
class Stage {
    name;
    type;
    img;
    cut = [];
    constructor() {
        this.cut[0] = new Cut();
    }

    // 컷 생성
    createCut(i) {
        this.cut[i] = new Cut();
    }
    // 컷 수정
    updateCut(i) {
        this.cut[i].type = 1;
    }
    // 컷 삭제
    deleteCut(i) {
        this.cut[i]
    }
}


/**
 * 컷 생성기
 */
class Cut {
    name;
    type;
    img;
    constructor() {

    }
}


// 모듈 내보내기
export { World, Stage, Cut }