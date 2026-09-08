// ============================================================
// LOVE CLAW MACHINE — game logic + hand-drawn plush-toy SVGs
// ============================================================

/* ---- Prize data (each prize is drawn as a plush-toy SVG) ---- */
const toyData = [
    { kind: 'bear',  name: 'ဝက်ဝံရုပ်လေး', msg: 'ဒီနေ့အတွက် Bonus အဖြစ် အနမ်း ၁၀၀၀ ရရှိပါသည်! 😘' },
    { kind: 'bunny', name: 'ယုန်ပေါက်လေး', msg: 'Balance တွေ မကိုက်ရင် ခေါင်းစားမခံနဲ့နော်... ကိုယ် အမြဲရှိတယ်! 💕' },
    { kind: 'cat',   name: 'ကြောင်ကလေး', msg: 'ကွန်ပျူတာ ကြည့်လွန်းလို့ မျက်စိညောင်းနေပြီမလား? ခဏနားပါဦး 🫶' },
    { kind: 'fox',   name: 'မြေခွေးလေး', msg: 'ဒီနေ့ အလုပ်ဆင်းရင် မုန့်လိုက်ကျွေးမယ်! မြန်မြန်လုပ်တော့ 😁' },
    { kind: 'gift',  name: 'လက်ဆောင်ပုံး', msg: 'Petty Cash Voucher: စိတ်ကြိုက် ဆိုးနွဲ့ခွင့် (၁) ကြိမ် ရရှိပါသည်! 🎫' },
    { kind: 'heart', name: 'စိန်တုံးလေး', msg: 'မင်းက ကိုယ့်အတွက် အမွန်မြတ်ဆုံး Investment ပါပဲ! ❤️' }
];

/* ---- Hand-drawn plush toys ---- */
const TOY_SVGS = {

/* soft teddy bear */
bear: `
<svg viewBox="0 0 64 72" aria-hidden="true">
  <defs>
    <radialGradient id="bearBody" cx=".5" cy=".4" r=".7">
      <stop offset="0" stop-color="#c98d5f"/><stop offset="1" stop-color="#8a5a34"/>
    </radialGradient>
  </defs>
  <ellipse cx="32" cy="68" rx="27" ry="5" fill="rgba(0,0,0,.18)"/>
  <ellipse cx="32" cy="50" rx="21" ry="19" fill="url(#bearBody)"/>
  <ellipse cx="32" cy="56" rx="13" ry="10" fill="#e8c193"/>
  <circle cx="32" cy="26" r="17" fill="url(#bearBody)"/>
  <circle cx="19" cy="12" r="6" fill="url(#bearBody)"/><circle cx="45" cy="12" r="6" fill="url(#bearBody)"/>
  <circle cx="19" cy="12" r="2.6" fill="#d9a27a"/><circle cx="45" cy="12" r="2.6" fill="#d9a27a"/>
  <ellipse cx="32" cy="33" rx="9" ry="6.5" fill="#e8c193"/>
  <circle cx="25" cy="24" r="3.2" fill="#33271e"/><circle cx="39" cy="24" r="3.2" fill="#33271e"/>
  <circle cx="26" cy="22.6" r=".9" fill="#fff"/><circle cx="40" cy="22.6" r=".9" fill="#fff"/>
  <path d="M29 31 L35 31 L32 35 Z" fill="#5a4030"/>
  <path d="M32 35 C30 38 34 38 32 39" stroke="#5a4030" stroke-width="1" fill="none"/>
  <ellipse cx="13" cy="48" rx="6.5" ry="11" fill="url(#bearBody)" transform="rotate(18 13 48)"/>
  <ellipse cx="51" cy="48" rx="6.5" ry="11" fill="url(#bearBody)" transform="rotate(-18 51 48)"/>
  <ellipse cx="23" cy="66" rx="9" ry="6" fill="#8a5a34"/><ellipse cx="41" cy="66" rx="9" ry="6" fill="#8a5a34"/>
</svg>`,

/* white bunny with long pink-inner ears */
bunny: `
<svg viewBox="0 0 64 76" aria-hidden="true">
  <defs>
    <radialGradient id="bunBody" cx=".5" cy=".4" r=".7">
      <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e8dfd4"/>
    </radialGradient>
  </defs>
  <ellipse cx="32" cy="71" rx="27" ry="5" fill="rgba(0,0,0,.18)"/>
  <ellipse cx="32" cy="52" rx="20" ry="18" fill="url(#bunBody)"/>
  <ellipse cx="32" cy="57" rx="12" ry="9" fill="#fdf6ee"/>
  <circle cx="32" cy="27" r="16" fill="url(#bunBody)"/>
  <ellipse cx="23" cy="12" rx="5" ry="13" fill="url(#bunBody)" transform="rotate(-12 23 12)"/>
  <ellipse cx="41" cy="12" rx="5" ry="13" fill="url(#bunBody)" transform="rotate(12 41 12)"/>
  <ellipse cx="23" cy="12" rx="2.6" ry="9" fill="#f3b7c2" transform="rotate(-12 23 12)"/>
  <ellipse cx="41" cy="12" rx="2.6" ry="9" fill="#f3b7c2" transform="rotate(12 41 12)"/>
  <ellipse cx="32" cy="33" rx="8" ry="6" fill="#fdf6ee"/>
  <circle cx="25" cy="23" r="3" fill="#5a4440"/><circle cx="39" cy="23" r="3" fill="#5a4440"/>
  <circle cx="26" cy="21.5" r=".9" fill="#fff"/><circle cx="40" cy="21.5" r=".9" fill="#fff"/>
  <path d="M30 29 L34 29 L32 33 Z" fill="#ff9db0"/>
  <path d="M32 33 L32 38" stroke="#ff9db0" stroke-width="1" fill="none"/>
  <ellipse cx="12" cy="50" rx="6.5" ry="10" fill="url(#bunBody)" transform="rotate(15 12 50)"/>
  <ellipse cx="52" cy="50" rx="6.5" ry="10" fill="url(#bunBody)" transform="rotate(-15 52 50)"/>
  <ellipse cx="24" cy="69" rx="9" ry="5.5" fill="#fdf6ee"/><ellipse cx="40" cy="69" rx="9" ry="5.5" fill="#fdf6ee"/>
</svg>`,

/* orange tabby cat */
cat: `
<svg viewBox="0 0 64 72" aria-hidden="true">
  <defs>
    <radialGradient id="catBody" cx=".5" cy=".4" r=".7">
      <stop offset="0" stop-color="#f8a94f"/><stop offset="1" stop-color="#d97c28"/>
    </radialGradient>
  </defs>
  <ellipse cx="32" cy="67" rx="27" ry="5" fill="rgba(0,0,0,.18)"/>
  <ellipse cx="32" cy="50" rx="21" ry="19" fill="url(#catBody)"/>
  <ellipse cx="32" cy="56" rx="13" ry="10" fill="#ffe6c9"/>
  <circle cx="32" cy="26" r="16" fill="url(#catBody)"/>
  <path d="M20 14 L16 4 L24 14 Z" fill="url(#catBody)"/>
  <path d="M44 14 L48 4 L40 14 Z" fill="url(#catBody)"/>
  <path d="M20 14 L16 4 L24 14 Z" fill="#f5a8a0" transform="scale(.55) translate(9 4)"/>
  <path d="M44 14 L48 4 L40 14 Z" fill="#f5a8a0" transform="scale(.55) translate(26 4)"/>
  <circle cx="25" cy="21" r="3.4" fill="#40331f"/><circle cx="39" cy="21" r="3.4" fill="#40331f"/>
  <circle cx="26" cy="19.6" r=".9" fill="#fff"/><circle cx="40" cy="19.6" r=".9" fill="#fff"/>
  <path d="M28 28 L36 28 L32 31 Z" fill="#e58a8a"/>
  <path d="M32 31 C30 34 34 34 32 35" stroke="#e58a8a" stroke-width="1" fill="none"/>
  <path d="M18 27 L8 26 M46 27 L56 26 M18 29 L9 30 M46 29 L55 30" stroke="#f5f5f5" stroke-width="1.4"/>
  <ellipse cx="12" cy="49" rx="6.5" ry="11" fill="url(#catBody)" transform="rotate(20 12 49)"/>
  <ellipse cx="52" cy="49" rx="6.5" ry="11" fill="url(#catBody)" transform="rotate(-20 52 49)"/>
  <path d="M54 50 C60 44 62 52 60 60" stroke="#d97c28" stroke-width="6" stroke-linecap="round" fill="none"/>
  <ellipse cx="23" cy="66" rx="9" ry="6" fill="#d97c28"/><ellipse cx="41" cy="66" rx="9" ry="6" fill="#d97c28"/>
</svg>`,
/* orange fox plush with fluffy tail */
fox: `
<svg viewBox="0 0 64 78" aria-hidden="true">
  <defs>
    <radialGradient id="foxBody" cx=".5" cy=".4" r=".7">
      <stop offset="0" stop-color="#f0904a"/><stop offset="1" stop-color="#c96b24"/>
    </radialGradient>
  </defs>
  <ellipse cx="32" cy="72" rx="28" ry="5" fill="rgba(0,0,0,.18)"/>
  <path d="M50 48 C60 42 63 52 59 60 L52 54 C46 52 44 58 48 64 L52 58 Z" fill="url(#foxBody)"/>
  <path d="M56 54 C62 46 63 56 60 62 L55 58 Z" fill="#fff8ee"/>
  <ellipse cx="32" cy="50" rx="21" ry="19" fill="url(#foxBody)"/>
  <ellipse cx="32" cy="56" rx="13" ry="10" fill="#fff2e2"/>
  <circle cx="32" cy="26" r="16" fill="url(#foxBody)"/>
  <path d="M20 14 L15 3 L25 15 Z" fill="url(#foxBody)"/>
  <path d="M44 14 L49 3 L39 15 Z" fill="url(#foxBody)"/>
  <path d="M20 14 L15 3 L25 15 Z" fill="#2b2b30" transform="scale(.5) translate(10 7)"/>
  <path d="M44 14 L49 3 L39 15 Z" fill="#2b2b30" transform="scale(.5) translate(24 7)"/>
  <path d="M27 16 L38 16 L32 33 Z" fill="#fff8ee"/>
  <circle cx="25" cy="21" r="3.2" fill="#33271e"/><circle cx="39" cy="21" r="3.2" fill="#33271e"/>
  <circle cx="26" cy="19.6" r=".9" fill="#fff"/><circle cx="40" cy="19.6" r=".9" fill="#fff"/>
  <path d="M32 27 C30 31 34 31 32 33" fill="#33271e"/>
  <ellipse cx="12" cy="49" rx="6" ry="11" fill="url(#foxBody)" transform="rotate(18 12 49)"/>
  <ellipse cx="28" cy="50" rx="6.5" ry="11" fill="url(#foxBody)" transform="rotate(-10 28 50)"/>
  <ellipse cx="23" cy="69" rx="9" ry="5.5" fill="#fff2e2"/><ellipse cx="41" cy="69" rx="9" ry="5.5" fill="#fff2e2"/>
</svg>`,

/* wrapped gift box with golden ribbon */
gift: `
<svg viewBox="0 0 64 58" aria-hidden="true">
  <defs>
    <linearGradient id="giftBox" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e8484b"/><stop offset="1" stop-color="#a9272b"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="53" rx="25" ry="5" fill="rgba(0,0,0,.2)"/>
  <rect x="12" y="22" width="40" height="30" rx="2" fill="url(#giftBox)" stroke="#7d1b1e" stroke-width="1"/>
  <rect x="12" y="15" width="40" height="9" rx="2" fill="url(#giftBox)" stroke="#7d1b1e" stroke-width="1"/>
  <path d="M27 15 L27 52 M37 15 L37 52" stroke="#ffd24d" stroke-width="3"/>
  <path d="M12 24 L52 24" stroke="#ffd24d" stroke-width="3"/>
  <path d="M27 15 C17 7 14 7 22 5 C18 12 15 12 20 14" fill="#ffd24d"/>
  <path d="M37 15 C47 7 50 7 42 5 C46 12 49 12 44 14" fill="#ffd24d"/>
  <rect x="29" y="9" width="6" height="6" rx="1" fill="#ffd24d"/>
</svg>`,

/* pink heart plush ("diamond" prize) */
heart: `
<svg viewBox="0 0 64 64" aria-hidden="true">
  <defs>
    <radialGradient id="heartBody" cx=".45" cy=".4" r=".7">
      <stop offset="0" stop-color="#ff9fc0"/><stop offset="1" stop-color="#e0608f"/>
    </radialGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="27" ry="5" fill="rgba(0,0,0,.18)"/>
  <circle cx="23" cy="27" r="14" fill="url(#heartBody)"/>
  <circle cx="41" cy="27" r="14" fill="url(#heartBody)"/>
  <path d="M23 34 L41 34 L32 56 Z" fill="url(#heartBody)"/>
  <circle cx="31" cy="40" r="3.2" fill="#b0446f"/><circle cx="33" cy="40" r="3.2" fill="#b0446f"/>
  <circle cx="32" cy="46" r="2.4" fill="#fff"/>
  <path d="M31 33 C34 29 37 29 34 33 Z" stroke="#9e3d63" stroke-width="1.4" fill="none"/>
  <ellipse cx="25" cy="19" rx="5" ry="3.4" fill="rgba(255,255,255,.5)" transform="rotate(-25 25 19)"/>
</svg>`
};
/* ============================================================
   GAME STATE
   ============================================================ */
let clawX = 130;
let isBusy = false;
let activeToys = [];

const clawAssembly = document.getElementById('clawAssembly');
const clawSvg       = document.getElementById('clawSvg');
const rope          = document.getElementById('rope');
const toysContainer = document.getElementById('toysContainer');

/* Open / close the 3 fingers */
function setGrip(closed) {
    clawSvg.classList.toggle('grip', closed);
}

/* ============================================================
   SPAWN THE PLUSH TOYS
   ============================================================ */
function initToys() {
    toysContainer.innerHTML = '';
    activeToys = [];
    const positions = [75, 120, 165, 210, 255, 298];

    toyData.forEach((data, index) => {
        const toyEl = document.createElement('div');
        toyEl.className = 'toy';
        toyEl.style.left = positions[index] + 'px';
        toyEl.innerHTML = TOY_SVGS[data.kind];
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
    if (clawX < 70) clawX = 70;                  // don't pass the left chute
    if (clawX > 292) clawX = 292;                // reach the rightmost toy
    clawAssembly.style.left = clawX + 'px';
}

/* ============================================================
   GRABBING SEQUENCE
   ============================================================ */
function grabToy() {
    if (isBusy) return;
    isBusy = true;
    setGrip(false);                 // fingers open

    // 1) Lower the claw
    rope.style.height = '210px';

    setTimeout(() => {
        // 2) At the bottom: check a prize is under the claw, then clamp shut
        const caught = activeToys.find(toy => Math.abs(toy.x - clawX) < 28);
        setGrip(true);              // fingers close onto the prize

        setTimeout(() => {
            // 3) Lift back up (carrying the prize if caught)
            rope.style.height = '20px';
            if (caught) {
                caught.element.style.transition = 'all 0.45s ease';
                caught.element.style.bottom = '62px';
                caught.element.style.left = clawX + 'px';
            } else {
                setTimeout(() => setGrip(false), 250);   // empty grab: let go
            }

            setTimeout(() => {
                // 4) Travel over to the drop chute (left)
                clawAssembly.style.left = '20px';
                if (caught) {
                    caught.element.style.transition = 'left 0.9s linear';
                    caught.element.style.left = '20px';
                }

                setTimeout(() => {
                    // 5) Release the prize into the chute
                    if (caught) {
                        setGrip(false);   // fingers open
                        caught.element.style.transition = 'bottom 0.5s ease-in, opacity 0.5s ease';
                        caught.element.style.bottom = '12px';
                        caught.element.style.opacity = '0';

                        setTimeout(() => showPrize(caught.data), 480);
                    } else {
                        alert("ဟာကွာ... အရုပ်မမိလိုက်ဘူး! နောက်တစ်ခါ ထပ်စမ်းကြည့်ပါဦး 😜");
                        resetClaw();
                    }
                }, 900);

            }, 950);

        }, 850);

    }, 1000);
}

/* ============================================================
   PRIZE MODAL
   ============================================================ */
function showPrize(data) {
    document.getElementById('prizeEmoji').innerHTML   = TOY_SVGS[data.kind];
    document.getElementById('prizeTitle').innerText   = data.name + ' ရရှိသွားပါပြီ!';
    document.getElementById('prizeMessage').innerText = data.msg;
    document.getElementById('modalOverlay').classList.add('active');

    confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    resetClaw();
    initToys();               // refill the showcase
}

function resetClaw() {
    clawX = 130;
    clawAssembly.style.left = clawX + 'px';
    rope.style.height = '20px';
    setGrip(false);
    isBusy = false;
}

/* boot */
initToys();