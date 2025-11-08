<script>
export const isLogged = ref(false);

</script>

<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/solid";
import { ShoppingCartIcon, Bars3Icon, Battery50Icon } from "@heroicons/vue/24/outline";
import { ref, onMounted, onUnmounted, watchEffect, reactive, computed } from "vue";
import Avisos from "../modals/Avisos.vue";
import CarrinhoModal from "../modals/CarrinhoModal.vue";
import CentralDoUsuario from "../modals/CentralDoUsuario.vue";
import Login from "../modals/Login.vue";
import Cadastro from "../modals/Cadastro.vue";
import axios from "axios";
import { toggleTheme, useTheme } from "@/general/useTheme";
import Logo from "@/general/logo.vue";



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



// 2. Use o composable para obter o tema atual
const { currentTheme } = useTheme();

// 3. Crie a propriedade computada que define se o toggle está "ativo" (ligado)
//    O toggle estará ativo (true) se o tema for 'dark'.
const isToggleActive = computed(() => currentTheme.value === 'dark');

// 4. Crie a propriedade computada para a classe de tema (exatamente como antes)
//    Isso vai adicionar 'theme-light' ou 'theme-dark' ao elemento do toggle.
const themeClass = computed(() => {
  return currentTheme.value === 'dark' ? 'theme-dark' : 'theme-light';
});

</script>

<template>
  <nav id="nav">
    <a href="#"
      >
      <RouterLink :to="{name: 'home'}">
        <Logo></Logo>

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
             

      
      
      <label 
              class="toggle-switch" 
              :class="themeClass" 
              @click.prevent="toggleTheme"  
            >
              <!-- 
                O @click agora chama 'toggleTheme' DIRETAMENTE.
                Não precisamos mais de 'set' ou 'v-model'.
              -->
              <div class="toggle-track" :class="{ 'is-active': isToggleActive }">
                <!-- 
                  A classe 'is-active' é controlada pela computada 'isToggleActive',
                  garantindo que o visual do toggle (bolinha deslizada) esteja
                  sempre sincronizado com o tema atual.
                -->
                <div class="toggle-thumb"></div>
              </div>
            </label> 
    </ul>
    <div v-show="menuOn" class="adminRoute">
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
    <div v-show="menuOn" class="adminRoute">
      <li>Olá, {{ name }}!</li>
      <li>
        <RouterLink href="" @click.prevent="logout()" :to="{name: 'login'}"
          >Sair</RouterLink
        >
      </li>
            <label 
            class="toggle-switch" 
            :class="themeClass" 
            @click.prevent="toggleTheme"  
          >
            <!-- 
              O @click agora chama 'toggleTheme' DIRETAMENTE.
              Não precisamos mais de 'set' ou 'v-model'.
            -->
            <div class="toggle-track" :class="{ 'is-active': isToggleActive }">
              <!-- 
                A classe 'is-active' é controlada pela computada 'isToggleActive',
                garantindo que o visual do toggle (bolinha deslizada) esteja
                sempre sincronizado com o tema atual.
              -->
              <div class="toggle-thumb"></div>
            </div>
          </label> 
    </div>
    <div class="adminLoginRoute">
      <li>Painel do administrador</li>
      <label 
            class="toggle-switch" 
            :class="themeClass" 
            @click.prevent="toggleTheme"  
          >
            <!-- 
              O @click agora chama 'toggleTheme' DIRETAMENTE.
              Não precisamos mais de 'set' ou 'v-model'.
            -->
            <div class="toggle-track" :class="{ 'is-active': isToggleActive }">
              <!-- 
                A classe 'is-active' é controlada pela computada 'isToggleActive',
                garantindo que o visual do toggle (bolinha deslizada) esteja
                sempre sincronizado com o tema atual.
              -->
              <div class="toggle-thumb"></div>
            </div>
          </label> 
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
  color: var(--preto);
  width: 24px;
  height: 24px;
}

nav {
  background-color: var(--branco);
  height: 60px;
  padding: $padding;
  color: var(--preto);
  box-shadow: 0px 2px 10px -5px var(--preto);
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
      color: var(--preto) !important;
    }

    a:hover {
      background-color: var(--cinza-claro);
      height: 60px;
      align-items: center;
      align-self: center;
      transition: 0.3s;
    }

    a:visited {
      color: var(--preto);
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
        display: flex;
        gap: 12px;
        align-items: center;

        li{
            font-weight: 100;
            font-size: 14px;
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
          gap: 20px;


      li,
      a {
        color: var(--preto);
        font-weight: 100;
      }
    }
  }
}

nav.loginADM #menu-btn,
nav.menuADM #menu-btn {
  display: none !important;
}

@media screen and (max-width: 768px) {
  #menu-btn {
    display: block;
  }

  nav {
    ul, .adminRoute {
      background-color: var(--branco);
      position: absolute;
      width: calc(100% - 100px);
      height: 400px;
      left: 50px;
      top: 100px;
      padding: 50px;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);
      border-radius: 30px;

      a:hover {
        background-color: var(--cinza-claro);
        height: initial;
        background-color: initial;
        display: initial;
        display: block;
        transition: 0.3s;
      }
    }

    .adminRoute{
      flex-direction: column !important;
      justify-content: center !important;
    }
  }
}




.toggle-switch {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.toggle-track, .toggle-thumb {
  transition: all 0.3s ease-in-out;
}

.toggle-track {
  /* --- NOVAS MEDIDAS --- */
  width: 30px;
  height: 16px;
  border-radius: 8px; /* Metade da altura (16px / 2) */
  position: relative;
}

.toggle-thumb {
  /* --- TAMANHO E POSIÇÃO RECALCULADOS --- */
  width: 12px;   /* Um bom tamanho para a nova altura */
  height: 12px;  /* Mantém o círculo perfeito */
  border-radius: 50%;
  position: absolute;
  
  /* 
    CÁLCULO DA CENTRALIZAÇÃO:
    (Altura da Pista - Altura da Bolinha) / 2
    (16px - 12px) / 2 = 2px
    Isso centraliza a bolinha verticalmente.
  */
  top: 1px;
  left: 2px;
  
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* Sombra ainda mais sutil */
}

/* --- Estilos de Tema (sem alterações, apenas herdam os novos tamanhos) --- */
.toggle-switch.theme-light .toggle-track {
  background-color: #E9E9EA;
  border: 1px solid #E0E0E0;
}
.toggle-switch.theme-light .toggle-thumb {
  background-color: #FFFFFF;
}
.toggle-switch.theme-light .toggle-track.is-active {
  background-color: #34C759;
}

.toggle-switch.theme-dark .toggle-track {
  background-color: #39393D;
  border: 1px solid #4A4A4A;
}
.toggle-switch.theme-dark .toggle-thumb {
  background-color: #1C1C1E;
  border: 1px solid #545458;
}
.toggle-switch.theme-dark .toggle-track.is-active {
  background-color: var(--fundo2);
}

/* --- LÓGICA DO DESLIZE (RECALCULADA) --- */
.toggle-track.is-active .toggle-thumb {
  /* 
    CÁLCULO DO DESLIZE:
    Largura da Pista - Largura da Bolinha - Espaçamento da Esquerda
    40px - 12px - 2px = 26px
  */
  transform: translateX(12px);
}

</style>
