import ImageWithText from "../components/ImageWithText";
import StickyNavbar from "../components/StickyNavbar";
import AboutSection from "../components/AboutSection";

const Office = () => {
    return (
        <div>
            <StickyNavbar darkMode={true}/>
            <div className='w-[95%] m-auto pt-28 space-y-12 mb-4'>
                <div>
                    <ImageWithText text='Profile' imgElement={
                        <img
                            data-wow-delay="0.1s"
                            data-sizes="auto"
                            data-srcset="https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?resize=600%2C365&amp;ssl=1 300w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?resize=600%2C365&amp;ssl=1 500w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?resize=750%2C456&amp;ssl=1 750w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?fit=909%2C608&amp;ssl=1 1000w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?fit=1363%2C912&amp;ssl=1 1500w"
                            sizes="460px"
                            srcSet="https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?resize=600%2C365&amp;ssl=1 300w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?resize=600%2C365&amp;ssl=1 500w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?resize=750%2C456&amp;ssl=1 750w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?fit=909%2C608&amp;ssl=1 1000w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/08/IMG_1383-2-scaled.jpg?fit=1363%2C912&amp;ssl=1 1500w"
                            style={{
                                width: '100%',
                            }}
                            data-no-retina=""
                            alt={'Profile'}
                        />}
                    />
                </div>
                <AboutSection/>
                <div>
                    <ImageWithText text='People' imgElement={
                        <img
                            style={{
                                width: '100%',
                            }}
                            alt={'People'}
                            data-wow-delay="0.1s" data-sizes="auto"
                            data-srcset="https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=600%2C365&amp;ssl=1 300w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=600%2C365&amp;ssl=1 500w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=750%2C456&amp;ssl=1 750w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?fit=1000%2C305&amp;ssl=1 1000w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?fit=1500%2C457&amp;ssl=1 1500w"
                            data-no-retina=""
                            srcSet="https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=600%2C365&amp;ssl=1 300w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=600%2C365&amp;ssl=1 500w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=750%2C456&amp;ssl=1 750w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?fit=1000%2C305&amp;ssl=1 1000w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?fit=1500%2C457&amp;ssl=1 1500w"
                        />
                    }/>
                </div>
            </div>
        </div>
    )
}

export default Office