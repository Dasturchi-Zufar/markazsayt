/* EduCenter demo data. Browser-only storage: this is not a production database. */
(() => {
  const KEY = "educenter_demo_v1";
  const courses = [
    {id:"web",title:"Web dasturlash",category:"Dasturlash",level:"Boshlang‘ich",duration:"4 oy",lessons:48,price:850000,color:"blue",symbol:"</>",rating:"4.9",students:186,description:"Zamonaviy veb-saytlar yaratishni HTML, CSS va JavaScript asoslaridan boshlab o‘rganing.",features:["HTML semantik tuzilishi","CSS, Flexbox va Grid","JavaScript va DOM","Yakuniy portfolio loyihasi"]},
    {id:"python",title:"Python dasturlash",category:"Dasturlash",level:"Boshlang‘ich",duration:"3 oy",lessons:36,price:750000,color:"teal",symbol:"Py",rating:"4.8",students:143,description:"Python sintaksisi, ma’lumotlar tuzilmalari va avtomatlashtirish orqali mustahkam dasturlash poydevorini yarating.",features:["Python asoslari va algoritmlar","Funksiyalar va modullar","Fayllar bilan ishlash","Amaliy mini-loyihalar"]},
    {id:"design",title:"UI/UX dizayn",category:"Dizayn",level:"O‘rta",duration:"3 oy",lessons:32,price:700000,color:"violet",symbol:"✳",rating:"4.9",students:98,description:"Foydalanuvchiga qulay interfeyslar yaratish, prototiplash va dizayn qarorlarini asoslashni o‘rganing.",features:["Dizayn tamoyillari","Figma va prototiplar","User flow va wireframe","Portfolio uchun loyiha"]},
    {id:"english",title:"Ingliz tili",category:"Tillar",level:"Boshlang‘ich",duration:"6 oy",lessons:72,price:500000,color:"orange",symbol:"A+",rating:"4.7",students:265,description:"Kundalik muloqot, grammatika va lug‘at boyligini bosqichma-bosqich rivojlantiring.",features:["Asosiy grammatika","Kundalik suhbat","Tinglab tushunish","Daraja bo‘yicha baholash"]},
    {id:"cyber",title:"Kiberxavfsizlik",category:"IT",level:"Yuqori",duration:"4 oy",lessons:40,price:900000,color:"navy",symbol:"⌘",rating:"4.8",students:74,description:"Tarmoq xavfsizligi, Linux va himoya tamoyillarini qonuniy laboratoriya mashg‘ulotlari orqali o‘rganing.",features:["Linux va tarmoq asoslari","Xavfsizlik tamoyillari","Zaifliklarni laboratoriyada tahlil qilish","Himoya amaliyotlari"]},
    {id:"computer",title:"Kompyuter savodxonligi",category:"IT",level:"Boshlang‘ich",duration:"2 oy",lessons:24,price:400000,color:"pink",symbol:"▣",rating:"4.8",students:204,description:"Kompyuter, ofis dasturlari, internet va raqamli xavfsizlikdan ishonchli foydalanishni o‘rganing.",features:["Operatsion tizimlar","Word va Excel asoslari","Internet va elektron pochta","Raqamli xavfsizlik"]},
    {id:"cpp",title:"C/C++ dasturlash",category:"Dasturlash",level:"O‘rta",duration:"5 oy",lessons:56,price:800000,color:"blue",symbol:"C++",rating:"4.8",students:86,description:"Algoritmik fikrlash, xotira, ma’lumotlar tuzilmalari va samarali kod yozish ko‘nikmalarini rivojlantiring.",features:["C/C++ asoslari","Pointer va xotira","Ma’lumotlar tuzilmalari","Algoritmik masalalar"]},
    {id:"math",title:"Matematika",category:"Fanlar",level:"O‘rta",duration:"4 oy",lessons:48,price:450000,color:"teal",symbol:"∑",rating:"4.6",students:112,description:"Mantiqiy fikrlash va muammolarni bosqichma-bosqich yechish ko‘nikmalarini mustahkamlang.",features:["Algebra va geometriya","Mantiqiy masalalar","Test strategiyalari","Haftalik nazorat"]},
    {id:"korean",title:"Koreys tili",category:"Tillar",level:"Boshlang‘ich",duration:"5 oy",lessons:60,price:550000,color:"violet",symbol:"한",rating:"4.7",students:91,description:"Hangul alifbosi, kundalik iboralar va koreys tilidagi muloqot asoslarini o‘rganing.",features:["Hangul alifbosi","Asosiy grammatika","Kundalik suhbat","Tinglab tushunish"]}
  ];
  const initial = {
    courses,
    students:[
      {id:101,name:"Azizbek Karimov",phone:"+998 90 123 45 67",courseId:"web",status:"Faol",payment:"paid",attendance:92,grade:4.7,progress:68},
      {id:102,name:"Madina Sobirova",phone:"+998 91 234 56 78",courseId:"python",status:"Faol",payment:"paid",attendance:96,grade:4.9,progress:82},
      {id:103,name:"Jasur Ergashev",phone:"+998 93 345 67 89",courseId:"design",status:"Sinov",payment:"pending",attendance:88,grade:4.3,progress:35},
      {id:104,name:"Dilnoza Rahimova",phone:"+998 94 456 78 90",courseId:"english",status:"Faol",payment:"debt",attendance:90,grade:4.5,progress:56},
      {id:105,name:"Sardor Tursunov",phone:"+998 95 567 89 01",courseId:"cyber",status:"Faol",payment:"paid",attendance:94,grade:4.8,progress:74},
      {id:106,name:"Malika Ismoilova",phone:"+998 97 678 90 12",courseId:"computer",status:"To‘xtatilgan",payment:"pending",attendance:75,grade:4.0,progress:21}
    ],
    applications:[
      {id:501,name:"Shahnoza Aliyeva",phone:"+998 90 222 33 44",courseId:"web",date:"2026-10-12",status:"Yangi"},
      {id:502,name:"Bekzod Qodirov",phone:"+998 91 333 44 55",courseId:"python",date:"2026-10-11",status:"Yangi"},
      {id:503,name:"Mohira Usmonova",phone:"+998 93 444 55 66",courseId:"english",date:"2026-10-10",status:"Ko‘rib chiqilmoqda"}
    ],
    grades:[
      {id:1,studentId:101,title:"HTML va semantik teglar",courseId:"web",date:"2026-10-08",grade:5,status:"Tekshirildi"},
      {id:2,studentId:101,title:"CSS layout amaliyoti",courseId:"web",date:"2026-10-05",grade:4.5,status:"Tekshirildi"},
      {id:3,studentId:101,title:"JavaScript test",courseId:"web",date:"2026-10-02",grade:4.5,status:"Tekshirildi"},
      {id:4,studentId:102,title:"Python funksiyalari",courseId:"python",date:"2026-10-09",grade:5,status:"Tekshirildi"}
    ],
    schedule:[
      {id:1,courseId:"web",title:"JavaScript: DOM bilan ishlash",date:"2026-10-13",time:"15:00",room:"2-xona"},
      {id:2,courseId:"web",title:"Amaliy loyiha",date:"2026-10-15",time:"15:00",room:"2-xona"},
      {id:3,courseId:"web",title:"Kod tahlili va savol-javob",date:"2026-10-17",time:"11:00",room:"Onlayn"}
    ]
  };
  const clone = x => JSON.parse(JSON.stringify(x));
  function read(){try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):null}catch(e){return null}}
  function ensure(){let d=read();if(!d||!Array.isArray(d.students)||!Array.isArray(d.courses)){d=clone(initial);save(d)}return d}
  function save(d){localStorage.setItem(KEY,JSON.stringify(d));return d}
  function reset(){return save(clone(initial))}
  function get(){return ensure()}
  function course(id){return get().courses.find(c=>c.id===id)}
  function money(n){return new Intl.NumberFormat("uz-UZ").format(Number(n)||0)+" so‘m"}
  window.EduData={KEY,get,save,reset,course,money,initial:clone(initial)};
})();