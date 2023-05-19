import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
    <div className={`styles.flexCenter w-[140px] h-[140px] rounded-full bg-purple-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-gradient-to-tr from-primary to-lightPrimary ... w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient-indigo">Get</span>
          </p>
          <img src={ arrowUp } alt="arrow" className="w-[23px] w-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient-indigo">Started</span>
        </p>
      </div>
    </div>
  )

export default GetStarted