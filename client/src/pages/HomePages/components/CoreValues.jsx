import React from "react";

function CoreValues() {
    return (
        <section className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <h1>Our Core Values</h1>
                </div>
                <div className="col mt-5">
                    <p>Your education is invaluable to us</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-4">
                    <h3>Interactivity</h3>
                    <p>
                    "At the heart of our core values is interactivity, 
                    fostering a dynamic learning environment where students 
                    can actively engage with tutors in real-time, ensuring 
                    a collaborative and effective learning experience."
                    </p>
                </div>
                <div className="col-4">
                    <h3>Personalization</h3>
                    <p>
                    "We believe in the power of personalization, 
                    tailoring each tutoring session to meet the unique needs and 
                    learning styles of every student, creating a customized educational 
                    journey that maximizes growth and understanding."
                    </p>
                </div>
                <div className="col-4">
                    <h3>Trust</h3>
                    <p>
                    "Trust is the cornerstone of our platform, 
                    where we carefully vet and select experienced tutors, 
                    providing a secure and reliable space for students to 
                    confidently seek academic support, building a community 
                    founded on trust and educational excellence."
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CoreValues;
