import Home from '../components/home';
import Sort from '../components/sort';
import Cart from '../components/cart';
import My from '../components/my';
import NotFind from '../components/404'
import Login from '../components/login'
import New from '../components/new'
import Chou from '../components/chou'
import Detail from '../components/newdetail'
export const router = [
    {
        path: '/home',
        component: Home
    },
    {
        path: "/sort",
        component: Sort
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/my",
        component: My
    },
    {
        path: "/404",
        component: NotFind
    },
    {
        path: "/login",
        component: Login
    },
    {
        path:'/detail',
        component:Detail
    }
]

export const subrouter = [
    {
        path: '/sort/new',
        component: New
    },
    {
        path: '/sort/chou',
        component: Chou
    }
]
