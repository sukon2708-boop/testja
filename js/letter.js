const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันครบรอบ 3 ปีนะคะที่รัก ❤️

3 ปีที่ผ่านมาอาจเป็นแค่ตัวเลขสำหรับใครหลายคน แต่สำหรับเค้า มันคือช่วงเวลาที่เต็มไปด้วยความรัก ความสุข เสียงหัวเราะ และความทรงจำที่มีค่าที่สุด ขอบคุณที่เข้ามาเป็นส่วนหนึ่งของชีวิต และทำให้ทุกวันธรรมดากลายเป็นวันที่พิเศษ

ขอบคุณที่คอยจับมือกันในวันที่มีความสุข และไม่เคยปล่อยมือกันในวันที่เหนื่อยหรือมีอุปสรรค ที่รักคือกำลังใจ เป็นรอยยิ้ม และเป็นความสบายใจที่ดีที่สุดที่เค้าเคยมี

เค้าสัญญาว่าจะดูแลความรักของเราให้ดีที่สุด จะอยู่ข้างที่รัก คอยสนับสนุน ให้กำลังใจ และรักที่รักในทุกช่วงเวลาของชีวิต ไม่ว่าวันข้างหน้าจะเป็นอย่างไร ขอแค่มีที่รักอยู่ด้วย เค้าก็พร้อมเดินต่อไปเสมอ

ขอบคุณที่เลือกเค้าในวันนั้น และยังเลือกเค้ามาจนถึงวันนี้ หวังว่าวันครบรอบครั้งนี้จะเป็นเพียงอีกหนึ่งหน้าของเรื่องราวที่เราจะเขียนร่วมกันไปอีกนานแสนนาน

รักที่รักมากที่สุดนะ… วันนี้ พรุ่งนี้ และทุกๆวันตลอดไป สุขสันต์วันครบรอบ 3 ปีนะคะสุดที่รักของเค้า 🤍✨
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
