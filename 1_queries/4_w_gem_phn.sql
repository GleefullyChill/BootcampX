SELECT name, id, cohort_id
FROM students
WHERE phone IS NULL
AND NOT email = '%gmail.com';