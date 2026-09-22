/**
 * SITE CONTENT CONFIG
 * -----------------------------------------------------------------
 * Everything editable lives in this one file. Nothing below this
 * needs a developer to touch it for day-to-day changes (new service,
 * new review, new hours). When location #2 opens, duplicate the
 * `location` object into an array and add a location switcher —
 * the rest of the site already reads from this object, so no
 * template rewrite is needed.
 * -----------------------------------------------------------------
 */

const SITE = {
  location: {
    id: "bhopal-kolar-road",
    clinicName: "Dental Solutions",
    tagline: "Multispeciality Aesthetic Dental Clinic & Implant Center",
    city: "Bhopal",
    phoneDisplay: "+91 98266 39981",
    phoneE164: "919826639981", // used for tel: and wa.me links, no + or spaces
    address: "39, Shop No. 1 & 2, Ground Floor, Divyanka Heights, Mandakini Square, 80 Feet Rd, Kolar Rd, Bhopal, MP 462042",
    mapEmbedUrl: "https://www.google.com/maps?q=Divyanka+Heights+Kolar+Road+Bhopal&output=embed",
    mapDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Divyanka+Heights+Kolar+Road+Bhopal",
    rating: 4.8,
    reviewCount: 2000,
    hours: [
      { day: "Monday", time: "9:00 AM – 9:00 PM" },
      { day: "Tuesday", time: "9:00 AM – 9:00 PM" },
      { day: "Wednesday", time: "9:00 AM – 9:00 PM" },
      { day: "Thursday", time: "9:00 AM – 9:00 PM" },
      { day: "Friday", time: "9:00 AM – 9:00 PM" },
      { day: "Saturday", time: "9:00 AM – 9:00 PM" },
      { day: "Sunday", time: "10:00 AM – 2:00 PM" },
    ],
  },

  hero: {
    eyebrow: "Premium Dental Clinic · Bhopal",
    headline: "Premium Dental Care",
    headlineEmphasis: "you can trust.",
    sub: "Advanced, painless & personalised treatments crafted for your smile.",
    heroImage: "assets/images/hero.jpg",
    badge: {
      label: "Led by",
      name: "Dr. Suyash Vyas & Dr. Surabhi Chetana Vyas",
      detail: "Oral Physician & Maxillofacial Radiologist · Dental Surgeon",
    },
  },

  // Shown in a "Meet the Doctors" section. Add a third object here if a
  // future location brings on another doctor — the section already loops
  // over this array, no template change needed.
  doctors: [
    {
      name: "Dr. Suyash Vyas",
      credentials: "BDS, MDS (A-4278)",
      role: "Consultant Oral Physician & Maxillofacial Radiologist",
      detail: "Specialist in diagnosis of oral cancer, tobacco-related lesions, and diseases of the head & neck region.",
      photo: "assets/images/doctor-suyash.jpg", // add the real headshot at this path
    },
    {
      name: "Dr. Surabhi Chetana Vyas",
      credentials: "BDS (Bangalore), MIDA (A-09440)",
      role: "Consultant Dental Surgeon",
      detail: "",
      photo: "assets/images/doctor-surabhi.jpg", // add the real headshot at this path
    },
  ],

  about: {
    eyebrow: "About the Clinic",
    headline: "A sanctuary where clinical excellence meets quiet luxury.",
    body: "At Dental Solutions, every detail is engineered for calm: from the warm, minimal interiors to the whisper-quiet equipment. Our team pairs modern diagnostics with a deeply personal approach — because premium care should also feel premium.",
    image: "assets/images/about.jpg", // stock — swap for a real interior photo when ready
    yearsExperience: 15,
    features: [
      { icon: "shield", label: "Sterile & Hygienic" },
      { icon: "spark", label: "Advanced Tech" },
      { icon: "heart", label: "Painless Care" },
      { icon: "medal", label: "Expertly Led" },
    ],
  },

  // Pulled straight from the clinic's signboard. Photos below are free
  // stock images (Pexels — free for commercial use, no attribution
  // required) so the site looks complete out of the box. A few
  // treatments didn't have an exact-match photo available, so a closely
  // related clinical photo stands in for now — marked below. Swap any
  // image URL for your own clinic photos whenever you're ready.
  services: [
    { name: "Dental X-Ray", blurb: "On-site digital X-rays for accurate diagnosis.", image: "assets/images/service-xray.jpg" },
    { name: "Dental Implants", blurb: "Titanium implants — a lasting solution for missing teeth.", image: "assets/images/service-dental implants.jpg" },
    { name: "Braces Treatment", blurb: "Metal, ceramic & clear options for perfect alignment.", image: "assets/images/service-braces.jpg" },
    { name: "Advance Root Canal", blurb: "Save your natural tooth with a painless, modern approach.", image: "assets/images/service-root-canal.jpg" },
    { name: "Advance Fillings", blurb: "Tooth-coloured fillings that blend into your smile.", image: "assets/images/service-fillings.jpg" }, // generic treatment photo — stand-in
    { name: "Smile Designing", blurb: "A personalised plan to redesign the look of your smile.", image: "assets/images/service-smile-designing.jpg" }, // generic treatment photo — stand-in
    { name: "Tooth Removal", blurb: "Gentle, precise extractions with complete comfort.", image: "assets/images/service-tooth-removal.jpg" },
    { name: "Oral Surgery", blurb: "Surgical procedures handled with clinical precision.", image: "assets/images/service-oral-surgery.jpg" },
    { name: "Gum Surgery", blurb: "Treatment for gum disease and gum-line correction.", image: "assets/images/service-gum-surgery.jpg" }, // generic treatment photo — stand-in
    { name: "Tooth Cleaning", blurb: "Professional scaling & polishing for a healthy mouth.", image: "assets/images/service-tooth-cleaning.jpg" }, // generic checkup photo — stand-in
    { name: "Ceramic Crown & Bridge", blurb: "Durable, natural-looking crowns and bridgework.", image: "assets/images/service-crown-bridge.jpg" }, // dental model photo — stand-in
    { name: "Complete Dentures", blurb: "Custom, comfortable dentures for full tooth replacement.", image: "assets/images/service-dentures.jpg" },
    { name: "Child Dental Care", blurb: "Gentle dental care designed for younger patients.", image: "assets/images/service-child-dental-care.jpg" },
    { name: "Dental Laser", blurb: "Laser-assisted treatment for faster, precise care.", image: "assets/images/service-dental-laser.jpg" }, // generic equipment photo — stand-in
    // The last line on the signboard photo was cut off after "Oral & Mouth" —
    // send the full wording (likely an oral-cancer screening service, given
    // Dr. Suyash Vyas's specialty) and this line (and its photo) can be filled in.
  
  ],

  testimonials: [
    {
      rating: 5,
      quote: "Absolutely painless RCT and a warm, premium experience. Dr. Suyash explained everything patiently. Best clinic in Kolar Road.",
      name: "Rahul Sharma",
      city: "Bhopal",
    },
    {
      rating: 5,
      quote: "Got my smile designed here — transformed my confidence. The clinic is spotless, feels five-star.",
      name: "Priya Verma",
      city: "Bhopal",
    },
    {
      rating: 5,
      quote: "Very modern equipment, zero pain, zero waiting. My implant healed beautifully. Highly recommended.",
      name: "Amit Singh",
      city: "Bhopal",
    },
  ],

  booking: {
    eyebrow: "Book an Appointment",
    headline: "Tell us what you need — we'll take it from there.",
    sub: "Fill in a few details and we'll send your request straight to our WhatsApp. No app, no account, no waiting on hold.",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Doctors", href: "#doctors" },
    { label: "Services", href: "#services" },
    { label: "Book", href: "#book" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
};
