
-- запрос, который выводит имена и фамилии студентов у которых больше двух экзаменов с результатом меньше 3.

SELECT FirstName, LastName 
FROM Students 
JOIN Exams 
WHERE Students.StudentId == Exams.StudentId and Result < 3 
GROUP BY FirstName, LastName 
HAVING count(Result) > 2

-- запрос, который выводит название групп, в которых таких студентов больше 10

SELECT Group
FROM Students 
JOIN Exams 
WHERE Students.StudentId == Exams.StudentId and Result < 3 
GROUP BY Group
HAVING count(Students.StudentId) > 10;