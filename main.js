const tracks = [
    {
        title: "Musicfun soundtrack",
        url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
]

const rootEl = document.getElementById("root") // Находим наш корневой <div> по id
const headerEl = document.createElement("h1") // создаем тег заголовка для страницы
headerEl.append("Musicfun Player") // добавляем текст в заголовок
rootEl.append(headerEl) //добавляем заголовок в корневой div

const tracksEl = document.createElement("ul") //создаем список треков

tracks.forEach((track) => {
    const trackEL = document.createElement("li") //создаем элемент трека
    const trackTitleEL = document.createElement("div") // создаем элемент для заголовка трека
    trackTitleEL.append(track.title) // добавляем заголовок трека в наш div
    trackEL.append(trackTitleEL) //добавляем элемент заголовка в трек

    const trackPlayerEL = document.createElement("audio") //создаем тег audio
    trackPlayerEL.controls = true // говорим, что нам нужен интерфейс управления аудио
    trackPlayerEL.src = track.url //добавляем ссылку на наш файл
    trackEL.append(trackPlayerEL) // и добавляем весь аудио элемент в наг трек

    tracksEl.append(trackEL) //добавляем трек в список треков
})
rootEl.append(tracksEl) // и теперь добавляем список треков в наш корневой div-элемент