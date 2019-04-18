    var scrolltop = new Array();  
   var i = 0;  
   scrolltop[0] = 0;
        var con1_h;
        var con2_h;
        var con3_h;
        var con4_h;
        var con5_h;
    $(document).scroll(function(){  
       i++;  
        scrolltop[i] = $(document).scrollTop();  
        if (scrolltop[i] > scrolltop[i-1]) {  
            $("#menu").fadeOut()  
        }else{  
            $("#menu").fadeIn()  
        };
        if(scrolltop[i]>con1_h-280){
            $("#textcont1").animate({opacity:'1'},500);
            $("#text1").html("<br>根据乡村资源禀赋，因地制宜强制村庄规划，<br> 注重传统文化的保护和传承，维护乡村风貌，突出地域特色。 <br> 村庄规模较大、情况较复杂时，宜编制经济可行的村庄整治等专项规划。<br>历史文化名村和传统村落应编制历史文化名村保护规划和传统村落保护发展规划。");
            $("#t1").animate({opacity:'1'},500);
            $("#t2").animate({opacity:'1'},500);
        }
        if(scrolltop[i]>con2_h-280){
            $("#textcont2").animate({opacity:'1'},500);
            $("#text2").html("<br>大气、声、土壤环境质量应分别达到GB3095、GB3096、GB5618中<br/>与当地环境功能区相对应的要求。  <br>村域内主要河流、湖泊、水库等地表水体水质，沿海村庄的近岸海域海水水质<br/>应分别达到GB3838、GB3097中与当地环境功能区相对应的要求。 ");
        }
        if(scrolltop[i]>con3_h-280){
            $("#textcont3").animate({opacity:'1'},500);
            $("#text3").html("<br/>制定产业发展规划，三产结构合理、融合发展，注重培育惠及面广、效益高、有特色的主导产业。  <br/>创新产业发展模式，培育特色村、专业村，带动经济发展，促进农民增收致富。 <br/> 村级集体经济有稳定的收入来源，能够满足开展村务活动和自身发展的需要。 ");
        }
        if(scrolltop[i]>con4_h-280){
            $("#textcont4").animate({opacity:'1'},500);
            $("#text4").html(" 医疗卫生  <br/>建立健全基本公共卫生服务体系。建有符合国家相关规定、建筑面积≥60m2的村卫生室；人口较少的村可合并设立，社区卫生服务中心或乡镇卫生院所在地的村可不设。  <br/> 建立统一、规范的村民健康档案，提供计划免疫、<br/>传染病防治及儿童、孕产妇、老年人保健等基本公共卫生服务。 <br/>公共教育  <br/>村庄幼儿园和中小学建设应符合教育部门布点规划要求。<br/>村庄幼儿园、中小学学校建设应分别符合GB/T29315、建标109 的要求，并符合国家卫生标准与安全标准。  <br/> 普及学前教育和九年义务教育。学前一年毛入园率≥85%； <br/>九年义务教育目标人群覆盖率达100%，巩固率≥93%。 <br/>通过宣传栏、广播等渠道加强村民普法、科普宣传教育。");

        }
        if(scrolltop[i]>con5_h-350){
            $("#textcont5").animate({opacity:'1'},500);
            $("#text5").html("工作要求<br/>遵循民主决策、民主管理、民主选举、民主监督。  <br/>制定村民自治章程、村民议事规则、村务公开、重大事项决策、财务管理等制度，并有效实施。 <br/> 具备协调解决纠纷和应急的能力。 <br/> 建立并规范各项工作的档案记录。 ");

        }

    })  
$(document).ready(function(){
    con1_h=  $("#con1").offset().top;
    con2_h = $("#con2").offset().top;
    con3_h = $("#con3").offset().top;
    con4_h = $("#con4").offset().top;
    con5_h = $("#con5").offset().top;
  $("ul li,.return,.return0,.sdtitle,.smalltitle").mouseenter(function(){
    $(this).css("color","#ff9f19");
  });
   $("ul li,.return,.return0,.sdtitle,.smalltitle").mouseleave(function(){
    $(this).css("color","#FFF");
  });
$("#sm1").click(function(){
	$("#textcont1").animate({opacity:'1'},500);
	$("#text1").html("<br>根据乡村资源禀赋，因地制宜强制村庄规划，<br> 注重传统文化的保护和传承，维护乡村风貌，突出地域特色。 <br> 村庄规模较大、情况较复杂时，宜编制经济可行的村庄整治等专项规划。<br>历史文化名村和传统村落应编制历史文化名村保护规划和传统村落保护发展规划。");
})
$("#sm2").click(function(){
	$("#textcont1").animate({opacity:'1'},500);
	$("#text1").html("<br>村庄规划编制应深入农户实地调查，充分征求意见，并宣讲规划意图和规划内容。<br>   村庄规划应经村民会议或村民代表会议讨论通过，<br>规划总平面图及相关内容应在村庄显著位置公示，<br>经批准后公布、实施。");
})

$("#sm3").click(function(){
	$("#textcont1").animate({opacity:'1'},500);
	$("#text1").html("村庄规划应符合土地利用总体规划，<br>做好与镇域规划、经济社会发展规划和各项专业规划的协调衔接，<br>科学区分生产生活区域，功能布局合理、安全、宜居、美观、和谐，配套完善。<br>   结合地形地貌、山体、水系等自然环境条件，<br>科学布局，处理好山形、水体、道路、建筑的关系。 <br>村庄规划应科学、合理、统筹配置土地，依法使用土地，不得占用基本农田，慎用山坡地。<br> 公共活动场所的规划与布局应充分利用闲置土地、现有建筑及设施等。");
})
$("#sm4").click(function(){
	$("#textcont1").animate({opacity:'1'},500);
	$("#text1").html("编制规划应以需求和问题为导向，综合评价村庄的发展条件，<br>提出村庄建设与治理、产业发展和村庄管理的总体要求。<br>   统筹村民建房、村庄整治改造，并进行规划设计，包含建筑的平面改造和立面整饰。   <br> 确定村民活动、文体教育、医疗卫生、社会福利等公共服务和管理设施的用地布局和建设要求。   <br>确定村域道路、供水、排水、供电、通信等各项基础设施配置和建设要求，<br>包括布局、管线走向、敷设方式等。  <br> 确定农业及其他生产经营设施用地。   <br>确定生态环境保护目标、要求和措施，<br>确定垃圾、污水收集处理设施和公厕等环境卫生设施的配置和建设要求。   <br>确定村庄防灾减灾的要求，做好村级避灾场所建设规划；<br>对处于山体滑坡、崩塌、地陷、地裂、泥石流、山洪冲沟等<br>地质隐患地段的农村居民点，应经相关程序确定搬迁方案。   <br>确定村庄传统民居、历史建筑物与构筑物、古树名木等人文景观的保护与利用措施。<br>规划图文表达应简明扼要、平实直观。 ");
})
$("#sm5").click(function(){
	$("#textcont1").animate({opacity:'1'},500);
	$("#text1").html("村庄建设应按规划执行。<br>新建、改建、扩建住房与建筑整治应符合建筑卫生、安全要求，注重与环境协调；<br>宜选择具有乡村特色和地域风格的建筑图样；倡导建设绿色农房。  <br>保持和延续传统格局和历史风貌，维护历史文化遗产的完整性、真实性、延续性和原始性。 <br>整治影响景观的棚舍、残破或倒塌的墙体，清除临时搭盖，<br>美化影响村庄空间外观视觉的外墙、屋顶、窗户、栏杆等，<br>规范太阳能热水器、屋顶空调等设施的安装。  <br>逐步实施危旧房的改造、整治。");
})
$("#sm6").click(function(){
	$("#textcont1").animate({opacity:'1'},500);
	$("#text1").html("道路 <br>村主干道建设应进出畅通、路面硬化率达100%。  <br>村内道路应以现有道路为基础，顺应现有村庄格局，保留原始形态走向，就地取材。<br>村主干道应按照GB5768.1和GB568.2的要求设置道路交通标志，<br>村口应设村民标识；历史文化名村、传统村落、特色景观旅游景点应设置指示牌。 <br>利用道路周边、空余场地，适当规划公共停车场（泊位）。 <br> 桥梁  <br> 安全美观，与周围环境相协调，体现地域风格，提倡使用本地天然材料，保护古桥。  <br>维护、改造可采用加固基础、新浦桥面、增加护栏等措施，<br>并设置安全设施和警示标志。 <br>饮水  <br> 应根据村庄分布特点、生活水平和区域水资源等条件，<br>合理确定用水量指标、供水水源和水压要求。  <br>应加强水源地保护、保障农村饮水安全，生活饮用水的水质应符合GB5749的要求。 <br>供电  <br> 农村电力网建设与改造的规划设计应符合DL/T 5118的要求，<br>电压等级应符合GB/T156的要求，供电应能满足村民基本生产生活需要。 <br>电线杆应排列整齐，安全美观，无私拉乱接电线、电缆现象。  <br>合理配置照明路灯，宜使用节能灯具。 <br>通信   广播、电视、电话、网络、邮政等公共通信设施齐全、信号通畅，线路架设规划、安全有序；有条件的村庄可采用管道下地敷设。");
})

$("#sm7").click(function(){
	$("#textcont1").animate({opacity:'1'},500);
	$("#text1").html("<br>结合实际开展土地整治和保护；适合高标准农田建设的重点区域，<br>按GB/T30600的要求进行规范建设。  <br>开展农田水利设施治理；防洪、排涝和灌溉保证率等达到,<a href='#'>GB50201</a>和GB50288的要求；<br>注重抗旱、防风等防灾基础设施的建设和配备。  <br>结合产业发展、配备先进、适用的现代化农业生产设施。");
})
$("#2sm1").click(function(){
	$("#textcont2").animate({opacity:'1'},500);
	$("#text2").html("<br>大气、声、土壤环境质量应分别达到GB3095、GB3096、GB5618中<br/>与当地环境功能区相对应的要求。  <br>村域内主要河流、湖泊、水库等地表水体水质，沿海村庄的近岸海域海水水质<br/>应分别达到GB3838、GB3097中与当地环境功能区相对应的要求。 ");
})

$("#2sm2").click(function(){
	$("#textcont2").animate({opacity:'1'},500);
	$("#text2").html("农业污染防治  <br/>推广植物病虫害统防统治，采用农业、物理、生物、化学等综合防治措施，<br/>不得使用明令禁止的高毒高残留农药，按照 GB4285、GB/T8321的要求合理用药。  <br/> 推广测土配方施肥技术，施用有机肥、缓释肥；肥料施用符合NY/T486的要求。<br/> 农业固体废物污染控制和资源综合利用可按HI588的要求进行；<br/>农药瓶、废弃塑料薄膜、育秧盘等农业生产废弃物及时处理；<br/>农膜回收率≥80%；农作物秸秆综合利用率≥70%。  <br/>畜禽养殖场（小区）污染物排放应符合GB18596的要求，畜禽粪便综合利用率≥80%；<br/>病死畜禽无害化处理率达100%；水产养殖废水应达标排放。 <br/> 工业污染防治 <br/> 村域内工业企业生产过程中产生的废水、废气、噪声、固体废物等污染物达标排放，<br/>工业污染源达标排放率达100%。 <br/> 生活污染防治 <br/>生活垃圾处理  <br/> 应建立生活垃圾收运处置体系，生活垃圾无害化处理率≥ 80%。  <br/>应合理配置垃圾收集点、建筑垃圾堆放点、垃圾箱、垃圾清运工具等，<br/>并保持干净整洁、不破损、不外溢。  <br/> 推行生活垃圾分类处理和资源化利用；垃圾应及时清运，防止二次污染。  <br/>生活污水处理  <br/> 应以粪污分流、雨污分流为原则，综合人口分布、污水水量、经济发展水平、环境特点、气候条件、地理状况，以及现有的排水体制、排水管网等确定生活污水收集模式。  <br/>应根据村落和农户的分布，可采用集中处理或分散处理或集中与分散处理相结合的方式，<br/>建设污水处理系统并定期维护，生活污水处理农户覆盖率≥70%。  <br/> 清洁能源使用应科学使用并逐步减少木、草、秸秆、竹等传统燃料的直接使用，<br/>推广使用电能、太阳能、风能、沼气、天然气等清洁能源，使用清洁能源的农户数比例≥70%");
})

$("#2sm3").click(function(){
	$("#textcont2").animate({opacity:'1'},500);
	$("#text2").html("对村庄山体、森林、湿地、水体、植被等自然资源进行生态保育，保持原生态自然环境。<br/>开展水土流失综合治理，综合治理技术按GB/T16459的要求执行；<br/>防止人为破坏造成新的水土流失。 <br/>开展荒漠化治理，实施退耕还林还草，规范采砂、取水、取土、取石行为。<br/> 按GB50445的要求对村庄内坑塘河道进行整治，保持水质清洁和水流通畅，<br/>保护原生植被。岸边宜种植适生植物，绿化配置合理、养护到位。<br/>改善土壤环境，提高农田质量，对污染土壤按HJ25.4的要求进行修复。<br/>实施增殖放流和水产养殖生态环境修复。<br/>外来物种引种应符合相关规定，防止外来生物入侵。  ");
})

$("#2sm4").click(function(){
	$("#textcont2").animate({opacity:'1'},500);
	$("#text2").html("村容维护  <br/>村域内不应有露天焚烧垃圾和秸秆的现象，水体清洁、无异味。<br/>道路路面平整，不应有坑洼、积水等现象；<br/>道路及路边、河道岸坡、绿化带、花坛、公共活动场地等可视范围内无明显垃圾。 <br/>房前屋后整洁，无污水溢流，无散落垃圾；建材、柴火等生产生活用品集中有序存放。  <br/>按规划在公共通道两侧划定一定范围的公用空间红线，不得违章占道和占用红线。  <br/>宣传栏、广告牌等设置规范，整洁有序；村庄内无乱贴乱画乱刻现象。<br/>划定畜禽养殖区域，人畜分离；农家庭院畜禽圈养，保持圈舍卫生，不影响周边生活环境。  <br/>规范殡葬管理，尊重少数民族的丧葬习俗，倡导生态安葬。 <br/>环境绿化  <br/> 村庄绿化宜采用本地果树林木花草品种，<br/>兼顾生态、经济和景观效果，与当地的地形地貌相协调；<br/>林草覆盖率山区≥80%，丘陵≥50%，平原≥20%。  <br/> 庭院、屋顶和围墙提倡立体绿化和美化，适度发展庭院经济。 <br/> 古树名木采取设置围护栏或砌石等方法进行保护，并设标志牌。  <br/>厕所改造  <br/> 实施农村户用厕所改造，户用卫生厕所普及率≥80%，卫生应符合GB19379的要求。  <br/>合理配置村庄内卫生公厕，不应低于1座/600户，<br/>按GB7959的要求进行粪便无害化处理；<br/>卫生公厕有专人管理，定期进行卫生消毒，保持干净整洁。  <br/>村内无露天粪坑和简易茅厕。  <br/>病媒生物综合防治按照GB/T27774的要求组织进行鼠、蝇、蚊、蟑螂等病媒生物综合防治。 ");
})

$("#3sm1").click(function(){
	$("#textcont3").animate({opacity:'1'},500);
	$("#text3").html("<br/>制定产业发展规划，三产结构合理、融合发展，注重培育惠及面广、效益高、有特色的主导产业。  <br/>创新产业发展模式，培育特色村、专业村，带动经济发展，促进农民增收致富。 <br/> 村级集体经济有稳定的收入来源，能够满足开展村务活动和自身发展的需要。 ");
})


$("#3sm2").click(function(){
	$("#textcont3").animate({opacity:'1'},500);
	$("#text3").html("br/>发展种养大户、家庭农场、农民专业合作合作社等新型经营主体。  <br/>发展现代农业，积极推广适合当地农业生产的新品种、新技术、新机具及新种养模式，<br/>促进农业科技成果转化；鼓励精细化、集约化、标准化生产，培育农业特色品牌。  <br/>发展现代林业，提倡种植高效生态的特色经济林果和花卉苗木；<br/>推广先进适用的林下经济模式，促进集约化、生态化生产。<br/>发展现代畜牧业，推广畜禽生态化、规模化养殖。  <br/>沿海或水资源丰富的村庄，发展现代渔业，推广生态养殖、水产良种和渔业科技，<br/>落实休渔制度，促进捕捞业可持续发展。   ");
})


$("#3sm3").click(function(){
	$("#textcont3").animate({opacity:'1'},500);
	$("#text3").html("<br/>结合产业发展规划，发展农副产品加工、林产品加工、手工制作等产业，提高农产品的附加值。  <br/>引导工业企业进入工业园区，防止化工、印染、电镀等高污染、高能耗、高排放企业向农村转移。 ");
})


$("#3sm4").click(function(){
	$("#textcont3").animate({opacity:'1'},500);
	$("#text3").html("<br/>依托乡村自然资源、人文禀赋、乡土风情及产业特色，发展形式多样、特色鲜明的<br/>乡村传统文化、餐饮、旅游休闲产业，配备适当的基础设施。 <br/>发展家政、商贸、美容美发、养老托幼等生活性服务业。 <br/>鼓励发展农技推广、动植物疫病防控、农资供应、农业信息化、<br/>农业机械化、农产品流通、农业金融、保险服务等农业社会化服务业。 ");
})

$("#4sm1").click(function(){
	$("#textcont4").animate({opacity:'1'},500);
	$("#text4").html(" 医疗卫生  <br/>建立健全基本公共卫生服务体系。建有符合国家相关规定、建筑面积≥60m2的村卫生室；人口较少的村可合并设立，社区卫生服务中心或乡镇卫生院所在地的村可不设。  <br/> 建立统一、规范的村民健康档案，提供计划免疫、<br/>传染病防治及儿童、孕产妇、老年人保健等基本公共卫生服务。 <br/>公共教育  <br/>村庄幼儿园和中小学建设应符合教育部门布点规划要求。<br/>村庄幼儿园、中小学学校建设应分别符合GB/T29315、建标109 的要求，并符合国家卫生标准与安全标准。  <br/> 普及学前教育和九年义务教育。学前一年毛入园率≥85%； <br/>九年义务教育目标人群覆盖率达100%，巩固率≥93%。 <br/>通过宣传栏、广播等渠道加强村民普法、科普宣传教育。");
})

$("#4sm2").click(function(){
	$("#textcont4").animate({opacity:'1'},500);
	$("#text4").html(" 基础设施  <br/>建设具有娱乐、广播、阅读、科普等功能的文化活动场所。    <br/> 建设篮球场、乒乓球台等体育活动设施。  <br/> 少数民族村能为村民提供本民族语言文字出版的书刊、电子音像制品。 <br/>文体活动  <br/>定期组织开展民俗文化活动、文艺演出、<br/>演讲展览、电影放映、体育比赛等群众性文化活动。 <br/> 文化保护与传承  <br/>发掘古村落、古建筑、古文物等乡村物质文化，进行整修和保护。 <br/>搜集民间民族表演艺术、传统戏剧和曲艺、传统手工技艺、传统医药、<br/>民族服饰、民俗活动、农业文化、口头语言等乡村非物质文化，进行传承和保护。  <br/>历史文化遗存村庄应挖掘并宣传古民俗风情、历史沿革、典故传说、<br/>名人文化、祖训家规等乡村特色文化。  <br/>建立乡村传统文化管护制度，编制历史文化遗存资源名单，<br/>落实管护责任单位和责任人，形成传统文化保护与传承体系。");
})


$("#4sm3").click(function(){
	$("#textcont4").animate({opacity:'1'},500);
	$("#text4").html("社会保障  <br/>村民普遍享有城乡居民基本养老保险，基本实现全覆盖。<br/>鼓励建设农村养老机构、老人日托中心、居家养老照料中心等，实现农村基本养老服务。 <br/>家庭经济困难且生活难以自理的失能半失能65岁及以上村民<br/>基本养老服务补贴覆盖率≥50%。<br/>农村五保供养目标人群覆盖率达100%，集中供养能力≥50%。<br/>村民享有城乡居民基本医疗保险参保率≥90%。 <br/>被征地村民按相关规定享有相应的社会保障。 <br/>劳动就业  <br/>加强村民的素质教育和技能培训，培养新型职业公民。 <br/>协助开展劳动关系协调、劳动人事争议调解、维权等权益保护活动。<br/>收集并发布就业信息，提供就业政策咨询、职业指导和职业介绍等服务；<br/>为就业困难人员、零就业家庭和残疾人提供就业援助 ");
})


$("#4sm4").click(function(){
	$("#textcont4").animate({opacity:'1'},500);
	$("#text4").html("公共安全  <br/>根据不同自然灾害类型建立相应防灾和避灾场所，并按有关要求管理。  <br/> 应制定和完善自然灾害救助应急预案，组织应急演练。 <br/>农村消防安全应符合GB50039的要求。 <br/>农村用电安全应符合DL493的要求。 <br/>健全治安管理制度，配齐村级综治管理人员，应急响应迅速有效，<br/>有条件的可在人口集中居住区和重要地段安装社会治安动态视频监控系统。    <br/>便民服务  <br/>建有综合服务功能的村便民服务机构，提供代办、计划生育、信访接待等服务，<br/>每一事项应编制服务指南，推行标准化服务。 <br/>村庄有客运站点，村民出行方便。  <br/>按照生产生活需求，建设商贸服务网点，鼓励有条件的地区推行电子商务。  ");
})


$("#5sm1").click(function(){
	$("#textcont5").animate({opacity:'1'},500);
	$("#text5").html("工作要求<br/>遵循民主决策、民主管理、民主选举、民主监督。  <br/>制定村民自治章程、村民议事规则、村务公开、重大事项决策、财务管理等制度，并有效实施。 <br/> 具备协调解决纠纷和应急的能力。 <br/> 建立并规范各项工作的档案记录。 ");
})



$("#5sm2").click(function(){
	$("#textcont5").animate({opacity:'1'},500);
	$("#text5").html(" 公众参与  <br/>通过健全村民自治机制等方式，保障村民参与建设和日常监督管理，<br/>充分发挥村民主体作用。  <br/>村民可通过村务公开栏、网络、广播、电视、收集信息等形式，<br/>了解美丽乡村建设动态、农事、村务、旅游、商务、防控、民生等信息，参与并监督美丽乡村建设。  <br/>鼓励开展第三方村民满意度调查，及时公开调查结果。");
})



$("#5sm3").click(function(){
	$("#textcont5").animate({opacity:'1'},500);
	$("#text5").html("保障与监督  <br/> 建立健全村庄建设、运行管理、服务等制度，落实资金保障措施，<br/>明确责任主体、实施主体，鼓励有条件的村庄采用市场化运作模式。  <br/>建立并实施公共卫生保洁、园林绿化养护、基础设施维护等管护机制，<br/>配备与村级人口相适应的管护人员，比例不低于常住人口的2‰。  <br/>综合运用检查、考核、奖惩等方式，对美丽乡村的建设与运行实施动态监督和管理。 ");
})





})

  $(document).ready(function(){
  $(".button").mouseenter(function(){
    $(this).css("backgroundColor","#444444");
  });

  
    $(".button").mouseleave(function(){
    $(this).css("backgroundColor","#222222");
  });
    $("#b0").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/d303967d43a7e33b6e34869573edc691/0/0/w_19rv5gv5d1.swf-albumId=9274083209-tvId=9274083209-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });
  
     $("#b1").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/33b25fd5b57d70db52ba91ab10444625/0/0/v_19rr95tnqk.swf-albumId=205056201-tvId=561516800-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });
  

      $("#b2").click(function(){
    $('#right').html('  <embed src="http://player.video.qiyi.com/a7e9efc95d66ae095e48e5fb96a81b5b/0/0/v_19rr95tdfg.swf-albumId=205056201-tvId=561522000-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });
  
    $("#b3").click(function(){
    $('#right').html(' <embed src="http://player.video.qiyi.com/535e085727310ce33e1cc37cec76fdc8/0/0/v_19rr95texo.swf-albumId=205056201-tvId=561524400-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });
  
   $("#b4").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/dc9fb2da5d45ecdc693dc834406ecc45/0/0/v_19rr95ti3c.swf-albumId=205056201-tvId=561528500-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });
  
  $("#b5").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/fc7eb709223e3ff71cfed013964863eb/0/0/v_19rr95t7b4.swf-albumId=205056201-tvId=561529900-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });

$("#b6").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/a745b7d7e6dfa196a0031b3c7e1ff948/0/0/v_19rr95tbgs.swf-albumId=205056201-tvId=561536800-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });

$("#b7").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/8bb12e1aa6a8cb7ec8a3b804611c16ce/0/0/v_19rr95t3ho.swf-albumId=205056201-tvId=561539200-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });

$("#b8").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/0b72c41dbe09f2b6a94780b8a9c5dfdb/0/0/v_19rr95t3r4.swf-albumId=205056201-tvId=561542700-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });

$("#b9").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/5637b25fc7ab22f0c94cc2eb8e09b341/0/0/v_19rr95u8mo.swf-albumId=205056201-tvId=561547100-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });

$("#b10").click(function(){
    $('#right').html('<embed src="http://player.video.qiyi.com/5f1d87283bc5e2907fd9e13ffe645990/0/0/v_19rr95uc84.swf-albumId=205056201-tvId=561550600-isPurchase=0-cnId=3" allowFullScreen="true" quality="high" width="755" height="550" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>')
  });

  })