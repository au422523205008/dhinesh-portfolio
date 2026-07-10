import CountUp from "react-countup/build/CountUp";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 2,
    suffix: "",
    label: "Certificates",
  },
  {
    value: 1,
    suffix: "",
    label: "Internship",
  },
];

const HeroStats = () => {
  return (
    <div className="flex flex-wrap gap-10 mt-12">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-indigo-400">
            {item.value}
            {item.suffix}
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;