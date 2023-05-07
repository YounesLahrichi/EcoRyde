import CourseCard from "./CourseCard";
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from "firebase/database";

function CourseCardList(props) {
    // const db = getDatabase();
    // const courseRef = ref(db, "users/User: " + props.dataAddress);
    // let objArray = [];

    // onValue(courseRef, (snapshot) => {
    //     const changedValue = snapshot.val();
    //     const objKeys = Object.keys(changedValue);

    //     objArray = objKeys.map((keyString) => {
    //         const theObj = changedValue[keyString];
    //         return theObj;
    //     });
    // });


        const component = <CourseCard title={props.title} author={props.author} key={props.title} />;


    return <div className="search-card">{component}</div>;
}

export default CourseCardList;