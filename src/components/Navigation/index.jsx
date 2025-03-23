import { useState } from 'react';
import styles from './navigation.module.css'

const Navigation = ({selectedLink}) => {

    return (
        <div className={styles.nav_menu}>
            <p className={styles.nav_item} onClick={() => selectedLink("home")}>Logo</p>
            <p className={styles.nav_item} onClick={() => selectedLink("home")}>Home</p>
            <p  onClick={() => selectedLink("countries")} className={styles.nav_item_selected}>Countries</p>
            <p className={styles.nav_item_selected} onClick ={() => selectedLink("cities")}>Cities</p>
            <p className={styles.nav_item}>Contact</p>
        </div>
    )
}

export default Navigation;