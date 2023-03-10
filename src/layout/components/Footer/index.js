import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const cx = classNames.bind(style);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </footer>
    );
}

export default Footer;
