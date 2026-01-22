import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Book } from './book/book';
import { Contact } from './contact/contact';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path: 'book',component:Book},
    {path: 'contact',component:Contact}
];
