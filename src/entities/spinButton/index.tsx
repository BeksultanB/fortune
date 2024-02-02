
import s from './SpinButton.module.scss';

const SpinButton = (props: any) => {

    return (
        <button className={s.button}
            style={props.disabled ? { background: "#0b6128", color: "rgb(177 177 177)" } : null}
            {...props}
        >
            Крутить
        </button>
    );
}
export default SpinButton