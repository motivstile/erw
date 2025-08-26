
    // === СОЗДАЁМ ФОН ===
    document.body.style.margin = "0";
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.background = "linear-gradient(135deg, #f7b733, #fc4a1a)";
    document.body.style.fontFamily = "Arial, sans-serif";

    // === ОБЁРТКА ДЛЯ ТАЙМЕРА ===
    const timer = document.createElement("div");
    timer.style.display = "flex";
    timer.style.gap = "20px";
    timer.style.background = "#fca311";
    timer.style.padding = "20px 40px";
    timer.style.borderRadius = "12px";
    timer.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    document.body.appendChild(timer);

    // Функция для создания карточки (часы, минуты, секунды)
    function createBox(label, id) {
      const box = document.createElement("div");
      box.style.background = "#1a1a1a";
      box.style.color = "#fff";
      box.style.padding = "30px 20px";
      box.style.borderRadius = "10px";
      box.style.textAlign = "center";
      box.style.boxShadow = "0 6px 15px rgba(0,0,0,0.4)";
      box.style.width = "100px";

      const h1 = document.createElement("h1");
      h1.id = id;
      h1.textContent = "00";
      h1.style.fontSize = "40px";
      h1.style.margin = "0";

      const p = document.createElement("p");
      p.textContent = label;
      p.style.margin = "5px 0 0";
      p.style.fontSize = "14px";
      p.style.color = "#ccc";

      box.appendChild(h1);
      box.appendChild(p);
      return box;
    }

    // Добавляем карточки
    timer.appendChild(createBox("Hours", "hours"));
    timer.appendChild(createBox("Minutes", "minutes"));
    timer.appendChild(createBox("Seconds", "seconds"));

    // === ЛОГИКА ТАЙМЕРА ===
    function updateTimer() {
      const now = new Date();
      document.getElementById("hours").textContent = String(now.getHours()).padStart(2, '0');
      document.getElementById("minutes").textContent = String(now.getMinutes()).padStart(2, '0');
      document.getElementById("seconds").textContent = String(now.getSeconds()).padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
    updateTimer();


