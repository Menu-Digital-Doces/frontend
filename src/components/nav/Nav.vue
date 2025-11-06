<script>
export const isLogged = ref(false);

</script>

<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/solid";
import { ShoppingCartIcon, Bars3Icon, Battery50Icon } from "@heroicons/vue/24/outline";
import { ref, onMounted, onUnmounted, watchEffect, reactive } from "vue";
import Avisos from "../modals/Avisos.vue";
import CarrinhoModal from "../modals/CarrinhoModal.vue";
import CentralDoUsuario from "../modals/CentralDoUsuario.vue";
import Login from "../modals/Login.vue";
import Cadastro from "../modals/Cadastro.vue";
import axios from "axios";

const name = localStorage.getItem("name");

var menuOn = ref(true);
// var isLogged = ref(false)

const activeComponent = reactive({
  avisos: false,
  cart: false,
  login: false,
  userCentral: false,
  cadastro: false,
});



/* menu */

function toggleMenu() {
  menuOn.value = !menuOn.value;
  for (let element in activeComponent) {
    activeComponent[element] = false;
  }
}
function toggleMenuOnResizeScreen() {
  const widthScreen = window.innerWidth;
  if (widthScreen > 768) {
    menuOn.value = true;
  } else {
    menuOn.value = false;
  }
}

onMounted(() => {
  toggleMenuOnResizeScreen();
  window.addEventListener("resize", toggleMenuOnResizeScreen);

  if (localStorage.getItem("token") !== null) {
    isLogged.value = true;
  }
});
onUnmounted(() => {
  window.removeEventListener("resize", toggleMenuOnResizeScreen);
});

function changeActiveComponent(component) {
  const widthScreen = window.innerWidth;

  for (let element in activeComponent) {
    element === component
      ? (activeComponent[element] = !activeComponent[element])
      : (activeComponent[element] = false);
  }

  if (widthScreen < 768 && menuOn.value === true) {
    menuOn.value = false;
  }
}

function changeLoginCadastro(component) {
  if (component === "login") {
    activeComponent["cadastro"] = true;
    activeComponent["login"] = false;
  } else {
    activeComponent["login"] = true;
    activeComponent["cadastro"] = false;
  }
}

function verifyIsLogged() {
  // return isLogged.value === true ? 'userCentral' : 'login'

  if (isLogged.value === true) {
    return "userCentral";
  } else if (activeComponent.cadastro === true) {
    return "cadastro";
  }
  return "login";
}

function changeIsLogged() {
  isLogged.value = !isLogged.value;
}

function logout() {
  axios
    .request({
      method: "POST",
      url: "/logout",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      changeIsLogged();
    })
    .catch((error) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      changeIsLogged();
    });
}

</script>

<template>
  <nav id="nav">
    <a href="#"
      >
      <RouterLink :to="{name: 'home'}">
        <img src="@/assets/logo.png" alt="logo confeitaria da cris"/>

      </RouterLink>
    </a>
    <ul v-show="menuOn" class="userRoute">
      <li>
        <a href="#"
          ><RouterLink
            style="color: black"
            :to="{name: 'home'}"
            @click="changeActiveComponent('')"
            >Home</RouterLink
          ></a
        >
      </li>
      <li>
        <a href="#"
          ><RouterLink
            style="color: black"
            :to="{name: 'catalogo'}"
            @click="changeActiveComponent('')"
            >Catalogo</RouterLink
          ></a
        >
      </li>
      <li>
        <a
          href="#"
          style="color: black"
          @click.prevent="changeActiveComponent('avisos')"
          >Avisos</a
        >
      </li>
      <li id="nav-icons">
        <a href="#" @click.prevent="changeActiveComponent('cart')"
          ><ShoppingCartIcon class="icone"
        /></a>
      </li>
      <li id="nav-icons">
        <a href="#" @click.prevent="changeActiveComponent(verifyIsLogged())"
          ><UserCircleIcon class="icone"
        /></a>
      </li>
            
    </ul>
    <div class="adminRoute">
      <li>
        <a href="#"
          ><RouterLink :to="{name: 'gestao-de-pedidos'}" @click="changeActiveComponent('')"
            >Gestão de pedidos</RouterLink
          ></a
        >
      </li>
      <li>
        <a href="#"
          ><RouterLink :to="{name: 'gestao-de-estoque'}" @click="changeActiveComponent('')"
            >Gestão de estoque</RouterLink
          ></a
        >
      </li>
    </div>
    <div class="adminRoute">
      <li>Olá, {{ name }}!</li>
      <li>
        <RouterLink href="" @click.prevent="logout()" :to="{name: 'login'}"
          >Sair</RouterLink
        >
      </li>
    </div>
    <div class="adminLoginRoute">
      <li>Painel do administrador</li>
    </div>
    <span id="menu-btn" @click="toggleMenu"><Bars3Icon class="icone" /></span>
  </nav>

  <Avisos
    v-if="activeComponent.avisos"
    v-bind:change-active-component="() => changeActiveComponent('avisos')"
  ></Avisos>
  <CarrinhoModal
    v-if="activeComponent.cart"
    v-bind:change-active-component="() => changeActiveComponent('cart')"
  ></CarrinhoModal>

  <!-- Componentes que alternarão se o usuário estiver logado ou não -->
  <!-- <Login v-if="activeComponent.login" v-bind:change-active-component="() => changeActiveComponent('login')"></Login> -->
  <Login
    v-if="activeComponent.login"
    v-bind:="{
      changeActiveComponent: () => changeActiveComponent('login'),
      changeLoginCadastro: () => changeLoginCadastro('login'),
      changeIsLogged: () => changeIsLogged(),
    }"
  ></Login>
  <Cadastro
    v-if="activeComponent.cadastro"
    v-bind:="{
      changeActiveComponent: () => changeActiveComponent('cadastro'),
      changeLoginCadastro: () => changeLoginCadastro('cadastro'),
    }"
  ></Cadastro>
  <CentralDoUsuario
    v-if="activeComponent.userCentral"
    v-bind:="{
      changeActiveComponent: () => changeActiveComponent('userCentral'),
      changeIsLogged: () => changeIsLogged(),
    }"
  ></CentralDoUsuario>
</template>

<style lang="scss">
#menu-btn {
  display: none;
}
.icone {
  color: $preto;
  width: 24px;
  height: 24px;
}

nav {
  background-color: $branco;
  height: 60px;
  padding: $padding;
  color: $preto;
  box-shadow: 0px 2px 10px -5px $preto;
  @include flex(row, space-between, center);
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;

  img {
    width: 60px;
  }

  ul {
    @include flex(row, space-between, center);

    a {
      padding: 0 12px;
      font-weight: lighter;
      font-size: 0.9rem;
      display: flex;
    }

    a:hover {
      background-color: $cinza-claro;
      height: 60px;
      align-items: center;
      align-self: center;
      transition: 0.3s;
    }

    a:visited {
      color: $preto;
    }
  }

  div.adminRoute {
    display: none;
  }
  div.adminLoginRoute {
    display: none;
  }

  &.loginADM{
    ul.userRoute{
        display: none;
    }
    div.adminLoginRoute{
        display: initial;
        li{
            font-weight: 200;

        }
    }
  }

  &.menuADM {
    ul {
      &.userRoute {
        display: none;
      }
    }
    div.adminRoute {
      display: initial;

      @include flex(row, space-between, center);
      gap: 48px;

      li,
      a {
        color: $preto;
        font-weight: 100;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #menu-btn {
    display: block;
  }

  nav {
    ul {
      background-color: $branco;
      position: absolute;
      width: calc(100% - 100px);
      height: 400px;
      left: 50px;
      top: 100px;
      padding: 50px;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid $preto;
      border-radius: 20px;

      a:hover {
        background-color: $cinza-claro;
        height: initial;
        background-color: initial;
        display: initial;
        display: block;
        transition: 0.3s;
      }
    }
  }
}
</style>
