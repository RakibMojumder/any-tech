import Image from "next/image";

export interface PhilosophyItem {
  title: string;
  image: string;
  description: string;
}

export const philosophyItems: PhilosophyItem[] = [
  {
    title: "Full-suite solutions",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    title: "Simplify the complex",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    title: "Cutting-edge tech",
    image:
      "http://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

const PhilosophyItems = () => {
  return (
    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {philosophyItems.map((item) => (
        <div
          key={item.title}
          className="bg-[#F8FCFF] rounded-2xl p-8 space-y-4"
        >
          <Image src={item.image} alt={item.title} width={50} height={50} />
          <h3 className="text-secondary text-xl md:text-2xl font-semibold">
            {item.title}
          </h3>
          <p className="text-secondary text-sm md:text-base">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PhilosophyItems;
