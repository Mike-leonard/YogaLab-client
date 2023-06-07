import useTheme from "../../hooks/useTheme";

const PopularInstructor = () => {
    const { theme } = useTheme()
    const datas = [1, 2, 3, 4, 5, 6]
    return (
        <div className="w-5/6 mx-auto mt-10 mb-10">
            <h3 className="text-4xl text-center mt-10 font-semibold">Popular Instructors</h3>
            <p className="text-lg text-center mt-4 mb-10">Our Popular Instructors Are Here</p>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-10">

                {
                    datas.map((singleClass, index) => <div className=" flex flex-col justify-center items-center " key={index}>
                        <div className="avatar cursor-pointer">
                            <div className={` image-container w-[200px]  overflow-hidden rounded-full ring ring-offset-base-100 ring-offset-2  ${theme === 'light' ? 'ring-[#DC2C5C]' : 'ring-[#030508]'}`}>
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="object-center w-full transition-width duration-500 hover:scale-125 " />
                            </div>
                        </div>
                        <div className="">
                            <h2 className=" text-2xl text-center my-3">Life hack</h2>
                            <p className="text-center">Address</p>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default PopularInstructor;