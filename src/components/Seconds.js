import React, { PureComponent } from 'react'
import './Seconds.css'
export default class Seconds extends PureComponent {


    render () {
        return (
            <main>
                {/* //looks for the props of this class/Hour ... props are content  */}
                {console.log(this.props)}
                <div>
                    <p>{this.props.content}</p>
                    <h4 className="seconds">{this.props.getSeconds()}</h4>
                </div>
            </main>
         
        )
    }
  }