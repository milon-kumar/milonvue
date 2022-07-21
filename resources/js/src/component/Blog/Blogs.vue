<template>

    <section id="blogSection">
        <div class="container">
            <div class="blogHeading">
                <h2>Read And Explore Our More  <font class="fontColor">Blog</font> Here</h2>
            </div>
            <div class="row">

                <h1 myNameText = "This is a Text for props" ></h1>
                <single-blog>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, repellendus.</p>
                </single-blog>
                <single-blog>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, porro!</p>
                </single-blog>
                <single-blog>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, veritatis.</p>
                </single-blog>
                <single-blog>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima.</p>
                </single-blog>
            </div>
        </div>
    </section>
</template>

<script>
    import SingleBlog from "./SingleBlog.vue"

    export default {
        components:{
            SingleBlog
        }
    }
</script>

