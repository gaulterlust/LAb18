import React from 'react';
import '../styles/MyFuture.css';


export default function MyFuture() {
  return (
    <div className="future-container" style={{ padding: '20px' }}>
      <h1>Моє майбутнє</h1>

      <section>
        <h2>Кроки до моєї мети</h2>
        <ol>
          <li> Пройти повний курс по Frontend, а потім і Fullstack</li>
          <li> Закнчити Університет та влаштуватися працювати на зарубіжну компанію(але сподіваюсь влаштватися на роботу раніше) </li>
          <li> Відкрити свій маленький бізнес, а з чим він буде повязаний поки сказати не можу, так як я ще у великих роздумах над цим. </li>
        </ol>
      </section>

      <section>
        <h2>Мотивація</h2>
        <blockquote>
  <p>
    <em>
      "Just keep moving forward and don't give a shit about what anybody thinks. Do what you have to do, for you."
    </em>
  </p>
  <p>
    <em>
      "Просто йди вперед і не переймайся тим, що думають інші. Роби те, що потрібно тобі, для себе."
    </em>
  </p>
  <p style={{ textAlign: 'right', marginTop: '0.5rem', fontWeight: 'bold' }}>
    — Johnny Depp
  </p>
</blockquote>
      </section>

      <section>
        <h2>Робота мрії</h2>
        <p>
          Першим часом працювати на когось, потім ,звісно, хотілося б працювати на себе. 
        </p>
      </section>
    </div>
  );
}
