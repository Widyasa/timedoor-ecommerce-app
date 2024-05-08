<script setup>

import HomeNavbar from '@/components/Navs/HomeNavbar.vue'
import router from '@/router/index.js'
import { useStore } from 'vuex'
const store = useStore()
const logout = async () => {
  store.commit("auth/setUserLogout")
  await router.push("/auth/login")
}
</script>

<template>
<HomeNavbar />
<RouterView />
  <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Are you sure want to logout from vintage?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="logout" type="button" class="btn  btn-danger" data-bs-dismiss="modal">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>