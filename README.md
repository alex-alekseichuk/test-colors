# Colors App

- Run server side
- Then run client app

See README files in subfolders.

Client application is React/Redux with react-spring for simple animation.

Server side is REST API by .NET Core 7 + EF to Sqlite DB.


### Сервер:    

Реализовать API в котором есть 2 метода- Add, Delete. Метод Add принимает строку. При вызове метода Add, строка сохраняется в БД, при вызове метода Delete - удаляется.    
Стек технологий ASP.Net Core, EF, БД- на выбор.    
    
### Клиент:

1. Сделать страничку, на которой будет 2 кнопки: Добавить и Удалить.    
Под кнопками располагается горизонтальный лист.    
При нажатии на кнопку Добавить в лист, на первую позицию добавляется квадратный элемент, ширина которого равна 20% от ширины экрана, цвет элемента - рандомный. Так же необходимо отправлять цвет в API в метод Add.    
При нажатии на кнопку Удалить - удаляется последний элемент из листа. Так же необходимо вызывать API для удаления элемента на сервере.    
При реализации необходимо использовать Redux Toolkit, при добавлении и удалении нужно сделать анимацию, используя react-spring.    

2. Анимация.    
При добавлении нового элемента, все существующие элементы должны плавно смещаться вправо, новый элемент должен выезжать с левой стороны экрана. При удалении, последний элемент должен уезжать вправо, все остальные элементы должны находиться на месте.

