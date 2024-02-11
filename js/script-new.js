console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+38 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введіть ім`я!'
    }
  ])

  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обов`язковий',
      
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введіть коректний телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    previewFiles(); // Отображаем превью загруженных файлов
        // Показываем изображение загрузки и бекдроп
        showLoadingImage();

    let formData = new FormData(event.target);

    console.log('Form data:', formData);
    console.log('Form data as array:', Array.from(formData.entries()));

    console.log('Form data:', formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
           if (xhr.status === 200) {
          console.log('Відправлено');
                           // Выключаем спиннер и фоновое затемнение перед alert
                          //  hideLoadingImage();
                          //  console.log('Loading image hidden');
          alert('Слава Україні! Ваше повідомлення відправлено.👍');
         

           // Очищаем форму полностью
    // event.target.reset();
          // Очищаем превью загруженных файлов
          // document.querySelector('.file_preview').innerHTML = '';
          window.location.reload();
        } else {
          alert('Невдача! Введіть коректні дані та спробуйте знову.😕');
         
        }
      
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
  // Функция для отображения изображения загрузки и фонового затемнения (backdrop)
  function showLoadingImage() {
    // Создаем обертку для элементов
    var loadingWrapper = document.createElement('div');
    loadingWrapper.classList.add('loading-wrapper');

    // Создаем элемент изображения загрузки
    var loadingImage = document.createElement('img');
    loadingImage.src = '../images/loading.gif';
    loadingImage.alt = 'Loading';
    loadingImage.classList.add('loading-image'); // Добавляем класс loading-image
    loadingWrapper.appendChild(loadingImage); // Добавляем изображение загрузки в обертку

    // Создаем элемент фонового затемнения
    var backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    loadingWrapper.appendChild(backdrop); // Добавляем фоновое затемнение в обертку

    // Добавляем обертку в body
    document.body.appendChild(loadingWrapper);
}

 
 // Функция для скрытия изображения загрузки и фонового затемнения (backdrop)
 function hideLoadingImage() {
   var backdrop = document.querySelector('.backdrop');
   var loadingImage = document.querySelector('.loading-image');

   
     // Удаляем элементы фонового затемнения и изображения загрузки
     if (backdrop) {
    
      console.log('Backdrop hidden'); // Проверяем, вызывается ли этот console.log
      backdrop.remove();
  }
  if (loadingImage) {
      loadingImage.remove();
  }
}
 
  // Функция для отображения превью выбранных файлов
 function previewFiles() {
   var preview = document.querySelector('.file_preview');
   var files = document.querySelector('input[type=file]').files;
 
   function readAndPreview(file) {
     // Проверка на тип файла и размер
     if (/\.(jpe?g|png|gif)$/i.test(file.name) && file.size <= 5 * 1024 * 1024) {
       var reader = new FileReader();
       reader.addEventListener("load", function () {
         var image = new Image();
         image.title = file.name;
         image.src = this.result;
         image.classList.add('preview-image');
         preview.appendChild(image);
       }, false);
       reader.readAsDataURL(file);
     }
   }
 
   if (files) {
     // Очищаем предыдущие превью только если есть файлы для отображения
     preview.innerHTML = '';
 
     [].forEach.call(files, readAndPreview);
   }
 }
 