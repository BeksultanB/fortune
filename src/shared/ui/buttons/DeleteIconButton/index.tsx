import clsx from "clsx"
import s from "./DeleteIconButton.module.scss"
import IconButton from "../IconButton"
import GarbageIcon from "shared/ui/icon/GarbageIcon"

function DeleteIconButton({ className, ...props }: any) {
    return (
        <IconButton className={clsx("delete-icon-button", s.deleteButton, className)} {...props}>
            <GarbageIcon width={25} height={25} />
        </IconButton>
    )
}

export default DeleteIconButton