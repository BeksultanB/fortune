
import s from './SpinButton.module.scss';

const SpinButton = (props: any) => {
    return (
        <button className={s.button} {...props}>Крутить</button>
    );
}
export default SpinButton