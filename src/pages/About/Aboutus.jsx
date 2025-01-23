import React from 'react';
import TohidulIslam from '../../assets/Images/Tohidul-Islam.jpg'

const AboutUs = () => {
    return (
        <main className="container mx-auto p-6">


            <div className='flex flex-col justify-center items-center mt-6'>
                <img src={TohidulIslam} width={400} height={400} alt="logo" className="object-contain rounded" />
                <p className='text-lg font-bold my-1'>Tohidul Islam, Founder</p>
            </div>

            <h1 className="text-xl font-bold mb-4">আমাদের সম্পর্কে!</h1>
            <p className="mb-4">
                <strong>Uttradikar.org</strong> এ স্বাগতম।
            </p>
            <p className="mb-4">
                Uttradikar.org হলো একটি প্রফেশনাল প্লাটফর্ম যেখানে আপনি সহজেই উত্তরাধিকার সম্পদের হিসাব করতে পারবেন।
                এখানে আমরা শুধুমাত্র সেই সমস্ত বিষয়বস্তু প্রদান করি, যা আপনার পছন্দ হতে পারে। আমরা আপনাকে
                নির্ভরযোগ্য তথ্য প্রদানে সর্বোচ্চ চেষ্টা করি এবং সহজে উত্তরাধিকার সম্পদের হিসাব করার বিষয়ে
                আমাদের সেবাগুলো ক্রমাগত উন্নত করে চলেছি।
            </p>
            <p className="mb-4">
                আমাদের লক্ষ্য হলো সহজে উত্তরাধিকার সম্পদের হিসাব করার প্রতি আমাদের আবেগকে একটি
                ক্রমবর্ধমান অনলাইন প্লাটফর্মে রূপান্তরিত করা। আমরা আশা করি আপনি আমাদের সেবাগুলো
                ঠিক ততটাই উপভোগ করবেন যতটা আমরা এই সেবাগুলো প্রদান করতে আনন্দ পাই।
            </p>
            <p className="mb-4">
                আপনার পছন্দের বিষয়গুলি নিয়ে আমরা আমাদের ওয়েবসাইটে আরও গুরুত্বপূর্ণ পোস্ট
                যুক্ত করে যাব। শুধু আপনার ভালোবাসা দিয়ে আমাদের পাশে থাকুন।
            </p>
            <p>
                আমাদের ওয়েবসাইট ভিজিট করার জন্য আপনাকে ধন্যবাদ। আপনার দিনটি শুভ হোক!
            </p>
        </main>
    );
};

export default AboutUs;
