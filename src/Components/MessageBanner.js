import React, { useEffect, useRef } from 'react';
import '../Styles/_messageBanner.css'

const MessageBanner = props => {
    let fadeOutTimeout = useRef();
    let classCleanupTimeout = useRef();
    const firstUpdate = useRef(true);

    useEffect(() => {
        return () => {
            //don't run on init
            if(firstUpdate.current){
                firstUpdate.current = false;
                return;
            }

            clearTimeout(fadeOutTimeout.current);
            clearTimeout(classCleanupTimeout.current);
            
            document.querySelector(".messageBanner").classList.remove("fadeOut");
            document.querySelector(".messageBanner").classList.add("fadeIn");

            fadeOutTimeout.current = setTimeout(()=>{
                document.querySelector(".messageBanner").classList.add("fadeOut");
            }, 2500)

            classCleanupTimeout.current = setTimeout(()=>{
                document.querySelector(".messageBanner").classList.remove("fadeIn");
                document.querySelector(".messageBanner").classList.remove("fadeOut");
            }, 4000)

        }
    },);

    return (
        <div className={`messageBanner ${props.text?"fadeIn":""}`}>
            {props.text}
        </div>
    );
}
export default MessageBanner;