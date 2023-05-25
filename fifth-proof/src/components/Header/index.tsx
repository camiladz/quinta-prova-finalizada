import './styles.scss'
import userImage from '../../assets/Avatar.svg'

export const Header = () => {

    return <>
        <header className="header">
            <div className="store__logo">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                </svg>
                <span className="store__name">
                    Trainee Store
                </span>
            </div>
            <div className="user__info">
                <svg className="help__icon"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#DAE0E4" stroke="#DAE0E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.08997 9.00008C9.32507 8.33175 9.78912 7.76819 10.3999 7.40921C11.0107 7.05024 11.7289 6.91902 12.4271 7.03879C13.1254 7.15857 13.7588 7.52161 14.215 8.06361C14.6713 8.60561 14.921 9.2916 14.92 10.0001C14.92 12.0001 11.92 13.0001 11.92 13.0001" stroke="#142159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 17H12.0094" stroke="#142159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg className="notification__icon"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 8.40096C17.5 6.96853 16.9205 5.59478 15.8891 4.5819C14.8576 3.56903 13.4587 3 12 3C10.5413 3 9.14236 3.56903 8.11091 4.5819C7.07946 5.59478 6.5 6.96853 6.5 8.40096C6.5 14.7021 3.75 16.5024 3.75 16.5024H20.25C20.25 16.5024 17.5 14.7021 17.5 8.40096Z" fill="#DAE0E4" stroke="#D0D5EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.586 20.1025C13.4248 20.3754 13.1935 20.6018 12.9152 20.7592C12.6369 20.9167 12.3213 20.9995 12.0001 20.9995C11.679 20.9995 11.3634 20.9167 11.0851 20.7592C10.8068 20.6018 10.5755 20.3754 10.4143 20.1025" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="18" cy="3.75" r="3" fill="#F03460" />
                </svg>

                <div className="user__profile">
                    <img src={userImage} alt="user image profile" className="user__image" />
                    <span className="user__name">
                        Gustavo Silva
                    </span>
                </div>
            </div>
        </header>
    </>
}