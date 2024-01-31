import SpinButton from "entities/spinButton";

const Spin = ({ onSpin }: any) => {

    return (
        <SpinButton onClick={onSpin}></SpinButton>
    );
}

export default Spin