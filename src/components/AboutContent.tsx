import { Link } from 'react-router-dom'

export default function AboutContent() {
  return (
    <div className="flex flex-1 justify-center py-10 md:py-20">
      <div className="layout-content-container flex flex-col max-w-5xl flex-1 px-6 md:px-10">
        {/* Hero Section */}
        <section className="@container mb-16 md:mb-24">
          <div className="@[480px]:p-4">
            <div 
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2sUN62sM3Jl6sqPCvCtYeys2TZzFqTurEBnlaxvyO2mWWPYA3c8UXdROnHQ2RluP64422BbSAs79_YE6pZlubgyEWphLfa8lHJMzkfFoPfZUN06YF7UW06fQ1FQpSC_nprLIwF6lD1BLYDC7B0V4z_F28i2i455xeW9UxbATkaTE29P8QF-Qc4XseewvZWwyE8k7eizD51XaWixljhjtKqmj1txTvPz2PbZS8aOsQxI1vP8JGcsGia9gz0prxqkj2p8-acmZiwoY")`
              }}
            >
              <h1 className="font-serif text-white text-4xl font-bold leading-tight tracking-tight @[480px]:text-6xl max-w-2xl">
                Baked with Love, From My Kitchen to Yours.
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base max-w-lg">
                Discover the passion and tradition behind every one of Evelyn's homemade cakes.
              </h2>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="mb-16 md:mb-24 flex flex-col items-center">
          <div className="max-w-3xl text-center">
            <h2 className="font-serif text-text-light dark:text-text-dark text-[28px] md:text-4xl font-bold leading-tight tracking-tight mb-4">A Lifelong Passion for Baking</h2>
            <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed">
              From my earliest memories, the kitchen has been my sanctuary. The scent of melting butter, the gentle hum of the mixer, the warmth of the oven—these were the constants of my childhood. I'm Evelyn, and this bakery is the culmination of a lifelong dream, a place where time-honored family recipes meet a genuine love for creating something special.
            </p>
          </div>
        </section>

        {/* Image Grid */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg col-span-2 row-span-2"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBkqW6mzdtknmlujIw_tQCq9dKZe4hKsXDHky-_iTUhZUCMDjo4xm0nVuim1rlsa0HuAHT9YpA8a8TxyyGQEVTOtcXU6cr3Qb46aCLJwpPsmBPQyzmdAE74RS_qvXuxWHHx3blGJzlwbP11xAHeYTMJBrK1nIGEzKliqNy0jirOi8TV5lbh5oql369I7msSFDkwdbB4jkP_tw-do2BG5XAd1zXnFyXGQXCxJH1uYZJlOJzo1tlNe__Ulzi3GlJtVgN3tB4esYNg2o")`
              }}
            />
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAg59CLs-EM6xnNa22WlsBYXJlx-cReZp3Ev6Xvj86JX4Mgly2_yIXbLpvINI8GvO7w4x9kQa3hPouN2tHQ2cwaoA5Em8c0TCbn3kon5mML9s5_GqeWaTCmFAPuLfJFhTd-Pdl91UuzekmxAa-wozXqY5s8pqtTjiOl5veUY4HGXLIZz8EZHbJc7FiqCqcnGNr2NS9tPyG6gEdpfkto51CkqsPjGjLjJV5AzqbAtRcmjDuSR67OG0WfTJU_Dvx81PlORgl3vlNXGaE")`
              }}
            />
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdIrOkZz6xFg8jL5tWuw_Duqqp-J73MooqTil1DLshmcO2MeNh4vWs3XFuECNBsdjeGkW8kJhM97o1XEZ5rnF0CkRzsbva0tSCL7UMofgjWp4QhgOQ4VgbUw2IMAIGSEUD9CbKz881DL7uTv0FKhvhZ6pMyT2Lh8tDNEZp_4C2rpbc8-IQu0PSUpCxkIYGffIQS2sUUdSdao4ELzdUBxD3A7tGj8cBM-7liVbvGrV2oKHDRBwNIyWUqXHQjwijHmWuk437DQZYS9s")`
              }}
            />
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuADw2OFW4_Tu5WiEgv88s8l-1Z74Wve3Melj4hyNoi-Pa06Aw-BC_8mWjihFQCZnQQlASk6qrjUWniUFQ8ce-NTzRMXhN2XPvaKLDrSEZ64nGZr_ayyBIEBOJ9pA-p7HI2wJAzIhJ5mQYciHr7Iy8Y8IGxswUswX8zNaqi9WPmMcY-KaQfgHmx6HmZ8lhRg0QYeuZ_Ls9hQpx4jWeuzAUFnUE0rsqBBkA78ltYGHSQaVduX3b_qJICcGgDC1DF8t4ixEcibbRfLBB4")`
              }}
            />
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5idLoMkBIeS1IMV01zg20y2bWgC4ljTYwCP-yeOd9DrwvXN59Uryk3VzwADyg7smh5z25TvdOXs6X7O3_R2GMbdawp6HNHdBcV7XqrJa_RjWj_nr_IlBHERXdWxdTV-7F02mveylBdXw8XEmEZOeiVJ-nJOXGSSNdW8jdHHSc1ZVYICZW2bXn0d3PGyFtT1op-DOyX5F5eu2P0I7zIrB7etrSWFfaCgPZyZE7K8OkC_sJUrnireWVeOu9PNREzC49DMJVlG-155c")`
              }}
            />
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-16 md:mb-24 flex justify-center">
          <div className="text-center max-w-3xl border-l-4 border-primary pl-8 py-4">
            <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-text-light dark:text-text-dark">
              "Every cake tells a story. It's not just about flavor; it's about celebration, comfort, and the joy of sharing."
            </p>
            <span className="block mt-4 text-sm font-bold tracking-widest text-accent-light dark:text-accent-dark uppercase">— Evelyn</span>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16 md:mb-24 flex flex-col items-center">
          <div className="max-w-3xl text-center">
            <h2 className="font-serif text-text-light dark:text-text-dark text-[28px] md:text-4xl font-bold leading-tight tracking-tight mb-4">Our Philosophy</h2>
            <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed">
              At Evelyn's, we believe in the magic of baking from scratch. Every cake is a celebration of fresh, locally-sourced ingredients, and a genuine love for creating something special. We don't take shortcuts. We pour our hearts into every mix, bake, and decoration to bring you a truly homemade experience that you can taste in every single bite.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-10 md:py-16 bg-primary/10 dark:bg-primary/20 rounded-xl">
          <div className="flex flex-col items-center gap-4 px-6">
            <h3 className="font-serif text-text-light dark:text-text-dark text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              Ready for a Slice of Happiness?
            </h3>
            <p className="max-w-xl text-text-light dark:text-text-dark/80 text-base font-normal leading-normal">
              I would be honored to bake for your next celebration, or simply for a moment of sweet indulgence.
            </p>
            <Link 
              to="/cakes"
              className="flex mt-4 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity"
            >
              <span className="truncate">Explore Our Cakes</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}