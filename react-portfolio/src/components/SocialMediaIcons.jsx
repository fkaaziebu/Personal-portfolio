import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedInIcon fontSize="large" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
            >
                <TwitterIcon fontSize="large" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
            >
                <FacebookRoundedIcon fontSize="large" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
            >
                <InstagramIcon fontSize="large" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;