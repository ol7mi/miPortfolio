import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerInfo}>
                    <p>&copy; 2024 Eunmi. All Rights Reserved.</p>
                    <p>
                        Designed & Developed by{' '}
                        <a href="https://github.com/ol7mi" target="_blank" rel="noopener noreferrer">
                            Eunmi
                        </a>
                    </p>
                </div>
                <div className={styles.footerLinks}>
                    <a href="https://github.com/ol7mi" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="mailto:ol7mi@github.com">
                        <i className="bx bx-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
