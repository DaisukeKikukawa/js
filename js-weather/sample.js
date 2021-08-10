//天気を取得する場所の名前
const inputCityName = document.querySelector('#city');
const condition = document.querySelector('#condition');

//ロンドンの天気が最初から表示されるようにする
const defaultCityName = inputCityName.value;
const appId = '4b5774e9f3d2a07b84f0f2f88e486224';
const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCityName}&units=metric&lang=ja&appid=${appId}`;
const xhr = new XMLHttpRequest();
//通信方式とURLを設定
xhr.open('GET', requestUrl);
//通信を実行
xhr.send();
xhr.onreadystatechange = function () {
  //通信が完了
  if (xhr.readyState == 4) {
    showTodaysWeather(xhr.responseText);
  }
};
function showTodaysWeather(response) {
  const object = JSON.parse(response);
  const weather = object.weather[0].description;
  const city = object.name;
  condition.innerHTML = `現在の${city}の天気は「${weather}」です。`;
}

//選んだ都市によって天気が変わるようにする
inputCityName.addEventListener('change', function () {
  const targetCityName = inputCityName.value;
  const appId = '4b5774e9f3d2a07b84f0f2f88e486224';
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${targetCityName}&units=metric&lang=ja&appid=${appId}`;
  const xhr = new XMLHttpRequest();

  //通信方式とURLを設定
  xhr.open('GET', requestUrl);
  //通信を実行
  xhr.send();
  xhr.onreadystatechange = function () {
    //通信が完了
    if (xhr.readyState == 4) {
      showTodaysWeather(xhr.responseText);
    }
  };
  function showTodaysWeather(response) {
    const object = JSON.parse(response);
    const weather = object.weather[0].description;
    const city = object.name;
    condition.innerHTML = `現在の${city}の天気は「${weather}」です。`;
  }
});
