import React, {Component} from 'react'

export default class Footer extends Component {
    
    render() {
        return (
            <>
            
                <div style={{display: 'flex' ,alignItems: 'center'}}>
                    <h3>Developed by Shashank J. Sirothiya</h3>
                </div>
                <div>
                    <a href="" target="_blank" rel="noopener noreferrer"><img src="./instagram.png" alt="" /></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><img src="/linkedin2.png" alt="" /></a>
                    <a href="https://github.com/shashankjs2002/" target="_blank" rel="noopener noreferrer"><img src="\github.png" alt="" /></a>
                </div>
            </>
        );
    }
}

