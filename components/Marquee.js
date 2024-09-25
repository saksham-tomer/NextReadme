import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Emily Chen",
    username: "@emilyc_dev",
    body: "This README creator is a game-changer! It's saved me hours of work and helped me create professional documentation effortlessly.",
    img: "https://i.pravatar.cc/150?u=emilyc_dev",
  },
  {
    name: "Jamal Williams",
    username: "@jamal_codes",
    body: "I was skeptical at first, but this tool exceeded my expectations. The templates are top-notch and easily customizable.",
    img: "https://i.pravatar.cc/150?u=jamal_codes",
  },
  {
    name: "Sarah Johnson",
    username: "@sarahj_ux",
    body: "As a UX designer, I appreciate how this README creator helps developers communicate their projects clearly. It's intuitive and produces great results!",
    img: "https://i.pravatar.cc/150?u=sarahj_ux",
  },
  {
    name: "Alexei Petrov",
    username: "@alexei_p",
    body: "Отличный инструмент! It's made my open-source contributions much more accessible to the community. Spasibo!",
    img: "https://i.pravatar.cc/150?u=alexei_p",
  },
  {
    name: "Priya Patel",
    username: "@priya_codes",
    body: "I love how this README creator handles markdown. It's made my documentation process so much smoother. Definitely recommended for all devs!",
    img: "https://i.pravatar.cc/150?u=priya_codes",
  },
  {
    name: "Lucas Martínez",
    username: "@lucas_m",
    body: "¡Increíble herramienta! It's helped me create consistent READMEs across all my projects. The learning curve was minimal, and the results are fantastic.",
    img: "https://i.pravatar.cc/150?u=lucas_m",
  },
  {
    name: "Emma Wilson",
    username: "@emma_opensource",
    body: "This README creator has become an essential part of my workflow. It ensures I don't forget any crucial sections in my documentation.",
    img: "https://i.pravatar.cc/150?u=emma_opensource",
  },
  {
    name: "Hiroshi Tanaka",
    username: "@hiroshi_dev",
    body: "素晴らしいツールです！It's helped me overcome language barriers and create clear, professional READMEs for my international projects.",
    img: "https://i.pravatar.cc/150?u=hiroshi_dev",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer  overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-50/[.1] bg-gray-900 hover:bg-gray-950",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function CustomMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-gray-800 rounded-lg  bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950 dark:from-background"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent" />
    </div>
  );
}
