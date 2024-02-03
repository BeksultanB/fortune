
import FortuneItemForm from "widgets/fortuneItemForm";
import s from "./AdminView.module.scss"
import Subtitle from "shared/ui/Subtitle";

const AdminView = ({ mode, setMode }: any) => {

    return (
        <div className={s.container}>
            <div className={s.form}>
                <Subtitle>Добавление призов</Subtitle>
                <FortuneItemForm mode={mode} />
            </div>
            <div className={s.content} >
                <Subtitle>Список призов</Subtitle>
                {/* <FortuneItemsList  /> */}
            </div>
        </div>
    );
}

export default AdminView;