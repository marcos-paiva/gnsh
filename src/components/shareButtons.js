import React from "react"
import ShareStyle from '../styles/modules/share.module.css'
import IconWhatsapp from '../static/icons/whatsapp.inline.svg'
import IconFacebook from '../static/icons/facebook.inline.svg'
import IconTwitter from '../static/icons/twitter.inline.svg'

const ShareButtons = () => {

    return(
        <ul className={ShareStyle.list}>
            <li>
                <button type="button" className={ShareStyle.btn}>
                    <IconWhatsapp/>
                </button>
            </li>
            <li>
                <button type="button" className={ShareStyle.btn}>
                    <IconFacebook/>
                </button>
            </li>
            <li>
                <button type="button" className={ShareStyle.btn}>
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