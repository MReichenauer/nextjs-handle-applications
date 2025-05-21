# Web application to track job-applications.

## Overview

I wanted to grasp an understanding for Next.js doing a poject that i could have personal use for. So i decided to simulate an excel sheat that i currently use to help me keep track of my applications.

## Following technologies are used and is all new to me

- **Next.js** - React based framework.
- **Supabase** - PostgreSQL based backend-service with build in authentication.
- **ShadCN** - React component libary.
- **Tailwind CSS** - Utility-first CSS framework.

## Database Structure

### Companies Table

| Column     | Type                    |
| ---------- | ----------------------- |
| id         | int8                    |
| name       | text                    |
| created_at | timestamp with timezone |

### Applications Table

| Column        | Type                    |
| ------------- | ----------------------- |
| id            | int8                    |
| title         | text                    |
| description   | text                    |
| type          | text                    |
| status        | text                    |
| link          | text                    |
| response_date | timestamp with timezone |
| company_id    | int8 (foreign key)      |
| created_at    | timestamp with timezone |

### To run the repo locally follow the steps bellow

- Clone repository
- Create a new Supabase project following the steps in **connect-supabase-steps.tsx**
- Create **.env.local** following **.env.example**.
- Enter root directory of the project and run the following:
  - **npm i** - Install dependecies.
  - **npm run dev** - Run the local enviorment.
- Local enviorment should now be found at **http://localhost:3000**
