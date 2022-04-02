import { v4 as uuidv4 } from 'uuid'

const markers = new Map()

const markersArr = [
    {
      id:'1',
      name:'Чайная у Норвежца',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Норвежец предлагает своим посетителям один сорт чая, но каждый раз, когда вы заказываете чашечку чая, вкус  будет разным, но вы всегда будете плакать. Примечание: заходить со своим платком',
      adress: 'искать в проулке между домом старой кошатницы и магазином летающих шляпок',
      price:'150',
      coords:{
        lat:48.494722,
        lng:35.045639,
      },
    },
    {
      id:'2',
      name:'Запчасти старого фюрера',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Хотите дать жизнь антиквариату? До сих пор пользуетесь посудомоечной машиной из 2123 года? Тогда вам сюда. Гаечный болт научит вашу микроволновку варить еду, а покрытие H7Q на тостер научит делать его на выходе жидкие тосты!',
      adress: 'в люке под автомагистралью близ двух башен Тёмного Лорда',
      price:'150',
      coords:{
        lat:48.500720,
        lng:35.045639,
      },
    },
    {
      id:'3',
      name:'Часовые пояса',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Ремни и пояса на любой размер. Будьте осторожны с пряжкой — неверное нажатие и вас перенесёт в пекарню тетушки Мэгги',
      adress: 'от 97 памятника коту королевы Марго идти пешком 2 года, а затем перекреститься перед ивовым деревом',
      price:'150',
      coords:{
        lat:48.554722,
        lng:35.155639,
      },
    },
    {
      id:'4',
      name:'Инквизиция в раю',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Не нравится человеческий волос, его цвет? Тогда заходите к нам! Только у нас можно сделать змеиные, корпускульные и жидкие волосы! Примечание: не расчесывать гребнем из кротовой норы: волосы начинают смеяться',
      adress: 'гора бобра в лесу Мёда и Страстей, девятый перекрёсток у лавовой дамбы',
      price:'150',
      coords:{
        lat:48.4094722,
        lng:34.995639,
      },
    },
    {
      id:'5',
      name:'Прачечная забвения',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Мы постираем вашу одежду так, что она забудет вас! Жалобы о том, что она ходит за вами по пятам не принимаются.',
      adress: 'чердачный люк в полу бара "Кокетливый герцог". Стучать 235 раз',
      price:'150',
      coords:{
        lat:48.454722,
        lng:35.155639,
      },
    },
    {
      id:'6',
      name:'Усы домовика',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Клининговая служба на дом. Вы больше не найдёте свои чайные ложки',
      adress: 'зеркало водосточной трубы между Сигма-сквер и 5 домом терпимости.',
      price:'150',
      coords:{
        lat:48.474722,
        lng:35.065639,
      },
    },
    {
      id:'7',
      name:'Подошвы барона Де Ларгуа',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Ваши стопы исчезнут и больше не придётся ходить.',
      adress: 'перед стеклом заброшенного дома на улице Вечерних птиц крикнуть 23 раза. Имитируйте чайку, иначе на человеческий крик слетятся воробьи.',
      price:'150',
      coords:{
        lat:48.514722,
        lng:35.085639,
      },
    },
    {
      id:'8',
      name:'Гномий подшерсток',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Шерстяной покров на руки. Теперь вы сможете колоть ледники',
      adress: 'долина Круглых халабуд, улица старого Скворца, переверните камень у дома без номера и дверной ручки ',
      price:'150',
      coords:{
        lat:48.474722,
        lng:35.105639,
      },
    },
    {
      id:'9',
      name:'Краски Отшельника',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      ],
      description:'Надоела плоскость картин? Мы предлагаем новые краски, которые оживят в прямом смысле этого слова любой ваш рисунок! Примечание: не отрывайте кисть от листа, пока не закончите. Могут быть не благоприятные последствия',
      adress: 'Имперская тюрьма на острове Удачи. Дайте хлеб стражнику для входа.',
      price:'150',
      coords:{
        lat:48.524722,
        lng:34.985639,
      },
    },
    {
      id:'10',
      name:'Оптика миссис Люмен',
      photo:'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/trnth.jpg?raw=true',
      sidephotoes: [
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/second.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/third.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fourth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/fifth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/sixth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/seventh.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/eighth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/ninth.jpg?raw=true',
        'https://github.com/SteppenHasen/test_for_luxequality/blob/master/public/interier/first.jpg?raw=true',
      ],
      description:'Ваш взгляд встретится с глазами ястреба и различит призрака при расстоянии двух световых лет.',
      adress: 'набережная Сливочной реки, улица Бравой надежд, дом № 0 перед упавшим булыжник с Зеркальной горы.',
      price:'150',
      coords:{
        lat:48.474722,
        lng:34.985639,
      },
    },
  ]

markersArr.forEach(markerInfo => {
    markers.set(markerInfo.id, markerInfo)
})

function getAllMarkers() {
    return Array.from(markers.values());
}

function existMarkerWithID(markerID) {
    return markers.has(markerID)
}

function addNewMarker(markerInfo) {
    let markerID = uuidv4()
    markers.set(
        markerID, Object.assign(markerInfo, {
            id:markerID,
        })
    );
};

function deleteMarkerById(markerID) {
    const deleted = markers.get(markerID)
    markers.delete(markerID)
    return deleted
}

function getMarkerById(markerID) {
    return markers.get(markerID)
}

export { 
    getAllMarkers, 
    addNewMarker,
    existMarkerWithID,
    deleteMarkerById,
    getMarkerById }