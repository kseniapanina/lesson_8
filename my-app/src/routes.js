import {AuthLayout} from "./loyouts/auth"
import {MainLayout} from "./loyouts/main"
import Home  from './components/Home';
import  About from './components/About';
import  Users  from './components/Users';
import  Login from './components/Login';

export const routes = [
    {
      path: "/auth",
      component: AuthLayout,
      routes: [
        {
          path: "/auth/login",
          component: Login
        },
      
      ]
    },
    {
        path: "*",
        component: MainLayout,
        routes: [
          {
            path: "/users",
            component: Users
          },
          {
            path: "/about",
            component: About
          },
          {
            path: "/",
            component: Home
          },
        
        ]
      }
  ];