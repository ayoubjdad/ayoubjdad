import React from "react";
import styles from "./Experience.module.scss";

const experiences = [
  {
    logo: "https://media.licdn.com/dms/image/C560BAQEB7qKqHXOlSg/company-logo_100_100/0/1630665167974/ixpath_logo?e=1724284800&v=beta&t=vMVmmgTR5qHXoJR-MbQnqubYAxnr9AkEbCutoNbObuQ",
    title: "Frontend Developer",
    date: "February 2018 - February 2020",
    company: "iXPath",
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQHlzT7Q4k_HsA/company-logo_100_100/0/1676300226826?e=1724284800&v=beta&t=3RUeHkZvmINDpDeKasTTRFaGtUxnI8I1jfXxYtIOgKQ",
    title: "Frontend Developer",
    date: "February 2018 - February 2020",
    company: "Smart Africa",
  },
  {
    logo: "https://media.licdn.com/dms/image/C4E0BAQFcYPMh_zvFOA/company-logo_100_100/0/1644115489593?e=1724284800&v=beta&t=tHsIo7ydkhS_dBhaX2SVWZWk9r5RHZxPAxLMgmCejjU",
    title: " Graphic Designer",
    date: "February 2018 - February 2020",
    company: "ChoufTV.MA",
  },
  {
    logo: "https://media.licdn.com/dms/image/D4E0BAQF3GjvdM3GLRQ/company-logo_100_100/0/1697846452194?e=1724284800&v=beta&t=o7h5Dl_HRRBqqcplwIeIe6o78-gejf4ZyFsdtDgpI94",
    title: " Graphic Designer",
    date: "February 2018 - February 2020",
    company: "Raja Club Athletic",
  },
];

const SingleExperience = ({ key, logo, title, company, date }) => {
  return (
    <div
      className={styles.singleExperience}
      //   style={{
      //     borderBottom: key !== experiences.length - 1 && "1px solid #808080",
      //     paddingBottom: key !== experiences.length - 1 && "30px",
      //   }}
    >
      <img alt="" src={logo} />
      <div className={styles.details}>
        <p className={styles.title}>
          {title} at <span className={styles.company}>{company}</span>
        </p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>WORKING EXPERIENCE</div>
      <div className={styles.experiences}>
        {experiences.map(({ logo, title, company, date }, index) => (
          <SingleExperience
            key={index}
            logo={logo}
            title={title}
            company={company}
            date={date}
          />
        ))}
      </div>
    </div>
  );
}
