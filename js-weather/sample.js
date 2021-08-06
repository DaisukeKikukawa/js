//天気を取得する場所の名前
  const inputCityName = document.querySelector("#city");
  const condition = document.querySelector('#condition');

  inputCityName.addEventListener("change", function() {
  const targetCityName = inputCityName.value;
  const appId = "4b5774e9f3d2a07b84f0f2f88e486224";
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${targetCityName}&units=metric&lang=ja&appid=${appId}`;
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    // 通信が完了した時  4はダウンロードが完了した
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        todayWeather(xhr.responseText);
      } else {
        alert("サーバーエラーが発生しました。");
      }
    } else {
      // condition.innerHTML = "<a>通信中</a>";
        alert("通信中...");
    }
  };

  //通信方式とURLを設定
  xhr.open("GET", requestUrl);
  //通信を実行
  xhr.send();
  xhr.onreadystatechange = function () {
    //通信が完了
    if (xhr.readyState == 4) {
      ShowTodaysWeather(xhr.responseText);
    }
  };
    function ShowTodaysWeather(response) {
    const object = JSON.parse(response);
    const weather = object.weather[0].description;
    const city = object.name;
    condition.innerHTML = `現在の${city}の天気は「${weather}」です。`;
  }
});
