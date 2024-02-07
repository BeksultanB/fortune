
import FortuneItem from "entities/fortuneItem"
import s from "./FortuneItemsList.module.scss"
import DeleteFortuneItem from "features/deleteFortuneItem"
import EditFortuneItem from "features/editFortuneItem"

function FortuneItemsList({ list, fill, deleteSingle }: any) {

    return (
        <div className={s.wrapper}>
            {list?.map((item: any) => {
                return (
                    <div key={item.value} className={s.fortuneItemWarapper}>
                        <div className={s.buttons}>
                            <EditFortuneItem onClick={() => fill(item)} />
                            <DeleteFortuneItem onClick={() => deleteSingle(item?.id)} />
                        </div>
                        <FortuneItem
                            showValue
                            showCount
                            className={s.fortuneItem}
                            data={item}
                            iconProps={{ height: 80, width: 80 }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default FortuneItemsList