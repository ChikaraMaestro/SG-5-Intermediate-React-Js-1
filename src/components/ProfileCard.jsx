import '../assets/css/todolist.css';
import avatar from '../assets/images/profile.webp';
import Button from './Button';

const ProfileCard = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className="card profile-section">
      <div className="profile-header">
        <img src={avatar} alt="Avatar" className="avatar" />
        <div>
          <h2 id="name-display">Nama Saya</h2>
          <p className="role">Frontend Developer</p>
        </div>
      </div>
      <p className="bio">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
        facilis perspiciatis porro? Consequatur ad recusandae hic deleniti
        blanditiis quaerat obcaecati.
      </p>

      <Button variant='secondary' onClick={()=>setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Button>
    </div>
  );
};

export default ProfileCard;
