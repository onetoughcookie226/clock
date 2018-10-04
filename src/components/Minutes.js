import React, { PureComponent } from 'react'
import './Minutes.css'
export default class Minutes extends PureComponent {
    render () {
        return (
            <main>
                {/* //looks for the props of this class/Hour ... props are content  */}
                {console.log(this.props)}
                <div>
                    <p>{this.props.content}</p>
                    <h4 className="minutes">{this.props.getMinutes()}</h4>
                </div>
            </main>
         
        )
    }
  }