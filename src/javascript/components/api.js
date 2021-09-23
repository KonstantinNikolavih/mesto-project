// подключение
const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-1",
  headers: {
    authorization: "44181768-52c2-4bd5-af2c-8b3c8fbae037",
    "Content-Type": "application/json",
  }
}

/* .then(res => res.json())
.then((result) => {
  console.log(result);
}); */
// http запросы клиента - method

// GET - запрос данных
// POST - отправка данных
// PUT - заменна данных на сервере
// PATCH - частичная замена
// DELETE - удаление данных
// HEAD - запросы только заголовков


// запрос сервера
const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`ошибка ${res.status}`);
}
/* console.log(config) */
//.then отправка данных на сервер
//.catch запрос в случае ошибки

// запрос профиля
export const getProfil = (/* name, about, */ ) => {
  return fetch(`${config.baseUrl}/users/me`, {
  method: 'GET',
  headers: config.headers,
})
.then(getResponse)
}

//Редактирование профиля
export const getProfilEdit = (name, about, ) => {
  return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    about: about,
  })
})
.then(getResponse)
}





//Редактирование профиля
/* export const getProfil = () => {
    return fetch(`${config.baseUrl}/users/me`, {
     method: 'GET',
    headers: config.headers,
 })
 .then(getResponse);
 } */
 /* console.log(getProfil) */

/* export const getProfil = (name, about, ) => {
  return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    about: about,
  })
})
.then(getResponse) => {
  console.log(getResponse))
} */

// запрос профиля
export const getCard = (/* name, about, */ ) => {
  return fetch(`${config.baseUrl}/cards`, {
  method: 'GET',
  headers: config.headers,
})
.then(getResponse)
}



//Добавление новой карточки
export const getCardAdd = (name, link, ) => {
  return fetch(`${config.baseUrl}/cards`, {
  method: 'POST',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    link: link,
  })
})
.then(getResponse);
}
/*   })
    "likes": [],
  "_id": "5d1f0611d321eb4bdcd707dd",
  "name": "Байкал",
  "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  "owner": {
    "name": "Jacques Cousteau",
    "about": "Sailor, researcher",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
    "_id": "ef5f7423f7f5e22bef4ad607",
    "cohort": "local"
  },
  "createdAt": "2019-07-05T08:10:57.741Z"
}, */
