import Image from "next/image";

export default function TeamInfo() {
  return (
    <section>
      <div className="team_info_sec sec-pad">
        <div className="container">
          <div className="heading">
            <h2>
              Built on Expertise. <span>Driven by Excellence.</span>
            </h2>
            <p>
              We are a team of experienced professionals, skilled specialists,
              and dedicated project teams united by a commitment to delivering
              complex projects with precision. Here’s what defines SJ Group and
              the way we work.
            </p>
          </div>
          <div className="team_info_wrapper">
            <div className="team_info_col">
              <div className="upper_sec">
                <h2>Tackle Meaningful Challenges</h2>
                <div className="icon">
                  <Image
                    src="/assets/images/career/team_info1.svg"
                    width="65"
                    height="65"
                    alt="icon"
                  ></Image>
                </div>
              </div>
              <div className="desc">
                <p>
                  This isn’t just another job — it’s an opportunity to solve
                  complex industry challenges and create solutions that drive
                  real impact. If you’re passionate about innovation, problem
                  solving, and building the future, you’ll thrive with us.
                </p>
              </div>
            </div>
            <div className="team_info_col">
              <div className="upper_sec">
                <h2>A Culture of Ownership & Growth</h2>
                <div className="icon">
                  <Image
                    src="/assets/images/career/team_info2.svg"
                    width="65"
                    height="65"
                    alt="icon"
                  ></Image>
                </div>
              </div>
              <div className="desc">
                <p>
                  We believe great ideas can come from anywhere. Our culture is
                  built on trust, ownership, and continuous growth empowering
                  you to take initiative, learn constantly, and create
                  meaningful impact
                </p>
              </div>
            </div>
            <div className="team_info_col">
              <div className="upper_sec">
                <h2>Collaborate with Passion</h2>
                <div className="icon">
                  <Image
                    src="/assets/images/career/team_info3.svg"
                    width="65"
                    height="65"
                    alt="icon"
                  ></Image>
                </div>
              </div>
              <div className="desc">
                <p>
                  You’ll work alongside a passionate team of driven
                  professionals in a collaborative environment built on trust,
                  learning, and shared success — where every contribution helps
                  shape a stronger future.
                </p>
              </div>
            </div>
            <div className="team_info_col">
              <div className="upper_sec">
                <h2>Innovate in a High Growth Environment</h2>
                <div className="icon">
                  <Image
                    src="/assets/images/career/team_info4.svg"
                    width="65"
                    height="65"
                    alt="icon"
                  ></Image>
                </div>
              </div>
              <div className="desc">
                <p>
                  The mining and energy sector is evolving rapidly and so are
                  we. Join a team driven by innovation, operational excellence,
                  and sustainable growth, where bold ideas create lasting
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
