// @flow
import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import Logout from './Logout'
import styles from './Sidebar.scss'
import Tooltip from '../../../components/Tooltip'
import HomeIcon from '../../../assets/navigation/home.svg'
import HistoryIcon from '../../../assets/navigation/history.svg'
import SendIcon from '../../../assets/navigation/send.svg'
import ReceiveIcon from '../../../assets/navigation/receive.svg'
import ContactsIcon from '../../../assets/navigation/contacts.svg'
import TokenSaleIcon from '../../../assets/navigation/tokens.svg'
import SettingsIcon from '../../../assets/navigation/settings.svg'
import { ROUTES } from '../../../core/constants'

import LogoWithoutText from '../../../assets/images/logo-without-text.png'

type Props = {
  className: string,
  showTokenSaleModal: Function
}

const Sidebar = ({ className, showTokenSaleModal }: Props) => (
  <div className={classNames(styles.container, className)}>
    <div className={styles.group}>
      <div className={styles.logo}>
        <img src={LogoWithoutText} alt="neon-logo" />
      </div>

      <Tooltip title="Dashboard" position="right">
        <NavLink
          id="dashboard"
          exact
          to={ROUTES.DASHBOARD}
          className={styles.navItem}
          activeClassName={styles.active}
        >
          <HomeIcon />
          <div> Wallet </div>
        </NavLink>
      </Tooltip>

      <Tooltip title="Transaction History" position="right">
        <NavLink
          id="history"
          exact
          to={ROUTES.TRANSACTION_HISTORY}
          className={styles.navItem}
          activeClassName={styles.active}
        >
          <HistoryIcon />
          <div> Activity </div>
        </NavLink>
      </Tooltip>

      <Tooltip title="Send" position="right">
        <NavLink
          id="send"
          exact
          to={ROUTES.SEND}
          className={styles.navItem}
          activeClassName={styles.active}
        >
          <SendIcon />
          <div> Send </div>
        </NavLink>
      </Tooltip>

      <Tooltip title="Receive" position="right">
        <NavLink
          id="receive"
          exact
          to={ROUTES.RECEIVE}
          className={styles.navItem}
          activeClassName={styles.active}
        >
          <ReceiveIcon />
          <div> Receive </div>
        </NavLink>
      </Tooltip>

      <Tooltip title="Contacts" position="right">
        <NavLink
          id="contacts"
          to={ROUTES.CONTACTS}
          className={styles.navItem}
          activeClassName={styles.active}
        >
          <ContactsIcon />
          <div> Contacts </div>
        </NavLink>
      </Tooltip>

      <Tooltip title="Token Sale" position="right">
        <a
          id="tokenSale"
          className={styles.navItem}
          onClick={showTokenSaleModal}
        >
          <TokenSaleIcon />
          <div> Token Sale </div>
        </a>
      </Tooltip>

      <Tooltip title="Settings" position="right">
        <NavLink
          id="settings"
          to={ROUTES.SETTINGS}
          className={styles.navItem}
          activeClassName={styles.active}
        >
          <SettingsIcon />
          <div> Settings </div>
        </NavLink>
      </Tooltip>
    </div>

    <div className={styles.group}>
      <Tooltip
        className={classNames(styles.logoutToolTipGroup, styles.navItem)}
        title="Logout"
        position="right"
      >
        <Logout id="logout" />
        <div className={styles.logoutText}> Logout </div>
      </Tooltip>
    </div>
  </div>
)

export default Sidebar
