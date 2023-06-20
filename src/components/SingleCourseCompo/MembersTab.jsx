import img1 from "../../assets/student-6.jpg"
import img2 from "../../assets/student-7.jpg"
const MembersTab = () => {
    return (
        <div>
            <h3>Total number of student of this course: <span className="text-lg font-semibold">4</span></h3>
            <div>
                <div className="grid grid-cols-4 gap-2">
                    <div className="w-36">
                        <img className="rounded-lg mt-5" src={img1} alt="" />
                        <h4 className="text-lg font-medium mt-2 text-center">Student1</h4>
                    </div>
                    <div className="w-36">

                        <img className="rounded-lg mt-5" src={img2} alt="" />
                        <h4 className="text-lg font-medium mt-2 text-center">Student2</h4>
                    </div>
                    <div className="w-36">

                        <img className="rounded-lg mt-5" src={img2} alt="" />
                        <h4 className="text-lg font-medium mt-2 text-center">Student3</h4>
                    </div>
                    <div className="w-36">

                        <img className="rounded-lg mt-5" src={img1} alt="" />
                        <h4 className="text-lg font-medium mt-2 text-center">Student4</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembersTab;