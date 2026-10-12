# EduCenter demo frontend

EduCenter is a multi-page education-center website built with plain HTML, CSS, and JavaScript. It uses demo records and browser `localStorage`; there is no backend.

## Run locally
1. Extract `educenter.zip`.
2. Open the folder in VS Code.
3. Recommended: run `index.html` using the **Live Server** extension. You can also open `index.html` directly in a browser.

## Pages
- `index.html` — landing page
- `courses.html` — course search and filters
- `course-detail.html?id=web` — course details
- `register.html` — demo application form
- `login.html` — demo role selection and login
- `student.html` — learner dashboard
- `admin.html` — student CRUD, applications, demo payment summary

## Demo logins
- Student: `student` / `demo123`
- Admin: `admin` / `admin123`

## Notes
- Demo data is stored in `localStorage` under `educenter_demo_v1`.
- Student management and submitted applications persist in the current browser.
- “Reset demo data” restores the initial records.
- Login is only a UI demonstration. It is not secure authentication. Do not use real personal or payment data.
- The Google Fonts import is optional; if offline, the site falls back to system fonts.
# markazsayt
