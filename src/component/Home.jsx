import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background"
                    height="450px" />
                <div class="card-img-overlay">
                    <div className="container">
                        <h5 class="card-title display-3 fw bolder mb-0">OUR GREEN FRIENDS</h5>
                        <p class="card-text">Your favourite winter plant awaits
                            For Home & Office</p>
                    </div>


                </div>
            </div>
            <Products />
        </div>
    );
};

export default Home;