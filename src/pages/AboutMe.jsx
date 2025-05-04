import React from 'react';
import '../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <div className="about-container">
      <h1>Про мене</h1>

      <section>
        <h2>В житті</h2>
        <p>
          Працюю заради своєї мрії: стати Frontend розробником, а потім можливо Fullstack. Розумію те, що потрібно викластися зараз на повну, щоб потім було легше. В житті я спокійний та веселий, напевно, не знаю як мене бачуть інші. Розвиваюсь зараз у всьому, що принесе мені користь в майбутньому, поки молодий, можна забити голову корисним, щоб не було занадто пізно:) 
        </p>
      </section>

      <section>
        <h2>Робота та навчання</h2>
        <p>
          Навчаюсь на спеціальності "Комп’ютерні науки". Працюю садівником, не дуже схоже на професію моєї мрії, але іншої роботи поки немає.
        </p>
      </section>

      <section>
        <h2>Мої проєкти</h2>

        <h3>HTML + CSS</h3>
        <ul>
          <li>
            <a href="https://github.com/gaulterlust/css-pratice.git" target="_blank" rel="noreferrer">my project</a>
          </li>
        </ul>

        <h3>JavaScript</h3>
        <ul>
          <li>
            <a href="https://github.com/gaulterlust/js-DOM1.git" target="_blank" rel="noreferrer">my project</a>
          </li>
        </ul>

        <h3>React</h3>
        <ul>
          <li>
            <a href="https://github.com/gaulterlust/react-props.git" target="_blank" rel="noreferrer">my project</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
