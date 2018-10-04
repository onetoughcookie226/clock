import React, { PureComponent } from 'react'
import './Hour.css'
export default class Hour extends PureComponent {

    // time = new Date();
    // hours = time.getHours()
    // hoursElement = document.getElementById("hour")
    //     hoursElement.innerHTML = hours
    
    render () {
        return (
            <main>
                {/* //looks for the props of this class/Hour ... props are content  */}
                {console.log(this.props)}
                <div>
                    <p>{this.props.content}</p>
                    {/* <p></p> */}
                    <h4 className="hour">{this.props.getHour()}</h4>
                </div>
            </main>
        )
    }
  }

