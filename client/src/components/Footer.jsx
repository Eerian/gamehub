import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="copyright">Copyright &copy; 2023, Game Hub</div>
        <div className="social-media-icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
