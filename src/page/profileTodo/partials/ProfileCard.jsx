import avatar from '../../../assets/images/profile.webp';
import Button from '../../../components/Button';

const ProfileCard = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className={`p-6! rounded-2xl shadow-lg max-w-112.5 flex flex-col justify-center transition-colors duration-300 
      ${isDarkMode ? "bg-[#242526] text-white" : "bg-white text-[#333"}`}>
      <div className="flex items-center gap-3.75 mb-3.75! ">
        <img src={avatar} alt="Avatar" className="w-15 h-15 rounded-full bg-[#eee]" />
        <div>
          <h2 id="name-display">Nama Saya</h2>
          <p className="text-[0.9rem] text-[#666666]">Frontend Developer</p>
        </div>
      </div>
      <p className="text-[0.9rem] mb-5! leading-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
        facilis perspiciatis porro? Consequatur ad recusandae hic deleniti
        blanditiis quaerat obcaecati.
      </p>

      <Button 
      variant='secondary'
      onClick={()=>{
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('isDarkMode', !isDarkMode)}}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Button>
    </div>
  );
};

export default ProfileCard;
