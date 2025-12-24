import React from "react";

function Home() {
    return (
        <div className="bg-[color-mix(in_srgb,black,transparent_20%)] min-h-screen">
            <div className="
            min-h-[105vh]
    md:min-h-screen
    
            w-screen
            bg-[url('/images/Juggler.jpeg')]
            bg-no-repeat
            bg-cover
            md:bg-contain
            bg-[length:80%] md:bg-[length:50%]
            bg-left
            bg-[length:80%]
            flex 
            justify-center md:justify-start
            items-start">
                <div
                    className="
    w-full md:w-1/2
    ml-0 md:ml-auto
    flex flex-col
    justify-center
    items-center md:items-start
    text-center md:text-left
    p-8 md:p-4
   h-full min-h-[105vh] md:min-h-0
    bg-[color-mix(in_srgb,black,transparent_50%)] md:bg-transparent
  "
                >

                    <p className="pt-12 text-neutral-100 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg mb-6 ">
                        Premium Entertainment<br className="hidden md:block" /> for All Events
                    </p>

                    <p className="text-neutral-300 text-xl md:text-2xl lg:text-3xl tracking-wide">
                        Fair & Festival Specialist
                    </p>
                </div>

            </div>
        </div>

    );
}

export default Home