import React, { Component } from 'react';

// EXTERNAL LIBRARY
import MaterialIcon from 'material-icons-react'


class ReadMe extends Component {

    state = {
        shouldHide: true
    }

    handleClick() {
        if(this.state.shouldHide === false) {
            return 'readMe'
        }  else {
            return 'readMe hidden'
        }
    }


    render() {

        const { shouldHide } = this.state

        console.log(shouldHide)

        return (

            <div>

                <div className='readMeClose'>
                
                    <button type='button' className='buttonOpen' onClick={(e) => this.setState(prevState => ({shouldHide: !prevState.shouldHide}))}>
                        <MaterialIcon icon='arrow_right' color='#fff' />
                    </button>
                
                </div>

                <div className={this.handleClick()}>

                    <div className='readMeBlock'>
                    
                            <label>AllNotes</label>

                            <p>

                                This is a little preview of this project.
                                You can close this any time, pressing
                                the button on the bottom of this block.
                    
                            </p>

                            <span> <MaterialIcon icon='arrow_left' /> </span>

                            <p>

                                Here some tips to access the needed content from project.
                    
                            </p>

                            <ul className='listFunctions'>

                                <li> Category filter works by clicking on the logo at the main menu </li>
                                <li> Access comments by click on the title of the post </li>
                                <li> Access edit or delete clicking on those buttons after the line </li>
                                <li> Create a new post by clicking on add on bottom of page </li>
                                <li> Sort by newest, popular on to select fild on top - right </li>

                            </ul>

                            <p>

                                Don't forget you can access a complete read-me on the code...
                                So I hope you enjoy... BYE BYE =)
                    
                            </p>
                           
                            <button type='button' className='buttonClose' onClick={(e) => this.setState(prevState => ({shouldHide: !prevState.shouldHide}))}>
                                <MaterialIcon icon='arrow_left' color='#fff' />
                            </button>

                    </div>

                </div>
  
            </div>
            
        )
    }

};

export default ReadMe;