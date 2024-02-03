
import Button from 'shared/ui/buttons/Button';

const SpinButton = (props: any) => {

    return (
        <Button style={props.disabled ? { background: "#0b6128", color: "rgb(177 177 177)" } : null} {...props}>
            Крутить
        </Button>
    );
}
export default SpinButton