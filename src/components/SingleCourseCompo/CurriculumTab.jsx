import { FaBook, FaClock, FaFile, FaPenSquare } from "react-icons/fa";

const CurriculumTab = () => {
    return <div>
        <ul className="">
            <li className="flex justify-between my-1">
                <div className="flex items-center gap-2">

                    <div className="dtlms-curriculum-meta-icon">
                        <FaBook />
                    </div>
                    <div className="dtlms-curriculum-meta-title">
                        <a href="#" onClick={() => false} data-courseid="22361" data-parentcurriculumid="-1" data-curriculumid="6065">
                            Placerat odio eu
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="btn btn-xs btn-outline btn-success my-1">Preview</div>
                    <div className="flex items-center"><span className="mr-1"><FaClock /></span> Duration: <span>10Hrs</span></div>
                </div>
            </li>
            <li className="flex justify-between my-1">
                <div className="flex items-center gap-2">

                    <div className="dtlms-curriculum-meta-icon">
                        <FaBook />
                    </div>
                    <div className="dtlms-curriculum-meta-title">
                        <a href="#" onClick={() => false} data-courseid="22361" data-parentcurriculumid="-1" data-curriculumid="6064">
                            Augue sed facilisis rutrum
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="btn btn-xs btn-outline btn-success my-1">Preview</div>
                    <div className="flex items-center"><span className="mr-1"><FaClock /></span> Duration: <span>14Hrs</span></div>
                </div>
            </li>
            <li className="flex justify-between my-1">
                <div className="flex items-center gap-2">

                    <div className="dtlms-curriculum-meta-icon">
                        <FaBook />
                    </div>
                    <div className="dtlms-curriculum-meta-title">
                        <a href="#" onClick={() => false} data-courseid="22361" data-parentcurriculumid="-1" data-curriculumid="6070">
                            Cras pharetra nisl et magna
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="btn btn-xs btn-outline btn-success my-1">Preview</div>
                    <div className="flex items-center"><span className="mr-1"><FaClock /></span> Duration: <span>30Hrs</span></div>
                </div>
            </li>
            <li className="flex justify-between my-1">
                <div className="flex items-center gap-2">
                    <div className="dtlms-curriculum-meta-icon">
                        <FaBook />
                    </div>
                    <div className="dtlms-curriculum-meta-title">Etiam ut orci eget augue</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center"><span className="mr-1"><FaClock /></span> Duration: <span>20Hrs</span></div>
                </div>
            </li>
            <li className="flex justify-between my-1">
                <div className="flex items-center gap-2">

                    <div className="dtlms-curriculum-meta-icon">
                        <FaPenSquare />
                    </div>
                    <div className="dtlms-curriculum-meta-title">
                        <a href="#" onClick={() => false} data-courseid="22361" data-parentcurriculumid="-1" data-curriculumid="7062">
                            Maths
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="btn btn-xs btn-outline btn-success my-1">Preview</div>
                    <div className="flex items-center"><span className="mr-1"><FaClock /></span> Duration: <span>0Hrs 30Mins</span></div>
                </div>
            </li>
            <li className="flex justify-between my-1">
                <div className="flex items-center gap-2">

                    <div className="dtlms-curriculum-meta-icon">
                        <FaFile />
                    </div>
                    <div className="dtlms-curriculum-meta-title">Aliquam condimentum</div>
                </div>
                <div className="dtlms-curriculum-meta-items">
                    <div className="flex items-center"><span className="mr-1"><FaClock /></span> Duration: <span>2Hrs</span></div>
                </div>
            </li>
            <li className="flex justify-between my-1">
                <div className="flex items-center gap-2">

                    <div className="dtlms-curriculum-meta-icon">
                        <FaPenSquare />
                    </div>
                    <div className="dtlms-curriculum-meta-title">Art</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center"><span className="mr-1"><FaClock /></span> Duration: <span>0Hrs 45Mins</span></div>
                </div>
            </li>
        </ul>
    </div>
};

export default CurriculumTab;