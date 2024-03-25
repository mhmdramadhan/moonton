import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCart from "@/Components/MovieCart";
import React from "react";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";

const Dashboard = () => {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {[1, 2, 3, 4, 5].map((event) => (
                        <FeaturedMovie
                            key={event}
                            slug={"the-batman-in-love"}
                            name={"The Batman In Love" + event}
                            category={`Comedy`}
                            thumbnail={`https://picsum.photos/seed/picsum/200/300`}
                            rating={1 + event}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {[1, 2, 3, 4, 5, 6].map((e) => (
                        <MovieCart
                            key={e}
                            slug={"movie-1"}
                            name={"No Way Home"}
                            category={"action"}
                            thumbnail={"https://picsum.photos/seed/picsum/200/300"}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
};

export default Dashboard;
