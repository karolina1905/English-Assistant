const grammarTopics = [
  {
    id: 'present-perfect',
    title: 'Present Perfect',
    sub: 'Have you ever...?',
    content: `
      <h2>Present Perfect</h2>
      <p class="subtitle">Коли дія в минулому, але важливий РЕЗУЛЬТАТ зараз</p>
      <h3>Як утворюється</h3>
      <div class="formula">have/has + V3 (третя форма або -ed)</div>
      <ul class="examples">
        <li>I <b>have visited</b> London. <em>Я відвідував Лондон. (і знаю яке воно)</em></li>
        <li>She <b>has never eaten</b> sushi. <em>Вона ніколи не їла суші.</em></li>
        <li><b>Have</b> you ever <b>flown</b> on a plane? <em>Ти коли-небудь літав?</em></li>
      </ul>
      <h3>Ключові слова</h3>
      <ul class="examples">
        <li><b>ever / never</b> — будь-коли / ніколи</li>
        <li><b>already / yet / just</b> — вже / ще / щойно</li>
        <li><b>for / since</b> — протягом / з тих пір</li>
      </ul>
      <div class="tip-box">Present Perfect vs Past Simple: <br>✅ "I <b>have seen</b> this film" (колись, час не важливий)<br>✅ "I <b>saw</b> this film <b>yesterday</b>" (конкретний час)</div>
    `
  },
  {
    id: 'past-continuous',
    title: 'Past Continuous',
    sub: 'Was / were + -ing',
    content: `
      <h2>Past Continuous</h2>
      <p class="subtitle">Дія тривала в певний момент минулого</p>
      <div class="formula">was / were + verb-ing</div>
      <ul class="examples">
        <li>I <b>was sleeping</b> at 10 pm. <em>Я спав о 10 вечора.</em></li>
        <li>They <b>were playing</b> when it started to rain. <em>Вони грали, коли почався дощ.</em></li>
      </ul>
      <h3>Часто поєднується з Past Simple</h3>
      <ul class="examples">
        <li>While I <b>was cooking</b>, the phone <b>rang</b>. <em>Поки я готував, задзвонив телефон.</em></li>
        <li>She <b>was walking</b> to school when she <b>met</b> him. <em>Вона йшла до школи, коли зустріла його.</em></li>
      </ul>
      <div class="tip-box">While = тривала дія (Past Continuous)<br>When = короткий момент (Past Simple)</div>
    `
  },
  {
    id: 'conditionals',
    title: '1st & 2nd Conditional',
    sub: 'If + ...',
    content: `
      <h2>Умовні речення (Conditionals)</h2>
      <p class="subtitle">Якщо... то...</p>
      <h3>1st Conditional — реальна ситуація</h3>
      <div class="formula">If + Present Simple → will + V1</div>
      <ul class="examples">
        <li>If it <b>rains</b>, I <b>will stay</b> home. <em>Якщо піде дощ, я залишусь вдома.</em></li>
        <li>If you <b>study</b> hard, you <b>will pass</b>. <em>Якщо будеш вчитися, здаш.</em></li>
      </ul>
      <h3>2nd Conditional — нереальна ситуація</h3>
      <div class="formula">If + Past Simple → would + V1</div>
      <ul class="examples">
        <li>If I <b>had</b> a million dollars, I <b>would travel</b> the world. <em>Якби в мене був мільйон, я б подорожував.</em></li>
        <li>If she <b>were</b> taller, she <b>would be</b> a model. <em>Якби вона була вища...</em></li>
      </ul>
      <div class="tip-box">В 2nd Conditional: "If I were you..." (не "was") — це граматична норма!</div>
    `
  },
  {
    id: 'modals',
    title: 'Modal Verbs',
    sub: 'can, must, should...',
    content: `
      <h2>Модальні дієслова</h2>
      <p class="subtitle">Виражають можливість, обов'язок, дозвіл</p>
      <h3>can / could — вміти / могти</h3>
      <ul class="examples">
        <li>I <b>can</b> swim. <em>Я вмію плавати.</em></li>
        <li><b>Could</b> you help me? <em>Чи не міг би ти допомогти? (ввічливо)</em></li>
      </ul>
      <h3>must / have to — треба</h3>
      <ul class="examples">
        <li>You <b>must</b> wear a seatbelt. <em>Треба пристебнутися. (правило)</em></li>
        <li>I <b>have to</b> go now. <em>Мені треба йти. (обставини)</em></li>
      </ul>
      <h3>should — варто</h3>
      <ul class="examples">
        <li>You <b>should</b> sleep more. <em>Тобі варто більше спати.</em></li>
        <li>You <b>shouldn't</b> eat so much sugar. <em>Не варто їсти стільки цукру.</em></li>
      </ul>
      <h3>may / might — можливо</h3>
      <ul class="examples">
        <li>It <b>might</b> rain tomorrow. <em>Завтра можливо буде дощ.</em></li>
      </ul>
    `
  },
  {
    id: 'passive',
    title: 'Passive Voice',
    sub: 'be + V3',
    content: `
      <h2>Пасивний стан</h2>
      <p class="subtitle">Коли важлива дія, а не хто її виконав</p>
      <div class="formula">am / is / are / was / were + V3</div>
      <h3>Приклади різних часів</h3>
      <ul class="examples">
        <li>This book <b>is written</b> by Rowling. <em>Ця книга написана...</em></li>
        <li>The window <b>was broken</b> yesterday. <em>Вікно було розбито вчора.</em></li>
        <li>The email <b>has been sent</b>. <em>Листа відправили (і він відправлений).</em></li>
        <li>The house <b>will be built</b> next year. <em>Будинок збудують наступного року.</em></li>
      </ul>
      <div class="tip-box">Щоб сказати ким — додай <b>by</b>: The song was written <b>by Taylor Swift</b>.</div>
    `
  },
  {
    id: 'reported',
    title: 'Reported Speech',
    sub: 'He said that...',
    content: `
      <h2>Непряма мова</h2>
      <p class="subtitle">Переказуємо чужі слова</p>
      <h3>Зсув часів назад</h3>
      <ul class="examples">
        <li>"I <b>am</b> tired" → He said he <b>was</b> tired.</li>
        <li>"I <b>will come</b>" → She said she <b>would come</b>.</li>
        <li>"I <b>have done</b> it" → He said he <b>had done</b> it.</li>
      </ul>
      <h3>Питання в непрямій мові</h3>
      <ul class="examples">
        <li>"Where <b>are</b> you?" → She asked where I <b>was</b>. <em>(без знаку питання!)</em></li>
        <li>"Do you like it?" → He asked if I <b>liked</b> it.</li>
      </ul>
      <div class="tip-box">say vs tell: He <b>said</b> that... / He <b>told me</b> that... (tell потребує об'єкта)</div>
    `
  },
  {
    id: 'articles',
    title: 'Articles',
    sub: 'a, an, the',
    content: `
      <h2>Артиклі a / an / the</h2>
      <p class="subtitle">Одна з найскладніших тем, але є правила!</p>
      <h3>A / An — вперше, невизначено</h3>
      <ul class="examples">
        <li>I saw <b>a</b> cat in the garden. <em>якогось кота (вперше згадуємо)</em></li>
        <li>She is <b>an</b> engineer. <em>перед голосним звуком</em></li>
      </ul>
      <h3>The — конкретний, відомий</h3>
      <ul class="examples">
        <li><b>The</b> cat is sleeping. <em>той кіт, про якого говорили</em></li>
        <li><b>The</b> sun, <b>the</b> moon, <b>the</b> Eiffel Tower</li>
        <li>Can you close <b>the</b> door? <em>конкретні двері</em></li>
      </ul>
      <h3>Без артикля</h3>
      <ul class="examples">
        <li>I like <b>music</b> / <b>cats</b> / <b>coffee</b>. <em>загалом, як клас</em></li>
        <li>She goes to <b>school</b> / <b>work</b> / <b>bed</b>. <em>за функцією місця</em></li>
      </ul>
    `
  },
  {
    id: 'comparatives',
    title: 'Comparatives',
    sub: 'bigger, more beautiful',
    content: `
      <h2>Ступені порівняння</h2>
      <p class="subtitle">Порівнюємо людей, речі, ситуації</p>
      <h3>Comparative (вищий ступінь)</h3>
      <div class="formula">short adj + -er / more + long adj + than</div>
      <ul class="examples">
        <li>This phone is <b>faster than</b> mine. <em>коротке: fast→faster</em></li>
        <li>English is <b>more interesting than</b> maths. <em>довге: +more</em></li>
        <li>Today is <b>better than</b> yesterday. <em>неправильне: good→better</em></li>
      </ul>
      <h3>Superlative (найвищий ступінь)</h3>
      <div class="formula">the + adj + -est / the most + adj</div>
      <ul class="examples">
        <li>She is <b>the tallest</b> in class.</li>
        <li>This is <b>the most delicious</b> pizza I've ever had!</li>
        <li>He is <b>the best</b> player. <em>good→the best</em></li>
      </ul>
      <div class="tip-box">Неправильні: good→better→the best | bad→worse→the worst | far→further→the furthest</div>
    `
  },
  {
    id: 'future',
    title: 'Future: will & going to',
    sub: 'Говоримо про майбутнє',
    content: `
      <h2>Майбутній час</h2>
      <p class="subtitle">Два способи говорити про майбутнє</p>
      <h3>Will — рішення прямо зараз / передбачення</h3>
      <div class="formula">will + V1</div>
      <ul class="examples">
        <li>I <b>will help</b> you! <em>прямо зараз вирішив допомогти</em></li>
        <li>I think it <b>will rain</b> tomorrow. <em>особисте передбачення</em></li>
        <li><b>Will</b> you come to the party? <em>питання/прохання</em></li>
      </ul>
      <h3>Going to — план заздалегідь / очевидне</h3>
      <div class="formula">am/is/are going to + V1</div>
      <ul class="examples">
        <li>I<b>'m going to</b> study medicine. <em>вже вирішив раніше</em></li>
        <li>Look at those clouds — it<b>'s going to</b> rain! <em>очевидно по ознаках</em></li>
      </ul>
      <div class="tip-box">Розклад: "The train <b>leaves</b> at 7 am" — Present Simple для розкладу!</div>
    `
  },
  {
    id: 'gerund-inf',
    title: 'Gerund vs Infinitive',
    sub: 'like doing / want to do',
    content: `
      <h2>Герундій та інфінітив</h2>
      <p class="subtitle">Після яких дієслів що ставити?</p>
      <h3>Після цих — Gerund (-ing)</h3>
      <ul class="examples">
        <li>enjoy, love, hate, mind, finish, avoid, suggest, keep, miss</li>
        <li>I <b>enjoy reading</b> books. / She <b>finished writing</b> the essay.</li>
        <li>He <b>avoids eating</b> junk food.</li>
      </ul>
      <h3>Після цих — Infinitive (to + V)</h3>
      <ul class="examples">
        <li>want, need, decide, hope, plan, promise, refuse, agree</li>
        <li>I <b>want to travel</b>. / She <b>decided to leave</b>.</li>
        <li>He <b>promised to help</b> me.</li>
      </ul>
      <div class="tip-box">like / love / hate — можна і так, і так!<br>I like <b>swimming</b> = I like <b>to swim</b> ✓</div>
    `
  },
  {
    id: 'question-tags',
    title: 'Question Tags',
    sub: "It's nice, isn't it?",
    content: `
      <h2>Розділові питання</h2>
      <p class="subtitle">Маленький хвостик в кінці речення</p>
      <h3>Правило: позитивне → негативний хвіст</h3>
      <div class="formula">+ sentence, — tag? / — sentence, + tag?</div>
      <ul class="examples">
        <li>It's cold today, <b>isn't it?</b></li>
        <li>You like pizza, <b>don't you?</b></li>
        <li>She can swim, <b>can't she?</b></li>
        <li>They haven't called, <b>have they?</b></li>
        <li>You're not serious, <b>are you?</b></li>
      </ul>
      <div class="tip-box">I am right, <b>aren't I?</b> — виняток! (не "amn't I")</div>
    `
  },
  {
    id: 'quantifiers',
    title: 'Quantifiers',
    sub: 'some, any, much, many...',
    content: `
      <h2>Кількісні займенники</h2>
      <p class="subtitle">Скільки чого є</p>
      <h3>Some / Any</h3>
      <ul class="examples">
        <li>I have <b>some</b> money. <em>позитивне речення</em></li>
        <li>Do you have <b>any</b> questions? <em>питання і заперечення</em></li>
        <li>Would you like <b>some</b> coffee? <em>пропозиція — some!</em></li>
      </ul>
      <h3>Much / Many / A lot of</h3>
      <ul class="examples">
        <li><b>Much</b> time, <b>much</b> money <em>(незлічувані, заперечення/питання)</em></li>
        <li><b>Many</b> people, <b>many</b> books <em>(злічувані)</em></li>
        <li><b>A lot of</b> / <b>lots of</b> — і ті, й інші <em>(позитивне)</em></li>
      </ul>
      <h3>Few / Little</h3>
      <ul class="examples">
        <li><b>Few</b> people know this. <em>мало людей (майже ніхто)</em></li>
        <li><b>A few</b> friends came. <em>кілька (і добре!)</em></li>
        <li>I have <b>little</b> time. <em>мало часу</em></li>
      </ul>
    `
  }
];

const vocabData = [
  // TRAVEL
  { word: 'destination', pron: '/ˌdestɪˈneɪʃən/', type: 'noun', meaning: 'місце призначення', example: 'Paris is my dream destination.', cat: 'travel' },
  { word: 'itinerary', pron: '/aɪˈtɪnərəri/', type: 'noun', meaning: 'план подорожі', example: "Here's our itinerary for the trip.", cat: 'travel' },
  { word: 'accommodation', pron: '/əˌkɒməˈdeɪʃən/', type: 'noun', meaning: 'проживання', example: 'We booked accommodation online.', cat: 'travel' },
  { word: 'departure', pron: '/dɪˈpɑːtʃər/', type: 'noun', meaning: 'відправлення', example: 'Departure is at 8 am.', cat: 'travel' },
  { word: 'customs', pron: '/ˈkʌstəmz/', type: 'noun', meaning: 'митниця', example: 'We passed through customs quickly.', cat: 'travel' },
  { word: 'souvenir', pron: '/ˌsuːvəˈnɪər/', type: 'noun', meaning: 'сувенір', example: 'I bought a souvenir for my mum.', cat: 'travel' },
  // HEALTH
  { word: 'symptom', pron: '/ˈsɪmptəm/', type: 'noun', meaning: 'симптом', example: "What are your symptoms?", cat: 'health' },
  { word: 'prescription', pron: '/prɪˈskrɪpʃən/', type: 'noun', meaning: 'рецепт', example: 'The doctor gave me a prescription.', cat: 'health' },
  { word: 'appointment', pron: '/əˈpɔɪntmənt/', type: 'noun', meaning: 'запис до лікаря', example: 'I made an appointment for Tuesday.', cat: 'health' },
  { word: 'exhausted', pron: '/ɪɡˈzɔːstɪd/', type: 'adj', meaning: 'виснажений', example: 'I was exhausted after the race.', cat: 'health' },
  { word: 'recovery', pron: '/rɪˈkʌvəri/', type: 'noun', meaning: 'одужання', example: "She made a full recovery.", cat: 'health' },
  // WORK
  { word: 'colleague', pron: '/ˈkɒliːɡ/', type: 'noun', meaning: 'колега', example: 'My colleagues are very helpful.', cat: 'work' },
  { word: 'deadline', pron: '/ˈdedlaɪn/', type: 'noun', meaning: 'дедлайн', example: 'The deadline is Friday.', cat: 'work' },
  { word: 'promote', pron: '/prəˈməʊt/', type: 'verb', meaning: 'підвищити (у посаді)', example: 'She was promoted to manager.', cat: 'work' },
  { word: 'resign', pron: '/rɪˈzaɪn/', type: 'verb', meaning: 'звільнитися', example: 'He resigned from his job.', cat: 'work' },
  { word: 'salary', pron: '/ˈsæləri/', type: 'noun', meaning: 'зарплата', example: 'The salary is negotiable.', cat: 'work' },
  // FEELINGS
  { word: 'frustrated', pron: '/frʌˈstreɪtɪd/', type: 'adj', meaning: 'роздратований, розчарований', example: "I'm frustrated with this situation.", cat: 'feelings' },
  { word: 'relieved', pron: '/rɪˈliːvd/', type: 'adj', meaning: 'з полегшенням', example: 'I was relieved to hear the news.', cat: 'feelings' },
  { word: 'overwhelmed', pron: '/ˌəʊvəˈwelmd/', type: 'adj', meaning: 'перевантажений, розгублений', example: 'I felt overwhelmed at first.', cat: 'feelings' },
  { word: 'confident', pron: '/ˈkɒnfɪdənt/', type: 'adj', meaning: 'впевнений', example: 'She feels confident in English now.', cat: 'feelings' },
  { word: 'nervous', pron: '/ˈnɜːvəs/', type: 'adj', meaning: 'нервувати', example: 'I was nervous before the test.', cat: 'feelings' },
  { word: 'proud', pron: '/praʊd/', type: 'adj', meaning: 'гордий', example: "I'm proud of my progress.", cat: 'feelings' },
  // TECH
  { word: 'download', pron: '/ˈdaʊnləʊd/', type: 'verb', meaning: 'завантажити', example: 'Download the app from the store.', cat: 'tech' },
  { word: 'update', pron: '/ˈʌpdeɪt/', type: 'verb', meaning: 'оновити', example: 'Update your password regularly.', cat: 'tech' },
  { word: 'scroll', pron: '/skrəʊl/', type: 'verb', meaning: 'прокручувати', example: 'Scroll down to see more.', cat: 'tech' },
  { word: 'subscribe', pron: '/səbˈskraɪb/', type: 'verb', meaning: 'підписатися', example: 'Subscribe to the newsletter.', cat: 'tech' },
  { word: 'device', pron: '/dɪˈvaɪs/', type: 'noun', meaning: 'пристрій', example: 'This app works on all devices.', cat: 'tech' },
  // COMMON
  { word: 'although', pron: '/ɔːlˈðəʊ/', type: 'conj', meaning: 'хоча', example: 'Although it rained, we had fun.', cat: 'common' },
  { word: 'however', pron: '/haʊˈevər/', type: 'adv', meaning: 'однак, проте', example: 'However, there is one problem.', cat: 'common' },
  { word: 'furthermore', pron: '/ˈfɜːðəmɔː/', type: 'adv', meaning: 'крім того', example: 'Furthermore, the price is low.', cat: 'common' },
  { word: 'therefore', pron: '/ˈðeəfɔː/', type: 'adv', meaning: 'тому, отже', example: 'I was tired; therefore, I slept.', cat: 'common' },
  { word: 'unless', pron: '/ənˈles/', type: 'conj', meaning: 'якщо не, хіба що', example: "I won't go unless you come too.", cat: 'common' },
  { word: 'manage', pron: '/ˈmænɪdʒ/', type: 'verb', meaning: 'вдатись, впоратись', example: 'Did you manage to find it?', cat: 'common' },
  { word: 'realize', pron: '/ˈrɪəlaɪz/', type: 'verb', meaning: 'усвідомити', example: 'I realized I was wrong.', cat: 'common' },
  { word: 'tend', pron: '/tend/', type: 'verb', meaning: 'мати схильність', example: 'I tend to wake up early.', cat: 'common' },
  { word: 'recommend', pron: '/ˌrekəˈmend/', type: 'verb', meaning: 'рекомендувати', example: 'I recommend this restaurant.', cat: 'common' },
  { word: 'suggest', pron: '/səˈdʒest/', type: 'verb', meaning: 'пропонувати', example: 'Can you suggest something?', cat: 'common' },
];

const phrases = [
  { situation: 'Погодитись', english: "That's a good point.", ukrainian: 'Це слушна думка.' },
  { situation: 'Не погодитись', english: "I see what you mean, but I think...", ukrainian: 'Я розумію тебе, але думаю...' },
  { situation: 'Попросити повторити', english: "Sorry, could you say that again?", ukrainian: 'Вибачте, можете повторити?' },
  { situation: 'Не розумієш', english: "I'm not sure I follow. What do you mean?", ukrainian: 'Я не зовсім розумію. Що ти маєш на увазі?' },
  { situation: 'Виграти час', english: "That's a great question. Let me think...", ukrainian: 'Гарне питання. Дозвольте подумати...' },
  { situation: 'Думка', english: "In my opinion... / I think... / As far as I know...", ukrainian: 'На мою думку... / Я вважаю... / Наскільки я знаю...' },
  { situation: 'Погодитись частково', english: "That's true to some extent, but...", ukrainian: 'Це правда до певної міри, але...' },
  { situation: 'Зробити паузу', english: "Well... / Hmm... / Actually...", ukrainian: 'Ну... / Хм... / Насправді...' },
  { situation: 'Зателефонувати', english: "Could I speak to...? / I'm calling about...", ukrainian: 'Чи можу я поговорити з...? / Я телефоную з приводу...' },
  { situation: 'Кафе / ресторан', english: "Could I have the menu, please? / I'd like to order...", ukrainian: 'Можна меню? / Я б хотів замовити...' },
  { situation: 'Магазин', english: "Do you have this in a different size/colour?", ukrainian: 'У вас є це іншого розміру/кольору?' },
  { situation: 'Лікар', english: "I have a pain in... / I've had a headache since morning.", ukrainian: 'У мене болить... / Голова болить з ранку.' },
  { situation: 'Порадити', english: "If I were you, I'd... / You should definitely...", ukrainian: 'Якби я був тобою, я б... / Тобі точно варто...' },
  { situation: 'Здивуватись', english: "No way! / Are you serious? / That's incredible!", ukrainian: 'Та ну! / Серйозно? / Неймовірно!' },
  { situation: 'Комплімент', english: "Your English is really improving! / Well done!", ukrainian: 'Твоя англійська помітно покращується! / Молодець!' },
  { situation: 'Попрощатись', english: "It was nice talking to you. Take care!", ukrainian: 'Було приємно поговорити. Бережи себе!' },
];

// ===== INIT =====

let currentGrammarTopic = null;
let vocabFilter = 'all';

function init() {
  buildGrammar();
  buildVocab();
  buildPhrases();
}

// ===== NAVIGATION =====
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('section-'+id).classList.add('active');
  const tabs = document.querySelectorAll('.nav-tab');
  const map = {home:0,grammar:1,vocab:2,phrases:3};
  if(map[id]!==undefined) tabs[map[id]].classList.add('active');
}

// ===== GRAMMAR =====
function buildGrammar() {
  const grid = document.getElementById('topic-grid');
  const panels = document.getElementById('grammar-panels');
  grammarTopics.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'topic-btn';
    btn.innerHTML = `<span class="num">${String(i+1).padStart(2,'0')}</span><div class="info"><h4>${t.title}</h4><p>${t.sub}</p></div>`;
    btn.onclick = () => selectTopic(t.id);
    grid.appendChild(btn);
    const panel = document.createElement('div');
    panel.className = 'grammar-content';
    panel.id = 'grammar-'+t.id;
    panel.innerHTML = `<div class="grammar-card">${t.content}</div>`;
    panels.appendChild(panel);
  });
  selectTopic(grammarTopics[0].id);
}
function selectTopic(id) {
  document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.grammar-content').forEach(p => p.classList.remove('active'));
  const idx = grammarTopics.findIndex(t => t.id===id);
  if(idx>=0) document.querySelectorAll('.topic-btn')[idx].classList.add('active');
  const panel = document.getElementById('grammar-'+id);
  if(panel) { panel.classList.add('active'); panel.scrollIntoView({behavior:'smooth',block:'nearest'}); }
}

// ===== VOCAB =====
function buildVocab() { renderVocab(); }
function renderVocab() {
  const grid = document.getElementById('vocab-grid');
  const search = document.getElementById('vocab-search').value.toLowerCase();
  grid.innerHTML = '';
  vocabData.filter(v => (vocabFilter==='all'||v.cat===vocabFilter) && (v.word.includes(search)||v.meaning.includes(search))).forEach(v => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML = `
      <div class="front">
        <span class="cat-label cat-${v.cat}">${v.cat}</span>
        <div class="word">${v.word}</div>
        <div class="pron">${v.pron}</div>
        <div class="type">${v.type}</div>
        <div style="font-size:0.78rem;color:var(--muted);margin-top:0.5rem">👆 Клікни для перекладу</div>
      </div>
      <div class="back">
        <span class="cat-label cat-${v.cat}">${v.cat}</span>
        <div class="meaning">${v.meaning}</div>
        <div class="example-s">"${v.example}"</div>
        <div style="font-size:0.78rem;color:var(--muted);margin-top:0.5rem">👆 Клікни знову</div>
      </div>`;
    card.onclick = () => card.classList.toggle('flipped');
    grid.appendChild(card);
  });
}
function filterVocab() { renderVocab(); }
function filterCat(cat, btn) {
  vocabFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderVocab();
}

// ===== PHRASES =====
function buildPhrases() {
  const grid = document.getElementById('phrase-grid');
  phrases.forEach(p => {
    const card = document.createElement('div');
    card.className = 'phrase-card';
    card.innerHTML = `<div class="situation">${p.situation}</div><div class="english">${p.english}</div><div class="ukrainian">${p.ukrainian}</div>`;
    grid.appendChild(card);
  });
}

init();