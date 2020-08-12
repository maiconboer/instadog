import React from 'react'

// hook que retorna true se a tela estiver abaixo de determinada resolução
const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  

  React.useEffect(() => {

    
    function changeMatch() {
      const {matches} = window.matchMedia(media);
      setMatch(matches);
    }

    if(window.innerWidth < 640) {
      setMatch(true)
    }

    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    }
  },[media])

  return match;
}

export default useMedia;
