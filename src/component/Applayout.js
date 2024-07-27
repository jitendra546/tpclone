import CourseList from "./CourseList";

const Applayout = ()=>{
    return(
       <div className="d-flex flex-wrap">
            <CourseList/>
            <CourseList/>
            <CourseList/>
            <CourseList/>
       </div>
    )
}
export default Applayout;