SELECT students.name AS name, AVG(duration) as average_assignment_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY name
ORDER BY AVG(duration) DESC;