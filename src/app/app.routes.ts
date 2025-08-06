import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginUsuarioComponent } from './component/usuario/login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './component/usuario/registro-usuario/registro-usuario.component';
import { autenticaGuard } from './guards/autentica.guard';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { loginCanMatchGuard } from './guards/login-can-match.guard';

export const routes: Routes = [

    { path: "home", component: HomeComponent },

    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "nosotros", component: NosotrosComponent },

    { path: "productos", component: ProductosComponent, canActivate: [autenticaGuard] },

    //Usuario

    { path: "login", component: LoginUsuarioComponent, canMatch: [loginCanMatchGuard]  },

    { path: "registro", component: RegistroUsuarioComponent, canDeactivate: [registroUsuarioGuard] },



    { path: "**", component: Error }

];
