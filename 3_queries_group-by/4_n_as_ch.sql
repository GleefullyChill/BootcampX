SELECT cohorts.name as cohort,
COUNT(assignment_submissions.id) AS total_submissions
FROM students
JOIN assignment_submissions ON students.id = student_id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY COUNT(assignment_submissions.id) DESC;