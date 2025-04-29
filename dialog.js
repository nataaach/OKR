function userDialog() {
    let attempts = 3;
    while (attempts > 0) {
      let input = prompt("Введіть секретне слово:");
      if (input === "Авіаквитки") {
        alert("Доступ дозволено!");
        break;
      } else {
        alert("Невірно! Залишилось спроб: " + (attempts - 1));
        attempts--;
      }
    }
  }
  userDialog();
  



  