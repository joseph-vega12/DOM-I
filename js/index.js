const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const navBarLink = document.querySelector('nav');
navBarLink.children[0].textContent = siteContent["nav"]["nav-item-1"];
navBarLink.children[1].textContent = siteContent["nav"]["nav-item-2"];
navBarLink.children[2].textContent = siteContent["nav"]["nav-item-3"];
navBarLink.children[3].textContent = siteContent["nav"]["nav-item-4"];
navBarLink.children[4].textContent = siteContent["nav"]["nav-item-5"];
navBarLink.children[5].textContent = siteContent["nav"]["nav-item-6"];



const mainText = document.querySelector(".cta-text h1");
mainText.textContent = siteContent["cta"]["h1"];

const buttonText = document.querySelector(".cta-text button");
buttonText.textContent = siteContent["cta"]["button"];

const headerImg = document.querySelector("#cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

const bottomImg = document.querySelector(".middle-img");
bottomImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);



const featuresPara = document.querySelector(".text-content h4");
featuresPara.textContent = siteContent["main-content"]["features-h4"];

const aboutPara = document.querySelector(".text-content p");
aboutPara.textContent = siteContent["main-content"]["features-content"];



// const featuresPara = document.querySelector(".text-content p");
// featuresPara.textContent = siteContent["main-content"]["features-content"];

// const aboutPara = document.querySelector(".text-content p");
// aboutPara.textContent = siteContent["main-content"]["about-content"];










