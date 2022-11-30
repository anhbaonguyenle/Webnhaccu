<template>
  <div class="container">
  <section class=" text-center text-lg-start">
     
      <div class="card mb-3">
        <div class="row g-0 d-flex align-items-center">
          <div class="col-lg-4 d-none d-lg-flex">
            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/001.jpg" alt="Trendy Pants and Shoes"
              class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"  />
          </div>
          <div class="col-lg-8">
            <div class="card-body py-5 px-md-5">
             
              <form>
                  <h2>Đăng nhập cho người quản trị</h2>
                  
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="tel" id="sdt" class="form-control"  v-model="sdt" placeholder="Số Điện Thoại"/>
                </div>
    
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="pass" class="form-control" v-model="pass" placeholder="Mật Khẩu của bạn"/>
                </div>
    
                <!-- Submit button -->
                <button type="button" v-on:click="login" class="btn btn-primary btn-block mb-4">Đăng nhập</button>
    
              </form>
    
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
    name: 'Login',
    data()
    {
      return {
        sdt: '',
        pass: ''
      }
    },
    methods:{
      async login()
      {
          if(this.sdt == "012345671111"& this.pass =="1234"){
            this.$router.push({name: 'admin'})
          }else{
            this.$router.push({name: '/'});
          } 
        
        console.log(this.sdt,this.pass)
        
      }
    }
};
</script>
<style>
.rounded-t-5 {
border-top-left-radius: 0.5rem;
border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
.rounded-tr-lg-0 {
  border-top-right-radius: 0;
}

.rounded-bl-lg-5 {
  border-bottom-left-radius: 0.5rem;
}
}
</style>