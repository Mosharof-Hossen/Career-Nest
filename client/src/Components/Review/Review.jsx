// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './review.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

import member1 from "../../assets/user/member1.png"
import member2 from "../../assets/user/member2.png"
import member3 from "../../assets/user/member3.png"
import member4 from "../../assets/user/member4.png"


const Review = () => {
    return (
        <div className="mt-14 ">
            <div className="text-center space-y-5 mb-5">
                <h2 className="text-3xl font-bold">What Our Users Are Saying</h2>
                <p className="max-w-3xl mx-auto">Hear from professionals who have successfully found their next career opportunity through our platform.</p>
            </div>
            <div>
                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='flex dark:text-white flex-col text-center p-10 text-gray-600 gap-7'>
                            <FaQuoteLeft className='text-5xl text-gray-600 mx-auto' />
                            <p className='max-w-3xl'>I applied for several positions, and within a week, I had multiple interviews lined up. The site is well-organized, and I appreciate the detailed job descriptions. It’s a great resource for finding quality job opportunities quickly.</p>
                            <div className='flex mx-auto gap-5'>
                                <div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={member1} />
                                    </div>
                                </div>
                                <div className='text-left'>
                                    <p className='text-black text-xl dark:text-white font-bold'>David Foster</p>
                                    <p>Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex dark:text-white flex-col text-center p-10 text-gray-600 gap-7'>
                            <FaQuoteLeft className='text-5xl text-gray-600 mx-auto' />
                            <p className='max-w-3xl'>As a freelancer, I’ve used many platforms, but this one stands out. I landed a part-time role in my field easily. The application process is simple, and I love how clear the job listings are. It’s perfect for creatives!</p>
                            <div className='flex mx-auto gap-5'>
                                <div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={member2} />
                                    </div>
                                </div>
                                <div className='text-left'>
                                    <p className='text-black text-xl dark:text-white font-bold'>Emily Rivera</p>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex dark:text-white flex-col text-center p-10 text-gray-600 gap-7'>
                            <FaQuoteLeft className='text-5xl text-gray-600 mx-auto' />
                            <p className='max-w-3xl'>This platform made job searching incredibly easy. I found the perfect remote role in just a few days! The user interface is intuitive, and I loved the personalized job recommendations. Highly recommended for anyone looking to streamline their job search!</p>
                            <div className='flex mx-auto gap-5'>
                                <div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={member4} />
                                    </div>
                                </div>
                                <div className='text-left'>
                                    <p className='text-black text-xl dark:text-white font-bold'>Sarah Thompson</p>
                                    <p>Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex dark:text-white flex-col text-center p-10 text-gray-600 gap-7'>
                            <FaQuoteLeft className='text-5xl text-gray-600 mx-auto' />
                            <p className='max-w-3xl'>This site provided an excellent experience for me. It was easy to navigate, and I found several hybrid job options that fit my needs. The job alerts were helpful, keeping me updated on new opportunities daily!</p>
                            <div className='flex mx-auto gap-5'>
                                <div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={member3} />
                                    </div>
                                </div>
                                <div className='text-left'>
                                    <p className='text-black text-xl dark:text-white font-bold'>Michael Carter</p>
                                    <p>HR Specialist</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Review;