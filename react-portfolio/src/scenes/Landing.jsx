import useMdeiaQuery from "../hook/useMdeiaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelecetedpage }) => {
    const isAboveMediumScreens = useMdeiaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* IMAGE SECTION */}
        </section>
    )
}

export default Landing;