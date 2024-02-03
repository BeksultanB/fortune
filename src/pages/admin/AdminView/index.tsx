
import Subtitle from "shared/ui/Subtitle";
import s from "./AdminView.module.scss"

const AdminView = ({ form, list }: any) => {

    return (
        <div className={s.container}>
            <div className={s.form}>
                <Subtitle>Добавление призов</Subtitle>
                {form}
            </div>
            <div className={s.content} >
                <Subtitle>Список призов</Subtitle>
                {list}
            </div>
        </div>
    );
}

export default AdminView;