<template>
    <header>
        <div class="headderWrape">
            <div class="headder">
                <div class="logo">
                    <router-link :to="{name:'Home'}">
                        <!--                        <img class="logoImg" src="img/logo.png" alt="">-->
                        <h2>MIL<font class="fontColor">O</font>N</h2>
                    </router-link>
                </div>
                <nav class="menu">
                    <ul>
                        <li>
                            <router-link :to="{name:'Home'}">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/about">Data Center</router-link>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <router-link to="/backend">Dashboard</router-link>
                        </li>

                        <li>
                            <router-link to="/registration">Registration</router-link>
                        </li>
                        <li>
                            <router-link to="/login">Login</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>

</script>
