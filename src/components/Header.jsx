import gradientBg from "../assets/gradient-bg.jpg";
import youtubeIcon from "../assets/youtube.png";

const Header = () => {
  return (
    <div>
      <div className="h-[30vh] rounded-xl overflow-hidden relative border border-gray-900">
        <img
          src={gradientBg}
          alt="gradient-bg"
          className="w-full h-full object-cover"
        />

        <div className="absolute w-full h-full z-10 bg-gradient-to-r from-[#000000ac] to-[#0000] top-0 left-0 flex flex-col justify-center px-20">
          <div className="flex gap-2 items-center mb-2">
            <img src={youtubeIcon} alt="yt-icon" className="w-6" />
            <p>WebSimp</p>
          </div>
          <h2 className="text-3xl font-semibold my-3">
            Dynamic Filter Options
          </h2>
          <p className="w-1/4 text-gray-500">
            Make easy and accesable filter option component for your next
            project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
