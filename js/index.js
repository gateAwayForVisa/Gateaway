// Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Discount Media
const video = document.querySelector(".video");
const button = document.querySelector(".video-control");

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

function switchVideo() {
  video1.classList.add('hide'); // Hide the first video
  video2.classList.remove('hide'); // Show the second video
  video2.play(); // Start playing the second video
  video1.pause(); // Pause the first video
}

function playpausevideo() {
  if (video.paused) {
    button.innerHTML = "<i class='bx bx-pause' ></i>";
    video.play();
  } else {
    button.innerHTML = "<i class='bx bx-play' ></i>";
    video.pause();
  }
}

// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

// Fix Nav
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 200) {
    navigation.classList.add("fix");
    header.style.zIndex = "1000";
  } else {
    navigation.classList.remove("fix");
  }
});

// Scroll
const links = document.querySelectorAll(".nav-link");

Array.from(links).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navigation.getBoundingClientRect().height;
    const fix = navigation.classList.contains("fix");
    let position = element.offsetTop - navHeight;

    // if (!fix) {
    //   position = position - navHeight;
    // }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navList.classList.remove("open");
  });
});

// Scroll Reveal

const scroll = ScrollReveal({
  distance: "100px",
  duration: 2500,
  reset: true,
});

scroll.reveal(`.content h1, .content .btn`, {
  origin: "top",
  interval: 100,
});

scroll.reveal(`.about .col h1, .about .col p, .about .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.about .col:last-child,.contact .location,.more .col:last-child,.newsletter .form`,
  {
    origin: "right",
  }
);

scroll.reveal(`.service img,.contact .title`, {
  origin: "top",
});

scroll.reveal(`.service .col,.trip .row`, {
  origin: "bottom",
});

scroll.reveal(`.trip .title,.more .col:first-child,.newsletter .col`, {
  origin: "left",
});

const sections = document.querySelectorAll('section');

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight / 2 &&
    rect.bottom >= window.innerHeight / 2
  );
}

function handleScroll() {
  sections.forEach((section) => {
    if (isInView(section)) {
      section.querySelectorAll('.circle-chart__circle, .circle-chart__info').forEach(element => {
        element.classList.add('animate');
      });
    }
  });
}

// Initial check in case the charts are already in view on page load
handleScroll();

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Add this function to your script.js

const serviceContent = {
  en: [
      { title: 'Number of clients', value: '+1000' },
      { title: 'Number of clients Accepted visas', value: '+400' },
      { title: 'Review', value: '4.8*'},
  ],
  ar: [
      { title: 'عدد العملاء', value: '١٠٠٠+' },
      { title: 'عدد العملاء الذين تم قبول تأشيراتهم', value: '٤٠٠+' },
      { title: 'تقييم العملاء لخدمتنا', value: '٤.٨*' },
  ],
};

const translations = {
  'en': {
    title: 'Get Your Visa With Us',
    paragraph: 'Our professional team will assist you in selecting the suitable visa to apply for, offering free consultations. The application process is handled by a highly experienced team with years of expertise in this field',
  },
  'ar': {
    title: 'احصل على تأشيرتك معنا',
    paragraph: 'سيقوم فريقنا المحترف بمساعدتك في اختيار التأشيرة المناسبة للتقديم، مقدمين استشارات مجانية. يتم معالجة عملية التقديم بواسطة فريق ذو خبرة عالية لديه سنوات من الخبرة في هذا المجال',
  }
};

const contactContent = {
  en: {
      title: "Book your appointment!",
      description: "Book your appointment for a professional consultation with our team. Our official working hours are from Saturday to Thursday, starting from 10:00 AM until 5:00 PM",
      location: "Location",
  },
  ar: {
      title: "!احجز موعدك",
      description: "احجز موعدك للاستشارة المهنية مع فريقنا. ساعات العمل الرسمية لدينا هي من السبت إلى الخميس، بدءًا من الساعة 10:00 صباحًا حتى الساعة 5:00 مساءً",
      location: "الموقع",
  },
};

function setTripsContent(lang) {
  const titleElement = document.querySelector('.services h1');
  const paragraphElement = document.querySelector('.services p');

  if (titleElement) {
    titleElement.textContent = translations[lang].title;
  }

  if (paragraphElement) {
    paragraphElement.textContent = translations[lang].paragraph;
  }
}


function setContactContent(lang) {
  const contactTitle = document.querySelector('.section.contact .title h1');
  const contactDescription = document.querySelector('.section.contact .title p');
  const contactLocation = document.querySelector('.section.contact .location-container .location-label');

  if (contactTitle) {
    contactTitle.innerText = contactContent[lang].title;
  }

  if (contactDescription) {
    contactDescription.innerText = contactContent[lang].description;
  }

  if (contactLocation) {
    contactLocation.innerText = contactContent[lang].location;
  }
}


// Function to set content for the "Service" section based on the selected language
function setServiceContent(lang) {
  const serviceSections = document.querySelectorAll('.section.service .circle-chart__info');

  serviceSections.forEach((section, index) => {
      const { title, value, subline } = serviceContent[lang][index];

      const titleElement = section.closest('section').querySelector('h2');
      const valueElement = section.querySelector('.circle-chart__percent');
      const sublineElement = section.querySelector('.circle-chart__subline');

      // Check if titleElement is found before setting innerText
      if (titleElement) {
          titleElement.innerText = title;
      }

      if (valueElement) {
          valueElement.innerText = value;
      }

      if (sublineElement) {
          // Display subline only if it's defined in the content
          sublineElement.innerText = subline || '';
      }
  });
}



const aboutUsEnlgish = "Gate Away for Visa is the premier destination for visa solutions to foreign embassies including the USA, Canada, and Schengen countries. Our specialized expertise ensures a seamless and professional visa application experience, delivering meticulous service and expert guidance throughout the process. Trust us to handle your visa needs efficiently and effectively, ensuring a smooth journey towards obtaining your desired visa."
const aboutUsArabic = "Gate Away for Visa\n هي الوجهة الأولى لحلول التأشيرة للسفارات الأجنبية بما في ذلك الولايات المتحدة الأمريكية وكندا ودول شنغن. تضمن خبرتنا المتخصصة تجربة سلسة واحترافية لطلب التأشيرة، وتقديم خدمة دقيقة وإرشادات الخبراء طوال العملية. ثق بنا للتعامل مع احتياجات التأشيرة الخاصة بك بكفاءة وفعالية، مما يضمن رحلة سلسة نحو الحصول على التأشيرة المطلوبة."
function setLanguage(lang) {
  if (lang === 'en') {
    
    document.getElementById('language-select').value = lang;

      document.getElementById('home-link').innerText = 'Home';
      document.getElementById('about-link').innerText = 'About';
      document.getElementById('service-link').innerText = 'Feedback';
      document.getElementById('trips-link').innerText = 'Services';
      document.getElementById('contact-link').innerText = 'Contact';
      document.getElementById('language-select').innerText = 'Language'
      // document.getElementById('sign-up-link').innerText = 'Sign Up';
      document.getElementById('about-content').innerText='About Us';
      document.getElementById('about-title').innerText=aboutUsEnlgish;
      setServiceContent(lang);
      setTripsContent(lang);
      setContactContent(lang);

      // Add more elements as needed
  } else if (lang === 'ar') {
      document.getElementById('language-select').value = lang;
      document.getElementById('home-link').innerText = 'الرئيسية';
      document.getElementById('about-link').innerText = 'حول';
      document.getElementById('service-link').innerText = 'تقييم';
      document.getElementById('trips-link').innerText = 'الخدمات';
      document.getElementById('contact-link').innerText = 'اتصل';
      document.getElementById('language-select').innerText = 'اللغة'
      // document.getElementById('sign-up-link').innerText = 'سجل الآن';
      document.getElementById('language-select').value = lang;
      document.getElementById('about-content').innerText='من نحن';
      document.getElementById('about-title').innerText=aboutUsArabic;
      setServiceContent(lang);
      setTripsContent(lang);
      setContactContent(lang);

      // Add more elements as needed for Arabic
  }
}

function changeLanguage(selectedLanguage) {
  setLanguage(selectedLanguage);
  // Add any additional logic you may need to handle language changes
}
// Initial language setting (default to English)
setLanguage('en');
