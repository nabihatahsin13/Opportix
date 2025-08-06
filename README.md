# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🧠 ## How It Works

1. Browse Jobs

Users land on the homepage and see a list of job postings.

Each job shows the title, company, location, and a short description.



2. Search & Filter

Users can search jobs by keywords (e.g., "developer", "marketing").

Filter options allow refining results by location, category, or job type.



3. View Job Details

Clicking on a job opens a detailed view.

Includes full job description, requirements, salary info, and company profile.



4. Register/Login

Users create an account or log in with their credentials.

Authentication can be powered by Firebase, custom backend, or local storage (for demo purposes).



5. Apply for a Job

After logging in, users can click the “Apply Now” button on any job.

Application form pops up or navigates to a page where the user fills in details (resume, cover letter, etc.).

On submit, the application is saved (via API or local storage), and the employer is notified (if backend is used).



6. Save Jobs

Users can click a ❤️ icon to save jobs to a personal list.

Saved jobs are accessible from the profile/dashboard.





## 📝 How People Apply for Jobs

1. Step 1: Go to the job listing page


2. Step 2: Click on a job to view full details


3. Step 3: Click the “Apply Now” button


4. Step 4: If not logged in, user is redirected to login/register


5. Step 5: Fill out the application form (e.g., name, email, resume)


6. Step 6: Click Submit Application


7. Step 7: Success message is shown, and the job is marked as "Applied"


