# HOMEWORK_13_JS
My homework in DanIt


1.Опишіть своїми словами різницю між функціями setTimeout() і setInterval()`.
setTimeout дозволяє викликати функцію один раз через певний проміжок часу.
setInterval дозволяє викликати функцію регулярно, повторюючи виклик через певний проміжок часу.

2.Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
Це планує виконання функції якнайшвидше. Але планувальник викликає його лише після завершення виконання поточного скрипту.

3.Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
Бо сама функція, а особливо змінні на які вона посилаєтсья продовжуть займати пам'ять браузера.