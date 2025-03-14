
import { useEffect, useState } from "react";

export default function useNavbarData(){
    const [navLinks, setNavLinks] = useState([])
    const [socialMediaLinks, setSocialMediaLinks] = useState([])
    const [socialLoginButtons, setSocialLoginButtons] = useState([])

    useEffect(() => {
    fetch('/Data/NavBarData.json')
    .then(response => {
        if(!response.ok){
            console.log('hubo un error en la obtencion de los datos')
        }
        else{
            return response.json()
        }
    })
    .then(data => {
        setSocialLoginButtons(data.socialLoginButtons)
        setNavLinks(data.navLinks)
        setSocialMediaLinks(data.socialMediaLinks)
    })
    .catch((error) => console.log('hubo un error wei', error))

   
},[])
return {navLinks, socialMediaLinks, socialLoginButtons}
}