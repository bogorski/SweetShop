import { HomePageCarousel } from './HomePageCarousel'
import { ProductCategories } from './ProductCategories'
import { Story } from './StoryContainer'

export const Home = () => {
    return (
        <div>
            <HomePageCarousel/>
            <ProductCategories/>
            <Story/>
        </div>
    )
}