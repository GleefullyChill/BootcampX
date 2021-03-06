const { Pool } = require('pg');

const pool = new Pool({
  user: 'officer',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});
const cohort = `${process.argv[2]}`;
pool.query(`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name = $1
  ORDER BY teacher;
`, [cohort])
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));