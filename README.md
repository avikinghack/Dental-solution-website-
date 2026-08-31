# Dental Solutions — website

Plain HTML/CSS/JS, no build step, no framework.

## Run it

**Easiest:** in VS Code, install the "Live Server" extension, right-click
`index.html` → **Open with Live Server**.

**Or:** just double-click `index.html` — it opens in your browser directly
(map + WhatsApp links still work since they're just URLs).

**Or, from a terminal:**
```
cd dental-solutions
python3 -m http.server 5500
```
then open http://localhost:5500

## Editing content

Everything text/image/phone/hours-related lives in **`js/content.js`** —
that's the only file you should need to touch day-to-day. No HTML/CSS
knowledge required to change a phone number, add a service, or edit a
review.

## Swapping in real photos

Every image slot (hero, about, both doctor photos, all 15 service cards)
is currently blank on purpose — it renders as a labeled placeholder box.
Set the `image:` / `heroImage:` / `photo:` field in `js/content.js` to a
hosted URL, or drop files into a local `/images` folder and reference
them as `"images/hero.jpg"`, and the placeholder is replaced automatically.

## When location #2 opens (franchise-readiness)

`content.js` is intentionally structured as `SITE.location = {...}` (a
single object) rather than scattering the clinic's name/phone/address
across every HTML file. To add a second location later:

1. Change `SITE.location` into `SITE.locations = [ {...bhopal}, {...newCity} ]`.
2. Add a simple location switcher (dropdown or subdomain routing) that
   picks which entry populates the page.
3. Everything else — `hero`, `about`, `doctors`, `services`, `testimonials`
   — can either stay shared across locations or also become arrays keyed
   by location id, depending on whether services/pricing/doctors differ
   by branch.

This avoids the trap of hardcoding "Bhopal" and one phone number into
20 different places in the markup.

## What's included

- Hero, About, **Meet the Doctors** (Dr. Suyash Vyas & Dr. Surabhi Chetana Vyas),
  full 15-item Services grid, Why Us, Reviews, a **Book Appointment form**,
  and Contact/map — all in one page.
- Every image slot (hero, about, doctor photos, service cards) is left as a
  labeled placeholder on purpose — see "Swapping in real photos" above.

## What this does *not* include

There's **no real booking backend or database** — the Book Appointment
form on the page collects name, phone, service, preferred date/time, and
notes, then builds a formatted message and opens WhatsApp with it
pre-filled. The clinic still confirms manually over WhatsApp/call;
nothing is stored server-side. Every service card's "Enquire on
WhatsApp" button works the same way for a specific service. If you later
want actual in-site appointment slots + automatic confirmations, that's
a separate, bigger piece (calendar backend, WhatsApp Business API) —
happy to help design that when you're ready.
