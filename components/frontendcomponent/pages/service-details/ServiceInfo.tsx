import Image from "next/image";

export default function ServiceInfo() {
  return (
    <section>
      <div className="service_info sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <figcaption>
              <h3>Mining Operations Driven by Experience & Execution</h3>
              <div className="desc">
                <p>
                  Our mining operations combine experienced personnel, robust
                  equipment, structured workflows, and on-ground project
                  management to deliver consistent performance across demanding
                  sites. From establishing working areas to managing production
                  and maintaining operational continuity, we provide the
                  capabilities required to keep mining projects moving
                  efficiently.
                </p>
              </div>
            </figcaption>
            <figure>
              <Image
                src="/images/service/service-info.jpg"
                width={490}
                height={330}
                alt="service_info"
              ></Image>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
