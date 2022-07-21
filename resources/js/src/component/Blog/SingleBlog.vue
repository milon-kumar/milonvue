<template>
    <div class="col-4 singleBlogItem">
        <div class="singleBlog">
            <div class="img">
                <img src="img/blog3.jpeg" alt="blog One">
            </div>
            <div class="blogContent">
                <h3>Blog Heading</h3>
                <p>
                    <slot></slot>
                </p>
<!--                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate facere magnam sequi!</p>-->
                <small>Crate at 10.30 PM by Raj Dip</small>
                <a href="" class="blogViewBtn">View Blog</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            myNameText : String,
        }

    }
</script>
