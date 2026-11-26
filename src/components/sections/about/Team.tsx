const teamColumns = [
  [
    {
      name: "Ujjwal Goel",
      designation: "Managing Director",
      image: "/images/team/ujjwal-goel.jpg",
      height: "tall",
    },
    {
      name: "Bhavana Gupta",
      designation: "General Manager - Marketing & Client Experience",
      image: "/images/team/bhavana-gupta.jpg",
      height: "medium",
    },
    {
      name: "Tarun Duggal",
      designation: "Assistant Manager - Design and Engineering",
      image: "/images/team/tarun-duggal.jpg",
      height: "medium",
    },
    {
      name: "Sadiq Abuagla",
      designation: "General Manager - Sales & Business Development",
      image: "/images/team/sadiq-abuagla.jpg",
      height: "medium",
    },
    {
      name: "Momin Hamid",
      designation: "Deputy General Manager - Project Management",
      image: "/images/team/momin-hamid.jpg",
      height: "tall",
    },
    {
      name: "Evanshu Arora",
      designation: "General Manager - Operations",
      image: "/images/team/evanshu-arora.jpg",
      height: "tall",
    },
  ],
  [
    {
      name: "Miryam Goel",
      designation: "Director Management",
      image: "/images/team/miryam-goel.jpg",
      height: "medium",
    },
    {
      name: "Gaurav Ralangi",
      designation: "General Manager - HR & Admin",
      image: "/images/team/gaurav-ralangi.jpg",
      height: "tall",
    },
    {
      name: "Varun Gupta",
      designation: "Deputy General Manager - Finance & Accounts",
      image: "/images/team/varun-gupta.jpg",
      height: "tall",
    },
    {
      name: "Alysson Mesina",
      designation: "Manager - Design & Engineering",
      image: "/images/team/alysson-mesina.jpg",
      height: "tall",
    },
    {
      name: "Ashok Chakravarthy",
      designation: "General Manager - Project Management",
      image: "/images/team/ashok-chakravarthy.jpg",
      height: "medium",
    },
  ],
  [
    {
      name: "Tawfiq Zakama",
      designation: "General Manager - Commercial",
      image: "/images/team/tawfiq-zakama.jpg",
      height: "tall",
    },
    {
      name: "George Hanna Saloum",
      designation: "Deputy General Manager - Project Management",
      image: "/images/team/george-hanna-saloum.jpg",
      height: "tall",
    },
    {
      name: "R. Sayee Srinivasan",
      designation: "Deputy General Manager - Finance & Accounts",
      image: "/images/team/sayee-srinivasan.jpg",
      height: "tall",
    },
    {
      name: "Hammad Asheek",
      designation: "Assistant Manager - Design & Engineering",
      image: "/images/team/hammad-asheek.jpg",
      height: "tall",
    },
  ],
];

const TeamCard = ({
  member,
}: {
  member: (typeof teamColumns)[number][number];
}) => {
  return (
    <article className="team-card group relative aspect-[4/5] overflow-hidden bg-[var(--color-charcoal)]">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 ease-[var(--ease-luxury)] group-hover:scale-[1.04] group-hover:grayscale-0"
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Member information */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <h3 className="font-[var(--font-display)] text-xl leading-tight text-white md:text-2xl">
          {member.name}
        </h3>

        <p className="mt-2 font-[var(--font-body)] text-[9px] uppercase leading-relaxed tracking-[0.08em] text-white/85 md:text-[10px]">
          {member.designation}
        </p>
      </div>
    </article>
  );
};

export default function Team() {
  return (
    <section
      id="our-team"
      className="bg-[var(--color-bg-secondary)] py-[var(--section-space-lg)]"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
        {/* Section heading */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="mb-5 flex items-center gap-3 font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              <span className="h-px w-7 bg-[var(--color-primary)]" />
              The People Behind LSI
            </span>

            <h2 className="font-[var(--font-display)] text-[clamp(3rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-text-primary)]">
              Our
              <span className="text-[var(--color-primary)]"> team.</span>
            </h2>
          </div>

          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-md font-[var(--font-body)] text-sm leading-relaxed text-[var(--color-text-secondary)] md:ml-auto md:text-right md:text-base">
              A collective of experienced professionals bringing together
              creative vision, technical expertise and a shared commitment to
              exceptional craftsmanship.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {teamColumns.flat().map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-12 border-t border-[var(--color-border)] pt-7">
          <p className="font-[var(--font-display)] text-2xl leading-snug text-[var(--color-text-primary)] md:text-3xl">
            Different disciplines. One shared vision.
          </p>
        </div>
      </div>
    </section>
  );
}
