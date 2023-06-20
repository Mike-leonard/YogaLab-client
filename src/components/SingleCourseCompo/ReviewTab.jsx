import { FaRegStar, FaStar } from "react-icons/fa";

const ReviewTab = () => {
    return (
        <div>
            <div className="flex justify-evenly items-center">
                <div>
                    <div>
                        <div className="text-9xl">4.5</div>
                        <div className="flex text-yellow-400 justify-center mt-3">
                            <FaStar data-value="1" />
                            <FaStar data-value="2" />
                            <FaStar data-value="3" />
                            <FaStar data-value="4" />
                            <FaRegStar data-value="5" />
                        </div>
                        <div className="text-center mt-5 text-lg font-semibold">0</div>
                    </div>
                </div>
                <div className="">
                    <ul className="w-80 gap-y-4 flex flex-col">
                        <li className="">
                            <div className="flex items-center">
                                <div className="w-3/12">
                                    <span>1 Star</span>
                                </div>
                                <div className="w-8/12 flex items-center">
                                    <hr className="border-gray-300 border-4 w-full mr-2" />
                                </div>
                                <div className="w-1/12 text-right">
                                    <span>0</span>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center ">
                                <div className="w-3/12">
                                    <span>2 Stars</span>
                                </div>
                                <div className="w-8/12 flex items-center">
                                    <hr className="border-gray-300 border-4 w-full mr-2" />
                                </div>
                                <div className="w-1/12 text-right">
                                    <span>0</span>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="w-3/12">
                                    <span>3 Stars</span>
                                </div>
                                <div className="w-8/12 flex items-center">
                                    <hr className="border-gray-300 border-4 w-full mr-2" />
                                </div>
                                <div className="w-1/12 text-right">
                                    <span>0</span>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="w-3/12">
                                    <span>4 Stars</span>
                                </div>
                                <div className="w-8/12 flex items-center">
                                    <hr className="border-gray-300 border-4 w-full mr-2" />
                                </div>
                                <div className="w-1/12 text-right">
                                    <span>0</span>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center">
                                <div className="w-3/12">
                                    <span>5 Stars</span>
                                </div>
                                <div className="w-8/12 flex items-center">
                                    <hr className="border-gray-300 border-4 w-full mr-2" />
                                </div>
                                <div className="w-1/12 text-right">
                                    <span>0</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReviewTab;