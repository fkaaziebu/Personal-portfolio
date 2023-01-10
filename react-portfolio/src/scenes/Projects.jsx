import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import pj1 from "../assets/project-1.jpeg";
import pj2 from "../assets/project-2.jpeg";
import pj3 from "../assets/project-3.jpeg";
import pj4 from "../assets/project-4.jpeg";
import pj5 from "../assets/project-5.jpeg";
import pj6 from "../assets/project-6.jpeg";
import pj7 from "../assets/project-7.jpeg";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GitHubIcon from '@mui/icons-material/GitHub';
import useMediaQuery from "../hooks/useMediaQuery";


const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
}

const Project = ({ title, pj, time }) => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const overlayStyles = `absolute h-full w-full sm:opacity-0 sm:hover:opacity-90 sm:transition sm:duration-500
    sm:bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue rounded-[15px]`;

    return (
        <motion.div 
            className="relative border-2 border-grey rounded-[15px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: time, duration: 0.5 }}
            variants={ projectVariant }
        >
            <div className={overlayStyles}>
                <div className="flex mt-7 bg-grey sm:bg-none p-[15px] text-2xl sm:text-1xl sm:underline rounded-[5px]">
                    <a href="http://www.google.com" target="_blank" rel="noreferrer">View Project {isAboveSmallScreens ? "": <RemoveRedEyeIcon fontSize="large" />}</a>
                </div>
                <div className="flex mt-3 bg-grey sm:bg-none p-[15px] text-2xl sm:text-1xl sm:underline rounded-[5px]">
                    <a href="http://www.github.com" target="_blank" rel="noreferrer">Check Github {isAboveSmallScreens ? "": <GitHubIcon fontSize="large" />}</a>
                </div>
            </div>

            <p className="absolute w-[100%] text-center text-3xl font-playfair p-[15px] bg-blur bg-deep-blue sm:bg-none rounded-t-[15px]">{title}</p>
            <img className=" rounded-[15px]" src={pj} alt={title} />
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-32 pb-16">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        MY <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Here are some few projects I have been working on and 
                    would want you to take a look
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <div className="grid sm:grid-cols-3 gap-[10px]">
                    <Project title="Uber Rider Site" pj={pj1} time={0.1} />
                    <Project title="Ecommerce Site" pj={pj2} time={0.2} />

                    {/* ROW 2 */}
                    <Project title="Flakes order Site" pj={pj3} time={0.3} />
                    <Project title="Personal Portfolio" pj={pj4} time={0.4} />
                    <Project title="Restaurant Site" pj={pj5} time={0.5} />

                    {/* ROW 3 */}
                    <Project title="Music School Site" pj={pj6} time={0.6} />
                    <Project title="Dashboard for Desktop" pj={pj7} time={0.7} />
                </div>
            </div>
        </section>
    )
}

export default Projects;