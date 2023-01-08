import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import pj1 from "../assets/project-1.jpeg";
import pj2 from "../assets/project-2.jpeg";
import pj3 from "../assets/project-3.jpeg";
import pj4 from "../assets/project-4.jpeg";
import pj5 from "../assets/project-5.jpeg";
import pj6 from "../assets/project-6.jpeg";
import pj7 from "../assets/project-7.jpeg";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
}

const Project = ({ title, pj }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officia dolorem perferendis totam recusandae ducimus? Qui?
                </p>
            </div>
            <img src={pj} alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
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
                        Here are some few projects I have been working on and would want you to take a look
                    </p>
                </motion.div>

                {/* PROJECTS */}
                <div className="flex justify-center">
                    <motion.div
                        className="sm:grid sm:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={container}
                    >
                        <div className="flex justify-center text-center items-center p-10 bg-red
                                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                        >
                            BEAUTIFUL USER INTERFACES
                        </div>
                        <Project title="Project 1" pj={pj1} />
                        <Project title="Project 2" pj={pj2} />

                        {/* ROW 2 */}
                        <Project title="Project 3" pj={pj3} />
                        <Project title="Project 4" pj={pj4} />
                        <Project title="Project 5" pj={pj5} />

                        {/* ROW 3 */}
                        <Project title="Project 6" pj={pj6} />
                        <Project title="Project 7" pj={pj7} />
                        <div className="flex justify-center text-center items-center p-10 bg-blue
                                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                        >
                            SMOOTH USER EXPERIENCE
                        </div>
                    </motion.div>
                </div>
        </section>
    )
}

export default Projects;