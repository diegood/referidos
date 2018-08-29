<template>
    <div class="login text-center">
        <form class="form-signin" data-op-form-id="1">
            <img class="mb-4" src="http://clientes.web4line.com/assets/dist/img/logo.png" alt="" height="100">
            <h1 class="h3 mb-3 font-weight-normal">Ingresar</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Dirección de Email" required="" autofocus="" data-op-id="0">
            <label for="inputPassword" class="sr-only">Contraseña</label>
            <input type="password"  v-model="password" id="inputPassword" class="form-control" placeholder="Contraseña" required="" data-op-id="1">
            <div class="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"> Recordarme
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login">Ingresar</button>
            <p class="mt-5 mb-3 text-muted"><router-link to="/registrar"> crear nueva cuenta</router-link></p>
        </form>
    </div>
</template>
<script>
/* eslint-disable */
    import firebase from 'firebase/app'
    import 'firebase/auth'
    export default {
        name: 'login',
        data: function(){
            return {
                email:'',
                password:''
            };
        },
        methods:{
            login: function(){
                const self = this
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        self.$router.push('/general')
                    },
                    function(err){
                        alert('Error. '+ err.message);
                    }
                )
            }
        }
    }
</script>

<style scoped>

.login {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>

