import { HeartIcon, PlusIcon, Home } from "lucide-react";

export const GooeyMenu = () => {
  return (
    <div className="relative h-[300px] w-full">
      <nav
        className="menu"
        style={
          {
            filter: "url(#gooey)",
            width: "100%",
            height: "100%",
            "--spring-easing":
              "linear(0, 0.88117 15.492%, 1.09261 23.232%, 1.10421 28.713%, 0.99031 49.585%,0.99995)",
          } as React.CSSProperties
        }
      >
        <input type="checkbox" className="peer hidden" name="menu" id="menu" />
        <label
          className="absolute bottom-10 right-10 z-10 flex h-14 w-14 scale-125 cursor-pointer items-center justify-center rounded-full bg-primary text-indigo-400 transition-all duration-1000  ease-[var(--spring-easing)] peer-checked:rotate-[135deg] peer-checked:scale-100
          dark:bg-accent dark:text-primary"
          htmlFor="menu"
        >
          <PlusIcon className="h-5 w-5 text-accent dark:text-indigo-800" />
        </label>
        <button
          className="absolute bottom-10 right-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-indigo-400 transition-transform duration-300 ease-in peer-checked:translate-y-[-80px] peer-checked:duration-1000 peer-checked:ease-[var(--spring-easing)] dark:bg-accent dark:text-primary
        "
        >
          <Home className="h-5 w-5 text-accent dark:text-indigo-800" />
        </button>
        <button
          className="absolute bottom-10 right-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-indigo-400 transition-transform duration-300 ease-in peer-checked:translate-y-[-162px]
          peer-checked:duration-1000 peer-checked:ease-[var(--spring-easing)]
          dark:bg-accent dark:text-primary"
        >
          <HeartIcon className="h-5 w-5 text-accent dark:text-indigo-800" />
        </button>
      </nav>
      <svg
        className="absolute hidden"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}