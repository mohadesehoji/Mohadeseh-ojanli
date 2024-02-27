let home = document.getElementById("home");
let home_box = document.getElementById("home-box");
let port = document.getElementById("port");
let port_box = document.querySelector("div.port");
let about = document.getElementById("about");
let title = document.querySelector("title");
let certificate = document.getElementById("certificates");

let general = document.querySelector(".general");
let homepage = document.querySelector(".homepage");
let aboutt = document.querySelector(".about");
let ii = document.getElementById("theme");

let about_box = document.querySelector("div.about");
let social = document.getElementById("social");
let social_box = document.querySelector("div.social");
let section = document.querySelector("section");
let smallcover = document.querySelectorAll("div.thumb img");
let bigcover = document.querySelector("div.big-img img");
// cover social
let firstpic = document.getElementById("firstpic");
let secondpic = document.getElementById("secondpic");
let thirdpic = document.getElementById("thirdpic");
let btnservice = document.getElementById("btnservice");
let main = document.querySelector("main");
let flag = true;
let faSpan = document.getElementById("fa");
let nav = document.querySelector("nav");
let lang = document.getElementById("lang");
let imgFlag = document.getElementById("imgFlag");
let des1 = document.getElementById("des1");
let des2 = document.getElementById("des2");
let des3 = document.getElementById("des3");
let des4 = document.getElementById("des4");
let des5 = document.getElementById("des5");
let des6 = document.getElementById("des6");
let hometitle = document.getElementById("hometitle");
let hometitle2 = document.getElementById("hometitle2");
let hometitle3 = document.getElementById("hometitle3");
let aboutme = document.getElementById("aboutme");
let aboutmedes = document.getElementById("aboutmedes");
let degree2 = document.getElementById("degree2");
let degree3 = document.getElementById("degree3");
let aboutn = document.getElementById("aboutn");
let aboutz = document.getElementById("aboutz");
let degree = document.querySelector(".degree");
// scroll
let hometitle3_0 = document.getElementById("hometitle3-0");
let hometitle3_1 = document.getElementById("hometitle3-1");
window.addEventListener("scroll", showScroll);
function showScroll() {
    if (window.scrollY > 300) {
        hometitle3_0.style.alignItems = "center";
        hometitle3_1.style.alignItems = "center";

    }
    if (window.scrollY < 300) {
        hometitle3_0.style.alignItems = "flex-end";
        hometitle3_1.style.alignItems = "flex-start";
    }
}

// slides
for (let i = 0; i < smallcover.length; i++) {
    smallcover[i].onclick = slideShow;
}
// function slideShow
function slideShow() {
    let imgSrc = this.getAttribute("src");
    bigcover.setAttribute("src", imgSrc);
}
home.addEventListener("click", showhomeBox);
function showhomeBox() {
    for (let i = 0; i < section.children.length; i++) {
        section.children[i].classList.remove("show");
    }
    home_box.classList.add("show");
}
port.addEventListener("click", showPortBox);
function showPortBox() {
    for (let i = 0; i < section.children.length; i++) {
        section.children[i].classList.remove("show");
    }
    port_box.classList.add("show");
}
about.addEventListener("click", showAboutBox);
function showAboutBox() {
    for (let i = 0; i < section.children.length; i++) {
        section.children[i].classList.remove("show");
    }
    about_box.classList.add("show");
}
social.addEventListener("click", showsocialBox);
function showsocialBox() {
    for (let i = 0; i < section.children.length; i++) {
        section.children[i].classList.remove("show");
    }
    social_box.classList.add("show");
}
// cover social
firstpic.addEventListener("click", function () {
    btnservice.textContent = "first Portfolio";
    btnservice.style.backgroundColor = `rgb(21, 21, 82)`;
    btnservice.setAttribute("href","Irankhodro Responsive/index.html");

});
secondpic.addEventListener("click", function () {
    btnservice.textContent = "second Portfolio";
    btnservice.style.backgroundColor = `rgb(189, 101, 67)`;
    btnservice.setAttribute("href","Shopping Card Responsive/index.html");


});
thirdpic.addEventListener("click", function () {
    btnservice.textContent = "third Portfolio";
    btnservice.style.backgroundColor = "#212529";
    btnservice.setAttribute("href","Snap web2 not Responsive/index.html");

});
// languageChange
function languageChange() {
    if (flag) {
        faSpan.textContent = "En";
        imgFlag.setAttribute("src", "img/en.png");
        nav.style.direction = "rtl";
        port_box.style.direction = "rtl";
        main.style.textAlign = "right";
        flag = false;
        home.textContent = "خانه";
        port.textContent = "مدارک";
        about.textContent = "درباره";
        social.textContent = "رزومه";
        hometitle.textContent = "!یک وب سایت کاملا حرفه ای در بازارهای جهانی داشته باشید";
        hometitle2.textContent = "چرا باید من را انتخاب کنید؟";
        hometitle3.textContent = ":طراحی ما بر اساس موارد زیر است";
        title.textContent = "محدثه اجانلی";
        aboutn.textContent = "محدثه اجانلی";
        aboutz.textContent = "کارآموز شرکت تابان شهر";
        des1.textContent = "طرحی که پیمایش را آسان می کند";
        des2.textContent = "این PWA است که تجربه قابل اعتمادتری را به کاربران ارائه دهد";
        des3.textContent = "تولید شده توسط آخرین نسخه HTML، CSS، SASS، BOOSTTRAP، JS";
        des4.textContent = "بهینه سازی برای موبایل";
        des5.textContent = "ظاهر وب سایت جذاب";
        des6.textContent = "بر اساس کد پاک";
        aboutme.textContent = "درباره من";
        certificate.textContent = "گواهی نامه";
        degree.textContent = "مجتمع فنی تهران";
        degree2.textContent = "مجتمع فنی تهران";
        degree3.textContent = "موسسه علوم و فنون کیش";
        aboutmedes.textContent = "من محدثه اوجانلی هستم، یک یادگیرنده پرشور 22 ساله که عاشق چالش های جدید است. من خودم را به عنوان یک توسعه دهنده مبتدی Frontend در نظر گرفتم و در حال حاضر، من برای کار به عنوان کارآموز آماده هستم. به عنوان یک مهندس کامپیوتر فارغ التحصیل از دانشگاه (IAUCTB)، قصد دارم مدرک کارشناسی ارشد خود را بگیرم. من به نواختن ویولن و انجام یوگا علاقه مند هستم. این به من احساس زنده بودن می دهد! من عاشق ارتباط با افراد جدید هستم. به من در gisoo2001@yahoo.com یا اینجا در لینکدین فریاد بزنید!";
    }
    else {
        home.textContent = "Home";
        port.textContent = "Certificates";
        about.textContent = "About Me";
        social.textContent = "Portfolio";
        hometitle.textContent = "Have a fully professional website in global markets!";
        hometitle2.textContent = "Why should you choose me?";
        hometitle3.textContent = "Our design is based on these following items:";
        des1.textContent = "A Layout That Make it Easy to Navigate";
        des2.textContent = "It Is PWA To Provide Users With A More Reliable Experience";
        des3.textContent = "Generated By The Last Version Of HTML,CSS,SASS,BOOTSTRAP,JS";
        des4.textContent = "Being Optimized for Mobile";
        des5.textContent = "Attractive Website Appearance";
        des6.textContent = "Based On Clean Code";
        title.textContent = "Mohadeseh Ojanli";
        aboutn.textContent = "Mohadeseh Ojanli";
        aboutz.textContent = "Intern At Taban Shahr Company";
        aboutme.textContent = "About Me";
        certificate.textContent = "certificate";
        degree.textContent = "Tehran Institute of TechnologyTehran";
        degree2.textContent = "Tehran Institute of TechnologyTehran";
        degree3.textContent = "KISH Institute of Science and Technology";
        aboutmedes.textContent = "I'm Mohadeseh Ojanli, a 22 year-old passionate learner who loves new challenges. I considered my self as a beginner Frontend Developer and Currently, I'm open up to work as an intern.As a Computer Engineering Graduated at University(IAUCTB), I intend to get my master degree.I'm interested in playing violin and doing yoga.It makes me feel alive!I love connecting with new people; give me a shout at gisoo2001 @yahoo.com or on LinkedIn!";

        faSpan.textContent = "Fa";
        imgFlag.setAttribute("src", "img/iran.png");
        nav.style.direction = "ltr";
        main.style.textAlign = "left";
        flag = true;
    }
}
lang.addEventListener("click", languageChange);
// nightmode
function nightmode() {
    if (flag) {
        // day
        // pic background
        aboutt.style.background = `url(img/0.jpg)`;
        general.style.background = `url(img/0.jpg)`;
        homepage.style.background = `url(img/0.jpg)`;
        social_box.style.background = `url(img/0.jpg)`;
        aboutmedes.style.color = `rgba(86, 64, 25, 0.827)`;
        aboutme.style.color = `rgba(86, 64, 25, 0.827)`;
        hometitle2.style.color = `rgba(86, 64, 25, 0.827)`;
        hometitle3.style.color = `rgba(86, 64, 25, 0.827)`;
        // black color
        document.body.style.color = "#212529";
        theme.style.color = "#212529";
        ii.setAttribute("class", "fas fa-moon");
        flag = false;
    } else {
        // night
        // black backgroundcolor
        aboutmedes.style.color = "wheat";
        aboutme.style.color = "wheat";
        hometitle2.style.color = "wheat";
        hometitle3.style.color = "wheat";
        aboutt.style.background = "#212529";
        general.style.background = "#212529";
        homepage.style.background = "#212529";
        social_box.style.background = "#212529";
        // white color
        document.body.style.color = "#f8f9fa";
        theme.style.color = "#212529";
        ii.setAttribute("class", "fas fa-sun");
        flag = true;
    }
}
ii.addEventListener("click", nightmode);