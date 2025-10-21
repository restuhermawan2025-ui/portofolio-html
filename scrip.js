document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const clearSearchBtn = document.getElementById("clearSearch");
  const menuItems = document.querySelectorAll(".card");

  // Fungsi untuk filter menu berdasarkan keyword pencarian
  function filterMenu() {
    const keyword = searchInput.value.toLowerCase();

    menuItems.forEach(card => {
      const title = card.querySelector(".title").textContent.toLowerCase();
      if (title.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Event: Saat mengetik di kolom pencarian
  searchInput.addEventListener("input", filterMenu);

  // Event: Tombol clear pencarian
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterMenu();
  });

  // Tambahkan event untuk tombol "Tambah"
  const tambahButtons = document.querySelectorAll(".btn.primary.small");
  tambahButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.closest(".card").querySelector(".title").textContent;
      alert(`Berhasil menambahkan: ${title}`);
      // Kamu bisa lanjut tambahkan fungsi ke keranjang atau transaksi di sini
    });
  });
});
