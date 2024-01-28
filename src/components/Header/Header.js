import "./Header.scss";
import "../Button.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/Icons/search.svg";
import myAvatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import Button from "../Button.js";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />

        <div className="header__search-container">
          <img
            src={searchIcon}
            className="header__search-icon"
            alt="magnifying glass"
          />
          <p className="header__search-text">Search</p>
        </div>
        <img
          src={myAvatar}
          class="header__avatar"
          alt="side profile of man's face"
        />
        <Button
          buttonClassName="button__header"
          label="UPLOAD"
          iconImage={uploadIcon}
          iconClassName="button__icon"
        />
      </header>
    </>
  );
}

export default Header;
