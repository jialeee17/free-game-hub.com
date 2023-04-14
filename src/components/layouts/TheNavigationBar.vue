<template>
    <nav class="navbar navbar-expand-lg navbar-light px-3">
        <router-link to="/" class="navbar-brand">FreeGameHub.com</router-link>

        <!-- Hamburger Menu (Mobile) -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Games</a>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#">Recommendations (Comming Soon)</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 d-flex gap-2">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success btn-search my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
    background: rgba(33, 34, 51, 0.9);

    .navbar-brand {
        color: #6842FF;
        font-size: 1.5rem;
        // text-shadow: -0.5px -0.5px 0 #ffffff;
    }

    .navbar-nav {
        .nav-item {
            .nav-link {
                color: #ffffff;
            }
        }
    }

    form {

        input {
            &[type="search"] {
                background: rgb(55, 57, 82);
                border: none;
                border-radius: 1.875rem;
            }
        }

        .btn {
            &.btn-search {
                background: #6842FF;
                border: none;
                border-radius: 1.875rem;
                color: #ffffff;
            }
        }
    }
}
</style>