const titleText = document.getElementById("titleText");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

const openGiftBtn = document.getElementById("openGiftBtn");
const giftStage = document.getElementById("giftStage");
const giftImg = document.getElementById("giftImg");

const fxLayer = document.getElementById("fxLayer");

// ---------------- FX helpers ----------------
function spawnParticle(symbol, className) {
  if (!fxLayer) return;

  const el = document.createElement("div");
  el.className = `particle ${className}`;
  el.textContent = symbol;

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (16 + Math.random() * 26) + "px";
  el.style.animationDuration = (2.8 + Math.random() * 2.2) + "s";
  el.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

  fxLayer.appendChild(el);
  setTimeout(() => el.remove(), 6000);
}

function burst(symbols, className, count = 40, gap = 70) {
  for (let i = 0; i < count; i++) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    setTimeout(() => spawnParticle(symbol, className), i * gap);
  }
}

// ---------------- UI helpers ----------------
function lockButton(btn) {
  btn.disabled = true;
  btn.style.opacity = "0.7";
  btn.style.cursor = "not-allowed";
}

// รอให้รูปโหลดเสร็จจริง ๆ ก่อน (สำคัญ)
function waitImageLoaded(img) {
  return new Promise((resolve) => {
    if (!img) return resolve();
    if (img.complete && img.naturalWidth > 0) return resolve();

    const done = () => {
      img.removeEventListener("load", done);
      img.removeEventListener("error", done);
      resolve();
    };

    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
}

openGiftBtn.addEventListener("click", async () => {
  lockButton(openGiftBtn);

  // เด้งเล็กน้อย
  giftStage.classList.add("opening");

  // หน่วงให้เด้งเห็นก่อน
  await new Promise((r) => setTimeout(r, 520));

  // เปลี่ยนรูป -> รอโหลดเสร็จ
  giftImg.src = "assets/flowers.png";
  giftImg.alt = "flowers";

  // (ถ้า browser รองรับ decode จะทำให้ "วาดภาพ" ลื่นขึ้น)
  if (giftImg.decode) {
    try { await giftImg.decode(); } catch (_) {}
  }
  await waitImageLoaded(giftImg);

  // ✅ เมื่อรูปเปลี่ยน "เสร็จจริง" แล้ว ค่อยทำทุกอย่างพร้อมกัน
  if (titleText) titleText.classList.add("fade-out");

  giftStage.classList.remove("opening");
  giftStage.classList.add("opened");

  // โชว์ข้อความพร้อมเอฟเฟกต์
  step1.style.display = "none";
  step2.style.display = "block";

  // ดอกไม้ก่อน แล้วตามด้วยหัวใจ
  burst(["","🌷","🌹","","",""], "flower", 45, 55);
  setTimeout(() => {
    burst(["❤️","💖","💕","💘","💗"], "heart", 60, 45);
  }, 900);
});
