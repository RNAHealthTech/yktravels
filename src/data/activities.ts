interface ActivitiesProps {
    slug: string;
    title: string;
    image: string;
}

const Activities: {[key:string] : ActivitiesProps} = {
    "star-gazing":{
        title: "Star Gazing", 
        slug: "star-gazing",
        image: "/images/start-gazing.jpg"
    }
};


export default Activities;