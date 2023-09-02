import MyCard from "../components/Card";
import "../App.css";
import Widget from "../components/resumeWidget";
import { Slide } from "react-awesome-reveal";
export default function Resume() {
  return (
    <section id="resume" className="bg-body-tertiary py-5">
      <Slide
        cascade
        damping={0.3}
        className="container d-flex justify-content-between flex-column align-items-center"
      >
        <h2 className="text-primary text-center text-uppercase fw-bold mb-5 fs-0">
          Experience
        </h2>
        <MyCard
          date={"2021 - Present"}
          dateColor={"primary"}
          job={"Web Developer"}
          address={"Stark Industries Los Angeles, CA"}
          cardText={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
          }
        />

        <MyCard
          date={"2017 - 2019"}
          dateColor={"primary"}
          job={"SEM Specialist"}
          address={"Wayne Enterprises Gotham City, NY"}
          cardText={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
          }
        />

        <h2 className="text-danger text-center text-uppercase fw-bold mb-5 mt-5 fs-0">
          Education
        </h2>

        <MyCard
          date={"2021 - Present"}
          dateColor={"danger"}
          job={"Web Developer"}
          address={"Stark Industries Los Angeles, CA"}
          cardText={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
          }
        />

        <MyCard
          date={"2017 - 2019"}
          dateColor={"danger"}
          job={"SEM Specialist"}
          address={"Wayne Enterprises Gotham City, NY"}
          cardText={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga."
          }
        />
        <div className="bg-white rounded-3 mt-5 shadow w-75 mx-auto p-5">
          <h2 className="grad-text text-center text-md-start text-capitalize fw-bold p-1">
            Professional Skills
          </h2>
          <div class="row g-4 mt-2 ">
            <Widget content={"SEO/SEM Marketing"} />
            <Widget content={"SEO/SEM Marketing"} />
            <Widget content={"Statistical Analysis"} />
            <Widget content={"Web Development"} />
            <Widget content={"Network Security"} />
            <Widget content={"Adobe Software Suite"} />
          </div>

          <h2 className="grad-text text-center text-md-start text-capitalize fw-bold mt-4 mb-3 p-1">
            Languages
          </h2>
          <div class="row g-4 mt-2">
            <Widget content={"HTML"} />
            <Widget content={"CSS"} />
            <Widget content={"JavaScript"} />
            <Widget content={"ReactJs"} />
            <Widget content={"Bootstrap"} />
            <Widget content={"GitHub"} />
          </div>
        </div>
      </Slide>
    </section>
  );
}
