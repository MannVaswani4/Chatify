import { makeStyles } from '@material-ui/core';
import backgroundImage from '../../assets/background.png'; 

export default makeStyles((theme) => ({
  container: {
    backgroundColor: "#1C40CA" ,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  box: {
    backgroundColor: "white",
  },

  title: {
    fontSize: '26px',
    fontWeight: 'bold',
  },

  imageShadow: {
    width: '120px',
    height: '86px',
    borderRadius: '13px',
  },

  image: {
    width: '100%',
    marginTop: '-16px',
  },

  footer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
  },

  linkHover: {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': { transform: 'scale(1.2)' },
  },
}))
