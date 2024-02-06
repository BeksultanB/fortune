
import Button from 'shared/ui/buttons/Button';

import s from "./SpinButton.module.scss"

const SpinButton = (props: any) => {

    return (
        <Button
            className={s.button}
            style={
                props.disabled ?
                    { background: "#051064", color: "rgb(177 177 177)" }
                    : null
            }
            {...props}
        >
            Крутить
        </Button>
    );
}
export default SpinButton