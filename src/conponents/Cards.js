import React, {useState} from 'react'


export default function Cards() {
    const [items, setItems] = useState ([
        {id: 1, img:'/img/html.png', state: ''},
        {id: 1, img:'/img/html.png', state: ''},
        {id: 2, img:'/img/css.png', state: ''},
        {id: 2, img:'/img/css.png', state: ''},
        {id: 3, img:'/img/js.png', state: ''},
        {id: 3, img:'/img/js.png', state: ''},
        {id: 4, img:'/img/scss.png', state: ''},
        {id: 4, img:'/img/scss.png', state: ''},
        {id: 5, img:'/img/react.png', state: ''},
        {id: 5, img:'/img/react.png', state: ''},
        {id: 6, img:'/img/vue.png', state: ''},
        {id: 6, img:'/img/vue.png', state: ''},
        {id: 7, img:'/img/angular.svg', state: ''},
        {id: 7, img:'/img/angular.svg', state: ''},
        {id: 8, img:'/img/nodejs.svg', state: ''},
        {id: 8, img:'/img/nodejs.svg', state: ''},
    ])
  return (
    <div>cards</div>
  )
}
