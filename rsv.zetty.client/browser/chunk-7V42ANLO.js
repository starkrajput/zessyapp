import{a as ue}from"./chunk-7I3JYL66.js";import{a as fe}from"./chunk-RGH4VI7P.js";import{a as ge}from"./chunk-SKINQ6C3.js";import{b as H,c as W,d as v,e as X,f as J,i as Z,j as K,k as Q,l as ee,m as te,n as ie,o as ne,p as oe,q as re,r as ae,t as le,v as se,w as ce,x as de,y as pe}from"./chunk-GBUII5VK.js";import{$ as D,Aa as y,Ba as u,Ca as c,Eb as R,F as I,Fb as B,J as z,K as N,La as n,Ma as T,Na as w,O as f,Ob as me,P as g,Qb as F,Y as L,da as d,ea as O,jb as A,lb as q,ma as _,mb as Y,pa as m,qa as M,ra as S,ua as i,ub as U,va as e,vb as $,wa as s}from"./chunk-2WM7PLP5.js";function he(l,o){l&1&&(i(0,"header",6)(1,"div",7)(2,"a",8),n(3,"\u{1F6E0}\uFE0F Tools"),e(),i(4,"span",9),n(5,"/"),e(),i(6,"span"),n(7,"Portfolio Generator"),e()(),i(8,"h1",10),n(9,"\u{1F680} Professional Portfolio Generator"),e(),i(10,"p",11),n(11," Create stunning portfolio websites in minutes - No coding required! "),e(),i(12,"div",12)(13,"span",13),n(14,"\u2728 3 Modern Themes"),e(),i(15,"span",13),n(16,"\u{1F4F1} Fully Responsive"),e(),i(17,"span",13),n(18,"\u26A1 Instant Download"),e(),i(19,"span",13),n(20,"\u{1F3A8} Customizable"),e()()())}function be(l,o){if(l&1){let t=y();i(0,"div",14)(1,"div",15)(2,"button",16),u("click",function(){f(t);let a=c();return g(a.backToEdit())}),s(3,"i",17),n(4," Back to Edit "),e(),i(5,"div",18)(6,"button",19),u("click",function(){f(t);let a=c();return g(a.copyToClipboard())}),s(7,"i",20),n(8," Copy HTML "),e(),i(9,"button",21),u("click",function(){f(t);let a=c();return g(a.downloadPortfolio())}),s(10,"i",22),n(11," Download "),e()()(),i(12,"div",23),s(13,"iframe",24),e(),i(14,"div",25)(15,"div",26)(16,"h3"),n(17,"\u{1F4C4} Generated HTML Code"),e(),i(18,"button",27),u("click",function(){f(t);let a=c();return g(a.copyToClipboard())}),s(19,"i",20),n(20," Copy Code "),e()(),i(21,"pre",28)(22,"code"),n(23),e()()()()}if(l&2){let t=c();d(13),m("srcdoc",t.generatedHtml,D),d(10),T(t.generatedHtml)}}function _e(l,o){if(l&1){let t=y();i(0,"div",37)(1,"div",38)(2,"h2"),n(3,"\u{1F464} Personal Information"),e(),i(4,"p"),n(5,"Tell us about yourself"),e()(),i(6,"div",39)(7,"div",40)(8,"div",41)(9,"label",42),n(10,"Full Name *"),e(),s(11,"input",43),e(),i(12,"div",41)(13,"label",44),n(14,"Profession *"),e(),s(15,"input",45),e(),i(16,"div",41)(17,"label",46),n(18,"Email *"),e(),s(19,"input",47),e(),i(20,"div",41)(21,"label",48),n(22,"Phone"),e(),s(23,"input",49),e(),i(24,"div",50)(25,"label",51),n(26,"Banner Background Image URL * "),i(27,"span",52),n(28,"\u2139\uFE0F"),e()(),s(29,"input",53),i(30,"small",54),n(31,"Recommended size: 1920x1080px (Landscape)"),e()(),i(32,"div",50)(33,"label",55),n(34,"Profile Image URL * "),i(35,"span",56),n(36,"\u2139\uFE0F"),e()(),s(37,"input",57),i(38,"small",54),n(39,"Recommended size: 500x500px (Square)"),e()(),i(40,"div",50)(41,"label",58),n(42,"Resume/CV URL "),i(43,"span",59),n(44,"\u2139\uFE0F"),e()(),s(45,"input",60),i(46,"small",54),n(47,"Upload your resume to Google Drive or Dropbox and paste the public link"),e()(),i(48,"div",41)(49,"label",61),n(50,"Location *"),e(),s(51,"input",62),e(),i(52,"div",41)(53,"label",63),n(54,"Years of Experience"),e(),s(55,"input",64),e(),i(56,"div",50)(57,"label",55),n(58,"Profile Image URL"),e(),s(59,"input",65),e(),i(60,"div",50)(61,"label",66),n(62,"Tagline *"),e(),s(63,"input",67),e(),i(64,"div",50)(65,"label",68),n(66,"About Me *"),e(),s(67,"textarea",69),e()()(),i(68,"div",70)(69,"button",71),u("click",function(){f(t);let a=c(2);return g(a.nextStep())}),n(70," Next Step "),s(71,"i",72),e()()()}}function ye(l,o){if(l&1&&(i(0,"option",86),n(1),e()),l&2){let t=o.$implicit;m("value",t.name),d(),w(" ",t.name," ")}}function Ce(l,o){if(l&1){let t=y();i(0,"button",87),u("click",function(){f(t);let a=c().index,x=c(3);return g(x.removeSocialLink(a))}),s(1,"i",88),e()}}function we(l,o){if(l&1){let t=y();i(0,"div",79)(1,"div",80)(2,"div",41)(3,"label"),n(4,"Platform"),e(),i(5,"select",81),u("change",function(a){let x=f(t).index,k=c(3);return g(k.onPlatformChange(x,a))}),_(6,ye,2,2,"option",82),e()(),i(7,"div",83)(8,"label"),n(9,"URL"),e(),s(10,"input",84),e(),_(11,Ce,2,0,"button",85),e()()}if(l&2){let t,r=o.$implicit,a=o.index,x=c(3);m("formGroupName",a),d(6),m("ngForOf",x.socialPlatforms),d(4),m("placeholder",x.getSocialPlaceholder((t=r.get("platform"))==null?null:t.value)),d(),m("ngIf",x.socialLinks.length>1)}}function ke(l,o){if(l&1){let t=y();i(0,"div",37)(1,"div",38)(2,"h2"),n(3,"\u{1F517} Social Links"),e(),i(4,"p"),n(5,"Connect your social profiles"),e()(),i(6,"div",73)(7,"div",74),_(8,we,12,4,"div",75),e(),i(9,"button",76),u("click",function(){f(t);let a=c(2);return g(a.addSocialLink())}),s(10,"i",77),n(11," Add Social Link "),e()(),i(12,"div",70)(13,"button",78),u("click",function(){f(t);let a=c(2);return g(a.previousStep())}),s(14,"i",17),n(15," Previous "),e(),i(16,"button",71),u("click",function(){f(t);let a=c(2);return g(a.nextStep())}),n(17," Next Step "),s(18,"i",72),e()()()}if(l&2){let t=c(2);d(8),m("ngForOf",t.socialLinks.controls)}}function Pe(l,o){if(l&1){let t=y();i(0,"button",105),u("click",function(){f(t);let a=c().index,x=c(3);return g(x.removeExperience(a))}),s(1,"i",106),e()}}function Se(l,o){if(l&1&&(i(0,"div",94)(1,"div",95)(2,"h4"),n(3),e(),_(4,Pe,2,0,"button",96),e(),i(5,"div",40)(6,"div",41)(7,"label"),n(8,"Company *"),e(),s(9,"input",97),e(),i(10,"div",41)(11,"label"),n(12,"Position *"),e(),s(13,"input",98),e(),i(14,"div",41)(15,"label"),n(16,"Start Date *"),e(),s(17,"input",99),e(),i(18,"div",41)(19,"label"),n(20,"End Date"),e(),s(21,"input",100),e(),i(22,"div",101)(23,"label",102),s(24,"input",103),i(25,"span"),n(26,"Currently working here"),e()()(),i(27,"div",50)(28,"label"),n(29,"Description *"),e(),s(30,"textarea",104),e()()()),l&2){let t=o.index,r=c(3);m("formGroupName",t),d(3),w("Experience #",t+1,""),d(),m("ngIf",r.experience.length>1),d(17),m("disabled",r.isCurrentlyWorking(t))}}function Ee(l,o){if(l&1){let t=y();i(0,"button",105),u("click",function(){f(t);let a=c().index,x=c(3);return g(x.removeEducation(a))}),s(1,"i",106),e()}}function Oe(l,o){if(l&1&&(i(0,"div",107)(1,"div",95)(2,"h4"),n(3),e(),_(4,Ee,2,0,"button",96),e(),i(5,"div",40)(6,"div",41)(7,"label"),n(8,"Institution *"),e(),s(9,"input",108),e(),i(10,"div",41)(11,"label"),n(12,"Degree *"),e(),s(13,"input",109),e(),i(14,"div",41)(15,"label"),n(16,"Field of Study *"),e(),s(17,"input",110),e(),i(18,"div",41)(19,"label"),n(20,"Start Year *"),e(),s(21,"input",111),e(),i(22,"div",41)(23,"label"),n(24,"End Year *"),e(),s(25,"input",112),e()()()),l&2){let t=o.index,r=c(3);m("formGroupName",t),d(3),w("Education #",t+1,""),d(),m("ngIf",r.education.length>1)}}function Me(l,o){if(l&1){let t=y();i(0,"div",37)(1,"div",38)(2,"h2"),n(3,"\u{1F4BC} Experience & Education"),e(),i(4,"p"),n(5,"Showcase your professional journey"),e()(),i(6,"div",73)(7,"div",89)(8,"h3"),n(9,"Work Experience"),e(),i(10,"div",90),_(11,Se,31,4,"div",91),e(),i(12,"button",76),u("click",function(){f(t);let a=c(2);return g(a.addExperience())}),s(13,"i",77),n(14," Add Experience "),e()(),i(15,"div",89)(16,"h3"),n(17,"Education"),e(),i(18,"div",92),_(19,Oe,26,3,"div",93),e(),i(20,"button",76),u("click",function(){f(t);let a=c(2);return g(a.addEducation())}),s(21,"i",77),n(22," Add Education "),e()()(),i(23,"div",70)(24,"button",78),u("click",function(){f(t);let a=c(2);return g(a.previousStep())}),s(25,"i",17),n(26," Previous "),e(),i(27,"button",71),u("click",function(){f(t);let a=c(2);return g(a.nextStep())}),n(28," Next Step "),s(29,"i",72),e()()()}if(l&2){let t=c(2);d(11),m("ngForOf",t.experience.controls),d(8),m("ngForOf",t.education.controls)}}function Te(l,o){if(l&1&&(i(0,"option",86),n(1),e()),l&2){let t=o.$implicit;m("value",t),d(),w(" ",t," ")}}function Ie(l,o){if(l&1){let t=y();i(0,"button",87),u("click",function(){f(t);let a=c().index,x=c(3);return g(x.removeSkill(a))}),s(1,"i",88),e()}}function Ne(l,o){if(l&1&&(i(0,"div",117)(1,"div",118)(2,"div",41)(3,"label"),n(4,"Skill Name *"),e(),s(5,"input",119),e(),i(6,"div",41)(7,"label"),n(8,"Category *"),e(),i(9,"select",120),_(10,Te,2,2,"option",82),e()(),i(11,"div",41)(12,"label"),n(13),e(),s(14,"input",121),e(),_(15,Ie,2,0,"button",85),e()()),l&2){let t=o.index,r=c(3);m("formGroupName",t),d(10),m("ngForOf",r.skillCategories),d(3),w("Proficiency: ",r.getSkillLevel(t),"%"),d(2),m("ngIf",r.skills.length>1)}}function Ve(l,o){if(l&1){let t=y();i(0,"button",105),u("click",function(){f(t);let a=c().index,x=c(3);return g(x.removeProject(a))}),s(1,"i",106),e()}}function Ge(l,o){if(l&1&&(i(0,"div",122)(1,"div",95)(2,"h4"),n(3),e(),_(4,Ve,2,0,"button",96),e(),i(5,"div",40)(6,"div",41)(7,"label"),n(8,"Project Title *"),e(),s(9,"input",123),e(),i(10,"div",41)(11,"label"),n(12,"Image URL"),e(),s(13,"input",124),e(),i(14,"div",50)(15,"label"),n(16,"Description *"),e(),s(17,"textarea",125),e(),i(18,"div",41)(19,"label"),n(20,"Technologies"),e(),s(21,"input",126),e(),i(22,"div",41)(23,"label"),n(24,"Live URL"),e(),s(25,"input",127),e(),i(26,"div",41)(27,"label"),n(28,"GitHub URL"),e(),s(29,"input",128),e()()()),l&2){let t=o.index,r=c(3);m("formGroupName",t),d(3),w("Project #",t+1,""),d(),m("ngIf",r.projects.length>1)}}function je(l,o){if(l&1){let t=y();i(0,"div",37)(1,"div",38)(2,"h2"),n(3,"\u26A1 Skills & Projects"),e(),i(4,"p"),n(5,"Highlight your expertise"),e()(),i(6,"div",73)(7,"div",89)(8,"h3"),n(9,"Technical Skills"),e(),i(10,"div",113),_(11,Ne,16,4,"div",114),e(),i(12,"button",76),u("click",function(){f(t);let a=c(2);return g(a.addSkill())}),s(13,"i",77),n(14," Add Skill "),e()(),i(15,"div",89)(16,"h3"),n(17,"Projects"),e(),i(18,"div",115),_(19,Ge,30,3,"div",116),e(),i(20,"button",76),u("click",function(){f(t);let a=c(2);return g(a.addProject())}),s(21,"i",77),n(22," Add Project "),e()()(),i(23,"div",70)(24,"button",78),u("click",function(){f(t);let a=c(2);return g(a.previousStep())}),s(25,"i",17),n(26," Previous "),e(),i(27,"button",71),u("click",function(){f(t);let a=c(2);return g(a.nextStep())}),n(28," Next Step "),s(29,"i",72),e()()()}if(l&2){let t=c(2);d(11),m("ngForOf",t.skills.controls),d(8),m("ngForOf",t.projects.controls)}}function $e(l,o){if(l&1){let t=y();i(0,"button",105),u("click",function(){f(t);let a=c().index,x=c(3);return g(x.removeCertification(a))}),s(1,"i",106),e()}}function Fe(l,o){if(l&1&&(i(0,"div",131)(1,"div",95)(2,"h4"),n(3),e(),_(4,$e,2,0,"button",96),e(),i(5,"div",40)(6,"div",41)(7,"label"),n(8,"Certification Name *"),e(),s(9,"input",132),e(),i(10,"div",41)(11,"label"),n(12,"Issuing Organization *"),e(),s(13,"input",133),e(),i(14,"div",41)(15,"label"),n(16,"Date Obtained *"),e(),s(17,"input",134),e()()()),l&2){let t=o.index,r=c(3);m("formGroupName",t),d(3),w("Certification #",t+1,""),d(),m("ngIf",r.certifications.length>1)}}function ze(l,o){if(l&1){let t=y();i(0,"div",37)(1,"div",38)(2,"h2"),n(3,"\u{1F3C6} Certifications"),e(),i(4,"p"),n(5,"Add your certifications"),e()(),i(6,"div",73)(7,"div",129),_(8,Fe,18,3,"div",130),e(),i(9,"button",76),u("click",function(){f(t);let a=c(2);return g(a.addCertification())}),s(10,"i",77),n(11," Add Certification "),e()(),i(12,"div",70)(13,"button",78),u("click",function(){f(t);let a=c(2);return g(a.previousStep())}),s(14,"i",17),n(15," Previous "),e(),i(16,"button",71),u("click",function(){f(t);let a=c(2);return g(a.nextStep())}),n(17," Next Step "),s(18,"i",72),e()()()}if(l&2){let t=c(2);d(8),m("ngForOf",t.certifications.controls)}}function Le(l,o){l&1&&(i(0,"div",149),s(1,"i",150),n(2," Selected "),e())}function De(l,o){if(l&1){let t=y();i(0,"div",143),u("click",function(){let a=f(t).$implicit,x=c(3);return g(x.selectTheme(a))}),i(1,"div",144),_(2,Le,3,0,"div",145),e(),i(3,"div",146)(4,"h3"),n(5),e(),i(6,"p"),n(7),e(),i(8,"div",147),s(9,"span",148)(10,"span",148)(11,"span",148),e()()()}if(l&2){let t=o.$implicit,r=c(3);S("selected",r.isThemeSelected(t.id)),d(),M("background",t.gradient),d(),m("ngIf",r.isThemeSelected(t.id)),d(3),T(t.name),d(2),T(t.description),d(2),M("background",t.primaryColor),d(),M("background",t.secondaryColor),d(),M("background",t.accentColor)}}function Ae(l,o){l&1&&(i(0,"span"),s(1,"i",151),n(2," Generate Portfolio "),e())}function qe(l,o){l&1&&(i(0,"span"),s(1,"i",152),n(2," Generating... "),e())}function Ye(l,o){if(l&1){let t=y();i(0,"div",37)(1,"div",38)(2,"h2"),n(3,"\u{1F3A8} Choose Your Theme"),e(),i(4,"p"),n(5,"Select a professional theme"),e()(),i(6,"div",73)(7,"div",135),_(8,De,12,13,"div",136),e(),i(9,"div",137)(10,"h3"),n(11,"Additional Settings"),e(),i(12,"div",138)(13,"label",102),s(14,"input",139),i(15,"span"),n(16,'Show "Download CV" button'),e()(),i(17,"label",102),s(18,"input",140),i(19,"span"),n(20,"Show contact form"),e()()()()(),i(21,"div",70)(22,"button",78),u("click",function(){f(t);let a=c(2);return g(a.previousStep())}),s(23,"i",17),n(24," Previous "),e(),i(25,"button",141),u("click",function(){f(t);let a=c(2);return g(a.generatePortfolio())}),_(26,Ae,3,0,"span",142)(27,qe,3,0,"span",142),e()()()}if(l&2){let t=c(2);d(8),m("ngForOf",t.themes),d(17),m("disabled",!t.selectedTheme||t.isGenerating),d(),m("ngIf",!t.isGenerating),d(),m("ngIf",t.isGenerating)}}function Ue(l,o){if(l&1){let t=y();i(0,"div",29)(1,"div",30)(2,"div",31),u("click",function(){f(t);let a=c();return g(a.goToStep(1))}),i(3,"div",32),n(4,"1"),e(),i(5,"div",33),n(6,"Personal Info"),e()(),s(7,"div",34),i(8,"div",31),u("click",function(){f(t);let a=c();return g(a.goToStep(2))}),i(9,"div",32),n(10,"2"),e(),i(11,"div",33),n(12,"Social Links"),e()(),s(13,"div",34),i(14,"div",31),u("click",function(){f(t);let a=c();return g(a.goToStep(3))}),i(15,"div",32),n(16,"3"),e(),i(17,"div",33),n(18,"Experience"),e()(),s(19,"div",34),i(20,"div",31),u("click",function(){f(t);let a=c();return g(a.goToStep(4))}),i(21,"div",32),n(22,"4"),e(),i(23,"div",33),n(24,"Skills & Projects"),e()(),s(25,"div",34),i(26,"div",31),u("click",function(){f(t);let a=c();return g(a.goToStep(5))}),i(27,"div",32),n(28,"5"),e(),i(29,"div",33),n(30,"Certifications"),e()(),s(31,"div",34),i(32,"div",31),u("click",function(){f(t);let a=c();return g(a.goToStep(6))}),i(33,"div",32),n(34,"6"),e(),i(35,"div",33),n(36,"Theme"),e()()(),i(37,"form",35),_(38,_e,72,0,"div",36)(39,ke,19,1,"div",36)(40,Me,30,2,"div",36)(41,je,30,2,"div",36)(42,ze,19,1,"div",36)(43,Ye,28,4,"div",36),e()()}if(l&2){let t=c();d(2),S("active",t.currentStep===1)("completed",t.currentStep>1),d(6),S("active",t.currentStep===2)("completed",t.currentStep>2),d(6),S("active",t.currentStep===3)("completed",t.currentStep>3),d(6),S("active",t.currentStep===4)("completed",t.currentStep>4),d(6),S("active",t.currentStep===5)("completed",t.currentStep>5),d(6),S("active",t.currentStep===6)("completed",t.currentStep>6),d(5),m("formGroup",t.portfolioForm),d(),m("ngIf",t.currentStep===1),d(),m("ngIf",t.currentStep===2),d(),m("ngIf",t.currentStep===3),d(),m("ngIf",t.currentStep===4),d(),m("ngIf",t.currentStep===5),d(),m("ngIf",t.currentStep===6)}}function Re(l,o){if(l&1&&(i(0,"li",170),s(1,"i",171),n(2),e()),l&2){let t=o.$implicit;d(2),w(" ",t," ")}}function Be(l,o){if(l&1){let t=y();i(0,"div",163)(1,"div",164),u("click",function(){let a=f(t).$implicit,x=c(2);return g(x.goToErrorStep(a.step))}),i(2,"div",165)(3,"span",166),n(4),e(),i(5,"span",167),n(6),e(),s(7,"i",72),e(),i(8,"ul",168),_(9,Re,3,1,"li",169),e()()()}if(l&2){let t=o.$implicit;d(4),w("Step ",t.step,""),d(2),T(t.stepName),d(3),m("ngForOf",t.errors)}}function He(l,o){if(l&1){let t=y();i(0,"div",153),u("click",function(){f(t);let a=c();return g(a.closeValidationModal())}),i(1,"div",154),u("click",function(a){return f(t),g(a.stopPropagation())}),i(2,"div",155)(3,"h3"),s(4,"i",156),n(5," Validation Errors"),e(),i(6,"button",157),u("click",function(){f(t);let a=c();return g(a.closeValidationModal())}),n(7,"\xD7"),e()(),i(8,"div",158)(9,"p",159),n(10,"Please fix the following errors before generating your portfolio:"),e(),_(11,Be,10,3,"div",160),e(),i(12,"div",161)(13,"button",162),u("click",function(){f(t);let a=c();return g(a.closeValidationModal())}),n(14," Close "),e()()()()}if(l&2){let t=c();d(11),m("ngForOf",t.validationErrors)}}var V=class l{constructor(o,t,r,a,x,k){this.fb=o;this.seoService=t;this.meta=r;this.title=a;this.document=x;this.platformId=k}portfolioForm;currentStep=1;totalSteps=6;selectedTheme=null;generatedHtml="";showPreview=!1;isGenerating=!1;validationErrors=[];showValidationModal=!1;themes=[{id:"modern-gradient",name:"Modern Gradient",description:"Sleek design with vibrant gradients and smooth animations",primaryColor:"#0891b2",secondaryColor:"#3b82f6",accentColor:"#6366f1",previewImage:"theme1.jpg",gradient:"linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)"},{id:"minimalist-pro",name:"Minimalist Pro",description:"Clean, professional layout with elegant typography",primaryColor:"#0891b2",secondaryColor:"#06b6d4",accentColor:"#10b981",previewImage:"theme2.jpg",gradient:"linear-gradient(135deg, #0891b2 0%, #10b981 100%)"},{id:"creative-bold",name:"Creative Bold",description:"Eye-catching design perfect for creative professionals",primaryColor:"#f59e0b",secondaryColor:"#ef4444",accentColor:"#8b5cf6",previewImage:"theme3.jpg",gradient:"linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"}];skillCategories=["Programming Languages","Frameworks & Libraries","Databases","Tools & Platforms","Soft Skills","Design Tools","Cloud Services","DevOps","Mobile Development","Other"];socialPlatforms=[{name:"LinkedIn",icon:"fab fa-linkedin",placeholder:"https://linkedin.com/in/username"},{name:"GitHub",icon:"fab fa-github",placeholder:"https://github.com/username"},{name:"Twitter",icon:"fab fa-twitter",placeholder:"https://twitter.com/username"},{name:"Email",icon:"fas fa-envelope",placeholder:"your@email.com"}];ngOnInit(){this.setupAdvancedSEO(),this.initializeForm()}ngOnDestroy(){}initializeForm(){this.portfolioForm=this.fb.group({personal:this.fb.group({fullName:["",[v.required,v.minLength(2)]],profession:["",v.required],location:["",v.required],email:["",[v.required,v.email]],phone:[""],profileImage:["",v.required],bannerImage:["",v.required],tagline:["",[v.required,v.maxLength(100)]],about:["",[v.required,v.minLength(50)]],yearsOfExperience:[0,[v.min(0)]],resumeUrl:[""]}),socialLinks:this.fb.array([]),experience:this.fb.array([]),education:this.fb.array([]),skills:this.fb.array([]),projects:this.fb.array([]),certifications:this.fb.array([]),settings:this.fb.group({showDownloadCV:[!0],showContactForm:[!0]})}),this.addSocialLink(),this.addExperience(),this.addEducation(),this.addSkill(),this.addProject()}get socialLinks(){return this.portfolioForm.get("socialLinks")}get experience(){return this.portfolioForm.get("experience")}get education(){return this.portfolioForm.get("education")}get skills(){return this.portfolioForm.get("skills")}get projects(){return this.portfolioForm.get("projects")}get certifications(){return this.portfolioForm.get("certifications")}addSocialLink(){this.socialLinks.push(this.fb.group({platform:["LinkedIn"],url:[""],icon:["fab fa-linkedin"]}))}removeSocialLink(o){this.socialLinks.length>1&&this.socialLinks.removeAt(o)}addExperience(){this.experience.push(this.fb.group({company:["",v.required],position:["",v.required],startDate:["",v.required],endDate:[""],current:[!1],description:["",v.required]}))}removeExperience(o){this.experience.length>1&&this.experience.removeAt(o)}addEducation(){this.education.push(this.fb.group({institution:["",v.required],degree:["",v.required],field:["",v.required],startYear:["",v.required],endYear:["",v.required]}))}removeEducation(o){this.education.length>1&&this.education.removeAt(o)}addSkill(){this.skills.push(this.fb.group({name:["",v.required],level:[70,[v.required,v.min(0),v.max(100)]],category:["Programming Languages",v.required]}))}removeSkill(o){this.skills.length>1&&this.skills.removeAt(o)}addProject(){this.projects.push(this.fb.group({title:["",v.required],description:["",v.required],technologies:[""],imageUrl:[""],liveUrl:[""],githubUrl:[""]}))}removeProject(o){this.projects.length>1&&this.projects.removeAt(o)}addCertification(){this.certifications.push(this.fb.group({name:["",v.required],issuer:["",v.required],date:["",v.required]}))}removeCertification(o){this.certifications.length>1&&this.certifications.removeAt(o)}onPlatformChange(o,t){let r=t.target.value,a=this.socialPlatforms.find(x=>x.name===r);a&&this.socialLinks.at(o).patchValue({icon:a.icon})}getSocialPlaceholder(o){if(!o)return"";let t=this.socialPlatforms.find(r=>r.name===o);return t?t.placeholder:""}isCurrentlyWorking(o){return this.experience.at(o).get("current")?.value===!0}getSkillLevel(o){return this.skills.at(o).get("level")?.value||70}isThemeSelected(o){return this.selectedTheme?.id===o}nextStep(){this.currentStep<this.totalSteps&&(this.currentStep++,this.scrollToTop())}previousStep(){this.currentStep>1&&(this.currentStep--,this.scrollToTop())}goToStep(o){o>=1&&o<=this.totalSteps&&(this.currentStep=o,this.scrollToTop())}scrollToTop(){$(this.platformId)&&window.scrollTo({top:0,behavior:"smooth"})}selectTheme(o){this.selectedTheme=o}validateForm(){let o=[],t=[],r=this.portfolioForm.get("personal");r?.get("fullName")?.invalid&&t.push("Full Name is required (minimum 2 characters)"),r?.get("profession")?.invalid&&t.push("Profession is required"),r?.get("location")?.invalid&&t.push("Location is required"),r?.get("email")?.invalid&&t.push("Valid Email is required"),r?.get("tagline")?.invalid&&t.push("Tagline is required (maximum 100 characters)"),r?.get("about")?.invalid&&t.push("About Me is required (minimum 50 characters)"),t.length>0&&o.push({step:1,stepName:"Personal Information",errors:t}),r?.get("profileImage")?.invalid&&t.push("Profile Image URL is required"),r?.get("bannerImage")?.invalid&&t.push("Banner Background Image URL is required");let a=[];this.experience.controls.forEach((b,h)=>{b.get("company")?.invalid&&a.push(`Experience #${h+1}: Company name is required`),b.get("position")?.invalid&&a.push(`Experience #${h+1}: Position is required`),b.get("startDate")?.invalid&&a.push(`Experience #${h+1}: Start date is required`),b.get("description")?.invalid&&a.push(`Experience #${h+1}: Description is required`)}),a.length>0&&o.push({step:3,stepName:"Experience",errors:a});let x=[];this.education.controls.forEach((b,h)=>{b.get("institution")?.invalid&&x.push(`Education #${h+1}: Institution is required`),b.get("degree")?.invalid&&x.push(`Education #${h+1}: Degree is required`),b.get("field")?.invalid&&x.push(`Education #${h+1}: Field of study is required`),b.get("startYear")?.invalid&&x.push(`Education #${h+1}: Start year is required`),b.get("endYear")?.invalid&&x.push(`Education #${h+1}: End year is required`)}),x.length>0&&o.push({step:3,stepName:"Education",errors:x});let k=[];this.skills.controls.forEach((b,h)=>{b.get("name")?.invalid&&k.push(`Skill #${h+1}: Skill name is required`)}),k.length>0&&o.push({step:4,stepName:"Skills",errors:k});let E=[];this.projects.controls.forEach((b,h)=>{b.get("title")?.invalid&&E.push(`Project #${h+1}: Project title is required`),b.get("description")?.invalid&&E.push(`Project #${h+1}: Project description is required`)}),E.length>0&&o.push({step:4,stepName:"Projects",errors:E});let P=[];return this.certifications.controls.forEach((b,h)=>{b.get("name")?.invalid&&P.push(`Certification #${h+1}: Certification name is required`),b.get("issuer")?.invalid&&P.push(`Certification #${h+1}: Issuing organization is required`),b.get("date")?.invalid&&P.push(`Certification #${h+1}: Date is required`)}),P.length>0&&o.push({step:5,stepName:"Certifications",errors:P}),this.selectedTheme||o.push({step:6,stepName:"Theme Selection",errors:["Please select a theme"]}),o}generatePortfolio(){if(this.validationErrors=this.validateForm(),this.validationErrors.length>0){this.showValidationModal=!0;return}if(!this.selectedTheme){this.validationErrors=[{step:6,stepName:"Theme Selection",errors:["Please select a theme first!"]}],this.showValidationModal=!0;return}this.isGenerating=!0,setTimeout(()=>{let o=this.portfolioForm.value;this.selectedTheme&&(this.generatedHtml=this.generateHTML(o,this.selectedTheme),this.showPreview=!0),this.isGenerating=!1,this.scrollToTop()},1500)}closeValidationModal(){this.showValidationModal=!1}goToErrorStep(o){this.closeValidationModal(),this.goToStep(o)}generateHTML(o,t){let r=`${o.personal.fullName} - ${o.personal.profession} Portfolio`,a=o.personal.tagline;return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- SEO Meta Tags -->
    <title>${r}</title>
    <meta name="description" content="${a}">
    <meta name="author" content="${o.personal.fullName}">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${r}">
    <meta property="og:description" content="${a}">
    <meta property="og:image" content="${o.personal.profileImage}">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <style>
        ${this.generateCompleteCSS(t)}
    </style>
</head>
<body>
    ${this.generateCompleteBodyHTML(o,t)}
    
    <script>
        ${this.generateCompleteJavaScript()}
    <\/script>
</body>
</html>`}generateCompleteCSS(o){return`
/* ==================== CSS VARIABLES ==================== */
:root {
    --primary-color: ${o.primaryColor};
    --secondary-color: ${o.secondaryColor};
    --accent-color: ${o.accentColor};
    --gradient: ${o.gradient};
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --text-tertiary: #64748b;
    --bg-primary: #f8fafc;
    --bg-secondary: #f1f5f9;
    --bg-card: #ffffff;
    --border-color: rgba(8, 145, 178, 0.15);
    --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.06);
    --shadow-md: 0 4px 20px rgba(15, 23, 42, 0.08);
    --shadow-lg: 0 10px 40px rgba(15, 23, 42, 0.1);
}

/* ==================== RESET & BASE ==================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    background: var(--bg-primary);
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    max-width: 100%;
    height: auto;
}

/* ==================== NAVIGATION BAR ==================== */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.5rem 5%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: var(--shadow-md);
    z-index: 1000;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    padding: 1rem 5%;
    box-shadow: var(--shadow-lg);
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 800;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
    align-items: center;
}

.nav-links a {
    font-weight: 600;
    font-size: 1rem;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--gradient);
    transition: width 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-color);
}

.nav-links a:hover::after {
    width: 100%;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: all 0.3s ease;
}

/* ==================== HERO SECTION ==================== */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 5% 80px;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
        rgba(8, 145, 178, 0.95) 0%, 
        rgba(59, 130, 246, 0.9) 50%, 
        rgba(99, 102, 241, 0.85) 100%);
    z-index: 1;
}

.hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
        radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    z-index: 2;
    animation: float 20s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
}

.hero-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 3;
}

.hero-content {
    color: white;
}

.hero-content .greeting {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    opacity: 0.95;
    animation: slideInLeft 0.8s ease;
}

.hero-content h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 1.5rem;
    line-height: 1.1;
    animation: slideInLeft 1s ease 0.2s both;
}

.hero-content .profession {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-bottom: 1.5rem;
    opacity: 0.9;
    animation: slideInLeft 1.2s ease 0.4s both;
}

.hero-content .tagline {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.85;
    line-height: 1.7;
    animation: slideInLeft 1.4s ease 0.6s both;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    animation: slideInLeft 1.6s ease 0.8s both;
}

.btn {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
}

.btn-primary {
    background: white;
    color: var(--primary-color);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid white;
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: white;
    color: var(--primary-color);
    transform: translateY(-5px);
}

.hero-image-wrapper {
    position: relative;
    animation: slideInRight 1s ease 0.5s both;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-image {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.hero-image::before {
    content: '';
    position: absolute;
    inset: -20px;
    background: linear-gradient(45deg, 
        rgba(255, 255, 255, 0.3) 0%, 
        rgba(255, 255, 255, 0.1) 100%);
    border-radius: 50%;
    filter: blur(30px);
    z-index: -1;
    animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.8; }
}

.hero-image img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 10px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-links a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.3rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: white;
    color: var(--primary-color);
    transform: translateY(-5px);
}

/* ==================== SECTION COMMON ==================== */
.section {
    padding: 100px 5%;
    position: relative;
}

.section-title {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
}

.section-title h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--gradient);
    border-radius: 2px;
}

.section-title p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 1.5rem auto 0;
}

/* ==================== ABOUT SECTION ==================== */
.about-container {
    max-width: 1200px;
    margin: 0 auto;
    background: var(--bg-card);
    padding: 4rem;
    border-radius: 30px;
    box-shadow: var(--shadow-lg);
    border: 2px solid var(--border-color);
}

.about-content {
    font-size: 1.1rem;
    line-height: 1.9;
    color: var(--text-secondary);
    margin-bottom: 3rem;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.stat-card {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, 
        rgba(8, 145, 178, 0.05) 0%, 
        rgba(59, 130, 246, 0.05) 100%);
    border-radius: 20px;
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
}

.stat-card h3 {
    font-size: 3rem;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.stat-card p {
    color: var(--text-secondary);
    font-weight: 600;
}

/* ==================== SKILLS SECTION ==================== */
.skills-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 3rem;
}

.skill-category {
    background: var(--bg-card);
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: var(--shadow-md);
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
}

.skill-category:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.skill-category h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.skill-item {
    margin-bottom: 1.5rem;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.skill-name {
    font-weight: 600;
    color: var(--text-primary);
}

.skill-level {
    font-weight: 700;
    color: var(--primary-color);
}

.skill-bar {
    height: 12px;
    background: var(--bg-secondary);
    border-radius: 10px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: var(--gradient);
    border-radius: 10px;
    transition: width 1.5s ease;
}

/* ==================== EXPERIENCE SECTION ==================== */
.experience-container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
}

.timeline {
    position: relative;
    padding-left: 50px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    background: var(--bg-card);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: var(--shadow-md);
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
}

.timeline-item:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -38px;
    top: 30px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 4px solid var(--bg-card);
    box-shadow: 0 0 0 3px var(--primary-color);
}

.timeline-header h3 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.timeline-header .company {
    font-size: 1.1rem;
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 0.3rem;
}

.timeline-header .date {
    color: var(--text-tertiary);
    font-size: 0.95rem;
}

.timeline-content {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-top: 1rem;
}

/* ==================== PROJECTS SECTION ==================== */
.projects-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
}

.project-card {
    background: var(--bg-card);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
    position: relative;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.project-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    background: linear-gradient(135deg, 
        rgba(8, 145, 178, 0.2) 0%, 
        rgba(59, 130, 246, 0.2) 100%);
}

.project-featured {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--gradient);
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
}

.project-content {
    padding: 2rem;
}

.project-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.project-content p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tech-tag {
    padding: 0.4rem 1rem;
    background: rgba(8, 145, 178, 0.1);
    color: var(--primary-color);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-links a {
    flex: 1;
    padding: 0.8rem;
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-demo {
    background: var(--gradient);
    color: white;
}

.btn-code {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.project-links a:hover {
    transform: translateY(-3px);
}

/* ==================== EDUCATION SECTION ==================== */
.education-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.education-card {
    background: var(--bg-card);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: var(--shadow-md);
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
}

.education-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.education-card h3 {
    font-size: 1.3rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.education-card h4 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.education-card .year {
    color: var(--text-tertiary);
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.education-card p {
    color: var(--text-secondary);
    line-height: 1.7;
}

/* ==================== CERTIFICATIONS SECTION ==================== */
.certifications-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.cert-card {
    background: var(--bg-card);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: var(--shadow-md);
    border: 2px solid var(--border-color);
    text-align: center;
    transition: all 0.3s ease;
}

.cert-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.cert-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: var(--gradient);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
}

.cert-card h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.cert-card .issuer {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.cert-card .date {
    color: var(--text-tertiary);
    font-size: 0.9rem;
}

/* ==================== CONTACT SECTION ==================== */
.contact-container {
    max-width: 800px;
    margin: 0 auto;
    background: var(--bg-card);
    padding: 4rem;
    border-radius: 30px;
    box-shadow: var(--shadow-lg);
    border: 2px solid var(--border-color);
    text-align: center;
}

.contact-container h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.contact-container p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.8;
}

.contact-info {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.contact-item i {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.3rem;
}

.contact-item a {
    color: var(--text-secondary);
    font-weight: 600;
    transition: all 0.3s ease;
}

.contact-item a:hover {
    color: var(--primary-color);
}

/* ==================== FOOTER ==================== */
.footer {
    background: linear-gradient(135deg, 
        rgba(8, 145, 178, 0.95) 0%, 
        rgba(59, 130, 246, 0.9) 50%, 
        rgba(99, 102, 241, 0.85) 100%);
    color: white;
    padding: 3rem 5%;
    text-align: center;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.footer-social a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.3rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.footer-social a:hover {
    background: white;
    color: var(--primary-color);
    transform: translateY(-5px);
}

.footer p {
    opacity: 0.9;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-image {
        max-width: 400px;
    }
    
    .hero-buttons {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .navbar {
        padding: 1rem 5%;
    }
    
    .nav-links {
        display: none;
    }
    
    .menu-toggle {
        display: flex;
    }
    
    .hero {
        padding: 100px 5% 60px;
    }
    
    .section {
        padding: 60px 5%;
    }
    
    .about-container,
    .contact-container {
        padding: 2rem;
    }
    
    .projects-grid,
    .education-grid,
    .certifications-grid {
        grid-template-columns: 1fr;
    }
    
    .timeline {
        padding-left: 30px;
    }
    
    .timeline::before {
        left: 10px;
    }
    
    .timeline-item::before {
        left: -28px;
    }
}

@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 2rem;
    }
    
    .hero-content .profession {
        font-size: 1.3rem;
    }
    
    .section-title h2 {
        font-size: 1.8rem;
    }
    
    .btn {
        padding: 0.8rem 2rem;
        font-size: 0.9rem;
    }
}

/* ==================== SCROLL ANIMATIONS ==================== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease;
}

/* ==================== PRINT STYLES ==================== */
@media print {
    .navbar,
    .footer {
        display: none;
    }
    
    .section {
        page-break-inside: avoid;
    }
}
`}generateCompleteBodyHTML(o,t){let r=o.personal,a=o.socialLinks.filter(p=>p.url),x=o.experience,k=o.education,E=o.skills,P=o.projects,b=o.certifications,h={};return E.forEach(p=>{let C=p.category||"Other";h[C]||(h[C]=[]),h[C].push(p)}),`
<!-- Navigation -->
<nav class="navbar" id="navbar">
    <div class="nav-container">
        <div class="logo">${r.fullName.split(" ")[0]}</div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            ${b.length>0?'<li><a href="#certifications">Certifications</a></li>':""}
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="menu-toggle" id="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>

<!-- Hero Section -->
<section class="hero" id="home" style="background-image: url('${r.bannerImage}');">
    <div class="hero-container">
        <div class="hero-content">
            <p class="greeting">Hello! I'm</p>
            <h1>${r.fullName}</h1>
            <p class="profession">${r.profession}</p>
            <p class="tagline">${r.tagline}</p>
            <div class="hero-buttons">
                <a href="#contact" class="btn btn-primary">
                    <i class="fas fa-envelope"></i> Get In Touch
                </a>
                ${r.resumeUrl?`<a href="${r.resumeUrl}" class="btn btn-secondary" download>
                    <i class="fas fa-download"></i> Download CV
                </a>`:""}
            </div>
            ${a.length>0?`
            <div class="social-links">
                ${a.map(p=>`
                    <a href="${p.url}" target="_blank" rel="noopener noreferrer" title="${p.platform}">
                        <i class="${p.icon}"></i>
                    </a>
                `).join("")}
            </div>
            `:""}
        </div>
        <div class="hero-image-wrapper">
            <div class="hero-image">
                <img src="${r.profileImage}" alt="${r.fullName}">
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="section" id="about">
    <div class="section-title">
        <h2>About Me</h2>
        <p>Get to know me better</p>
    </div>
    <div class="about-container">
        <div class="about-content">
            <p>${r.about}</p>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <h3>${r.yearsOfExperience}+</h3>
                <p>Years Experience</p>
            </div>
            <div class="stat-card">
                <h3>${P.length}+</h3>
                <p>Projects Completed</p>
            </div>
            <div class="stat-card">
                <h3>${E.length}+</h3>
                <p>Skills Mastered</p>
            </div>
            <div class="stat-card">
                <h3>${b.length}+</h3>
                <p>Certifications</p>
            </div>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section class="section" id="skills" style="background: var(--bg-secondary);">
    <div class="section-title">
        <h2>My Skills</h2>
        <p>Technologies and tools I work with</p>
    </div>
    <div class="skills-container">
        ${Object.keys(h).map(p=>`
            <div class="skill-category">
                <h3>${p}</h3>
                ${h[p].map(C=>`
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${C.name}</span>
                            <span class="skill-level">${C.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 0%" data-width="${C.level}%"></div>
                        </div>
                    </div>
                `).join("")}
            </div>
        `).join("")}
    </div>
</section>

<!-- Experience Section -->
${x.length>0?`
<section class="section" id="experience">
    <div class="section-title">
        <h2>Work Experience</h2>
        <p>My professional journey</p>
    </div>
    <div class="experience-container">
        <div class="timeline">
            ${x.map(p=>`
                <div class="timeline-item">
                    <div class="timeline-header">
                        <h3>${p.position}</h3>
                        <p class="company">${p.company}</p>
                        <p class="date">${p.startDate} - ${p.current?"Present":p.endDate}</p>
                    </div>
                    <div class="timeline-content">
                        <p>${p.description}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    </div>
</section>
`:""}

<!-- Projects Section -->
${P.length>0?`
<section class="section" id="projects" style="background: var(--bg-secondary);">
    <div class="section-title">
        <h2>Featured Projects</h2>
        <p>Some of my best work</p>
    </div>
    <div class="projects-grid">
        ${P.map(p=>{let C=p.technologies?p.technologies.split(",").map(j=>j.trim()):[];return`
            <div class="project-card">
                ${p.imageUrl?`<img src="${p.imageUrl}" alt="${p.title}" class="project-image">`:'<div class="project-image"></div>'}
                <div class="project-content">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    ${C.length>0?`
                    <div class="project-tech">
                        ${C.map(j=>`<span class="tech-tag">${j}</span>`).join("")}
                    </div>
                    `:""}
                    <div class="project-links">
                        ${p.liveUrl?`<a href="${p.liveUrl}" target="_blank" class="btn-demo">Live Demo</a>`:""}
                        ${p.githubUrl?`<a href="${p.githubUrl}" target="_blank" class="btn-code">View Code</a>`:""}
                    </div>
                </div>
            </div>
          `}).join("")}
    </div>
</section>
`:""}

<!-- Education Section -->
${k.length>0?`
<section class="section" id="education">
    <div class="section-title">
        <h2>Education</h2>
        <p>My academic background</p>
    </div>
    <div class="education-grid">
        ${k.map(p=>`
            <div class="education-card">
                <h3>${p.institution}</h3>
                <h4>${p.degree} in ${p.field}</h4>
                <p class="year">${p.startYear} - ${p.endYear}</p>
            </div>
        `).join("")}
    </div>
</section>
`:""}

<!-- Certifications Section -->
${b.length>0?`
<section class="section" id="certifications" style="background: var(--bg-secondary);">
    <div class="section-title">
        <h2>Certifications</h2>
        <p>Professional credentials</p>
    </div>
    <div class="certifications-grid">
        ${b.map(p=>`
            <div class="cert-card">
                <div class="cert-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3>${p.name}</h3>
                <p class="issuer">${p.issuer}</p>
                <p class="date">${p.date}</p>
            </div>
        `).join("")}
    </div>
</section>
`:""}

<!-- Contact Section -->
<section class="section" id="contact">
    <div class="section-title">
        <h2>Get In Touch</h2>
        <p>Let's work together</p>
    </div>
    <div class="contact-container">
        <h3>Contact Me</h3>
        <p>I'm currently available for freelance work and full-time opportunities. If you have a project in mind, let's connect!</p>
        <div class="contact-info">
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:${r.email}">${r.email}</a>
            </div>
            ${r.phone?`
            <div class="contact-item">
                <i class="fas fa-phone"></i>
                <a href="tel:${r.phone}">${r.phone}</a>
            </div>
            `:""}
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${r.location}</span>
            </div>
        </div>
        ${a.length>0?`
        <div class="social-links" style="justify-content: center; margin-top: 2rem;">
            ${a.map(p=>`
                <a href="${p.url}" target="_blank" rel="noopener noreferrer" title="${p.platform}">
                    <i class="${p.icon}"></i>
                </a>
            `).join("")}
        </div>
        `:""}
    </div>
</section>

<!-- Footer -->
<footer class="footer">
    <div class="footer-content">
        ${a.length>0?`
        <div class="footer-social">
            ${a.map(p=>`
                <a href="${p.url}" target="_blank" rel="noopener noreferrer" title="${p.platform}">
                    <i class="${p.icon}"></i>
                </a>
            `).join("")}
        </div>
        `:""}
        <p>&copy; ${new Date().getFullYear()} ${r.fullName}. All rights reserved.</p>
        <p style="margin-top: 0.5rem; opacity: 0.8;">Zetsapp Portfolio Generator</p>
    </div>
</footer>
`}generateCompleteJavaScript(){return`
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
    });
}

// Skill bars animation on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Add fade-in animation on scroll
const fadeElements = document.querySelectorAll('.section');
const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));

console.log('Portfolio loaded successfully!');
`}downloadPortfolio(){let o=new Blob([this.generatedHtml],{type:"text/html"}),t=URL.createObjectURL(o),r=document.createElement("a");r.href=t,r.download="portfolio.html",r.click(),URL.revokeObjectURL(t)}copyToClipboard(){$(this.platformId)&&navigator.clipboard.writeText(this.generatedHtml).then(()=>{alert("HTML code copied to clipboard!")})}backToEdit(){this.showPreview=!1,this.currentStep=1}setupAdvancedSEO(){let o=new Date().getFullYear();this.title.setTitle(`Free Portfolio Generator ${o} | Create Professional Portfolio Website - ZetsApp Tools`),this.meta.updateTag({name:"description",content:"Create stunning professional portfolio websites instantly with our free AI-powered portfolio generator."})}static \u0275fac=function(t){return new(t||l)(O(ce),O(ue),O(R),O(B),O(A),O(L))};static \u0275cmp=z({type:l,selectors:[["app-portfolio-generator"]],decls:7,vars:4,consts:[[1,"portfolio-generator-container"],[1,"container"],["class","page-header",4,"ngIf"],["class","preview-mode",4,"ngIf"],["class","form-mode",4,"ngIf"],["class","validation-modal-overlay",3,"click",4,"ngIf"],[1,"page-header"],[1,"breadcrumb"],["routerLink","/tools"],[1,"separator"],[1,"page-title"],[1,"page-description"],[1,"features-pills"],[1,"pill"],[1,"preview-mode"],[1,"preview-header"],[1,"btn-back",3,"click"],[1,"fas","fa-arrow-left"],[1,"preview-actions"],[1,"btn-action","btn-copy",3,"click"],[1,"fas","fa-copy"],[1,"btn-action","btn-download",3,"click"],[1,"fas","fa-download"],[1,"preview-container"],[1,"portfolio-preview",3,"srcdoc"],[1,"code-view"],[1,"code-header"],[1,"btn-copy-code",3,"click"],[1,"code-block"],[1,"form-mode"],[1,"progress-steps"],[1,"step",3,"click"],[1,"step-number"],[1,"step-label"],[1,"step-line"],[1,"portfolio-form",3,"formGroup"],["class","form-step",4,"ngIf"],[1,"form-step"],[1,"step-header"],["formGroupName","personal",1,"form-content"],[1,"form-grid"],[1,"form-group"],["for","fullName"],["type","text","id","fullName","formControlName","fullName","placeholder","John Doe",1,"form-control"],["for","profession"],["type","text","id","profession","formControlName","profession","placeholder","Full Stack Developer",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email","placeholder","john@example.com",1,"form-control"],["for","phone"],["type","tel","id","phone","formControlName","phone","placeholder","+1 (555) 123-4567",1,"form-control"],[1,"form-group","full-width"],["for","bannerImage"],["title","This will be the background of your portfolio hero section",1,"info-tooltip"],["type","url","id","bannerImage","formControlName","bannerImage","placeholder","https://example.com/banner-bg.jpg",1,"form-control"],[1,"hint"],["for","profileImage"],["title","Your professional photo",1,"info-tooltip"],["type","url","id","profileImage","formControlName","profileImage","placeholder","https://example.com/profile.jpg",1,"form-control"],["for","resumeUrl"],["title","Link to your resume PDF",1,"info-tooltip"],["type","url","id","resumeUrl","formControlName","resumeUrl","placeholder","https://example.com/resume.pdf",1,"form-control"],["for","location"],["type","text","id","location","formControlName","location","placeholder","San Francisco, CA",1,"form-control"],["for","yearsOfExperience"],["type","number","id","yearsOfExperience","formControlName","yearsOfExperience","placeholder","5","min","0",1,"form-control"],["type","url","id","profileImage","formControlName","profileImage","placeholder","https://example.com/image.jpg",1,"form-control"],["for","tagline"],["type","text","id","tagline","formControlName","tagline","placeholder","Building amazing web experiences","maxlength","100",1,"form-control"],["for","about"],["id","about","formControlName","about","placeholder","Tell us about yourself...","rows","6",1,"form-control"],[1,"form-actions"],["type","button",1,"btn","btn-next",3,"click"],[1,"fas","fa-arrow-right"],[1,"form-content"],["formArrayName","socialLinks"],["class","social-link-item",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-add",3,"click"],[1,"fas","fa-plus"],["type","button",1,"btn","btn-prev",3,"click"],[1,"social-link-item",3,"formGroupName"],[1,"social-grid"],["formControlName","platform",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","flex-grow"],["type","url","formControlName","url",1,"form-control",3,"placeholder"],["type","button","class","btn-remove",3,"click",4,"ngIf"],[3,"value"],["type","button",1,"btn-remove",3,"click"],[1,"fas","fa-trash"],[1,"subsection"],["formArrayName","experience"],["class","experience-item card",3,"formGroupName",4,"ngFor","ngForOf"],["formArrayName","education"],["class","education-item card",3,"formGroupName",4,"ngFor","ngForOf"],[1,"experience-item","card",3,"formGroupName"],[1,"card-header"],["type","button","class","btn-remove-card",3,"click",4,"ngIf"],["type","text","formControlName","company","placeholder","Google",1,"form-control"],["type","text","formControlName","position","placeholder","Senior Developer",1,"form-control"],["type","month","formControlName","startDate",1,"form-control"],["type","month","formControlName","endDate",1,"form-control",3,"disabled"],[1,"form-group","checkbox-group"],[1,"checkbox-label"],["type","checkbox","formControlName","current"],["formControlName","description","placeholder","Describe your role...","rows","4",1,"form-control"],["type","button",1,"btn-remove-card",3,"click"],[1,"fas","fa-times"],[1,"education-item","card",3,"formGroupName"],["type","text","formControlName","institution","placeholder","MIT",1,"form-control"],["type","text","formControlName","degree","placeholder","Bachelor of Science",1,"form-control"],["type","text","formControlName","field","placeholder","Computer Science",1,"form-control"],["type","number","formControlName","startYear","placeholder","2015",1,"form-control"],["type","number","formControlName","endYear","placeholder","2019",1,"form-control"],["formArrayName","skills"],["class","skill-item",3,"formGroupName",4,"ngFor","ngForOf"],["formArrayName","projects"],["class","project-item card",3,"formGroupName",4,"ngFor","ngForOf"],[1,"skill-item",3,"formGroupName"],[1,"skill-grid"],["type","text","formControlName","name","placeholder","React.js",1,"form-control"],["formControlName","category",1,"form-control"],["type","range","formControlName","level","min","0","max","100",1,"range-slider"],[1,"project-item","card",3,"formGroupName"],["type","text","formControlName","title","placeholder","E-commerce Platform",1,"form-control"],["type","url","formControlName","imageUrl","placeholder","https://example.com/project.jpg",1,"form-control"],["formControlName","description","placeholder","Describe your project...","rows","4",1,"form-control"],["type","text","formControlName","technologies","placeholder","React, Node.js, MongoDB",1,"form-control"],["type","url","formControlName","liveUrl","placeholder","https://project.com",1,"form-control"],["type","url","formControlName","githubUrl","placeholder","https://github.com/user/project",1,"form-control"],["formArrayName","certifications"],["class","certification-item card",3,"formGroupName",4,"ngFor","ngForOf"],[1,"certification-item","card",3,"formGroupName"],["type","text","formControlName","name","placeholder","AWS Certified Developer",1,"form-control"],["type","text","formControlName","issuer","placeholder","Amazon Web Services",1,"form-control"],["type","month","formControlName","date",1,"form-control"],[1,"themes-grid"],["class","theme-card",3,"selected","click",4,"ngFor","ngForOf"],[1,"settings-section"],["formGroupName","settings",1,"settings-grid"],["type","checkbox","formControlName","showDownloadCV"],["type","checkbox","formControlName","showContactForm"],["type","button",1,"btn","btn-generate",3,"click","disabled"],[4,"ngIf"],[1,"theme-card",3,"click"],[1,"theme-preview"],["class","theme-badge",4,"ngIf"],[1,"theme-info"],[1,"theme-colors"],[1,"color-dot"],[1,"theme-badge"],[1,"fas","fa-check"],[1,"fas","fa-magic"],[1,"fas","fa-spinner","fa-spin"],[1,"validation-modal-overlay",3,"click"],[1,"validation-modal",3,"click"],[1,"validation-header"],[1,"fas","fa-exclamation-triangle"],[1,"close-btn",3,"click"],[1,"validation-body"],[1,"validation-intro"],["class","error-group",4,"ngFor","ngForOf"],[1,"validation-footer"],[1,"btn","btn-close-modal",3,"click"],[1,"error-group"],[1,"error-step",3,"click"],[1,"error-step-header"],[1,"error-step-number"],[1,"error-step-name"],[1,"error-list"],["class","error-item",4,"ngFor","ngForOf"],[1,"error-item"],[1,"fas","fa-times-circle"]],template:function(t,r){t&1&&(i(0,"div",0),s(1,"app-grid-background"),i(2,"div",1),_(3,he,21,0,"header",2)(4,be,24,2,"div",3)(5,Ue,44,31,"div",4),e()(),_(6,He,15,1,"div",5)),t&2&&(d(3),m("ngIf",!r.showPreview),d(),m("ngIf",r.showPreview),d(),m("ngIf",!r.showPreview),d(),m("ngIf",r.showValidationModal))},dependencies:[q,Y,Z,re,ae,W,K,Q,H,oe,X,J,se,le,ee,ne,te,ie,me,fe],styles:['.portfolio-generator-container[_ngcontent-%COMP%]{position:relative;min-height:100vh;background:var(--bg-primary);padding:120px 20px 80px;overflow-x:hidden}.portfolio-generator-container[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:50%;transform:translate(-50%);width:800px;height:800px;background:radial-gradient(circle,var(--primary-glow) 0%,transparent 70%);opacity:.3;animation:_ngcontent-%COMP%_float 8s ease-in-out infinite;pointer-events:none}@keyframes _ngcontent-%COMP%_float{0%,to{transform:translate(-50%) translateY(0)}50%{transform:translate(-50%) translateY(-30px)}}.container[_ngcontent-%COMP%]{max-width:1400px;margin:0 auto;position:relative;z-index:1}.page-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:48px;padding:40px 20px;background:var(--bg-card);backdrop-filter:blur(20px);border-radius:24px;border:2px solid var(--border-color);box-shadow:var(--shadow-card)}.breadcrumb[_ngcontent-%COMP%]{font-size:14px;color:var(--text-tertiary);margin-bottom:16px;font-weight:600}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--primary-color);text-decoration:none;transition:all .3s ease}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--secondary-color)}.separator[_ngcontent-%COMP%]{margin:0 10px;color:var(--accent-color)}.page-title[_ngcontent-%COMP%]{font-size:clamp(32px,6vw,52px);font-weight:800;margin:0 0 20px;background:var(--primary-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.page-description[_ngcontent-%COMP%]{font-size:clamp(16px,2.5vw,20px);color:var(--text-secondary);margin-bottom:24px}.features-pills[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}.pill[_ngcontent-%COMP%]{padding:8px 20px;background:var(--bg-glass);border:2px solid var(--border-color);border-radius:50px;font-size:13px;font-weight:700;color:var(--primary-color);backdrop-filter:blur(10px);transition:all .3s ease}.pill[_ngcontent-%COMP%]:hover{background:var(--primary-gradient);color:#fff;border-color:transparent;transform:translateY(-2px);box-shadow:var(--shadow-md)}.portfolio-form[_ngcontent-%COMP%]{background:var(--bg-card);border-radius:24px;padding:48px;box-shadow:var(--shadow-card);border:2px solid var(--border-color)}.form-control[_ngcontent-%COMP%]{padding:14px 18px;border:2px solid var(--border-color);border-radius:12px;font-size:15px;background:var(--bg-card);color:var(--text-primary);transition:all .3s ease}.form-control[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--primary-color);box-shadow:0 0 0 4px var(--primary-glow)}.btn-next[_ngcontent-%COMP%], .btn-generate[_ngcontent-%COMP%]{background:var(--primary-gradient);color:#fff;box-shadow:0 8px 20px var(--primary-shadow)}.btn-next[_ngcontent-%COMP%]:hover, .btn-generate[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 12px 32px var(--primary-shadow-strong)}.btn-prev[_ngcontent-%COMP%]{background:transparent;color:var(--primary-color);border:2px solid var(--primary-color)}.btn-prev[_ngcontent-%COMP%]:hover{background:var(--primary-color);color:#fff}.validation-modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#0009;backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px;animation:_ngcontent-%COMP%_fadeIn .3s ease}.validation-modal[_ngcontent-%COMP%]{background:var(--bg-card);border-radius:24px;max-width:700px;width:100%;max-height:85vh;display:flex;flex-direction:column;box-shadow:0 20px 60px #0006;border:3px solid var(--border-color-strong);animation:_ngcontent-%COMP%_slideUp .4s ease}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(40px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}.validation-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:32px;border-bottom:2px solid var(--border-color);background:linear-gradient(135deg,#ef44441a,#ef44440d)}.validation-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:800;color:var(--error-color);display:flex;align-items:center;gap:12px}.validation-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:28px}.close-btn[_ngcontent-%COMP%]{width:44px;height:44px;background:#ef44441a;border:2px solid var(--error-color);border-radius:12px;font-size:28px;font-weight:700;color:var(--error-color);cursor:pointer;transition:all .3s ease;display:flex;align-items:center;justify-content:center}.close-btn[_ngcontent-%COMP%]:hover{background:var(--error-color);color:#fff;transform:rotate(90deg) scale(1.1)}.validation-body[_ngcontent-%COMP%]{padding:32px;overflow-y:auto;flex:1}.validation-intro[_ngcontent-%COMP%]{font-size:16px;color:var(--text-secondary);margin-bottom:24px;padding:16px;background:#ef44440d;border-left:4px solid var(--error-color);border-radius:8px}.error-group[_ngcontent-%COMP%]{margin-bottom:24px}.error-step[_ngcontent-%COMP%]{background:var(--bg-glass);border:2px solid var(--border-color);border-radius:16px;padding:20px;cursor:pointer;transition:all .3s ease}.error-step[_ngcontent-%COMP%]:hover{border-color:var(--primary-color);box-shadow:var(--shadow-md);transform:translate(8px)}.error-step-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:16px;font-weight:700;color:var(--text-primary)}.error-step-number[_ngcontent-%COMP%]{background:var(--error-color);color:#fff;padding:6px 14px;border-radius:20px;font-size:13px}.error-step-name[_ngcontent-%COMP%]{flex:1;font-size:16px}.error-step-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--primary-color)}.error-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.error-item[_ngcontent-%COMP%]{display:flex;align-items:start;gap:12px;padding:10px 0;color:var(--text-secondary);font-size:14px}.error-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--error-color);flex-shrink:0;margin-top:2px}.validation-footer[_ngcontent-%COMP%]{padding:24px 32px;border-top:2px solid var(--border-color);display:flex;justify-content:flex-end}.btn-close-modal[_ngcontent-%COMP%]{padding:12px 32px;background:var(--primary-gradient);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .3s ease}.btn-close-modal[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 20px var(--primary-shadow)}@media (max-width: 768px){.portfolio-generator-container[_ngcontent-%COMP%]{padding:100px 16px 60px}.portfolio-form[_ngcontent-%COMP%]{padding:32px 24px}.validation-modal[_ngcontent-%COMP%]{max-height:90vh}.validation-header[_ngcontent-%COMP%]{padding:20px}.validation-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.validation-body[_ngcontent-%COMP%]{padding:20px}}.progress-steps[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:48px;background:#fff;padding:32px;border-radius:20px;box-shadow:0 10px 30px #0000001a}.step[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;transition:all .3s ease;flex:1;max-width:120px}.step-number[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;background:#e2e8f0;color:#64748b;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;transition:all .3s ease}.step.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]{background:var(--primary-gradient);color:#fff;box-shadow:0 8px 20px #667eea66;transform:scale(1.1)}.step.completed[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]{background:#10b981;color:#fff}.step-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#64748b;text-align:center}.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%]{color:#6366f1}.step-line[_ngcontent-%COMP%]{height:3px;background:#e2e8f0;flex:1;margin:0 10px;position:relative;top:-20px}.portfolio-form[_ngcontent-%COMP%]{background:#fff;border-radius:24px;padding:48px;box-shadow:0 20px 60px #0000001a}.form-step[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUp .5s ease}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.step-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:40px}.step-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:800;background:var(--primary-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:12px}.step-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#64748b}.form-content[_ngcontent-%COMP%]{margin-bottom:40px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:24px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form-group.full-width[_ngcontent-%COMP%]{grid-column:1 / -1}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#1e293b;margin-bottom:8px}.form-control[_ngcontent-%COMP%]{padding:14px 18px;border:2px solid #e2e8f0;border-radius:12px;font-size:15px;font-family:inherit;transition:all .3s ease;background:#fff}.form-control[_ngcontent-%COMP%]:focus{outline:none;border-color:#6366f1;box-shadow:0 0 0 4px #6366f11a}.form-control[_ngcontent-%COMP%]::placeholder{color:#94a3b8}textarea.form-control[_ngcontent-%COMP%]{resize:vertical;font-family:inherit;line-height:1.6}.error[_ngcontent-%COMP%]{color:#ef4444;font-size:12px;margin-top:4px}.hint[_ngcontent-%COMP%]{color:#64748b;font-size:12px;margin-top:4px}.char-count[_ngcontent-%COMP%]{color:#64748b;font-size:12px;margin-top:4px;text-align:right}.checkbox-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;cursor:pointer;font-size:15px;color:#1e293b}.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px;cursor:pointer}.checkbox-group[_ngcontent-%COMP%]{justify-content:center}.range-slider[_ngcontent-%COMP%]{width:100%;height:8px;border-radius:4px;background:#e2e8f0;outline:none;-webkit-appearance:none}.range-slider[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;border-radius:50%;background:var(--primary-gradient);cursor:pointer;box-shadow:0 4px 12px #667eea66}.range-slider[_ngcontent-%COMP%]::-moz-range-thumb{width:24px;height:24px;border-radius:50%;background:var(--primary-gradient);cursor:pointer;box-shadow:0 4px 12px #667eea66;border:none}.social-link-item[_ngcontent-%COMP%]{margin-bottom:20px}.social-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:200px 1fr auto;gap:16px;align-items:end}.flex-grow[_ngcontent-%COMP%]{flex:1}.card[_ngcontent-%COMP%]{background:#f8fafc;border:2px solid #e2e8f0;border-radius:16px;padding:24px;margin-bottom:24px}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#6366f1}.btn[_ngcontent-%COMP%]{padding:14px 32px;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;gap:10px}.btn-next[_ngcontent-%COMP%], .btn-generate[_ngcontent-%COMP%]{background:var(--primary-gradient);color:#fff;box-shadow:0 8px 20px #667eea4d}.btn-next[_ngcontent-%COMP%]:hover, .btn-generate[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 12px 32px #667eea80}.btn-next[_ngcontent-%COMP%]:disabled, .btn-generate[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed;transform:none}.btn-prev[_ngcontent-%COMP%]{background:#fff;color:#6366f1;border:2px solid #6366f1}.btn-prev[_ngcontent-%COMP%]:hover{background:#6366f1;color:#fff;transform:translateY(-3px)}.btn-add[_ngcontent-%COMP%]{background:#10b981;color:#fff;padding:12px 24px;font-size:14px;box-shadow:0 4px 12px #10b9814d}.btn-add[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 8px 20px #10b98166}.btn-remove[_ngcontent-%COMP%], .btn-remove-card[_ngcontent-%COMP%]{background:#ef4444;color:#fff;width:40px;height:40px;border:none;border-radius:10px;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;justify-content:center}.btn-remove[_ngcontent-%COMP%]:hover, .btn-remove-card[_ngcontent-%COMP%]:hover{background:#dc2626;transform:scale(1.1)}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:16px;padding-top:32px;border-top:2px solid #e2e8f0}.subsection[_ngcontent-%COMP%]{margin-bottom:48px;padding-bottom:32px;border-bottom:2px solid #e2e8f0}.subsection[_ngcontent-%COMP%]:last-child{border-bottom:none;margin-bottom:0}.subsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#1e293b;margin-bottom:24px}.themes-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px;margin-bottom:48px}.theme-card[_ngcontent-%COMP%]{background:#fff;border:3px solid #e2e8f0;border-radius:20px;overflow:hidden;cursor:pointer;transition:all .3s ease}.theme-card[_ngcontent-%COMP%]:hover{transform:translateY(-8px);box-shadow:0 20px 40px #00000026}.theme-card.selected[_ngcontent-%COMP%]{border-color:#6366f1;box-shadow:0 20px 40px #6366f14d}.theme-preview[_ngcontent-%COMP%]{height:200px;position:relative;display:flex;align-items:center;justify-content:center}.theme-badge[_ngcontent-%COMP%]{background:#fff;color:#6366f1;padding:8px 20px;border-radius:50px;font-size:14px;font-weight:700;box-shadow:0 4px 12px #0003}.theme-info[_ngcontent-%COMP%]{padding:24px}.theme-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#1e293b;margin-bottom:8px}.theme-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#64748b;margin-bottom:16px}.theme-colors[_ngcontent-%COMP%]{display:flex;gap:8px}.color-dot[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px #0003}.settings-section[_ngcontent-%COMP%]{background:#f8fafc;padding:32px;border-radius:16px;border:2px solid #e2e8f0}.settings-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#1e293b;margin-bottom:20px}.settings-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.info-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,#6366f11a,#8b5cf61a);border:2px solid rgba(99,102,241,.3);border-radius:12px;padding:20px;display:flex;gap:16px;align-items:start;margin-top:24px}.info-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6366f1;font-size:24px;flex-shrink:0}.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#475569;line-height:1.6;margin:0}.preview-mode[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.preview-header[_ngcontent-%COMP%]{background:#fff;padding:24px 32px;border-radius:20px;margin-bottom:32px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 10px 30px #0000001a}.btn-back[_ngcontent-%COMP%]{background:#fff;color:#6366f1;border:2px solid #6366f1;padding:12px 24px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;gap:8px}.btn-back[_ngcontent-%COMP%]:hover{background:#6366f1;color:#fff;transform:translateY(-2px)}.preview-actions[_ngcontent-%COMP%]{display:flex;gap:16px}.btn-action[_ngcontent-%COMP%]{padding:12px 24px;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;gap:8px}.btn-copy[_ngcontent-%COMP%]{background:#10b981;color:#fff;box-shadow:0 4px 12px #10b9814d}.btn-copy[_ngcontent-%COMP%]:hover{background:#059669;transform:translateY(-2px);box-shadow:0 8px 20px #10b98166}.btn-download[_ngcontent-%COMP%]{background:var(--primary-gradient);color:#fff;box-shadow:0 4px 12px #667eea4d}.btn-download[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 20px #667eea66}.preview-container[_ngcontent-%COMP%]{background:#fff;border-radius:20px;padding:20px;margin-bottom:32px;box-shadow:0 10px 30px #0000001a}.portfolio-preview[_ngcontent-%COMP%]{width:100%;height:800px;border:none;border-radius:12px;background:#fff}.code-view[_ngcontent-%COMP%]{background:#1e293b;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px #0000004d}.code-header[_ngcontent-%COMP%]{background:#334155;padding:20px 32px;display:flex;justify-content:space-between;align-items:center}.code-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:18px;margin:0}.btn-copy-code[_ngcontent-%COMP%]{background:#10b981;color:#fff;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;gap:8px}.btn-copy-code[_ngcontent-%COMP%]:hover{background:#059669;transform:translateY(-2px)}.code-block[_ngcontent-%COMP%]{margin:0;padding:32px;overflow-x:auto;max-height:500px}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#e2e8f0;font-family:Courier New,monospace;font-size:14px;line-height:1.6;white-space:pre-wrap;word-wrap:break-word}@media (max-width: 1024px){.form-grid[_ngcontent-%COMP%], .themes-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width: 768px){.portfolio-generator-container[_ngcontent-%COMP%]{padding:80px 16px 60px}.portfolio-form[_ngcontent-%COMP%]{padding:32px 24px}.progress-steps[_ngcontent-%COMP%]{overflow-x:auto;padding:24px 16px}.step[_ngcontent-%COMP%]{min-width:80px}.step-label[_ngcontent-%COMP%]{font-size:11px}.social-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.form-actions[_ngcontent-%COMP%]{flex-direction:column}.btn[_ngcontent-%COMP%]{width:100%;justify-content:center}.preview-header[_ngcontent-%COMP%]{flex-direction:column;gap:16px}.preview-actions[_ngcontent-%COMP%]{width:100%;flex-direction:column}.btn-action[_ngcontent-%COMP%]{width:100%;justify-content:center}}@media (max-width: 480px){.page-title[_ngcontent-%COMP%]{font-size:28px}.step-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px}.portfolio-preview[_ngcontent-%COMP%]{height:600px}}']})};var We=[{path:"",component:V}],G=class l{static \u0275fac=function(t){return new(t||l)};static \u0275mod=N({type:l});static \u0275inj=I({imports:[F.forChild(We),F]})};var ve=class l{static \u0275fac=function(t){return new(t||l)};static \u0275mod=N({type:l});static \u0275inj=I({imports:[U,de,pe,G,ge]})};export{ve as PortfolioGeneratorModule};
