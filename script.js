// Contact form demo: validates the fields and builds a ready-to-send message.
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("msg").value.trim();
  const out = document.getElementById("result");
  if (!name || msg.length < 10) {
    out.textContent = "اكتب اسمك ووصف الطلب (10 حروف على الأقل).";
    return;
  }
  out.textContent = "تمام يا " + name + "، الرسالة جاهزة. (نسخة تجريبية: ربط الإرسال الفعلي يتم عند النشر.)";
});
