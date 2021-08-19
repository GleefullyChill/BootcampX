const { Pool } = require('pg');

const pool = new Pool({
  user: 'officer',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});
const cohort = process.argv[2];
const limit = process.argv[3];
pool.query(`
SELECT students.id, students.name student, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${cohort}%'
LIMIT ${limit};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));
