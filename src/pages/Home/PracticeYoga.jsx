import useTheme from "../../hooks/useTheme";
import img from "../../assets/reasonsyoga/resns.jpg"

const PracticeYoga = () => {
    const { theme } = useTheme()
    return (
        <div className="w-5/6 mx-auto mt-10 mb-10">
            <h3 className="text-4xl text-center mt-10 font-semibold">The Main Reason to Practice Yoga</h3>

            <div className="grid md:grid-cols-3 sm:grid-cols-1">


                <div className="sm:w-96 md:w-72 sm:mx-auto cursor-pointer flex flex-col justify-center items-center" >
                    <div>
                        <div>
                            <h5>Good for Health</h5>
                            <p>Yoga Fit is where you can find balance, harmony and energy. Yoga Fit is where you can find balance, harmony and energy.</p>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h5>Good for Body</h5>
                            <p>Yoga Fit is where you can gain balance of metabolism. Maintain healthy weight, beautiful strong body and control
                                your hunger.</p>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="sm:w-96 md:w-72 sm:mx-auto cursor-pointer flex flex-col justify-center items-center" >
                    <div>

                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="sm:w-96 md:w-72 sm:mx-auto cursor-pointer flex flex-col justify-center items-center" >
                    <div>
                        <div>
                            <h5>Good for Cardio</h5>
                            <p>Yoga Fit iimproves blood circulation and decreases blood pressure of the body. A lower pulse rate helps your heart..</p>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h5>Good for Breathing</h5>
                            <p>Yoga Fit improves your raspiratory by helping your lungs work more efficiently.</p>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PracticeYoga;