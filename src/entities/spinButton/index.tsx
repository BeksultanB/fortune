
import Button from 'shared/ui/buttons/Button';

import s from "./SpinButton.module.scss"

const SpinButton = (props: any) => {

    return (
        <Button
            className={s.button}
            style={
                props.disabled ?
                    { background: "rgb(155, 155, 155)", color: "#0b6879" }
                    : null
            }
            {...props}
        >
            Крутить
        </Button>
    );
}
export default SpinButton