import React from "react";

const About = () => {
  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-slate">
          <p>
            I'm Zaynoun Jamal, a full-stack developer with a passion for
            building powerful and innovative digital solutions. Currently in my
            third year of Computer Science at Lebanese University, I have gained
            extensive hands-on experience in web and mobile development,
            freelancing, and managing online projects.
          </p>

          <p>
            My journey began with a deep curiosity about technology, which led
            me to develop a strong foundation in programming. I have worked with{" "}
            <strong>Laravel, PHP, MySQL, and ASP.NET</strong> for backend
            development, while leveraging{" "}
            <strong>React.js, Next.js, and Tailwind CSS</strong> to create
            responsive and modern web applications. Additionally, I have
            experience in <strong>Java, XML, and Kotlin</strong> for mobile app
            development.
          </p>

          <p>
            Beyond coding, I have built and managed multiple online projects,
            including{" "}
            <strong>
              e-commerce websites, mobile apps, and business platforms
            </strong>
            . My ability to lead projects, collaborate with teams, and solve
            technical challenges efficiently sets me apart. I also have
            experience in{" "}
            <strong>
              graphic design, social media management, and digital marketing
            </strong>
            , allowing me to create well-rounded digital solutions.
          </p>

          <p>
            I am always learning and evolving, with a growing interest in{" "}
            <strong>AI and full-stack development</strong>. Whether it’s working
            on a complex web platform, optimizing UI/UX, or mentoring aspiring
            developers, I am driven by the challenge of pushing technology
            further and creating impactful digital experiences.
          </p>
        </div>

        <div className="relative max-w-[300px] mx-auto md:mx-0">
          <div className="relative z-10">
            <div className="rounded overflow-hidden">
              <img
                src="./image.png"
                alt="Zaynoun Jamal"
                className="grayscale hover:grayscale-0 transition-all duration-300 w-full h-auto"
              />
            </div>
            <div
              className="absolute -inset-1.5 border-2 border-highlight rounded z-[-1]"
              style={{ transform: "translate(15px, 15px)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
