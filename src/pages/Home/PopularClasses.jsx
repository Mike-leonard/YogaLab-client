import useTheme from "../../hooks/useTheme";

const PopularClasses = () => {
    const { theme } = useTheme()
    const datas = [1, 2, 3, 4, 5, 6]
    return (
        <div className="w-5/6 mx-auto mt-10 mb-10">
            <h3 className="text-4xl text-center mt-10 font-semibold">Popular Classes</h3>
            <p className="text-lg text-center mt-4 mb-10">Join Our Popular Classes</p>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-10">

                {
                    datas.map((singleClass, index) => <div className="sm:w-96 md:w-72 sm:mx-auto cursor-pointer flex flex-col justify-center items-center" key={index}>
                        <div className={`w-full transition-width duration-500 hover:scale-110 glass`}>
                            <div className={`border-4  ${theme === 'light' ? 'hover:border-[#DC2C5C]' : 'hover:border-[#030508]'}`}>

                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title">Life hack</h2>
                                <p>How to park your car at your garage?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Learn now!</button>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default PopularClasses;