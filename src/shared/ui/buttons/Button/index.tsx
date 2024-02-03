
import clsx from 'clsx';
import s from './Button.module.scss';

const Button = ({ children, className, ...props }: any) => {

    return (
        <button className={clsx("button", s.button, className)} {...props}>
            {children}
        </button>
    );
}
export default Button