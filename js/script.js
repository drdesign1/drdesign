window.addEventListener('scroll', () => {
    document.querySelectorAll('.card').forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.2;
        if(position < screen){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

const bars = document.querySelectorAll('.progress-line span');
bars.forEach(bar=>{
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
});

/* SKILL BAR ANIMATION VIA OBSERVER */
document.addEventListener("DOMContentLoaded", function(){
    const bars = document.querySelectorAll('.skill-bar span');
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const bar = entry.target;
                const width = bar.getAttribute("data-width");
                bar.style.width = width;
            }
        });
    },{threshold:0.5});

    bars.forEach(bar=>{
        observer.observe(bar);
    });
});



// 3. Normal scroll animation scripts (Old Code)
const elements = document.querySelectorAll(".animate");
const skills = document.querySelectorAll(".skill");

function handleScroll() {
  const trigger = window.innerHeight * 0.8;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });

  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    const bar = skill.querySelector(".skill-bar span");
    if (top < trigger) {
      if (bar) {
        bar.style.width = bar.getAttribute("data-width");
      }
    } else {
      if (bar) {
        bar.style.width = "0";
      }
    }
  });
}

window.addEventListener("scroll", handleScroll);



/* ==========================================
   PRICING SWITCH STYLES Start
   ========================================== */
function switchPricing() {
    const checkbox = document.getElementById('plan-toggle');
    const labelMonthly = document.getElementById('label-monthly');
    const labelYearly = document.getElementById('label-yearly');
    
    // Elements for Prices
    const priceBasic = document.getElementById('price-basic');
    const priceStandard = document.getElementById('price-standard');
    const pricePremium = document.getElementById('price-premium');
    
    // Elements for Sub-text
    const periodBasic = document.getElementById('period-basic');
    const periodStandard = document.getElementById('period-standard');
    const periodPremium = document.getElementById('period-premium');

    // Elements for WhatsApp Links
    const linkBasic = document.getElementById('link-basic');
    const linkStandard = document.getElementById('link-standard');
    const linkPremium = document.getElementById('link-premium');

    if (checkbox.checked) {
        // 🟢 YEARLY MODE SELECTED (काम कम और दाम कम)
        labelYearly.className = 'toggle-label active';
        labelMonthly.className = 'toggle-label inactive';

        // 1. कम वाली प्राइसेज (Per Month)
        priceBasic.innerHTML = "₹4,249<span>/-</span>";
        priceStandard.innerHTML = "₹5,499<span>/-</span>";
        pricePremium.innerHTML = "₹6,799<span>/-</span>";

        periodBasic.innerHTML = "per month (Billed Annually)";
        periodStandard.innerHTML = "per month (Billed Annually)";
        periodPremium.innerHTML = "per month (Billed Annually)";

        // 2. 📉 YEARLY ME WORK KAM KARNA (यहाँ आप टेक्स्ट बदल सकते हैं)
        // Basic Plan Features (Yearly)
        document.getElementById('f-basic-1').innerHTML = '<i class="fas fa-check"></i> 6 Posts including'; // 8 से 5 कर दिया
        document.getElementById('f-basic-2').innerHTML = '<i class="fas fa-check"></i> 3 Motion post';
        document.getElementById('f-basic-4').innerHTML = '<i class="fas fa-check"></i> 4 Stories';

        // Standard Plan Features (Yearly)
        document.getElementById('f-standard-1').innerHTML = '<i class="fas fa-check"></i> 12 Posts including'; // 10 से 7 कर दिया
        document.getElementById('f-standard-4').innerHTML = '<i class="fas fa-check"></i> 6 Stories';
        document.getElementById('f-standard-5').innerHTML = '<i class="fas fa-check"></i> 3 Reach Ads';

        // Premium Plan Features (Yearly)
        document.getElementById('f-premium-1').innerHTML = '<i class="fas fa-check"></i> 11 Posts including'; // 15 से 11 कर दिया
        document.getElementById('f-premium-2').innerHTML = '<i class="fas fa-check"></i> 3 Motion posts';
        document.getElementById('f-premium-4').innerHTML = '<i class="fas fa-check"></i> 8 Stories';

        // WhatsApp Links
        linkBasic.href = "https://wa.me/919714004207?text=Hi%20Deepak,%20I%20want%20to%20inquire%20about%20the%20Social%20Media%20Basic%20Yearly%20Plan.";
        linkStandard.href = "https://wa.me/919714004207?text=Hi%20Deepak,%20I%20want%20to%20inquire%20about%20the%20Social%20Media%20Standard%20Yearly%20Plan.";
        linkPremium.href = "https://wa.me/919714004207?text=Hi%20Deepak,%20I%20want%20to%20inquire%20about%20the%20Social%20Media%20Premium%20Yearly%20Plan.";

    } else {
        // 🔵 MONTHLY MODE SELECTED (वापस डिफ़ॉल्ट ज़्यादा काम और नॉर्मल दाम)
        labelMonthly.className = 'toggle-label active';
        labelYearly.className = 'toggle-label inactive';

        // प्राइसेज रिसेट
        priceBasic.innerHTML = "₹4,999<span>/-</span>";
        priceStandard.innerHTML = "₹6,499<span>/-</span>";
        pricePremium.innerHTML = "₹7,999<span>/-</span>";

        periodBasic.innerHTML = "per month";
        periodStandard.innerHTML = "per month";
        periodPremium.innerHTML = "per month";

        // 3. 📈 MONTHLY ME WORK WAPAS NORMAL (ज्यादा) KARNA
        // Basic Plan Reset
        document.getElementById('f-basic-1').innerHTML = '<i class="fas fa-check"></i> 8 Posts including';
        document.getElementById('f-basic-2').innerHTML = '<i class="fas fa-check"></i> 2 Motion posts';
        document.getElementById('f-basic-4').innerHTML = '<i class="fas fa-check"></i> 8 Stories';

        // Standard Plan Reset
        document.getElementById('f-standard-1').innerHTML = '<i class="fas fa-check"></i> 10 Posts including';
        document.getElementById('f-standard-4').innerHTML = '<i class="fas fa-check"></i> 10 Stories';
        document.getElementById('f-standard-5').innerHTML = '<i class="fas fa-check"></i> 6 Reach Ads';

        // Premium Plan Reset
        document.getElementById('f-premium-1').innerHTML = '<i class="fas fa-check"></i> 15 Posts including';
        document.getElementById('f-premium-2').innerHTML = '<i class="fas fa-check"></i> 5 Motion posts';
        document.getElementById('f-premium-4').innerHTML = '<i class="fas fa-check"></i> 12 Stories';

        // WhatsApp Links Reset
        linkBasic.href = "https://wa.me/919714004207?text=Hi%20Deepak,%20I%20want%20to%20inquire%20about%20the%20Social%20Media%20Basic%20Monthly%20Plan.";
        linkStandard.href = "https://wa.me/919714004207?text=Hi%20Deepak,%20I%20want%20to%20inquire%20about%20the%20Social%20Media%20Standard%20Monthly%20Plan.";
        linkPremium.href = "https://wa.me/919714004207?text=Hi%20Deepak,%20I%20want%20to%20inquire%20about%20the%20Social%20Media%20Premium%20Monthly%20Plan.";
    }
}

