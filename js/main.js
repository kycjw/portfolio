$(window).ready(function(){
    // source:  https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    var portfolioList = [
        {
            title : "예일이퀍먼트",
            imgName : "img_yale",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)"
            ],
            link : "http://www.yalekorea.co.kr/"
        },
        {
            title : "하이스터코리아",
            imgName : "img_hyster",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "예일이퀍먼트 카피 사이트"
            ],
            link : "http://www.hysterkorea.co.kr/"
        },
        {
            title : "예일로직스",
            imgName : "img_yalelogics",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 70%)"
            ],
            link : "http://www.yalelogis.co.kr/"
        },
        {
            title : "고려호이스트",
            imgName : "img_khc",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100%)"
            ],
            link : "http://khc.webmoa21.co.kr/kr/"

        },
        {
            title : "와이바이오로직스",
            imgName : "img_ybiologics",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://ybiologics.com/kr/"

        },
        {
            title : "와이바이오로직스CRO",
            imgName : "img_ybiocro",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://ybioservice.com/kr/"

        },
        {
            title : "삼영에스앤씨",
            imgName : "img_samyoung",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "product 공통 페이지 Ajax 사용하여 작업"
            ],
            link : "http://www.samyoungsnc.com/"

        },
        {
            title : "지아이셀",
            imgName : "img_gicell",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://gi-cell.com/kr/index.asp"

        },
        {
            title : "6G글로벌",
            imgName : "img_6gglobal",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 80%)"
            ],
            link : "http://6gglobal.org/kr/"
        },
        {
            title : "인마크글로벌",
            imgName : "img_inmark",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://www.inmarkglobal.com/"
        },
        {
            title : "펄송",
            imgName : "img_purrsong",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "https://purrsong.com/"
        },
        {
            title : "쥬피터익스프레스",
            imgName : "img_jupiter",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://jupiterexp.com/kr/"
        },
        {
            title : "이노피아테크",
            imgName : "img_innopia",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://www.innopia.co.kr/en/"
        },
        {
            title : "센솔루션코리아",
            imgName : "img_sensolution",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://www.sensolution.co.kr/"
        },
        {
            title : "보라전기공업",
            imgName : "img_pora",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://pora.com/kr/"
        },
        {
            title : "키즈캐슬",
            imgName : "img_kizcastle",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "fullpage.js 사용하여 작업"
            ],
            link : "http://junytony.co.kr/kr/"
        },
        {
            title : "셀레믹스",
            imgName : "img_celemics",
            popTxt : [
                "유지보수",
                "gnb 하위 메뉴 디자인 변경(PRODUCT, SERVICE)",
                "추가페이지 작업 <br> - PRODUCT, SERVICE <br> - NEWS&SUPPORT <br>(Resources, Promotions, Publications)"
            ],
            link : "https://www.celemics.com/"
        },
        {
            title : "센트로이드",
            imgName : "img_centroid",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://centroid.webmoa21.co.kr/"
        },
        {
            title : "천생보이",
            imgName : "img_boyjoa",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://cheonsaengboi.com"
        },
        {
            title : "오산중기",
            imgName : "img_osan",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://www.osancrane.co.kr/"
        },
        {
            title : "이에스티그린",
            imgName : "img_estgreen",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://estgreen.com/"
        },
        {
            title : "에코월드",
            imgName : "img_ecoworld",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "http://ecoworldpharm.com/kr/"
        },
        {
            title : "디팍",
            imgName : "img_dpac",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "https://dpacpnp.com/"
        },
        {
            title : "원자력미래기술정책연구소",
            imgName : "img_niftep",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://niftep.snu.ac.kr/"

        },
        {
            title : "림스코",
            imgName : "img_limsco",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://www.ilimsco.com/kr/"

        },
        {
            title : "건설코킹",
            imgName : "img_cscaulking",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://cscaulking.com/"

        },
        {
            title : "엘림존",
            imgName : "img_elimzone",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://elimz.webmoa21.co.kr/"

        },
        {
            title : "제리코무역",
            imgName : "img_jerrykor",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://jerrykor.co.kr"

        },
        {
            title : "특허법인 AIP",
            imgName : "img_aiplaw",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://aiplaw.com/"

        },
        {
            title : "숙명여자대학교 음악치료대학원",
            imgName : "img_smmt",
            popTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://sm-mt.kr/"

        }
    ]

    var workListB = $(".work .listB");
    var popBox = $(".work .popBox");

    for(var i = 0; i < portfolioList.length; i++){
        var listClone = workListB.children("li:eq(0)").clone();
        if(i < portfolioList.length - 1){
            workListB.append(listClone);
        }
    }
    workListB.children("li").each(function(index){
        workInfo($(this), index);
    });

    workListB.children("li").on("click", function(){
        var idx = $(this).index();
        popBox.find(".txt dl > dt").html("");
        popBox.find(".txt dl > dt").html(portfolioList[idx].title);
        popBox.show();

        popBox.find(".txt > dd ul").html("")
        for(var i = 0; i < (portfolioList[idx].popTxt).length; i++){ //클릭한 list의 poptxt 개수 
            popBox.find(".txt dl > dd ul").append("<li>"+"<i class=xi-check-circle></i>"+portfolioList[idx].popTxt[i]+"</li>")
        }

        popBox.find(".viewBtn").attr("href",portfolioList[idx].link);
        
    });
    popBox.find(".close > button").on("click", function(){
        popBox.find(".txt dl > dt").html("");
        popBox.find(".txt dl > dd ul").html("")
        popBox.hide();

    });

    function workInfo(workListB, index){
        workListB.find(".img").find("img").attr("src","img/"+portfolioList[index].imgName+".jpg");
        workListB.find(".over .tit").html(portfolioList[index].title);
    };





});