# Dental Solutions — Website

**Live Website:** https://www.dentalsolutionsbhopal.com

A professional dental clinic website for **Dental Solutions, Bhopal**, featuring clinic information, doctors, dental services, reviews, appointment enquiry, WhatsApp communication, and location/contact details.

The website is built using **plain HTML, CSS, and JavaScript** and is deployed as a production website on a **Windows hosting server through BigRock**.

---

## 🌐 Live Website

The production website is available at:

**https://www.dentalsolutionsbhopal.com**

The website is publicly accessible through the configured domain and hosting server.

---

## 🛠️ Technology Stack

- **HTML5** — Website structure
- **CSS3** — Styling, responsive design and layout
- **JavaScript** — Dynamic content and interactions
- **Google Fonts** — Typography
- **WhatsApp Links** — Appointment and service enquiries
- **Google Maps** — Clinic location
- **Schema.org / JSON-LD** — Local SEO structured data
- **BigRock** — Domain and web hosting
- **Windows Server / IIS** — Web server environment

No frontend framework or build system is required.

---

## 📁 Project Structure

The deployed website follows a simple static website structure:

```text
dental-solutions/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── content.js
│
├── images/
│   ├── hero/
│   ├── doctors/
│   ├── services/
│   └── other/
│
└── README.md
```

The exact folders may vary depending on the final deployed assets, but **`index.html` remains the main entry point of the website**.

---

# 🚀 Deployment

The website has been deployed to a **BigRock-hosted Windows server**.

The production website is served through the configured domain:

```text
www.dentalsolutionsbhopal.com
```

The website files are uploaded to the hosting server's web root, allowing the server to serve `index.html` as the main website page.

### Production flow

```text
Local Website Files
        │
        ▼
   BigRock Hosting
        │
        ▼
 Windows Web Server
        │
        ▼
 Domain Configuration
        │
        ▼
www.dentalsolutionsbhopal.com
        │
        ▼
    Live Website
```

---

# 🔗 Domain

The website is configured to use the following domain:

```text
www.dentalsolutionsbhopal.com
```

The domain provides the public-facing address of the Dental Solutions website.

---

# 🔐 HTTPS / SSL

The production website should be accessed using HTTPS:

```text
https://www.dentalsolutionsbhopal.com
```

HTTPS provides encrypted communication between the visitor's browser and the website server.

If the domain or hosting configuration is changed in the future, verify that the SSL certificate remains active and that HTTP traffic redirects correctly to HTTPS.

---

# 📄 Main Website Features

The live website includes:

- Premium dental clinic landing page
- Dental Solutions branding
- Clinic information
- Hero section
- About section
- Meet the Doctors section
- Dr. Suyash Vyas
- Dr. Surabhi Chetana Vyas
- Dental services section
- Why Choose Us section
- Patient reviews/testimonials
- Appointment enquiry form
- WhatsApp appointment communication
- Individual service WhatsApp enquiries
- Clinic contact information
- Google Maps/location section
- Responsive mobile/tablet/desktop layout
- Local SEO structured data

---

# 📞 Appointment System

The website currently uses a **WhatsApp-based appointment enquiry system**.

When a visitor submits the appointment form, the website prepares the submitted information and opens WhatsApp with a formatted message.

Typical information includes:

- Patient name
- Phone number
- Required service
- Preferred date
- Preferred time
- Additional notes

The clinic can then manually communicate with the patient and confirm the appointment.

### Important

The current website does **not** use a server-side appointment database.

Appointment information is not permanently stored in the website's hosting database.

---

# 💬 WhatsApp Enquiries

Service cards and appointment sections can redirect visitors to WhatsApp.

This allows prospective patients to directly contact the clinic regarding:

- Dental consultations
- Root canal treatment
- Dental implants
- Braces
- Cosmetic dentistry
- Teeth whitening
- Pediatric dentistry
- Other available services

---

# 📍 Location & Google Maps

The website includes the clinic's location information and map functionality so visitors can find the Dental Solutions clinic in Bhopal.

The map/location section is intended to make navigation easier for patients visiting the clinic.

---

# ✏️ Editing Website Content

Most frequently edited website information is maintained inside:

```text
js/content.js
```

This file can be used for routine content changes such as:

- Clinic information
- Phone number
- Opening hours
- Services
- Doctor information
- Reviews
- Text content
- WhatsApp information
- Other configurable website content

Whenever possible, update content through `content.js` instead of directly modifying the HTML.

---

# 🖼️ Updating Images

Website images are stored in the appropriate image folders.

For example:

```text
images/
```

or:

```text
images/doctors/
images/services/
images/hero/
```

To replace an image:

1. Prepare the new image.
2. Upload it to the appropriate server folder.
3. Update its reference in the website configuration/content.
4. Save the changes.
5. Upload the modified files to the hosting server.
6. Refresh the live website.

Recommended image formats:

```text
.webp
.jpg
.jpeg
.png
```

For large photographs, WebP is generally preferred for better website performance.

---

# 🔄 Updating the Live Website

Because the website is hosted on a production server, changes should be made carefully.

### Recommended workflow

```text
Edit locally
     ↓
Test locally
     ↓
Check desktop layout
     ↓
Check mobile layout
     ↓
Verify links/forms
     ↓
Upload changed files
     ↓
Refresh live website
     ↓
Verify production website
```

Do not directly experiment with important files on the production server without keeping a backup.

---

# 🧪 Testing Before Deployment

Before uploading changes to the live server, verify:

### Website

- Home page loads correctly
- Navigation works
- Images load
- CSS loads
- JavaScript works
- Mobile responsiveness works
- Desktop layout works

### Contact

- Phone link works
- WhatsApp links work
- Appointment form works
- Google Maps/location link works

### Browser

Test the website in commonly used browsers such as:

- Google Chrome
- Microsoft Edge
- Firefox
- Mobile Chrome
- Mobile Safari where applicable

---

# 🔍 SEO

The website contains basic SEO implementation including:

- Page title
- Meta description
- Responsive viewport
- Local business structured data
- Dentist/clinic information
- Bhopal location information
- Clinic contact information

The website also uses Schema.org structured data to help search engines understand that the website represents a dental clinic.

---

# ⚡ Performance

The website is intentionally built without a frontend framework or heavy build system.

Advantages include:

- Simple deployment
- Easy maintenance
- Low hosting complexity
- Fast initial loading
- No Node.js production server required
- No database required for the current functionality

For future optimization, consider:

- WebP image compression
- Image lazy loading
- Minification of CSS/JS
- Browser caching
- CDN integration
- Performance monitoring

---

# 🖥️ Hosting Environment

### Hosting Provider

**BigRock**

### Server Environment

**Windows Server**

### Website Type

**Static HTML/CSS/JavaScript website**

### Entry File

```text
index.html
```

### Production Domain

```text
www.dentalsolutionsbhopal.com
```

---

# 🔧 Server Maintenance

When updating the production website:

1. Connect to the BigRock hosting/server environment.
2. Locate the website's web root.
3. Keep a backup of the current production files.
4. Upload the updated website files.
5. Ensure `index.html` is present in the correct web root.
6. Verify CSS and JavaScript paths.
7. Verify image paths.
8. Open the live domain.
9. Test the website on desktop and mobile.

---

# 🛡️ Backup Recommendation

Before making major changes to the production website, create a backup of the current working version.

Recommended backup structure:

```text
backups/
│
├── dental-solutions-working/
├── dental-solutions-before-update/
└── dental-solutions-production/
```

Keep at least one known-working copy of the website.

---

# 🚫 Current Limitations

The current production website does **not** include:

- Online appointment slot management
- Patient database
- Patient login
- Doctor login
- Admin dashboard
- Online payment gateway
- Automatic appointment confirmation
- Server-side appointment storage
- Hospital/clinic management system
- Automated SMS system
- WhatsApp Business API automation

The current appointment workflow is based on **WhatsApp/manual confirmation**.

---

# 🔮 Future Improvements

The website can later be expanded into a complete dental clinic management platform.

Possible future features:

### Appointment Management

- Real-time appointment slots
- Doctor availability
- Online appointment booking
- Automatic confirmation
- Appointment reminders

### Patient Management

- Patient registration
- Patient login
- Digital patient records
- Treatment history
- Prescription management
- Medical documents

### Doctor Dashboard

- Appointment calendar
- Patient list
- Treatment records
- Follow-up management

### Communication

- WhatsApp Business API
- SMS notifications
- Email notifications
- Appointment reminders

### Payments

- Online payment
- Consultation fee payment
- Digital invoices
- Payment history

---

# 🌍 Production Website

The project has moved from a **local development website** to a **publicly accessible production website**.

### Development

```text
Local PC
   ↓
VS Code / Local Server
   ↓
Browser
```

### Production

```text
Visitor
   ↓
www.dentalsolutionsbhopal.com
   ↓
DNS / Domain
   ↓
BigRock Hosting
   ↓
Windows Web Server
   ↓
index.html
   ↓
Dental Solutions Website
```

---

# 👨‍⚕️ Clinic

**Dental Solutions Bhopal**

**Doctors:**

- Dr. Suyash Vyas — BDS, MDS
- Dr. Surabhi Chetana Vyas — BDS, MDS

**Location:**

39, Shop No. 1 & 2, Ground Floor, Divyanka Heights, Mandakini Square, 80 Feet Rd, Kolar Rd, Bhopal, Madhya Pradesh — 462042, India.

---

# 📌 Project Status

**Status:** ✅ Live / Production

**Website:**  
https://www.dentalsolutionsbhopal.com

**Hosting:** BigRock

**Server:** Windows Server

**Technology:** HTML5 + CSS3 + JavaScript

**Database:** Not required for the current website

**Appointment System:** WhatsApp-based enquiry

**Deployment:** Completed

---

## 📜 License / Usage

This website has been developed specifically for **Dental Solutions, Bhopal**.

Website content, branding, photographs, logos and clinic information should not be reused or redistributed without appropriate authorization.
