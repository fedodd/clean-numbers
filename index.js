const button = document.querySelector('.button');
const textarea = document.querySelector('.inputArea');
const resultarea = document.querySelector('.outputArea');
button.addEventListener('click', e => {
  let result = textarea.value.replace(/\D/g, ',').split('');
  let newResult = result.reduce((acc, char, index) => {
    if (!acc.length) {
      if (char !==',') {
        return [...acc, char];
      }
    } else if (acc[acc.length-1] === ',' && char === ',') {
      return acc
    } else {
      return [...acc, char];
    }
    return acc;
  }, []);
  (newResult[newResult.length -1] === ',') ? newResult.pop(): null;

  const cleanResult = (charArr) => {
    let arr = charArr.join('').split(',');
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      obj[str] = true; // запомнить строку в виде свойства объекта
    }

    return  Object.keys(obj).sort(function (a, b) {
      return a - b;
    });
  }

  console.log(cleanResult(newResult));
  resultarea.value = cleanResult(newResult).join(',');
  resultarea.select();
  document.execCommand("copy");
  if (resultarea.value === '') {
    alert("Пустой список!");
  } else {
    alert("Список чисел скопирован в буфер обмена: " + resultarea.value);
  }
  
});
