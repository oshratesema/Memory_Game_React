import React, {useState} from 'react'
import Card from './Card'


export default function Cards() {
    const [items, setItems] = useState ([
        {id: 1, img:'/assets/html.png', state: ''},
        {id: 1, img:'/assets/html.png', state: ''},
        {id: 2, img:'/assets/css.png', state: ''},
        {id: 2, img:'/assets/css.png', state: ''},
        {id: 3, img:'/assets/js.png', state: ''},
        {id: 3, img:'/assets/js.png', state: ''},
        {id: 4, img:'/assets/scss.png', state: ''},
        {id: 4, img:'/assets/scss.png', state: ''},
        {id: 5, img:'/assets/react.png', state: ''},
        {id: 5, img:'/assets/react.png', state: ''},
        {id: 6, img:'/assets/vue.png', state: ''},
        {id: 6, img:'/assets/vue.png', state: ''},
        {id: 7, img:'/assets/angular.png', state: ''},
        {id: 7, img:'/assets/angular.png', state: ''},
        {id: 8, img:'/assets/nodejs.png', state: ''},
        {id: 8, img:'/assets/nodejs.png', state: ''},
    ].sort(() => Math.random() - 0.5))
  return (
    <div className='container'>
        { items.map((item, index) => (
            <Card key={index} item={item}/>
        ))}
    </div>
  )
}
