# MAV Tech Test

## Introduction

The task is to build the job card list as shown in designs in Figma. 
Please approach the setup of the app as you would with a production app.

The required font `Hind` can be found in `web\src\fonts`.

The required SVGs can be found in `web\src\svgs`.

The required images for each job can be found in `web\public\jobs`.

The web project uses Create React App and the default files have been left in place as they demonstrate
how to import styles and SVGs and a basic test. Please feel free to remove these.

Figma:

https://www.figma.com/file/ug5zBFOzZOU2b1K2sGHEMV/MAV-tech-test

To do:

- Consume the jobs from the `/jobs` endpoint and render the list of job cards
- The styles for the app should be responsive and work across desktop and mobile
- The job card should show `Today` if the job start date is the same as the current date
  - For example, if the date is currently 05/09/22:
  - Job start time 05/09/22 09:00 = Today
  - Job start time 05/09/22 18:30 = Today
  - Job start time 06/09/22 09:00 = Wednesday
  - Job start time 06/09/22 18:30 = Wednesday
- The job card should show `now` if the job start time is the same date and hour as the current date and hour
  - For example, if it is currently 05/09/22 09:05:
  - Job start time 05/09/22 09:00 = now
  - Job start time 05/09/22 09:59 = now
  - Job start time 05/09/22 10:00 = 10:00
  - Job start time 05/09/22 08:59 = 08:59
  - Job start time 06/09/22 09:00 = 09:00 
  - Job start time 06/09/22 09:59 = 09:59
- Add test coverage
- Time should be tested, i.e providing test cases for `Today` and `Any time between now and 21:00`
- Please review the code for the API, there are various smells and design issues that could be improved which we can discuss during the follow-up call.
    - What issues can you see?
    - How would you improve them?
    - How would you approach things if this were a production app?

## Setup

To run the API:

`cd api`

`npm start`

The API has a jobs endpoint that returns the array of jobs found in the designs:

`visit http://localhost:3001/jobs`

To run the website:

`cd web`

`npm start`

`visit http://localhost:3000/`
