
import carImage from "../../assets/images/car.svg"
import chartImage1 from "../../assets/images/chart_1.svg"
import chartImage2 from "../../assets/images/chart_2.svg"

interface Service {
    image: any,
    title: string,
    content: string
}

export const getServices : Service[] = [
    {
        image: carImage,
        title: "Reduce Expenses",
        content: "We help reduce your fees and increase your overall revenue."
    },
    {
        image: chartImage1,
        title: "Virtual Offices",
        content: "You can access our platform online anywhere in the world."
    },
    {
        image: chartImage2,
        title: "Premium Benefits",
        content: "Unlock our special membership card that returns 5% cash back."
    },
]