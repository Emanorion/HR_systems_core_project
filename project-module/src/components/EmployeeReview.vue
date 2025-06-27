<template>
    <div class="ReviewCard">
        <h3 class="rev-title">Reviews</h3>
        <div class="reviews">
            <div class="review-items" v-for="(employee,idx) in employee_info.slice(0,5)" :key="employee.employeeId">
                <div class="top">
                    <img class="rev-img" :src="imgAndRating[idx].img" alt="hah">
                    <h5 class="rev-name">{{ employee.name }}</h5>
                </div>
                <div class="bottom">
                    <p class="review">{{ employee.position }}</p>
                    <div class="rev-icon">
                        <i class="fa fa-star" aria-hidden="true">{{ imgAndRating[idx].rating }}</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="rv-btn-div">
            <router-link to="/reviews"><button class="rev-btn">see more</button></router-link>
        </div>
    </div>
</template>

<script>
import employee_info from '@/data/employee_info';
export default {
    name: 'EmployeeReview',
    data(){
        return{
            employee_info:employee_info,
            imgAndRating:[
                {
                img: "https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072179.jpg?semt=ais_hybrid&w=740",
                rating: 8.3
                },
                {
                img: "https://media.istockphoto.com/id/1174056245/photo/some-moments-require-some-seriousness.jpg?s=612x612&w=0&k=20&c=dPqQQq6wiygApzSF9r72B9p6Bp4pygxm3M7aqC1oae8=",
                rating: 5
                },
                {
                img: "https://img.freepik.com/premium-photo/minimal-close-up-portrait-serious-black-man-looking-camera-while-standing-by-white-wall-copy-s_236854-34801.jpg",
                rating: 7.8
                },
                {
                img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
                rating: 9.2
                },
                {
                img: "https://img.freepik.com/free-photo/beautiful-african-woman-face-portrait-close-up_53876-148041.jpg?semt=ais_items_boosted&w=740",
                rating: 7.9
                },
            ]
        }
    }
}
</script>

<style scoped>
.rev-title{
    margin: 10px;
    font-size: 30px;
    color: rgba(126, 123, 123, 0.904);
}
.ReviewCard {
    background-color: white;
    margin-left: 10px;
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 4px 16px 0 rgba(8, 14, 20, 0.312);
}
.review-items{
    width: 300px;
    margin-left: 10px;
}
.top{
    display: flex;
    align-items: center;
    align-self: center;
    width: 75%;
}
.bottom{
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
    margin-top: 5px;
}
.rev-img{
    width: 50px;
    border-radius: 6px;
}
.rev-name{
    margin-left: 10px;
}
.rev-icon{
    background-color: rgba(245, 171, 33, 0.226);
    width: 50px;
    text-align: center;
}
.reviews{
    padding-top: 3px;
    padding-left: 5px;
    margin: 0;
    font-weight: 300;
}
.rev-btn{
    width: 100%;
    height: 30px;
    background-color: white;
    border: 1px solid skyblue;
    border-radius: 5px;
    color: rgb(78, 177, 216);
}
.rv-btn-div{
    width: 90%;
    margin: auto;
}
.fa{
    color: orange;
    border-radius: 5px;
}
</style>