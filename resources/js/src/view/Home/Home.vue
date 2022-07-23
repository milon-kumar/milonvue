<template>

    <!--Header Section-->
<!--        <navbar></navbar>-->
    <!--Header Section-->
    <!--    Heor Section-->
    <section id="hero">
        <div class="container">
            <div class="">
                <div class="heroContent">
                    <h1>Welcome<font class="fontColor"> to </font>my Site</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, tempora!</p>
                </div>
            </div>
        </div>
    </section>
    <!--    Heor Section-->

<!--    Language Section -->
        <language></language>
<!--    Language Section -->

<!--    Counter Section-->
<!--        <counter></counter>-->
<!--    Counter Section-->



    <!--    my work section -->
            <work-menu></work-menu>
    <!--    my work section -->



    <!--    Wrok Section Menu-->
            <work></work>
    <!--    Wrok Section Menu-->


    <!--    blog section -->
            <blog></blog>
    <!--    blog section -->

    <!--Gallery Section-->
            <gallery></gallery>
    <!--Gallery Section-->

<!--    Newsletter Section-->
    <Newsletter></Newsletter>
<!--    Newsletter Section-->


    <!--    <hr class="footerBoder">-->

<!--    Footer Section-->
    <Footer></Footer>
<!--    Footer Section-->

</template>

<script>
    // import Navbar from "../../layout/Navbar.vue"
    import Language from "../../component/Language/Language.vue"
    import Counter from "../../component/Counter/Counter.vue"
    import WorkMenu from "../../component/Work/WorkMenu.vue"
    import Work from "../../component/Work/Work.vue"
    import Blog from "../../component/Blog/Blogs.vue"
    import Gallery from "../../component/Gallery/Gallery.vue"
    import Newsletter from "../../layout/Newsletter.vue"
    import Footer from "../../layout/Footer.vue"
    export default {
        components:{
            // Navbar,
            Language,
            Counter,
            WorkMenu,
            Work,
            Blog,
            Gallery,
            Newsletter,
            Footer,
        }
    }
</script>
