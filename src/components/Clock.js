import React, { PureComponent } from 'react'
import Hour from './Hour'
import Minutes from './Minutes'
import Second from './Seconds'


export default class Clock extends PureComponent {

    getHour = () => {
        const time = new Date
       return time.getHours()
        // console.log(this.getHour)
    }

    getMinutes = () => {
        const time = new Date
        return time.getMinutes()
        console.log(this.getMinutes)
    }

    getSeconds = () => {
        const time = new Date
        return time.getSeconds()
        console.log(time.getSeconds)

    }

  render() {
    // return 'test'
    return (
        <div>
            {/* {//These are our props witch are objects content is the prop } */}
            <Hour content="This is the hour" getHour={this.getHour} />
            {/* <Minute content="This is the minutes" getMinutes={this.getMinuts}/> */}
            <Minutes content="This is the minutes" getMinutes={this.getMinutes} />
            <Second content="This is the seconds" getSeconds={this.getSeconds}/>
        </div>
    )
    
  }
}