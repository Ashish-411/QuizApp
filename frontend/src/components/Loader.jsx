import { HashLoader } from "react-spinners";
function Loader(){
    return(
        <section>
            <HashLoader color="#ff4d6d" size={80} />
            <p className="text-[2.5rem] font-[Bangers] text-[var(--color-accent1)]">Loading...</p>
        </section>
    )

}
export default Loader;