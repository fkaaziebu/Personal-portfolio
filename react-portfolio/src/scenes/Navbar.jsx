import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage=== lowerCasePage ? "text-yellow" : ""}
                hover:text-yelloe transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage);
                setIsMenuToggled(false);
            }
            }
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-red";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">FA</h4>
                
                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <DehazeIcon />
                    </button>
                )}


                {/* MOBILE NAV */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[300px]">
                        {/* CLOSE ICONS */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <CloseIcon />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 m-[33%] text-2xl text-grey">
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <Link 
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <Link 
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <Link 
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <Link 
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;