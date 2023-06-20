import { FaCalendar } from "react-icons/fa";

const NewsTab = () => {
    return (
        <div className="flex gap-6">

            <img className="w-56 h-40 rounded-xl cursor-pointer" src="https://cdn.hiconsumption.com/wp-content/uploads/2020/11/Best-Yoga-Gear-0-Hero-1074x711.jpg" alt="" />
            <div>
                <h3 className="font-semibold mb-3 cursor-pointer">International Yoga Day 2023: Yoga asanas to reduce impact of sedentary lifestyle</h3>
                <p className="flex items-center gap-2 mb-2"><FaCalendar className="text-rose-400" /> Aug 2023</p>
                <p className="text-sm">A sedentary lifestyle is an abuse to the body and the wellbeing. sedentary lifestyle, or an active lifestyle includes more sitting and less walking or movements Yoga is highly suggested for folks who work desk jobs all day.</p>
            </div>

        </div>
    );
};

export default NewsTab;