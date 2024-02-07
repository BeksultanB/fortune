
import Subtitle from "shared/ui/Subtitle";
import s from "./AdminView.module.scss"

const AdminView = ({ form, list, mode }: any) => {

    return (
        <div className={s.container}>
            <div className={s.form}>
                <Subtitle>{mode === "create" ? "Добавление призов" : "Редактирование призов"}</Subtitle>
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