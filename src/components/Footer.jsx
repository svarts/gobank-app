import styles from '../style';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div><img src="https://ik.imagekit.io/laracasts/series/thumbnails/svg/developing-serverless-functions.svg" alt="" /></div>
      </div>
    </section>
)

export default Footer