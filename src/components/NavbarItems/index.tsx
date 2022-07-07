import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import useWindowSize from '../windowSize';
import { i18n } from '../../translations/i18n';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  footerStyle: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 38,
    backgroundImage: `url(/bottom-shape.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 199,
    display: 'flex',
    justifyContent: 'center',
  },
  langDivStyle: {
    width: '54%',
    height: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langText: {
    fontSize: 12,
    cursor: 'pointer',
    color: 'rgb(47, 67, 154)',
  },
  selectedLangText: {
    fontSize: 12,
    cursor: 'pointer',
    color: 'rgb(47, 67, 154)',
    borderBottom: '1px solid rgb(47, 67, 154)',
  },

  // Web css
  mainDiv: {
    display: 'flex',

    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  langTextWeb: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    fontSize: 20,
    cursor: 'pointer',
    color: '#fff',
    marginLeft: 12,
    marginRight: 12,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 11,
      marginLeft: '7px',
      marginRight: '7px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
      marginLeft: '8px',
      marginRight: '8px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
      marginLeft: '15px',
      marginRight: '15px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 20,
      marginLeft: '24px',
      marginRight: '24px',
    },
  },
  selectedLangTextWeb: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    fontSize: 20,
    cursor: 'pointer',
    color: '#fff',
    borderBottom: '1px solid #fff',
    marginLeft: 24,
    marginRight: 24,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 11,
      marginLeft: '14px',
      marginRight: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
      marginLeft: '16px',
      marginRight: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
      marginLeft: '30px',
      marginRight: '30px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 20,
      marginLeft: '46px',
      marginRight: '46px',
    },
  },
  isScrolled: {
    borderBottom: '1px solid #2f439a',
  }
}));

const NavbarItems = (props) => {
  // const { func } = props

  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => setScrolled(window.scrollY > 60);

  useEffect(() => {
    // clean up code
    // window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const classes = useStyles();

  const [language, setLanguage] = useState("he");
  const handleOnclick = (e: any) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };

props.lang.navLang.getlang(language)

  const { t } = useTranslation()
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>
      <div>
        <ul style={{ display: useWindowSize() <= 910 ? "none" : '' }}>
          <li><NavLink to={"/"} className="link">{t("home")}</NavLink></li>
          <li><NavLink to={"/our-solution/"} className="link">{t('solution')}</NavLink></li>
          <li><NavLink to={"/about-us/"} className="link">{t('about')}</NavLink></li>
          <li><NavLink to={"/blog/"} className="link">{t("blog")}</NavLink></li>
          <li><NavLink to={"/career/"} className="link">{t("career")}</NavLink></li>
          <li ><NavLink to={"/contact-us/"} className="link" >{t("contact")}</NavLink></li>
          <li><NavLink to={"/app/"} className="link-button">{t("vendors")}</NavLink></li>
          <li ><NavLink to={"/app/"} className="link-button">{t("buyers")}</NavLink></li>

        </ul>
      </div>
      <div className={classes.mainDiv} >

        <button
          value='he'
          className={
            `lang ${language === 'he' ? scrolled ? `${classes.isScrolled} ${classes.selectedLangTextWeb}` : classes.selectedLangTextWeb : classes.langTextWeb}`
          }
          onClick={(e) => handleOnclick(e)}
        >
          {t('he')}
        </button>


        <button
          value='ar'
          className={
            `lang ${language === 'ar' ? scrolled ? `${classes.isScrolled} ${classes.selectedLangTextWeb}` : classes.selectedLangTextWeb : classes.langTextWeb}`
          }
          onClick={(e) => handleOnclick(e)}
        >
          {t('ar')}
        </button>

        <button
          value='en'
          className={
            `lang ${language === 'en' ? scrolled ? `${classes.isScrolled} ${classes.selectedLangTextWeb}` : classes.selectedLangTextWeb : classes.langTextWeb}`
          }
          onClick={(e) => handleOnclick(e)}
        >
          {t('en')}
        </button>
      </div>


    </div>
  )
}

export default NavbarItems