import clsx from "clsx"
import s from "./EditIconButton.module.scss"
import IconButton from "../IconButton"
import PencilIcon from "shared/ui/icon/PencilIcon"

function EditIconButton({ className, ...props }: any) {
    return (
        <IconButton className={clsx("edit-icon-button", s.editButton, className)} {...props}>
            <PencilIcon width={22} height={22} />
        </IconButton>
    )
}

export default EditIconButton