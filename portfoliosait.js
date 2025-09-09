document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal-img");
  const closeBtn = document.querySelector(".close");

  // グラフィック画像クリックで拡大
  document.querySelectorAll(".item.graphic img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
    });
  });

  // ✕ボタンで閉じる
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    modalImg.src = "";
  });

  // モーダル外クリックで閉じる
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modalImg.src = "";
    }
  });
});