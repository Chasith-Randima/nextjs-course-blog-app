import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/Randima.jpg"
            alt="An Image shwoing Randima"
            width={300}
            height={300}
          />
        </div>
        <h1>Hi, Im Randima Silva</h1>
        <p>
          Iam a full stack developer.who has experienced in
          React,NodeJs,MongoDB,ReactNative,C and Python programming languages
        </p>
      </section>
    </>
  );
}

export default Hero;
