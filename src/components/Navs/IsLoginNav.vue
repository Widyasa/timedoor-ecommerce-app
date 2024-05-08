<script setup>

</script>

<template>
  <div class="d-flex gap-3">
    <div class="d-flex gap-2">
      <button class="nav-icon-button">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.625 24.5C10.5915 24.5 11.375 23.7165 11.375 22.75C11.375 21.7835 10.5915 21 9.625 21C8.6585 21 7.875 21.7835 7.875 22.75C7.875 23.7165 8.6585 24.5 9.625 24.5Z" fill="#616161"/>
          <path d="M21.875 24.5C22.8415 24.5 23.625 23.7165 23.625 22.75C23.625 21.7835 22.8415 21 21.875 21C20.9085 21 20.125 21.7835 20.125 22.75C20.125 23.7165 20.9085 24.5 21.875 24.5Z" fill="#616161"/>
          <path d="M25.0578 6.71016C24.8609 6.42031 24.5656 6.21797 24.2211 6.15234C24.1391 6.13594 24.0516 6.125 23.9641 6.125H7.32266L6.98906 4.22187C6.91797 3.80625 6.55156 3.5 6.125 3.5H2.625C2.14375 3.5 1.75 3.89375 1.75 4.375C1.75 4.85625 2.14375 5.25 2.625 5.25H5.39219L7.89141 19.4031C7.9625 19.8187 8.32891 20.125 8.75547 20.125H22.7555C23.2367 20.125 23.6305 19.7312 23.6305 19.25C23.6305 18.7687 23.2367 18.375 22.7555 18.375H9.48281L9.17656 16.625H22.3945C23.018 16.625 23.5594 16.182 23.6797 15.5695L25.2547 7.69453C25.3203 7.35 25.2547 7 25.0578 6.71016ZM22.0336 14.875H8.86484L7.62891 7.875H23.4281L22.0336 14.875Z" fill="#616161"/>
        </svg>
      </button>
      <button class="nav-icon-button">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 24.5C13.6555 24.5 13.3164 24.3961 13.0156 24.1938C10.9594 22.7992 7.97345 20.6391 5.8297 18.025C3.6422 15.3617 2.5922 12.6219 2.62501 9.65781C2.65783 6.26172 5.38673 3.5 8.7008 3.5C11.3313 3.5 13.0758 5.11328 14 6.28906C14.9242 5.11328 16.6688 3.5 19.2992 3.5C22.6133 3.5 25.3367 6.26172 25.375 9.65781C25.4024 12.6219 24.3578 15.3617 22.1703 18.025C20.0266 20.6391 17.0406 22.7992 14.9844 24.1938C14.6836 24.4016 14.3445 24.5 14 24.5ZM8.7008 5.25C6.34376 5.25 4.40236 7.23516 4.37501 9.67969C4.31486 15.4 9.20939 19.5016 14 22.75C18.7906 19.4961 23.6852 15.4 23.625 9.67969C23.5977 7.24063 21.6617 5.25 19.2992 5.25C16.3461 5.25 14.793 8.23594 14.782 8.26875C14.6344 8.56406 14.3336 8.75 14 8.75C13.6664 8.75 13.3656 8.56406 13.218 8.26328C13.2016 8.23594 11.6485 5.25 8.7008 5.25Z" fill="#616161"/>
        </svg>
      </button>
    </div>
    <div class="d-flex gap-3 align-items-center">
      <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="/img/Avatar.png" alt="">
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Order</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><div class="dropdown-item">
            <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#logoutModal">
              Logout
            </button>
          </div></li>
        </ul>
      </div>
      <svg width="1" height="36" viewBox="0 0 1 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="-2.18557e-08" x2="0.500002" y2="36" stroke="#EDEDED"/>
      </svg>
      <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          EN
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-menu{
  left: -20px !important;
}
</style>