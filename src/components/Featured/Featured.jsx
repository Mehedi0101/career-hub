import Jobs from "../Jobs/Jobs";

const Featured = () => {
    return (
        <div className="w-11/12 mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-dark1">Featured Jobs</h2>
            <p className="text-sm lg:text-base text-center text-dark3 mt-3 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <Jobs></Jobs>
        </div>
    );
};

export default Featured;