## test_1

Создать абстрактный класс `AClass` у которого будет свойство `Numbers` типа `Array`, который будет содержать `n` натуральных чисел. 
Также `AClass` должен иметь метод `fill`, который заполняет массив `Numbers` случайными числами; 
метод `factorial`, который возвращает массив факториалов из массива `Numbers`; 
и абстрактный метод `sort`. 

Конструктор принимает один параметр `n` и вызывает метод `fill`.

Метод `fill` можно вызывать только из методов класса `AClass`. 
Метод `factorial` может вызываться из класса `AClass` и из дочерних классов.

Реализовать два дочерних класса `Class1` и `Class2` с методом `sort` который сортирует массив `Numbers`, а затем выдает массив факториалов.
Способы сортировки в классах `Class1` и `Class2` должны различаться.

## test_2

Таблица `Students` имеет поля `StudentId`, `FirstName`, `LastName`, `Group` и содержит информацию о студентах института. 
Таблица `Exams` имеет поля `StudentId`, `ExamName`, `Result` и содержит результаты экзаменов студентов.
 * написать SQL запрос, который выводит имена и фамилии студентов у которых больше двух экзаменов с результатом меньше `3`.
 * написать SQL запрос, который выводит название групп, в которых таких студентов больше `10`
