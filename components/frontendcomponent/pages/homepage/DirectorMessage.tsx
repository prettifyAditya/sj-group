import Image from "next/image";

export default function DirectorMessage() {
  return (
    <div className="director_message sec-pad-all">
      <div className="container">
        <div className="main_wrapper flex">
          <figure>
            <Image
              src="/images/home/director-img.jpg"
              width={640}
              height={505}
              alt="director-img"
            />
          </figure>
          <figcaption>
            <div className="heading">
              <h3>Director Message</h3>
              <div className="desc">
                <p>
                  Since our inception in 2005, our journey has been driven by a
                  simple commitment—to deliver mining and infrastructure
                  solutions with integrity, safety, and engineering excellence.
                  What began as a focused vision has grown into a trusted
                  organization providing end-to-end services across the complete
                  mining value chain.
                </p>
              </div>
              <div className="director_info">
                <button type="button" className="play-btn" />
                <div className="details">
                  <h6>Director's Name</h6>
                  <p>Director, SJ Group</p>
                </div>
              </div>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
