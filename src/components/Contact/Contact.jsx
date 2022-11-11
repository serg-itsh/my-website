import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        <li></li>
      </ul>
      <h2>Елемент form</h2>
      {/* :enabled і :disabled
Дозволяють вибрати елемент в активному або відключеному стані, який визначається присутністю або відсутністю булевого атрибута disabled. Застосовуються до елементів <input>, <select> і <button>. */}
      <button className={styles.btn}>Active button</button>
<button className={styles.btn} disabled>Disabled button</button>


      <form
        className={styles.form}
        name="signup_form"
        autocomplete="on"
        novalidate
      >
        <label>
          Email
          <input type="email" name="email" required
          minlength="3"/>
        </label>

        <label>
          Password
          <input type="password" name="password" required 
          minlength="6" maxlength="12"           
           pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" 
           title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."/>
        </label>

        <button type="submit">Submit</button>
      </form>
      <h2>Елемент label</h2>
      
      <form>
        <label>
          Email
          <input type="email" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password"
          min="1" max="10" />
        </label>

        <button type="submit">Submit</button>
      </form>

      <form>
        <label for="user_email">Email</label>
        <input type="email" name="email" id="user_email" />

        <label for="user_password">Password</label>
        <input type="password" name="password" id="user_password" />

        <button type="submit">Submit</button>
      </form>
      <h2>Елемент input
      Атрибут autofocus</h2>
      
      <form>
        <label>
          Username
          <input type="text" name="username" autofocus required 
          pattern="^[a-zA-Z]+\s[a-zA-Z]+$" 
          title="Username must be two words separated by space."/>
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Атрибут placeholder</h2>

<form>
  <label>
    Username
    <input type="text" name="username" placeholder="Jacob Mercer" />
  </label>
  <button type="submit">Submit</button>
</form>

<h2>Пошта і пароль</h2>
<form>
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" minlength="5" maxlength="12" />
  </label>

  <button type="submit">Submit</button>
</form>

<h2>Радіо-кнопки (перемикачі)</h2>
<form>
  <p>Choose a color:</p>
  <label>
    <input type="radio" name="color" value="red" checked />
    Red
  </label>
  <label>
    <input type="radio" name="color" value="white" />
    White
  </label>
  <label>
    <input type="radio" name="color" value="green" />
    Green
  </label>
</form>

<h2>Чекбокси (прапорці)</h2>
<form>
  <p>What are your hobbies?</p>
  <label>
    <input type="checkbox" name="hobby" value="music" checked />
    Music
  </label>
  <label>
    <input type="checkbox" name="hobby" value="sports" checked />
    Sports
  </label>
  <label>
    <input type="checkbox" name="hobby" value="reading" />
    Reading
  </label>
</form>

<h2>Числа</h2>

<label>
  Age
  <input type="number" name="age" value="0" min="18" max="120" />
</label>

<label>
  Weight with 0.1 step value:
  <input type="number" name="weight" min="0" max="150" step="0.1" value="0" />
</label>

<label>
  Height with 0.4 step value:
  <input type="number" name="height" min="0" max="200" step="0.4" value="0" />
</label>

<h2>Телефонні номери</h2>
<form>
  <label>
    Phone number
    <input type="tel" name="phone_number" />
  </label>

  <button type="submit">Submit</button>
</form>

<h2>Повзунки</h2>
<label>
  Interest rate:
  <input
    type="range"
    name="interest_rate"
    value="40"
    min="0"
    max="100"
    step="20"
  />
</label>

<p>Selected value: <span class="js-selected-value">40</span></p>  

<h2>Дата та час</h2>
{/* Через різний зовнішній вигляд у різних браузерах і складність його зміни за допомогою CSS, замість нативного календаря найчастіше використовують готові JavaScript-бібліотеки. */}
<form>
  <label>
    Date
    <input type="date" min="1920-01-01" max="2020-01-01" />
  </label>

  <label>
    Time
    <input type="time" />
  </label>

  <label>
    Date and time
    <input type="datetime-local" min="1920-01-01T00:00" max="2020-01-01T00:00" />
  </label>

  <button type="submit">Submit</button>
</form>

<h2>Елемент textarea</h2>
{/* За замовчуванням елемент <textarea> можна розтягувати за горизонталлю і вертикаллю. Для того щоб контролювати можливість зміни розміру користувачем, в CSS є властивість resize. */}
<form>
  <label>
    Email
    <input type="email" name="email" placeholder="example@mail.com"/>
  </label>
  <label>
    Feedback
    <textarea name="feedback" rows="5" placeholder="Type your message here..."></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

<h2>Елемент select</h2>
{/* За замовчуванням вибраний перший елемент <option> зі списку. Це можна змінити, задавши необхідній опції атрибут-буль selected. */}

<label for="size">Size</label>
<select id="size" name="size">
  <option value="xs">Extra Small</option>
  <option value="s">Small</option>
  <option value="m" selected>Medium</option>
  <option value="l">Large</option>
</select>

<h2>Групування опцій</h2>
{/* Іноді потрібно розбити список на окремі групи, не пов'язані між собою. Для цих цілей існує тег <optgroup>. Щоб додати заголовок групи, використовується атрибут label. */}
<label for="month">Month</label>
<select name="month" id="month">
  <optgroup label="Summer">
    <option value="s6">June</option>
    <option value="s7">July</option>
    <option value="s8">August</option>
  </optgroup>

  <optgroup label="Autumn">
    <option value="s9">September</option>
    <option value="s10">October</option>
    <option value="s11">November</option>
  </optgroup>
</select>

<h2>Елемент datalist</h2>
<label for="fav">Choose your favourite browser</label>
<input list="browsers" name="fav" id="fav" />

<datalist id="browsers">
  <option>Edge</option>
  <option>Firefox</option>
  <option>Chrome</option>
  <option>Opera</option>
  <option>Safari</option>
</datalist>

<label for="state">Choose your state</label>
<input type="text" name="state" id="state" list="states" />
<datalist id="states">
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
</datalist>

<h2>Елементи fieldset і legend</h2>
{/* Елемент <fieldset> - це контейнер для групування декількох пов'язаних елементів у формі, а вкладений <legend> виконує роль заголовка групи. Пов'язані радіо-кнопки і чекбокси завжди повинні бути згруповані, інші типи полів групуються у разі потреби. */}
<form>
  <fieldset>
    <legend>Enter your contact details</legend>
    <label>
      Name
      <input type="text" name="username" />
    </label>
    <label>
      Email
      <input type="email" name="email" />
    </label>
  </fieldset>

  <fieldset>
    <legend>Your favourite programming language</legend>
    <label>
      <input type="checkbox" name="language" value="python"/>
      Python
    </label>
    <label>
      <input type="checkbox" name="language" value="js"/>
      JavaScript
    </label>
    <label>
      <input type="checkbox" name="language" value="ruby"/>
      Ruby
    </label>
  </fieldset>

  <fieldset>
    <legend>I want to receive</legend>
    <label>
      <input type="checkbox" name="newsletter" value="weekly"/>
      The weekly newsletter
    </label>
    <label>
      <input type="checkbox" name="newsletter" value="company_offers"/>
      Offers from the company
    </label>
    <label>
      <input type="checkbox" name="newsletter" value="associated_offers"/>
      Offers from associated companies
    </label>
  </fieldset>

  <button type="submit">Subscribe</button>
</form>

<h2>Групування з можливістю оформлення</h2>

<form class="form">
  <div className={styles.form_group} role="group" aria-labelledby="contact-details-head">
    <p id="contact-details-head">Enter your contact details</p>
    <label>
      Name
      <input type="text" name="username" />
    </label>
    <label>
      Email
      <input type="email" name="email" />
    </label>
  </div>

  <div className={styles.form_group} role="group" aria-labelledby="language-head">
    <p id="language-head">Your favourite programming language</p>
    <label>
      <input type="checkbox" name="language" value="python"/>
      Python
    </label>
    <label>
      <input type="checkbox" name="language" value="js"/>
      JavaScript
    </label>
    <label>
      <input type="checkbox" name="language" value="ruby"/>
      Ruby
    </label>
  </div>

  <div className={styles.form_group} role="group" aria-labelledby="newsletter-head">
    <p id="newsletter-head">I want to receive</p>
    <label>
      <input type="checkbox" name="newsletter" value="weekly"/>
      The weekly newsletter
    </label>
    <label>
      <input type="checkbox" name="newsletter" value="company_offers"/>
      Offers from the company
    </label>
    <label>
      <input type="checkbox" name="newsletter" value="associated_offers"/>
      Offers from associated companies
    </label>
  </div>

  <button type="submit">Subscribe</button>
</form>

<h2>:checked</h2>
{/* Застосовується до радіокнопок і чекбоксів, та дозволяє вибрати тільки відзначені поля. Наприклад, нехай при виборі чекбоксу текст мітки стає синім. Використовуючи селектор +, можна вибрати мітку, коли чекбокс відзначений, але для цього необхідно, щоб тег <label> був у розмітці після чекбоксу. */}

<form class="form">
  <div role="group" class="form-group">
    <b class="form-caption">What are your hobbies?</b>

    <div class="form-field">
      <input type="checkbox" className={styles.form_input} name="hobby" value="sports" id="sports"/>
      <label className={styles.form_label} for="sports">Sports</label>
    </div>

    <div class="form-field">
      <input type="checkbox" className={styles.form_input} name="hobby" value="music" id="music"/>
      <label className={styles.form_label} for="music">Music</label>
    </div>

    <div class="form-field">
      <input type="checkbox" className={styles.form_input} name="hobby" value="books" id="books"/>
      <label className={styles.form_label} for="books">Books</label>
    </div>
  </div>

  <button type="submit">Submit</button>
</form>

<h2>:in-range і :out-of-range</h2>
{/* Ці псевдокласи застосовуються до елементів <range>, <number> і <date>, якщо у них вказані атрибути min і max.

Створимо форму замовлення піци з полем для введення кількості штук. Якщо ввести число менше 1 або більше 10, колір рамки інпуту зміниться на червоний. Якщо значення залишається в рамках діапазону, колір буде зеленим. */}

<form class="form">
  <div class="form-field">
    <label for="amount-1" class="form-label">How many pizzas do you want to order?</label>
    <input 
    type="number" 
    required min="1" 
    max="10" step="1" 
    value="0" 
    name="amount-1" 
    id="amount-1" 
    className={styles.form_input}/>
  </div>
    <div class="form-field">
    <label for="amount-2" class="form-label">How many pizzas do you want to order?</label>
    <input 
    type="number" 
    required min="1" 
    max="10" step="1" 
    value="3" 
    name="amount-2" 
    id="amount-2" 
    className={styles.form_input}/>
  </div>
    <div class="form-field">
    <label for="amount-3" class="form-label">How many pizzas do you want to order?</label>
    <input 
    type="number" 
    required min="1"
     max="10" 
     step="1" 
     name="amount-3" 
     id="amount-3" 
     className={styles.form_input}/>
  </div>
  <button type="submit">Submit</button>
</form>

<h2>:required і :optional</h2>
{/* Застосовуються до елементів, залежно від присутності або відсутності атрибута required. Браузери показують, що поле є обов'язковим лише при спробі відправити форму. Псевдоклас :required дозволяє оформити поле і показати користувачеві, що воно обов'язкове ще до відправлення. Псевдоклас :optional на практиці використовується вкрай рідко. */}
<h2>:valid і :invalid</h2>
{/* Дозволяють вибрати елементи з валідним або невалідним введеним значенням. Перевірочні обмеження задаються атрибутами type, minlength, maxlength і pattern. */}
<h2>:placeholder-shown</h2>
{/* Застосовується, залежно від видимості плейсхолдера - значення атрибута placeholder. Вводьте текст в поля форми і колір рамки поля зміниться на синій, щойно зникне плейсхолдер. */}
<h2>Композиція псевдокласів</h2>
{/* Проблема застосування стилів до введення значень вирішується комбінацією декількох псевдокласів в одному селекторі. Складемо селектор так, щоб він застосувався тільки, коли в поле щось ввели. Доки поле порожнє і видно плейсхолдер - стилі не застосовуються. */}
{/* .form-input:not(:placeholder-shown):required:valid {
  border-color: green;
}

.form-input:not(:placeholder-shown):required:invalid {
  border-color: red;
} */}

<h2>:focus-within</h2>
{/* Застосовується до елемента, коли він сам або елементи всередині нього отримують фокус. На відміну від :focus, який вибирає сам елемент, що отримав фокус, :focus-within працює для предків. Це дозволяє застосувати стилі до мітки, форми або окремих її частин, коли користувач взаємодіє з полями. */}

    </div>
  );
};

export default Contact;
