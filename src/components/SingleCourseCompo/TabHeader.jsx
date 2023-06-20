import { FaBookOpen, FaChevronLeft, FaChevronRight, FaHandHoldingHeart, FaInfo, FaRegNewspaper, FaUserGraduate } from "react-icons/fa";

const TabHeader = ({ activeTab, handleTabClick }) => {
    return (
        <div className="relative">
            <div className="absolute left-0 top-0 flex items-center h-full">
                <button className="tab-arrow-button" style={{ left: '0' }}>
                    <FaChevronLeft />
                </button>
            </div>
            <div className="overflow-y-hidden whitespace-nowrap flex">
                <ul className="scroll-tab-list flex">
                    <li className="scroll-tab-item">
                        <button
                            className={`tab ${activeTab === 'curriculum' ? 'active' : ''}`}
                            onClick={() => handleTabClick('curriculum')}
                        >
                            <FaBookOpen className="tab-icon" /> <span className="ml-2">Curriculum</span>
                        </button>
                    </li>
                    <li className="scroll-tab-item">
                        <button
                            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
                            onClick={() => handleTabClick('about')}
                        >
                            <FaInfo className="tab-icon" /> <span className="ml-2">About</span>
                        </button>
                    </li>
                    <li className="scroll-tab-item">
                        <button
                            className={`tab ${activeTab === 'members' ? 'active' : ''}`}
                            onClick={() => handleTabClick('members')}
                        >
                            <FaUserGraduate className="tab-icon" /> <span className="ml-2">Members</span>
                        </button>
                    </li>
                    <li className="scroll-tab-item">
                        <button
                            className={`tab ${activeTab === 'news' ? 'active' : ''}`}
                            onClick={() => handleTabClick('news')}
                        >
                            <FaRegNewspaper className="tab-icon" /> <span className="ml-2">News</span>
                        </button>
                    </li>
                    <li className="scroll-tab-item border-r">
                        <button
                            className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
                            onClick={() => handleTabClick('reviews')}
                        >
                            <FaHandHoldingHeart className="tab-icon" /> <span className="ml-2">Reviews</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="absolute right-0 top-0 flex items-center h-full">
                <button className="tab-arrow-button" style={{ right: '0' }}>
                    <FaChevronRight />
                </button>
            </div>
        </div>

    );
};

export default TabHeader;