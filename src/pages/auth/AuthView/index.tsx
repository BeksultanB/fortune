
import s from "./AuthView.module.scss"

function AuthView() {
    return (
        <section className={s.container} tabIndex={-1} onKeyDown={(e) => console.log(e.key)}>
            <h2>AUTH</h2>
        </section>
    )
}
export default AuthView