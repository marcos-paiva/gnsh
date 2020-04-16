import React from "react"
import ShareStyle from '../styles/modules/share.module.css'
import IconWhatsapp from '../static/icons/whatsapp.inline.svg'
import IconFacebook from '../static/icons/facebook.inline.svg'
import IconTwitter from '../static/icons/twitter.inline.svg'

import AudioHover from '../static/audio/action-hover.wav'
import AudioClick from '../static/audio/action-click.wav'


const ShareButtons = () => {

    const AudioHoverFile = new Audio(AudioHover)
    const AudioClickFile = new Audio(AudioClick)

    const effect = file => {
        file.play()
        console.log(file);
    }

    return(
        <ul className={ShareStyle.list}>
            <li>
                <button type="button" className={ShareStyle.btn} onClick={ effect(AudioClickFile) }>
                    <IconWhatsapp/>
                </button>
            </li>
            <li>
                <button type="button" className={ShareStyle.btn} onClick={ effect(AudioClickFile) }>
                    <IconFacebook/>
                </button>
            </li>
            <li>
                <button type="button" className={ShareStyle.btn} onClick={ effect(AudioClickFile) }>
                    <IconTwitter/>
                </button>
            </li>
        </ul>
    )
}

ShareButtons.propTypes = {

}

ShareButtons.defaultProps = {

}

export default ShareButtons