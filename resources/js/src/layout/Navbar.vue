<template>
    <header>
        <div class="headderWrape">
            <div class="headder">
                <div class="logo">
                    <a href="">
                        <!--                        <img class="logoImg" src="img/logo.png" alt="">-->
                        <h2>MIL<font class="fontColor">O</font>N</h2>
                    </a>
                </div>
                <nav class="menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
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
