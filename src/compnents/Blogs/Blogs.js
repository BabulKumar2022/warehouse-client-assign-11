import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1>Blogs</h1>
            <div className="blog-area container w-50 mx-auto mt-5">
                <h5>Javascript এবং Node.js এর মধ্যে পার্থক্য কি?</h5>
                <p> Javascript একটি scripted Progarmming Language যাহা Browser এ রান করে অন্য দিকে Node JS হল Javascript এর জন্য একটি interpreter or running environment । Node.js এর কাজ হল Javascript কে server এ রান করা। NodeJS এর মাধ্যমে Javascript কে machine code এ রূপান্তর করা হয়। মেশিন কোড খুব দ্রুত run করা সম্ভব। javascript হল  lightweight scripting language যাহা object-oriented । Javascript  মুলত  client সাইডে রান করে সুতরাং এটা front end development এর জন্য ব্যবহৃত হয়। অন্যদিকে Node JS  server-side এ রান করে সুতরাং JS এর মাধ্যমে server-side development এর জন্য ব্যবহৃত হয়</p>
            </div>
            <div className="d-flex align-items-center">
                <div style={{height: '1px'}} className="bg-primary w-100"></div>
            </div>
            <div className="blog-area container w-50 mx-auto mt-5">
                <h5>কখন Node.js ব্যবহার করা উচিত? </h5>
                <p> Javascript server সাইডে চালানোর প্রয়োজন হলে  আমরা node.js ব্যবহার করে থাকি। </p>
                <h5>কখন MongoDB ব্যবহার করা উচিত?</h5>
                <p>MongoDB হল document database সিস্টেম । MongoDB json আকারে ডাটাবেজ সংরক্ষণ করে । আমাদের যখন অবজেক্ট আকারে ডাঁটা সংরক্ষণ করা লাগে তখন ই আমরা Mongodb ব্যবহার করি।</p>
            </div>
            <div className="d-flex align-items-center">
                <div style={{height: '1px'}} className="bg-primary w-100"></div>
            </div>
            <div className="blog-area container w-50 mx-auto mt-5"> 
                <h5>SQL ও NoSQL database এর মধ্যে পার্থক্য কি?</h5>
                টেবিল ভিত্তিক ডাটাবেজ হল SQL অন্যদিকে NoSQL databases হল  document, key-value, graph, or wide-column ডাটাবেজ। SQL database একাধিক সারি ও কলামে থাকে। NoSQL database ব্যবহার করা হয় অগোছালো তথ্যের জন্য । যেমন json। SQL database সিস্টেম হল MySQL অন্যদিকে NoSQL database সিস্টেম হল MongoDB ।
            </div>
        </div>
    );
};

export default Blogs;