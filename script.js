// ===============================
// भारतीय जन कल्याण पार्टी
// script.js
// ===============================

// वर्ष अपने आप अपडेट करें
const footer = document.querySelector("footer p");
if (footer) {
  footer.innerHTML =
    "© " + new Date().getFullYear() + " भारतीय जन कल्याण पार्टी | सर्वाधिकार सुरक्षित";
}

// सदस्यता फॉर्म
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelectorAll("input")[0].value.trim();
    const mobile = form.querySelectorAll("input")[1].value.trim();

    if (name === "") {
      alert("कृपया अपना नाम दर्ज करें।");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।");
      return;
    }

    alert(
      "धन्यवाद " +
        name +
        "!\n\nआपका सदस्यता आवेदन सफलतापूर्वक दर्ज किया गया।"
    );

    form.reset();
  });
}

// नेविगेशन Active Effect
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Scroll होने पर Header Shadow
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 4px 12px rgba(0,0,0,.35)";
  } else {
    header.style.boxShadow = "none";
  }
});

// वेबसाइट लोड होने पर संदेश
window.onload = function () {
  console.log("भारतीय जन कल्याण पार्टी वेबसाइट सफलतापूर्वक लोड हुई।");
};