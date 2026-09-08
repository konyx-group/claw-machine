// ============================================================
// LOVE CLAW MACHINE — game logic + realistic plush-toy SVGs
// ============================================================

/* ---- Prize data ---- */
const toyData = [
    { kind: 'bear',  name: 'ဝက်ဝံရုပ်လေး' },
    { kind: 'bunny', name: 'ယုန်ပေါက်လေး' },
    { kind: 'cat',   name: 'ကြောင်ကလေး' },
    { kind: 'fox',   name: 'မြေခွေးလေး' },
    { kind: 'gift',  name: 'လက်ဆောင်ပုံး' }
];

let toyUid = 0;

function toySvg(kind) {
    const id = `t${++toyUid}`;
    return TOY_BUILDERS[kind](id);
}

/* ---- Realistic plush toys (unique gradient ids per instance) ---- */
const TOY_BUILDERS = {

bear: (id) => `
<svg viewBox="0 0 80 96" aria-hidden="true">
  <defs>
    <radialGradient id="${id}-fur" cx="35%" cy="30%" r="70%">
      <stop offset="0" stop-color="#e0b07a"/><stop offset=".55" stop-color="#c4894f"/>
      <stop offset="1" stop-color="#8d5a2f"/>
    </radialGradient>
    <radialGradient id="${id}-belly" cx="50%" cy="40%" r="60%">
      <stop offset="0" stop-color="#f6e2c4"/><stop offset="1" stop-color="#e8c49a"/>
    </radialGradient>
    <radialGradient id="${id}-snout" cx="50%" cy="40%" r="60%">
      <stop offset="0" stop-color="#f8e8d0"/><stop offset="1" stop-color="#e6c7a0"/>
    </radialGradient>
    <filter id="${id}-soft"><feGaussianBlur stdDeviation=".35"/></filter>
  </defs>
  <ellipse cx="40" cy="90" rx="28" ry="5" fill="rgba(0,0,0,.18)"/>
  <!-- legs -->
  <ellipse cx="27" cy="82" rx="11" ry="9" fill="url(#${id}-fur)"/>
  <ellipse cx="53" cy="82" rx="11" ry="9" fill="url(#${id}-fur)"/>
  <ellipse cx="27" cy="84" rx="7" ry="4.5" fill="#f0d4b0"/>
  <ellipse cx="53" cy="84" rx="7" ry="4.5" fill="#f0d4b0"/>
  <!-- arms -->
  <ellipse cx="14" cy="58" rx="9" ry="14" fill="url(#${id}-fur)" transform="rotate(22 14 58)"/>
  <ellipse cx="66" cy="58" rx="9" ry="14" fill="url(#${id}-fur)" transform="rotate(-22 66 58)"/>
  <ellipse cx="12" cy="66" rx="5" ry="4" fill="#f0d4b0" transform="rotate(22 12 66)"/>
  <ellipse cx="68" cy="66" rx="5" ry="4" fill="#f0d4b0" transform="rotate(-22 68 66)"/>
  <!-- body -->
  <ellipse cx="40" cy="60" rx="23" ry="22" fill="url(#${id}-fur)"/>
  <ellipse cx="40" cy="64" rx="14" ry="13" fill="url(#${id}-belly)"/>
  <!-- ears -->
  <circle cx="22" cy="18" r="9" fill="url(#${id}-fur)"/>
  <circle cx="58" cy="18" r="9" fill="url(#${id}-fur)"/>
  <circle cx="22" cy="18" r="4.5" fill="#f0c8a0"/>
  <circle cx="58" cy="18" r="4.5" fill="#f0c8a0"/>
  <!-- head -->
  <circle cx="40" cy="32" r="20" fill="url(#${id}-fur)"/>
  <ellipse cx="40" cy="40" rx="11" ry="9" fill="url(#${id}-snout)"/>
  <!-- eyes -->
  <ellipse cx="32" cy="29" rx="3.4" ry="4" fill="#2a1c14"/>
  <ellipse cx="48" cy="29" rx="3.4" ry="4" fill="#2a1c14"/>
  <circle cx="33.2" cy="27.5" r="1.1" fill="#fff"/>
  <circle cx="49.2" cy="27.5" r="1.1" fill="#fff"/>
  <!-- nose + mouth -->
  <ellipse cx="40" cy="38" rx="3.2" ry="2.4" fill="#3a2a20"/>
  <path d="M40 40.2 C37 44 34 43.5 33 42 M40 40.2 C43 44 46 43.5 47 42" stroke="#3a2a20" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  <!-- cheek blush -->
  <ellipse cx="25" cy="36" rx="3.5" ry="2" fill="#e8a090" opacity=".45"/>
  <ellipse cx="55" cy="36" rx="3.5" ry="2" fill="#e8a090" opacity=".45"/>
  <!-- soft fur highlights -->
  <ellipse cx="30" cy="22" rx="5" ry="3" fill="rgba(255,255,255,.22)" filter="url(#${id}-soft)"/>
</svg>`,

bunny: (id) => `
<svg viewBox="0 0 80 100" aria-hidden="true">
  <defs>
    <radialGradient id="${id}-fur" cx="40%" cy="30%" r="70%">
      <stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f4ebe3"/>
      <stop offset="1" stop-color="#ddd0c4"/>
    </radialGradient>
    <radialGradient id="${id}-pink" cx="50%" cy="40%" r="60%">
      <stop offset="0" stop-color="#ffc4d4"/><stop offset="1" stop-color="#f09bb0"/>
    </radialGradient>
  </defs>
  <ellipse cx="40" cy="94" rx="28" ry="5" fill="rgba(0,0,0,.16)"/>
  <!-- ears -->
  <ellipse cx="26" cy="16" rx="7" ry="18" fill="url(#${id}-fur)" transform="rotate(-14 26 16)"/>
  <ellipse cx="54" cy="16" rx="7" ry="18" fill="url(#${id}-fur)" transform="rotate(14 54 16)"/>
  <ellipse cx="26" cy="16" rx="3.2" ry="12" fill="url(#${id}-pink)" transform="rotate(-14 26 16)"/>
  <ellipse cx="54" cy="16" rx="3.2" ry="12" fill="url(#${id}-pink)" transform="rotate(14 54 16)"/>
  <!-- feet -->
  <ellipse cx="28" cy="86" rx="11" ry="8" fill="url(#${id}-fur)"/>
  <ellipse cx="52" cy="86" rx="11" ry="8" fill="url(#${id}-fur)"/>
  <ellipse cx="28" cy="88" rx="6" ry="3.5" fill="#ffe8f0"/>
  <ellipse cx="52" cy="88" rx="6" ry="3.5" fill="#ffe8f0"/>
  <!-- arms -->
  <ellipse cx="13" cy="62" rx="8" ry="13" fill="url(#${id}-fur)" transform="rotate(18 13 62)"/>
  <ellipse cx="67" cy="62" rx="8" ry="13" fill="url(#${id}-fur)" transform="rotate(-18 67 62)"/>
  <!-- body -->
  <ellipse cx="40" cy="64" rx="21" ry="20" fill="url(#${id}-fur)"/>
  <ellipse cx="40" cy="68" rx="12" ry="11" fill="#fff8f2"/>
  <!-- head -->
  <circle cx="40" cy="36" r="18" fill="url(#${id}-fur)"/>
  <ellipse cx="40" cy="42" rx="9" ry="7" fill="#fff8f2"/>
  <!-- eyes -->
  <ellipse cx="32" cy="33" rx="3.2" ry="3.8" fill="#3a2e2a"/>
  <ellipse cx="48" cy="33" rx="3.2" ry="3.8" fill="#3a2e2a"/>
  <circle cx="33" cy="31.6" r="1" fill="#fff"/>
  <circle cx="49" cy="31.6" r="1" fill="#fff"/>
  <!-- nose / mouth -->
  <ellipse cx="40" cy="40" rx="2.8" ry="2.2" fill="#ff8fad"/>
  <path d="M40 42 L40 46 M40 46 C37.5 48 35 47 34 46 M40 46 C42.5 48 45 47 46 46" stroke="#d87892" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  <ellipse cx="26" cy="40" rx="3.2" ry="2" fill="#ffb8c8" opacity=".5"/>
  <ellipse cx="54" cy="40" rx="3.2" ry="2" fill="#ffb8c8" opacity=".5"/>
  <!-- fluffy cheek fluff -->
  <ellipse cx="22" cy="42" rx="4" ry="3" fill="url(#${id}-fur)" opacity=".9"/>
  <ellipse cx="58" cy="42" rx="4" ry="3" fill="url(#${id}-fur)" opacity=".9"/>
</svg>`,

cat: (id) => `
<svg viewBox="0 0 80 96" aria-hidden="true">
  <defs>
    <radialGradient id="${id}-fur" cx="35%" cy="30%" r="70%">
      <stop offset="0" stop-color="#ffc078"/><stop offset=".5" stop-color="#f09a45"/>
      <stop offset="1" stop-color="#c96e22"/>
    </radialGradient>
    <radialGradient id="${id}-cream" cx="50%" cy="40%" r="60%">
      <stop offset="0" stop-color="#fff3e0"/><stop offset="1" stop-color="#f5d9b0"/>
    </radialGradient>
  </defs>
  <ellipse cx="40" cy="90" rx="28" ry="5" fill="rgba(0,0,0,.16)"/>
  <!-- tail -->
  <path d="M62 58 C74 48 78 62 72 74 C68 82 64 78 66 72 C68 64 64 58 62 58" fill="url(#${id}-fur)"/>
  <path d="M68 66 C72 60 74 68 70 74" fill="#fff0d8" opacity=".55"/>
  <!-- feet -->
  <ellipse cx="27" cy="82" rx="10" ry="8" fill="url(#${id}-fur)"/>
  <ellipse cx="53" cy="82" rx="10" ry="8" fill="url(#${id}-fur)"/>
  <!-- arms -->
  <ellipse cx="13" cy="58" rx="8" ry="13" fill="url(#${id}-fur)" transform="rotate(20 13 58)"/>
  <ellipse cx="67" cy="58" rx="8" ry="13" fill="url(#${id}-fur)" transform="rotate(-20 67 58)"/>
  <!-- body -->
  <ellipse cx="40" cy="60" rx="22" ry="21" fill="url(#${id}-fur)"/>
  <ellipse cx="40" cy="64" rx="13" ry="12" fill="url(#${id}-cream)"/>
  <!-- stripes -->
  <path d="M28 48 Q40 52 52 48" stroke="#d47828" stroke-width="2.2" fill="none" opacity=".45"/>
  <path d="M26 55 Q40 60 54 55" stroke="#d47828" stroke-width="2" fill="none" opacity=".35"/>
  <!-- ears -->
  <path d="M24 20 L18 4 L32 18 Z" fill="url(#${id}-fur)"/>
  <path d="M56 20 L62 4 L48 18 Z" fill="url(#${id}-fur)"/>
  <path d="M24 18 L20 8 L30 17 Z" fill="#f5a8a0"/>
  <path d="M56 18 L60 8 L50 17 Z" fill="#f5a8a0"/>
  <!-- head -->
  <circle cx="40" cy="32" r="18" fill="url(#${id}-fur)"/>
  <ellipse cx="40" cy="38" rx="8" ry="6" fill="url(#${id}-cream)"/>
  <!-- eyes -->
  <ellipse cx="32" cy="29" rx="3.6" ry="4.2" fill="#2c2118"/>
  <ellipse cx="48" cy="29" rx="3.6" ry="4.2" fill="#2c2118"/>
  <ellipse cx="32" cy="29" rx="1.4" ry="2.2" fill="#7dcf6a" opacity=".55"/>
  <ellipse cx="48" cy="29" rx="1.4" ry="2.2" fill="#7dcf6a" opacity=".55"/>
  <circle cx="33.3" cy="27.4" r="1" fill="#fff"/>
  <circle cx="49.3" cy="27.4" r="1" fill="#fff"/>
  <!-- nose / mouth / whiskers -->
  <path d="M37 36 L43 36 L40 39 Z" fill="#e58a8a"/>
  <path d="M40 39 C37 43 35 42 34 41 M40 39 C43 43 45 42 46 41" stroke="#c07070" stroke-width="1.1" fill="none" stroke-linecap="round"/>
  <path d="M22 34 L10 32 M22 37 L11 38 M58 34 L70 32 M58 37 L69 38" stroke="#fff8ee" stroke-width="1.5" stroke-linecap="round"/>
  <ellipse cx="26" cy="36" rx="3" ry="1.8" fill="#f5a090" opacity=".4"/>
  <ellipse cx="54" cy="36" rx="3" ry="1.8" fill="#f5a090" opacity=".4"/>
</svg>`,

fox: (id) => `
<svg viewBox="0 0 80 100" aria-hidden="true">
  <defs>
    <radialGradient id="${id}-fur" cx="35%" cy="30%" r="70%">
      <stop offset="0" stop-color="#ff9a55"/><stop offset=".55" stop-color="#e87330"/>
      <stop offset="1" stop-color="#b85118"/>
    </radialGradient>
    <radialGradient id="${id}-cream" cx="50%" cy="40%" r="60%">
      <stop offset="0" stop-color="#fff8ee"/><stop offset="1" stop-color="#f3e0c8"/>
    </radialGradient>
  </defs>
  <ellipse cx="40" cy="94" rx="28" ry="5" fill="rgba(0,0,0,.16)"/>
  <!-- bushy tail -->
  <path d="M58 60 C74 48 80 64 72 80 C66 90 58 84 60 74 C62 66 58 60 58 60 Z" fill="url(#${id}-fur)"/>
  <path d="M66 70 C74 60 76 72 70 80 C67 84 64 78 66 70 Z" fill="url(#${id}-cream)"/>
  <!-- feet -->
  <ellipse cx="28" cy="86" rx="10" ry="8" fill="url(#${id}-cream)"/>
  <ellipse cx="52" cy="86" rx="10" ry="8" fill="url(#${id}-cream)"/>
  <!-- arms -->
  <ellipse cx="13" cy="60" rx="8" ry="13" fill="url(#${id}-fur)" transform="rotate(18 13 60)"/>
  <ellipse cx="67" cy="60" rx="8" ry="13" fill="url(#${id}-fur)" transform="rotate(-18 67 60)"/>
  <!-- body -->
  <ellipse cx="40" cy="62" rx="22" ry="21" fill="url(#${id}-fur)"/>
  <ellipse cx="40" cy="66" rx="13" ry="12" fill="url(#${id}-cream)"/>
  <!-- ears -->
  <path d="M24 20 L16 2 L34 18 Z" fill="url(#${id}-fur)"/>
  <path d="M56 20 L64 2 L46 18 Z" fill="url(#${id}-fur)"/>
  <path d="M24 18 L19 6 L31 17 Z" fill="#2a2a30"/>
  <path d="M56 18 L61 6 L49 17 Z" fill="#2a2a30"/>
  <!-- head -->
  <circle cx="40" cy="34" r="18" fill="url(#${id}-fur)"/>
  <path d="M28 22 L52 22 L40 48 Z" fill="url(#${id}-cream)"/>
  <!-- eyes -->
  <ellipse cx="32" cy="30" rx="3.3" ry="3.8" fill="#2a1c14"/>
  <ellipse cx="48" cy="30" rx="3.3" ry="3.8" fill="#2a1c14"/>
  <circle cx="33.2" cy="28.6" r="1" fill="#fff"/>
  <circle cx="49.2" cy="28.6" r="1" fill="#fff"/>
  <!-- nose -->
  <ellipse cx="40" cy="40" rx="3" ry="2.4" fill="#2a1c14"/>
  <path d="M40 42.2 C37 46 35 45 34 44 M40 42.2 C43 46 45 45 46 44" stroke="#2a1c14" stroke-width="1.1" fill="none" stroke-linecap="round"/>
</svg>`,

gift: (id) => `
<svg viewBox="0 0 80 78" aria-hidden="true">
  <defs>
    <linearGradient id="${id}-box" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff6b6e"/><stop offset="1" stop-color="#c23036"/>
    </linearGradient>
    <linearGradient id="${id}-lid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff8588"/><stop offset="1" stop-color="#d6454a"/>
    </linearGradient>
    <linearGradient id="${id}-gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe27a"/><stop offset="1" stop-color="#e0a820"/>
    </linearGradient>
  </defs>
  <ellipse cx="40" cy="72" rx="28" ry="5" fill="rgba(0,0,0,.18)"/>
  <!-- box body with paper texture feel -->
  <rect x="14" y="30" width="52" height="38" rx="3" fill="url(#${id}-box)" stroke="#8e1f24" stroke-width="1.2"/>
  <rect x="16" y="32" width="10" height="34" fill="rgba(255,255,255,.08)"/>
  <!-- lid -->
  <rect x="12" y="20" width="56" height="14" rx="3" fill="url(#${id}-lid)" stroke="#8e1f24" stroke-width="1.2"/>
  <!-- ribbon -->
  <rect x="35" y="20" width="10" height="48" fill="url(#${id}-gold)"/>
  <rect x="12" y="24" width="56" height="6" fill="url(#${id}-gold)"/>
  <!-- bow -->
  <path d="M34 20 C22 8 16 10 24 6 C20 16 18 18 26 20 Z" fill="url(#${id}-gold)"/>
  <path d="M46 20 C58 8 64 10 56 6 C60 16 62 18 54 20 Z" fill="url(#${id}-gold)"/>
  <rect x="36" y="12" width="8" height="10" rx="2" fill="#f0c030"/>
  <!-- soft shadow under lid -->
  <rect x="14" y="33" width="52" height="3" fill="rgba(0,0,0,.12)"/>
</svg>`
};

/* ============================================================
   GAME STATE
   ============================================================ */
let clawX = 130;
let isBusy = false;
let activeToys = [];
let refillAfterModal = false;

const WIN_CHANCE = 0.10;

const clawAssembly = document.getElementById('clawAssembly');
const clawSvg       = document.getElementById('clawSvg');
const rope          = document.getElementById('rope');
const toysContainer = document.getElementById('toysContainer');
const prizeMessage  = document.getElementById('prizeMessage');

function setGrip(closed) {
    clawSvg.classList.toggle('grip', closed);
}

/* ============================================================
   SPAWN THE PLUSH TOYS
   ============================================================ */
function initToys() {
    toysContainer.innerHTML = '';
    activeToys = [];
    const positions = [90, 137, 184, 231, 275];

    toyData.forEach((data, index) => {
        const toyEl = document.createElement('div');
        toyEl.className = 'toy';
        toyEl.style.left = positions[index] + 'px';
        toyEl.innerHTML = toySvg(data.kind);
        toysContainer.appendChild(toyEl);

        activeToys.push({ element: toyEl, x: positions[index], data: data });
    });
}

/* ============================================================
   LEFT / RIGHT MOVEMENT
   ============================================================ */
function moveClaw(step) {
    if (isBusy) return;
    clawX += step;
    if (clawX < 70) clawX = 70;
    if (clawX > 292) clawX = 292;
    clawAssembly.style.left = clawX + 'px';
}

/* ============================================================
   GRABBING SEQUENCE
   ============================================================ */
function grabToy() {
    if (isBusy) return;
    isBusy = true;
    setGrip(false);
    clawAssembly.classList.add('working');

    clawAssembly.style.setProperty('--rope-height', '210px');
    rope.style.height = '210px';

    setTimeout(() => {
        const target = activeToys.find(toy => Math.abs(toy.x - clawX) < 28);
        const caught = target && Math.random() < WIN_CHANCE ? target : null;
        setGrip(true);

        setTimeout(() => {
            if (caught) {
                attachToyToClaw(caught);
                caught.element.getBoundingClientRect();
            }
            if (target && !caught) target.element.classList.add('slipped');
            clawAssembly.style.setProperty('--rope-height', '20px');
            rope.style.height = '20px';
            if (!caught) setTimeout(() => setGrip(false), 250);

            setTimeout(() => {
                clawAssembly.style.left = '20px';

                setTimeout(() => {
                    if (caught) {
                        setGrip(false);
                        caught.element.classList.add('dropping');
                        caught.element.style.opacity = '0';
                        setTimeout(() => showPrize(caught.data), 520);
                    } else {
                        showFailure(Boolean(target));
                    }
                }, 900);

            }, 950);

        }, 850);

    }, 1000);
}

function attachToyToClaw(toy) {
    toy.element.classList.add('carried-toy');
    toy.element.style.left = '';
    toy.element.style.bottom = '';
    clawAssembly.appendChild(toy.element);
    activeToys = activeToys.filter(item => item !== toy);
}

/* ============================================================
   PRIZE MODAL
   ============================================================ */
function showPrize(data) {
    refillAfterModal = true;
    document.getElementById('modalCard').classList.remove('failure');
    document.getElementById('prizeEmoji').innerHTML = toySvg(data.kind);
    document.getElementById('prizeTitle').innerText = 'Congratulations အရုပ်ရပါပြီ';
    prizeMessage.hidden = true;
    prizeMessage.innerText = '';
    document.getElementById('modalButton').innerText = 'ကျေးဇူးပါ';
    document.getElementById('modalOverlay').classList.add('active');

    confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
}

function showFailure(wasAligned) {
    refillAfterModal = false;
    document.getElementById('modalCard').classList.add('failure');
    document.getElementById('prizeEmoji').innerHTML = `
<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true">
  <circle cx="32" cy="32" r="28" fill="#e8eef8" stroke="#8aa0c8" stroke-width="3"/>
  <circle cx="22" cy="26" r="3.5" fill="#5a6f98"/>
  <circle cx="42" cy="26" r="3.5" fill="#5a6f98"/>
  <path d="M22 42 C26 36 38 36 42 42" stroke="#5a6f98" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`;
    document.getElementById('prizeTitle').innerText = 'မရလိုက်ဘူးနော်!';
    prizeMessage.hidden = false;
    prizeMessage.innerText = wasAligned
        ? 'အရုပ်က လွတ်ကျသွားတယ်။ နောက်တစ်ခါ ထပ်ကြိုးစားကြည့်ပါဦး!'
        : 'လက်တံကို အရုပ်နဲ့တည့်အောင် ရွှေ့ပြီး နောက်တစ်ခါ ထပ်ကြိုးစားကြည့်ပါဦး!';
    document.getElementById('modalButton').innerText = 'ထပ်ကြိုးစားမယ်';
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    resetClaw();
    if (refillAfterModal) initToys();
}

function resetClaw() {
    clawX = 130;
    clawAssembly.style.left = clawX + 'px';
    clawAssembly.style.setProperty('--rope-height', '20px');
    rope.style.height = '20px';
    setGrip(false);
    clawAssembly.classList.remove('working');
    isBusy = false;
}

/* boot */
initToys();
