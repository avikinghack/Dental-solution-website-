/**
 * Renders every section from SITE (content.js) and wires up
 * navigation, WhatsApp links, and small interactions.
 * No build step, no framework — open index.html and go.
 */

(function () {
  const { location: loc, hero, about, doctors, services, testimonials, booking, nav } = SITE;

  // Renders <img> when a real src is given, otherwise a labeled placeholder
  // box — so a blank content.js field never shows a broken-image icon.
  function imageOrPlaceholder(src, alt, extraClass) {
    if (src) {
      return `<img class="${extraClass || ""}" src="${src}" alt="${alt}" loading="lazy" />`;
    }
    return `<div class="${extraClass || ""} img-placeholder"><span>${alt}</span></div>`;
  }

  const icons = {
    shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    spark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>',
    heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    medal: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>',
  };

  function starString(n) {
    const full = Math.round(n);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
  }

  function waLink(message) {
    return `https://wa.me/${loc.phoneE164}?text=${encodeURIComponent(message)}`;
  }

  // ---- Header / brand ----
  document.getElementById("brand-mark").textContent = loc.clinicName[0];
  document.getElementById("footer-mark").textContent = loc.clinicName[0];
  const [first, ...rest] = loc.clinicName.split(" ");
  document.getElementById("brand-name").innerHTML = `${first} <em>${rest.join(" ")}</em>`;
  document.getElementById("brand-sub").textContent = loc.tagline;
  document.getElementById("footer-name").textContent = loc.clinicName;
  document.getElementById("footer-sub").textContent = loc.tagline;
  document.title = `${loc.clinicName} — ${loc.tagline}, ${loc.city}`;

  document.getElementById("header-phone-text").textContent = loc.phoneDisplay;
  document.getElementById("header-phone").href = `tel:+${loc.phoneE164}`;
  document.getElementById("header-book-btn").href = waLink(`Hello ${loc.clinicName}, I'd like to book an appointment.`);

  // ---- Nav ----
  const navList = document.getElementById("nav-list");
  const footerNav = document.getElementById("footer-nav");
  nav.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${item.href}">${item.label}</a>`;
    navList.appendChild(li);

    const fli = document.createElement("li");
    fli.innerHTML = `<a href="${item.href}">${item.label}</a>`;
    footerNav.appendChild(fli);
  });

  // ---- Hero ----
  document.getElementById("hero-eyebrow").textContent = hero.eyebrow;
  document.getElementById("hero-headline").innerHTML =
    `${hero.headline}<br/><em class="accent">${hero.headlineEmphasis}</em>`;
  document.getElementById("hero-sub").textContent = hero.sub;
  document.getElementById("hero-image").outerHTML = imageOrPlaceholder(hero.heroImage, "Hero photo", "hero-image-el");
  document.getElementById("hero-stars").textContent = starString(loc.rating);
  document.getElementById("hero-rating-text").textContent = `${loc.rating} · ${loc.reviewCount.toLocaleString()} Reviews`;
  document.getElementById("hero-book-btn").href = waLink(`Hello ${loc.clinicName}, I'd like to book an appointment.`);
  document.getElementById("hero-call-btn").href = `tel:+${loc.phoneE164}`;
  document.getElementById("hero-badge").innerHTML = `
    <span class="b-label">${hero.badge.label}</span>
    <span class="b-name">${hero.badge.name}</span>
    <span class="b-detail">${hero.badge.detail}</span>
  `;

  // ---- About ----
  document.getElementById("about-eyebrow").textContent = about.eyebrow;
  document.getElementById("about-headline").textContent = about.headline;
  document.getElementById("about-body").textContent = about.body;
  document.getElementById("about-image").outerHTML = imageOrPlaceholder(about.image, "Clinic interior photo", "about-image-el");
  document.getElementById("about-years").innerHTML = `${about.yearsExperience}+<span>Years of clinical<br/>expertise</span>`;

  const featureGrid = document.getElementById("feature-grid");
  about.features.forEach((f) => {
    const div = document.createElement("div");
    div.className = "feature-item";
    div.innerHTML = `<span class="feature-icon">${icons[f.icon] || ""}</span> ${f.label}`;
    featureGrid.appendChild(div);
  });

  // ---- Doctors ----
  const doctorsGrid = document.getElementById("doctors-grid");
  doctors.forEach((d) => {
    const card = document.createElement("div");
    card.className = "doctor-card";
    card.innerHTML = `
      ${imageOrPlaceholder(d.photo, d.name, "doctor-photo")}
      <div class="doctor-body">
        <h3>${d.name}</h3>
        <p class="doctor-credentials">${d.credentials}</p>
        <p class="doctor-role">${d.role}</p>
        ${d.detail ? `<p class="doctor-detail">${d.detail}</p>` : ""}
      </div>`;
    doctorsGrid.appendChild(card);
  });

  // ---- Services ----
  const servicesGrid = document.getElementById("services-grid");
  services.forEach((s) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      ${imageOrPlaceholder(s.image, s.name, "service-image")}
      <div class="service-body">
        <h3>${s.name}</h3>
        <p>${s.blurb}</p>
        <a class="btn btn-whatsapp" target="_blank" rel="noopener"
           href="${waLink(`Hello ${loc.clinicName}, I'd like to enquire about "${s.name}".`)}">
          Enquire on WhatsApp
        </a>
      </div>`;
    servicesGrid.appendChild(card);
  });

  // ---- Reviews ----
  document.getElementById("reviews-headline").innerHTML =
    `Loved by <span class="accent">${loc.reviewCount.toLocaleString()}+</span> smiles.`;
  document.getElementById("rating-number").textContent = loc.rating.toFixed(1);
  document.getElementById("rating-stars").textContent = starString(loc.rating);
  document.getElementById("rating-caption").textContent = `${loc.reviewCount.toLocaleString()} Google Reviews`;

  const reviewsGrid = document.getElementById("reviews-grid");
  testimonials.forEach((t) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <span class="stars">${starString(t.rating)}</span>
      <p class="review-quote">"${t.quote}"</p>
      <div class="review-person">
        <span class="review-avatar">${t.name[0]}</span>
        <span>
          <span class="review-name">${t.name}</span>
          <span class="review-city">${t.city}</span>
        </span>
      </div>`;
    reviewsGrid.appendChild(card);
  });

  // ---- Contact ----
  document.getElementById("map-frame").src = loc.mapEmbedUrl;
  document.getElementById("contact-address").textContent = loc.address;
  document.getElementById("contact-directions").href = loc.mapDirectionsUrl;
  document.getElementById("contact-phone-number").textContent = loc.phoneDisplay;

  const hoursList = document.getElementById("hours-list");
  loc.hours.forEach((h) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${h.day}</span><span>${h.time}</span>`;
    hoursList.appendChild(li);
  });

  // ---- Footer ----
  document.getElementById("footer-address").textContent = loc.address;
  document.getElementById("footer-phone").textContent = loc.phoneDisplay;
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- Floating WhatsApp ----
  document.getElementById("floating-whatsapp").href =
    waLink(`Hello ${loc.clinicName}, I'd like to know more.`);

  // ---- Booking form ----
  document.getElementById("booking-eyebrow").textContent = booking.eyebrow;
  document.getElementById("booking-headline").textContent = booking.headline;
  document.getElementById("booking-sub").textContent = booking.sub;

  const serviceSelect = document.getElementById("bf-service");
  const anyOpt = document.createElement("option");
  anyOpt.value = "";
  anyOpt.textContent = "Not sure / general checkup";
  serviceSelect.appendChild(anyOpt);
  services.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s.name;
    opt.textContent = s.name;
    serviceSelect.appendChild(opt);
  });

  function formatDate(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }
  function formatTime(t) {
    if (!t) return "";
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return `${h12}:${String(m).padStart(2, "0")} ${period}`;
  }

  document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("bf-name").value.trim();
    const phone = document.getElementById("bf-phone").value.trim();
    const service = document.getElementById("bf-service").value;
    const date = document.getElementById("bf-date").value;
    const time = document.getElementById("bf-time").value;
    const message = document.getElementById("bf-message").value.trim();

    if (!name || !phone) {
      alert("Please enter your name and phone number so we can confirm your booking.");
      return;
    }

    const lines = [
      `Hello ${loc.clinicName}, I'd like to book an appointment.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
    ];
    if (service) lines.push(`Service: ${service}`);
    if (date) lines.push(`Preferred date: ${formatDate(date)}`);
    if (time) lines.push(`Preferred time: ${formatTime(time)}`);
    if (message) lines.push(`Notes: ${message}`);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });

  // ---- Mobile nav toggle ----
  const toggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  toggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
