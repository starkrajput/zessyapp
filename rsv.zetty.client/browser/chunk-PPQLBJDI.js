import{a as ce}from"./chunk-2CYM75NM.js";import{a as le}from"./chunk-6B4OQ2NV.js";import{b as X,c as Z,e as Q,h as J,j as ee,q as te,r as ne,s as ie,t as oe,u as ae,y as re}from"./chunk-77R2TZ4U.js";import{$a as N,Ba as b,Ca as f,Da as d,F as w,Hb as j,Ib as K,J as U,K as E,Ma as n,Na as v,O as p,Oa as P,P as m,Pa as A,Qb as se,Sa as g,Ta as y,Tb as G,Ua as h,Y as V,_a as I,a as k,ab as F,ea as l,f as W,fa as C,lb as q,na as x,nb as Y,ob as $,qa as u,sa as S,ub as B,va as t,vb as z,wa as e,xa as _,xb as H,yb as O}from"./chunk-ZUWEV6EO.js";function ue(c,r){if(c&1){let i=b();t(0,"button",17),f("click",function(){let o=p(i).$implicit,a=d();return m(a.switchTab(o.id))}),t(1,"span",18),n(2),e(),t(3,"span",19),n(4),e()()}if(c&2){let i=r.$implicit,s=d();S("active",s.activeTab===i.id),l(2),v(i.icon),l(2),v(i.label)}}function ge(c,r){if(c&1){let i=b();t(0,"div",24)(1,"label"),n(2,"State"),e(),t(3,"input",40),h("ngModelChange",function(o){p(i);let a=d(2);return y(a.businessInfo.state,o)||(a.businessInfo.state=o),m(o)}),e()()}if(c&2){let i=d(2);l(3),g("ngModel",i.businessInfo.state)}}function ye(c,r){c&1&&(t(0,"span",49),n(1,"Required"),e())}function he(c,r){if(c&1){let i=b();t(0,"label",41)(1,"input",42),f("change",function(){let o=p(i).$implicit,a=d(2);return m(a.toggleDocument(o.id))}),e(),t(2,"div",43)(3,"div",44)(4,"span",45),n(5),e(),t(6,"span",46),n(7),e(),x(8,ye,2,0,"span",47),e(),t(9,"p",48),n(10),e()()()}if(c&2){let i=r.$implicit,s=d(2);l(),u("checked",s.selectedDocuments.has(i.id))("disabled",i.legalRequired),l(4),v(i.icon),l(2),v(i.name),l(),u("ngIf",i.legalRequired),l(2),v(i.description)}}function fe(c,r){if(c&1){let i=b();t(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",23)(4,"h3"),n(5,"\u{1F3E2} Business Information"),e(),t(6,"div",24)(7,"label"),n(8,"Company/Website Name *"),e(),t(9,"input",25),h("ngModelChange",function(o){p(i);let a=d();return y(a.businessInfo.companyName,o)||(a.businessInfo.companyName=o),m(o)}),e()(),t(10,"div",24)(11,"label"),n(12,"Website URL *"),e(),t(13,"input",26),h("ngModelChange",function(o){p(i);let a=d();return y(a.businessInfo.websiteUrl,o)||(a.businessInfo.websiteUrl=o),m(o)}),e()(),t(14,"div",24)(15,"label"),n(16,"Contact Email *"),e(),t(17,"input",27),h("ngModelChange",function(o){p(i);let a=d();return y(a.businessInfo.email,o)||(a.businessInfo.email=o),m(o)}),e()(),t(18,"div",24)(19,"label"),n(20,"Business Address"),e(),t(21,"input",28),h("ngModelChange",function(o){p(i);let a=d();return y(a.businessInfo.address,o)||(a.businessInfo.address=o),m(o)}),e()(),t(22,"div",29)(23,"div",24)(24,"label"),n(25,"Country *"),e(),t(26,"select",30),h("ngModelChange",function(o){p(i);let a=d();return y(a.businessInfo.country,o)||(a.businessInfo.country=o),m(o)}),f("change",function(){p(i);let o=d();return m(o.autoDetectCompliance())}),t(27,"option"),n(28,"United States"),e(),t(29,"option"),n(30,"United Kingdom"),e(),t(31,"option"),n(32,"Canada"),e(),t(33,"option"),n(34,"Germany"),e(),t(35,"option"),n(36,"France"),e(),t(37,"option"),n(38,"Australia"),e(),t(39,"option"),n(40,"Brazil"),e(),t(41,"option"),n(42,"India"),e()()(),x(43,ge,4,1,"div",31),e(),t(44,"div",24)(45,"label"),n(46,"Entity Type"),e(),t(47,"select",32),h("ngModelChange",function(o){p(i);let a=d();return y(a.businessInfo.entityType,o)||(a.businessInfo.entityType=o),m(o)}),t(48,"option",33),n(49,"Individual/Sole Proprietor"),e(),t(50,"option",34),n(51,"Company/Corporation"),e(),t(52,"option",35),n(53,"Nonprofit Organization"),e()()()(),t(54,"div",23)(55,"h3"),n(56,"\u{1F4C4} Select Documents"),e(),t(57,"div",36),x(58,he,11,6,"label",37),e()()(),t(59,"div",38)(60,"button",39),f("click",function(){p(i);let o=d();return m(o.switchTab("customize"))}),n(61," Next: Customize Details \u2192 "),e()()()()}if(c&2){let i=d();l(9),g("ngModel",i.businessInfo.companyName),l(4),g("ngModel",i.businessInfo.websiteUrl),l(4),g("ngModel",i.businessInfo.email),l(4),g("ngModel",i.businessInfo.address),l(5),g("ngModel",i.businessInfo.country),l(17),u("ngIf",i.businessInfo.country==="United States"),l(4),g("ngModel",i.businessInfo.entityType),l(11),u("ngForOf",i.documentTypes)}}function xe(c,r){if(c&1){let i=b();t(0,"div",70)(1,"div",71)(2,"strong"),n(3),e(),t(4,"span",72),n(5),e()(),t(6,"button",73),f("click",function(){let o=p(i).index,a=d(3);return m(a.removeThirdPartyService(o))}),n(7,"\u2715"),e()()}if(c&2){let i=r.$implicit;l(3),v(i.name),l(2),v(i.category)}}function ve(c,r){if(c&1&&(t(0,"option",74),n(1),e()),c&2){let i=r.$implicit;u("value",i.name),l(),A(" ",i.name," (",i.category,") ")}}function be(c,r){if(c&1){let i=b();t(0,"div",51)(1,"h3"),n(2,"\u{1F50C} Third-Party Services"),e(),t(3,"p"),n(4,"Add services you use that access user data"),e(),t(5,"div",65),x(6,xe,8,2,"div",66),e(),t(7,"div",67)(8,"select",32),h("ngModelChange",function(o){p(i);let a=d(2);return y(a.serviceSelectValue,o)||(a.serviceSelectValue=o),m(o)}),t(9,"option",68),n(10,"Select a service..."),e(),x(11,ve,2,3,"option",69),e(),t(12,"button",63),f("click",function(){p(i);let o=d(2);return m(o.addSelectedThirdPartyService())}),n(13," Add Service "),e()()()}if(c&2){let i=d(2);l(6),u("ngForOf",i.thirdPartyServices),l(2),g("ngModel",i.serviceSelectValue),l(3),u("ngForOf",i.availableServices)}}function _e(c,r){if(c&1){let i=b();t(0,"div",20)(1,"div",50)(2,"div",51)(3,"h3"),n(4,"\u{1F4CA} Data Collection"),e(),t(5,"p"),n(6,"Select what types of data you collect from users"),e(),t(7,"div",52)(8,"label",53)(9,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataCollection.personalInfo,o)||(a.dataCollection.personalInfo=o),m(o)}),e(),t(10,"span"),n(11,"Personal Information (Name, Email, Phone)"),e()(),t(12,"label",53)(13,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataCollection.paymentInfo,o)||(a.dataCollection.paymentInfo=o),m(o)}),e(),t(14,"span"),n(15,"Payment Information"),e()(),t(16,"label",53)(17,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataCollection.cookies,o)||(a.dataCollection.cookies=o),m(o)}),e(),t(18,"span"),n(19,"Cookies & Tracking"),e()(),t(20,"label",53)(21,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataCollection.analytics,o)||(a.dataCollection.analytics=o),m(o)}),e(),t(22,"span"),n(23,"Analytics Data"),e()(),t(24,"label",53)(25,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataCollection.location,o)||(a.dataCollection.location=o),m(o)}),e(),t(26,"span"),n(27,"Location Data"),e()(),t(28,"label",53)(29,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataCollection.deviceInfo,o)||(a.dataCollection.deviceInfo=o),m(o)}),e(),t(30,"span"),n(31,"Device Information"),e()(),t(32,"label",53)(33,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataCollection.socialMedia,o)||(a.dataCollection.socialMedia=o),m(o)}),e(),t(34,"span"),n(35,"Social Media Integration"),e()(),t(36,"label",53)(37,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataCollection.thirdPartyServices,o)||(a.dataCollection.thirdPartyServices=o),m(o)}),e(),t(38,"span"),n(39,"Third-Party Services"),e()()()(),t(40,"div",51)(41,"h3"),n(42,"\u2705 Compliance Requirements"),e(),t(43,"p"),n(44,"Select applicable privacy regulations"),e(),t(45,"div",55)(46,"label",56)(47,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.complianceRequirements.gdpr,o)||(a.complianceRequirements.gdpr=o),m(o)}),e(),t(48,"div",57)(49,"span",58),n(50,"\u{1F1EA}\u{1F1FA}"),e(),t(51,"div")(52,"strong"),n(53,"GDPR"),e(),t(54,"small"),n(55,"European Union (EU/EEA)"),e()()()(),t(56,"label",56)(57,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.complianceRequirements.ccpa,o)||(a.complianceRequirements.ccpa=o),m(o)}),e(),t(58,"div",57)(59,"span",58),n(60,"\u{1F1FA}\u{1F1F8}"),e(),t(61,"div")(62,"strong"),n(63,"CCPA"),e(),t(64,"small"),n(65,"California, USA"),e()()()(),t(66,"label",56)(67,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.complianceRequirements.coppa,o)||(a.complianceRequirements.coppa=o),m(o)}),e(),t(68,"div",57)(69,"span",58),n(70,"\u{1F476}"),e(),t(71,"div")(72,"strong"),n(73,"COPPA"),e(),t(74,"small"),n(75,"Children Under 13"),e()()()(),t(76,"label",56)(77,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.complianceRequirements.pipeda,o)||(a.complianceRequirements.pipeda=o),m(o)}),e(),t(78,"div",57)(79,"span",58),n(80,"\u{1F1E8}\u{1F1E6}"),e(),t(81,"div")(82,"strong"),n(83,"PIPEDA"),e(),t(84,"small"),n(85,"Canada"),e()()()(),t(86,"label",56)(87,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.complianceRequirements.lgpd,o)||(a.complianceRequirements.lgpd=o),m(o)}),e(),t(88,"div",57)(89,"span",58),n(90,"\u{1F1E7}\u{1F1F7}"),e(),t(91,"div")(92,"strong"),n(93,"LGPD"),e(),t(94,"small"),n(95,"Brazil"),e()()()(),t(96,"label",56)(97,"input",54),h("ngModelChange",function(o){p(i);let a=d();return y(a.complianceRequirements.hipaa,o)||(a.complianceRequirements.hipaa=o),m(o)}),e(),t(98,"div",57)(99,"span",58),n(100,"\u{1F3E5}"),e(),t(101,"div")(102,"strong"),n(103,"HIPAA"),e(),t(104,"small"),n(105,"Healthcare (USA)"),e()()()()()(),x(106,be,14,3,"div",59),t(107,"div",51)(108,"h3"),n(109,"\u2699\uFE0F Additional Options"),e(),t(110,"div",60)(111,"div",24)(112,"label"),n(113,"Data Retention Period (months)"),e(),t(114,"input",61),h("ngModelChange",function(o){p(i);let a=d();return y(a.dataRetentionPeriod,o)||(a.dataRetentionPeriod=o),m(o)}),e()(),t(115,"div",24)(116,"label"),n(117,"Data Protection Officer Email"),e(),t(118,"input",62),h("ngModelChange",function(o){p(i);let a=d();return y(a.contactDPO,o)||(a.contactDPO=o),m(o)}),e()()()(),t(119,"div",38)(120,"button",63),f("click",function(){p(i);let o=d();return m(o.switchTab("setup"))}),n(121,"\u2190 Back"),e(),t(122,"button",64),f("click",function(){p(i);let o=d();return m(o.generateDocuments())}),n(123),e()()()()}if(c&2){let i=d();l(9),g("ngModel",i.dataCollection.personalInfo),l(4),g("ngModel",i.dataCollection.paymentInfo),l(4),g("ngModel",i.dataCollection.cookies),l(4),g("ngModel",i.dataCollection.analytics),l(4),g("ngModel",i.dataCollection.location),l(4),g("ngModel",i.dataCollection.deviceInfo),l(4),g("ngModel",i.dataCollection.socialMedia),l(4),g("ngModel",i.dataCollection.thirdPartyServices),l(10),g("ngModel",i.complianceRequirements.gdpr),l(10),g("ngModel",i.complianceRequirements.ccpa),l(10),g("ngModel",i.complianceRequirements.coppa),l(10),g("ngModel",i.complianceRequirements.pipeda),l(10),g("ngModel",i.complianceRequirements.lgpd),l(10),g("ngModel",i.complianceRequirements.hipaa),l(9),u("ngIf",i.dataCollection.thirdPartyServices),l(8),g("ngModel",i.dataRetentionPeriod),l(4),g("ngModel",i.contactDPO),l(4),u("disabled",i.isGenerating),l(),P(" ",i.isGenerating?"\u23F3 Generating...":"\u{1F680} Generate Documents"," ")}}function Ce(c,r){if(c&1){let i=b();t(0,"button",80),f("click",function(){let o=p(i).$implicit,a=d(2);return m(a.activePreviewDoc=o)}),n(1),e()}if(c&2){let i,s=r.$implicit,o=d(2);S("active",o.isDocumentGenerated(s)),l(),A(" ",(i=o.getDocumentTypeById(s))==null?null:i.icon," ",(i=o.getDocumentTypeById(s))==null?null:i.name," ")}}function Se(c,r){if(c&1){let i=b();t(0,"div",83)(1,"div",84)(2,"h3"),n(3),e(),t(4,"div",85)(5,"button",63),f("click",function(){let o=p(i).$implicit,a=d(3);return m(a.downloadDocument(o.key,"txt"))}),n(6," \u{1F4C4} Download TXT "),e(),t(7,"button",63),f("click",function(){let o=p(i).$implicit,a=d(3);return m(a.downloadDocument(o.key,"html"))}),n(8," \u{1F310} Download HTML "),e()()(),t(9,"div",86)(10,"pre",87),n(11),e()()()}if(c&2){let i,s=r.$implicit,o=d(3);l(3),v((i=o.getDocumentTypeById(s.key))==null?null:i.name),l(8),v(s.value.content)}}function Pe(c,r){if(c&1&&(t(0,"div",81),x(1,Se,12,2,"div",82),I(2,"keyvalue"),e()),c&2){let i=d(2);l(),u("ngForOf",N(2,1,i.generatedDocuments))}}function we(c,r){if(c&1){let i=b();t(0,"div",88)(1,"div",89),n(2,"\u{1F4C4}"),e(),t(3,"h3"),n(4,"No Documents Generated"),e(),t(5,"p"),n(6,"Complete the setup and customize steps to generate your documents"),e(),t(7,"button",90),f("click",function(){p(i);let o=d(2);return m(o.switchTab("setup"))}),n(8,"Start Setup"),e()()}}function Ee(c,r){if(c&1&&(t(0,"div",20)(1,"div",75)(2,"div",76),x(3,Ce,2,4,"button",77),e(),x(4,Pe,3,3,"div",78)(5,we,9,0,"div",79),e()()),c&2){let i=d();l(3),u("ngForOf",i.selectedDocuments),l(),u("ngIf",i.generatedDocuments.size>0),l(),u("ngIf",i.generatedDocuments.size===0)}}function Ie(c,r){if(c&1){let i=b();t(0,"div",99)(1,"div",100),n(2),e(),t(3,"h4"),n(4),e(),t(5,"p"),n(6),I(7,"date"),e(),t(8,"div",101)(9,"button",102),f("click",function(){let o=p(i).$implicit,a=d(2);return m(a.downloadDocument(o.key,"txt"))}),n(10," \u{1F4C4} TXT "),e(),t(11,"button",103),f("click",function(){let o=p(i).$implicit,a=d(2);return m(a.downloadDocument(o.key,"html"))}),n(12," \u{1F310} HTML "),e()()()}if(c&2){let i,s,o=r.$implicit,a=d(2);l(2),v((i=a.getDocumentTypeById(o.key))==null?null:i.icon),l(2),v((s=a.getDocumentTypeById(o.key))==null?null:s.name),l(2),P("Generated: ",F(7,3,o.value.generatedDate,"short"),"")}}function Oe(c,r){if(c&1){let i=b();t(0,"div",20)(1,"div",91)(2,"h2"),n(3,"\u{1F4E5} Download Your Legal Documents"),e(),t(4,"div",92),x(5,Ie,13,6,"div",93),I(6,"keyvalue"),e(),t(7,"div",94)(8,"h3"),n(9,"\u{1F4E6} Download All Documents"),e(),t(10,"p"),n(11),e(),t(12,"button",39),f("click",function(){p(i);let o=d();return m(o.downloadAll())}),n(13," \u{1F4E5} Download All as TXT "),e()(),t(14,"div",95)(15,"h3"),n(16,"\u{1F527} Implementation Guide"),e(),t(17,"div",96)(18,"div",97)(19,"span",98),n(20,"1"),e(),t(21,"div")(22,"h4"),n(23,"Upload to Your Website"),e(),t(24,"p"),n(25,"Add the HTML files to your website's legal pages directory"),e()()(),t(26,"div",97)(27,"span",98),n(28,"2"),e(),t(29,"div")(30,"h4"),n(31,"Link from Footer"),e(),t(32,"p"),n(33,"Add links to Privacy Policy, Terms of Service in your footer"),e()()(),t(34,"div",97)(35,"span",98),n(36,"3"),e(),t(37,"div")(38,"h4"),n(39,"Cookie Banner (GDPR)"),e(),t(40,"p"),n(41,"If collecting EU users' data, implement a cookie consent banner"),e()()(),t(42,"div",97)(43,"span",98),n(44,"4"),e(),t(45,"div")(46,"h4"),n(47,"Review Annually"),e(),t(48,"p"),n(49,"Update your legal documents yearly or when practices change"),e()()()()()()()}if(c&2){let i=d();l(5),u("ngForOf",N(6,2,i.generatedDocuments)),l(6),P("Get all ",i.generatedDocuments.size," legal documents in one click")}}function Te(c,r){c&1&&(t(0,"p"),n(1,"Compliant - EU data protection rules included"),e())}function De(c,r){c&1&&(t(0,"p"),n(1,"Not enabled - Enable if you have EU visitors"),e())}function Me(c,r){c&1&&(t(0,"p"),n(1,"Compliant - California privacy rights included"),e())}function Re(c,r){c&1&&(t(0,"p"),n(1,"Not enabled - Enable if you have California users"),e())}function ke(c,r){c&1&&(t(0,"p"),n(1,"Compliant - Children's privacy protections included"),e())}function Ae(c,r){c&1&&(t(0,"p"),n(1,"Not enabled - Enable if users may be under 13"),e())}function Ne(c,r){if(c&1){let i=b();t(0,"div",20)(1,"div",104)(2,"h2"),n(3,"\u2705 Compliance Checker"),e(),t(4,"div",105)(5,"div",106)(6,"div",107),n(7),e(),t(8,"div")(9,"h4"),n(10,"GDPR (EU)"),e(),x(11,Te,2,0,"p",108)(12,De,2,0,"p",108),e()(),t(13,"div",106)(14,"div",107),n(15),e(),t(16,"div")(17,"h4"),n(18,"CCPA (California)"),e(),x(19,Me,2,0,"p",108)(20,Re,2,0,"p",108),e()(),t(21,"div",106)(22,"div",107),n(23),e(),t(24,"div")(25,"h4"),n(26,"COPPA (Children)"),e(),x(27,ke,2,0,"p",108)(28,Ae,2,0,"p",108),e()()(),t(29,"div",109)(30,"h3"),n(31,"\u{1F4CB} Compliance Checklist"),e(),t(32,"div",110)(33,"label",111),_(34,"input",112),t(35,"span"),n(36,"Privacy Policy posted and accessible"),e()(),t(37,"label",111),_(38,"input",112),t(39,"span"),n(40,"Terms of Service clearly displayed"),e()(),t(41,"label",111),_(42,"input",113),t(43,"span"),n(44,"Cookie Policy for tracking technologies"),e()(),t(45,"label",111),_(46,"input",113),t(47,"span"),n(48,"GDPR compliance for EU users"),e()(),t(49,"label",111),_(50,"input",113),t(51,"span"),n(52,"CCPA compliance for California residents"),e()(),t(53,"label",111),_(54,"input",114),t(55,"span"),n(56,"Cookie consent banner implemented"),e()(),t(57,"label",111),_(58,"input",114),t(59,"span"),n(60,"Data breach notification process in place"),e()(),t(61,"label",111),_(62,"input",114),t(63,"span"),n(64,"User data request/deletion mechanism"),e()()()(),t(65,"div",115)(66,"h3"),n(67,"Need Advanced Compliance?"),e(),t(68,"p"),n(69,"Get attorney review, ongoing updates, and compliance monitoring"),e(),t(70,"button",39),f("click",function(){p(i);let o=d();return m(o.requestAdvancedFeatures())}),n(71," \u{1F4DE} Get Legal Review "),e()()()()}if(c&2){let i=d();l(5),S("compliant",i.complianceRequirements.gdpr),l(2),v(i.complianceRequirements.gdpr?"\u2705":"\u26A0\uFE0F"),l(4),u("ngIf",i.complianceRequirements.gdpr),l(),u("ngIf",!i.complianceRequirements.gdpr),l(),S("compliant",i.complianceRequirements.ccpa),l(2),v(i.complianceRequirements.ccpa?"\u2705":"\u26A0\uFE0F"),l(4),u("ngIf",i.complianceRequirements.ccpa),l(),u("ngIf",!i.complianceRequirements.ccpa),l(),S("compliant",i.complianceRequirements.coppa),l(2),v(i.complianceRequirements.coppa?"\u2705":"\u26A0\uFE0F"),l(4),u("ngIf",i.complianceRequirements.coppa),l(),u("ngIf",!i.complianceRequirements.coppa),l(14),u("checked",i.dataCollection.cookies),l(4),u("checked",i.complianceRequirements.gdpr),l(4),u("checked",i.complianceRequirements.ccpa)}}function Ge(c,r){if(c&1&&(t(0,"div",20)(1,"div",116)(2,"div",117)(3,"h2"),n(4),e(),t(5,"p"),n(6,"Everything you need to know about legal documents for your website"),e()(),t(7,"div",118)(8,"h3"),n(9,"\u{1F512} Why You Need a Privacy Policy"),e(),t(10,"p")(11,"strong"),n(12,"Legal Requirements:"),e()(),t(13,"ul")(14,"li"),n(15,"Required by GDPR (EU), CCPA (California), and most countries"),e(),t(16,"li"),n(17,"Mandatory for Google AdSense, Facebook Ads approval"),e(),t(18,"li"),n(19,"Required by App Store and Google Play"),e(),t(20,"li"),n(21,"Penalties up to \u20AC20M or 4% of revenue for violations"),e()(),t(22,"p")(23,"strong"),n(24,"What It Must Include:"),e()(),t(25,"ul")(26,"li"),n(27,"What data you collect and how"),e(),t(28,"li"),n(29,"Why you collect it (purpose)"),e(),t(30,"li"),n(31,"How you use and protect the data"),e(),t(32,"li"),n(33,"User rights (access, deletion, portability)"),e(),t(34,"li"),n(35,"Cookie usage disclosure"),e(),t(36,"li"),n(37,"Third-party service providers"),e()()(),t(38,"div",118)(39,"h3"),n(40,"\u{1F4DC} Terms of Service Essentials"),e(),t(41,"p"),n(42,"Terms of Service (ToS) protect your business and set rules for users:"),e(),t(43,"ul")(44,"li")(45,"strong"),n(46,"Limitation of Liability:"),e(),n(47," Reduce legal exposure"),e(),t(48,"li")(49,"strong"),n(50,"Acceptable Use:"),e(),n(51," Define prohibited activities"),e(),t(52,"li")(53,"strong"),n(54,"Intellectual Property:"),e(),n(55," Protect your content"),e(),t(56,"li")(57,"strong"),n(58,"Account Terms:"),e(),n(59," User responsibilities"),e(),t(60,"li")(61,"strong"),n(62,"Termination Rights:"),e(),n(63," When you can ban users"),e(),t(64,"li")(65,"strong"),n(66,"Dispute Resolution:"),e(),n(67," How to handle conflicts"),e()()(),t(68,"div",118)(69,"h3"),n(70,"\u{1F36A} Cookie Policy & GDPR"),e(),t(71,"p"),n(72,"GDPR requires explicit consent for non-essential cookies:"),e(),t(73,"ul")(74,"li")(75,"strong"),n(76,"Essential Cookies:"),e(),n(77," No consent needed (site functionality)"),e(),t(78,"li")(79,"strong"),n(80,"Analytics Cookies:"),e(),n(81," Require consent (Google Analytics, etc.)"),e(),t(82,"li")(83,"strong"),n(84,"Advertising Cookies:"),e(),n(85," Require consent (Facebook Pixel, Google Ads)"),e(),t(86,"li")(87,"strong"),n(88,"Social Media Cookies:"),e(),n(89," Require consent (social sharing buttons)"),e()(),t(90,"p")(91,"strong"),n(92,"Implementation:"),e(),n(93," Use a cookie consent banner that allows users to accept/reject optional cookies."),e()(),t(94,"div",118)(95,"h3"),n(96,"\u2705 GDPR Compliance Requirements"),e(),t(97,"p"),n(98,"General Data Protection Regulation (EU) key requirements:"),e(),t(99,"ul")(100,"li")(101,"strong"),n(102,"Lawful Basis:"),e(),n(103," Must have valid reason to process data"),e(),t(104,"li")(105,"strong"),n(106,"User Rights:"),e(),n(107," Access, rectification, erasure, portability"),e(),t(108,"li")(109,"strong"),n(110,"Data Minimization:"),e(),n(111," Only collect necessary data"),e(),t(112,"li")(113,"strong"),n(114,"Purpose Limitation:"),e(),n(115," Only use data for stated purpose"),e(),t(116,"li")(117,"strong"),n(118,"Breach Notification:"),e(),n(119," Report breaches within 72 hours"),e(),t(120,"li")(121,"strong"),n(122,"DPO Required:"),e(),n(123," For large-scale processing or public bodies"),e()()(),t(124,"div",118)(125,"h3"),n(126,"\u{1F1FA}\u{1F1F8} CCPA (California) Requirements"),e(),t(127,"p"),n(128,"California Consumer Privacy Act applies if you:"),e(),t(129,"ul")(130,"li"),n(131,"Have $25M+ annual revenue, OR"),e(),t(132,"li"),n(133,"Buy/sell personal info of 50,000+ CA residents, OR"),e(),t(134,"li"),n(135,"Derive 50%+ revenue from selling personal info"),e()(),t(136,"p")(137,"strong"),n(138,"Consumer Rights:"),e()(),t(139,"ul")(140,"li"),n(141,"Right to know what data is collected"),e(),t(142,"li"),n(143,"Right to delete personal information"),e(),t(144,"li"),n(145,"Right to opt-out of data sales"),e(),t(146,"li"),n(147,"Right to non-discrimination"),e()(),t(148,"p")(149,"strong"),n(150,'"Do Not Sell My Info" link required'),e(),n(151," in footer if you sell data"),e()(),t(152,"div",119)(153,"h3"),n(154,"\u{1F4B0} Cost Comparison"),e(),t(155,"table",120)(156,"tr")(157,"th"),n(158,"Service"),e(),t(159,"th"),n(160,"Our Tool"),e(),t(161,"th"),n(162,"Termly"),e(),t(163,"th"),n(164,"PrivacyPolicies"),e(),t(165,"th"),n(166,"Attorney"),e()(),t(167,"tr")(168,"td"),n(169,"Privacy Policy"),e(),t(170,"td")(171,"strong"),n(172,"FREE"),e()(),t(173,"td"),n(174,"$10/mo"),e(),t(175,"td"),n(176,"$14/mo"),e(),t(177,"td"),n(178,"$500-$2,000"),e()(),t(179,"tr")(180,"td"),n(181,"Terms of Service"),e(),t(182,"td")(183,"strong"),n(184,"FREE"),e()(),t(185,"td"),n(186,"$10/mo"),e(),t(187,"td"),n(188,"$14/mo"),e(),t(189,"td"),n(190,"$500-$2,000"),e()(),t(191,"tr")(192,"td"),n(193,"Cookie Policy"),e(),t(194,"td")(195,"strong"),n(196,"FREE"),e()(),t(197,"td"),n(198,"$10/mo"),e(),t(199,"td"),n(200,"$14/mo"),e(),t(201,"td"),n(202,"$300-$1,000"),e()(),t(203,"tr")(204,"td"),n(205,"All Documents"),e(),t(206,"td")(207,"strong"),n(208,"FREE"),e()(),t(209,"td"),n(210,"Included"),e(),t(211,"td"),n(212,"Included"),e(),t(213,"td"),n(214,"$1,500-$5,000"),e()(),t(215,"tr",121)(216,"td")(217,"strong"),n(218,"Annual Cost"),e()(),t(219,"td")(220,"strong"),n(221,"$0"),e()(),t(222,"td")(223,"strong"),n(224,"$120"),e()(),t(225,"td")(226,"strong"),n(227,"$168"),e()(),t(228,"td")(229,"strong"),n(230,"$1,500+"),e()()()()()()()),c&2){let i=d();l(4),P("Privacy Policy & Terms Guide ",i.currentYear,"")}}var T=class c{constructor(r,i,s,o,a,M){this.seoService=r;this.meta=i;this.title=s;this.router=o;this.document=a;this.platformId=M}activeTab="setup";tabs=[{id:"setup",label:"Setup",icon:"\u2699\uFE0F"},{id:"customize",label:"Customize",icon:"\u270F\uFE0F"},{id:"preview",label:"Preview",icon:"\u{1F441}\uFE0F"},{id:"download",label:"Download",icon:"\u{1F4E5}"},{id:"compliance",label:"Compliance",icon:"\u2705"},{id:"guide",label:"Guide",icon:"\u{1F4D6}"}];documentTypes=[{id:"privacy-policy",name:"Privacy Policy",description:"How you collect, use, and protect user data",icon:"\u{1F512}",required:!0,legalRequired:!0},{id:"terms-of-service",name:"Terms of Service",description:"Rules and guidelines for using your website/app",icon:"\u{1F4DC}",required:!0,legalRequired:!0},{id:"cookie-policy",name:"Cookie Policy",description:"Disclosure of cookie usage (GDPR required)",icon:"\u{1F36A}",required:!0,legalRequired:!0},{id:"disclaimer",name:"Disclaimer",description:"Limit liability for content and advice",icon:"\u26A0\uFE0F",required:!1,legalRequired:!1},{id:"return-refund",name:"Return & Refund Policy",description:"E-commerce return and refund terms",icon:"\u{1F4B0}",required:!1,legalRequired:!1},{id:"acceptable-use",name:"Acceptable Use Policy",description:"Prohibited activities and behaviors",icon:"\u{1F6AB}",required:!1,legalRequired:!1}];businessInfo={companyName:"",websiteUrl:"",email:"",address:"",country:"United States",state:"",entityType:"company"};dataCollection={personalInfo:!0,paymentInfo:!1,cookies:!0,analytics:!0,thirdPartyServices:!1,location:!1,deviceInfo:!0,socialMedia:!1};complianceRequirements={gdpr:!1,ccpa:!1,coppa:!1,hipaa:!1,pipeda:!1,lgpd:!1};thirdPartyServices=[];availableServices=[{name:"Google Analytics",category:"analytics",purpose:"Website analytics",dataShared:"Usage data, IP address"},{name:"Stripe",category:"payment",purpose:"Payment processing",dataShared:"Payment details, billing address"},{name:"PayPal",category:"payment",purpose:"Payment processing",dataShared:"Payment details, email"},{name:"Mailchimp",category:"email",purpose:"Email marketing",dataShared:"Email address, name"},{name:"Facebook Pixel",category:"advertising",purpose:"Advertising analytics",dataShared:"Browsing behavior"},{name:"Google Ads",category:"advertising",purpose:"Advertising",dataShared:"Browsing behavior, IP address"},{name:"AWS",category:"hosting",purpose:"Web hosting",dataShared:"All website data"},{name:"Cloudflare",category:"hosting",purpose:"CDN and security",dataShared:"IP address, browsing data"}];selectedDocuments=new Set(["privacy-policy","terms-of-service","cookie-policy"]);generatedDocuments=new Map;isGenerating=!1;includeEUClause=!1;includeCaliforniaRights=!1;includeChildrenPrivacy=!1;dataRetentionPeriod=24;contactDPO="";activePreviewDoc="";serviceSelectValue="";Math=Math;currentYear=new Date().getFullYear();ngOnInit(){this.setupAdvancedSEO(),this.autoDetectCompliance()}ngOnDestroy(){}autoDetectCompliance(){this.businessInfo.country==="United States"&&this.businessInfo.state==="California"&&(this.complianceRequirements.ccpa=!0,this.includeCaliforniaRights=!0),["Germany","France","United Kingdom","Spain","Italy","Netherlands","Belgium","Ireland"].includes(this.businessInfo.country)&&(this.complianceRequirements.gdpr=!0,this.includeEUClause=!0),this.businessInfo.country==="Canada"&&(this.complianceRequirements.pipeda=!0),this.businessInfo.country==="Brazil"&&(this.complianceRequirements.lgpd=!0)}getDocumentTypeById(r){return this.documentTypes.find(i=>i.id===r)}getAvailableServiceByName(r){return this.availableServices.find(i=>i.name===r)}addSelectedThirdPartyService(){if(this.serviceSelectValue){let r=this.getAvailableServiceByName(this.serviceSelectValue);r&&this.addThirdPartyService(r),this.serviceSelectValue=""}}isDocumentGenerated(r){return this.generatedDocuments.has(r)}getGeneratedDocument(r){return this.generatedDocuments.get(r)}generateDocuments(){return W(this,null,function*(){if(!this.validateBusinessInfo()){alert("Please fill in all required business information");return}this.isGenerating=!0,yield this.delay(2e3),this.generatedDocuments.clear();for(let r of this.selectedDocuments){let i=this.generateDocumentContent(r);this.generatedDocuments.set(r,{id:this.generateId(),type:r,content:i,businessInfo:k({},this.businessInfo),generatedDate:new Date,lastUpdated:new Date})}this.isGenerating=!1,this.switchTab("preview")})}validateBusinessInfo(){return!!(this.businessInfo.companyName&&this.businessInfo.websiteUrl&&this.businessInfo.email&&this.businessInfo.country)}generateDocumentContent(r){switch(r){case"privacy-policy":return this.generatePrivacyPolicy();case"terms-of-service":return this.generateTermsOfService();case"cookie-policy":return this.generateCookiePolicy();case"disclaimer":return this.generateDisclaimer();case"return-refund":return this.generateReturnPolicy();case"acceptable-use":return this.generateAcceptableUse();default:return""}}generatePrivacyPolicy(){return`
PRIVACY POLICY

Last Updated: ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

1. INTRODUCTION

${this.businessInfo.companyName} ("we," "our," or "us") operates ${this.businessInfo.websiteUrl} (the "Site"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.

We use your data to provide and improve the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.

2. INFORMATION COLLECTION AND USE

We collect several different types of information for various purposes to provide and improve our Site to you.

2.1 Types of Data Collected

${this.dataCollection.personalInfo?`
Personal Data: While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
- Name
- Email address
- Phone number
- Address, State, ZIP/Postal code, City
`:""}

${this.dataCollection.paymentInfo?`
Payment Information: If you make purchases through our Site, we collect payment card information and billing details necessary to process your transactions.
`:""}

${this.dataCollection.cookies?`
Cookies and Usage Data: We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
`:""}

${this.dataCollection.analytics?`
Usage Data: We may collect information about how the Site is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's IP address, browser type, browser version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
`:""}

${this.dataCollection.location?`
Location Data: We may collect and process information about your actual location. We use various technologies to determine location, including IP address, GPS, and other sensors.
`:""}

3. USE OF DATA

${this.businessInfo.companyName} uses the collected data for various purposes:
- To provide and maintain our Site
- To notify you about changes to our Site
- To allow you to participate in interactive features when you choose to do so
- To provide customer support
- To gather analysis or valuable information so that we can improve our Site
- To monitor the usage of our Site
- To detect, prevent and address technical issues
${this.dataCollection.analytics?`- To analyze user behavior and trends
`:""}
${this.dataCollection.paymentInfo?`- To process payments and prevent fraud
`:""}

4. DATA RETENTION

We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.

Data Retention Period: ${this.dataRetentionPeriod} months from last activity.

5. TRANSFER OF DATA

Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ.

${this.businessInfo.companyName} will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.

6. DISCLOSURE OF DATA

Legal Requirements: ${this.businessInfo.companyName} may disclose your Personal Data in the good faith belief that such action is necessary to:
- Comply with a legal obligation
- Protect and defend the rights or property of ${this.businessInfo.companyName}
- Prevent or investigate possible wrongdoing in connection with the Site
- Protect the personal safety of users of the Site or the public
- Protect against legal liability

7. SECURITY OF DATA

The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

8. YOUR RIGHTS

${this.complianceRequirements.gdpr?this.generateGDPRRights():""}
${this.complianceRequirements.ccpa?this.generateCCPARights():""}
${this.complianceRequirements.coppa?this.generateCOPPARights():""}

You have the right to:
- Access your personal data
- Correct inaccurate data
- Request deletion of your data
- Object to processing of your data
- Request restriction of processing
- Data portability
- Withdraw consent

To exercise these rights, please contact us at ${this.businessInfo.email}.

9. THIRD-PARTY SERVICES

${this.thirdPartyServices.length>0?`
We may employ third-party companies and individuals to facilitate our Site ("Service Providers"), provide the Site on our behalf, perform Site-related services, or assist us in analyzing how our Site is used.

Third-party services we use:
${this.thirdPartyServices.map(i=>`
- ${i.name} (${i.category}): ${i.purpose}
  Data shared: ${i.dataShared}
`).join("")}

These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
`:"We do not currently use third-party service providers that have access to your Personal Data."}

10. CHILDREN'S PRIVACY

${this.complianceRequirements.coppa||this.includeChildrenPrivacy?`
Our Site does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
`:"Our Site is not intended for use by children under the age of 13."}

11. CHANGES TO THIS PRIVACY POLICY

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

12. CONTACT US

If you have any questions about this Privacy Policy, please contact us:

${this.businessInfo.companyName}
Email: ${this.businessInfo.email}
${this.businessInfo.address?`Address: ${this.businessInfo.address}`:""}
${this.contactDPO?`Data Protection Officer: ${this.contactDPO}`:""}

---

This Privacy Policy was generated using Privacy Policy Generator.
For legal advice, consult a qualified attorney.
`}generateGDPRRights(){return`
GDPR RIGHTS (European Union Users)

Under the General Data Protection Regulation (GDPR), if you are a resident of the European Economic Area (EEA), you have certain data protection rights:

- Right to Access: You have the right to request copies of your personal data.
- Right to Rectification: You have the right to request correction of inaccurate or incomplete data.
- Right to Erasure: You have the right to request deletion of your personal data ("right to be forgotten").
- Right to Restrict Processing: You have the right to request restriction of processing of your personal data.
- Right to Object: You have the right to object to processing of your personal data.
- Right to Data Portability: You have the right to request transfer of your data to another organization.
- Right to Withdraw Consent: You have the right to withdraw consent at any time where we relied on consent.
- Right to Lodge a Complaint: You have the right to lodge a complaint with a supervisory authority.

Legal Basis for Processing: We process your data based on:
- Your consent
- Performance of a contract
- Compliance with legal obligations
- Our legitimate interests

Data Protection Officer Contact: ${this.contactDPO||this.businessInfo.email}
`}generateCCPARights(){return`
CCPA RIGHTS (California Residents)

If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights:

- Right to Know: You have the right to request information about the personal information we collect, use, disclose, and sell.
- Right to Delete: You have the right to request deletion of personal information we have collected from you.
- Right to Opt-Out: You have the right to opt-out of the sale of your personal information (Note: We do not sell personal information).
- Right to Non-Discrimination: You have the right not to receive discriminatory treatment for exercising your CCPA rights.

To exercise these rights, email us at ${this.businessInfo.email} with "CCPA Request" in the subject line.

We do not sell your personal information to third parties.
`}generateCOPPARights(){return`
CHILDREN'S ONLINE PRIVACY PROTECTION ACT (COPPA)

Our Site complies with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13 years of age without verifiable parental consent.

If we learn that we have collected personal information from a child under 13 without parental consent, we will delete that information as quickly as possible.

Parents can contact us to review, delete, or stop the collection of their child's information at ${this.businessInfo.email}.
`}generateTermsOfService(){return`
TERMS OF SERVICE

Last Updated: ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

1. AGREEMENT TO TERMS

These Terms of Service ("Terms") govern your access to and use of ${this.businessInfo.websiteUrl} (the "Site") operated by ${this.businessInfo.companyName} ("we," "us," or "our").

By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Site.

2. USE LICENSE

Permission is granted to temporarily access the Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
- Modify or copy the materials
- Use the materials for any commercial purpose or for any public display
- Attempt to reverse engineer any software contained on the Site
- Remove any copyright or other proprietary notations from the materials
- Transfer the materials to another person or "mirror" the materials on any other server

3. USER ACCOUNTS

${this.dataCollection.personalInfo?`
When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.

You are responsible for:
- Maintaining the confidentiality of your account and password
- Restricting access to your computer and account
- All activities that occur under your account

You must notify us immediately of any unauthorized use of your account.
`:"No user accounts are required to use this Site."}

4. PROHIBITED USES

You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
- In any way that violates any applicable national or international law or regulation
- To transmit, or procure the sending of, any advertising or promotional material without our prior written consent
- To impersonate or attempt to impersonate ${this.businessInfo.companyName}, an employee, another user, or any other person or entity
- In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful
- To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site

5. INTELLECTUAL PROPERTY

The Site and its original content, features, and functionality are owned by ${this.businessInfo.companyName} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

6. USER CONTENT

${this.dataCollection.personalInfo?`
Our Site may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content").

You retain ownership of Content you submit. However, by submitting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such Content.

You represent and warrant that:
- You own or have the necessary rights to submit the Content
- The Content does not violate the privacy rights, publicity rights, copyrights, or other rights of any person

We have the right to remove any Content that violates these Terms or is otherwise objectionable.
`:""}

7. LINKS TO OTHER WEBSITES

Our Site may contain links to third-party websites or services that are not owned or controlled by ${this.businessInfo.companyName}.

We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that ${this.businessInfo.companyName} shall not be responsible or liable for any damage or loss caused by your use of any such content.

8. DISCLAIMER OF WARRANTIES

THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ${this.businessInfo.companyName.toUpperCase()} MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS ALL WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

9. LIMITATION OF LIABILITY

IN NO EVENT SHALL ${this.businessInfo.companyName.toUpperCase()}, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF THE SITE.

10. INDEMNIFICATION

You agree to defend, indemnify, and hold harmless ${this.businessInfo.companyName} and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, and expenses arising from:
- Your use of the Site
- Your violation of these Terms
- Your violation of any third party right

11. TERMINATION

We may terminate or suspend your account and access to the Site immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.

Upon termination, your right to use the Site will immediately cease.

12. GOVERNING LAW

These Terms shall be governed by and construed in accordance with the laws of ${this.businessInfo.country}${this.businessInfo.state?`, ${this.businessInfo.state}`:""}, without regard to its conflict of law provisions.

13. CHANGES TO TERMS

We reserve the right to modify or replace these Terms at any time. We will provide notice of material changes by posting the new Terms on this page and updating the "Last Updated" date.

Your continued use of the Site after changes become effective constitutes acceptance of the revised Terms.

14. CONTACT US

If you have questions about these Terms, please contact us:

${this.businessInfo.companyName}
Email: ${this.businessInfo.email}
${this.businessInfo.address?`Address: ${this.businessInfo.address}`:""}

---

These Terms of Service were generated using Privacy Policy Generator.
For legal advice, consult a qualified attorney.
`}generateCookiePolicy(){return`
COOKIE POLICY

Last Updated: ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

This Cookie Policy explains how ${this.businessInfo.companyName} uses cookies and similar technologies on ${this.businessInfo.websiteUrl}.

1. WHAT ARE COOKIES?

Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.

2. HOW WE USE COOKIES

We use cookies for the following purposes:

Essential Cookies: Required for the Site to function properly. These cannot be disabled.
${this.dataCollection.analytics?`- Analytics Cookies: Help us understand how visitors use our Site
`:""}
${this.dataCollection.personalInfo?`- Functionality Cookies: Remember your preferences and settings
`:""}
${this.dataCollection.socialMedia?`- Social Media Cookies: Enable social media features
`:""}

3. TYPES OF COOKIES WE USE

Session Cookies: Temporary cookies that expire when you close your browser.
Persistent Cookies: Remain on your device for a set period or until you delete them.

4. THIRD-PARTY COOKIES

${this.thirdPartyServices.length>0?`
We use the following third-party services that may set cookies:
${this.thirdPartyServices.filter(r=>r.category==="analytics"||r.category==="advertising").map(r=>`- ${r.name}: ${r.purpose}`).join(`
`)}
`:"We do not currently use third-party cookies."}

5. YOUR CHOICES

You can control cookies through your browser settings. You can:
- Delete existing cookies
- Block future cookies
- Set your browser to notify you when cookies are sent

Note: Disabling cookies may affect functionality of the Site.

6. CONTACT US

Questions about our Cookie Policy? Contact us at ${this.businessInfo.email}.
`}generateDisclaimer(){return`
DISCLAIMER

The information provided by ${this.businessInfo.companyName} on ${this.businessInfo.websiteUrl} is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.

UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
`}generateReturnPolicy(){return`
RETURN AND REFUND POLICY

Last Updated: ${new Date().toLocaleDateString()}

Thank you for shopping at ${this.businessInfo.companyName}.

1. RETURN PERIOD

You have 30 days from the date of purchase to return an item.

2. ELIGIBILITY

To be eligible for a return, items must be:
- Unused and in the same condition as received
- In the original packaging
- Accompanied by proof of purchase

3. REFUNDS

Once we receive your return, we will inspect it and notify you of the refund status. If approved, your refund will be processed within 7-10 business days to your original payment method.

4. SHIPPING COSTS

You will be responsible for paying shipping costs for returning items. Shipping costs are non-refundable.

5. CONTACT US

For return questions, email ${this.businessInfo.email}.
`}generateAcceptableUse(){return`
ACCEPTABLE USE POLICY

This Acceptable Use Policy governs your use of ${this.businessInfo.websiteUrl}.

PROHIBITED ACTIVITIES:

You may not use the Site to:
- Violate any laws or regulations
- Infringe intellectual property rights
- Transmit harmful code or malware
- Attempt unauthorized access to systems
- Harass, abuse, or harm others
- Spam or send unsolicited messages
- Collect user information without consent
- Impersonate others
- Engage in fraudulent activities

ENFORCEMENT:

Violations may result in:
- Account suspension or termination
- Legal action
- Reporting to law enforcement

For questions, contact ${this.businessInfo.email}.
`}downloadDocument(r,i){let s=this.generatedDocuments.get(r);if(!s)return;let o=s.content,a="text/plain",M="txt";if(i==="html"&&(o=this.convertToHTML(o),a="text/html",M="html"),O(this.platformId)){let me=new Blob([o],{type:a}),L=URL.createObjectURL(me),R=this.document.createElement("a");R.href=L,R.download=`${r}-${Date.now()}.${M}`,R.click(),URL.revokeObjectURL(L)}}convertToHTML(r){let i=r.split(`
`),s=`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${this.businessInfo.companyName} - Legal Document</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1, h2 { color: #333; }
    p { margin-bottom: 10px; }
  </style>
</head>
<body>
`;return i.forEach(o=>{o.trim()===""?s+="<br>":o.match(/^[A-Z\s]+$/)?s+=`<h1>${o.trim()}</h1>`:o.match(/^\d+\./)?s+=`<h2>${o.trim()}</h2>`:s+=`<p>${o}</p>`}),s+="</body></html>",s}downloadAll(){for(let r of this.selectedDocuments)this.downloadDocument(r,"txt")}toggleDocument(r){this.selectedDocuments.has(r)?this.documentTypes.find(s=>s.id===r)?.legalRequired||this.selectedDocuments.delete(r):this.selectedDocuments.add(r)}addThirdPartyService(r){this.thirdPartyServices.push(k({},r))}removeThirdPartyService(r){this.thirdPartyServices.splice(r,1)}delay(r){return new Promise(i=>setTimeout(i,r))}generateId(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}switchTab(r){this.activeTab=r}requestAdvancedFeatures(){this.router.navigate(["/home/contact"],{queryParams:{subject:"Legal Document Services Request",feature:"Attorney Review, Custom Legal Documents, Ongoing Updates"}})}setupAdvancedSEO(){let r=new Date().getFullYear();this.title.setTitle(`Privacy Policy Generator ${r} | Free GDPR/CCPA Compliant Templates`);let i=O(this.platformId)?window.location.origin:"https://yourwebsite.com",s=`${i}/tools/privacy-generator`;if([{name:"description",content:`Free privacy policy generator ${r}. Create GDPR, CCPA, COPPA compliant privacy policies, terms of service, and cookie policies. Better than Termly ($10/mo) or PrivacyPolicies ($14/mo). Generate legal documents for your website instantly.`},{name:"keywords",content:"privacy policy generator, terms of service generator, gdpr privacy policy, ccpa compliance, cookie policy generator, free privacy policy, termly alternative, legal document generator, privacy policy template"},{name:"author",content:"ZetsApp - Legal Document Tools"},{name:"robots",content:"index, follow, max-snippet:-1, max-image-preview:large"},{property:"og:type",content:"website"},{property:"og:url",content:s},{property:"og:title",content:`Privacy Policy Generator ${r}`},{property:"og:description",content:"Free GDPR/CCPA compliant privacy policy and terms generator."},{property:"og:image",content:`${i}/assets/images/tools/privacy-generator-og.webp`},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Privacy Policy Generator ${r}`},{name:"twitter:description",content:"Generate compliant legal documents for free."},{name:"theme-color",content:"#10b981"}].forEach(a=>{a.name?this.meta.updateTag(a):a.property&&this.meta.updateTag(a)}),O(this.platformId)){let a=this.document.querySelector('link[rel="canonical"]');a||(a=this.document.createElement("link"),a.setAttribute("rel","canonical"),this.document.head.appendChild(a)),a.setAttribute("href",s)}}static \u0275fac=function(i){return new(i||c)(C(ce),C(j),C(K),C(se),C(q),C(V))};static \u0275cmp=U({type:c,selectors:[["app-privacy-generator"]],decls:38,vars:9,consts:[[1,"privacy-page"],[1,"bg-orb","bg-orb-1"],[1,"bg-orb","bg-orb-2"],[1,"bg-orb","bg-orb-3"],[1,"page-header"],[1,"header-content"],[1,"header-badge"],[1,"year-badge"],[1,"header-subtitle"],[1,"header-stats"],[1,"stat-pill"],[1,"main-container"],["role","tablist",1,"tab-nav"],["class","tab-btn",3,"active","click",4,"ngFor","ngForOf"],["class","tab-panel",4,"ngIf"],[1,"seo-content"],[1,"seo-inner"],[1,"tab-btn",3,"click"],[1,"tab-icon"],[1,"tab-label"],[1,"tab-panel"],[1,"setup-section"],[1,"setup-grid"],[1,"setup-card"],[1,"form-group"],["type","text","placeholder","Acme Corporation",1,"form-input",3,"ngModelChange","ngModel"],["type","url","placeholder","https://example.com",1,"form-input",3,"ngModelChange","ngModel"],["type","email","placeholder","legal@example.com",1,"form-input",3,"ngModelChange","ngModel"],["type","text","placeholder","123 Main St, City, State",1,"form-input",3,"ngModelChange","ngModel"],[1,"form-row"],[1,"form-select",3,"ngModelChange","change","ngModel"],["class","form-group",4,"ngIf"],[1,"form-select",3,"ngModelChange","ngModel"],["value","individual"],["value","company"],["value","nonprofit"],[1,"document-checklist"],["class","doc-checkbox-label",4,"ngFor","ngForOf"],[1,"action-center"],[1,"action-btn","primary","large",3,"click"],["type","text","placeholder","California",1,"form-input",3,"ngModelChange","ngModel"],[1,"doc-checkbox-label"],["type","checkbox",1,"doc-checkbox",3,"change","checked","disabled"],[1,"doc-info"],[1,"doc-header"],[1,"doc-icon"],[1,"doc-name"],["class","required-badge",4,"ngIf"],[1,"doc-description"],[1,"required-badge"],[1,"customize-section"],[1,"customize-card"],[1,"checkbox-grid"],[1,"checkbox-label"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"compliance-grid"],[1,"compliance-label"],[1,"compliance-info"],[1,"compliance-icon"],["class","customize-card",4,"ngIf"],[1,"options-grid"],["type","number","min","1","max","120",1,"form-input",3,"ngModelChange","ngModel"],["type","email","placeholder","dpo@example.com",1,"form-input",3,"ngModelChange","ngModel"],[1,"action-btn","secondary",3,"click"],[1,"action-btn","primary","large",3,"click","disabled"],[1,"services-list"],["class","service-item",4,"ngFor","ngForOf"],[1,"add-service"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"service-item"],[1,"service-info"],[1,"service-category"],[1,"remove-btn",3,"click"],[3,"value"],[1,"preview-section"],[1,"preview-tabs"],["class","preview-tab-btn",3,"active","click",4,"ngFor","ngForOf"],["class","preview-content",4,"ngIf"],["class","empty-state",4,"ngIf"],[1,"preview-tab-btn",3,"click"],[1,"preview-content"],["class","preview-document",4,"ngFor","ngForOf"],[1,"preview-document"],[1,"preview-header"],[1,"preview-actions"],[1,"preview-paper"],[1,"preview-text"],[1,"empty-state"],[1,"empty-icon"],[1,"action-btn","primary",3,"click"],[1,"download-section"],[1,"download-grid"],["class","download-card",4,"ngFor","ngForOf"],[1,"download-all-card"],[1,"implementation-guide"],[1,"guide-steps"],[1,"guide-step"],[1,"step-number"],[1,"download-card"],[1,"download-icon"],[1,"download-buttons"],[1,"download-btn","txt",3,"click"],[1,"download-btn","html",3,"click"],[1,"compliance-checker-section"],[1,"compliance-status"],[1,"status-card"],[1,"status-icon"],[4,"ngIf"],[1,"compliance-guide-card"],[1,"checklist"],[1,"checklist-item"],["type","checkbox","checked","","disabled",""],["type","checkbox",3,"checked"],["type","checkbox"],[1,"advanced-compliance-card"],[1,"guide-section"],[1,"guide-hero"],[1,"guide-card"],[1,"cost-comparison-card"],[1,"comparison-table"],[1,"total-row"]],template:function(i,s){i&1&&(t(0,"div",0),_(1,"div",1)(2,"div",2)(3,"div",3),t(4,"header",4)(5,"div",5)(6,"div",6),n(7,"\u{1F512} 100% Free & Compliant"),e(),t(8,"h1"),n(9,"Privacy Policy & Terms Generator "),t(10,"span",7),n(11),e()(),t(12,"p",8),n(13,"Generate GDPR, CCPA, COPPA compliant privacy policies, terms of service, and cookie policies instantly. Free alternative to Termly ($10/mo) and PrivacyPolicies ($14/mo). Perfect for websites, apps, and businesses."),e(),t(14,"div",9)(15,"div",10),n(16,"\u{1F512} GDPR Compliant"),e(),t(17,"div",10),n(18,"\u{1F4DC} 6 Document Types"),e(),t(19,"div",10),n(20,"\u26A1 Instant Generation"),e(),t(21,"div",10),n(22,"\u{1F4E5} Download All"),e()()()(),t(23,"div",11)(24,"nav",12),x(25,ue,5,4,"button",13),e(),x(26,fe,62,8,"div",14)(27,_e,124,19,"div",14)(28,Ee,6,3,"div",14)(29,Oe,50,4,"div",14)(30,Ne,72,18,"div",14)(31,Ge,231,1,"div",14),e(),t(32,"section",15)(33,"div",16)(34,"h2"),n(35),e(),t(36,"p"),n(37,"Generate professional, legally compliant privacy policies, terms of service, and cookie policies for your website or app. 100% free alternative to Termly ($10/month) and PrivacyPolicies ($14/month). GDPR, CCPA, COPPA, PIPEDA, and LGPD compliant. Instant generation with customization options. Perfect for websites, mobile apps, SaaS businesses, and e-commerce stores. Used by 200M+ websites worldwide."),e()()()()),i&2&&(l(11),v(s.currentYear),l(14),u("ngForOf",s.tabs),l(),u("ngIf",s.activeTab==="setup"),l(),u("ngIf",s.activeTab==="customize"),l(),u("ngIf",s.activeTab==="preview"),l(),u("ngIf",s.activeTab==="download"),l(),u("ngIf",s.activeTab==="compliance"),l(),u("ngIf",s.activeTab==="guide"),l(4),P("Privacy Policy Generator ",s.currentYear," \u2014 Free GDPR/CCPA Compliant Templates"))},dependencies:[Y,$,ne,ie,Z,ee,X,te,Q,ae,oe,J,B,z],styles:["[_nghost-%COMP%]{--primary: #10b981;--primary-dark: #059669;--primary-light: #34d399;--success: #10b981;--warning: #f59e0b;--danger: #ef4444}.header-content[_ngcontent-%COMP%]{margin-top:28px}.privacy-page[_ngcontent-%COMP%]{min-height:100vh;background:#f0fdf4;font-family:Inter,sans-serif;position:relative}.bg-orb[_ngcontent-%COMP%]{position:fixed;border-radius:50%;pointer-events:none;filter:blur(80px)}.bg-orb-1[_ngcontent-%COMP%]{width:600px;height:600px;background:radial-gradient(circle,rgba(16,185,129,.15),transparent 70%);top:-150px;right:-200px;animation:_ngcontent-%COMP%_orbFloat 15s ease-in-out infinite}.bg-orb-2[_ngcontent-%COMP%]{width:500px;height:500px;background:radial-gradient(circle,rgba(52,211,153,.12),transparent 70%);bottom:20%;left:-150px;animation:_ngcontent-%COMP%_orbFloat 18s ease-in-out infinite reverse}.bg-orb-3[_ngcontent-%COMP%]{width:400px;height:400px;background:radial-gradient(circle,rgba(167,243,208,.1),transparent 70%);top:50%;right:10%;animation:_ngcontent-%COMP%_orbFloat 12s ease-in-out infinite 3s}@keyframes _ngcontent-%COMP%_orbFloat{0%,to{transform:translateY(0)}50%{transform:translateY(-30px)}}.page-header[_ngcontent-%COMP%]{position:relative;z-index:1;background:linear-gradient(135deg,#059669,#10b981,#34d399);color:#fff;padding:clamp(48px,8vw,80px) clamp(20px,5vw,60px) 40px;text-align:center}.header-badge[_ngcontent-%COMP%]{display:inline-block;background:#fff3;border:1px solid rgba(255,255,255,.3);padding:6px 16px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:16px}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(28px,5vw,52px);font-weight:800;margin:0 0 16px}.year-badge[_ngcontent-%COMP%]{background:#ffffff40;border-radius:8px;padding:2px 10px;font-size:.8em}.header-subtitle[_ngcontent-%COMP%]{font-size:clamp(15px,2vw,18px);opacity:.9;max-width:680px;margin:0 auto 24px}.header-stats[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.stat-pill[_ngcontent-%COMP%]{background:#fff3;border:1px solid rgba(255,255,255,.3);border-radius:100px;padding:6px 14px;font-size:13px}.main-container[_ngcontent-%COMP%]{max-width:1280px;margin:0 auto;padding:24px clamp(16px,4vw,40px) 48px;position:relative;z-index:1}.tab-nav[_ngcontent-%COMP%]{display:flex;gap:4px;background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:6px;margin-bottom:24px;overflow-x:auto;box-shadow:0 2px 8px #10b98114}.tab-btn[_ngcontent-%COMP%]{flex:1;min-width:120px;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 16px;border:none;border-radius:10px;background:transparent;font-size:14px;font-weight:500;cursor:pointer;transition:.3s;font-family:inherit}.tab-btn.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;font-weight:700;box-shadow:0 4px 12px #10b9814d}.tab-panel[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.setup-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:24px}.setup-card[_ngcontent-%COMP%], .customize-card[_ngcontent-%COMP%], .download-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px;box-shadow:0 2px 8px #10b98114}.setup-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .customize-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin:0 0 16px}.form-group[_ngcontent-%COMP%]{margin-bottom:16px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:700;margin-bottom:6px}.form-input[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{width:100%;padding:12px;border:2px solid rgba(16,185,129,.2);border-radius:10px;font-size:15px;font-family:inherit}.form-input[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus{border-color:var(--primary);outline:none}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.document-checklist[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.doc-checkbox-label[_ngcontent-%COMP%]{display:flex;gap:12px;padding:12px;border:2px solid rgba(16,185,129,.12);border-radius:10px;cursor:pointer;transition:.3s}.doc-checkbox-label[_ngcontent-%COMP%]:has(input:checked){border-color:var(--primary);background:#10b9810f}.doc-checkbox[_ngcontent-%COMP%]{width:20px;height:20px}.doc-info[_ngcontent-%COMP%]{flex:1}.doc-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:4px}.doc-icon[_ngcontent-%COMP%]{font-size:20px}.doc-name[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.required-badge[_ngcontent-%COMP%]{padding:3px 8px;background:#ef44441a;color:#dc2626;border-radius:6px;font-size:11px;font-weight:700}.doc-description[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;margin:0}.action-center[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:16px}.action-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:12px 24px;border-radius:10px;border:none;font-size:14px;font-weight:700;cursor:pointer;transition:.3s;font-family:inherit}.action-btn.primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;box-shadow:0 4px 12px #10b9814d}.action-btn.primary[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 20px #10b98166}.action-btn.secondary[_ngcontent-%COMP%]{background:#10b98114;color:var(--primary)}.action-btn.large[_ngcontent-%COMP%]{padding:16px 32px;font-size:16px}.action-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.checkbox-grid[_ngcontent-%COMP%], .compliance-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:16px}.checkbox-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid rgba(16,185,129,.12);border-radius:8px;cursor:pointer}.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:18px;height:18px}.compliance-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px;border:2px solid rgba(16,185,129,.12);border-radius:10px;cursor:pointer;transition:.3s}.compliance-label[_ngcontent-%COMP%]:has(input:checked){border-color:var(--primary);background:#10b9810f}.compliance-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.compliance-icon[_ngcontent-%COMP%]{font-size:24px}.services-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-bottom:16px}.service-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px;background:#10b9810f;border-radius:8px}.service-category[_ngcontent-%COMP%]{padding:3px 8px;background:#10b98133;border-radius:6px;font-size:11px;margin-left:10px}.remove-btn[_ngcontent-%COMP%]{background:#ef4444;color:#fff;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;font-weight:700}.add-service[_ngcontent-%COMP%]{display:flex;gap:10px}.options-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:16px}.preview-tabs[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap}.preview-tab-btn[_ngcontent-%COMP%]{padding:10px 16px;border:2px solid rgba(16,185,129,.12);border-radius:10px;background:#fff;cursor:pointer;font-weight:600;transition:.3s;font-family:inherit}.preview-tab-btn.active[_ngcontent-%COMP%]{border-color:var(--primary);background:#10b9810f}.preview-document[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px;margin-bottom:24px}.preview-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:16px}.preview-actions[_ngcontent-%COMP%]{display:flex;gap:10px}.preview-paper[_ngcontent-%COMP%]{background:#fafafa;border:1px solid #e5e7eb;border-radius:10px;padding:30px;max-height:600px;overflow-y:auto}.preview-text[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:13px;line-height:1.8;white-space:pre-wrap;margin:0}.download-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:32px}.download-icon[_ngcontent-%COMP%]{font-size:48px;text-align:center;margin-bottom:12px}.download-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin:0 0 8px;text-align:center}.download-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;text-align:center;margin:0 0 16px}.download-buttons[_ngcontent-%COMP%]{display:flex;gap:10px}.download-btn[_ngcontent-%COMP%]{flex:1;padding:10px;border:none;border-radius:8px;font-weight:700;cursor:pointer;transition:.3s;font-family:inherit}.download-btn.txt[_ngcontent-%COMP%]{background:#3b82f6;color:#fff}.download-btn.html[_ngcontent-%COMP%]{background:#8b5cf6;color:#fff}.download-all-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#10b98114,#34d39914);border:2px solid rgba(16,185,129,.2);border-radius:16px;padding:32px;text-align:center;margin-bottom:32px}.implementation-guide[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px}.implementation-guide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 20px}.guide-steps[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.guide-step[_ngcontent-%COMP%]{display:flex;gap:16px}.step-number[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0}.guide-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:15px;margin:0 0 4px}.guide-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;margin:0}.compliance-status[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:32px}.status-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;background:#fff;border:2px solid rgba(16,185,129,.12);border-radius:12px}.status-card.compliant[_ngcontent-%COMP%]{border-color:var(--success);background:#10b9810f}.status-icon[_ngcontent-%COMP%]{font-size:32px}.status-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;margin:0 0 6px}.status-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;margin:0}.compliance-guide-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px;margin-bottom:24px}.checklist[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-top:16px}.checklist-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px;cursor:pointer}.checklist-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:20px;height:20px}.advanced-compliance-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#10b98114,#34d39914);border:2px solid rgba(16,185,129,.2);border-radius:16px;padding:32px;text-align:center}.guide-section[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:24px}.guide-hero[_ngcontent-%COMP%]{text-align:center}.guide-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(24px,3vw,36px);margin:0 0 8px}.guide-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:28px}.guide-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin:0 0 14px}.guide-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#6b7280;line-height:1.7;margin:0 0 16px}.guide-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:16px 0;padding-left:20px}.guide-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;margin-bottom:8px}.cost-comparison-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px}.comparison-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:16px}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px;text-align:left;border-bottom:1px solid rgba(16,185,129,.1)}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#10b98114;font-weight:700;font-size:13px}.total-row[_ngcontent-%COMP%]{background:#10b9810f;font-weight:700}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:60px 20px;background:#fff;border:2px dashed rgba(16,185,129,.2);border-radius:16px}.empty-icon[_ngcontent-%COMP%]{font-size:56px;margin-bottom:16px}.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin:0 0 8px}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6b7280;font-size:14px;margin:0 0 20px}.seo-content[_ngcontent-%COMP%]{background:#10b98108;border-top:1px solid rgba(16,185,129,.12);padding:40px clamp(16px,5vw,60px)}.seo-inner[_ngcontent-%COMP%]{max-width:900px;margin:0 auto}.seo-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0 0 12px}.seo-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#6b7280;line-height:1.8;margin:0}@media (max-width:1200px){.setup-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width:768px){.tab-btn[_ngcontent-%COMP%]{min-width:100px;font-size:12px}.checkbox-grid[_ngcontent-%COMP%], .compliance-grid[_ngcontent-%COMP%], .options-grid[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.download-buttons[_ngcontent-%COMP%]{flex-direction:column}}"]})};var Le=[{path:"",component:T}],D=class c{static \u0275fac=function(i){return new(i||c)};static \u0275mod=E({type:c});static \u0275inj=w({imports:[G.forChild(Le),G]})};var pe=class c{static \u0275fac=function(i){return new(i||c)};static \u0275mod=E({type:c});static \u0275inj=w({imports:[H,re,D,le]})};export{pe as PrivacyGeneratorModule};
