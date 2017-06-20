import React from 'react'
import handler from '../handlers/back'

export default (dispatch) => <span className="backButton" onClick={() => handler(dispatch)}><img src="https://cdn4.iconfinder.com/data/icons/chat-app-icon/36/back_2-128.png" /></span>
