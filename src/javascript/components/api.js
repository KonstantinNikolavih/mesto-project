// подключение
const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-1",
  headers: {
    authorization: "44181768-52c2-4bd5-af2c-8b3c8fbae037",
    "Content-Type": "application/json"
  }
}

// запрос сервера
const getResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`ошибка ${res.status}`)
}

//Редактирование профиля
const getProfil = (name, about, ) => {
  return fetch(`${config.baseUrl}https://nomoreparties.co/v1/cohortId/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
    name: name,
    about: about,
  })
})
.then(getResponse)
}
